import feedbacks from '../../models/Feedback';
import dbConnect from '../../util/mongo'


export default async function handler(req,res){
    const {method} = req;

    dbConnect()

    switch(method){
        case 'GET':
            try {
                const feedbackdata = await feedbacks.find()
                res.status(200).json(feedbackdata);
            } catch (err) {
                res.status(500).json(err)
            }
        case 'POST':
            try {
                const feedbackdata = await feedbacks.create(req.body);
                res.status(201).json(feedbackdata);
            } catch (err) {
                res.status(500).json(err);
            }
    }
}

