import { Usuario } from "../models/user.models.js";

 class UserManager {
    #usuario
    constructor (){
       this.#usuario =  Usuario
    }

    async saveUser(data) {
      const newUser = await this.#usuario.create(data)
      return newUser
    }

    async getUsers() {
        const users = await this.#usuario.find().lean()
        return users
    }
    async getUserById(id) {
        const user = await this.#usuario.find(id).lean()
        return user
    }
 }

 export const userManager = new UserManager()