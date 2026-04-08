<script lang="ts">
	import type { Hypothesis } from '$lib/types/lab';

	interface Props {
		hypothesis: Hypothesis;
		index?: number;
	}

	let { hypothesis, index = 0 }: Props = $props();

	const confidencePct = $derived(
		hypothesis.confidence_score > 1
			? Math.round(Math.min(100, Math.max(0, hypothesis.confidence_score)))
			: Math.round(Math.min(100, Math.max(0, hypothesis.confidence_score * 100)))
	);
</script>

<article
	class="rounded-xl border border-health/25 bg-gradient-to-br from-white to-health/5 p-5 sm:p-6 shadow-sm"
	aria-labelledby="hyp-title-{index}"
>
	<div class="flex flex-wrap items-start justify-between gap-3 mb-3">
		<h3
			id="hyp-title-{index}"
			class="font-[family-name:var(--font-heading)] text-base sm:text-lg font-bold text-deep flex-1 min-w-0"
		>
			{hypothesis.title}
		</h3>
		<span
			class="shrink-0 inline-flex items-center rounded-full border border-health/40 bg-white px-3 py-1 text-xs font-semibold text-health"
		>
			Confianza ~{confidencePct}%
		</span>
	</div>
	<p class="text-sm text-muted leading-relaxed mb-4">{hypothesis.description}</p>
	{#if hypothesis.evidence?.length}
		<div class="mb-4">
			<p class="text-xs font-semibold text-deep uppercase tracking-wide mb-2">Evidencia citada</p>
			<ul class="list-disc list-inside text-sm text-muted space-y-1">
				{#each hypothesis.evidence as ev (ev)}
					<li>{ev}</li>
				{/each}
			</ul>
		</div>
	{/if}
	<p class="text-xs text-muted border-t border-border pt-3 leading-relaxed">{hypothesis.disclaimer}</p>
</article>
