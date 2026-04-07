<script lang="ts">
	interface Props {
		eyebrow?: string;
		title: string;
		description: string;
		ctaText?: string;
		ctaHref?: string;
	}

	let { eyebrow = '', title, description, ctaText = '', ctaHref = '/contacto' }: Props = $props();
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-light to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
	<div class="absolute inset-0">
		<div class="absolute top-20 right-0 w-[500px] h-[500px] bg-medical/5 rounded-full blur-3xl" aria-hidden="true"></div>
		<div class="absolute bottom-0 left-10 w-[400px] h-[400px] bg-health/5 rounded-full blur-3xl" aria-hidden="true"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			{#if eyebrow}
				<p class="text-sm font-semibold tracking-wide uppercase text-medical mb-4 animate-fade-in-up">
					{eyebrow}
				</p>
			{/if}
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-deep leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
				{title}
			</h1>
			<p class="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
				{description}
			</p>
			{#if ctaText}
				<div class="mt-8 animate-fade-in-up animation-delay-300">
					<a
						href={ctaHref}
						class="inline-flex min-h-11 items-center gap-2 px-7 py-3 bg-medical text-white font-semibold rounded-lg hover:bg-medical-dark transition-all shadow-lg shadow-medical/25 hover:shadow-xl hover:shadow-medical/30 hover:-translate-y-0.5"
					>
						{ctaText}
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>
