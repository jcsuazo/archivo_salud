<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problems = [
		{
			text: 'Historiales extensos difíciles de asimilar en tiempo de consulta',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>`
		},
		{
			text: 'Información crítica dispersa en notas, imágenes y adjuntos',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>`
		},
		{
			text: 'Inconsistencias entre episodios que afectan la continuidad',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>`
		},
		{
			text: 'Poca visibilidad sobre estudios previos y su orden cronológico',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
		},
		{
			text: 'Preparación manual de resúmenes antes de citas o comités',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>`
		},
	];

	const useCases = [
		{ title: 'Resumir historiales', text: 'Síntesis contextual de evolución, alergias, cirugías y hallazgos relevantes —siempre para revisión profesional.' },
		{ title: 'Ubicar diagnósticos', text: 'Encuentre menciones y codificaciones en notas clínicas y reportes adjuntos con trazabilidad al documento fuente.' },
		{ title: 'Cronología de estudios', text: 'Línea de tiempo de laboratorios, imágenes e informes para comparar tendencias y decisiones terapéuticas.' },
		{ title: 'Detectar faltantes', text: 'Alertas sobre consentimientos, informes o resultados pendientes según reglas acordadas con su institución.' },
		{ title: 'Preparación para consulta', text: 'Paquetes resumidos para primera visita, seguimiento o interconsulta, adaptados al rol del usuario autorizado.' },
	];

	const benefits = [
		{ title: 'Tiempo cognitivo recuperado', desc: 'Menos lectura repetitiva; más foco en el paciente y en la decisión clínica.' },
		{ title: 'Coherencia entre equipos', desc: 'Misma base documental interpretada de forma consistente en turnos y servicios.' },
		{ title: 'Menos omisiones evitables', desc: 'Faltantes visibles antes de que impacten calidad o facturación.' },
		{ title: 'Escalable por especialidad', desc: 'Plantillas y reglas ajustables a cardiología, oncología, medicina interna, etc.' },
	];

	const pilotSteps = [
		{ step: '01', title: 'Mapeo de fuentes', text: 'Definición de sistemas, carpetas compartidas y formatos donde vive hoy el expediente.' },
		{ step: '02', title: 'Perfiles y permisos', text: 'Roles, auditoría y límites de acceso alineados con políticas internas.' },
		{ step: '03', title: 'Prueba en servicio piloto', text: 'Un área o consulta externa con retroalimentación clínica semanal.' },
		{ step: '04', title: 'Refinamiento y despliegue', text: 'Ajuste de resúmenes, alertas y flujos antes de ampliar cobertura.' },
	];
</script>

<SeoHead
	title="Expediente clínico inteligente | Soluciones | ArchivoSalud"
	description="Expedientes más claros y consultables: resúmenes de historial, cronología de estudios, detección de faltantes e IA sobre documentos clínicos reales."
/>

<PageHero
	eyebrow="Expediente clínico inteligente"
	title="Expedientes más claros, consultables y útiles"
	description="Aplicamos IA al contenido real de sus documentos clínicos —notas, PDFs, imágenes escaneadas— para acelerar la comprensión sin sustituir el criterio médico."
	ctaText="Ver cómo funcionaría en su institución"
	ctaHref="/contacto"
/>

<div class="relative -mt-4 pb-4 bg-gradient-to-b from-light to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
		<div class="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3 shadow-sm">
			<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-health/10 text-health-dark">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
				</svg>
			</div>
			<div class="min-w-0">
				<p class="text-xs font-semibold uppercase tracking-wider text-muted">Identidad visual</p>
				<p class="text-sm font-bold text-deep font-[family-name:var(--font-heading)]">Contexto · Cronología · Acción</p>
			</div>
		</div>
	</div>
</div>

<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
			<SectionHeading
				eyebrow="Problemas que abordamos"
				title="El expediente existe, pero no siempre ayuda a decidir"
				description="Cuando la información está ahí pero es costosa de integrar, la IA puede actuar como asistente de lectura y estructuración —bajo controles estrictos."
			/>
			<ul class="space-y-4">
				{#each problems as p}
					<li class="group flex gap-4 rounded-xl border border-border bg-light/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-health/25 hover:shadow-md hover:shadow-health/[0.06]">
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
			eyebrow="Casos de uso"
			title="Lo que puede hacer sobre documentos clínicos reales"
			description="Cada capacidad se configura según vocabulario clínico, formatos y flujos de su institución."
		/>
		<div class="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each useCases as u, i}
				<div
					class="group rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-health/30 hover:shadow-xl hover:shadow-health/[0.08] {i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}"
				>
					<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-health/10 text-health-dark mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<h3 class="text-lg font-extrabold text-deep font-[family-name:var(--font-heading)]">{u.title}</h3>
					<p class="mt-3 text-muted leading-relaxed">{u.text}</p>
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
			title="Más claridad en cada interacción con el paciente"
			description="La IA no reemplaza al clínico: reduce fricción y resalta lo que merece atención."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 gap-6">
			{#each benefits as b}
				<div class="group flex gap-5 rounded-2xl border border-border p-6 sm:p-8 bg-gradient-to-br from-white to-light/80 hover:border-medical/30 hover:shadow-lg hover:shadow-medical/10 hover:-translate-y-0.5 transition-all duration-300">
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-medical/10 text-medical transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
		<div class="absolute top-0 right-0 w-[420px] h-[420px] bg-health/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
		<div class="absolute bottom-0 left-0 w-96 h-96 bg-medical/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			light
			eyebrow="Piloto"
			title="Cómo validar en su institución sin disruptar la operación"
			description="Empezamos acotado, medimos aceptación clínica y escalamos con evidencia."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each pilotSteps as s}
				<div class="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 hover:bg-white/[0.07] transition-colors">
					<p class="text-3xl font-extrabold text-health font-[family-name:var(--font-heading)]">{s.step}</p>
					<h3 class="mt-4 text-lg font-bold text-white font-[family-name:var(--font-heading)]">{s.title}</h3>
					<p class="mt-2 text-sm text-white/75 leading-relaxed">{s.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBanner
	title="Diseñemos una demostración acotada con sus tipos de documento y roles reales."
	buttonText="Ver cómo funcionaría en su institución"
	buttonHref="/contacto"
/>
