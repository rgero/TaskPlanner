import mongoose, {Schema} from 'mongoose';
import ITask from './interfaces/ITask';

const taskSchema:Schema = new Schema<ITask>(
    {
        ownerID: { type: Schema.Types.ObjectId, ref: 'Child' },
        title: {type:String, required: true},
        description: String,
        date: Date,
        priority: String,
        status: String
    }
)

mongoose.model("Task", taskSchema);