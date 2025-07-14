"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const express_1 = require("express");
class Controller {
    constructor() { }
    async liveness(req, res) {
        res.json({
            "message": "App is running"
        });
    }
    async getData(req, res) {
        return res.send({
            "message": "working..."
        });
    }
}
const controller = new Controller();
const getRoutes = () => {
    const appRoute = (0, express_1.Router)();
    appRoute.get("/api/liveness", controller.liveness);
    appRoute.get('/api/get-data', controller.getData);
    return appRoute;
};
exports.getRoutes = getRoutes;
