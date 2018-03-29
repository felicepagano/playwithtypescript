# playwithtypescript

Typescript notes

https://github.com/yfain/ts.git

Compiler Options

tsc is the command that run the compiler. Without any options tsc sill check for tsconfig.json file.
tsconfig.json contains compiler options.
Is more correct to say typescript transpiler when we transform a program from a source code language into another source code of another language.
If you define script section inside your npm file with tsc command, you will be able tu run npm run tsc that will run tsc using locally installed typescript. In general by putting a command inside the scripts section npm will use the local installed tool.

Fat arrow 
functions not only offer a shorter syntax, but make the meaning of the this pointer predictable.

let 
keyword that introduce block code scope.

class (also introduced in es6) 
you can use also data access qualifier available in typescript but not in javascript. Ts support private, public and protected access qualifier. Many people use naming convention to start private variable with an _ character. Ts supporto short constructor notation like this:

constructor(public firstName: string, public lastName: string, public age: number, private _ssn: string){}


Inheritance
Javascript supports so called Prototypal Inheritance.

Es6 modules and typescript Namespaces
Es6 module is a file with the code that use import or export statements. Es modules provide a separate scope for its members. If a Javascript file is not a module, all its members are created on the global scope. 
In typescript namespaces are used to avoid conflicts. It is not recommended to use namespaces, it is recommended to use es6 modules to resolve name conflicts.

Import {Server as HttpServer} from ‘http’;
Import {Server as WsServer} from ‘ws’;

Typescript Generics
Generics allow you to use, or create, parameterized types. 
In typescript they use structural typing system. So if two classes have the same structure typescript will consider these two classes similar. This can cause confusion with generics.

Interfaces
Used in two ways
1. To declare types
2. To enforce the contract between the classes and a certain API.
? After the variable name says that this variable is optional.
In typescript you can implements both interfaces and classes. If you implements a class typescript understand that you would implements the APIs defined in the class.

Destructuring object in typescript
Easily extract certain properties of an object. 

Union type
Using a vertical bar specify the “either/or” type.
e.g. number|string

Intersaction type
Combine two types together. 	
e.g. type TheWorker = IPerson & IEmployee

Mixins in Typescript
Mixin is a piece of functionality that can be used by any object. Typescript doesn’t support multiple inheritance. 
Mixins are yet another implementation of intersection types. 
You need a function that copy the mixin class method to the destination class (using prototype - js style).

async and await
Allow you to write asynchronous code and you can read it as it was written in synchronous way. 

Callback -> Promise -> async/await

Callbacks: make code hard to read (callback hell).
Promises: if the function success you invoke resolve, otherwise reject. It still have callbacks.
await: wait until asynchronous code completes.
async: declare a function as asynchronous. 
A benefit of await/async is the usage of the try/catch operator to wrap the entire function.

Decorators
Is a special function that can enhance the functionality of a class, property, method or a parameter.
Decorators start with the @-sign, e.g. @Component
Enable the Typescript compiler’s option:
“experimentalDecorators”: true

You can create your own class decorator.

TSLint
tslint --init

Type Definition File
Using javascript library in your typescript code.
*.d.ts
Type definition files contain type declarations for Javascript libraries and frameworks.
Are used bye IDE for autocomplete.
Typescript static analyzer uses these files to report errors.

npmjs.org/~types

e.g. npm i @types/jquery —save-dev

Adding Javascript libraries to typescript Apps

Three approaches:
1. Just import in the index.html file and use it referring with the global name. No typescript compiler’s errors; no autocomplete.
2. Install the library via npm, if the type definition file exists install it via npm, in the ts code import this lib’s global object import $ from ‘query’;. Typescript compiler’s errors and autocomplete.
3. Create your own type definition file *.d.ts. 

Resources

https://basarat.gitbooks.io/typescript/docs/getting-started.html
https://www.gitbook.com/book/pagalvin/yet-another-typescript-book/details