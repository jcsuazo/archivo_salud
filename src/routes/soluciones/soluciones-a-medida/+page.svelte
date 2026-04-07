<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problems = [
		{
			text: 'Paquetes de software genéricos que no reflejan su cartera de servicios',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" /></svg>`
		},
		{
			text: 'Integraciones frágiles entre HIS, imagen, laboratorio y archivo físico',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.193-9.193a4.5 4.5 0 016.364 6.364l-4.5 4.5a4.5 4.5 0 01-7.244-1.242" /></svg>`
		},
		{
			text: 'Roadmaps tecnológicos desconectados de prioridades clínicas reales',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m0 0l3-3m-3 3l-3-3m0-5.25h12M3.375 19.5h17.25c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>`
		},
		{
			text: 'Equipos internos sin ancho de banda para diseñar flujos con IA',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>`
		},
		{
			text: 'Incertidumbre sobre qué automatizar primero y con qué ROI',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>`
		},
	];

	const includes = [
		{ title: 'Descubrimiento profundo', text: 'Entrevistas y observación con médicos, enfermería, admisión, facturación y sistemas.' },
		{ title: 'Co-diseño de flujos', text: 'Prototipos de pantallas, reglas y handoff entre humano y máquina —documentados y versionados.' },
		{ title: 'Integración pragmática', text: 'APIs, cargas por lote o conectores según madurez de su stack; sin promesas mágicas.' },
		{ title: 'Capacitación y cambio', text: 'Materiales en español, sesiones por rol y acompañamiento en las primeras semanas.' },
		{ title: 'Indicadores compartidos', text: 'Definición conjunta de éxito: tiempo, calidad documental, satisfacción del personal.' },
	];

	const benefits = [
		{ title: 'Alineación real', desc: 'La solución refleja su institución, no un manual de vendor.' },
		{ title: 'Menor riesgo de adopción', desc: 'Los usuarios reconocen el flujo porque ayudaron a construirlo.' },
		{ title: 'Evolución por fases', desc: 'Entregas incrementales financiables y evaluables.' },
		{ title: 'Socio técnico-estratégico', desc: 'ArchivoSalud combina experiencia en salud dominicana y práctica de IA aplicada.' },
	];

	const pilotSteps = [
		{ step: '01', title: 'Taller ejecutivo', text: 'Objetivos, restricciones y visión en 90 minutos con patrocinio de dirección.' },
		{ step: '02', title: 'Inmersión operativa', text: 'Días de campo en áreas seleccionadas para mapear datos y dolores.' },
		{ step: '03', title: 'Propuesta viva', text: 'Arquitectura de alto nivel, fases, costos orientativos y riesgos explícitos.' },
		{ step: '04', title: 'Arranque controlado', text: 'Primer entregable en semanas, no meses —con ventana de retroalimentación.' },
	];
</script>

<SeoHead
	title="Soluciones a medida | Soluciones | ArchivoSalud"
	description="Cada centro de salud es distinto: co-diseñamos soluciones de IA a la medida de sus procesos, integraciones y prioridades en República Dominicana."
/>

<PageHero
	eyebrow="Soluciones a medida"
	title="Cada centro de salud tiene una realidad distinta"
	description="Diseñamos intervenciones de IA y automatización alrededor de sus procesos, sus sistemas y sus prioridades —no al revés. Desde integraciones puntuales hasta programas multi-año con hitos claros."
	ctaText="Iniciar conversación"
	ctaHref="/contacto"
/>

<div class="relative -mt-4 pb-4 bg-gradient-to-b from-light to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
		<div class="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3 shadow-sm">
			<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 010-3.586L9.776 2.049a2.548 2.548 0 013.586 0l5.653 4.655a2.548 2.548 0 010 3.586L11.42 15.17z" />
				</svg>
			</div>
			<div class="min-w-0">
				<p class="text-xs font-semibold uppercase tracking-wider text-muted">Identidad visual</p>
				<p class="text-sm font-bold text-deep font-[family-name:var(--font-heading)]">Escucha · Diseño · Entrega</p>
			</div>
		</div>
	</div>
</div>

<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
			<SectionHeading
				eyebrow="Problemas que abordamos"
				title="Las plantillas rara vez encajan en instituciones complejas"
				description="Hospitales públicos, clínicas privadas y redes con ARS enfrentan restricciones distintas. Una hoja de ruta a medida reduce desperdicio y resistencia al cambio."
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
			eyebrow="Qué incluye"
			title="Un equipo que habla salud, datos y operación"
			description="Combinamos ingeniería, diseño de procesos y acompañamiento al cambio para que la solución sobreviva al lanzamiento."
		/>
		<div class="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each includes as inc, i}
				<div
					class="group rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-xl hover:shadow-amber-500/[0.08] {i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}"
				>
					<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<h3 class="text-lg font-extrabold text-deep font-[family-name:var(--font-heading)]">{inc.title}</h3>
					<p class="mt-3 text-muted leading-relaxed">{inc.text}</p>
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
			title="Inversión alineada con impacto institucional"
			description="Menos sorpresas en implementación; más claridad sobre dependencias, tiempos y responsables."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 gap-6">
			{#each benefits as b}
				<div class="group flex gap-5 rounded-2xl border border-border p-6 sm:p-8 bg-gradient-to-br from-white to-light/80 hover:border-health/25 hover:shadow-lg hover:shadow-health/10 hover:-translate-y-0.5 transition-all duration-300">
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-health/10 text-health-dark transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
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
		<div class="absolute top-1/2 left-0 w-[440px] h-[440px] bg-amber-500/15 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/2"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-health/15 rounded-full blur-3xl translate-x-1/3"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			light
			eyebrow="Piloto"
			title="De la primera reunión al primer entregable"
			description="Transparencia en alcance, riesgos y calendario —especialmente cuando el camino es único."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each pilotSteps as s}
				<div class="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 hover:bg-white/[0.07] transition-colors">
					<p class="text-3xl font-extrabold text-amber-300 font-[family-name:var(--font-heading)]">{s.step}</p>
					<h3 class="mt-4 text-lg font-bold text-white font-[family-name:var(--font-heading)]">{s.title}</h3>
					<p class="mt-2 text-sm text-white/75 leading-relaxed">{s.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBanner
	title="Cuéntenos su contexto: encontraremos el punto de partida correcto —grande o acotado."
	buttonText="Iniciar conversación"
	buttonHref="/contacto"
/>
