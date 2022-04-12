<script>
    export let car;
</script>

<style>
    img {
        max-width: 256px;
    }
	p {
		color: var(--text-color);
	}
</style>

<svelte:head>
    <title>{car.name ? "Hello " + car.name : "Unknown car"}</title>
</svelte:head>

{#if car}
    <p style="--text-color: {car.color}">{car.name}</p>
    <img src={car.image} alt="" />
{/if}