
import Router from 'express'
import Webhook from './controllers/webhook'

const routes = Router()

routes.get('/', Webhook.handler)

export default routes
