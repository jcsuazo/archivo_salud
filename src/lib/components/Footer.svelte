<script lang="ts">
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		soluciones: [
			{ href: '/soluciones/digitalizacion-inteligente', label: 'Digitalización inteligente' },
			{ href: '/soluciones/expediente-clinico-inteligente', label: 'Expediente clínico' },
			{ href: '/soluciones/automatizacion-administrativa', label: 'Automatización' },
			{ href: '/soluciones/analitica-busqueda', label: 'Analítica y búsqueda' },
			{ href: '/soluciones/soluciones-a-medida', label: 'Soluciones a medida' },
		],
		sectores: [
			{ href: '/sectores/hospitales-publicos', label: 'Hospitales públicos' },
			{ href: '/sectores/clinicas-privadas', label: 'Clínicas privadas' },
			{ href: '/sectores/centros-diagnosticos', label: 'Centros diagnósticos' },
			{ href: '/sectores/ars-y-gestion', label: 'ARS y gestión' },
		],
		empresa: [
			{ href: '/como-trabajamos', label: 'Cómo trabajamos' },
			{ href: '/casos-de-uso', label: 'Casos de uso' },
			{ href: '/tecnologia', label: 'Tecnología' },
			{ href: '/sobre-nosotros', label: 'Sobre nosotros' },
			{ href: '/contacto', label: 'Contacto' },
		],
	};
</script>

<footer class="bg-deep text-white/70">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
			<div class="lg:col-span-2">
				<a href="/" class="mb-5 inline-block">
					<span class="text-lg font-extrabold text-white tracking-tight font-[family-name:var(--font-heading)]">ArchivoSalud</span>
				</a>
				<p class="text-sm leading-relaxed max-w-sm mb-6">
					Soluciones de inteligencia artificial para hospitales, clínicas y centros médicos en República Dominicana.
				</p>
				<a
					href="/agenda"
					class="inline-flex items-center gap-2 px-5 py-2.5 bg-medical text-white text-sm font-semibold rounded-lg hover:bg-medical-dark transition-colors"
				>
					Agendar una consulta
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</a>
			</div>

			<div>
				<h4 class="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">Soluciones</h4>
				<ul class="space-y-2.5">
					{#each footerLinks.soluciones as link}
						<li>
							<a href={link.href} class="block py-2 text-sm hover:text-white transition-colors">{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">Sectores</h4>
				<ul class="space-y-2.5">
					{#each footerLinks.sectores as link}
						<li>
							<a href={link.href} class="block py-2 text-sm hover:text-white transition-colors">{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">Empresa</h4>
				<ul class="space-y-2.5">
					{#each footerLinks.empresa as link}
						<li>
							<a href={link.href} class="block py-2 text-sm hover:text-white transition-colors">{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
			<p class="text-xs text-white/60">
				&copy; {currentYear} ArchivoSalud. Todos los derechos reservados.
			</p>
			<div class="flex items-center gap-6">
				<a href="/privacidad" class="inline-flex min-h-11 items-center text-xs text-white/60 hover:text-white/70 transition-colors">Política de privacidad</a>
				<a href="/terminos" class="inline-flex min-h-11 items-center text-xs text-white/60 hover:text-white/70 transition-colors">Términos de uso</a>
			</div>
		</div>
	</div>
</footer>
