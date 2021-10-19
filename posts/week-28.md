---
title: 'Academy Week 28'
date: '2021-10-19'
---

*In this entry I want to share what I learned during Week 28 in the Nearsoft Academy program, where I have the opportunity to be in. For this week, I continued reviewing topics related to JavaScript, NextJS and I worked on a project to continue practicing.*

---

**Notes on NextJS**

- Routing in NextJS is performed differently as you would do with regular React where you would need to add a third party package, instead with NextJS uses a file based mechanism by which you get the route out of the box when you create a new file in the pages folder. With getStaticProps files can be read directly from the filesystem using process.cwd()
- NextsJS support nested dynamic routes, and a mechanism to catch all routes, on which you can then extract the values from those routes to use in your component.
- By using the Incremental Static Regeneration feature along with getStaticProps you can regenerate pages on the fly when data is updated so it's available on next visit.
- The Link component is for client side navigation, you can also navigate programmatically using useRouter.
- You can get information about your page if you run it in build mode, also it is different from doing it in dev mode, since in dev mode, there is no pre-rendering.

*During this week I have been able to learn more about NextJS by putting it into practice, but now in a project which is a little more complex from what I had been doing before, with more modularization, and API calls. This has caused me some confusion about the types of rendering I should be using for each functionality, but at the same time I have been reviewing it again and understanding it, each time a little better. In order to improve what I have at the moment I will still will be reviewing the documentation and a course that I found which has been helpful since it mentions practical things that are not explicitly said in the documentation and shows examples and has been helping me solve some doubts I had, also the part of optimizing images is something that I want to understand better and use it in my project.*

---

***Notes on The JavaScript Ninja***

A **Proxy** is an object that wraps a target object and acts as mediator from operations to target. Use in code that doesn’t present performance issues.**

Proxies have traps such as get, set, apply(calling a function), construct (when using new), enumerate(for-in), getPrototypeOf, and setPrototypeOf

Some uses of proxies are:

- To use as a cleaner way when logging reading or writing into a property.
- To measure performance of a function (with an apply trap).
- To autopopulate properties.
- Data validation.

About **collections**. The author makes a review of some common methods for arrays, and also shows us how to reuse these built in functions so we don’t have to “reinvent the wheel”’ in objects by using call or apply to apply the context of our desired object. Here the author also warns us not to use objects as maps since you can have access to properties you didn´t define and keys can only be strings, and you couldn´t, for example, store HTML elements since they would be stringified with the same key and overridden.

Maps are defined with *new Map* and have methods such as set, get, has, size, delete, keys With this you can map objects and call by their name as key. You can iterate over them in order of insertion with for of loop.

Sets are collections of distinct items. It has methods such as set, has, add, remove, they are similar to maps and can also be iterated over. They also have common operations such as unions (can use spread operator), intersections (convert to array and use filter) and differences.

Regex overview: Some flags are i(case insensitive), g(match all instances), m(multiple lines). Some metacharacters are \d for digits \w for alphanumeric words \s for spaces. Also use forward slashes for exact matching and brackets to match from a class of characters and escape characters with backward slashes. Use characters for position like ^  for anything but, use  ^  /b for word boundaries and $ to denote beginnings and ends, Some quantifiers are optional with ?, repetition with +, zero or more repetition with *, fixed number of repetitions with {}, repetition range {start, optionalend}. Use parentheses to group terms, use | for alternatives. You can match backreferences with wit \1 or \2 etc and are useful for tags (like <div> and <div>).

*In general, by reading these chapters I was able to learn about new things like the proxies, and review some code examples using maps and sets in JavaScript, that even though I was familiarized with them in python, I could now learn about them in JavaScript. Also I was able to understand regex a little better, which is a powerful and commonly used tool which up to this point I had only been using but not quite understanding.*

---

**Notes in general**

*During this week I wanted to start a project where I could continue to learn, while also doing something that I would be excited about and that’s how I ended up working on an art gallery exercise project using NextJS again, I thought it made sense since it is especially useful in websites where you want to have performance optimization even if the requests depend on the user’s actions. While doing so I have been able to learn about a couple of APIs, like the MET API, which came as the initiative from the museum to make available to the public their collection of works which are now in the public domain, with the information retrieved from the site I I was also able to make use of the WikiData API information of the Artworks and then make use of the Wikipedia API to extract a fragment of relevant information to use in this project. While doing this, I could learn many more things about CSS in general, how to make a modal to expand an image’s view, I could learn a little bit how to modify the request configuration, continue practice with React and practice requests, and currently I want to continue learning about NextJS to ensure that I can make an appropriate use of it’s features.*

*For the next week I would like to continue to pay attention to the ways I organize my time, I would also like to take up doing some more algorithms exercises, which is something I have been leaving a little bit behind and studying again about interview topics.*