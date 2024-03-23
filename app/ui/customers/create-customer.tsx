import Link from "next/link";
import { Button } from '@/app/ui/button';
import { createCustomer } from '@/app/lib/actions';
import {
    CurrencyDollarIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { CreateCustomerField } from "@/app/lib/definitions";

export default function CustomerForm({ customers }: { customers: CreateCustomerField[] }) {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createCustomer, initialState);

    return (
        <form action={dispatch} aria-describedby="customer-error">
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nombre del Cliente
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            aria-describedby="customer-error"
                        />
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Invoice Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Correo Electrónico
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Ingrese el correo electrónico"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.email &&
                                state.errors.email.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Customer Image */}
                <fieldset>
                    <legend className="mb-2 block text-sm font-medium">
                        Establecer la imagen del cliente
                    </legend>
                    <input
                        id="urlImage"
                        name="urlImage"
                        type="text"
                        placeholder="URL de la imagen"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.urlImage &&
                            state.errors.urlImage.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </fieldset>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/invoices"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancelar
                </Link>
                <Button type="submit">Crear Cliente</Button>
            </div>
        </form>
    )
}
