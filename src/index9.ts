// literal (exact, specific)
// let quantity: 50 = 51 ; // doesn't work because the quantity has been literally defined as 50
// let quantity: 50 | 100 = 100 // the value can only be 50 or 100

type Quantity = 50 | 100;
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'
let metric: Metric = 'inch'