import type { Request, Response} from 'express'
import { UserCollection } from './model/user'

class Controller {
    constructor(){ }

    testApi(req: Request, res: Response){
        res.send({
            message: 'success'
        })
    }

    async createUser(req: Request, res: Response){
        const payload = req.body
        const createRes = await UserCollection.create(payload)
        res.send(createRes)
    }
}

export default new Controller()