import { fetchFilteredCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';

export default async function Page() {
    const customersData = await fetchFilteredCustomers('');

    return (
        <div className="w-full">
            <header className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Clientes</h1>
            </header>
            <section className="mt-4 rounded-md bg-gray-50 p-2">
                <article className="truncate">
                    {customersData.map((customer) => (
                        <div className="bg-[#FFFFFF] space-y-2 rounded-md my-2 p-2" key={customer.id}>
                            <div className="mt-1 flex">
                                <Image
                                    src={customer.image_url}
                                    alt={`Foto de usuario de ${customer.name}`}
                                    className="my-1 rounded-full"
                                    width={33}
                                    height={33}
                                />
                                <p className="mx-2 mt-[10px] text-sm">{customer.name}</p>
                            </div>

                            <div className="space-y-2">
                                {customer.total_paid === '$0.00' ? null : (
                                    <span className='text-xs flex bg-green-500 text-white p-1 w-fit rounded-full'>
                                        Pagó
                                        <CheckIcon className="w-4 mx-1" />
                                        {customer.total_paid}
                                    </span>
                                )}
                                {customer.total_pending === '$0.00' ? null : (
                                    <span className='text-xs flex bg-gray-200 text-gray-500 w-fit rounded-full p-1'>
                                        Pendiente
                                        <ClockIcon className="w-4 text-gray-500 mx-1" />
                                        {customer.total_pending}
                                    </span>
                                )}
                                {customer.total_pending === '$0.00' ? null : (
                                    <Link
                                        className="text-blue-400 mx-1 text-sm"
                                        href={`mailto:${customer.email}?subject=Factura pendiente&body=Hola ${customer.name}, se comunica por la presente que usted adeuda una factura de ${customer.total_pending}. Se agradece la cancelación de la misma, muchas gracias! Atlas\n\n`}
                                    >
                                        Enviar factura
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </div>
    );
}
