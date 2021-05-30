import express from 'express'
import cors from 'cors'

import config from './config'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(config.server.port, ()=>console.log(`servidor iniciado na porta ${config.server.port}`))
