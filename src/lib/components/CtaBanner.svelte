<script lang="ts">
	interface Props {
		title: string;
		buttonText?: string;
		buttonHref?: string;
	}

	let { title, buttonText = 'Agendar una consulta', buttonHref = '/agenda' }: Props = $props();
</script>

<section class="relative overflow-hidden bg-gradient-to-br from-deep via-deep to-deep/95">
	<div class="absolute inset-0">
		<div class="absolute top-0 right-0 w-96 h-96 bg-medical/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
		<div class="absolute bottom-0 left-0 w-72 h-72 bg-health/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
		<h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-tight font-[family-name:var(--font-heading)]">
			{title}
		</h2>
		<div class="mt-8">
			<a
				href={buttonHref}
				class="inline-flex items-center gap-2 px-8 py-3.5 bg-medical text-white font-semibold rounded-lg hover:bg-medical-dark transition-all shadow-lg shadow-medical/25 hover:shadow-xl hover:shadow-medical/30 hover:-translate-y-0.5"
			>
				{buttonText}
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
				</svg>
			</a>
		</div>
	</div>
</section>
