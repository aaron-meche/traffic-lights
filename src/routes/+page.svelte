<!-- created by Aaron Meche -->
<script>
    import TrafficLight from "./TrafficLight.svelte";
    import { Controller } from "$lib/controller"

    let controller = new Controller([
        [1, 0, 0, 1],
        [0, 1, 1, 0]
    ])
    let status = [0, 0, 0, 0]
    controller.subscribe(cycle => {
        status = cycle
    })
</script>

<!--  -->

<div class="grid">
    <div></div>
    <div class="cell">
        <TrafficLight status={status[0]} />
        <TrafficLight status={status[0]} />
        <TrafficLight status={status[0]} />
    </div>
    <div></div>
    <div class="cell">
        <TrafficLight status={status[1]} />
    </div>
    <div></div>
    <div class="cell">
        <TrafficLight status={status[2]} />
    </div>
    <div></div>
    <div class="cell">
        <TrafficLight status={status[3]} />
        <TrafficLight status={status[3]} />
        <TrafficLight status={status[3]} />
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

</style>