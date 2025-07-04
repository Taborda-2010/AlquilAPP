// src/utils/validateUNALemail.ts

/**
 * Valida que el correo pertenezca al dominio institucional UNAL.
 * Acepta variantes como @unal.edu.co, @bogota.unal.edu.co, etc.
 */
export function validateUNALemail(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)*unal\.edu\.co$/;
    return pattern.test(email);
}
