<script>
    import Component from "./Component.svelte";

    let counter = 0;

    function add() {
        counter++
    }
</script>

<Component>
</Component>

<h1>{counter}</h1>
<button on:click={add}>Click</button>

