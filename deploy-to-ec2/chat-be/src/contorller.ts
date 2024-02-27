import type { Request, Response} from 'express'

class Controller {
    constructor(){ }

    testApi(req: Request, res: Response){
        res.send({
            message: 'success'
        })
    }
}

export default new Controller()