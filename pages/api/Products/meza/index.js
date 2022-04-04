import mezas from '../../../../models/Meza';
import dbConnect from '../../../../util/mongo';


export default async function handler(req,res){
    const {method} = req;

    dbConnect();

    switch(method){
        case 'GET':
            try {
                const mezasdata = await mezas.find();
                return res.status(200).json(mezasdata);
            } catch (err) {
                return res.status(500).json(err)
            }
        case 'POST':
            try {
                const mezasdata = await mezas.create(req.body);
                return res.status(201).json(mezasdata)
            } catch (err) {
                return res.status(500).json(err)
            }
    }
}