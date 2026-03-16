





export class Controller {
    constructor(cycles = []) {
        this.cycles = cycles
        this.index = 0
    }

    setCycles(cycles) {
        this.cycles = cycles
    }

    start() {

    }

    subscribe(callback) {
        callback(this.cycles[this.index])
    }
}