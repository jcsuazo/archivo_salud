<script lang="ts">
	import { page } from '$app/stores';

	let mobileOpen = $state(false);

	const navLinks = [
		{ href: '/soluciones', label: 'Soluciones', children: [
			{ href: '/soluciones/digitalizacion-inteligente', label: 'Digitalización inteligente' },
			{ href: '/soluciones/expediente-clinico-inteligente', label: 'Expediente clínico' },
			{ href: '/soluciones/automatizacion-administrativa', label: 'Automatización administrativa' },
			{ href: '/soluciones/analitica-busqueda', label: 'Analítica y búsqueda' },
			{ href: '/soluciones/soluciones-a-medida', label: 'Soluciones a medida' },
		]},
		{ href: '/sectores', label: 'Sectores', children: [
			{ href: '/sectores/hospitales-publicos', label: 'Hospitales públicos' },
			{ href: '/sectores/clinicas-privadas', label: 'Clínicas privadas' },
			{ href: '/sectores/centros-diagnosticos', label: 'Centros diagnósticos' },
			{ href: '/sectores/ars-y-gestion', label: 'ARS y gestión' },
		]},
		{ href: '/como-trabajamos', label: 'Proceso' },
		{ href: '/casos-de-uso', label: 'Casos' },
		{ href: '/tecnologia', label: 'Tecnología' },
		{ href: '/sobre-nosotros', label: 'Nosotros' },
		{ href: '/contacto', label: 'Contacto' },
	];

	let openDropdown = $state<string | null>(null);

	function toggleDropdown(href: string) {
		openDropdown = openDropdown === href ? null : href;
	}

	function closeAll() {
		openDropdown = null;
		mobileOpen = false;
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border" aria-label="Principal">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 lg:h-20">
			<a href="/" class="group" onclick={closeAll}>
				<span class="text-lg font-extrabold tracking-tight font-[family-name:var(--font-heading)]"><span class="text-deep">Archivo</span><span class="text-medical">Salud</span></span>
			</a>

			<!-- Desktop nav -->
			<div class="hidden lg:flex items-center gap-0.5">
				{#each navLinks as link}
					{#if link.children}
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<div class="relative"
							onmouseenter={() => openDropdown = link.href}
							onmouseleave={() => openDropdown = null}
						>
							<button
								type="button"
								class="px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 cursor-pointer {$page.url.pathname.startsWith(link.href) ? 'text-medical' : 'text-muted hover:text-deep'}"
								onclick={() => toggleDropdown(link.href)}
								aria-expanded={openDropdown === link.href}
								aria-haspopup="true"
							>
								{link.label}
								<svg class="w-3.5 h-3.5 transition-transform {openDropdown === link.href ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
								</svg>
							</button>
							{#if openDropdown === link.href}
								<div class="absolute top-full left-0 w-64 pt-2 animate-fade-in">
									<div class="bg-white rounded-xl shadow-lg shadow-deep/5 border border-border py-2">
										<a
											href={link.href}
											class="block px-4 py-2.5 text-sm font-semibold text-medical hover:bg-medical/5 transition-colors"
											onclick={closeAll}
										>
											Ver todas
										</a>
										<div class="border-t border-border/50 my-1"></div>
										{#each link.children as child}
											<a
												href={child.href}
												class="block px-4 py-2.5 text-sm transition-colors {$page.url.pathname === child.href ? 'text-medical bg-medical/5 font-medium' : 'text-muted hover:text-deep hover:bg-surface'}"
												onclick={closeAll}
											>
												{child.label}
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{:else}
						<a
							href={link.href}
							class="px-3 py-2 text-sm font-medium rounded-md transition-colors {$page.url.pathname === link.href ? 'text-medical' : 'text-muted hover:text-deep'}"
						>
							{link.label}
						</a>
					{/if}
				{/each}
			</div>

			<div class="hidden lg:flex items-center gap-3">
				<a
					href="/agenda"
					class="inline-flex items-center gap-2 px-5 py-2.5 bg-medical text-white text-sm font-semibold rounded-lg hover:bg-medical-dark transition-colors shadow-sm shadow-medical/20"
				>
					Agendar consulta
				</a>
			</div>

			<!-- Mobile toggle -->
			<button
				class="lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 rounded-md text-muted hover:text-deep hover:bg-surface transition-colors"
				onclick={() => mobileOpen = !mobileOpen}
				aria-expanded={mobileOpen}
				aria-label="Menú de navegación"
			>
				{#if mobileOpen}
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div id="menu-movil" class="lg:hidden border-t border-border bg-white animate-fade-in max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-y-contain">
			<div class="max-w-7xl mx-auto px-4 py-4 space-y-1">
				{#each navLinks as link}
					{#if link.children}
						<button
							class="w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-md transition-colors {$page.url.pathname.startsWith(link.href) ? 'text-medical' : 'text-muted'}"
							onclick={() => toggleDropdown(link.href)}
						>
							{link.label}
							<svg class="w-4 h-4 transition-transform {openDropdown === link.href ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
						</button>
						{#if openDropdown === link.href}
							<div class="pl-4 space-y-1">
								<a
									href={link.href}
									class="block px-3 py-3 text-sm font-semibold text-medical rounded-md hover:bg-medical/5 transition-colors"
									onclick={closeAll}
								>
									Ver todas
								</a>
								<div class="border-t border-border/50 my-1 mx-3"></div>
								{#each link.children as child}
									<a
										href={child.href}
										class="block px-3 py-3 text-sm rounded-md transition-colors {$page.url.pathname === child.href ? 'text-medical bg-medical/5 font-medium' : 'text-muted hover:text-deep hover:bg-surface'}"
										onclick={closeAll}
									>
										{child.label}
									</a>
								{/each}
							</div>
						{/if}
					{:else}
						<a
							href={link.href}
							class="block px-3 py-3 text-sm font-medium rounded-md transition-colors {$page.url.pathname === link.href ? 'text-medical' : 'text-muted hover:text-deep'}"
							onclick={closeAll}
						>
							{link.label}
						</a>
					{/if}
				{/each}
				<div class="pt-3 border-t border-border">
					<a
						href="/agenda"
						class="block w-full text-center px-5 py-3 bg-medical text-white text-sm font-semibold rounded-lg hover:bg-medical-dark transition-colors"
						onclick={closeAll}
					>
						Agendar consulta
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>
