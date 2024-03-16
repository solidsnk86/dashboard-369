'use client'

import { useEffect, useState } from "react";
import { fetchCustomers } from "@/app/lib/data";
import { CustomerField } from "@/app/lib/definitions";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
    const [customers, setCustomers] = useState<CustomerField[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const customersData = await fetchCustomers();
                setCustomers(customersData);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Clientes</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <ul>
                    {customers.map((customer) => (
                        <li key={customer.id}>{customer.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
