<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problems = [
		{
			text: 'Información clínica y administrativa difícil de agregar para reportes',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>`
		},
		{
			text: 'Búsqueda por palabras clave insuficiente frente a lenguaje natural',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>`
		},
		{
			text: 'Decisiones de inversión en digitalización sin datos de volumen y prioridad',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>`
		},
		{
			text: 'Patrones poblacionales opacos cuando los datos están en silos documentales',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`
		},
		{
			text: 'Dependencia de exportaciones manuales y hojas frágiles',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>`
		},
	];

	const capabilities = [
		{ title: 'Localizar población', text: 'Criterios compuestos sobre documentación estructurada y texto narrativo, con trazabilidad de fuentes.' },
		{ title: 'Medir volumen documental', text: 'Conteos por servicio, tipo de documento, backlog y productividad de digitalización.' },
		{ title: 'Identificar patrones', text: 'Tendencias en diagnósticos mencionados, estudios recurrentes o cuellos de botella documentales.' },
		{ title: 'Priorizar digitalización', text: 'Ranking por impacto clínico, riesgo regulatorio o frecuencia de acceso.' },
	];

	const benefits = [
		{ title: 'Decisiones con contexto', desc: 'Deje de adivinar qué digitalizar primero o dónde está la mayor carga.' },
		{ title: 'Gobernanza por diseño', desc: 'Consultas y vistas acotadas a roles; auditoría de accesos y exportaciones.' },
		{ title: 'Un solo lenguaje', desc: 'Búsqueda semántica que entiende sinónimos y jerga clínica acordada.' },
		{ title: 'Preparación ejecutiva', desc: 'Resúmenes listos para comité médico, junta administrativa o conversaciones con ARS.' },
	];

	const pilotSteps = [
		{ step: '01', title: 'Inventario de fuentes', text: 'Dónde vive el texto útil hoy: PDFs, notas, sistemas legados, almacenes compartidos.' },
		{ step: '02', title: 'Modelo de permisos', text: 'Quién puede buscar qué; qué resultados se enmascaran o resumen automáticamente.' },
		{ step: '03', title: 'Casos de uso piloto', text: '2–3 preguntas de negocio reales con métricas de precisión y utilidad.' },
		{ step: '04', title: 'Tableros y adopción', text: 'Publicación controlada a líderes clínicos y administrativos con formación breve.' },
	];
</script>

<SeoHead
	title="Analítica y búsqueda | Soluciones | ArchivoSalud"
	description="Su información clínica puede apoyar decisiones: búsqueda semántica, analítica documental y priorización de digitalización con gobernanza en República Dominicana."
/>

<PageHero
	eyebrow="Analítica y búsqueda"
	title="Su información clínica también puede ayudar a tomar decisiones"
	description="Explore cohortes, volúmenes y patrones sobre el contenido que ya genera su institución —con búsqueda avanzada y salvaguardas explícitas de acceso."
	ctaText="Explorar un caso de uso"
	ctaHref="/contacto"
/>

<div class="relative -mt-4 pb-4 bg-gradient-to-b from-light to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-end gap-4">
		<div class="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3 shadow-sm">
			<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
				</svg>
			</div>
			<div class="min-w-0">
				<p class="text-xs font-semibold uppercase tracking-wider text-muted">Identidad visual</p>
				<p class="text-sm font-bold text-deep font-[family-name:var(--font-heading)]">Consulta · Patrón · Acción</p>
			</div>
		</div>
	</div>
</div>

<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
			<SectionHeading
				eyebrow="Problemas que abordamos"
				title="Los datos están en el archivo, pero no en los tableros"
				description="Sin capacidades de búsqueda y analítica sobre documentos, la institución opera a ciegas sobre su propio patrimonio informativo."
			/>
			<ul class="space-y-4">
				{#each problems as p}
					<li class="group flex gap-4 rounded-xl border border-border bg-light/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-medical/20 hover:shadow-md hover:shadow-medical/[0.06]">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-medical/10 text-medical transition-transform duration-300 group-hover:-translate-y-0.5">
							{@html p.icon}
						</span>
						<span class="min-w-0 text-deep leading-relaxed pt-1.5">{p.text}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="py-14 sm:py-20 lg:py-28 bg-surface border-y border-border">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			eyebrow="Capacidades"
			title="Beneficios directos para planificación y ejecución"
			description="Cada capacidad se implementa dentro de flujos autorizados y con trazabilidad."
		/>
		<div class="mt-12 max-w-3xl mx-auto rounded-2xl border border-teal-500/25 bg-gradient-to-br from-teal-500/[0.06] to-medical/[0.04] p-6 sm:p-8">
			<div class="flex gap-4">
				<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-deep text-white">
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
					</svg>
				</div>
				<div class="min-w-0">
					<p class="text-sm font-bold text-deep font-[family-name:var(--font-heading)]">Compromiso de gobernanza</p>
					<p class="mt-2 text-muted leading-relaxed">
						Siempre dentro de flujos autorizados, con controles de acceso y gobernanza de la información.
					</p>
				</div>
			</div>
		</div>
		<div class="mt-10 sm:mt-16 grid sm:grid-cols-2 gap-6 lg:gap-8">
			{#each capabilities as c}
				<div class="group rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:shadow-xl hover:shadow-teal-500/[0.07]">
					<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<h3 class="text-lg font-extrabold text-deep font-[family-name:var(--font-heading)]">{c.title}</h3>
					<p class="mt-3 text-muted leading-relaxed">{c.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			eyebrow="Beneficios"
			title="De archivo pasivo a activo estratégico"
			description="La analítica responsable convierte costos de almacenamiento en señales para mejorar la atención y la operación."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 gap-6">
			{#each benefits as b}
				<div class="group flex gap-5 rounded-2xl border border-border p-6 sm:p-8 bg-gradient-to-br from-white to-light/80 hover:border-medical/30 hover:shadow-lg hover:shadow-medical/10 hover:-translate-y-0.5 transition-all duration-300">
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
						</svg>
					</div>
					<div class="min-w-0">
						<h3 class="text-lg font-extrabold text-deep font-[family-name:var(--font-heading)]">{b.title}</h3>
						<p class="mt-2 text-muted leading-relaxed">{b.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-14 sm:py-20 lg:py-28 bg-deep text-white relative overflow-hidden">
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-0 left-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 bg-teal-500/15 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-0 w-80 h-80 bg-medical/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			light
			eyebrow="Piloto"
			title="Un piloto de analítica con preguntas de negocio reales"
			description="Sin 'big bang': validamos utilidad con sus líderes antes de ampliar el alcance."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each pilotSteps as s}
				<div class="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 hover:bg-white/[0.07] transition-colors">
					<p class="text-3xl font-extrabold text-teal-300 font-[family-name:var(--font-heading)]">{s.step}</p>
					<h3 class="mt-4 text-lg font-bold text-white font-[family-name:var(--font-heading)]">{s.title}</h3>
					<p class="mt-2 text-sm text-white/75 leading-relaxed">{s.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBanner
	title="Conversemos sobre las preguntas que su institución aún no puede responder con datos del archivo."
	buttonText="Agendar una consulta"
	buttonHref="/agenda"
/>
