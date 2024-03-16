import { Metadata } from "next"
import { fetchCustomers } from "@/app/lib/data"
import { lusitana } from '@/app/ui/fonts';
import { number } from "zod";

export const metadata: Metadata = {
    title: 'Clientes | Atlas'
}

export default async function Page() {
    const [customer] = await Promise.all([
        fetchCustomers()
    ])

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Clientes</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {[customer].map((c, index) => (
                    <div key={index}>
                        <p>{customer[0]?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}