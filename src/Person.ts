// interface could be used to declare a type
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    // ? means optional parameter
    ssn?: string;
}

// directly instanciate an interface
const p: IPerson = {
    age: 31,
    firstName: "a",
    lastName: "b",
    // ssn is optional
}

// interface could be used to enforce the contract between the classes and a certain API.
interface IComparator<T> {
    compareTo(value: T): number;
}

export class Person implements IComparator<Person> {
    constructor(public firstName: string, public lastName: string, public age: number, public _ssn: string) { }

    public compareTo(value: Person): number {
        const comparison = this.firstName >= value.firstName ? 1 : -1;
        return comparison;
    }
}

class Employee extends Person {

}

// structural typing system means that it two object have the same structure both can be assined to a generic type
// with the same structure.
interface IPippo {}

class Pluto implements IPippo {
    constructor(public member: string){}
}

class Paperino {
    public member: string;
}

const a: Array<IPippo>[] = [];
// Pluto has the same structure of Paperino
a[0] = new Pluto("");
a[1] = new Paperino();
