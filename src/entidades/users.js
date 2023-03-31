export class Users {
    #nombre
    #apellido 
    #compania
    constructor ({nombre, apellido, compania}) {
        this.#nombre = nombre
        this.#apellido = apellido
        this.#compania = compania
    }

    get nombre() {
        return this.#nombre
    }
    get apellido() {
        return this.#apellido
    }
    get compania() {
        return this.#compania
    }

    datos() {
        return {
            nombre: this.#nombre,
            apellido: this.#apellido,
            compania: this.#compania,
        }
    }
}