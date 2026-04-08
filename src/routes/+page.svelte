<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const problemStats = [
		{
			icon: 'clock',
			value: 'Horas',
			label: 'en búsqueda manual de expedientes y respaldos físicos',
		},
		{
			icon: 'path',
			value: 'Trazabilidad',
			label: 'fragmentada entre carpetas, versiones y firmas en papel',
		},
		{
			icon: 'bolt',
			value: 'Respuesta',
			label: 'lenta ante auditorías, citas legales y continuidad asistencial',
		},
		{
			icon: 'currency',
			value: 'Costo',
			label: 'operativo elevado por retrabajo y duplicidad documental',
		},
	];

	const solutions = [
		{
			title: 'Digitalización inteligente de archivos',
			desc: 'Captura, clasificación y extracción de datos con IA para que lo histórico sea consultable y accionable.',
			icon: 'doc',
		},
		{
			title: 'Expediente clínico inteligente',
			desc: 'Estructuramos información clínica y administrativa para decisiones más rápidas y coherentes.',
			icon: 'clipboard',
		},
		{
			title: 'Automatización administrativa',
			desc: 'Flujos que reducen carga repetitiva: ingresos, autorizaciones, reportes y seguimiento.',
			icon: 'cog',
		},
		{
			title: 'Soluciones a medida',
			desc: 'Diseño junto a su equipo para encajar en su realidad de recursos, normativa y volumen.',
			icon: 'puzzle',
		},
	];

	const steps = [
		{ n: '01', title: 'Diagnóstico', desc: 'Mapeamos documentos, cuellos de botella y riesgos con su equipo.' },
		{ n: '02', title: 'Diseño', desc: 'Propuesta técnica y de gobernanza alineada a su institución.' },
		{ n: '03', title: 'Piloto', desc: 'Validación en un área o servicio con métricas claras de impacto.' },
		{ n: '04', title: 'Implementación', desc: 'Despliegue controlado, capacitación y acompañamiento.' },
		{ n: '05', title: 'Escalado', desc: 'Extensión progresiva y optimización continua del modelo.' },
	];

	const trustPoints = [
		{
			title: 'Seguridad por diseño',
			desc: 'Enfoque en confidencialidad, trazabilidad de accesos y buenas prácticas de datos de salud.',
			icon: 'shield',
		},
		{
			title: 'Aterrizaje operativo',
			desc: 'No vendemos demos genéricas: priorizamos lo que su hospital puede adoptar y sostener.',
			icon: 'map',
		},
		{
			title: 'IA con propósito clínico-administrativo',
			desc: 'Modelos y flujos orientados a reducir fricción real, no a impresionar en un slide.',
			icon: 'sparkles',
		},
		{
			title: 'Acompañamiento local',
			desc: 'Equipo que entiende el contexto dominicano de hospitales y sistemas públicos.',
			icon: 'users',
		},
	];
</script>

<SeoHead
	title="IA para hospitales y clínicas en República Dominicana | ArchivoSalud"
	description="ArchivoSalud rescata información atrapada en papel y la convierte en inteligencia operativa para hospitales y clínicas en República Dominicana."
/>

<!-- 1. HERO -->
<section
	class="relative min-h-[min(90vh,920px)] flex items-center overflow-hidden bg-gradient-to-br from-deep via-[#0c1428] to-deep pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28"
>
	<!-- Animated mesh / orbs -->
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<div
			class="hero-orb absolute -top-32 right-[-10%] h-[min(520px,80vw)] w-[min(520px,80vw)] rounded-full bg-gradient-to-br from-medical/25 to-transparent blur-3xl"
		></div>
		<div
			class="hero-orb-delay absolute bottom-[-20%] left-[-15%] h-[min(480px,75vw)] w-[min(480px,75vw)] rounded-full bg-gradient-to-tr from-health/20 to-transparent blur-3xl"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-[min(600px,90vw)] w-[min(600px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
		></div>
	</div>

	<!-- Dot grid -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.35]"
		style="background-image: radial-gradient(circle at center, rgba(148,163,184,0.22) 1px, transparent 1px); background-size: 24px 24px;"
		aria-hidden="true"
	></div>

	<!-- Geometric accents -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
		<div
			class="absolute top-24 right-[8%] h-24 w-24 rotate-12 rounded-2xl border border-medical/20 bg-medical/5 backdrop-blur-sm animate-fade-in animation-delay-300"
		></div>
		<div
			class="absolute bottom-32 right-[20%] h-16 w-16 -rotate-6 rounded-xl border border-health/25 bg-health/5 animate-fade-in animation-delay-400"
		></div>
		<div
			class="absolute top-1/3 left-[6%] hidden lg:block h-20 w-20 rounded-full border border-white/10 animate-fade-in animation-delay-500"
		></div>
	</div>

	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl">
			<p
				class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-medical/90 backdrop-blur-sm animate-fade-in-up"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-health shadow-[0_0_12px_rgba(16,185,129,0.7)]"></span>
				IA para salud en República Dominicana
			</p>
			<h1
				class="font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.35rem] xl:text-6xl animate-fade-in-up animation-delay-100"
			>
				Rescatamos información crítica atrapada en papel y la convertimos en inteligencia operativa
			</h1>
			<p
				class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl animate-fade-in-up animation-delay-200"
			>
				Soluciones de inteligencia artificial para hospitales y clínicas: digitalización asistida,
				expediente estructurado y automatización que reduce fricción entre áreas clínicas y
				administrativas.
			</p>
			<div
				class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-in-up animation-delay-300"
			>
				<a
					href="/contacto"
					class="inline-flex items-center justify-center gap-2 rounded-xl bg-medical px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-medical/30 transition-all hover:bg-medical-dark hover:shadow-xl hover:shadow-medical/35 hover:-translate-y-0.5"
				>
					Solicitar diagnóstico
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</a>
				<a
					href="/soluciones"
					class="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
				>
					Ver soluciones
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</a>
			</div>
		</div>

		<!-- Bottom trust strip -->
		<div
			class="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3 animate-fade-in-up animation-delay-400"
		>
			<div class="flex items-center gap-3 text-sm text-slate-400">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-medical"
				>
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
						/>
					</svg>
				</div>
				<span class="leading-snug">Enfoque institucional y sector salud</span>
			</div>
			<div class="flex items-center gap-3 text-sm text-slate-400">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-health"
				>
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
						/>
					</svg>
				</div>
				<span class="leading-snug">Implementación gradual y medible</span>
			</div>
			<div class="flex items-center gap-3 text-sm text-slate-400">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-medical"
				>
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 .414-.168.81-.47 1.11-.3.3-.696.47-1.11.47H5.22c-.414 0-.81-.168-1.11-.47a1.57 1.57 0 01-.47-1.11v-3.75z"
						/>
					</svg>
				</div>
				<span class="leading-snug">Datos listos para analítica y cumplimiento</span>
			</div>
		</div>
	</div>
</section>

<!-- 2. PROBLEM -->
<section class="bg-white py-14 sm:py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			eyebrow="El problema"
			title="Cuando la información está en papel, el hospital pierde tiempo, trazabilidad y capacidad de respuesta"
			description="Los expedientes físicos generan cuellos de botella invisibles hasta que una auditoría, una demanda o un pico de demanda los hace evidentes."
		/>
		<div class="mx-auto mt-10 sm:mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each problemStats as stat, i}
				<div
					class="group relative overflow-hidden rounded-2xl border border-border bg-light p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-medical/25 hover:shadow-lg hover:shadow-deep/5"
					style="animation-delay: {i * 80}ms"
				>
					<div
						class="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-medical/5 transition-transform duration-500 group-hover:scale-150"
					></div>
					<div
						class="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-medical shadow-sm ring-1 ring-border transition-transform duration-300 group-hover:-translate-y-0.5"
					>
						{#if stat.icon === 'clock'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
					{:else if stat.icon === 'path'}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
							/>
						</svg>
						{:else if stat.icon === 'bolt'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
								/>
							</svg>
						{:else}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						{/if}
					</div>
					<p class="font-[family-name:var(--font-heading)] text-lg font-bold text-deep">{stat.value}</p>
					<p class="mt-2 text-sm leading-relaxed text-muted">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 3. SOLUTION OVERVIEW -->
<section
	class="relative overflow-hidden bg-light py-14 sm:py-20 lg:py-28"
>
	<div
		class="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-medical/10 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			eyebrow="Nuestra propuesta"
			title="IA aplicada a la realidad hospitalaria"
			description="Combinamos visión por computador, procesamiento de lenguaje y diseño de procesos para que la información fluya donde se necesita."
		/>
		<div class="mt-10 sm:mt-16 grid gap-8 sm:grid-cols-2 lg:gap-10">
			{#each solutions as item}
				<div
					class="group relative flex flex-col rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-medical/20 hover:shadow-xl hover:shadow-deep/[0.06]"
				>
					<div
						class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-medical/10 to-health/10 text-medical-dark ring-1 ring-medical/15 transition-transform duration-300 group-hover:-translate-y-0.5"
					>
						{#if item.icon === 'doc'}
							<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
								/>
							</svg>
						{:else if item.icon === 'clipboard'}
							<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
								/>
							</svg>
						{:else if item.icon === 'cog'}
							<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
								/>
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						{:else}
							<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 010-3.586L11.42 15.17z"
								/>
							</svg>
						{/if}
					</div>
					<h3 class="font-[family-name:var(--font-heading)] text-xl font-bold text-deep">
						{item.title}
					</h3>
					<p class="mt-3 flex-1 text-muted leading-relaxed">{item.desc}</p>
					<a
						href="/soluciones"
						class="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-medical transition-colors hover:text-medical-dark"
					>
						Explorar
						<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 4. HOSPITALS BLOCK -->
<section class="relative overflow-hidden bg-deep py-14 sm:py-20 lg:py-28">
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<div
			class="absolute inset-0 opacity-[0.12]"
			style="background-image: linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px); background-size: 48px 48px;"
		></div>
		<div
			class="absolute bottom-0 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-t from-medical/10 to-transparent blur-2xl"
		></div>
	</div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
			<div class="text-center lg:col-span-7 lg:text-left">
				<p class="text-sm font-semibold uppercase tracking-wide text-medical/90">Hospitales públicos</p>
				<h2
					class="mt-4 font-[family-name:var(--font-heading)] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
				>
					Pensado para instituciones con alto volumen documental y baja modernización
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-slate-400">
					Entendemos presupuestos acotados, personal saturado y sistemas heterogéneos. Priorizamos
					quick wins, gobernanza clara y rutas de adopción que no dependan de un “big bang” imposible.
				</p>
				<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
					<a
						href="/sectores/hospitales-publicos"
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-medical px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-medical/25 transition-all hover:bg-medical-dark hover:-translate-y-0.5"
					>
						Ver enfoque para el sector público
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</a>
					<a
						href="/contacto"
						class="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/35 hover:bg-white/5"
					>
						Agendar conversación
					</a>
				</div>
			</div>
			<div class="mx-auto grid w-full max-w-lg gap-4 sm:grid-cols-3 lg:col-span-5 lg:max-w-none lg:grid-cols-1">
				{#each [
					{ label: 'Resiliencia operativa', icon: `<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>` },
					{ label: 'Priorización por impacto', icon: `<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>` },
					{ label: 'Capacitación incluida', icon: `<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>` },
				] as item}
					<div
						class="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-5 text-center backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.06] lg:text-left"
					>
						<div
							class="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-health/20 text-health lg:mx-0"
						>
							{@html item.icon}
						</div>
						<p class="text-sm font-semibold leading-snug text-white">{item.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- 5. HOW WE WORK -->
<section class="bg-white py-14 sm:py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			eyebrow="Metodología"
			title="Cómo trabajamos con su institución"
			description="Un proceso claro, de menor riesgo, que va del entendimiento del problema al valor en producción."
		/>
		<div class="relative mx-auto mt-10 sm:mt-16 max-w-3xl">
			<div
				class="absolute left-[1.125rem] top-3 bottom-3 w-px bg-gradient-to-b from-medical/80 via-border to-health/80 sm:left-5"
				aria-hidden="true"
			></div>
			<ol class="relative space-y-8 sm:space-y-10">
				{#each steps as step}
					<li class="relative flex gap-6 pl-10 sm:gap-8 sm:pl-14">
						<div
							class="absolute left-[0.6rem] top-7 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-medical shadow-md shadow-medical/30 sm:left-[1.15rem] sm:top-8"
							aria-hidden="true"
						></div>
						<div
							class="group flex-1 rounded-2xl border border-border bg-light p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-medical/20 hover:shadow-lg hover:shadow-deep/[0.05] sm:p-7"
						>
							<div class="flex flex-wrap items-center gap-3">
								<span
									class="inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full bg-medical px-2.5 text-xs font-bold text-white shadow-md shadow-medical/25"
								>
									{step.n}
								</span>
								<h3 class="font-[family-name:var(--font-heading)] text-xl font-bold text-deep">
									{step.title}
								</h3>
							</div>
							<p class="mt-3 text-muted leading-relaxed">{step.desc}</p>
						</div>
					</li>
				{/each}
			</ol>
			<div class="mt-12 text-center">
				<a
					href="/como-trabajamos"
					class="inline-flex items-center gap-2 text-sm font-semibold text-medical hover:text-medical-dark"
				>
					Conocer el detalle del proceso
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- 6. TRUST -->
<section class="relative overflow-hidden bg-light py-14 sm:py-20 lg:py-28">
	<div
		class="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-health/10 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered
			eyebrow="Confianza"
			title="Tecnología útil, segura y aterrizada"
			description="Construimos para entornos regulados y equipos que necesitan resultados, no experimentos aislados."
		/>
		<div class="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
			{#each trustPoints as point}
				<div
					class="group rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-health/25 hover:shadow-xl hover:shadow-deep/[0.05]"
				>
					<div
						class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-health-dark ring-1 ring-border transition-transform duration-300 group-hover:-translate-y-0.5"
					>
						{#if point.icon === 'shield'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
								/>
							</svg>
						{:else if point.icon === 'map'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
						{:else if point.icon === 'sparkles'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
								/>
							</svg>
						{:else}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								/>
							</svg>
						{/if}
					</div>
					<h3 class="font-[family-name:var(--font-heading)] text-lg font-bold text-deep">{point.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-muted">{point.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 7. CTA FINAL -->
<CtaBanner
	title="Conversemos sobre el problema que más tiempo le está costando a su institución"
	buttonText="Agendar una consulta"
	buttonHref="/agenda"
/>

<style>
	@keyframes hero-float {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(12px, -16px) scale(1.03);
		}
	}
	@keyframes hero-float-delayed {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(-14px, 12px) scale(1.02);
		}
	}
	.hero-orb {
		animation: hero-float 18s ease-in-out infinite;
	}
	.hero-orb-delay {
		animation: hero-float-delayed 22s ease-in-out infinite;
	}
</style>
