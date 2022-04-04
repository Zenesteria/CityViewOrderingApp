import dbConnect from '../../../../util/mongo'
import mezas from '../../../../models/Meza'


export default async function handler(req,res){
    const {
        method, 
        query:{id}
    } = req;
    
    dbConnect()

    switch(method){
        case "GET":
            try {
                const meza = await mezas.findById(id);
                return res.status(200).json(meza);
            } catch (err) {
                return res.status(500).json(err);
            }
        case "PUT":
            try {
                const meza = await mezas.create(req.body);
                return res.status(201).json(meza);
                
            } catch (err) {
                return res.status(500).json(err);
            }
        case "DELETE":
            try {
                const meza = await mezas.create(req.body);
                return res.status(201).json(meza);
                
            } catch (err) {
                return res.status(500).json(err);
            }
    }
}