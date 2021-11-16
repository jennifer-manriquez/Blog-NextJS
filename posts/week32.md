---
title: 'Week 32'
date: '2021-11-15'
---
*In this entry I want to share what I learned during Week 32 of being in Encora, where I have the opportunity to be in. For this week, I finished  the react with GraphQL and focused on learningTypeScript.*

***React Course***

*Regarding the react course I was finally able to complete it. Among the last things I learned were about using Recharts, which is a library that allows you to create graphs by making use of React components, the documentation provides useful examples and in general it is highly customizable and even allows you to easily implement responsiveness to it. Also, from apollo, I learned how to do automatic polling using startPolling and stopPolling, in a useEffect hook, which allowed to have up to date data for the Charts.* 

*For the most part of the week I worked on migrating the project to TypeScript,  learned how to configure it with NextJS to allow for strict checks, and worked on fixing the errors that were appearing. Also, I wanted this not only to be a review but rather, that would help me to get a deeper understanding of the language, so one of the things I have been making has been to start reading **[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)** from the official documentation. At the moment I have only checked a part of it, and here are some notes I did:* 

NOTES

**General notes**

- TS is a structural type system: If two objects have the same shape, they are considered to be of the same type. The shape-matching only requires a subset of the object’s fields to match.
- TypeScript has several type-checking strictness flags that can be turned on or off, "strict": true in a tsconfig.json toggles them all on simultaneously,
- Optional properties are specified with ? Sometimes you’ll have to check for undefined before using it.
- Non null assertions. Are used when you know better than the compiler that a value is non nullable. Their syntax is a postfix exclamation mark !
- The difference between type and interface is that the latter is open for extension. The first could only be extended using intersections.

**About narrowing**

- You can use type assertions to specify a more/less specific type when you have information about the type of a value that TypeScript can’t know about. (You can use *as* or <> )
- When working with union types, ts expects that all the properties are available on either type, so if that is not the case sometimes you have to narrow the union so it can deduce the specific type on which to perform it. You can do it by using typeof, checking the truthiness, by equality (can check if something is null or undefined), use the in operator to check for shared properties, or even using instanceof operator.
- To have better control you can also have user defined type guards in which you return a type predicate in the form of a boolean, which lets you know if your object is of a type.
- Another for of narrowing is by using Discriminated Unions, in which you make an union of types that have at least some property in common, when assessing the properties that are different in the union you’d normally get an error, but you can narrow the type by making sure that the property in common makes you differentiate first the type on which it will certainly have the property.
- The never type means something that is unreachable, so you can take advantage of that type to make exhaustive checking , when you reach that type (e.g with if else statements) it means you'll have exhausted all the possibilities.
- Control flow analysis is the analysis of code based on reachability and is how Ts narrows types as it encounters the previously mentioned type guards, so that a variable can have a different type.
- **On Functions.**
- You can write Generic Functions where the types of the input relate to the type of the output. in order to declare the, you need to add a type in the function's signature . The most common example use of generics is to define arrays whose return type will be defined based on it’s inputs. You can also add constraints to limit the types accepted by the generics
- Some guides to write good Generic Functions are to :
- Push type parameters down:
- Use the type parameter itself rather than constraining it
- Use few type parameters
- You can mark optional parameters with ?

*The most challenging part from doing this migration though, was working with the types for the context, and useReducer, since this needed to be provided with a specific syntax. A great tool to achieve this was the [React Cheat-Sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/). But it was also very valuable to have the help of my mentor, who helped me and pointed me in the right direction of things that I wasn’t considering when I was just trying to fix the errors. I was making many mistakes by trying to solve the problems that appeared by adding union types whenever things mismatched, but that was only leading me to more problems. Instead what I needed to do, was to get the types right from the start and which had been established in the code, and then handle the cases, especially the case when something could be null, which was a recurring issue, and which later I read more on how to do by using **narrowing** a series of strategies mentioned in the handbook*.

*Finally, another important thing that I learned was while working on this project when I accidentally exposed the information of the secret .env file. The thing is that I had been working locally, and didn’t really noticed, but when I uploaded my repo the issue was notified. Fortunately, this was only dummy data and I was the only participant in the repo, so it wasn’t that much trouble, but still I had to go though the whole process. I thought that it would be a matter of just removing the tracked file, but that wouldn’t delete the history. So the first thing to do was to take down the repo until I could fix it, then revoke the database keys, and make some new ones. Then permanently removing the information, this step by using BFG repo cleaner. Finally [rewriting the history](https://www.youtube.com/watch?v=msUDPYsbABY), now with the file removed. It did take a lot of time to go through all of this, so in the end I learned the lesson.*