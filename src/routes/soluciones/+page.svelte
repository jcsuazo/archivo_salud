<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const solutions = [
		{
			href: '/soluciones/digitalizacion-inteligente',
			title: 'Digitalización inteligente',
			tagline: 'Del papel al dato estructurado',
			description:
				'Transforme volúmenes de historias clínicas y documentos administrativos en información buscable, clasificada y lista para integrarse a sus flujos.',
			features: [
				'Escaneo y captura masiva',
				'Clasificación y extracción con IA',
				'Organización por paciente o episodio',
			],
			iconBg: 'bg-medical/10 text-medical',
			icon: 'scan',
		},
		{
			href: '/soluciones/expediente-clinico-inteligente',
			title: 'Expediente clínico inteligente',
			tagline: 'Contexto clínico al instante',
			description:
				'Resúmenes, cronologías y alertas sobre el contenido real del expediente —no solo metadatos— para apoyar la consulta y la continuidad asistencial.',
			features: [
				'Resúmenes de historial',
				'Cronología de estudios y eventos',
				'Detección de documentación faltante',
			],
			iconBg: 'bg-health/10 text-health-dark',
			icon: 'clipboard',
		},
		{
			href: '/soluciones/automatizacion-administrativa',
			title: 'Automatización administrativa',
			tagline: 'Menos fricción operativa',
			description:
				'Revise formularios, valide expedientes y orqueste seguimientos con reglas y asistencia inteligente, sin sacrificar supervisión humana.',
			features: [
				'Validación y enrutamiento',
				'Alertas y recordatorios',
				'Paquetes documentales coherentes',
			],
			iconBg: 'bg-violet-500/10 text-violet-600',
			icon: 'automation',
		},
		{
			href: '/soluciones/analitica-busqueda',
			title: 'Analítica y búsqueda',
			tagline: 'Decisiones apoyadas en su propio archivo',
			description:
				'Explore patrones, volúmenes y cohortes a partir de la documentación clínica y administrativa, con gobernanza y trazabilidad.',
			features: [
				'Búsqueda semántica avanzada',
				'Métricas de archivo y productividad',
				'Priorización de digitalización',
			],
			iconBg: 'bg-teal-500/10 text-teal-600',
			icon: 'analytics',
		},
		{
			href: '/soluciones/soluciones-a-medida',
			title: 'Soluciones a medida',
			tagline: 'Diseñado para su institución',
			description:
				'Co-diseñamos flujos, integraciones y prioridades según su cartera de servicios, su ARS o su modelo de atención.',
			features: [
				'Descubrimiento y talleres',
				'Integración con sistemas existentes',
				'Roadmap por fases',
			],
			iconBg: 'bg-amber-500/10 text-amber-700',
			icon: 'custom',
		},
	] as const;
</script>

<SeoHead
	title="Soluciones | ArchivoSalud"
	description="Soluciones de inteligencia artificial para digitalización de archivos, expediente clínico, automatización administrativa, analítica y proyectos a medida en República Dominicana."
/>

<PageHero
	eyebrow="Soluciones"
	title="Soluciones de IA para procesos clínicos y administrativos"
	description="Unifique archivo físico y digital, acelere la consulta clínica y libere a su equipo de tareas repetitivas —con enfoque en seguridad, trazabilidad y resultados medibles en centros de salud dominicanos."
	ctaText="Hablar con un especialista"
	ctaHref="/contacto"
/>

<section class="relative py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
	<div class="absolute top-0 right-0 w-[min(100%,28rem)] h-64 bg-gradient-to-bl from-medical/[0.07] to-transparent rounded-full blur-3xl pointer-events-none"></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			eyebrow="Portafolio"
			title="Cinco formas de potenciar su operación"
			description="Cada solución puede implementarse de forma modular o combinarse en un plan integral según su madurez digital y sus prioridades."
		/>
		<div class="mt-10 sm:mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
			{#each solutions as item}
				<a
					href={item.href}
					class="group relative flex flex-col rounded-2xl border border-border bg-light/40 p-6 sm:p-8 shadow-sm shadow-deep/[0.03] transition-all duration-300 hover:border-medical/25 hover:shadow-xl hover:shadow-medical/[0.08] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-medical focus-visible:ring-offset-2"
				>
					<div
						class="flex h-14 w-14 items-center justify-center rounded-xl {item.iconBg} transition-transform duration-300 group-hover:-translate-y-0.5"
					>
						{#if item.icon === 'scan'}
							<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						{:else if item.icon === 'clipboard'}
							<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
							</svg>
						{:else if item.icon === 'automation'}
							<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						{:else if item.icon === 'analytics'}
							<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
							</svg>
						{:else}
							<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
							</svg>
						{/if}
					</div>
					<div class="mt-6 flex items-start justify-between gap-4">
						<div class="min-w-0">
							<p class="text-xs font-semibold uppercase tracking-wider text-medical">{item.tagline}</p>
							<h3 class="mt-2 text-xl font-extrabold text-deep font-[family-name:var(--font-heading)] leading-snug group-hover:text-medical-dark transition-colors">
								{item.title}
							</h3>
						</div>
						<span
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white text-muted transition-all group-hover:border-medical/30 group-hover:bg-medical/5 group-hover:text-medical"
						>
							<svg class="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
							</svg>
						</span>
					</div>
					<p class="mt-4 text-muted leading-relaxed flex-1">{item.description}</p>
					<ul class="mt-6 space-y-2.5">
						{#each item.features as feat}
							<li class="flex items-center gap-2.5 text-sm text-deep/90">
								<span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-health/15 text-health-dark">
									<svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
										<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
									</svg>
								</span>
								<span class="min-w-0">{feat}</span>
							</li>
						{/each}
					</ul>
					<div class="mt-8 pt-6 border-t border-border/80 flex items-center text-sm font-semibold text-medical group-hover:gap-2 transition-all">
						<span>Ver solución</span>
						<svg class="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="py-14 sm:py-20 lg:py-24 bg-surface border-y border-border">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<div>
				<SectionHeading
					eyebrow="Enfoque"
					title="IA aplicada con criterio clínico y operativo"
					description="No se trata solo de tecnología: priorizamos interoperabilidad, roles y permisos, y acuerdos claros con su equipo de calidad y TI."
				/>
				<ul class="mt-8 space-y-4">
					{#each ['Alineación con políticas internas y normativa aplicable', 'Sesiones de descubrimiento con líderes clínicos y administrativos', 'Indicadores acordados antes de escalar el piloto'] as line}
						<li class="flex gap-3 text-muted">
							<span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white border border-border text-medical">
								<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
								</svg>
							</span>
							<span class="min-w-0 leading-relaxed">{line}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="relative rounded-2xl border border-border bg-white p-6 sm:p-8 lg:p-10 shadow-lg shadow-deep/[0.04]">
				<div class="absolute -top-3 -right-3 h-24 w-24 rounded-full bg-gradient-to-br from-medical/20 to-health/10 blur-2xl"></div>
				<p class="relative text-sm font-semibold uppercase tracking-wider text-medical">Resultados que buscamos</p>
				<p class="relative mt-4 text-2xl font-extrabold text-deep font-[family-name:var(--font-heading)] leading-tight">
					Menos tiempo buscando información. Más tiempo para el paciente.
				</p>
				<p class="relative mt-4 text-muted leading-relaxed">
					Las soluciones se diseñan para medir impacto en productividad, completitud documental y experiencia del personal —sin comprometer la privacidad.
				</p>
			</div>
		</div>
	</div>
</section>

<CtaBanner
	title="¿Listo para definir el siguiente paso en su centro de salud?"
	buttonText="Agendar una consulta"
	buttonHref="/agenda"
/>
