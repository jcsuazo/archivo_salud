<script lang="ts">
	import { enhance } from '$app/forms';
	import PageHero from '$lib/components/PageHero.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	let { form } = $props();
	let submitting = $state(false);

	const timeSlots = [
		'09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
		'11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
		'03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
	];

	const expectations = [
		{ title: 'Diagnóstico inicial', description: 'Revisamos su situación actual y los problemas que más impactan su operación.' },
		{ title: 'Exploración de opciones', description: 'Identificamos qué soluciones podrían aplicarse a su caso específico.' },
		{ title: 'Propuesta de siguiente paso', description: 'Definimos un piloto acotado o un plan de acción realista y gradual.' },
	];
</script>

<SeoHead
	title="Agendar consulta | ArchivoSalud"
	description="Agende una consulta con nuestro equipo para evaluar cómo la IA puede transformar los procesos de su institución de salud."
/>

<PageHero
	eyebrow="Agenda"
	title="Agende una consulta con nuestro equipo"
	description="Reserve un espacio para conversar sobre los desafíos de su institución. Sin compromiso, sin presentaciones genéricas."
/>

<section class="py-14 sm:py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-5 gap-12 lg:gap-16">
			<!-- Left column -->
			<div class="lg:col-span-2">
				<h2 class="text-2xl font-bold text-deep mb-4 font-[family-name:var(--font-heading)]">
					Qué esperar de la consulta
				</h2>
				<p class="text-muted mb-8 leading-relaxed">
					Una conversación enfocada de 30–45 minutos para entender su situación y explorar opciones concretas.
				</p>
				<div class="space-y-6">
					{#each expectations as item, i}
						<div class="flex gap-4">
							<div class="flex-shrink-0">
								<div class="w-10 h-10 rounded-full bg-gradient-to-br from-medical to-medical-dark flex items-center justify-center text-white text-sm font-bold">
									{i + 1}
								</div>
							</div>
							<div>
								<h3 class="font-semibold text-deep mb-1 font-[family-name:var(--font-heading)]">{item.title}</h3>
								<p class="text-sm text-muted leading-relaxed">{item.description}</p>
							</div>
						</div>
					{/each}
				</div>

				<div class="mt-10 bg-gradient-to-br from-light to-surface rounded-xl p-6 border border-border">
					<div class="flex items-start gap-3">
						<svg class="w-5 h-5 text-health flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<div>
							<p class="text-sm font-medium text-deep">Sin compromiso</p>
							<p class="text-xs text-muted mt-1">La consulta inicial es gratuita y no implica ningún compromiso de contratación.</p>
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
								<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-deep mb-2 font-[family-name:var(--font-heading)]">Solicitud recibida</h3>
						<p class="text-muted">Confirmaremos su cita en las próximas 24 horas hábiles por correo electrónico.</p>
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
						<h3 class="text-xl font-bold text-deep mb-6 font-[family-name:var(--font-heading)]">Reserve su espacio</h3>
						{#if form?.error}
							<div class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{form.error}</div>
						{/if}
						<div class="grid sm:grid-cols-2 gap-5">
							<div>
								<label for="nombre" class="block text-sm font-medium text-deep mb-1.5">Nombre completo *</label>
								<input
									type="text"
									id="nombre"
									name="nombre"
									required
									autocomplete="name"
									value={form?.nombre ?? ''}
									class="w-full min-h-11 px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors"
									placeholder="Su nombre"
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
								<label for="fecha" class="block text-sm font-medium text-deep mb-1.5">Fecha preferida *</label>
								<input
									type="date"
									id="fecha"
									name="fecha"
									required
									value={form?.fecha ?? ''}
									class="w-full min-h-11 px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors"
								/>
							</div>
							<div>
								<label for="hora" class="block text-sm font-medium text-deep mb-1.5">Hora preferida *</label>
								<select
									id="hora"
									name="hora"
									required
									value={form?.hora ?? ''}
									class="w-full min-h-11 px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors appearance-none"
								>
									<option value="">Seleccionar horario...</option>
									{#each timeSlots as slot}
										<option value={slot}>{slot}</option>
									{/each}
								</select>
							</div>
						</div>
						<div class="mt-5">
							<label for="tema" class="block text-sm font-medium text-deep mb-1.5">Tema principal de la consulta *</label>
							<textarea
								id="tema"
								name="tema"
								required
								rows="4"
								value={form?.tema ?? ''}
								class="w-full px-4 py-3 rounded-lg border border-border bg-white text-deep text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-medical/30 focus:border-medical transition-colors resize-none"
								placeholder="Describa brevemente qué le gustaría discutir en la consulta..."
							></textarea>
						</div>
						<div class="mt-6">
							<button
								type="submit"
								disabled={submitting}
								class="w-full sm:w-auto min-h-11 inline-flex items-center justify-center gap-2 px-8 py-3 bg-medical text-white font-semibold rounded-lg hover:bg-medical-dark transition-all shadow-sm shadow-medical/20 hover:shadow-md hover:shadow-medical/30 cursor-pointer disabled:opacity-70 disabled:cursor-wait"
							>
								{submitting ? 'Enviando...' : 'Solicitar cita'}
								<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
								</svg>
							</button>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
