<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const sectors = [
		{
			href: '/sectores/hospitales-publicos',
			title: 'Hospitales públicos',
			description: 'Soluciones para instituciones con alta carga documental, archivos físicos históricos y procesos rezagados.',
			icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>`
		},
		{
			href: '/sectores/clinicas-privadas',
			title: 'Clínicas privadas',
			description: 'IA para mejorar eficiencia, experiencia del paciente y acceso a la información clínica y administrativa.',
			icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>`
		},
		{
			href: '/sectores/centros-diagnosticos',
			title: 'Centros diagnósticos',
			description: 'Organización de resultados, reportes y documentación de pacientes con inteligencia artificial.',
			icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>`
		},
		{
			href: '/sectores/ars-y-gestion',
			title: 'ARS y gestión de salud',
			description: 'Soluciones para administradoras de riesgos de salud y organizaciones de gestión sanitaria.',
			icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`
		}
	];
</script>

<SeoHead
	title="Sectores | ArchivoSalud"
	description="Soluciones de IA adaptadas a cada tipo de institución de salud: hospitales públicos, clínicas privadas, centros diagnósticos y ARS."
/>

<PageHero
	eyebrow="Sectores"
	title="Soluciones adaptadas a cada tipo de institución"
	description="Cada sector tiene sus propios retos documentales y operativos. Diseñamos herramientas alineadas con su realidad."
/>

<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid sm:grid-cols-2 gap-6 lg:gap-8">
			{#each sectors as sector, i}
				<a
					href={sector.href}
					class="group relative rounded-2xl border border-border bg-white p-6 sm:p-8 lg:p-10 hover:border-medical/30 hover:shadow-xl hover:shadow-medical/10 hover:-translate-y-1 transition-all duration-300"
				>
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-medical/10 to-health/10 text-medical group-hover:-translate-y-0.5 transition-transform duration-300">
						{@html sector.icon}
					</div>
					<h2 class="mt-6 text-xl font-bold text-deep font-[family-name:var(--font-heading)] group-hover:text-medical-dark transition-colors">
						{sector.title}
					</h2>
					<p class="mt-3 text-muted leading-relaxed">{sector.description}</p>
					<span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-medical">
						Explorar sector
						<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<CtaBanner title="¿No está seguro de qué solución aplica a su institución?" buttonText="Conversemos" buttonHref="/contacto" />
