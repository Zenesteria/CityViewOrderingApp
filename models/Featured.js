import mongoose from "mongoose";

const {Schema} = mongoose;

const FeaturedSchema = new Schema({
    title:{
        type: String,
        maxlength: 40,
        required: true,
    },
    status:{
        type: String,
        maxlength: 15,
        required: true,
    },
    desc:{
        type: String,
        maxlength: 60,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
}, {timestamps:true})


export default mongoose.models.Featured || mongoose.model('Featured',FeaturedSchema)
