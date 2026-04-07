import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { sendContactEmail } from '$lib/server/email';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const nombre = data.get('nombre')?.toString().trim() ?? '';
		const institucion = data.get('institucion')?.toString().trim() ?? '';
		const cargo = data.get('cargo')?.toString().trim() ?? '';
		const correo = data.get('correo')?.toString().trim() ?? '';
		const telefono = data.get('telefono')?.toString().trim() ?? '';
		const tipoInstitucion = data.get('tipoInstitucion')?.toString().trim() ?? '';
		const problema = data.get('problema')?.toString().trim() ?? '';

		if (!nombre || !institucion || !correo || !problema) {
			return fail(400, {
				error: 'Por favor complete todos los campos requeridos.',
				nombre, institucion, cargo, correo, telefono, tipoInstitucion, problema
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(correo)) {
			return fail(400, {
				error: 'Por favor ingrese un correo electrónico válido.',
				nombre, institucion, cargo, correo, telefono, tipoInstitucion, problema
			});
		}

		try {
			await sendContactEmail({ nombre, institucion, cargo, correo, telefono, tipoInstitucion, problema });
			return { success: true };
		} catch (err) {
			console.error('Email send error:', err);
			return fail(500, {
				error: 'No se pudo enviar el mensaje. Por favor intente más tarde o escriba directamente a info@archivosalud.ai.',
				nombre, institucion, cargo, correo, telefono, tipoInstitucion, problema
			});
		}
	}
};
