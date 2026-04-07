import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: Number(SMTP_PORT),
	secure: Number(SMTP_PORT) === 465,
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASS
	}
});

export async function sendContactEmail(data: {
	nombre: string;
	institucion: string;
	cargo: string;
	correo: string;
	telefono: string;
	tipoInstitucion: string;
	problema: string;
}) {
	const html = `
		<h2>Nuevo contacto desde ArchivoSalud</h2>
		<table style="border-collapse:collapse;width:100%;max-width:600px;">
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nombre</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.nombre)}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Institución</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.institucion)}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Cargo</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.cargo || 'No especificado')}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Correo</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.correo)}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Teléfono</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.telefono || 'No proporcionado')}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Tipo de institución</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.tipoInstitucion || 'No seleccionado')}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Problema</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.problema)}</td></tr>
		</table>
	`;

	return transporter.sendMail({
		from: `"ArchivoSalud Web" <${SMTP_USER}>`,
		to: SMTP_USER,
		subject: `[ArchivoSalud] Contacto de ${data.nombre} - ${data.institucion}`,
		html,
		replyTo: data.correo
	});
}

export async function sendAgendaEmail(data: {
	nombre: string;
	institucion: string;
	correo: string;
	telefono: string;
	fecha: string;
	hora: string;
	notas: string;
}) {
	const html = `
		<h2>Nueva solicitud de consulta - ArchivoSalud</h2>
		<table style="border-collapse:collapse;width:100%;max-width:600px;">
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nombre</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.nombre)}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Institución</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.institucion)}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Correo</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.correo)}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Teléfono</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.telefono || 'No proporcionado')}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Fecha preferida</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.fecha || 'No especificada')}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Hora preferida</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.hora || 'No especificada')}</td></tr>
			<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Notas</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.notas || 'Sin notas adicionales')}</td></tr>
		</table>
	`;

	return transporter.sendMail({
		from: `"ArchivoSalud Web" <${SMTP_USER}>`,
		to: SMTP_USER,
		subject: `[ArchivoSalud] Solicitud de consulta de ${data.nombre}`,
		html,
		replyTo: data.correo
	});
}

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}
