---
title: 'Academy Week 2'
date: '2021-04-19'
---
In this entry I want to share what I learned during Week 2 in the Nearsoft Academy program, where I have the opportunity to be in. I learned about what could be described as a mindset that will help me to better approach my projects and the way I work with software. And also, I learned new things related to an important technical tools, such as the linux shell and data structures: Queues and Stacks implemented in Java.

**Google I/O 2009 - The Myth of the Genius Programmer -** Brian Fitzpatrick, Ben Collins-Sussman

This talk came in with good timing because, I had just started with my sessions of pair programming with my mentors. And I understood the and value it provides. This is true when you are working with extensive software.

What I took form the talk is that it is a terrible idea to let know people too late: they probably won’t be able to make significant changes and leave a mark. Also it is not a good idea to let people in too early, there will be too many ideas, it can deride from the original intention. So maintaining sight of when the appropriate timing, the sweet-spot is crucial, so you can get feedback, right when it makes sense to take it. They mentioned that this is usually one you have clearly written down your goals and what to avoid, and when you have already done some amount of coding, it doesn’t need to be too extensive nor to scarce, but rather act as a  proof of concept.

Some other key points to consider are:

- Code reviews
- Lose your ego
- Criticism isn’t evil
- Iterate Quickly
- Be a small fish
- Be influenced
- Be vulnerable

Embrace Failure. It is a natural human thing. (Just don’t fail in the same thing over and over again). Be ready, document what happened, what did you learn, what you will do differently next time. You should change your mentality, and be proud instead that you are doing something to learn. Overtime failures tend to get smaller, and successes larger.

They also mentioned that a good number is three collaborators. I have a personal anecdote with that number. When I was coursing my Bachelor´s we were asked make a program to emulate the behavior of an elevator with Ladder language for PLC’s, and we were assigned in teams of three. So, a lot of people designated a coder and organized themselves for other projects. This wasn’t some short code you could do in a day or two, so we decided to do it together. Up until then, I had always thought that coding was something that you did alone. I did have that image in my head. But actually, there was discussion, ideas, and for that project things went pretty well. Now that I saw this talk, things made even more sense, and explained why things were like that.  So, hopefully, I won’t forget them.

**Google I/O 2009 - The Art of Organizational Manipulation and Programming Well with Others: Social Skills for Geeks -** Brian Fitzpatrick, Ben Collins-Sussman

In an ideal company, that is one that understands and encourages this kind of behavior, what you would want to be doing is to employ servant leadership. In stead of thinking : oh, I should only care for what this people can do for me and how they help me to achieve my goals, you should be asking how can you help them, precisely, because in the end it is in everyone’s best interest. You are expected to act like an adult and pursue responsibilitys. They can be very flexible and trust you, because when you have this opportunities you have better chances of doing your job right. You also, would want to question things and take risks, because it is a fundamental part of the process of learning and success.

However, the reality is different, we usually, have to deal with self centered managers, who ignore who is not doing their job right and who is having to actually carry all the weight, and what’s more is promoting the office politician, a person who is “perceived” as impactful.

In those cases, there are actually ways to “manipulate”, as they call it, that system in favor for a better environment.

Even if the extent is limited, you want to be taking risks, when you know those actions are right. You need to think that is better to ask for forgiveness instead of permission when you take up on actions that would benefit the company, and the people in the company. Of course, doing it in a judicious manner. You don’t want to do something that can’t be undone, or that ends up jeopardizing your career.

Do more than you are asked for, create a plan,  identify what you need what are your expectations, your successes, your failures. Learn the power of sneaking ideas in the minds of lots of people or influential people. Sometimes you gotta choose between getting the credit and getting things done.

They also gave this advice that for me is invaluable. I have problems when asking executives or in general figures in powerful positions for something. But, actually this method seems that could work our in situations like that, and also more situations when there is no need to go into details, since it is fast, and people’s time is valuable. When I need to ask for something I should write down in three concise bullet points the negative aspects, and then mention the action that could be used to resolve all of this. This will hopefully, give me the the attention of people and help me achieve the results I want.

**Perffmatters-** Colt McAnlis

What I took from this talk is that when developing web applications, I need to be critical about how to solve the issues that come up. Instead of working on what I think might be wrong, I have to be certain. In order, to be certain I need to use the appropriate tools to measure what is wrong. He describes this process as Gather- Insight- Action.

And it makes perfect sense because doing it this way you can find exactly which resources need to be optimized, even if they end up being something that you didn’t expect. Maybe you realize that there was an issue, but following this methodology you realize that there were multiple issues, so it is like a cycle with each problem that you go debugging.

He talks about the Pilars of performance, which are :

- Network. Instead of thinking of load time, think critical path. Which is the process of the dependencies of your assets until you get the first pixel on screen. To optimize it you need to find a way to reduce the actual number of critical path requests and well as their size. You need to try to make it simple and resolve chaos. For mobile apps, you need to remember that internet connection can potentially be unstable and this sort of considerations do make a difference when loading the site. He also recommends a tool for this stage which is [webpagetest.org](http://webpagetest.org/). Up to this day (the talk is from 2013, I write en 2021), the site is still relevant and reliable, and from what I searched after watching the video, other tools to consider might be [developers.google.com/speed/pagespeed](http://developers.google.com/speed/pagespeed), [saijogeorge.com/best-marketing-tools/#speed](http://saijogeorge.com/best-marketing-tools/#speed) and [fpt.pingdom.com/](http://fpt.pingdom.com/).
- Render. Reduce the number of paints. He mentions mainly, that when you scroll you need to rasterize content, so it is important to optimize how exactly that process will take place. Sometimes you need to even rebuild the DOM.
- Compute. He says that sometimes what happens is that frames are skipped when a process takes slightly more time than it should and the whole frame is lost. He recommends to reduce the JacaScript execution time. In order to do so, you can collect the JS CPU Profile and observe behavior from there.

**THE LZ77 COMPRESSION FAMILY -** Colt McAnlis

**Variable Length Codes**

An  introductory example provided is Morse code. It’s brilliance resides in the fact that  it was designed so that most frequent letters have shorter codes, and thus be more efficient.

To understand better, he explains the concept of entropy, which is the estimate of minimum number of bits that each symbol has to have on average. So as we move to situations where the frequency of some elements increases and other decreases, (that is non uniform probability), it makes sense to assign shorter codes for frequent elements, as in the example of Morse Code. That is the principle behind Variable Length Codes.

While encoding is simple using this method, when you try to decoding VLC, you don’t know how many bits to read. That gives rise to the PREFIX  PROPERTY. To avoid ambiguity in decoding, once a code has been assigned to a symbol, no other code can start with that pattern.

He mentions that some simple VLC’s are Unary codes, Beta codes, gamma codes, delta codes and omega codes and hundreds of VLCs, so how do you choose from them? Actually, you can actually construct your own VLC based on your specific probability using Huffman Trees.

**Compressor Head**

In Information theory there is a principle proposed originally by Claude Shannon that says that entropy defines the numbers of bits needed per symbol on average to represent data stream. If you multiply entropy times length of stream, you get smaller size that stream can be compressed.

However, that is a theory, not a law and we can break it. The idea is that you can transform the data so it can be better compressed. For example a sorted natural number can be transformed to a list of their difference(1). And you will have a list with, a level of entropy of 0. That’s because the difference is always 1. You now need to know where it starts and the length, or where it ends. Well, all that seems very beautiful. However, not every data transform is suited for every type of data. You need to know something about the data, to know how to transform it and produce lower entropy.

Lempel and Ziv, came up with algorithms (LZ-family) where you create lists of tokens on which you put representative information about the appearance of the symbols in a given stream. This method has proven to be very effective since they has been the topmost used for over more than 30 years undisputed.  LZ77 and LZ78 are the mothers or main branches in the tree of compression algorithms. If you add some variants and place more importance to certain characteristics you get the algorithms that are used by famous tools such as WINRAR, WINZIP, &ZIP.

Markov chains

The ability to encode transitions rather than exact states, and having some transitions implicit in the encoder and decoder is the base of Markov chains. (Reign of Associative Probability). You determine the number of everything by looking at the char with the most transitions. To be effective you can use variable length codes to describe smaller or larger transitions as long as the most probable symboled is assigned with the smallest code.

For me this was a very interesting topic (especially when he mentioned that Markov did a combination of mathematics and Poetry, actually while reading Pushkin). Even if I didn’t understand it fully, I could get a general idea of the process of compression, that there are different algorithms and that is important to know which to choose depending on the data. I also found interesting that he talked about, information entropy and Markov chains, which are some topics that I have been considering for my next presentation (LightingTalk).

**Developing Expertise: Herding Racehorses, Racing Sheep -** Dave Thomas

Over the years, the bug rate has been constant, even though IDEs and Programming Languages have remained the same. That leads to the conclusion that: without excellent personnel, even good to excellent process can only achieve moderate results. 

There are two extremes int he journey of developing expertise. 

- The wizzard, pull answers are off thin air. Intuitively know them
- The novice. Need clear instructions, need to know when something is finished. Needs rules

The Dreyfus Model which is a model for skills acquisition mentions that people has two gages: Rules and Intuition. As you start to get experience the need for rules  goes down and intuition comes in. 

During the process to develop expertise you need to pass different stages. 

- Stage 1. Novice. Short term goals, it is difficult to learn how to fly, you don’t do it by reading a book. As you learn something you assimilate it. It is like learning to drive, at first, you don’t want to give them a long explanation. Practice, then  you will be able to do it unconsciously.
- Stage 2. Advanced beginer. Pairing and Unit testing. They will still probably mess up. But need to be taken after by someone, because people, when learning, make very similar mistakes.
- Stage 3. Competent. Start to plan, start control of the future.
- Stage 4. Proficient. Learn from the experience of others. Want to understand the larger framework.
- Stage 5. Expert. Wizzards. Continually look for better methods. Primary source of information.

For Now I would consider that in the world of software programming, I am the a stage of Novice. Fortunately in the Academy, I get the opportunity to experiment and be taken care after people who knows and can guide me in my journey, they establish short and long term goals, and i get the chance to do Pair Programming and choose my own too, work towards the career I want to build. But I know this is not going to last forever, so it is good to know what should I look forward when learning something different, and also look for experts from whom I can learn. 

**The best programming language**

There is not one best, there are many. The aspects you need to consider are: 

- Productivity: How fast you can finish your projects with it. It also depends on what task you want to do.
- Performance. You should think about why would you want to improve performance how fast does it really need to be.
- Reliability. That it works consistently when you need it, that is predictable.
- Portability. You can migrate ir from one environment to another one
- Community. A small community is a problem, you end up doing more work, since there are no libraries, tutorials.
- What you already know. This is not so important, you can learn.

What I got with this talk was some specific things to consider when choosing a programming language. For now I know a little python, but I also think it would definitely be important that at this point, based on recommendations from mentors, the talks and videos, and my own little research advice that I put effort to learning JavaScript, I should take the opportunity of learning from my mentors experience.

**Perfection is an unrealistic goal**

Something unrelated to the actual topic (maybe not so). I liked how at the beginning of the talk, she was very honest of how difficult it had been to prepare the material, and how some information she had just learned over the last weeks, and that she acknowledged that even she ignored many things.

She learned that formality, specifications and elegant, really take up much time and doesn’t work. Then she discovered agile, and how sometimes you don’t exactly know what is going to happen, but you make it grow together.

She talks about the myth of getting things right, when it doesn’t make sense. First, we don’t even understand what does that mean, (we can only understand it enough). Second, there is this thought of linearity towards it. Instead, we should test the waters, improve little, and then decide what the next thing is going to be, and  finally keep going on. Don’t get stuck, experiment and learn.

She also explained the neurological part of sleeping and why you should sleep in 90 min cycles to get better rest. But that is old information. What is interesting, is what our cycles are like in the day time, and there is reason to believe that 90 minutes are a good idea too. A natural ways is to get intense work sessions and then short beaks. It can boost efficiency even more than long hours or multitasking. Your capacity to be focused is critical as CS.  Ideas and solutions are in unexpected places.

The unconscious part of a the brain can solve more things that you can be aware, but you need to give it the opportunity by providing it a time to emerge. 

**Everything is a remix -** Kirby Ferguson

In this video, Ferguson describes the context in which we currently find ourselves, where information and ideas is so valuable, that there are strong interests to hide them, to forbid others from using them. 

He starts by explaining the term "remix". The term comes from the musical context, and it is the ability to combine or edit existing materials to produce something new.

He mentioned that many elements in popular culture take ideas from other places: from Led Zeppelin, going through Star Wars to Quentin Tarantino.

As Isaac Newton mentioned: If I have seen further it is by standing in the shoulders of giants.

Creativity exists by applying ordinary tools of thought to existing materials and create variations. Nobody starts original. To learn we need to emulate, then the best results come up when ideas are combined.

COPY - TRANSFORM -COMBINE

People likes to take great ideas from others (sometimes inadvertently), but don’t want their ideas to be taken from them. That has produced strong legislation in the matter of intellectual Property, so nowadays, it is not a surprise that 62% all patent lawsuits are about software. 

We find ourselves in this kind of world, and it is our job to propagate ideas, for the common good.

For me this video was about the importance of sharing, and specifically us that are submerged in the world of software to advocate for the open source culture. To think of collaboration. Because that is the way that progress in the world is made, not hiding our ideas. This relates to  Fitzpatrick and Collins-Sussman talks. Know how to share. 

**Shell Tools and Scripting** - MIT Missing Semester

Assign variables and access value (Notice lack of spacing)

' are for literal strings and " for variable

```bash
foo=bar
echo "$foo"
# prints bar
echo '$foo'
# prints $foo
```

Bash  also supports control flow techniques including: if, case, while and for. 

```bash
mcd () {
    mkdir -p "$1"
    cd "$1"
}
```

Here is a list of special variables: [https://tldp.org/LDP/abs/html/special-chars.html](https://tldp.org/LDP/abs/html/special-chars.html) 

If you want to get the output of a command as a variable you can use $( CMD ) or <( CMD )

For comparisons use double brackets [[ ]]

For common substrings  in a series of commands use curly braces { }

Also, shell functions are not the same as scripts. 

You should be able to to use find to search for files

```bash
# Delete all files with .tmp extension
find . -name '*.tmp' -exec rm {} \;
# Find all PNG files and convert them to JPG
find . -name '*.png' -exec convert {} {}.jpg \;
```

grep is a  generic tool for matching patterns from the input text

The history command will let you access your shell history (Up arrow)

Access recent dirs with fasd and autojump (z commmand + name)

**Data Structures -** Kirby Ferguson

I learned about two Data structures implemented in Java. Although I had already studied a little bit of this topic, I had seen it in Python, so its is good to know how to implement it in another language, and refresh the memory.

Queues: FIFO. “First In First Out”. Some actions:enqueue, dequeue, peek, size, isEmpty.

Stacks: LIFO. “Last In First Out”. Some actions: pop, push, size, peek, isEmpty.

[Queues & Stacks](https://www.notion.so/Queues-Stacks-48da83416d054606afac95f72eb7cd03)
