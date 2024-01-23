type Customer = {
    birthday?: Date
}

function getCustomer (id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(2);
// if (customer !== null && customer !== undefined) 
//Optional property access operator
    console.log(customer?.birthday) // now this code will only execute if customer is not null or undefined
    console.log(customer?.birthday?.getFullYear()) // will only execute if customer is not null or undefined and has a birth year

//Optional element access operator (useful for arrays)
// if (customer !== null && customer !== undefined) 
    // console.log(customers[0])
    // or
// console.log(customer?.[0]) // checks for the same conditions above without all extra code

//Optional Call operator
let log: any = (message: string) => console.log(message);
log?.('a')
