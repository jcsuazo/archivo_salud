<script lang="ts">
	import { onMount } from 'svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import ResultSummary from '$lib/components/lab/ResultSummary.svelte';
	import AnalyteTable from '$lib/components/lab/AnalyteTable.svelte';
	import FindingsCard from '$lib/components/lab/FindingsCard.svelte';
	import HypothesisCard from '$lib/components/lab/HypothesisCard.svelte';
	import DisclaimerBanner from '$lib/components/lab/DisclaimerBanner.svelte';
	import JobStatus from '$lib/components/lab/JobStatus.svelte';
	import { getJobStatus, pollJobStatus } from '$lib/services/lab-api';
	import type { PageData } from './$types';
	import type { JobStatus as LabJobStatus, Patient, ReportMeta } from '$lib/types/lab';

	let { data }: { data: PageData } = $props();

	let jobState = $state<LabJobStatus | null>(null);
	let loading = $state(true);
	let loadError = $state<string | null>(null);

	let stopPoll: (() => void) | null = null;

	function formatDate(value: string | null): string {
		if (!value) return '—';
		const d = new Date(value);
		if (Number.isNaN(d.getTime())) return value;
		return d.toLocaleDateString('es-DO', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	function patientHasInfo(p: Patient | null): boolean {
		if (!p) return false;
		return Boolean(
			p.name || p.age != null || p.sex || p.document_id
		);
	}

	function metaLine(meta: ReportMeta): { label: string; value: string }[] {
		return [
			{ label: 'Laboratorio', value: meta.lab_name ?? '—' },
			{ label: 'Fecha del informe', value: formatDate(meta.report_date) },
			{ label: 'Fecha de recepción', value: formatDate(meta.received_date) },
			{ label: 'ID del informe', value: meta.report_id ?? '—' }
		];
	}

	const report = $derived(jobState?.result ?? null);
	const isTerminal = $derived(
		jobState?.status === 'completed' || jobState?.status === 'failed'
	);

	onMount(() => {
		let cancelled = false;

		async function init() {
			try {
				const s = await getJobStatus(data.jobId);
				if (cancelled) return;
				jobState = s;
				if (s.status !== 'completed' && s.status !== 'failed') {
					stopPoll = pollJobStatus(data.jobId, (u) => {
						jobState = u;
					});
				}
			} catch {
				if (!cancelled) {
					loadError =
						'No se pudo cargar el estado del análisis. Compruebe su conexión o vuelva a la página de carga.';
				}
			} finally {
				if (!cancelled) loading = false;
			}
		}

		init();

		return () => {
			cancelled = true;
			stopPoll?.();
		};
	});
</script>

<SeoHead
	title="Resultado del Análisis | ArchivoSalud"
	description="Visualice el resumen, pruebas, hallazgos e hipótesis clínicas generadas a partir de su informe de laboratorio. Información orientativa, no sustituye el criterio médico."
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-8 sm:space-y-10">
	{#if loading}
		<div class="flex flex-col items-center justify-center py-20 gap-4">
			<div
				class="h-12 w-12 rounded-full border-2 border-medical border-t-transparent animate-spin"
				aria-hidden="true"
			></div>
			<p class="text-muted text-sm font-medium">Cargando resultado…</p>
		</div>
	{:else if loadError}
		<div
			class="rounded-xl border border-red-200 bg-red-50/90 p-6 sm:p-8 text-center max-w-lg mx-auto space-y-4"
			role="alert"
		>
			<p class="text-red-900 font-medium">{loadError}</p>
			<a
				href="/interpretar-laboratorio"
				class="inline-flex items-center justify-center rounded-lg bg-medical text-white px-5 py-2.5 text-sm font-semibold hover:bg-medical-dark transition-colors"
			>
				Volver a interpretar laboratorio
			</a>
		</div>
	{:else if jobState && !isTerminal}
		<div class="max-w-xl mx-auto py-8">
			<JobStatus status={jobState.status} progress={jobState.progress} />
		</div>
	{:else if jobState?.status === 'failed'}
		<div
			class="rounded-xl border border-red-200 bg-red-50/90 p-6 sm:p-8 text-center max-w-lg mx-auto space-y-4"
			role="alert"
		>
			<h1 class="font-[family-name:var(--font-heading)] text-xl font-bold text-deep">
				No se pudo completar el análisis
			</h1>
			<p class="text-red-900 text-sm">{jobState.error ?? 'Ha ocurrido un error inesperado.'}</p>
			<a
				href="/interpretar-laboratorio"
				class="inline-flex items-center justify-center rounded-lg border border-red-300 bg-white text-red-800 px-5 py-2.5 text-sm font-semibold hover:bg-red-100 transition-colors"
			>
				Volver e intentar de nuevo
			</a>
		</div>
	{:else if jobState?.status === 'completed' && report}
		<header class="space-y-2">
			<p class="text-sm font-semibold text-medical uppercase tracking-wide">Resultado del análisis</p>
			<h1 class="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-deep tracking-tight">
				Informe interpretado
			</h1>
		</header>

		{#if patientHasInfo(report.patient)}
			<section aria-labelledby="patient-heading">
				<h2 id="patient-heading" class="sr-only">Datos del paciente</h2>
				<div class="rounded-xl border border-border bg-surface/80 p-5 sm:p-6">
					<p class="text-xs font-semibold text-muted uppercase tracking-wide mb-3">Paciente (según el informe)</p>
					<dl class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
						{#if report.patient?.name}
							<div>
								<dt class="text-muted">Nombre</dt>
								<dd class="font-medium text-deep">{report.patient.name}</dd>
							</div>
						{/if}
						{#if report.patient?.age != null}
							<div>
								<dt class="text-muted">Edad</dt>
								<dd class="font-medium text-deep">{report.patient.age} años</dd>
							</div>
						{/if}
						{#if report.patient?.sex}
							<div>
								<dt class="text-muted">Sexo</dt>
								<dd class="font-medium text-deep">{report.patient.sex}</dd>
							</div>
						{/if}
						{#if report.patient?.document_id}
							<div>
								<dt class="text-muted">Documento</dt>
								<dd class="font-medium text-deep">{report.patient.document_id}</dd>
							</div>
						{/if}
					</dl>
				</div>
			</section>
		{/if}

		<section aria-labelledby="meta-heading">
			<h2 id="meta-heading" class="font-[family-name:var(--font-heading)] text-lg font-bold text-deep mb-4">
				Metadatos del informe
			</h2>
			<div class="rounded-xl border border-border bg-white p-5 sm:p-6 grid sm:grid-cols-2 gap-4 text-sm">
				{#each metaLine(report.report) as row (row.label)}
					<div>
						<p class="text-muted text-xs uppercase tracking-wide mb-0.5">{row.label}</p>
						<p class="font-medium text-deep">{row.value}</p>
					</div>
				{/each}
			</div>
		</section>

		<ResultSummary summary={report.summary} />

		<section aria-labelledby="tests-heading">
			<h2 id="tests-heading" class="sr-only">Tabla de analitos</h2>
			<AnalyteTable tests={report.tests} />
		</section>

		{#if report.findings.length > 0}
			<FindingsCard findings={report.findings} />
		{/if}

		<section class="space-y-4" aria-labelledby="hypotheses-heading">
			<h2 id="hypotheses-heading" class="font-[family-name:var(--font-heading)] text-lg font-bold text-deep">
				Hipótesis clínicas
			</h2>
			<p class="text-sm text-muted -mt-2">
				Posibles explicaciones sugeridas por el modelo; deben contrastarse con la historia clínica y el examen físico.
			</p>
			<div class="space-y-4">
				{#each report.hypotheses as h, i (i + h.title)}
					<HypothesisCard hypothesis={h} index={i} />
				{/each}
			</div>
		</section>

		<DisclaimerBanner />

		<div class="pt-4">
			<a
				href="/interpretar-laboratorio"
				class="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-medical bg-white text-medical px-6 py-3 font-semibold hover:bg-medical/5 transition-colors"
			>
				Analizar otro archivo
			</a>
		</div>
	{:else if jobState?.status === 'completed' && !report}
		<div class="rounded-xl border border-border bg-surface p-6 text-center space-y-4 max-w-lg mx-auto">
			<p class="text-deep font-medium">El análisis finalizó pero no hay datos del informe disponibles.</p>
			<a
				href="/interpretar-laboratorio"
				class="inline-flex items-center justify-center rounded-lg bg-medical text-white px-5 py-2.5 text-sm font-semibold hover:bg-medical-dark transition-colors"
			>
				Volver a interpretar laboratorio
			</a>
		</div>
	{/if}
</div>
