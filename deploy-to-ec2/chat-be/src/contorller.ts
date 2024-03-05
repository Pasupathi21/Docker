import type { Request, Response} from 'express'
import { UserCollection } from './model/user'

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
}

export default new Controller()