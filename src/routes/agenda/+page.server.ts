import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { sendAgendaEmail } from '$lib/server/email';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const nombre = data.get('nombre')?.toString().trim() ?? '';
		const institucion = data.get('institucion')?.toString().trim() ?? '';
		const correo = data.get('correo')?.toString().trim() ?? '';
		const telefono = data.get('telefono')?.toString().trim() ?? '';
		const fecha = data.get('fecha')?.toString().trim() ?? '';
		const hora = data.get('hora')?.toString().trim() ?? '';
		const tema = data.get('tema')?.toString().trim() ?? '';

		if (!nombre || !institucion || !correo || !fecha || !hora || !tema) {
			return fail(400, {
				error: 'Por favor complete todos los campos requeridos.',
				nombre, institucion, correo, telefono, fecha, hora, tema
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(correo)) {
			return fail(400, {
				error: 'Por favor ingrese un correo electrónico válido.',
				nombre, institucion, correo, telefono, fecha, hora, tema
			});
		}

		try {
			await sendAgendaEmail({
				nombre,
				institucion,
				correo,
				telefono,
				fecha,
				hora,
				notas: tema
			});
			return { success: true };
		} catch (err) {
			console.error('Email send error:', err);
			return fail(500, {
				error: 'No se pudo enviar la solicitud. Por favor intente más tarde o escriba directamente a info@archivosalud.com.',
				nombre, institucion, correo, telefono, fecha, hora, tema
			});
		}
	}
};
