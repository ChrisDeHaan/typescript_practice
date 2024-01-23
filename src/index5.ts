function calculateTax (income: number, taxYear = 2022) { // to tell TS what value the function returns, add a colon after the parameters. use void if not returning value
    if ( taxYear < 2022) {
        return income * 1.2
    } else return income * 1.3
}

// in line 1, we're providing a default value that will be overwritten on line 2, so that we don't need to pass in the argument when calling the function. It's basically another way of writing line 2 as: if ( (taxYear || 2022) < 2022) and is more optimized.
// You can add a question mark to the end of the parameter (like: taxYear?: number) to make it not required

calculateTax(10_000)