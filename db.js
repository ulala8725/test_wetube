import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config(); // call info from .env file

mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);


export const videoDatas = [
    {
        id:1,
        title: 'fake1',
        description: 'fake data1',
        views:124,
        videoFile:'https://www.youtube.com/watch?v=H-ysMmnHf3Q',
        creator: {
            id: 'kim11',
            name: 'kim',
            email: 'kim@email'
        }
    },
    {
        id:2,
        title: 'fake2',
        description: 'fake data2',
        views:24,
        videoFile:'https://www.youtube.com/watch?v=H-ysMmnHf3Q',
        creator: {
            id: 'lee2211',
            name: 'lee',
            email: 'lee@email'
        }
    },
    {
        id:3,
        title: 'fake3',
        description: 'fake data3',
        views:64,
        videoFile:'https://www.youtube.com/watch?v=H-ysMmnHf3Q',
        creator: {
            id: 'park33',
            name: 'park',
            email: 'park@email'
        }
    },
    {
        id:4,
        title: 'fake4',
        description: 'fake data4',
        views:54,
        videoFile:'https://www.youtube.com/watch?v=H-ysMmnHf3Q',
        creator: {
            id: 'han44',
            name: 'han',
            email: 'han@email'
        }
    }
]