import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import IUser from './interfaces/IUser';

const userSchema:Schema = new Schema<IUser>(
    {
        displayName: {type: String, required: true},
        email: {type:String, required: true},
        password: {type: String, required: true}
    }
)

userSchema.pre('save', function(this:IUser, next){
    if (!this.isModified('password'))
    {
        return next();
    }
    bcrypt.genSalt(10, (err, salt)=> {
        if (err)
        {
            return next(err);
        }

        bcrypt.hash(this.password, salt, (err, hash)=>{
            if (err)
            {
                return next(err);
            }
            this.password = hash;
            next();
        })
    })
})

userSchema.methods.comparePassword = function(this:IUser,candidatePassword:string){
    return new Promise( (resolve, reject)=> {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch)=> {
            if (err || !isMatch)
            {
                return reject(err);
            }
            
            return resolve(true);
        })
    })
}

mongoose.model("User", userSchema);