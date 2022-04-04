import dbConnect from '../../../../util/mongo'
import Soups from '../../../../models/Soups'


export default async function handler(req,res){
    const {method} = req;
    
    dbConnect()

    switch(method){
        case "GET":
            try {
                const soups = await Soups.find();
                return res.status(200).json(soups);
            } catch (err) {
                return res.status(500).json(err);
            }
        case "POST":
            try {
                const soup = await Soups.create(req.body);
                return res.status(201).json(soup);
                
            } catch (err) {
                return res.status(500).json(err);
            }
    }
}