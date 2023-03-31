import {Schema, model} from "mongoose";

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        require: true    
    },
    apellido:{
        type: String,
        require: true
    },
    compania: {
        type: String,
        require: true
    }
})

export const Usuario = model('usuario', UsuarioSchema)

