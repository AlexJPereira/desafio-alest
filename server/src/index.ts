import express from 'express'
import config from './config'
import routes from './routes'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(config.server.port, ()=>console.log(`servidor iniciado na porta ${config.server.port}`))
