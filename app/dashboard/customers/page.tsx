import { Metadata } from "next"
import { fetchCustomers } from "@/app/lib/data"

export const metadata: Metadata = {
    title: 'Clientes | Atlas'
}

export default async function Page() {
    const [customer] = await Promise.all([
        fetchCustomers()
    ])
    return <p>Página de Clientes</p>
}