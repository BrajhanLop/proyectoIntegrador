import { Router } from 'express'
import { createUser } from '../controllers/user.controller.js'


export const apiRouter =  Router()

apiRouter.post('/createuser', createUser)