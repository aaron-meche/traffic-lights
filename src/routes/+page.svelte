<!-- created by Aaron Meche -->
<script>
    import TrafficLight from "./TrafficLight.svelte";
    import { Controller } from "$lib/controller"

    // General  1000 8
    // Straight 0010 2
    // St+Right 0011 3

    let controller = new Controller()
    let lights = [
        "378 W General",
        "378 W LeftTurn",
        "378 W Straight",
        "378 W RightTurn", // 0000 0011 0-3
        "378 E General",
        "378 E LeftTurn",
        "378 E Straight",
        "378 E RightTurn",
        "PF N General",
        "PF N LeftTurn",
        "PF N Straight",
        "PF N RightTurn",
        "PF S General",
        "PF S LeftTurn",
        "PF S Straight",
        "PF S RightTurn",
    ]
    let cycles = [
        "8800",
        "0088",
    ]
    // 8800

    let curr_cycle = $state([])
    
    controller.setLights(lights)
    controller.setCycles(cycles)
    controller.subscribe(cycle => { curr_cycle = cycle; console.log(cycle) })
    setInterval(() => {
        controller.nextCycle()
    }, 5000)
</script>

<!--  -->

<div class="grid">
    <div></div>
    <div class="cell">
        <TrafficLight style="left-turn" status={curr_cycle[2]} />
        <TrafficLight status={curr_cycle[2]} />
        <TrafficLight status={curr_cycle[2]} />
    </div>
    <div></div>
    <div class="cell west">
        <TrafficLight style="left-turn" status={curr_cycle[0]} />
        <TrafficLight status={curr_cycle[0]} />
        <TrafficLight status={curr_cycle[0]} />
        <TrafficLight status={curr_cycle[0]} />
    </div>
    <div></div>
    <div class="cell east">
        <TrafficLight style="left-turn" status={curr_cycle[1]} />
        <TrafficLight status={curr_cycle[1]} />
        <TrafficLight status={curr_cycle[1]} />
        <TrafficLight status={curr_cycle[1]} />
    </div>
    <div></div>
    <div class="cell">
        <TrafficLight style="left-turn" status={curr_cycle[3]} />
        <TrafficLight status={curr_cycle[3]} />
        <TrafficLight status={curr_cycle[3]} />
    </div>
    <div></div>
</div>

<!--  -->

<style>
    .grid{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .cell{
        display: flex;
        align-items: center;
    }

    .west{ rotate: 270deg }
    .east{ rotate: 90deg }

</style>