function kgToLbs (weight: number | string): number { //using a vertical bar, we annotate a union type
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10);
kgToLbs('10kg')