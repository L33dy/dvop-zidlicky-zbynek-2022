<script>
    import Counter from "./Counter.svelte";

    let user = { loggedIn: false }

    function toggle() {
        user.loggedIn = !user.loggedIn
    }
</script>

<main>
    {#if user.loggedIn}
        <h1>User Environment</h1>

        <Counter></Counter>

        <button on:click={toggle}>
            Log Out
        </button>

    {:else}

        <button on:click={toggle}>
            Log In
        </button>
    {/if}
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        width: 100%;
        height: 100vh;
    }

    button {
        cursor: pointer;

        background-color: #637aff;

        width: 135px;
        height: 52px;

        border-radius: 8px;
        border: none;

        transition: 200ms;

        color: white;

        font-size: 1.2rem;
    }

    button:hover {
        background-color: #4756bb;
    }
</style>