<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problems = [
		{
			title: 'Archivo físico sin gobierno',
			desc: 'Expedientes acumulados, espacio limitado y riesgo de deterioro o extravío que afecta continuidad asistencial.',
			icon: 'folders'
		},
		{
			title: 'Consultas lentas al historial',
			desc: 'El personal pierde tiempo localizando notas, imágenes y documentos dispersos entre servicios.',
			icon: 'search'
		},
		{
			title: 'Procesos críticos rezagados',
			desc: 'Admisiones, egresos, referencias y reportes dependen de tareas manuales repetitivas.',
			icon: 'clock'
		},
		{
			title: 'Infraestructura heterogénea',
			desc: 'Sistemas de distintas épocas que dificultan una visión única del paciente.',
			icon: 'server'
		},
		{
			title: 'Presión por trazabilidad',
			desc: 'Necesidad de auditoría, cumplimiento y respuesta oportuna a instancias reguladoras.',
			icon: 'shield'
		},
		{
			title: 'Capacidad operativa estirada',
			desc: 'Alta demanda asistencial con los mismos recursos administrativos y de archivo.',
			icon: 'users'
		}
	];

	const solutions = [
		{
			href: '/soluciones/digitalizacion-inteligente',
			title: 'Rescate y digitalización por fases',
			desc: 'Priorizamos volúmenes críticos y avanzamos por etapas acordadas con su realidad presupuestaria y logística.',
			tag: 'Digitalización'
		},
		{
			href: '/soluciones/expediente-clinico-inteligente',
			title: 'Consulta inteligente de expedientes',
			desc: 'Búsqueda semántica y acceso estructurado a la información clínica y administrativa relevante.',
			tag: 'Expediente'
		},
		{
			href: '/soluciones/automatizacion-administrativa',
			title: 'Automatización de procesos críticos',
			desc: 'Flujos de admisión, egreso, reportes y tareas repetitivas con validación y trazabilidad.',
			tag: 'Automatización'
		},
		{
			href: '/soluciones/analitica-busqueda',
			title: 'Analítica sobre su archivo',
			desc: 'Visibilidad de volúmenes, cuellos de botella documentales y oportunidades de mejora.',
			tag: 'Analítica'
		},
		{
			href: '/soluciones/soluciones-a-medida',
			title: 'Ajuste a su infraestructura',
			desc: 'Integraciones y despliegues alineados a redes, políticas de seguridad y sistemas existentes.',
			tag: 'A medida'
		}
	];

	const useCases = [
		{
			title: 'Rescate de historias clínicas por servicio',
			desc: 'Digitalización prioritaria de áreas de mayor flujo o riesgo legal, con control de calidad de imagen y metadatos.'
		},
		{
			title: 'Puesto de consulta en urgencias',
			desc: 'Acceso rápido a resúmenes y documentos clave cuando el tiempo es factor decisivo.'
		},
		{
			title: 'Estandarización de ingresos y egresos',
			desc: 'Menos retrabajo entre enfermería, facturación y archivo al unificar criterios y validaciones.'
		},
		{
			title: 'Soporte a comités y auditoría',
			desc: 'Trazabilidad de versiones y búsqueda orientada a revisiones internas y externas.'
		}
	];
</script>

<SeoHead
	title="Hospitales públicos | Sectores | ArchivoSalud"
	description="Soluciones de IA para hospitales públicos en RD: rescate documental, digitalización por fases, consulta inteligente de expedientes y automatización alineada a su infraestructura."
/>

<PageHero
	eyebrow="Sector público"
	title="Soluciones para hospitales con alta carga documental y procesos rezagados"
	description="Enfoque práctico: partimos del problema de mayor impacto para su institución y avanzamos con entregas medibles, sin sustituir de golpe lo que ya funciona."
	ctaText="Conversemos sobre su realidad operativa"
	ctaHref="/contacto"
/>

<!-- Problems -->
<section class="relative py-14 sm:py-20 lg:py-24 bg-surface overflow-hidden">
	<div class="absolute top-0 right-0 w-72 h-72 bg-medical/5 rounded-full blur-3xl" aria-hidden="true"></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Diagnóstico"
			title="Retos habituales en el hospital con alta demanda"
			description="Reconocemos la complejidad operativa, presupuestaria y tecnológica del sector público. Estos puntos suelen concentrar el dolor documental."
		/>
		<div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each problems as p, i}
				<div
					class="group relative rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm shadow-deep/[0.04] hover:shadow-xl hover:shadow-medical/10 hover:-translate-y-1 hover:border-medical/20 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {Math.min(100 + i * 80, 500)}ms"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-deep to-deep/80 text-white shadow-lg shadow-deep/20 group-hover:-translate-y-0.5 transition-transform duration-300"
					>
						{#if p.icon === 'folders'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
							</svg>
						{:else if p.icon === 'search'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
							</svg>
						{:else if p.icon === 'clock'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						{:else if p.icon === 'server'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0v-.243a2.25 2.25 0 00-1.07-1.916l-7.5-4.615a2.25 2.25 0 00-2.36 0L3.32 16.91a2.25 2.25 0 00-1.07 1.916v.243" />
							</svg>
						{:else if p.icon === 'shield'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
							</svg>
						{:else}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
							</svg>
						{/if}
					</div>
					<h3 class="mt-6 text-lg font-bold text-deep font-[family-name:var(--font-heading)]">{p.title}</h3>
					<p class="mt-3 text-muted leading-relaxed text-[15px]">{p.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Solutions -->
<section class="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-light border-y border-border/60">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Propuesta"
			title="Lo que recomendamos, según su punto de partida"
			description="Cada línea conecta con una solución ArchivoSalud que puede implementarse de forma modular."
		/>
		<div class="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
			{#each solutions as s, i}
				<a
					href={s.href}
					class="group flex flex-col rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm shadow-deep/[0.04] hover:border-medical/35 hover:shadow-xl hover:shadow-medical/[0.12] hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {Math.min(100 + i * 70, 500)}ms"
				>
					<span class="text-xs font-bold uppercase tracking-wider text-medical">{s.tag}</span>
					<h3 class="mt-3 text-xl font-bold text-deep font-[family-name:var(--font-heading)] group-hover:text-medical-dark transition-colors">
						{s.title}
					</h3>
					<p class="mt-3 text-muted leading-relaxed flex-1 text-[15px]">{s.desc}</p>
					<span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-medical">
						Ver solución
						<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Use cases -->
<section class="relative py-14 sm:py-20 lg:py-24 bg-deep text-white overflow-hidden">
	<div class="absolute inset-0 opacity-30" aria-hidden="true">
		<div class="absolute top-1/2 left-1/4 w-96 h-96 bg-medical/20 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-1/4 w-80 h-80 bg-health/15 rounded-full blur-3xl"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="En la práctica"
			title="Casos de uso que ya vemos en hospitales similares"
			description="Ejemplos concretos de cómo la IA y la digitalización ordenada cambian el día a día."
			centered
			light
		/>
		<div class="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
			{#each useCases as u, i}
				<div
					class="group rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6 sm:p-8 hover:bg-white/[0.18] hover:border-medical/50 hover:shadow-lg hover:shadow-medical/15 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {100 + i * 100}ms"
				>
					<div class="flex gap-4">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-medical/20 text-medical font-bold text-sm font-[family-name:var(--font-heading)] transition-transform duration-300 group-hover:-translate-y-0.5">
							{i + 1}
						</div>
						<div class="min-w-0">
							<h3 class="text-lg font-bold text-white font-[family-name:var(--font-heading)]">{u.title}</h3>
							<p class="mt-2 text-white/75 leading-relaxed text-[15px]">{u.desc}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBanner
	title="Planifique el siguiente paso con un enfoque realista sobre archivo, procesos y tecnología."
	buttonText="Conversemos sobre su realidad operativa"
	buttonHref="/contacto"
/>
