---
title: 'Week 27'
date: '2021-10-11'
---

*In this entry I want to share what I learned during Week 27 in the Nearsoft Academy program, where I have the opportunity to be in. For this week, I continued to review topics related to JavaScript, NextJS and GraphQL.*

---

**REGARDING THE TECHNICAL**

During this week one of the new technologies that I learned about was NextJS and while doing so I was able to get a working and deployed this blog entry.

But first it was important to understand why you want to use NextJS instead of using other methods such as Create React App.

With JavaScript there are different ways in which you can render your apps:

- Single Page Applications (SPA’s).
- Static Site Generator (SSG).
- Server Side Rendering (SSR).

Some of the characteristics of each as well as the  tools available to implement them with React are the following:

**Static Sites**

If you want to update content or components you have to rebuild. It is not ideal for apps that change frequently according to user input. Some advantages are fast, easily deployed, more secure. Some popular frameworks available for these kinds of websites are Gatsby and VuePress.

**Single Page Applications**

There are applications that render on the client side when the user requests them. Content is mounted and unmounted into a single HTML page. Done by client-side JavaScript.  Some of the disadvantages are that is hard to maintain SEO and initial load times can be considerable.

**Server Side Rendering.**

The server serves an already rendered version of the page to the client when it requests it. This has the advantages of making pages load faster, it is better for SEO purposes, it is friendly with slow internet connection. You should use SSR when you have many changes need data to be updated on every request.  Some frameworks are NextsJS and NuxtJS.

With NextJS you can implement all these types

One important feature of developing with it is that it pre-renders the content into static HTML,

that means that you are able to see the app even if you don’t have JavaScript.

It can do it by performing two phases:

- Initial Load: pre-rendered HTML displayed
- Hydration: react components initialized

You can choose for each page between two forms of pre-rendering, even create a hybrid:

- Static Generation. Generates HTML at build time
- Server-Side Rendering. Generates HTML on each request

In Next.js, you can add global CSS files by importing them from pages/_app.js.

**CSS modules**

Also by using **css modules**, you can import css properties into your js and allow you to have it separated since they are scoped locally, and so the code for one component doesn’t affect another.

Some references from which you can get more information:

- [https://coffeencoding.com/cra-vs-next-js-vs-gatsby/](https://coffeencoding.com/cra-vs-next-js-vs-gatsby/)
- [https://www.smashingmagazine.com/2020/07/differences-static-generated-sites-server-side-rendered-apps/](https://www.smashingmagazine.com/2020/07/differences-static-generated-sites-server-side-rendered-apps/)

**GraphQL**

A query language for API’s, in which you only have to ask for the information you need and your response will be exactly that, without the additional information you don’t want (from the client side). It is important to notice that GraphQL is a specification, not and actual implementation.

During this week I also had a challenge which involved using some GraphQL by using the

GitHub GraphQL API, which I found to be a very interesting to do, first because you can do many things with the information provided, you could even make your own app for looking for first good issues. GitHub has good extensive documentation which includes an online Explorer from which you can get started writing queries or another tool is GraphiQL which you can run locally.

Also, although I only could review it superficially by making some post queries, it was very interesting to find about this technology, an alternative to using REST, which allows you to retrieve only the necessary, it also allows you to set variables to pass down information to the query.

For my case the implementation was done using Apollo Client for GraphQL in which you initialize an apollo client and then with the *gql* wrapper you can specify the desired query.

**JavaScript Prototypes** - The Secrets of the JavaScript Ninja

For this week I continued reviewing JavaScript prototypes, here the author goes explaining little by little what happens “under the hood” when using js prototypes. Again, the explanation is thorough, and the diagrams help you understand what is happening with the relations between functions, instances, constructors and prototypes.

One of the diagrams that called my attention the most iwas about the prototype chain using inheritance.

![image](/images/PrototypeDiagram.jpeg)

Classes in ES6 are syntactic sugar over this protototype based model.

Some notes:

- Object.setPrototypeOf allows you to take two object arguments and set the second object as the prototype of the first.
- When you create a function it gets a new prototype object.
- When you use a function as a constructor, the prototype of the newly constructed object is set to the object referenced by the constructor function’s prototype.
- There are instance properties (declared in the constructor using *this*), and also prototype properties (defined using [Function].prototype.[property]).
- The instanceof operator lets you know if the instance was created by a certain constructor.
- You can configure object properties (such as making it enumerable, define get, set, writable or configurable aspects of them)
- The way to achieve inheritance and respect the prototype chain as intendes is to use an instance of an object as the other object’s prototype (SubClass.prototype = new SuperClass(); However that creates the problem that the constructor no longer points to Ninja, to solve this, we can use define the constructor property on the Ninja.prototype using Object.defineProperty.

---

**REGARDING THE GENERAL**

This week, I could learn a little bit both on theory and on projects with the challenge. Some of the non-technical aspects that I need to improve are reducing the time it takes me to review the documentations, and trying stuff although I hope that I can do it little by little with practice. Some other thing which I can be working on during this week is to make a review of the previous projects to make a comparison between the different ways of how they are structured and which things they have in common. Maybe having those things present could help out, when facing other new technologies and not get confused between them.

Also, and again, I can pay special attention to applying the techniques of prioritizing tasks under time constraints, and try to set up opportunities and challenges to practice this.