<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ maxage: 1000, props: { url } });
</script>

<script>
	import Nav from '../components/navbar.svelte';

	import PageTransition from '../components/PageTransition.svelte';
	export let url;
</script>

<Nav />

<h1>SugarCars</h1>

<PageTransition {url}>
    <!-- Main data -->
	<slot />
</PageTransition>
