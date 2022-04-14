import dbConnect from '../../../util/mongo';
import featureds from '../../../models/Featured';

export default async function handler(req,res){

    const {method,
        query: {id}
    } = req;

    dbConnect();

    switch(method){
        case 'GET':
            try {
                const product = await featureds.findById(id)
                return res.status(200).json(product);
            } catch (err) {
                return res.status(500).json(err);
            }
    }
}