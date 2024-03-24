import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CreateCustomer } from '@/app/ui/customers/buttons';
import ClientTable from '@/app/ui/customers/client-table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function Page({ searchParams, }: {
    searchParams?: {
        query?: string,
        page?: string
    };
}) {
    const customers = fetchFilteredCustomers('')
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page || 1)

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
                <ClientTable />
            </div>
        </>
    );
}

