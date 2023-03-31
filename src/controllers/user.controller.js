import { Users } from "../entidades/users.js"
import { userManager } from "../managers/user.manager.js"


export const createUser  = async(req, res)=> {
    const usuario = new Users(req.body)
    const newUser = await userManager.saveUser(usuario.datos())

    res.json({
        status: true,
        data: newUser
    })
}