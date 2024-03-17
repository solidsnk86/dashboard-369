import { fetchFilteredCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const customersData = await fetchFilteredCustomers('');

  return (
    <div className="w-full">
      <header className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Clientes</h1>
      </header>
      <section className="mt-4 rounded-md bg-gray-50 p-2">
        <article className="space-x-1 ">
          {customersData.map((customer) => (
            <div className="border-b p-2">
              <div className="mt-3 flex">
                <Image
                  src={customer.image_url}
                  alt={`Foto de usuario de ${customer.name}`}
                  className="my-1 rounded-full"
                  width={33}
                  height={33}
                />
                <p className="mx-2 mt-[10px] text-sm">{customer.name}</p>
              </div>

              <div className="space-y-1">
                {customer.total_pending === '$0.00' ? null : (
                  <p className="text-sm">Saldo {customer.total_pending}</p>
                )}
                {customer.total_paid === '$0.00' ? null : (
                  <p className="text-sm">
                    Total abonado: {customer.total_paid}
                  </p>
                )}
                {customer.total_pending === '$0.00' ? null : (
                  <Link
                    className="text-blue-400 underline"
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
