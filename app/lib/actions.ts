'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export interface CustomerResult {
  errors?: {
    name?: string[];
    email?: string[];
    urlImage?: string[];
  };
  message?: string | null;
}

const CustomerSchema = z.object({
  name: z.string({
    invalid_type_error: 'Proporcione un nombre y apellido',
  }),
  email: z.string({
    invalid_type_error: 'Debe proporcionar un correo electrónico válido',
  }),
  urlImage: z.string().optional(),
});

export async function createCustomer(
  prevState: CustomerResult,
  formData: FormData,
) {
  const validatedFields = CustomerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    urlImage: formData.get('url_image'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos perdidos. Fallo al crear el cliente.',
    };
  }

  const { name, email, urlImage } = validatedFields.data;

  try {
    await sql`
      INSERT INTO customers (name, email, url_image)
      VALUES (${name}, ${email}, ${urlImage})
    `;
  } catch (error) {
    return {
      message: 'Error en la base de Datos: Fallos al crear el cliente.',
    };
  }

  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Por favor seleccione un cliente.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Por favor ingrese una cantidad mayor a $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Por favor seleccione un estado.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos perdidos. Fallo al crear la factura.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Error en la base de Datos: Fallos al crear la factura.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos perdidos. Fallo en actualizar la factura.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    return {
      message: 'Error en la base de Datos: Fallo al actualizar la factura.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
  } catch (error) {
    return {
      message: 'Error en la base de Datos: Fallo al borrar la factura.',
    };
  }
}

export async function deleteCustomer(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = {id}`;
  } catch (error) {
    return {
      message: 'Error en la base de Datos: No se pudo eliminar el cliente.',
    };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciales Inválidas.';
        default:
          return 'Algo no está bien.';
      }
    }
    throw error;
  }
}
