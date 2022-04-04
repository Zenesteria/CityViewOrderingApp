import mongoose from "mongoose";

const {Schema} = mongoose;


const FeedbackSchema = new Schema({
    customer:{
        required:true,
        maxlength:50,
        type:String
    },
    location:{
        maxlength:50,
        type:String,
        default: 'N/A'
    },
    msg:{
        maxlength:300,
        type:String,
        required:true
    }
},{timestamps:true});


export default mongoose.models.Feeback || mongoose.model('Feedback',FeedbackSchema);