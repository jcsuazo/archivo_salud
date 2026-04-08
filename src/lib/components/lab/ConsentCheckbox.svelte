<script lang="ts">
	interface Props {
		checked: boolean;
		onchange: (checked: boolean) => void;
	}

	let { checked, onchange }: Props = $props();
</script>

<div
	class="rounded-xl border border-amber-200 bg-amber-50/80 p-4 sm:p-5 shadow-sm"
	role="group"
	aria-labelledby="consent-disclaimer-title"
>
	<div class="flex gap-3">
		<span
			class="shrink-0 mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700"
			aria-hidden="true"
		>
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
		</span>
		<div class="min-w-0 flex-1 space-y-4">
			<h3
				id="consent-disclaimer-title"
				class="font-[family-name:var(--font-heading)] text-sm font-semibold text-deep"
			>
				Descargo de responsabilidad
			</h3>
			<p class="text-sm text-muted leading-relaxed">
				Al utilizar este servicio, usted reconoce que: (1) los resultados son generados por inteligencia
				artificial y NO constituyen un diagnóstico médico, (2) siempre debe consultar con un profesional
				de salud calificado, (3) ArchivoSalud no se hace responsable de decisiones tomadas basándose
				únicamente en estos resultados.
			</p>
			<label class="flex items-start gap-3 cursor-pointer group">
				<input
					type="checkbox"
					class="mt-1 h-4 w-4 shrink-0 rounded border-border text-medical focus:ring-medical"
					{checked}
					onchange={(e) => onchange((e.currentTarget as HTMLInputElement).checked)}
				/>
				<span class="text-sm font-medium text-deep group-hover:text-deep/90">
					He leído y acepto el descargo de responsabilidad
				</span>
			</label>
		</div>
	</div>
</div>
