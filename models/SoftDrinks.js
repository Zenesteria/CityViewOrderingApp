import mongoose from "mongoose";


const SoftDrinksSchema = new mongoose.Schema({
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
        default: ['chilled','contains sugar','carbonated']
    },
    category:{
        type:String,
        default: 'Beverage'
    },
    status:{
        type:String,
        required: true
    },
    imgs:{
        type:[String],
        maxlength:2,
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



export default mongoose.models.SoftDrinks || mongoose.model("SoftDrinks", SoftDrinksSchema)