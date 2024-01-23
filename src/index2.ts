// let sales: number = 123_456_789; // in Typescript, you can separate large numbers with an underscore to make it more readable
// let course: string = 'TypeScript';
// let is_published: boolean = true;

// TS does not need to be annotated, as the compilar can infer based on your variable declaration
// If you were to declare a variable without a value, it will infer the type is "any"
// Ex: let level would be type 'any' and let level = 1 would be type 'number'

//So the above can be rewritten as:
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;

// type 'any' is essentially dynamic, which is against the whole idea of using TS. best practice is avoiding using 'any' as much as possible

function render(document: string) { // error comes from compiler inferring 'any' type
    console.log(document)
}
