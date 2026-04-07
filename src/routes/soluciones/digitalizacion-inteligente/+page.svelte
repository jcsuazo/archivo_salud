<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problems = [
		{
			text: 'Archivos acumulados que dificultan el acceso ordenado',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>`
		},
		{
			text: 'Búsqueda lenta entre carpetas, versiones y ubicaciones distintas',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>`
		},
		{
			text: 'Pérdida de tiempo del personal localizando documentación',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
		},
		{
			text: 'Datos históricos valiosos pero inexplotados',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>`
		},
		{
			text: 'Errores y retrabajo por documentos incompletos o mal clasificados',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>`
		},
	];

	const features = [
		{ title: 'Escaneo masivo', text: 'Captura eficiente de volúmenes altos con control de calidad de imagen.' },
		{ title: 'Clasificación automática', text: 'Etiquetado por tipo de documento, servicio o convención de su institución.' },
		{ title: 'Extracción de datos', text: 'Campos clave estructurados a partir del contenido, listos para validación humana.' },
		{ title: 'Organización por paciente', text: 'Vínculo coherente entre episodios, admisiones y documentos asociados.' },
		{ title: 'Buscador interno', text: 'Encuentre texto y conceptos en segundos, no en pasillos de archivo.' },
	];

	const benefits = [
		{ title: 'Continuidad asistencial', desc: 'Historial accesible para quien esté autorizado, con menos fricción logística.' },
		{ title: 'Eficiencia operativa', desc: 'Reducción de duplicidad y retrabajo administrativo vinculado al papel.' },
		{ title: 'Base para analítica', desc: 'Un archivo digital ordenado habilita reportes y cohortes con gobernanza.' },
		{ title: 'Riesgo físico mitigado', desc: 'Menos dependencia de almacenamiento frágil frente a humedad, pérdida o deterioro.' },
	];

	const pilotSteps = [
		{ step: '01', title: 'Diagnóstico de archivo', text: 'Muestreo de tipos documentales, volúmenes y cuellos de botella actuales.' },
		{ step: '02', title: 'Lote piloto', text: 'Digitalización y clasificación guiada con métricas de precisión y tiempos.' },
		{ step: '03', title: 'Validación clínica-administrativa', text: 'Ajuste de taxonomías y reglas con su equipo de calidad.' },
		{ step: '04', title: 'Plan de escalamiento', text: 'Cronograma por áreas, recursos y integraciones con sus sistemas.' },
	];
</script>

<SeoHead
	title="Digitalización inteligente | Soluciones | ArchivoSalud"
	description="Del archivo físico al dato útil: escaneo masivo, clasificación automática, extracción de datos y buscador interno para centros de salud en República Dominicana."
/>

<PageHero
	eyebrow="Digitalización inteligente"
	title="Del archivo físico al dato útil"
	description="Convertimos legajos, carpetas y formatos heterogéneos en un repositorio digital inteligente: clasificado, enriquecido con metadatos y listo para apoyar la atención y la gestión."
	ctaText="Solicitar evaluación de archivo documental"
	ctaHref="/contacto"
/>

<!-- Decorative identity -->
<div class="relative -mt-4 pb-4 bg-gradient-to-b from-light to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
		<div class="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3 shadow-sm">
			<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-medical/10 text-medical">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
				</svg>
			</div>
			<div class="min-w-0">
				<p class="text-xs font-semibold uppercase tracking-wider text-muted">Identidad visual</p>
				<p class="text-sm font-bold text-deep font-[family-name:var(--font-heading)]">Captura · Clasificación · Acceso</p>
			</div>
		</div>
	</div>
</div>

<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
			<SectionHeading
				eyebrow="Problemas que abordamos"
				title="Cuando el papel frena la operación"
				description="La digitalización no es solo escanear: es recuperar tiempo, reducir errores y preparar el terreno para un expediente verdaderamente útil."
			/>
			<ul class="space-y-4">
				{#each problems as p}
					<li class="group flex gap-4 rounded-xl border border-border bg-light/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-medical/20 hover:shadow-md hover:shadow-medical/[0.06]">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-medical/10 text-medical transition-transform duration-300 group-hover:-translate-y-0.5">
							{@html p.icon}
						</span>
						<span class="text-deep leading-relaxed pt-1.5">{p.text}</span>
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
			title="Un pipeline completo, con supervisión humana"
			description="La IA propone y acelera; su equipo valida. Así se mantiene rigor clínico-administrativo y trazabilidad."
		/>
		<div class="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each features as f, i}
				<div
					class="group rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-medical/25 hover:shadow-xl hover:shadow-medical/[0.07] {i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}"
				>
					<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-medical/10 text-medical mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<h3 class="text-lg font-extrabold text-deep font-[family-name:var(--font-heading)]">{f.title}</h3>
					<p class="mt-3 text-muted leading-relaxed">{f.text}</p>
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
			title="Impacto tangible en el día a día"
			description="Resultados que su dirección médica, administrativa y de sistemas pueden alinear en indicadores comunes."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 gap-6">
			{#each benefits as b}
				<div class="group flex gap-5 rounded-2xl border border-border p-6 sm:p-8 bg-gradient-to-br from-white to-light/80 hover:border-health/25 hover:shadow-lg hover:shadow-health/10 hover:-translate-y-0.5 transition-all duration-300">
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-health/10 text-health-dark transition-transform duration-300 group-hover:-translate-y-0.5">
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
		<div class="absolute top-1/2 left-0 w-[480px] h-[480px] -translate-y-1/2 -translate-x-1/2 bg-medical/15 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-0 w-80 h-80 bg-health/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			light
			eyebrow="Piloto"
			title="Cómo se ve un piloto con ArchivoSalud"
			description="Transparencia en etapas, con entregables claros y espacio para ajustar antes de escalar."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each pilotSteps as s}
				<div class="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 hover:bg-white/[0.07] transition-colors">
					<p class="text-3xl font-extrabold text-medical font-[family-name:var(--font-heading)]">{s.step}</p>
					<h3 class="mt-4 text-lg font-bold text-white font-[family-name:var(--font-heading)]">{s.title}</h3>
					<p class="mt-2 text-sm text-white/75 leading-relaxed">{s.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBanner
	title="Obtenga una evaluación objetiva de su archivo documental y una hoja de ruta realista."
	buttonText="Solicitar evaluación de archivo documental"
	buttonHref="/contacto"
/>
