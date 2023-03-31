import { Router } from 'express'
import { userManager } from '../managers/user.manager.js'


export const webRouter =  Router()

webRouter.get('/', async(req, res) => {
    const users = await userManager.getUsers()
 
    res.render("home.handlebars", { titulo: "Home", hayusers: users.length >0, users })
})

webRouter.get('/users', async (req, res) => {
    
    res.render("users.handlebars", { titulo: "Home", contenido: "content Home" })
})