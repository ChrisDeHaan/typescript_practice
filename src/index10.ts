function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else console.log('Hola!')
}

greet('Chris')
greet(null)
greet(undefined)
