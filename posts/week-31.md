---
title: 'Week 31'
date: '2021-11-08'
---

*In this entry I want to share what I learned during Week 31 of being in Encora, where I have the opportunity to be in. For this week, I continued reviewing the React course and some helpful complementary frameworks and tools.*

---

While last week I worked more on the part of forms, practicing using mutations and queries and the visuals for the pages, during this week, in addition to that I could review some other interesting things, like how to make use of the cache in Apollo and learn about using the context and the useReducer hook.

Apollo provides an out of the box way to store the results of your queries in a normalized (or restructured relational table with reduced redundancy) local cache, by performing the following steps: (1. Identify object,  2. Generate cache IDs, 3. Replace object fields with references, 4. Store (merged) normalized objects)

For this cache to be used you can choose different modes of doing it, depending on your needs for the accuracy of the query results, in how quickly you need the data, and how frequently you will be updating or requesting it.

- Cache first. If there is no cached data it will request it to the network.
- Cache and network. For frequently updated data. Will always make request and then merge the response
- Network only. Will always make request and update cache with response
- No-cache.

While working on the course I learned about a way to make best use, (at least for this project), of the cache using the default cache first fetching behavior and reading and writing directly on the local cache for performing operations like creating or deleting new objects (as for reading or updating these steps are not necessary), as recommended by the instructor of the course. By performing these operations in this manner, you can have immediate up to date data and don’t need to make as many network requests as with other approaches, which also results in lowering the costs of the database services, and for large scale applications this is something to take into consideration.

I also learned how to make use of the useReducer in conjunction with the useContext hooks to make the reducers available through the entire app. This can be used as a simpler alternative to using Redux, and it appears to be preferred for managing smaller parts of local state, in contraposition to redux where it has to become global.

In addition, by recommendation of my mentor I reviewed the latest release notes from the frameworks which I have been working with, and some of their features are the following.

**Next.js 12**

- Changes Babel for Rust which will produce faster builds and refreshes
- Middleware to run before rendering each page and can be scoped to work on certain pages or run on all
- Server Components and show updates as they come.
- Support for React suspense and lazy mode.

**React 18**

- Automatic Batching (To have the option to do multiple state updates into a single render)
- Transitions (To have the option to control which updates should be performed more quickly)
- Suspense and SSR. To happen concurrently instead of step by step. To have selective hydration and make some components interactive more quickly.

Also some complementary tools I have used for the project have been:

**SweetAlert2:** For styled pop ups

**React-Select:** Which is a ready to use input component.

Finally, this week I reviewed some security concepts as part of mandatory training, which is a good thing to do periodically, to be more alert.

---

**General**

In general, I have been able to practice with the project, learn more about the technologies I have been using, their latest features, read some articles, opinions and comparisons with other technologies and have been able to continue practicing some algorithms to be prepared for future interviews. My goal now is to finish this asap and continue getting prepared.