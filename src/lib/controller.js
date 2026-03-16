





export class Controller {
    #lights = {}
    #cycles = []
    #index = 0
    #count = 0
    #subscribers = new Set()
    cycle = []

    // Handle Subscriptions

    subscribe(callback) {
        this.#subscribers.add(callback)
        callback([...this.cycle])
        return () => this.#subscribers.delete(callback)
    }

    #notify() {
        for (const callback of this.#subscribers) callback([...this.cycle])
    }

    // Controller Configuration

    setLights(lights) {
        this.#lights = lights
    }

    setCycles(cycles) {
        this.#cycles = cycles
        this.cycle = cycles[this.#index]
    }

    // Action Functions

    #transition() {
        let transitionCycle = ""
        for (let i = 0; i < this.cycle.length; i++) {
            if (this.cycle[i] > 0) transitionCycle += "9"
            else transitionCycle += "0"
        }
        this.cycle = transitionCycle
        this.#notify()
    }

    #goCycle(index) {
        this.#index = index
        this.cycle = this.#cycles[index]
        this.#notify()
    }

    nextCycle() {
        this.#transition()
        setTimeout(() => {
            this.cycle = "0000"
            setTimeout(() => {
                this.#index++;
                this.#index %= this.#cycles.length
                this.#goCycle(this.#index)
            }, 500)
        }, 2000)
    }
}