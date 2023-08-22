import { Router } from 'express';
import * as ejemplos from './ejemplos.js'

const routes = new Router()

routes.get('/', ejemplos.get_algo)
routes.post('/', ejemplos.post_algo)
routes.patch('/', ejemplos.patch_algo)
routes.delete('/', ejemplos.delete_algo)


export default routes;