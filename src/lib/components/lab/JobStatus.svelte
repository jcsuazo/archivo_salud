<script lang="ts">
	import type { JobStatusType } from '$lib/types/lab';

	interface Props {
		status: JobStatusType;
		progress: number;
	}

	let { status, progress }: Props = $props();

	const clampedProgress = $derived(Math.min(100, Math.max(0, progress)));

	const label = $derived.by(() => {
		switch (status) {
			case 'pending':
				return 'Preparando análisis...';
			case 'uploading':
				return 'Subiendo archivo...';
			case 'processing':
				return 'Analizando resultados...';
			case 'completed':
				return 'Análisis completado';
			case 'failed':
				return 'Error en el análisis';
			default:
				return '';
		}
	});
</script>

<div
	class="rounded-xl border border-border bg-white p-5 sm:p-6 transition-all duration-300 ease-out"
	role="status"
	aria-live="polite"
	aria-atomic="true"
>
	<div class="flex items-start gap-4">
		<div
			class="shrink-0 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300
				{status === 'completed'
				? 'bg-health/15 text-health'
				: status === 'failed'
					? 'bg-red-100 text-red-600'
					: 'bg-medical/10 text-medical'}"
			aria-hidden="true"
		>
			{#if status === 'pending'}
				<svg class="w-6 h-6 motion-safe:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{:else if status === 'uploading'}
				<svg class="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
				</svg>
			{:else if status === 'processing'}
				<svg
					class="w-6 h-6 animate-spin"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.75"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
			{:else if status === 'completed'}
				<svg class="w-6 h-6 text-health" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{:else}
				<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{/if}
		</div>
		<div class="min-w-0 flex-1 space-y-3">
			<p
				class="font-[family-name:var(--font-heading)] font-semibold text-deep transition-opacity duration-300"
			>
				{label}
			</p>
			{#if status === 'processing'}
				<div class="space-y-1.5">
					<div
						class="h-2 w-full overflow-hidden rounded-full bg-surface border border-border"
						role="progressbar"
						aria-valuenow={clampedProgress}
						aria-valuemin={0}
						aria-valuemax={100}
					>
						<div
							class="h-full rounded-full bg-gradient-to-r from-medical to-medical-dark transition-[width] duration-500 ease-out"
							style="width: {clampedProgress}%"
						></div>
					</div>
					<p class="text-xs text-muted tabular-nums">{Math.round(clampedProgress)}%</p>
				</div>
			{/if}
		</div>
	</div>
</div>
