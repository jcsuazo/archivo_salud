import type { RequestHandler } from './$types';

const pages = [
	'',
	'/soluciones',
	'/soluciones/digitalizacion-inteligente',
	'/soluciones/expediente-clinico-inteligente',
	'/soluciones/automatizacion-administrativa',
	'/soluciones/analitica-busqueda',
	'/soluciones/soluciones-a-medida',
	'/sectores',
	'/sectores/hospitales-publicos',
	'/sectores/clinicas-privadas',
	'/sectores/centros-diagnosticos',
	'/sectores/ars-y-gestion',
	'/como-trabajamos',
	'/casos-de-uso',
	'/tecnologia',
	'/sobre-nosotros',
	'/contacto',
	'/agenda',
	'/privacidad',
	'/terminos',
];

export const GET: RequestHandler = () => {
	const baseUrl = 'https://archivosalud.ai';
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(path => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : path.split('/').length <= 2 ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
