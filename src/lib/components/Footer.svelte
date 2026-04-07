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
				<a href="/" class="mb-5 inline-flex items-center gap-2">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-medical/15 text-medical ring-1 ring-medical/25">
						<svg class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5v13.5" />
						</svg>
					</div>
					<span class="text-lg font-extrabold tracking-tight font-[family-name:var(--font-heading)]"><span class="text-white">Archivo</span><span class="text-medical">Salud</span></span>
				</a>
			<p class="text-sm leading-relaxed max-w-sm mb-5">
				Soluciones de inteligencia artificial para hospitales, clínicas y centros médicos en República Dominicana.
			</p>
			<div class="flex flex-col gap-2 mb-6 text-sm">
				<a href="mailto:info@archivosalud.com" class="inline-flex items-center gap-2 hover:text-white transition-colors">
					<svg class="w-4 h-4 text-medical flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
					info@archivosalud.com
				</a>
				<a href="tel:+18299664503" class="inline-flex items-center gap-2 hover:text-white transition-colors">
					<svg class="w-4 h-4 text-medical flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
					</svg>
					(829) 966-4503
				</a>
			</div>
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
