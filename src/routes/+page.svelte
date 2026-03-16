<!-- created by Aaron Meche -->
<script>
    import TrafficLight from "./TrafficLight.svelte";
    import { Controller } from "$lib/controller"

    let controller = new Controller()
    let lights = [
        "378 W LeftTurn",
        "378 W Straight",
        "378 W RightTurn",
        "378 E LeftTurn",
        "378 E Straight",
        "378 E RightTurn",
        "PF N LeftTurn",
        "PF N Straight",
        "PF N RightTurn",
        "PF S LeftTurn",
        "PF S Straight",
        "PF S RightTurn",
    ]
    let cycles = [
        [2, 3, 2, 2, 3, 2, 0, 0, 0, 0, 0, 0]
    ]

    let curr_cycle = $state([])
    
    controller.setLights(lights)
    controller.setCycles(cycles)
    controller.goCycle(0)
    controller.subscribe(cycle => { curr_cycle = cycle; console.log(cycle) })
</script>

<!--  -->

<div class="grid">
    <div></div>
    <div class="cell">
        <TrafficLight status={curr_cycle[lights.indexOf("PF N Straight")]} />
    </div>
    <div></div>
    <div class="cell west">
        <TrafficLight style="left-turn" status={curr_cycle[lights.indexOf("378 W LeftTurn")]} />
        <TrafficLight status={curr_cycle[lights.indexOf("378 W Straight")]} />
        <TrafficLight status={curr_cycle[lights.indexOf("378 W Straight")]} />
    </div>
    <div></div>
    <div class="cell east">
        <TrafficLight style="left-turn" status={curr_cycle[lights.indexOf("378 E LeftTurn")]} />
        <TrafficLight status={curr_cycle[lights.indexOf("378 E Straight")]} />
        <TrafficLight status={curr_cycle[lights.indexOf("378 E Straight")]} />
    </div>
    <div></div>
    <div class="cell">
        <TrafficLight status={curr_cycle[lights.indexOf("PF S Straight")]} />
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