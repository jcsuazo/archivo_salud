<script lang="ts">
	interface Props {
		summary: string;
	}

	let { summary }: Props = $props();
</script>

<section
	class="rounded-xl border border-medical/20 bg-gradient-to-br from-light via-white to-medical/5 p-5 sm:p-6 shadow-sm"
	aria-labelledby="result-summary-heading"
>
	<div class="flex flex-wrap items-center gap-3 mb-4">
		<span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-medical/15 text-medical" aria-hidden="true">
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</span>
		<h2
			id="result-summary-heading"
			class="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-deep flex-1 min-w-[12rem]"
		>
			Resumen General
		</h2>
		<span
			class="inline-flex items-center rounded-full border border-medical/30 bg-white/80 px-3 py-1 text-xs font-medium text-medical-dark"
		>
			Generado por IA
		</span>
	</div>
	<p class="text-sm sm:text-base text-deep/90 leading-relaxed whitespace-pre-wrap">{summary}</p>
</section>
