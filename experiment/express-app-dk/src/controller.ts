import express, { Request, Response, Router } from 'express'
class Controller {
    constructor(){}
    async liveness(req: Request, res: Response) {
        res.json({
            "message": "App is running"
        })
    }

    async getData(req: Request, res: Response) {
        return res.send({
            "message": "working..."
        })
    }
}

const controller = new Controller()
export const getRoutes = (): Router => {
    const appRoute = Router()
    appRoute.get("/api/liveness", controller.liveness)
    appRoute.get('/api/get-data', controller.getData)

    return appRoute
}