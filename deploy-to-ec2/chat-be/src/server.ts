import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { AppRoutes } from './routes'

dotenv.config({ path: `${__dirname}/env/.env.${process.env.NODE_ENV}`})

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())

// initial routes
server.use('/public', express.static('public'))
AppRoutes(server)

// DB
mongoose.connect(`mongodb+srv://${process.env.MONGODB_ROOT_USER}:${process.env.MONGODB_PASSWORD}@cluster0.bf4zl3m.mongodb.net/${process.env.DATABASE}`).then(() => console.log('db connected successfully')).catch(error => console.log('db connection failed'))

const port = process.env.PORT || 7000
server.listen(port, () => {
    console.log(`runnig on port ${port}`)
})