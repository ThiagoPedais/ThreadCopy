import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
    id: { type: String, require },
    username: { type: String, require, unique: true },
    name: { type: String, require },
    image: String,
    bio: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    threads: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thread",
        },
    ],
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

const Community =
    mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;
