import mongoose, { Schema , model} from "mongoose";

const TodoSchema = new Schema(
    {
    title: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
},{ timestamps: true }

) 

export const Todo = mongoose.model('Todo', TodoSchema);