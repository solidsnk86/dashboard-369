import { PlusIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export function CreateCustomer() {
    return (
        <Link href="/dashboard/customers/create"
            className="flex h-10 items-center rounded-lg bg-zinc-800 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
        >
            <span>Crear Cliente</span>{' '}
            <PlusIcon className='h-5 md:ml-4' />
        </Link>
    )
}

export function DeleteCustomer() {
    return (
        <form>

        </form>
    )
}