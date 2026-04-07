<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problems = [
		{
			text: 'Cuellos de botella en admisiones, egresos y facturación por revisión manual',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
		},
		{
			text: 'Inconsistencias entre formularios en papel y registros en sistemas',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>`
		},
		{
			text: 'Seguimiento reactivo de documentación pendiente en lugar de proactivo',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>`
		},
		{
			text: 'Equipos saturados con tareas de verificación repetitivas',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`
		},
		{
			text: 'Falta de visibilidad unificada del estado del expediente administrativo',
			icon: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
		},
	];

	const examples = [
		{ title: 'Revisión de formularios', text: 'Validación asistida de campos obligatorios, formatos y coherencia entre secciones antes de archivar o facturar.' },
		{ title: 'Validación de expedientes', text: 'Listas de verificación dinámicas según tipo de admisión, ARS o paquete quirúrgico.' },
		{ title: 'Seguimiento de docs pendientes', text: 'Tableros y recordatorios automáticos por responsable, con SLA acordados.' },
		{ title: 'Alertas automáticas', text: 'Notificaciones por vencimientos, faltantes críticos o incongruencias detectadas en lotes.' },
		{ title: 'Paquetes documentales', text: 'Ensamblado de conjuntos estándar (p. ej. cirugía, autorización ARS) a partir de plantillas institucionales.' },
	];

	const benefits = [
		{ title: 'Control operativo', desc: 'Menos sorpresas al cierre: el estado del expediente es visible y accionable.' },
		{ title: 'Productividad del personal', desc: 'Automatiza lo repetitivo; preserva el juicio humano donde importa.' },
		{ title: 'Menos reprocesos', desc: 'Errores detectados antes de que generen denegaciones o devoluciones.' },
		{ title: 'Escalabilidad por proceso', desc: 'Mismo motor, distintas reglas: admisión, egreso, imagen, laboratorio, etc.' },
	];

	const pilotSteps = [
		{ step: '01', title: 'Mapeo de procesos', text: 'Identificación de 2–3 flujos de alto volumen y sus puntos de fricción.' },
		{ step: '02', title: 'Diseño de reglas', text: 'Definición conjunta con operaciones de qué valida la IA y qué queda en cola humana.' },
		{ step: '03', title: 'Piloto en sombra', text: 'La IA sugiere en paralelo sin bloquear; medimos precisión y ahorro de tiempo.' },
		{ step: '04', title: 'Activación gradual', text: 'Habilitación por etapas con monitoreo y ajuste de umbrales.' },
	];
</script>

<SeoHead
	title="Automatización administrativa | Soluciones | ArchivoSalud"
	description="Menos carga manual y más control operativo: revisión de formularios, validación de expedientes, alertas y paquetes documentales con IA en centros de salud."
/>

<PageHero
	eyebrow="Automatización administrativa"
	title="Menos carga manual, más control operativo"
	description="Orquestamos tareas administrativas que hoy dependen de revisiones una a una: la IA propone, clasifica y prioriza; su equipo define las reglas y la supervisión final."
	ctaText="Solicitar diagnóstico operativo"
	ctaHref="/contacto"
/>

<div class="relative -mt-4 pb-4 bg-gradient-to-b from-light to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
		<div class="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3 shadow-sm">
			<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
				</svg>
			</div>
			<div class="min-w-0">
				<p class="text-xs font-semibold uppercase tracking-wider text-muted">Identidad visual</p>
				<p class="text-sm font-bold text-deep font-[family-name:var(--font-heading)]">Flujos · Reglas · Ejecución</p>
			</div>
		</div>
	</div>
</div>

<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
			<SectionHeading
				eyebrow="Problemas que abordamos"
				title="La operación administrativa no debería depender del heroísmo diario"
				description="Cuando cada caso requiere memoria tribal y hojas de cálculo, los errores y los retrasos son sistémicos —no personales."
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
			eyebrow="Ejemplos"
			title="Automatización con sentido administrativo"
			description="Casos concretos que ya implementamos o co-diseñamos con equipos de operaciones y calidad."
		/>
		<div class="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each examples as ex, i}
				<div
					class="group rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:shadow-xl hover:shadow-violet-500/[0.08] {i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}"
				>
					<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<h3 class="text-lg font-extrabold text-deep font-[family-name:var(--font-heading)]">{ex.title}</h3>
					<p class="mt-3 text-muted leading-relaxed">{ex.text}</p>
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
			title="Operación más predecible, equipos más enfocados"
			description="El objetivo no es eliminar personas, sino quitar fricción y liberar capacidad para casos excepcionales."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 gap-6">
			{#each benefits as b}
				<div class="group flex gap-5 rounded-2xl border border-border p-6 sm:p-8 bg-gradient-to-br from-white to-light/80 hover:border-medical/30 hover:shadow-lg hover:shadow-medical/10 hover:-translate-y-0.5 transition-all duration-300">
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-medical/10 text-medical transition-transform duration-300 group-hover:-translate-y-0.5">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m0-12.75v3.75m0 0v3.75m0-3.75h3.75m-3.75 0h-3.75" />
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
		<div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
		<div class="absolute bottom-0 left-1/4 w-72 h-72 bg-medical/15 rounded-full blur-3xl"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			light
			eyebrow="Piloto"
			title="Diagnóstico operativo sin comprometer la producción"
			description="Medimos antes de automatizar: tiempos, tasas de error y volumen por cola."
		/>
		<div class="mt-10 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each pilotSteps as s}
				<div class="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 hover:bg-white/[0.07] transition-colors">
					<p class="text-3xl font-extrabold text-violet-300 font-[family-name:var(--font-heading)]">{s.step}</p>
					<h3 class="mt-4 text-lg font-bold text-white font-[family-name:var(--font-heading)]">{s.title}</h3>
					<p class="mt-2 text-sm text-white/75 leading-relaxed">{s.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBanner
	title="Reciba un diagnóstico operativo de sus colas documentales y oportunidades de automatización."
	buttonText="Solicitar diagnóstico operativo"
	buttonHref="/contacto"
/>
