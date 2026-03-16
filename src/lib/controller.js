





export class Controller {
    #lights = {}
    #cycles = []
    #index = 0
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
        this.#notify()
    }

    setCycles(cycles) {
        this.#cycles = cycles
        this.#notify()
    }

    // Action Functions

    goCycle(index) {
        this.index = index
        this.cycle = this.#cycles[index]
        this.#notify()
    }
}