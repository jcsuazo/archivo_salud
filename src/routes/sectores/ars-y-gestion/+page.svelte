<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problems = [
		{
			title: 'Reclamaciones y auditorías documentales',
			desc: 'La trazabilidad entre póliza, autorización y soportes clínicos exige búsquedas rápidas y consistentes.',
			icon: 'clipboard'
		},
		{
			title: 'Red de proveedores heterogénea',
			desc: 'Cada hospital o clínica envía formatos distintos; estandarizar sin fricción es un desafío permanente.',
			icon: 'network'
		},
		{
			title: 'Fraude y sobreutilización',
			desc: 'Detectar patrones anómalos requiere cruzar grandes volúmenes de notas, facturas y órdenes.',
			icon: 'eye'
		},
		{
			title: 'SLA con afiliados y regulador',
			desc: 'Los plazos de respuesta se tensionan cuando el archivo digital no está gobernado ni indexado.',
			icon: 'timer'
		},
		{
			title: 'Reporting para dirección médica',
			desc: 'Indicadores de calidad y utilización dependen de datos atrapados en PDFs y sistemas aislados.',
			icon: 'report'
		},
		{
			title: 'Programas de salud y cohortes',
			desc: 'Seguimiento poblacional se complica si la evidencia clínica no es consultable de forma agregada.',
			icon: 'users'
		}
	];

	const solutions = [
		{
			href: '/soluciones/analitica-busqueda',
			title: 'Analítica y búsqueda sobre cartera',
			desc: 'Exploración semántica y cuadros de mando alimentados desde documentación clínica y administrativa.',
			tag: 'Analítica'
		},
		{
			href: '/soluciones/automatizacion-administrativa',
			title: 'Automatización de revisiones',
			desc: 'Priorización de casos, checklist documental y flujos entre médico auditor, legal y operaciones.',
			tag: 'Automatización'
		},
		{
			href: '/soluciones/digitalizacion-inteligente',
			title: 'Normalización de soportes',
			desc: 'Digitalización inteligente para homologar lo que recibe de la red, sin perder el detalle clínico.',
			tag: 'Digitalización'
		},
		{
			href: '/soluciones/expediente-clinico-inteligente',
			title: 'Expediente del afiliado',
			desc: 'Vista longitudinal con foco en episodios, autorizaciones y documentos probatorios clave.',
			tag: 'Expediente'
		},
		{
			href: '/soluciones/soluciones-a-medida',
			title: 'Gobierno de datos a medida',
			desc: 'Modelos de integración, roles y retención alineados a su marco legal y a su modelo de negocio.',
			tag: 'A medida'
		}
	];

	const useCases = [
		{
			title: 'Auditoría prepago y postpago',
			desc: 'Armado expediente de revisión con hallazgos sugeridos y rutas de escalamiento interno.'
		},
		{
			title: 'Gestión de redes y contratos',
			desc: 'Comparación de cumplimiento documental por proveedor y especialidad con evidencia citada.'
		},
		{
			title: 'Programas crónicos y preventivos',
			desc: 'Seguimiento de cohortes con extracción asistida de indicadores desde notas e informes.'
		},
		{
			title: 'Respuesta al regulador',
			desc: 'Búsqueda transversal y paquetes de soporte listos para inspecciones o requerimientos formales.'
		}
	];
</script>

<SeoHead
	title="ARS y gestión de salud | Sectores | ArchivoSalud"
	description="Soluciones de IA para ARS y administración de salud en RD: gobierno documental, eficiencia en revisiones, analítica y soporte a decisiones con información confiable."
/>

<PageHero
	eyebrow="Administradoras y gestión en salud"
	title="Soluciones de IA para ARS y administración de salud"
	description="Para administradoras de riesgos y organizaciones de gestión: fortalecemos gobierno de datos, eficiencia en revisiones y soporte a decisiones con información confiable, siempre con miras a cumplimiento y calidad asistencial."
	ctaText="Agendar una reunión"
	ctaHref="/agenda"
/>

<section class="relative py-14 sm:py-20 lg:py-24 bg-surface overflow-hidden">
	<div class="absolute top-10 right-10 w-64 h-64 border border-deep/5 rounded-full" aria-hidden="true"></div>
	<div class="absolute bottom-10 left-10 w-48 h-48 border border-medical/10 rounded-full" aria-hidden="true"></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Contexto ARS / OGM"
			title="Problemas recurrentes en la administración de la cartera y la red"
			description="La presión regulatoria y la competencia exigen operaciones más transparentes y basadas en datos accionables."
		/>
		<div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each problems as p, i}
				<div
					class="group relative rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm shadow-deep/[0.04] overflow-hidden hover:shadow-xl hover:shadow-deep/10 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {Math.min(100 + i * 80, 500)}ms"
				>
					<div
						class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-medical/5 to-transparent rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity"
						aria-hidden="true"
					></div>
					<div
						class="relative flex h-12 w-12 items-center justify-center rounded-xl border-2 border-deep/90 bg-deep text-white shadow-md group-hover:border-medical group-hover:ring-2 group-hover:ring-medical/20 group-hover:-translate-y-0.5 transition-all duration-300"
					>
						{#if p.icon === 'clipboard'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
							</svg>
						{:else if p.icon === 'network'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
							</svg>
						{:else if p.icon === 'eye'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						{:else if p.icon === 'timer'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						{:else if p.icon === 'report'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
							</svg>
						{:else}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.645-5.963-1.684A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
							</svg>
						{/if}
					</div>
					<h3 class="relative mt-6 text-lg font-bold text-deep font-[family-name:var(--font-heading)]">{p.title}</h3>
					<p class="relative mt-3 text-muted leading-relaxed text-[15px]">{p.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="relative py-14 sm:py-20 lg:py-24 bg-white border-y border-border/70">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Línea de solución"
			title="Cómo apoyamos a su ARS u organización de gestión"
			description="Priorizamos gobernanza, trazabilidad y velocidad de análisis sin comprometer la confidencialidad del afiliado."
			centered
		/>
		<div class="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
			{#each solutions as s, i}
				<a
					href={s.href}
					class="group relative flex flex-col rounded-2xl border border-border bg-gradient-to-b from-light/80 to-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-deep/10 hover:-translate-y-0.5 hover:border-deep/20 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {Math.min(100 + i * 70, 500)}ms"
				>
					<div class="flex items-center gap-3">
						<span class="h-px flex-1 bg-gradient-to-r from-medical/40 to-transparent"></span>
						<span class="text-xs font-bold uppercase tracking-widest text-muted">{s.tag}</span>
						<span class="h-px flex-1 bg-gradient-to-l from-health/40 to-transparent"></span>
					</div>
					<h3 class="mt-5 text-xl font-bold text-deep font-[family-name:var(--font-heading)] group-hover:text-medical-dark transition-colors text-center sm:text-left">
						{s.title}
					</h3>
					<p class="mt-3 text-muted leading-relaxed flex-1 text-[15px] text-center sm:text-left">{s.desc}</p>
					<span class="mt-6 inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-deep group-hover:text-medical">
						Ver en soluciones
						<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-deep via-[#111a2e] to-deep text-white overflow-hidden">
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-medical/20 via-transparent to-transparent opacity-60" aria-hidden="true"></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			eyebrow="Implementación"
			title="Casos de uso con impacto en dirección y operaciones"
			description="Escenarios donde la IA documental se traduce en control, tiempo recuperado y mejor servicio al afiliado."
			light
		/>
		<div class="mt-14 grid sm:grid-cols-2 gap-6">
			{#each useCases as u, i}
				<div
					class="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 hover:border-health/35 hover:bg-white/[0.07] hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {100 + i * 100}ms"
				>
					<div class="flex items-start gap-4">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-health/20 text-health transition-transform duration-300 group-hover:-translate-y-0.5">
							<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
							</svg>
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
	title="Coordine una reunión con nuestro equipo para mapear riesgos, oportunidades y un roadmap realista."
	buttonText="Agendar una reunión"
	buttonHref="/agenda"
/>
