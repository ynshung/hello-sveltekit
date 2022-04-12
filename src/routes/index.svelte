<script context="module">
	export async function load({ fetch, params }) {
        const url = `/api/cars`;
        const res = await fetch(url);
        const cars = await res.json();
        return {props: {cars}};
	}
</script>

<script>
    export let cars;
</script>

<svelte:head>
    <title>Hello Cars</title>
</svelte:head>

<p>This is the homepage</p>
<p>Here are my list of cars:</p>
<ul>
    {#each cars as car}
        <li><a href="cars/{car.slug}">{car.name}</a></li>
    {/each}
</ul>

