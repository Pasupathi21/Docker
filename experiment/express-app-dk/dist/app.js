"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, controller_1.getRoutes)());
app.use((req, res, nxt) => res.status(404).json({ "message": "Not Found" }));
const port = process?.env?.PORT || 1122;
app.listen(port, () => {
    console.log("App up & running on port", port);
});
