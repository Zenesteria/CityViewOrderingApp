import mongoose from "mongoose";

const {Schema} = mongoose;

const SoftDrinkSchema = new Schema({
    title:{
        required:true,
        type:String,
        maxlength:30,
    },
    desc:{
        required:true,
        type:String,
        maxlength:200
    },
    img:{
        required:true,
        type:String,
    },
    prices:{
        type:[Number],
        required:true,
    },
    extraoptions:{
        type:[{text:{type:String, required:true}, price:{type:Number, required:true}}]
    }

},{timestamps:true});

export default mongoose.models.SoftDrinks || mongoose.model('SoftDrinks',SoftDrinkSchema);