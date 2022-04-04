import mongoose from "mongoose";


const MezaSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        maxlength: 60
    },
    desc:{
        type:String,
        required: true,
        maxlength: 200
    },
    tags:{
        type:[String],
        default: ['warm','rich','cal']
    },
    category:{
        type:String,
        default: 'Traditional Meza'
    },
    status:{
        type:String,
        required: true
    },
    imgs:{
        type:[String],
        maxlength:5,
        minlength:2,
        required:true
    },
    prices:{
        type:[Number],
        required:true
    },
    extraOptions:{
        type:[{text:{type:String, required:true}, price:{type:Number, required:true}}]
    }
},{timestamps:true}
);



export default mongoose.models.Meza || mongoose.model("Meza", MezaSchema)