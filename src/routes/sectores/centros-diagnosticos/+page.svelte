<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problems = [
		{
			title: 'Resultados en múltiples formatos',
			desc: 'PDFs, imágenes DICOM, informes de laboratorio y notas manuscritas conviven sin un índice único.',
			icon: 'layers'
		},
		{
			title: 'Tiempos de entrega bajo presión',
			desc: 'El paciente y el médico solicitante esperan rapidez; el cuello de botella suele ser localizar y validar el estudio correcto.',
			icon: 'bolt'
		},
		{
			title: 'Control de versiones del informe',
			desc: 'Adendum, correcciones y nuevas series generan confusión sobre cuál es la versión oficial.',
			icon: 'duplicate'
		},
		{
			title: 'Cadena de custodia documental',
			desc: 'Pruebas externas, muestras y trazabilidad requieren metadatos consistentes y búsqueda confiable.',
			icon: 'link'
		},
		{
			title: 'Picos de demanda estacional',
			desc: 'La capacidad administrativa no escala linealmente con el volumen de estudios del día.',
			icon: 'pulse'
		},
		{
			title: 'Integración con médicos externos',
			desc: 'Compartir hallazgos de forma segura y comprensible consume tiempo si todo es manual.',
			icon: 'share'
		}
	];

	const solutions = [
		{
			href: '/soluciones/digitalizacion-inteligente',
			title: 'Ingesta inteligente de informes',
			desc: 'Clasificación y extracción asistida de datos clave desde informes escaneados o nativos digitales.',
			tag: 'Digitalización'
		},
		{
			href: '/soluciones/expediente-clinico-inteligente',
			title: 'Carpeta del paciente por estudio',
			desc: 'Vista ordenada por tipo de prueba, fecha y estado, lista para consulta clínica o administrativa.',
			tag: 'Expediente'
		},
		{
			href: '/soluciones/analitica-busqueda',
			title: 'Búsqueda transversal',
			desc: 'Encuentre patrones, estudios previos y comparativas sin abrir archivo por archivo.',
			tag: 'Analítica'
		},
		{
			href: '/soluciones/automatizacion-administrativa',
			title: 'Flujos de entrega y notificación',
			desc: 'Automatice pasos repetitivos entre técnico, radiólogo, laboratorio y contacto con el paciente.',
			tag: 'Automatización'
		},
		{
			href: '/soluciones/soluciones-a-medida',
			title: 'Conectores RIS/PACS y LIS',
			desc: 'Arquitectura a medida cuando su centro ya tiene equipamiento y software especializado.',
			tag: 'A medida'
		}
	];

	const useCases = [
		{
			title: 'Imagenología con alto volumen',
			desc: 'Priorización de informes urgentes y resúmenes accesibles para el médico tratante en segundos.',
			icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>`
		},
		{
			title: 'Laboratorio clínico y patología',
			desc: 'Correlación de resultados sueltos en una línea de tiempo clara por paciente y por orden médica.',
			icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>`
		},
		{
			title: 'Centros multidisciplinarios',
			desc: 'Un solo punto de consulta para radiología, cardiología, neurofisiología y estudios de sueño.',
			icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>`
		},
		{
			title: 'Segunda opinión y lectura remota',
			desc: 'Paquetes documentales completos para el especialista, con trazabilidad de accesos.',
			icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>`
		}
	];
</script>

<SeoHead
	title="Centros diagnósticos | Sectores | ArchivoSalud"
	description="IA para centros diagnósticos en RD: organización de resultados, informes y documentación del paciente con búsqueda inteligente y flujos operativos más ágiles."
/>

<PageHero
	eyebrow="Diagnóstico por imagen y laboratorio"
	title="Inteligencia artificial para centros diagnósticos"
	description="Ordenamos resultados, informes y documentación del paciente para que su equipo clínico y administrativo encuentre lo que necesita al instante, con trazabilidad y foco en la calidad del servicio."
	ctaText="Explorar soluciones para su centro"
	ctaHref="/contacto"
/>

<section class="relative py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
	<div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-to-b from-medical/8 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Cuellos de botella"
			title="Problemas típicos cuando el volumen de estudios crece"
			description="Los centros diagnósticos viven de precisión técnica y velocidad percibida. El archivo digital es parte del producto."
			centered
		/>
		<div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each problems as p, i}
				<div
					class="group relative rounded-2xl border border-border bg-surface/50 p-6 sm:p-8 shadow-sm shadow-deep/[0.03] hover:bg-white hover:shadow-xl hover:shadow-medical/[0.15] hover:-translate-y-1 hover:border-medical/30 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {Math.min(100 + i * 80, 500)}ms"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl bg-medical/10 text-medical ring-1 ring-medical/20 group-hover:bg-medical group-hover:text-white group-hover:ring-medical group-hover:-translate-y-0.5 transition-all duration-300"
					>
						{#if p.icon === 'layers'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75l-9.75-5.25m11.142-4.5L12 21.75l-4.179-2.25m0 0L12 18.75l-4.179-2.25" />
							</svg>
						{:else if p.icon === 'bolt'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
							</svg>
						{:else if p.icon === 'duplicate'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9 9 0 019 9zM18.75 17.25H9.375a1.125 1.125 0 01-1.125-1.125V6.75c0-.621.504-1.125 1.125-1.125H18.75" />
							</svg>
						{:else if p.icon === 'link'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
							</svg>
						{:else if p.icon === 'pulse'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5h2.25m13.5 0h2.25M12 3.75v2.25m0 13.5v2.25M6.75 6.75l1.5 1.5m7.5 7.5l1.5 1.5m-10.5 0l1.5-1.5m7.5-7.5l1.5-1.5M9 12h.75m3 0H15m-1.5 3.75h.008v.008H13.5V15.75z" />
							</svg>
						{:else}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.128a2.25 2.25 0 103.935-2.186 2.25 2.25 0 00-3.935 2.186z" />
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

<section class="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-deep via-deep to-[#0c1222] text-white overflow-hidden">
	<div class="absolute inset-0 opacity-40" aria-hidden="true">
		<div class="absolute top-0 right-0 w-[32rem] h-[32rem] bg-medical/25 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 left-0 w-96 h-96 bg-health/20 rounded-full blur-3xl"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Soluciones"
			title="Recomendaciones para ordenar su producción diagnóstica"
			description="De la captura del documento a la entrega al paciente o al médico: menos fricción en cada eslabón."
			light
		/>
		<div class="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
			{#each solutions as s, i}
				<a
					href={s.href}
					class="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 hover:bg-white/[0.08] hover:border-medical/40 hover:shadow-lg hover:shadow-medical/10 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {Math.min(100 + i * 70, 500)}ms"
				>
					<span class="text-xs font-bold uppercase tracking-wider text-medical/90">{s.tag}</span>
					<h3 class="mt-3 text-xl font-bold text-white font-[family-name:var(--font-heading)] group-hover:text-medical transition-colors">
						{s.title}
					</h3>
					<p class="mt-3 text-white/75 leading-relaxed flex-1 text-[15px]">{s.desc}</p>
					<span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-medical">
						Conocer solución
						<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="relative py-14 sm:py-20 lg:py-24 bg-light border-t border-border/80">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Aplicación"
			title="Casos de uso en centros como el suyo"
			description="Combinaciones habituales de módulos según el tipo de estudios y su red de referencia."
			centered
		/>
		<div class="mt-14 max-w-4xl mx-auto space-y-4">
			{#each useCases as u, i}
				<div
					class="group flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-border bg-white px-6 py-6 sm:px-8 sm:py-7 shadow-sm hover:shadow-md hover:border-medical/25 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {100 + i * 100}ms"
				>
					<div
						class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-medical/15 to-health/10 text-medical transition-transform duration-300 group-hover:-translate-y-0.5"
					>
						{@html u.icon}
					</div>
					<div class="flex-1 min-w-0">
						<h3 class="text-lg font-bold text-deep font-[family-name:var(--font-heading)]">{u.title}</h3>
						<p class="mt-1.5 text-muted leading-relaxed text-[15px]">{u.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBanner
	title="Diseñemos juntos un plan para su centro: desde el archivo actual hasta la entrega inteligente al paciente."
	buttonText="Explorar soluciones para su centro"
	buttonHref="/contacto"
/>
