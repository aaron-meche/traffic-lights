<!-- created by Aaron Meche -->
<script>


    let { status, style } = $props()

    let flickerBool = $state(true)
    setInterval(() => {
        flickerBool = !flickerBool
    }, 500)
    


</script>

<!--  -->

<div class="device">
    {#if style == "left-turn"}
    <div class="color ar red-arrow {status >= 0 && status <= 3 ? "active" : ""}"><i class="fa-solid fa-arrow-left"></i></div>
    {:else}
    <div class="color red {status == 0 ? "active" : ""}"></div>
    {/if}

    <div class="color yellow {status == 9 ? "active" : ""}"></div>

    {#if style == "left-turn"}
    <div class="color {flickerBool ? "on": "off"} ar yellow-arrow {status == 8 ? "active" : ""}"><i class="fa-solid fa-arrow-left"></i></div>
    <div class="color ar green-arrow {status >= 4 && status <= 7 ? "active" : ""}"><i class="fa-solid fa-arrow-left"></i></div>
    {:else}
    <div class="color green {status == 8 ? "active" : ""}"></div>
    {/if}

</div>

<!--  -->

<style>
    .device{
        display: inline-grid;
        gap: 0.8rem;
        width: fit-content;
        padding: 1rem;
        margin: auto;
        background: var(--l1);
        border-radius: 100vh;
    }

    .color{
        height: 2rem;
        width: 2rem;
        border-radius: 100vh;
        opacity: 0;
    }

    .color.red{ background: red; }
    .color.yellow{ background: yellow; }
    .color.green{ background: green; }
    .color.active{ opacity: 1; }
    .color.ar{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }
    .color.ar.on{ visibility: visible; }
    .color.ar.off{ visibility: hidden; }
    .color.red-arrow{
        color: red;
    }

    .color.yellow-arrow{
        color: yellow;
    }
    .color.green-arrow{
        color: green;
    }
</style>