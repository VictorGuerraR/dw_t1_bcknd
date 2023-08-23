import { Router } from 'express';
import * as ejemplos from './ejemplos.js'

const routes = new Router()

routes.get('/', ejemplos.get_algo)
routes.get('/add', ejemplos.get_add_estudiante)
routes.post('/add', ejemplos.post_algo)
routes.patch('/', ejemplos.patch_algo)
routes.delete('/', ejemplos.delete_algo)


export default routes;