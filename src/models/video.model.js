import mongoose, {mongo, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFole: {
            type: String, // URl
            requried: true,
        },
        thumbnail: {
            type: String, // URl
            requried: true,
        },
        title: {
            type: String, 
            requried: true,
        },
        discription: {
            type: String, 
            requried: true,
        },
        duration: {
            type: Number, // URl
            requried: true,
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)