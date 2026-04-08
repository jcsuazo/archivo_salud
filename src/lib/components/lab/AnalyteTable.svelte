<script lang="ts">
	import type { LabTest } from '$lib/types/lab';

	interface Props {
		tests: LabTest[];
	}

	let { tests }: Props = $props();

	function flagLabel(flag: LabTest['flag']): string {
		switch (flag) {
			case 'low':
				return 'Bajo';
			case 'high':
				return 'Alto';
			default:
				return 'Normal';
		}
	}

	function flagClass(flag: LabTest['flag'], critical: boolean): string {
		if (critical) return 'text-red-700 font-semibold';
		if (flag === 'low' || flag === 'high') return 'text-amber-700 font-medium';
		return 'text-muted';
	}
</script>

<section class="rounded-xl border border-border bg-white overflow-hidden shadow-sm" aria-labelledby="analytes-heading">
	<div class="border-b border-border bg-surface/80 px-5 py-4">
		<h2 id="analytes-heading" class="font-[family-name:var(--font-heading)] text-lg font-bold text-deep">
			Pruebas de laboratorio
		</h2>
		<p class="text-sm text-muted mt-1">Valores extraídos del informe (referencia según el laboratorio).</p>
	</div>
	<div class="overflow-x-auto">
		<table class="w-full text-left text-sm">
			<thead>
				<tr class="border-b border-border bg-light/50 text-muted text-xs uppercase tracking-wide">
					<th class="px-4 py-3 font-semibold">Prueba</th>
					<th class="px-4 py-3 font-semibold whitespace-nowrap">Resultado</th>
					<th class="px-4 py-3 font-semibold hidden md:table-cell">Referencia</th>
					<th class="px-4 py-3 font-semibold whitespace-nowrap">Estado</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-border">
				{#each tests as t (t.canonical_code + t.source_name)}
					<tr class="hover:bg-surface/40 transition-colors">
						<td class="px-4 py-3 align-top">
							<p class="font-medium text-deep font-[family-name:var(--font-heading)]">{t.canonical_name}</p>
							<p class="text-xs text-muted mt-0.5">{t.source_name}</p>
						</td>
						<td class="px-4 py-3 align-top whitespace-nowrap">
							<span class="font-semibold tabular-nums text-deep">{t.value}</span>
							<span class="text-muted ml-1">{t.unit}</span>
						</td>
						<td class="px-4 py-3 align-top text-muted hidden md:table-cell max-w-xs">
							{t.reference_range.text}
						</td>
						<td class="px-4 py-3 align-top">
							<span class={flagClass(t.flag, t.critical)}>
								{flagLabel(t.flag)}
								{#if t.critical}
									<span class="ml-1 text-xs">(crítico)</span>
								{/if}
							</span>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
