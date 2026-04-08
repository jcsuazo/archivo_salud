<script lang="ts">
	import type { Finding } from '$lib/types/lab';

	interface Props {
		findings: Finding[];
	}

	let { findings }: Props = $props();

	function severityBorder(s: Finding['severity']): string {
		switch (s) {
			case 'critical':
				return 'border-red-200 bg-red-50/50';
			case 'warning':
				return 'border-amber-200 bg-amber-50/40';
			default:
				return 'border-border bg-surface/60';
		}
	}
</script>

<section class="rounded-xl border border-border bg-white p-5 sm:p-6 shadow-sm" aria-labelledby="findings-heading">
	<h2 id="findings-heading" class="font-[family-name:var(--font-heading)] text-lg font-bold text-deep mb-4">
		Hallazgos destacados
	</h2>
	<ul class="space-y-3">
		{#each findings as f (f.test_code + f.description.slice(0, 40))}
			<li
				class="rounded-lg border px-4 py-3 {severityBorder(f.severity)}"
			>
				<p class="text-xs font-semibold text-muted uppercase tracking-wide mb-1">{f.test_code}</p>
				<p class="text-sm text-deep leading-relaxed">{f.description}</p>
			</li>
		{/each}
	</ul>
</section>
