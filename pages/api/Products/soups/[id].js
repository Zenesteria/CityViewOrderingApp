import dbConnect from '../../../../util/mongo'
import Soups from '../../../../models/Soups'


export default async function handler(req,res){
    const {
        method, 
        query:{id}
    } = req;
    
    dbConnect()

    switch(method){
        case "GET":
            try {
                const soup = await Soups.findById(id);
                return res.status(200).json(soup);
            } catch (err) {
                return res.status(500).json(err);
            }
        case "PUT":
            try {
                const soup = await Soups.create(req.body);
                return res.status(201).json(soup);
                
            } catch (err) {
                return res.status(500).json(err);
            }
        case "DELETE":
            try {
                const soup = await Soups.create(req.body);
                return res.status(201).json(soup);
                
            } catch (err) {
                return res.status(500).json(err);
            }
    }
}