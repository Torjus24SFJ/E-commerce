export const getShippingDate = (daysToAdd = 5) => {
    const today = new Date();
    const shippingDate = new Date(today);

    shippingDate.setDate(today.getDate() + daysToAdd);

    const formattedDate = shippingDate.toLocaleDateString("no-NO"); 

    return formattedDate; 
}
