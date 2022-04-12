<script context="module">
	export async function load({ params, fetch }) {
        const url = `/api/cars?slug=${params.slug}`;
        const res = await fetch(url);
        const car = await res.json();

        return {props: {car}};
	}
</script>

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
    <title>Hello {car.name}</title>
</svelte:head>

<p style="--text-color: {car.color}">{car.name}</p>
<img src={car.image} alt="" />