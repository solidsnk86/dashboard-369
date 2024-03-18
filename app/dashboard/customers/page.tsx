import { fetchFilteredCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
    const customersData = await fetchFilteredCustomers('');

    return (
        <>
            <header className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Clientes</h1>
            </header>
            <div className="mt-6 flow-root overflow-hidden overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                        <div className="md:hidden">
                            {customersData.map((customer) => (
                                <div
                                    key={customer.id}
                                    className="mb-2 w-full rounded-md bg-white p-4"
                                >
                                    <div className="flex items-center justify-between border-b pb-4">
                                        <div>
                                            <div className="mb-2 flex items-center">
                                                <Image
                                                    src={customer.image_url}
                                                    className="mr-2 rounded-full"
                                                    width={28}
                                                    height={28}
                                                    alt={`${customer.name}'s profile picture`}
                                                />
                                                <p>{customer.name}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">{customer.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between pt-4">
                                        <div className="flex justify-end gap-2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="md:block">
                            {' '}
                            {/* Muestra en pantallas medianas y grandes */}
                            <table className="min-w-full text-gray-900">
                                <thead className="rounded-lg text-left text-sm font-normal">
                                    <tr>
                                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                            Cliente
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Saldo
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Pagado
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Aviso
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {customersData.map((customer) => (
                                        <tr
                                            key={customer.id}
                                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                        >
                                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={customer.image_url}
                                                        className="rounded-full"
                                                        width={28}
                                                        height={28}
                                                        alt={`${customer.name}'s profile picture`}
                                                    />
                                                    <p className=' truncate'>{customer.name}</p>
                                                </div>
                                            </td>

                                            <td className="whitespace-nowrap bg-red-400/70 px-3 py-3">
                                                {customer.total_pending === '$0.00' ? null : (
                                                    <span className="flex text-xs text-gray-800">
                                                        {customer.total_pending}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="whitespace-nowrap bg-green-400/70 px-3 py-3">
                                                {customer.total_paid === '$0.00' ? null : (
                                                    <span className="flex text-xs text-gray-800">
                                                        {customer.total_paid}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                                {customer.total_pending === '$0.00' ? null : (
                                                    <Link
                                                        className="mx-1 text-sm text-blue-400"
                                                        title={`Enviar saldo por correo a ${customer.name}`}
                                                        href={`mailto:${customer.email}?subject=Factura pendiente&body=Hola ${customer.name}, se comunica por la presente que usted adeuda una factura de ${customer.total_pending}. Se agradece la cancelación de la misma lo antes posible. \n\nAtentamente Atlas.`}
                                                    >
                                                        Enviar Saldo
                                                    </Link>
                                                )}
                                            </td>
                                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                                <div className="flex justify-end gap-3"></div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
