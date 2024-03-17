import { fetchFilteredCustomers } from "@/app/lib/data";

export const mailtTemplate = async () => {
    const customersData = await fetchFilteredCustomers('');

    const mailtTo = `mailto:${customersData[0].email}`
    const subject = '?subject=Factura Pendiente'
    const body = '&body=Hola'
}