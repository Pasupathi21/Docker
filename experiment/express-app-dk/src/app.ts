import express from 'express'
import { getRoutes } from './controller'
import * as mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.use(getRoutes())

app.use((req, res, nxt) => res.status(404).json({ "message": "Not Found" }))

const database_url: string = process.env.DATABASE_URL || ''
const db: string = process.env.DB || '' 
console.log("Env",process.env.NODE_ENV)
const connection_str = `${database_url}/${db}`
console.log(connection_str)
mongoose.connect(connection_str).then(m => console.log('DB connection initiated')).catch(e => console.log('DB connection error', e))

const port = process?.env?.PORT || 1122
app.listen(port, () => {
    console.log("App up & running on port", port)
})