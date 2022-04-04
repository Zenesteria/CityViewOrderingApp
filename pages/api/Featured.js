import dbConnect from '../../util/mongo'
import featureds from '../../models/Featured'



export default async function handler(req,res){

    const {method} = req

    dbConnect()

    switch(method){
        case "GET":
            try {
                const featured = await featureds.find();
                return res.status(200).json(featured);
            } catch (err) {
                return res.status(500).json(err);
            }
        case "POST":
            try {
                const featured = await featureds.create(req.body);
                res.status(201).json(featured);
                
            } catch (err) {
                res.status(500).json(err);
            }
    }
}


