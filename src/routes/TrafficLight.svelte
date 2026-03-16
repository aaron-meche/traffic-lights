<!-- created by Aaron Meche -->
<script>


    let { status } = $props()

</script>

<!--  -->

<div class="device">
    <div class="color red {status == 0 ? "active" : ""}"></div>
    <div class="color yellow {status == 0 ? "active" : ""}"></div>
    <div class="color green {status == 1 ? "active" : ""}"></div>
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
</style>