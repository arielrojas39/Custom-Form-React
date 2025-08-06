import z from "zod";


export const schema = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    email: z.string().email("Correo invalido").min(1, "El correo es requerido"),
    password: z.string().min(6,"La contraseña debe de tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmacion debe tener al menos 6 caracteres")
}).refine( data=> data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ['confirmPassword']
})

export type FormValues = z.infer<typeof schema>;