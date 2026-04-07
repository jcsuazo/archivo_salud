<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
</script>

<SeoHead
	title="Términos de Uso | ArchivoSalud"
	description="Términos y condiciones de uso del sitio web de ArchivoSalud. Legislación aplicable: República Dominicana."
/>

<PageHero
	eyebrow="Legal"
	title="Términos de uso"
	description="Condiciones que rigen el acceso y uso del sitio web de ArchivoSalud. Al utilizar este sitio, usted acepta estos términos."
	ctaText="Contacto"
	ctaHref="/contacto"
/>

<section class="bg-white py-14 sm:py-20 lg:py-24">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-12 text-muted leading-relaxed">
			<section>
				<h2 class="font-[family-name:var(--font-heading)] text-2xl font-bold text-deep mb-4">
					Aceptación de los términos
				</h2>
				<p>
					El acceso y uso del sitio web de ArchivoSalud implica la aceptación plena de estos
					términos de uso. Si no está de acuerdo, le rogamos abstenerse de utilizar el sitio.
				</p>
			</section>

			<section>
				<h2 class="font-[family-name:var(--font-heading)] text-2xl font-bold text-deep mb-4">
					Descripción de los servicios
				</h2>
				<p>
					ArchivoSalud ofrece <strong class="text-deep">soluciones de inteligencia artificial</strong>
					orientadas a la <strong class="text-deep">gestión y digitalización de documentación</strong>
					en el ámbito de la salud (por ejemplo, digitalización inteligente, expediente clínico
					estructurado, automatización administrativa y servicios afines).
				</p>
				<p class="mt-4">
					La información del sitio tiene carácter informativo y comercial. Los alcances, plazos y
					condiciones contractuales específicas de un proyecto se formalizan por separado entre las
					partes cuando corresponda.
				</p>
			</section>

			<section>
				<h2 class="font-[family-name:var(--font-heading)] text-2xl font-bold text-deep mb-4">
					Propiedad intelectual
				</h2>
				<p>
					Los contenidos del sitio (textos, diseño, logotipos, gráficos, estructura y, en su caso,
					software o materiales asociados) son propiedad de <strong class="text-deep"
						>ArchivoSalud</strong> o se utilizan con la debida autorización. Queda prohibida su
					reproducción, distribución o uso comercial no autorizado sin consentimiento previo por
					escrito.
				</p>
			</section>

			<section>
				<h2 class="font-[family-name:var(--font-heading)] text-2xl font-bold text-deep mb-4">
					Restricciones de uso
				</h2>
				<p>El usuario se compromete a no utilizar el sitio para:</p>
				<ul class="mt-4 list-disc pl-6 space-y-2">
					<li>Actividades ilícitas o que vulneren derechos de terceros.</li>
					<li>Introducir malware, realizar ataques o interferir con la seguridad o disponibilidad del sitio.</li>
					<li>Extraer datos de forma automatizada de manera abusiva (scraping no autorizado).</li>
					<li>Suplantar identidades o proporcionar información falsa de forma dolosa.</li>
				</ul>
			</section>

			<section>
				<h2 class="font-[family-name:var(--font-heading)] text-2xl font-bold text-deep mb-4">
					Limitación de responsabilidad
				</h2>
				<p>
					El sitio y su contenido se ofrecen <strong class="text-deep">“tal cual”</strong>, en la
					medida permitida por la ley dominicana. ArchivoSalud no garantiza que el sitio esté libre
					de interrupciones o errores, ni que la información sea exhaustiva o actualizada en todo
					momento.
				</p>
				<p class="mt-4">
					En la máxima medida permitida por la legislación aplicable, ArchivoSalud no será
					responsable por daños indirectos, lucro cesante o pérdidas derivadas del uso o la
					imposibilidad de uso del sitio, salvo disposición legal imperativa en contrario.
				</p>
			</section>

			<section>
				<h2 class="font-[family-name:var(--font-heading)] text-2xl font-bold text-deep mb-4">
					Ley aplicable
				</h2>
				<p>
					Estos términos se rigen por las leyes de la <strong class="text-deep"
						>República Dominicana</strong>.
				</p>
			</section>

			<section>
				<h2 class="font-[family-name:var(--font-heading)] text-2xl font-bold text-deep mb-4">
					Resolución de controversias y jurisdicción
				</h2>
				<p>
					Las partes se someten a la jurisdicción de los <strong class="text-deep"
						>tribunales ordinarios de Santo Domingo, República Dominicana</strong>, salvo norma
					imperativa que disponga otro fuero.
				</p>
			</section>

			<section>
				<h2 class="font-[family-name:var(--font-heading)] text-2xl font-bold text-deep mb-4">
					Modificaciones
				</h2>
				<p>
					ArchivoSalud puede modificar estos términos en cualquier momento. Los cambios publicados en
					esta página surtirán efecto desde su publicación. Se recomienda revisar periódicamente esta
					sección.
				</p>
			</section>

			<section>
				<h2 class="font-[family-name:var(--font-heading)] text-2xl font-bold text-deep mb-4">
					Contacto
				</h2>
				<p>
					Para consultas sobre estos términos, escríbanos a
					<a href="mailto:info@archivosalud.com" class="font-semibold text-medical hover:text-medical-dark"
						>info@archivosalud.com</a
					>.
				</p>
			</section>
		</div>
	</div>
</section>
