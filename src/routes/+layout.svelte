<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<a
	href="#contenido-principal"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-deep focus:rounded-lg focus:shadow-lg focus:ring-2 focus:ring-medical focus:font-semibold"
>
	Saltar al contenido
</a>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main id="contenido-principal" class="flex-1 flex flex-col">
		{@render children()}
	</main>
	<Footer />
</div>
