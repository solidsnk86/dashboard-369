'use client'

import CustomerForm from '@/app/ui/customers/create-customer';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomerClient } from '@/app/lib/data';

export default async function Page() {
    const customers = await fetchCustomerClient();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Clientes', href: '/dashboard/customers' },
                    {
                        label: 'Crear Cliente',
                        href: '/dashboard/customers/create',
                        active: true,
                    },
                ]}
            />
            <CustomerForm />
        </main>
    );
}