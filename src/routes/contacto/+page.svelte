<script lang="ts">
	import { enhance } from '$app/forms';
	import PageHero from '$lib/components/PageHero.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	let { form } = $props();
	let submitting = $state(false);

	const problems = [
		{ icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>`, text: 'Archivos físicos acumulados' },
		{ icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>`, text: 'Expedientes dispersos' },
		{ icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>`, text: 'Búsqueda lenta de información' },
		{ icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>`, text: 'Formularios manuales' },
		{ icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`, text: 'Procesos administrativos repetitivos' },
	];
</script>

<SeoHead
	title="Contacto | ArchivoSalud"
	description="Contáctenos para evaluar cómo la IA puede resolver los problemas de su institución de salud. Archivos físicos, expedientes, automatización y más."
/>

<PageHero
	eyebrow="Contacto"
	title="Cuéntenos qué proceso les está quitando más tiempo"
	description="Podemos evaluar su caso y proponer un camino de solución adaptado a su institución."
/>

<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-5 gap-12 lg:gap-16">
			<!-- Left column -->
			<div class="lg:col-span-2">
				<h2 class="text-2xl font-bold text-deep mb-4 font-[family-name:var(--font-heading)]">
					Evaluamos casos como
				</h2>
				<div class="space-y-3 mb-10">
					{#each problems as problem}
						<div class="flex items-center gap-3 text-muted">
							<div class="w-9 h-9 rounded-lg bg-light flex items-center justify-center text-medical flex-shrink-0">
								{@html problem.icon}
							</div>
							<span class="text-sm">{problem.text}</span>
						</div>
					{/each}
				</div>

				<div class="bg-gradient-to-br from-light to-surface rounded-xl p-6 border border-border">
					<h3 class="text-sm font-semibold text-deep mb-3 font-[family-name:var(--font-heading)]">Información de contacto</h3>
					<div class="space-y-3">
						<div class="flex items-center gap-3">
							<svg class="w-4 h-4 text-medical flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
							</svg>
							<a href="mailto:info@archivosalud.com" class="text-sm text-muted hover:text-medical transition-colors">info@archivosalud.com</a>
						</div>
						<div class="flex items-center gap-3">
							<svg class="w-4 h-4 text-medical flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
							</svg>
						<span class="text-sm text-muted">Santo Domingo, República Dominicana</span>
					</div>
					<div class="flex items-center gap-3">
						<svg class="w-4 h-4 text-medical flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
						</svg>
						<a href="tel:+18299664503" class="text-sm text-muted hover:text-medical transition-colors">(829) 966-4503</a>
					</div>
				</div>
				</div>
			</div>

			<!-- Right column - Form -->
			<div class="lg:col-span-3">
				{#if form?.success}
					<div class="bg-health/5 border border-health/20 rounded-xl p-6 sm:p-8 text-center">
						<div class="w-16 h-16 rounded-full bg-health/10 flex items-center justify-center mx-auto mb-4">
							<svg class="w-8 h-8 text-health" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-deep mb-2 font-[family-name:var(--font-heading)]">Mensaje recibido</h3>
						<p class="text-muted">Nos pondremos en contacto con usted en las próximas 24 horas hábiles.</p>
					</div>
				{:else}
					<form
						method="POST"
						use:enhance={() => {
							submitting = true;
							return async ({ update }) => {
								await update();
								submitting = false;
							};
						}}
						class="bg-white rounded-xl border border-border p-6 sm:p-8 shadow-sm"
					>
						<h3 class="text-xl font-bold text-deep mb-6 font-[family-name:var(--font-heading)]">Envíenos su consulta</h3>
						{#if form?.error}
							<div class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{form.error}</div>
						{/if}
						<div class="grid sm:grid-cols-2 gap-5">
							<div>
								<label for="nombre" class="block text-sm font-medium text-deep mb-1.5">Nombre *</label>
								<input
									type="text"
									id="nombre"
									name="nombre"
									required
									autocomplete="name"
									value={form?.nombre ?? ''}
									class="w-full min-h-11 px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors"
									placeholder="Su nombre completo"
								/>
							</div>
							<div>
								<label for="institucion" class="block text-sm font-medium text-deep mb-1.5">Institución *</label>
								<input
									type="text"
									id="institucion"
									name="institucion"
									required
									autocomplete="organization"
									value={form?.institucion ?? ''}
									class="w-full min-h-11 px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors"
									placeholder="Nombre de la institución"
								/>
							</div>
							<div>
								<label for="cargo" class="block text-sm font-medium text-deep mb-1.5">Cargo</label>
								<input
									type="text"
									id="cargo"
									name="cargo"
									value={form?.cargo ?? ''}
									class="w-full min-h-11 px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors"
									placeholder="Su cargo o posición"
								/>
							</div>
							<div>
								<label for="correo" class="block text-sm font-medium text-deep mb-1.5">Correo electrónico *</label>
								<input
									type="email"
									id="correo"
									name="correo"
									required
									autocomplete="email"
									value={form?.correo ?? ''}
									class="w-full min-h-11 px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors"
									placeholder="correo@institucion.com"
								/>
							</div>
							<div>
								<label for="telefono" class="block text-sm font-medium text-deep mb-1.5">Teléfono</label>
								<input
									type="tel"
									id="telefono"
									name="telefono"
									autocomplete="tel"
									value={form?.telefono ?? ''}
									class="w-full min-h-11 px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors"
									placeholder="+1 (809) 000-0000"
								/>
							</div>
							<div>
								<label for="tipoInstitucion" class="block text-sm font-medium text-deep mb-1.5">Tipo de institución</label>
								<select
									id="tipoInstitucion"
									name="tipoInstitucion"
									value={form?.tipoInstitucion ?? ''}
									class="w-full min-h-11 px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors appearance-none"
								>
									<option value="">Seleccionar...</option>
									<option value="hospital-publico">Hospital público</option>
									<option value="clinica-privada">Clínica privada</option>
									<option value="centro-diagnostico">Centro diagnóstico</option>
									<option value="ars">ARS / Administración</option>
									<option value="otro">Otro</option>
								</select>
							</div>
						</div>
						<div class="mt-5">
							<label for="problema" class="block text-sm font-medium text-deep mb-1.5">¿Cuál es el principal problema que desea resolver? *</label>
							<textarea
								id="problema"
								name="problema"
								required
								rows="4"
								value={form?.problema ?? ''}
								class="w-full px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors resize-none"
								placeholder="Describa brevemente el proceso o problema que más tiempo les cuesta..."
							></textarea>
						</div>
						<div class="mt-6">
							<button
								type="submit"
								disabled={submitting}
								class="w-full sm:w-auto min-h-11 inline-flex items-center justify-center gap-2 px-8 py-3 bg-medical text-white font-semibold rounded-lg hover:bg-medical-dark transition-all shadow-sm shadow-medical/20 hover:shadow-md hover:shadow-medical/30 cursor-pointer disabled:opacity-70 disabled:cursor-wait"
							>
								{submitting ? 'Enviando...' : 'Enviar consulta'}
								<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
								</svg>
							</button>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
