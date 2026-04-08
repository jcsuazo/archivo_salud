<script lang="ts">
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import FileDropZone from '$lib/components/lab/FileDropZone.svelte';
	import ConsentCheckbox from '$lib/components/lab/ConsentCheckbox.svelte';
	import JobStatus from '$lib/components/lab/JobStatus.svelte';
	import {
		createJob,
		uploadFile,
		notifyUploadComplete,
		pollJobStatus,
		getJobStatus,
		LabApiError
	} from '$lib/services/lab-api';
	import type { JobStatus as LabJobStatus } from '$lib/types/lab';

	let file = $state<File | null>(null);
	let consent = $state(false);
	let isSubmitting = $state(false);
	let jobId = $state<string | null>(null);
	let jobStatus = $state<LabJobStatus | null>(null);
	let error = $state<string | null>(null);
	let formKey = $state(0);

	let stopPoll: (() => void) | null = null;

	const canSubmit = $derived(file !== null && consent && !isSubmitting && jobId === null);

	const currentStep = $derived.by(() => {
		if (jobId) return 3;
		if (consent) return 2;
		if (file) return 2;
		return 1;
	});

	function handlePollUpdate(s: LabJobStatus) {
		jobStatus = s;
		if (s.status === 'completed') {
			stopPoll?.();
			stopPoll = null;
			goto(`/interpretar-laboratorio/resultado/${s.job_id}`);
		}
		if (s.status === 'failed') {
			stopPoll?.();
			stopPoll = null;
			error = s.error ?? 'El análisis no pudo completarse.';
		}
	}

	async function handleSubmit() {
		if (!file || !consent) return;
		error = null;
		isSubmitting = true;
		try {
			const { job_id, upload_url } = await createJob(
				file.name,
				file.type || 'application/octet-stream',
				consent
			);
			jobId = job_id;
		jobStatus = {
			job_id,
			status: 'uploading',
			progress: 0,
			status_detail: 'Subiendo archivo…',
			result: null,
			error: null,
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString()
		};
			await uploadFile(upload_url, file);
			await notifyUploadComplete(job_id);
			jobStatus = await getJobStatus(job_id);
			stopPoll?.();
			stopPoll = pollJobStatus(job_id, handlePollUpdate);
		} catch (e) {
			stopPoll?.();
			stopPoll = null;
			jobId = null;
			jobStatus = null;
			if (e instanceof LabApiError) {
				error =
					e.message.length > 200
						? 'No se pudo iniciar el análisis. Verifique su conexión e inténtelo de nuevo.'
						: e.message;
			} else {
				error = 'No se pudo iniciar el análisis. Inténtelo de nuevo.';
			}
		} finally {
			isSubmitting = false;
		}
	}

	function retry() {
		stopPoll?.();
		stopPoll = null;
		jobId = null;
		jobStatus = null;
		error = null;
		formKey += 1;
	}

	onDestroy(() => {
		stopPoll?.();
	});
</script>

<SeoHead
	title="Interpretar Laboratorio | ArchivoSalud"
	description="Suba su PDF o imagen de resultados de laboratorio y obtenga un análisis estructurado con hallazgos e hipótesis clínicas asistido por IA. No sustituye el criterio médico profesional."
/>

<PageHero
	eyebrow="Inteligencia Artificial"
	title="Interpreta tus resultados de laboratorio"
	description="Sube tu PDF o imagen de resultados y obtén un análisis estructurado con hallazgos destacados e hipótesis clínicas asistido por IA."
/>

<section class="py-12 sm:py-16 lg:py-20 bg-white">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if jobId && jobStatus}
			<div class="space-y-6">
				<JobStatus status={jobStatus.status} progress={jobStatus.progress} statusDetail={jobStatus.status_detail} />
				{#if error || jobStatus.status === 'failed'}
					<div
						class="rounded-xl border border-red-200 bg-red-50/90 p-4 sm:p-5 text-sm text-red-900 space-y-4"
						role="alert"
					>
						<p class="font-medium">{error ?? jobStatus.error ?? 'Ha ocurrido un error.'}</p>
						<button
							type="button"
							class="inline-flex items-center justify-center rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-100 transition-colors"
							onclick={retry}
						>
							Reintentar
						</button>
					</div>
				{/if}
			</div>
		{:else}
			<!-- Step indicator -->
			<nav class="mb-10" aria-label="Pasos del análisis">
				<ol class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-2">
					{#each [{ n: 1, label: 'Subir archivo' }, { n: 2, label: 'Consentimiento' }, { n: 3, label: 'Análisis' }] as step (step.n)}
						<li class="flex items-center gap-3 sm:flex-1">
							<span
								class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold font-[family-name:var(--font-heading)] transition-colors
									{currentStep >= step.n
									? 'bg-medical text-white'
									: 'bg-surface text-muted border border-border'}"
							>
								{step.n}
							</span>
							<span
								class="text-sm font-medium font-[family-name:var(--font-heading)]
									{currentStep >= step.n ? 'text-deep' : 'text-muted'}"
							>
								{step.label}
							</span>
						</li>
					{/each}
				</ol>
			</nav>

			<div class="space-y-8">
				<div>
					<h2 class="text-lg font-bold text-deep font-[family-name:var(--font-heading)] mb-3">
						Archivo del laboratorio
					</h2>
					{#key formKey}
						<FileDropZone
							disabled={isSubmitting}
							onFileSelect={(f) => {
								file = f;
							}}
						/>
					{/key}
				</div>

				<div>
					<h2 class="text-lg font-bold text-deep font-[family-name:var(--font-heading)] mb-3">
						Consentimiento
					</h2>
					<ConsentCheckbox checked={consent} onchange={(c) => (consent = c)} />
				</div>

				{#if error}
					<p class="text-sm text-red-600" role="alert">{error}</p>
				{/if}

				<button
					type="button"
					class="w-full sm:w-auto min-h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-medical px-8 py-3 text-white font-semibold shadow-lg shadow-medical/25 hover:bg-medical-dark transition-all disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none"
					disabled={!canSubmit}
					onclick={handleSubmit}
				>
					{#if isSubmitting}
						<svg
							class="h-5 w-5 animate-spin"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
							/>
						</svg>
						<span>Preparando…</span>
					{:else}
						Analizar resultados
					{/if}
				</button>
			</div>
		{/if}
	</div>
</section>
