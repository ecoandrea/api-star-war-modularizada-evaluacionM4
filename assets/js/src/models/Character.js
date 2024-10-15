export default class Character {
    #id
    #name
    #height
    #mass

    constructor(id, name, height, mass) {
        this.#id = id;  
        this.#name = name;
        this.#height = height;
        this.#mass = mass;
    }

    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get height() {
        return this.#height;
    }
    get mass() {
        return this.#mass;
    }

    get allProperties() {
        return {
            id: this.#id,
            name: this.#name,
            height: this.#height,
            mass: this.#mass
        };
    }
}


