---
title: 'Week 30'
date: '2021-11-01'
---
*In this entry I want to share what I learned during Week 30 of being in Encora, where I have the opportunity to be in. For this week, I continued reviewing topics related to JavaScript, GraphQL, NextJS and some helpful frameworks to complement those tools.*

---

***React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL** - Udemy*

*During this week I focused my attention on completing a course about advanced React that also included other tools such as NextJS, Apollo, MongoDB and GraphQL. I wanted to continue strengthening my skills in those technologies which I have been learning lately. What caught my attention was that it was not just a simple project which would teach you the basics, but rather a more complex project that seemed to include good practices, and several technical things and was recommended by someone at Encora. The project consists of building a Customer Relationship Management (CRM) application and some of the things needed for that are user authentication, private routes, creating the backend with GraphQL (which was something new), some more complex searches, keeping track of orders status, and graphs.*

***Apollo Server with MongoDB***

*I had the opportunity to learn about the server side of GraphQL by using these tools and implementing the backend for the project. Although most of the work was a bit repetitive in order to write all the queries and mutations with their respective validations, what I found interesting was that I could learn about good practices in making them and think about the possible scenarios in order to throw errors if needed. Also I could learn more about mongodb especially things like:*

- aggregation: It is an operation that allows you to group values from different documents. It consists of a couple of stages. After these you can then perform other things like sort them in a particular order, sum the returned values etc.
    - match. Here you filter among which documents to do the aggregation. (In my case it was by orders which status was ‘completed’)
    - group. Here you specify how to group your documents. (In my case it was by seller)
    - lookup: Allows you to perform a join with the processed information
- index. Allows you to to make the execution of your queries more efficient.

**Tailwind**

It is a CSS framework which consists of a collection of predefined classnames.It allows you to use these classnames in your elements to add styling to them. You usually add many of these classnames to achieve the functionality you want, each classname does one and only one thing, in contraposition to regular css, where you define classes that contain many instructions of styling. One of its advantages is that it simplifies a lot the process of making responsive components, on the other hand, one disadvantage is that you end up appending a lot of them horizontally in your html (well jsx in this case). During this week I used some of this classes to control simple things like colors, margins, and even a little bit of flex and using classes for different screen sizes.

**Formik**

Another tool taught in the course was formik, which is a library for forms in React which simplifies this process so you don’t have to worry about getting the values in and out of state, validations and form messages, and handling the form submission. For validation, the course integrated also yup, which allows you to define validation schemas for the input given.

---

**General**

In general, I have been learning about new technologies and also about some good practices, like adding lots of validations for possible scenarios and in the front end part now that I have started it, some details hat improve the user experience, like using the proper attributes for accessibility, or like showing validation errors in a more elegant way, showing messages to the user only for a couple of seconds, among other things. I hope that this project can help me as a reference in the future and I guess it is a nice thing to have in my portfolio.

I also had the opportunity to practice a bit of algorithms, and with the help of my mentor a live coding exercise with some extra exercises. I hope that practicing the coding and what to do in stressful situations will help me for future interviews, since it is something that I struggle with.