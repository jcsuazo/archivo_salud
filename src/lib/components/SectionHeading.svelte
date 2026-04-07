<script lang="ts">
	interface Props {
		eyebrow?: string;
		title: string;
		description?: string;
		centered?: boolean;
		light?: boolean;
	}

	let { eyebrow = '', title, description = '', centered = false, light = false }: Props = $props();
</script>

<div class="{centered ? 'text-center mx-auto' : ''} max-w-3xl">
	{#if eyebrow}
		<p class="text-sm font-semibold tracking-wide uppercase mb-3 {light ? 'text-medical/80' : 'text-medical'}">
			{eyebrow}
		</p>
	{/if}
	<h2 class="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight {light ? 'text-white' : 'text-deep'}">
		{title}
	</h2>
	{#if description}
		<p class="mt-4 text-lg leading-relaxed {light ? 'text-white/70' : 'text-muted'}">
			{description}
		</p>
	{/if}
</div>
