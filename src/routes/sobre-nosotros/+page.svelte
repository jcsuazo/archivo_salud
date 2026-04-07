<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	const values = [
		{
			icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>`,
			title: 'Soluciones reales, no demos',
			description: 'Cada herramienta que construimos resuelve un problema concreto dentro de la operación del centro de salud.'
		},
		{
			icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
			title: 'Transparencia total',
			description: 'Comunicamos con claridad lo que la tecnología puede y no puede hacer. Sin promesas vacías.'
		},
		{
			icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>`,
			title: 'Privacidad primero',
			description: 'Los datos de pacientes son sensibles. Todo lo que hacemos respeta controles de acceso y gobernanza de la información.'
		},
		{
			icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>`,
			title: 'Adaptación al contexto',
			description: 'Cada institución tiene su propia realidad. Diseñamos desde su nivel de madurez digital, no desde lo ideal.'
		},
		{
			icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`,
			title: 'Acompañamiento técnico',
			description: 'No entregamos software y nos vamos. Acompañamos cada fase con soporte, ajustes y mejora continua.'
		},
		{
			icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>`,
			title: 'Impacto medible',
			description: 'Definimos métricas claras desde el inicio para que cada implementación demuestre su valor operativo.'
		}
	];
</script>

<SeoHead
	title="Sobre nosotros | ArchivoSalud"
	description="Somos un equipo enfocado en crear soluciones de IA que resuelven problemas reales de operación, documentación y acceso a la información en centros de salud."
/>

<PageHero
	eyebrow="Sobre nosotros"
	title="Transformación digital útil para el sector salud"
	description="Somos un equipo enfocado en crear soluciones de IA que resuelven problemas reales de operación, documentación y acceso a la información en centros de salud."
/>

<!-- Mission statement -->
<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
			<div>
				<SectionHeading
					eyebrow="Nuestra filosofía"
					title="No vendemos tecnología genérica"
					description="Diseñamos herramientas aterrizadas a la realidad institucional, al nivel de madurez digital y al tipo de documento o proceso que más valor puede generar."
				/>
				<div class="mt-8 space-y-4">
					<p class="text-muted leading-relaxed">
						Entendemos que la transformación digital en salud no empieza por el software más moderno, sino por el problema más urgente. Por eso comenzamos cada proyecto escuchando, diagnosticando y proponiendo soluciones que realmente se puedan implementar.
					</p>
					<p class="text-muted leading-relaxed">
						Nuestro equipo combina experiencia en inteligencia artificial, procesamiento de documentos y operación hospitalaria para crear herramientas que se integran con la realidad del centro de salud, no al revés.
					</p>
				</div>
			</div>
			<div class="relative">
				<div class="bg-gradient-to-br from-light to-surface rounded-2xl p-6 sm:p-8 lg:p-10 border border-border">
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-lg bg-medical/10 flex items-center justify-center flex-shrink-0 mt-0.5">
								<svg class="w-5 h-5 text-medical" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
									<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-deep font-[family-name:var(--font-heading)]">Enfoque en privacidad</h3>
								<p class="text-sm text-muted mt-1">Control de acceso y gobernanza de la información desde el primer día.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-lg bg-health/10 flex items-center justify-center flex-shrink-0 mt-0.5">
								<svg class="w-5 h-5 text-health" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
									<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-deep font-[family-name:var(--font-heading)]">Implementación gradual</h3>
								<p class="text-sm text-muted mt-1">Empezamos por pilotos acotados antes de escalar a toda la operación.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-lg bg-medical/10 flex items-center justify-center flex-shrink-0 mt-0.5">
								<svg class="w-5 h-5 text-medical" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
									<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-deep font-[family-name:var(--font-heading)]">Equipo multidisciplinario</h3>
								<p class="text-sm text-muted mt-1">IA, procesamiento documental y comprensión de la operación hospitalaria.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="absolute -top-4 -right-4 w-24 h-24 bg-medical/5 rounded-full blur-2xl"></div>
				<div class="absolute -bottom-4 -left-4 w-32 h-32 bg-health/5 rounded-full blur-2xl"></div>
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section class="py-14 sm:py-20 lg:py-28 bg-light">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<SectionHeading
			centered={true}
			eyebrow="Nuestros principios"
			title="Cómo pensamos cada proyecto"
			description="Estos principios guían cada decisión que tomamos, desde el diagnóstico inicial hasta el escalado de la solución."
		/>
		<div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each values as value, i}
				<div class="group bg-white rounded-xl p-7 border border-border hover:shadow-lg hover:shadow-deep/5 hover:-translate-y-0.5 transition-all">
					<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-medical/10 to-health/10 flex items-center justify-center text-medical mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
						{@html value.icon}
					</div>
					<h3 class="text-lg font-bold text-deep mb-2 font-[family-name:var(--font-heading)]">{value.title}</h3>
					<p class="text-sm text-muted leading-relaxed">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Approach -->
<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<SectionHeading
				centered={true}
				eyebrow="Nuestro enfoque"
				title="Tecnología con propósito clínico y operativo"
			/>
			<div class="mt-8 space-y-5 text-muted leading-relaxed">
				<p>
					No buscamos aplicar inteligencia artificial por moda. Cada proyecto parte de una necesidad real: un archivo que no se puede consultar, un proceso que consume horas, un expediente que debería estar completo pero no lo está.
				</p>
				<p>
					Nuestro trabajo es entender esa necesidad, diseñar la herramienta justa y acompañar a la institución durante su adopción. Medimos el éxito por el impacto operativo, no por la complejidad técnica.
				</p>
			</div>
			<div class="mt-10">
				<a
					href="/como-trabajamos"
					class="inline-flex items-center gap-2 text-medical font-semibold hover:text-medical-dark transition-colors min-h-11 py-2 px-1 -mx-1"
				>
					Ver cómo trabajamos
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<CtaBanner title="Hablemos sobre su proyecto" buttonText="Contactar al equipo" buttonHref="/contacto" />
