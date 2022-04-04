import dbConnect from '../../../util/mongo'
import Soups from '../../../models/Soups'


export default async function handler(req,res){
    const {method} = req;
    
    dbConnect()

    switch(method){
        case "GET":
            try {
                const soups = await Soups.find();
                res.status(200).json(soups);
            } catch (err) {
                res.status(500).json(err);
            }
        case "POST":
            try {
                const soup = await Soups.create(req.body);
                res.status(201).json(soup);
                
            } catch (err) {
                res.status(500).json(err);
            }
    }
}