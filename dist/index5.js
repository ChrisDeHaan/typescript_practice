"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else
        return income * 1.3;
}
calculateTax(10000);
//# sourceMappingURL=index5.js.map