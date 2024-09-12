import mongoose from 'mongoose';
const connection = {};
const dbConnect = async () => {
    //doing like that because if page reload new connection need not to be establish
    if (connection.connected) {
        console.log('Existing connection');
        return;
    }
    try {
        const db = await mongoose.connect('mongodb+srv://dark:darkrino@cluster0.jeqnbtu.mongodb.net/blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        connection.connected = db.connections[0].readyState;
    }
    catch (err) { console.log(err, 2) }
}

export default dbConnect;