<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problems = [
		{
			title: 'Información dispersa entre sedes',
			desc: 'Cada consultorio o sucursal maneja copias distintas del expediente; el paciente percibe desorden.',
			icon: 'building'
		},
		{
			title: 'Tiempo clínico en papeles',
			desc: 'Médicos y enfermería dedican minutos valiosos a buscar consentimientos, estudios previos y facturas.',
			icon: 'doc'
		},
		{
			title: 'Experiencia del paciente inconsistente',
			desc: 'WhatsApp, correo y recepción no comparten el mismo “historial único” accesible al instante.',
			icon: 'heart'
		},
		{
			title: 'Cuellos de botella en facturación',
			desc: 'La documentación incompleta o mal clasificada retrasa autorizaciones y cobros.',
			icon: 'currency'
		},
		{
			title: 'Herramientas que ya funcionan',
			desc: 'No quiere reemplazar su HIS o LIS: necesita capas inteligentes que conversen con lo existente.',
			icon: 'puzzle'
		},
		{
			title: 'Crecimiento sin estandarizar',
			desc: 'Al abrir nuevas líneas de servicio, el archivo no escala al mismo ritmo que la operación.',
			icon: 'chart'
		}
	];

	const solutions = [
		{
			href: '/soluciones/expediente-clinico-inteligente',
			title: 'Expediente unificado y consultable',
			desc: 'Vista coherente del paciente con búsqueda inteligente sin obligar a migrar de sistema de gestión.',
			tag: 'Expediente'
		},
		{
			href: '/soluciones/digitalizacion-inteligente',
			title: 'Digitalización ordenada',
			desc: 'Ingesta de documentos con clasificación asistida y control de calidad para su marca clínica.',
			tag: 'Digitalización'
		},
		{
			href: '/soluciones/automatizacion-administrativa',
			title: 'Menos tareas manuales en recepción',
			desc: 'Flujos de check-in, consentimientos y seguimiento administrativo con validaciones automáticas.',
			tag: 'Automatización'
		},
		{
			href: '/soluciones/analitica-busqueda',
			title: 'Visibilidad operativa',
			desc: 'Indicadores sobre tiempos de respuesta documental y oportunidades de mejora en la experiencia.',
			tag: 'Analítica'
		},
		{
			href: '/soluciones/soluciones-a-medida',
			title: 'Integración a su stack',
			desc: 'APIs y conectores pensados para no duplicar esfuerzos con el software que ya usa su clínica.',
			tag: 'A medida'
		}
	];

	const useCases = [
		{
			title: 'Preconsulta y llegada del paciente',
			desc: 'El equipo ve estudios y notas relevantes antes de la cita, con alertas sobre documentación faltante.'
		},
		{
			title: 'Multisede con misma calidad de servicio',
			desc: 'Políticas de archivo y búsqueda homogéneas para que cualquier sede ofrezca continuidad.'
		},
		{
			title: 'Cirugía y hospitalización corta',
			desc: 'Paquetes documentales listos para autorización, consentimiento y alta sin reprocesos.'
		},
		{
			title: 'Comunicación con pacientes premium',
			desc: 'Resúmenes claros y seguimiento documental que refuerzan confianza y fidelización.'
		}
	];
</script>

<SeoHead
	title="Clínicas privadas | Sectores | ArchivoSalud"
	description="IA para clínicas privadas en RD: eficiencia operativa, mejor experiencia del paciente y acceso rápido a la información sin reemplazar sus sistemas actuales."
/>

<PageHero
	eyebrow="Sector privado"
	title="IA para mejorar eficiencia, experiencia del paciente y acceso a la información"
	description="Ayudamos a organizar la documentación, acelerar procesos y reducir trabajo manual sin sustituir sus herramientas actuales: nos integramos donde usted ya opera y respetamos su flujo clínico-comercial."
	ctaText="Solicitar diagnóstico"
	ctaHref="/agenda"
/>

<section class="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-light to-white overflow-hidden">
	<div class="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-health/5 rounded-full blur-3xl" aria-hidden="true"></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Realidad clínica"
			title="Problemas que frenan la excelencia en la clínica privada"
			description="La presión por calidad percibida y márgenes sanos converge en cómo se maneja el dato y el papel."
		/>
		<div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each problems as p, i}
				<div
					class="group relative rounded-2xl border border-border bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm shadow-deep/[0.04] hover:shadow-xl hover:shadow-health/10 hover:-translate-y-1 hover:border-health/25 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {Math.min(100 + i * 80, 500)}ms"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-medical to-health text-white shadow-lg shadow-medical/25 group-hover:-translate-y-0.5 transition-transform duration-300"
					>
						{#if p.icon === 'building'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008H17.25v-.008zm0 3.75h.008v.008H17.25v-.008zm0 3.75h.008v.008H17.25v-.008z" />
							</svg>
						{:else if p.icon === 'doc'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
							</svg>
						{:else if p.icon === 'heart'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
							</svg>
						{:else if p.icon === 'currency'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						{:else if p.icon === 'puzzle'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 010-3.586L11.42 15.17z" />
							</svg>
						{:else}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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

<section class="relative py-14 sm:py-20 lg:py-24 bg-surface border-y border-border/60">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Recomendaciones"
			title="Soluciones alineadas a la clínica moderna"
			description="Combinamos IA aplicada con un roadmap que no paraliza su operación diaria."
		/>
		<div class="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
			{#each solutions as s, i}
				<a
					href={s.href}
					class="group flex flex-col rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm shadow-deep/[0.04] hover:border-health/40 hover:shadow-xl hover:shadow-health/[0.12] hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {Math.min(100 + i * 70, 500)}ms"
				>
					<span class="text-xs font-bold uppercase tracking-wider text-health-dark">{s.tag}</span>
					<h3 class="mt-3 text-xl font-bold text-deep font-[family-name:var(--font-heading)] group-hover:text-health-dark transition-colors">
						{s.title}
					</h3>
					<p class="mt-3 text-muted leading-relaxed flex-1 text-[15px]">{s.desc}</p>
					<span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-health-dark">
						Explorar en detalle
						<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="relative py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
	<div class="absolute top-20 right-0 w-80 h-80 bg-medical/5 rounded-full blur-3xl" aria-hidden="true"></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Casos de uso"
			title="Donde la IA deja huella visible para su equipo y sus pacientes"
			description="Escenarios frecuentes en clínicas que ya están dando el salto hacia operaciones más ágiles."
			centered
		/>
		<div class="mt-14 grid sm:grid-cols-2 gap-5 lg:gap-6">
			{#each useCases as u, i}
				<div
					class="group flex gap-5 rounded-2xl border border-border bg-gradient-to-br from-white to-surface/80 p-7 lg:p-8 shadow-sm hover:shadow-md hover:border-medical/20 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {100 + i * 100}ms"
				>
					<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-medical/10 text-medical transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<div class="min-w-0">
						<h3 class="text-lg font-bold text-deep font-[family-name:var(--font-heading)]">{u.title}</h3>
						<p class="mt-2 text-muted leading-relaxed text-[15px]">{u.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBanner
	title="Reciba un diagnóstico documental y de procesos adaptado a su clínica, sin compromiso inicial amplio."
	buttonText="Solicitar diagnóstico"
	buttonHref="/agenda"
/>
