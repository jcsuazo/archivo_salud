<script lang="ts">
	interface Props {
		onFileSelect: (file: File | null) => void;
		disabled?: boolean;
	}

	let { onFileSelect, disabled = false }: Props = $props();

	const MAX_BYTES = 20 * 1024 * 1024;
	const ACCEPT_MIME = new Set(['application/pdf', 'image/jpeg', 'image/png']);
	const ACCEPT_EXT = /\.(pdf|jpe?g|png)$/i;

	let dragOver = $state(false);
	let selectedFile = $state<File | null>(null);
	let error = $state<string | null>(null);
	let inputEl: HTMLInputElement | null = $state(null);

	function validateFile(file: File): string | null {
		const okMime = ACCEPT_MIME.has(file.type);
		const okName = ACCEPT_EXT.test(file.name);
		if (!okMime && !okName) {
			return 'Formato no válido. Solo se aceptan PDF, JPG o PNG.';
		}
		if (file.size > MAX_BYTES) {
			return 'El archivo supera el tamaño máximo de 20 MB.';
		}
		return null;
	}

	function setFile(file: File) {
		const err = validateFile(file);
		error = err;
		if (err) {
			selectedFile = null;
			onFileSelect(null);
			return;
		}
		selectedFile = file;
		onFileSelect(file);
	}

	function handleFiles(files: FileList | null) {
		if (!files?.length) return;
		setFile(files[0]);
	}

	function onDrop(e: DragEvent) {
		e.preventDefault();
		dragOver = false;
		if (disabled) return;
		handleFiles(e.dataTransfer?.files ?? null);
	}

	function onDragOver(e: DragEvent) {
		e.preventDefault();
		if (!disabled) dragOver = true;
	}

	function onDragLeave() {
		dragOver = false;
	}

	function openPicker() {
		if (disabled) return;
		inputEl?.click();
	}

	function onInputChange(e: Event) {
		const input = e.currentTarget as HTMLInputElement;
		handleFiles(input.files);
		input.value = '';
	}

	function clearFile() {
		selectedFile = null;
		error = null;
		onFileSelect(null);
	}

	function formatSize(bytes: number): string {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
	}
</script>

<div class="w-full">
	<input
		bind:this={inputEl}
		type="file"
		class="sr-only"
		accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
		{disabled}
		onchange={onInputChange}
		aria-hidden="true"
		tabindex={-1}
	/>

	{#if selectedFile && !error}
		<div
			class="rounded-xl border-2 border-border bg-surface p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
		>
			<div class="min-w-0 flex-1">
				<p class="font-[family-name:var(--font-heading)] font-semibold text-deep truncate">
					{selectedFile.name}
				</p>
				<p class="text-sm text-muted mt-0.5">{formatSize(selectedFile.size)}</p>
			</div>
			<div class="flex flex-wrap gap-2 shrink-0">
				<button
					type="button"
					class="px-4 py-2 rounded-lg border border-border bg-white text-deep text-sm font-medium hover:bg-light transition-colors disabled:opacity-50"
					{disabled}
					onclick={openPicker}
				>
					Cambiar archivo
				</button>
				<button
					type="button"
					class="px-4 py-2 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm font-medium hover:bg-red-100 transition-colors disabled:opacity-50"
					{disabled}
					onclick={clearFile}
				>
					Quitar
				</button>
			</div>
		</div>
	{:else}
		<button
			type="button"
			class="w-full rounded-xl border-2 border-dashed px-6 py-12 text-center transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-medical focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
				{dragOver
				? 'border-medical bg-medical/5 shadow-[0_0_0_4px_rgba(14,165,233,0.12)]'
				: 'border-border bg-light/80 hover:border-medical/50 hover:bg-medical/[0.03]'}"
			ondragover={onDragOver}
			ondragleave={onDragLeave}
			ondrop={onDrop}
			onclick={openPicker}
			{disabled}
			aria-label="Seleccionar archivo o arrastrar aquí"
		>
			<div class="flex flex-col items-center gap-3 max-w-md mx-auto">
				<span
					class="inline-flex h-14 w-14 items-center justify-center rounded-full bg-medical/10 text-medical"
					aria-hidden="true"
				>
					<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5h10.5a2.25 2.25 0 002.25-2.25v-1.085a8.962 8.962 0 00-2.2-5.85L13.5 4.308a2.25 2.25 0 00-3 0L5.2 10.415a8.962 8.962 0 00-2.2 5.85V17.25A2.25 2.25 0 006.75 19.5z"
						/>
					</svg>
				</span>
				<div>
					<p class="font-[family-name:var(--font-heading)] font-semibold text-deep text-lg">
						Arrastra tu archivo aquí
					</p>
					<p class="text-muted text-sm mt-1">o haz clic para seleccionar</p>
				</div>
				<p class="text-xs text-muted">PDF, JPG, PNG (máx. 20 MB)</p>
			</div>
		</button>
	{/if}

	{#if error}
		<p class="mt-3 text-sm text-red-600" role="alert">{error}</p>
	{/if}
</div>
