import type { Request, Response} from 'express'
import { UserCollection } from './model/user'
import { Chat } from './model/chat'
import mongoose from 'mongoose'

class Controller {
    constructor(){ }

    testApi(req: Request, res: Response){
        res.send({
            message: 'success'
        })
    }

    async listUser(req: Request, res: Response){
        let query = {}
        if(req.query?.query){
            query = query 
        }
        const list = await UserCollection.find(query)
        res.send(list)
    }

    async createUser(req: Request, res: Response){
        const payload = req.body
        const createRes = await UserCollection.create(payload)
        res.send(createRes)
    }

    async loginChat(req: Request, res: Response){
        const payload = req.body
        const getUser = await UserCollection.findOne({
            email: payload?.email
        })
        if(!getUser){
            return res.send({
                status: false,
                message:'Invalid log credential'
            })
        }
        res.send({
            status: true,
            message: 'login success',
            data: getUser
        })
    }

    async postMessage(req: Request, res: Response){
        const payload = req.body
        console.log('payload >>>>>>>>>>>', req.body)
        const posted = await Chat.create({
            ...payload
        })
        
        res.send({
            status: true,
            message: 'message sended',
            data: posted
        })
    }

    async getMessageHistory(req: Request, res: Response){
        const payload = req.body
        console.log('getMessageHistory >>>>', payload)
        const getMsgList = await Chat.aggregate([
            {
                $match:{
                    from : new mongoose.Types.ObjectId(payload?.from) ,
                    to : new mongoose.Types.ObjectId(payload?.to), 
                }
            },
            {
                $lookup: {
                    from: 'users',
                    foreignField: '_id',
                    localField: 'from',
                    as: 'from',
                    pipeline: [
                        {
                            $project: {
                                username: 1
                            }
                        }
                    ]
                }
            },
            {
                $lookup: {
                    from: 'users',
                    foreignField: '_id',
                    localField: 'to',
                    as: 'to',
                    pipeline: [
                        {
                            $project: {
                                username: 1
                            }
                        }
                    ]
                }
            },
            {
                $addFields: {
                    from: { $first: '$from'},
                    to: { $first: '$to'}
                }
            }
        ])
        //  = await Chat.find({
        //     from: payload?.from,
        //     to: payload?.to
        // })
        
        res.send({
            status: true,
            message: 'list getted',
            data: getMsgList
        })
    }
}

export default new Controller()