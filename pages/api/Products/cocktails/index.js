import cocktails from '../../../../models/Cocktails';
import dbConnect from '../../../../util/mongo';


export default async function handler(req,res){
    const {method} = req;

    dbConnect();

    switch(method){
        case 'GET':
            try {
                const cocktailsdata = await cocktails.find();
                return res.status(200).json(cocktailsdata);
            } catch (err) {
                return res.status(500).json(err)
            }
        case 'POST':
            try {
                const cocktailsdata = await cocktails.create(req.body);
                return res.status(201).json(cocktailsdata)
            } catch (err) {
                return res.status(500).json(err)
            }
    }
}