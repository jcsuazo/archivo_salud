<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status === 404 ? 'Página no encontrada' : 'Error'} | ArchivoSalud</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="relative flex-1 flex items-center justify-center bg-gradient-to-b from-light to-white pt-20 pb-20">
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-1/3 right-1/4 w-96 h-96 bg-medical/5 rounded-full blur-3xl"></div>
		<div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-health/5 rounded-full blur-3xl"></div>
	</div>
	<div class="relative max-w-lg mx-auto px-4 text-center">
		<div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-medical/10 to-health/10 mb-8">
			{#if $page.status === 404}
				<svg class="w-10 h-10 text-medical" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
				</svg>
			{:else}
				<svg class="w-10 h-10 text-medical" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
				</svg>
			{/if}
		</div>

		<p class="text-6xl font-extrabold text-deep mb-4 font-[family-name:var(--font-heading)]">
			{$page.status}
		</p>

		{#if $page.status === 404}
			<h1 class="text-2xl font-bold text-deep mb-3 font-[family-name:var(--font-heading)]">
				Página no encontrada
			</h1>
			<p class="text-muted leading-relaxed mb-8">
				La página que busca no existe o fue movida. Verifique la dirección o regrese al inicio.
			</p>
		{:else}
			<h1 class="text-2xl font-bold text-deep mb-3 font-[family-name:var(--font-heading)]">
				Algo salió mal
			</h1>
			<p class="text-muted leading-relaxed mb-8">
				Ocurrió un error inesperado. Por favor intente de nuevo o contáctenos si el problema persiste.
			</p>
		{/if}

		<div class="flex flex-col sm:flex-row items-center justify-center gap-3">
			<a
				href="/"
				class="inline-flex min-h-11 items-center gap-2 px-6 py-3 bg-medical text-white font-semibold rounded-lg hover:bg-medical-dark transition-all shadow-sm shadow-medical/20 hover:shadow-md hover:shadow-medical/30"
			>
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
				</svg>
				Ir al inicio
			</a>
			<a
				href="/contacto"
				class="inline-flex min-h-11 items-center gap-2 px-6 py-3 border border-border text-muted font-semibold rounded-lg hover:text-deep hover:border-deep/20 transition-colors"
			>
				Contactar
			</a>
		</div>
	</div>
</section>
