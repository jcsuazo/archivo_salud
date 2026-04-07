<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const stack = [
		{ label: 'Procesamiento de documentos', icon: 'doc' as const },
		{ label: 'OCR', icon: 'ocr' as const },
		{ label: 'Búsqueda inteligente', icon: 'search' as const },
		{ label: 'Modelos de lenguaje', icon: 'llm' as const },
		{ label: 'Paneles operativos', icon: 'panel' as const },
		{ label: 'Integraciones', icon: 'plug' as const },
	] as const;

	const priorities = [
		{
			title: 'Seguridad',
			text: 'Cifrado, buenas prácticas de despliegue y minimización de datos según el alcance acordado.',
			icon: 'lock',
		},
		{
			title: 'Trazabilidad',
			text: 'Registro de accesos y acciones relevantes para auditoría interna y cumplimiento.',
			icon: 'trail',
		},
		{
			title: 'Control de acceso',
			text: 'Roles alineados a su organigrama: quién ve qué, y bajo qué condiciones.',
			icon: 'users',
		},
		{
			title: 'Despliegues ajustados',
			text: 'On-premise, nube privada o híbrido, según políticas de su institución.',
			icon: 'server',
		},
	] as const;
</script>

<SeoHead
	title="Tecnología | ArchivoSalud"
	description="Arquitectura flexible para salud en RD: procesamiento documental, OCR, búsqueda inteligente, LLM, paneles e integraciones con seguridad y trazabilidad."
/>

<PageHero
	eyebrow="Ingeniería"
	title="Tecnología moderna, implementada con criterio"
	description="Arquitectura flexible que combina procesamiento de documentos, OCR, búsqueda inteligente, modelos de lenguaje, paneles operativos e integraciones — sin imponer un único proveedor ni una receta única."
	ctaText="Conocer más sobre nuestro enfoque técnico"
	ctaHref="/contacto"
/>

<section class="relative bg-white py-14 sm:py-20 lg:py-28 overflow-hidden">
	<div
		class="pointer-events-none absolute bottom-0 right-0 w-[min(90vw,36rem)] h-[min(90vw,36rem)] bg-health/[0.06] rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
		aria-hidden="true"
	></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center mb-14 sm:mb-16 animate-fade-in-up">
			<SectionHeading
				centered
				eyebrow="Stack modular"
				title="Capacidades que ensamblamos según su realidad"
				description="Seleccionamos y conectamos componentes según volumen, calidad de imagen, latencia aceptable y su mapa de sistemas. Evoluciona por módulos, no por reescrituras totales."
			/>
		</div>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto mb-16 sm:mb-20"
		>
			{#each stack as cell, i}
				<div
					class="group relative flex flex-col items-center text-center rounded-2xl border border-border bg-gradient-to-b from-white to-surface/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-deep/[0.06] hover:border-medical/25 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {80 + i * 60}ms;"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-medical/10 text-medical ring-1 ring-medical/15 group-hover:bg-medical group-hover:text-white group-hover:ring-medical/0 group-hover:-translate-y-0.5 transition-all duration-300"
					>
						{#if cell.icon === 'doc'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12h3m2.625 0h-3.375m0 0h-3m0 0H8.25m9.75 0v.008c0 .414.336.75.75.75h.375m-1.5 0H21"
								/>
							</svg>
						{:else if cell.icon === 'ocr'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						{:else if cell.icon === 'search'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						{:else if cell.icon === 'llm'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
								/>
							</svg>
						{:else if cell.icon === 'panel'}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v12a2.25 2.25 0 01-2.25 2.25H15.75a2.25 2.25 0 01-2.25-2.25V6z"
								/>
							</svg>
						{:else}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m4.95-4.95l1.757-1.757a4.5 4.5 0 016.364 6.364l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757"
								/>
							</svg>
						{/if}
					</div>
					<p class="text-sm sm:text-base font-bold text-deep font-[family-name:var(--font-heading)] leading-snug">
						{cell.label}
					</p>
				</div>
			{/each}
		</div>

		<div class="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start">
			<div class="animate-fade-in-up animation-delay-200">
				<SectionHeading
					eyebrow="Flujo de datos"
					title="Del archivo al insight, con límites claros"
					description="Ingesta heterogénea, extracción y estructura, índices para búsqueda híbrida y semántica, y capas de aplicación (API, paneles, trabajos programados) gobernadas por reglas de su institución."
				/>
				<ul class="mt-10 space-y-4">
					<li class="flex gap-3 text-muted">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-medical"></span>
						<span>PDF, imágenes y escaneos de calidad variable: normalización antes de indexar.</span>
					</li>
					<li class="flex gap-3 text-muted">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-health"></span>
						<span>Clasificación de tipos de documento y campos clave según su modelo de expediente.</span>
					</li>
					<li class="flex gap-3 text-muted">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-medical"></span>
						<span>Búsqueda por texto, metadatos y significado sobre su corpus — no sobre internet.</span>
					</li>
					<li class="flex gap-3 text-muted">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-health"></span>
						<span>Asistencia con modelos de lenguaje acotada por políticas, roles y revisión humana.</span>
					</li>
				</ul>
			</div>

			<div
				class="relative rounded-3xl border border-border bg-gradient-to-br from-light via-white to-surface p-8 sm:p-10 shadow-inner overflow-hidden animate-fade-in-up animation-delay-300"
			>
				<div class="absolute inset-0 opacity-[0.35] pointer-events-none" aria-hidden="true">
					<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<pattern id="grid-tech-as" width="32" height="32" patternUnits="userSpaceOnUse">
								<path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" stroke-width="0.5" class="text-border" />
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#grid-tech-as)" />
					</svg>
				</div>
				<div class="relative space-y-6">
					<div class="flex items-center justify-center gap-2 flex-wrap">
						<div class="px-4 py-2 rounded-full bg-deep text-white text-xs font-semibold shadow-lg">Ingesta</div>
						<svg class="w-5 h-5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"
							><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg
						>
						<div
							class="px-4 py-2 rounded-full bg-medical/15 text-medical-dark text-xs font-semibold border border-medical/20"
						>
							OCR / Estructura
						</div>
						<svg class="w-5 h-5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"
							><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg
						>
						<div class="px-4 py-2 rounded-full bg-health/15 text-health-dark text-xs font-semibold border border-health/20">
							Índice y búsqueda
						</div>
					</div>
					<div class="flex justify-center">
						<div class="w-px h-8 bg-gradient-to-b from-border to-medical/40"></div>
					</div>
					<div class="rounded-2xl border border-border bg-white/90 backdrop-blur p-6 shadow-lg shadow-deep/5">
						<div class="flex items-center gap-3 mb-4">
							<div class="h-10 w-10 rounded-lg bg-gradient-to-br from-medical to-health flex items-center justify-center">
								<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m9-13.5h-1.5m0 15h-1.5m-15-7.5h-1.5m0 0H3m16.5 0H21"
									/>
								</svg>
							</div>
							<div>
								<p class="text-xs font-bold uppercase tracking-wider text-muted">Orquestación</p>
								<p class="font-semibold text-deep font-[family-name:var(--font-heading)]">Modelos, reglas e integraciones</p>
							</div>
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
							{#each ['API', 'Panel', 'Jobs'] as label}
								<div class="rounded-lg bg-surface border border-border py-3 text-center text-xs font-semibold text-muted">
									{label}
								</div>
							{/each}
						</div>
					</div>
					<div class="flex justify-center gap-3 flex-wrap">
						<div class="h-2 w-2 rounded-full bg-medical animate-pulse"></div>
						<div class="h-2 w-2 rounded-full bg-health animate-pulse [animation-delay:150ms]"></div>
						<div class="h-2 w-2 rounded-full bg-medical-dark animate-pulse [animation-delay:300ms]"></div>
					</div>
					<p class="text-center text-xs text-muted">
						Ilustración conceptual: el detalle técnico se define en propuesta y diseño de arquitectura.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-deep py-14 sm:py-20 lg:py-28 relative overflow-hidden">
	<div
		class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-medical/10 rounded-full blur-3xl pointer-events-none"
		aria-hidden="true"
	></div>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
		<div class="max-w-3xl mb-14 animate-fade-in-up">
			<SectionHeading
				light
				eyebrow="Prioridades no negociables"
				title="Antes de elegir herramientas, alineamos gobernanza"
				description="La tecnología cambia; los requisitos de una institución de salud no. Estas dimensiones guían cada decisión de arquitectura."
			/>
		</div>
		<div class="grid sm:grid-cols-2 gap-6 lg:gap-8">
			{#each priorities as p, i}
				<div
					class="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 hover:bg-white/10 hover:border-medical/30 transition-all duration-300 animate-fade-in-up"
					style="animation-delay: {i * 80}ms;"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl bg-medical/20 text-medical mb-5 group-hover:-translate-y-0.5 transition-transform duration-300"
					>
						{#if p.icon === 'lock'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
								/>
							</svg>
						{:else if p.icon === 'trail'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
								/>
							</svg>
						{:else if p.icon === 'users'}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								/>
							</svg>
						{:else}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6a3 3 0 013-3h13.5a3 3 0 013 3v5.25a3 3 0 01-3 3m-16.5 0a3 3 0 003 3h13.5a3 3 0 003-3m-19.5 0v1.125c0 1.036.84 1.875 1.875 1.875h16.5c1.035 0 1.875-.84 1.875-1.875V18"
								/>
							</svg>
						{/if}
					</div>
					<h3 class="text-xl font-bold text-white font-[family-name:var(--font-heading)]">{p.title}</h3>
					<p class="mt-3 text-white/65 leading-relaxed">{p.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-surface py-16 sm:py-20 border-y border-border">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
		<p class="text-muted leading-relaxed text-lg">
			No amarramos su proyecto a marcas en esta página: en la propuesta técnica detallamos opciones, trade-offs y un plan de migración si ya tienen sistemas en
			uso.
		</p>
	</div>
</section>

<CtaBanner
	title="Hable con ingeniería: alinee arquitectura, seguridad y operación con su equipo de TI y archivo."
	buttonText="Conocer más sobre nuestro enfoque técnico"
	buttonHref="/contacto"
/>
