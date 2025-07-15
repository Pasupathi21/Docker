import express from 'express'
import { getRoutes } from './controller'
import * as mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.use(getRoutes())

app.use((req, res, nxt) => res.status(404).json({ "message": "Not Found" }))

const db_url: string = process.env.DATABASE_URL || ''
console.log("db_url", db_url)
// mongoose.connect(db_url).then(m => console.log('DB connection initiated')).catch(e => console.log('DB connection error', e))

const port = process?.env?.PORT || 1122
app.listen(port, () => {
    console.log("App up & running on port", port)
})