// let employee: {
//     readonly id: number, // you can apply the readonly modifier to prevent TS from being able to modify the value in the future
//     name: string, // you could use an optional property '?' to removed the need for name
//     retire: (date: Date) => void // we return void as we don't want to return a value
// }

type Employee = { // type alias that can be used in multiple places
    readonly id: number,
    name: string, 
    retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1, 
    name: 'Chris',
    retire: (date: Date) => {
        console.log(date)
    }
};

let bosses: Employee = {
    id: 1,
    name: 'Bossman',
    retire: (date: Date) => {
        console.log(date)
    }
}