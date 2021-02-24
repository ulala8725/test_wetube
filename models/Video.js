import mongoose from "mongoose";

// Schema : define validation of data
const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String, // save link only
        required: "File URL is required"
    },
    title: {
        type: String, // save link only
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now // mongoose's function for returning current date
    },
    comments: [   
        {
            type: mongoose.Schema.Types.ObjectId, // every Schema has ObjectId
            ref: "Comment"                        // model's name
        }
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

// Model: create database(name, schema)
const model = mongoose.model("Video", VideoSchema);

export default model;