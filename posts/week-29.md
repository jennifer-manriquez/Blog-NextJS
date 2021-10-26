---
title: 'Week 29'
date: '2021-10-25'
---

*In this entry I want to share what I learned during Week 29 of being in Encora, where I have the opportunity to be in. For this week, I continued reviewing topics related to JavaScript, NextJS, and I worked on a couple of projects to continue practicing.*

---

**TECHNICAL ASPECTS**

**SASS**

*During this week I made a quick review on this topic, which I had pending on my todos list, since it is something that I hear mentioned a lot. In the end, I thought it was a great tool since it helps you simplify and reuse code. Also, in the future I would like to learn about other technologies to be able to compare it with,  like tailwind or styled components.*

**Notes:** To use it you need a SASS compiler,  like npm or also VScode has an extension so you can run .sass files (which use indentation). or .scss files (which use brackets).

Some of the features you can achieve with it

- You can **modularize** the code and then bring in it all together to the main without having to do multiple http requests.
- It allows you to do **nesting**.
- **Functions** and **mixins**: You can use @function to return things and @mixin to provide useful code blocks (you can use functions inside mixins). Functions are called and mixins included.
- You can have **variables** (which you declare using $).
- It allows **inheritance**. You can extend some previously defined properties and reuse them in other selector
- You can have **conditionals** and logic like @if, @else statements
- You can **reuse** the parent class's name by using & in the child.
- You can declare lists using parentheses and use them in **for loops** declared with @each and access the parameters with #

**Use Case Diagram Notes**

For this week I also learned about making proper use case diagrams. Some notes on this:

**System** is represented in a rectangle and everything goes inside it

**Actors** are the users of the system (person, organization, system, external device). These are categorized as primary(active) and secondary(reactive).

**Use cases** are represented with ovals, they are actions that accomplish something within the system

Actors interact with the use cases and that is represented through relations which can be

- Association. Solid lines
- Inclusion. Dashed lines going out from Use Case
- Extension. Dashed lines coming into Use Case
- Generalization.(Inheritance). Arrow line from children to parent

**Regex.**

*For a part of the mini project that I did I needed to format the results from my request into a specific date format and the data provided would come in many forms, some even containing words and abbreviations, so it was necessary to review it in order to make the specific pattern I needed.*

[Regex cheatsheet](https://www.notion.so/Regex-cheatsheet-94736acf043248cf8e4da9f937e327a5)

**Udemy Course-** Advanced React: Fullstack Next.js, Apollo, MongoDB and GraphQL

**GraphQL**

It is a technology which allows you to retrieve from a single endpoint only what you ask for in contraposition to REST API technologies where you get everything in any given endpoint. Is language independent and is always backwards compatible. It can be built on top of an existing API. Note: There are only 5 data types n GraphQL (Int, Float, String, Id, Boolean)

The fundamental conceptsin GraphQL are:

- **Query**. Allows us to read the registers, and is equivalent to R in CRUD, Select in SQL or get in REST API.
- **Mutation**: Used for the rest of CRUD actions, Create, Update and Delete.
- **Schema**: Describes the “form” of the data, queries, and object types.
- **Resolver**: They are functions which return the values defined in the schema. Deal with the communication with the server language and the database. They are the backend for queries and mutations.( Their names must be the same as the defined in the schema). You can pass information to resolvers though the context.

---

**GENERAL ASPECTS**

During this week I could finish the mini project I had been working on which was a Gallery App to display artworks and their information by using the MET, wikidata, and wikipedia APIs, also making use of the NextJS technology. I could make use of the advantages of using NextJS static generation mode to preload information from API calls, I learned how to make modals in CSS and some new properties, how to contain the arworks in columns so that the picture's proportions would be conserved, among other things.

Also, I started a course that involves many of the technologies that I have been working with, and could help me reinforce my learnings in them. Also I found it quite interesting since it is modern and tech you some non trivial stuff that you would actually use,  in contrast to others that teach you only the basics. I hope I can be writing more on that in my following entries.

Some two things that I took up this week were practicing writing algorithms (which is always a good thing to do, especially in a position where I might be getting interviews) and reviewing the topics from the missing semester, since I feel I still need to improve those aspects and use the computer tools more fluently.

On the other hand, the things that I will be paying attention to improve have to do with communication and being able to keep my mind in the present activity. The first since after a feedback I was given I reflected that when I set my mind and prepare accordingly I can have positive outcomes in things that require me to make explanations, but I usually neglect that during my common day activities, so I think it something that I can do but  it is a matter of paying more attention to it. Instead of deviating my thoughts only to my natural course of thinking I should remember to always give my explanations a certain structure and clarity. The second thing, since during an interview I didn’t do so well, so I need to practice both the coding interviews, and keeping my mind present.
