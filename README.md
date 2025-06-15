# Focal

An app to help and connect learners of the Irish language 🇮🇪🧑‍🏫

focal (meaning: a word) &
<a href="https://www3.smo.uhi.ac.uk/gaeilge/donncha/focal/focal044.html">cúpla focal = a few words (the amount of Irish that any Irishman can produce, if pressed)</a>

## Aims & Planning

For this assignment I knew I wanted to use a relational database, and I challenged myself to try and design a database that didn't (entirely) rely on the posts/tags example we worked through as a workshop. Originally, I wanted to develop an app that would allow non-verbal users to play soundbites from a wordbank -- scalability would come in the form of a wordbank growing, as well as non-English wordbanks, to account for other users. However, although I was passionate about this idea, the process of designing a schema kept tripping me up, so I went back to square 1.5 and instead decided to create an app that would play soundbites of Irish words for English speakers who are attempting to learn the language.

This was still a project full of passion from the outset, as I have strong feelings about keeping the language alive, and I hope that the process of building this app will bring me a couple of steps forward in working on my original idea (b ᵔ▽ᵔ)b

I wrote my own user stories for this assignment (the overall aims are of course inclusive of the provided user stories in our assignment brief) and employed (for free) my girlfriend to work as a pseudo beta-tester -- as someone who has no knowledge of Irish, I was curious if the app could actually help her learn even a single word, and if the design was user-friendly to people who are not the person building the app...

**User Stories**

📗 I want the user to be able to chat to others learning the language

📗 I want the user to be able to learn words in another language easily and without the process feeling like a chore

📗 I want the website to be accessible for those who may rely on assistive technology, and for these users to be able to learn and interact as much and as easily as other users

## Designing

The process started with the design of my database: listing what tables I thought would be needed and then the columns in each table. I did this on a sheet of paper originally, but then moved to <a href="https://drawsql.app/teams/professional-fun-haver/diagrams/language-app/embed">drawing the schema on drawSQL</a> (link should lead to the relevant diagram, but just as a failsafe see below)

![database schema showing 5 tables](client/public/schema.png)

Once I felt like I had reached a solid foundation and that my logic was correct, I asked for feedback from Tim and talked through my aims and what I was attempting to achieve. Tim advised removing a few foreign keys (for example, I originally had a foreign key for posts within profile, which was unncessary) but otherwise gave it the go-ahead, and I moved to visually designing the app in Figma.

From a mobile-first POV I designed a rough wireframe, keeping in mind the components that would create each aspect of the site, and mocked up a screen for each step of the user journey.

![language-learning app wireframe showing 3 screen layouts](client/public/wireframe.png)

I chose a <a href="https://coolors.co/palette/3c1642-086375-1dd3b0-affc41-b2ff9e">colour palette</a> and fonts in order to fit the theme (yes, green) and replicate a similar feeling to the <a href="https://minorfigures.com">Minor Figures</a> website, which I kind of pin-point as some sort of middle ground between the current design trends of <a href="https://cari.institute/aesthetics/acidgrafix">Acidgrafix</a> and <a href="https://cari.institute/aesthetics/paperback-chic">Paperback Chic</a>. (I'm certain there must be a better description of the design, as it is reminiscent of current graphic poster-design trends).

## Building

I aimed to have a working skeleton that would communicate correctly with my database. To do this, I first had to seed data into the tables - particularly the tables that can not be edited by users (for example, the Irish wordbank). I did this via SQL, which was no trouble although time-consuming.

Then it was the process of setting up the get and post routes. It's strange how this felt like acient history by this point in the course after just a week of not setting them up, but it's like riding a bike (<- this is a scary analogy to use for a person who in fact did not get their last full-stack app working to the level they wanted). The sheer amount of get routes I set up felt almost comical, which may either be a problem with my understanding of routes, my database design, or maybe just the fact that I was setting all this up for a weekend assignment (I'm dedicated 🙂‍↕️).

The testing of all routes meant that I had to build a bare-bones but functional form component first (the other components all just had their name as placeholder text so that I could tell if everything was rendering correctly) and I hoped that this would be the end of the server and that I could start working on the client. After working on it for a while, I debugged with Manny and in discussing the logic of submitting data to 2 different tables in the same form (requiring 2 inserts in the server routes), I thought about other ways of doing this: rendering a new form "on submit" which would be the form that submits data to the second table and, since there was no user validation anyway, removing the 2nd table and submitted all the data to one table. Fortunatley for my app and possibly unfortunatley for my learning journey, I chose to condense the tables into one.

After this was done and I was sure everything was working as expected I created a branch and then started work on my client. This would include rendering components, styling and (I'm sure) troubleshooting component by component, focusing first on the components needed in order to create an MVP. While buildling I realised that changes would have to be made to my database, so I added a table that would link words by topic, so that selecting a topic could display relevant words.

Although I got SQL queries working to show only the relevant information, unfortunatley time constraints meant I was not able to complete the app to the level I imagined/had planned. The skeleton exists though, and what I managed to get done, I am proud of.

## Resources

⭐️ <a href="https://fonts.google.com/share?selection.family=Source+Code+Pro:ital,wght@0,200..900;1,200..900">Source Code Pro</a>

⭐️ <a href="https://fonts.google.com/share?selection.family=Rammetto+One">Rammetto One</a>

⭐️ <a href="https://www.svgrepo.com/collection/animal-outlined-sepia-icons/">Icon Collection</a>

⭐️ <a href="https://www.svgrepo.com/svg/503994/chat-communication-conversation">favicon creation (edited with the in-website tools)</a>

⭐️ <a href="https://www.learn-irish.net/irishvocabulary?topic=pets&level=secondary">Soundbites (accessed via viewing source)</a>

⭐️ <a href="https://cari.institute/aesthetics?asc=true&sort=name">Index of aesthetics</a>
