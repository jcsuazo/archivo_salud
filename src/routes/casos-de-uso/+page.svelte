<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const cases = [
		{
			title: 'De un cuarto lleno de expedientes a una base consultable',
			description:
				'Pasamos de volúmenes físicos difíciles de rastrear a un repositorio estructurado: captura, OCR, índice y consulta en segundos con trazabilidad institucional.',
			icon: 'archive' as const,
		},
		{
			title: 'Resumen automático de historial clínico',
			description:
				'Antes de la consulta o el comité, el equipo recibe una síntesis asistida del expediente —siempre bajo revisión humana y políticas de su centro.',
			icon: 'document' as const,
		},
		{
			title: 'Detección de documentos faltantes',
			description:
				'Alertas tempranas sobre expedientes incompletos para archivo y calidad, con listas accionables antes de auditorías o altas.',
			icon: 'shield' as const,
		},
		{
			title: 'Búsqueda por condición o criterio clínico',
			description:
				'Localice cohortes o historiales que cumplen criterios específicos sobre su propio corpus, con búsqueda semántica e híbrida y control por rol.',
			icon: 'search' as const,
		},
	] as const;
</script>

<SeoHead
	title="Casos de uso | ArchivoSalud"
	description="Casos de uso de IA en salud en RD: expedientes consultables, resúmenes clínicos, documentos faltantes y búsqueda por criterios. ArchivoSalud."
/>

<PageHero
	eyebrow="Impacto operativo"
	title="Casos de uso"
	description="Ejemplos concretos de cómo centros de salud transforman archivo, tiempo clínico y cumplimiento con soluciones diseñadas para su contexto."
	ctaText="Conversemos sobre su caso"
	ctaHref="/contacto"
/>

<section class="relative bg-white py-14 sm:py-20 lg:py-28 overflow-hidden">
	<div
		class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-6xl h-72 bg-gradient-to-b from-medical/[0.07] to-transparent rounded-[100%] blur-2xl"
		aria-hidden="true"
	></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center max-w-3xl mx-auto mb-16 sm:mb-20 animate-fade-in-up">
			<SectionHeading
				centered
				eyebrow="Resultados"
				title="Del problema diario a un flujo más claro"
				description="Cada implementación se adapta a su volumen, normativa y recursos. Estas son familias de soluciones que orientan nuestros proyectos."
			/>
		</div>

		<div class="grid sm:grid-cols-2 gap-6 lg:gap-8">
			{#each cases as item, i}
				<article
					class="group relative flex flex-col rounded-2xl border border-border bg-white p-8 sm:p-9 shadow-[0_1px_3px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-deep/[0.08] hover:border-medical/20 animate-fade-in-up"
					style="animation-delay: {100 + i * 100}ms;"
				>
					<div
						class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-medical via-health to-medical-dark opacity-90 group-hover:opacity-100 transition-opacity"
					></div>
					<div
						class="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-medical/[0.12] to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"
						aria-hidden="true"
					></div>

					<div class="relative flex items-start gap-5">
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-medical/15 to-health/10 text-medical shadow-sm ring-1 ring-medical/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:ring-medical/25 group-hover:shadow-lg group-hover:shadow-medical/10"
						>
							{#if item.icon === 'archive'}
								<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
									/>
								</svg>
							{:else if item.icon === 'document'}
								<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
									/>
								</svg>
							{:else if item.icon === 'shield'}
								<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
									/>
								</svg>
							{:else}
								<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
							{/if}
						</div>
						<div class="min-w-0 flex-1 pt-0.5">
							<span
								class="inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-muted"
							>
								Caso {i + 1}
							</span>
							<h3
								class="mt-4 text-lg sm:text-xl font-bold text-deep font-[family-name:var(--font-heading)] leading-snug group-hover:text-medical-dark transition-colors duration-300"
							>
								{item.title}
							</h3>
							<p class="mt-4 text-muted leading-relaxed text-base">{item.description}</p>
						</div>
					</div>

					<div
						class="relative mt-8 flex items-center gap-2 text-sm font-semibold text-medical-dark opacity-100 sm:opacity-0 translate-y-1 group-hover:translate-y-0 transition-all duration-300 sm:group-hover:opacity-100"
					>
						<span class="h-px flex-1 max-w-12 bg-gradient-to-r from-medical/40 to-transparent"></span>
						<span class="shrink-0">Explorar en consultoría</span>
						<svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="bg-surface py-16 sm:py-20 border-t border-border">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up animation-delay-300">
		<p class="text-lg text-muted leading-relaxed">
			Si su necesidad no encaja exactamente en estos ejemplos, podemos enmarcarla en un <strong class="text-deep font-semibold">piloto acotado</strong>. Lo
			importante es partir de un problema medible.
		</p>
	</div>
</section>

<CtaBanner
	title="Cuéntenos su operación: diseñamos el caso de uso a la medida de su centro."
	buttonText="Conversemos sobre su caso"
	buttonHref="/contacto"
/>
