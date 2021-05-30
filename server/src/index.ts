import express from 'express'
import config from './config'
import routes from './routes'

const app = express()

app.use(routes)
app.listen(config.port, ()=>console.log(`servidor iniciado na porta ${config.port}`))
