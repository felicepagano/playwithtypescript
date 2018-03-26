// interface could be used to declare a type
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    // ? means optional parameter
    ssn?: string;
}

let p: IPerson = {
    firstName: "a",
    lastName: "b", 
    age: 31
    // ssn is optional
}

// interface could be used to enforce the contract between the classes and a certain API.
interface Comparator<T> {
    compareTo(value: T): number;
}

export class Person implements Comparator<Person> {
    constructor(public firstName: string, public lastName: string, public age: number, public _ssn: string){}

    public compareTo(value: Person): number {
        let comparison = this.firstName >= value.firstName ? 1 : -1;
        return comparison;
    }
}

class Employee extends Person {

}

// structural typing system
interface Pippo {

}

class Pluto implements Pippo {
    constructor(public member: string){}
}

class Paperino {
    public member: string;
}

let a: Array<Pippo> = []
// Pluto has the same structure of Paperino
a[0] = new Pluto("");
a[1] = new Paperino();
