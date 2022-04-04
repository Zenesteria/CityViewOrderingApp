import dbConnect from '../../../../util/mongo'
import SoftDrinks from '../../../../models/SoftDrinks'


export default async function handler(req,res){
    const {
        method, 
        query:{id}
    } = req;
    
    dbConnect()

    switch(method){
        case "GET":
            try {
                const drink = await SoftDrinks.findById(id);
                return res.status(200).json(drink);
            } catch (err) {
                return res.status(500).json(err);
            }
        case "PUT":
            try {
                const drink = await SoftDrinks.create(req.body);
                return res.status(201).json(drink);
                
            } catch (err) {
                return res.status(500).json(err);
            }
        case "DELETE":
            try {
                const drink = await SoftDrinks.create(req.body);
                return res.status(201).json(drink);
                
            } catch (err) {
                return res.status(500).json(err);
            }
    }
}