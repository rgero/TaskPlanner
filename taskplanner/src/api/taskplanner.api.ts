import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3300'
})

instance.interceptors.request.use(
    async (config)=> {
        // This is the attempt we're going to do.
        const userData = await localStorage.getItem("userData");
        
        if (userData)
        {
            const token = JSON.parse(userData).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        // This is the error case if we ever fail.
        return Promise.reject(err);
    }
)

export default instance;