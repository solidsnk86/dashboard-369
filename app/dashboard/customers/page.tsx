import { fetchFilteredCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { Mails } from 'lucide-react';
import Search from '@/app/ui/search';
import { CreateCustomer } from '@/app/ui/customers/buttons';

export default async function Page() {
    const customersData = await fetchFilteredCustomers('');

    return (
        <>
            <header className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Clientes</h1>
            </header>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Buscar Clientes..." />
                <CreateCustomer />
            </div>
            <div className="mt-6 flow-root overflow-hidden overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
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
                                        Pago
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
                                                <p className='truncate'>{customer.name}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">{customer.email}</p>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {customer.total_pending === '$0.00' ? null : (
                                                <span className="flex text-xs text-gray-800">
                                                    {customer.total_pending}
                                                </span>
                                            )}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {customer.total_paid === '$0.00' ? null : (
                                                <span className="flex text-xs text-gray-800">
                                                    {customer.total_paid}
                                                </span>
                                            )}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {customer.total_pending !== '$0.00' && (
                                                <Link
                                                    className="rounded-md border p-2 hover:bg-gray-100"
                                                    title={`Enviar saldo por correo a ${customer.name}`}
                                                    href={`mailto:${customer.email}?subject=Factura pendiente&body=Hola ${customer.name}, se comunica por la presente que usted adeuda una factura de ${customer.total_pending}. Se agradece la cancelación de la misma lo antes posible. \n\nAtentamente Atlas.`}
                                                >
                                                    <Mails className='w-4 h-5 inline mx-1 mb-[2px]' />
                                                </Link>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

