import mongoose, { Schema} from 'mongoose'

const chatSchema = new mongoose.Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    message: {
        type: String,
    }
}, { timestamps: true })

export const Chat = mongoose.model('chat', chatSchema)