import softdrinks from '../../../models/SoftDrinks';
import dbConnect from '../../../util/mongo';


export default async function handler(req,res){
    const {method} = req;

    dbConnect();

    switch(method){
        case 'GET':
            try {
                const softdrinksdata = await softdrinks.find();
                res.status(200).json(softdrinksdata);
            } catch (err) {
                res.status(500).json(err)
            }
        case 'POST':
            try {
                const softdrinkdata = await softdrinks.create(req.body);
                res.status(201).json(softdrinkdata)
            } catch (err) {
                res.status(500).json(err)
            }
    }
}