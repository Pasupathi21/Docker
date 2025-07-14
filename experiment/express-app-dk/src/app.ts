import express from 'express'
import { getRoutes } from './controller'

const app = express()

app.use(express.json())

app.use(getRoutes())

app.use((req, res, nxt) => res.status(404).json({ "message": "Not Found" }))

const port = process?.env?.PORT || 1122
app.listen(port, () => {
    console.log("App up & running on port", port)
})