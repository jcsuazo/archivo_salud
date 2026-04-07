<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const steps = [
		{
			n: 1,
			title: 'Diagnóstico',
			text: 'Analizamos el proceso, archivo o necesidad prioritaria.',
			icon: 'search' as const,
		},
		{
			n: 2,
			title: 'Diseño',
			text: 'Definimos la solución más útil según documentos, flujos y capacidades.',
			icon: 'layout' as const,
		},
		{
			n: 3,
			title: 'Piloto',
			text: 'Construimos una prueba controlada sobre un subconjunto real.',
			icon: 'flask' as const,
		},
		{
			n: 4,
			title: 'Implementación',
			text: 'Desplegamos la solución por fases con acompañamiento técnico.',
			icon: 'rocket' as const,
		},
		{
			n: 5,
			title: 'Escalado',
			text: 'Extendemos la herramienta a nuevas áreas o procesos.',
			icon: 'chart' as const,
		},
	];
</script>

<SeoHead
	title="Cómo trabajamos | ArchivoSalud"
	description="Metodología gradual para centros de salud en RD: diagnóstico, diseño, piloto, implementación y escalado de soluciones de IA clínica y de archivo."
/>

<PageHero
	eyebrow="Metodología"
	title="Una metodología simple, gradual y adaptada a cada centro"
	description="Acompañamos a su institución desde el primer análisis hasta el despliegue sostenible, sin saltarse etapas ni imponer soluciones genéricas."
	ctaText="Solicitar diagnóstico inicial"
	ctaHref="/contacto"
/>

<section class="relative bg-white py-14 sm:py-20 lg:py-28 overflow-hidden">
	<div
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.08),transparent)]"
		aria-hidden="true"
	></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-2xl mb-14 sm:mb-20 animate-fade-in-up">
			<SectionHeading
				eyebrow="El proceso"
				title="Cinco etapas claras, con entregables medibles"
				description="Cada fase reduce riesgo y asegura que la tecnología encaje en su operación real, no solo en un documento de proyecto."
			/>
		</div>

		<!-- Desktop horizontal rail -->
		<div class="hidden xl:flex justify-between gap-2 mb-16 max-w-5xl mx-auto px-2">
			{#each steps as step, i}
				<div class="flex flex-1 items-center min-w-0">
					<div class="flex flex-col items-center text-center flex-1 group cursor-default">
						<div
							class="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-medical to-medical-dark text-white text-sm font-extrabold shadow-lg shadow-medical/30 ring-4 ring-white z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
						>
							{step.n}
						</div>
						<p
							class="mt-3 text-[11px] font-bold uppercase tracking-wider text-muted line-clamp-2 leading-tight px-1"
						>
							{step.title}
						</p>
					</div>
					{#if i < steps.length - 1}
						<div
							class="h-0.5 flex-1 min-w-[12px] mx-1 mt-[-2.25rem] self-start bg-gradient-to-r from-medical/50 via-health/40 to-medical/30 rounded-full"
							aria-hidden="true"
						></div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="relative max-w-4xl mx-auto">
			<ul class="space-y-0 relative">
				{#each steps as step, i}
				<li
					class="relative flex flex-col sm:flex-row gap-6 sm:gap-10 pb-16 sm:pb-20 last:pb-0 group animate-fade-in-up"
					style="animation-delay: {i * 80}ms;"
				>
					{#if i < steps.length - 1}
						<div
							class="absolute left-[1.375rem] sm:left-8 top-[1.75rem] sm:top-[2.125rem] bottom-0 w-px sm:w-0.5 bg-gradient-to-b from-medical via-health to-medical/20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300 z-[4]"
							aria-hidden="true"
						></div>
						<div
							class="absolute left-[1.375rem] sm:left-8 -translate-x-1/2 top-[1.75rem] sm:top-[2.125rem] bottom-0 w-3 sm:w-4 blur-md bg-gradient-to-b from-medical/30 via-health/20 to-transparent opacity-60 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
							aria-hidden="true"
						></div>
						<div
							class="absolute left-[1.375rem] sm:left-8 top-[1.75rem] sm:top-[2.125rem] bottom-0 w-px sm:w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden z-[5]"
							aria-hidden="true"
						>
							<div class="absolute inset-0 rounded-full bg-gradient-to-b from-medical via-health/70 to-transparent"></div>
							<div
								class="absolute inset-x-0 h-1/3 rounded-full bg-gradient-to-b from-transparent via-white/60 to-transparent"
								style="animation: line-flow-down 1.8s ease-in-out infinite;"
							></div>
						</div>
					{/if}
					<div class="flex sm:block items-start gap-5 sm:w-36 flex-shrink-0">
							<div
								class="relative z-10 flex h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem] items-center justify-center rounded-2xl bg-gradient-to-br from-medical via-medical to-medical-dark text-white shadow-xl shadow-medical/25 ring-4 ring-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-2xl group-hover:shadow-medical/35"
							>
								<span
									class="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-health text-[11px] font-extrabold text-white shadow-md ring-2 ring-white"
								>
									{step.n}
								</span>
								{#if step.icon === 'search'}
									<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
										/>
									</svg>
								{:else if step.icon === 'layout'}
									<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25H15.75a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
										/>
									</svg>
								{:else if step.icon === 'flask'}
									<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
										/>
									</svg>
								{:else if step.icon === 'rocket'}
									<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 011.921-8.56M15.59 14.37l-1.39 1.39M9.631 8.41l-1.39-1.39m0 0L6.5 9.5m2.741-2.09L4.5 4.5m2.741 2.09L9.5 6.5"
										/>
									</svg>
								{:else}
									<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
										/>
									</svg>
								{/if}
							</div>
							<div class="sm:hidden flex-1 min-w-0 pt-1">
								<p class="text-xs font-semibold uppercase tracking-wider text-medical">Paso {step.n}</p>
								<h3 class="mt-1 text-xl font-bold text-deep font-[family-name:var(--font-heading)]">{step.title}</h3>
							</div>
						</div>

						<div class="relative z-10 flex-1 min-w-0 sm:pt-1">
							<div
								class="rounded-2xl border border-border/90 bg-gradient-to-br from-white via-light/30 to-surface/40 p-6 sm:p-8 shadow-sm transition-all duration-300 group-hover:border-medical/25 group-hover:shadow-2xl group-hover:shadow-deep/[0.06] group-hover:-translate-y-0.5"
							>
								<p class="hidden sm:block text-xs font-semibold uppercase tracking-wider text-medical mb-2">Paso {step.n}</p>
								<h3 class="hidden sm:block text-2xl font-bold text-deep font-[family-name:var(--font-heading)] mb-3">
									{step.title}
								</h3>
								<p class="text-muted leading-relaxed text-base sm:text-lg sm:hidden">{step.text}</p>
								<p class="hidden sm:block text-muted leading-relaxed text-lg">{step.text}</p>
								{#if i < steps.length - 1}
									<div class="mt-6 flex items-center gap-2 text-sm font-semibold text-medical-dark/90">
										<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
										</svg>
										Siguiente etapa
									</div>
								{/if}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="bg-surface py-14 sm:py-20 lg:py-24 border-y border-border relative overflow-hidden">
	<div
		class="absolute top-1/2 right-0 w-[min(50vw,28rem)] h-[min(50vw,28rem)] bg-health/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"
		aria-hidden="true"
	></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<div class="animate-fade-in-up">
				<SectionHeading
					eyebrow="Compromiso"
					title="Ajustamos el ritmo a su institución"
					description="Hospitales y clínicas tienen cargas operativas distintas. Priorizamos entregas incrementales, capacitación y métricas que su equipo pueda supervisar."
				/>
			</div>
			<div class="grid sm:grid-cols-2 gap-4 animate-fade-in-up animation-delay-200">
				<div
					class="group rounded-2xl bg-white border border-border p-7 hover:border-health/30 hover:shadow-xl hover:shadow-deep/[0.04] hover:-translate-y-0.5 transition-all duration-300"
				>
					<div class="w-11 h-11 rounded-xl bg-health/10 flex items-center justify-center text-health mb-4 transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="font-bold text-deep font-[family-name:var(--font-heading)] text-lg">Sin sorpresas</h3>
					<p class="mt-2 text-sm text-muted leading-relaxed">
						Alcance y cronograma acordados por fases, con revisiones explícitas.
					</p>
				</div>
				<div
					class="group rounded-2xl bg-white border border-border p-7 hover:border-medical/30 hover:shadow-xl hover:shadow-deep/[0.04] hover:-translate-y-0.5 transition-all duration-300"
				>
					<div class="w-11 h-11 rounded-xl bg-medical/10 flex items-center justify-center text-medical mb-4 transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.645-5.903-1.76a3 3 0 01-1.341-1.615c-.11-.33-.172-.665-.172-1.01V12.5"
							/>
						</svg>
					</div>
					<h3 class="font-bold text-deep font-[family-name:var(--font-heading)] text-lg">Equipo involucrado</h3>
					<p class="mt-2 text-sm text-muted leading-relaxed">
						Archivo clínico, TI y dirección participan en decisiones clave.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<CtaBanner
	title="¿Listo para el primer paso? Solicite un diagnóstico inicial sin compromiso."
	buttonText="Solicitar diagnóstico inicial"
	buttonHref="/contacto"
/>
