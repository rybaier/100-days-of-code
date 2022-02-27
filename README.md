# 100 days of code Log
This is my log after comiting to 100 days of code. I am 1 month from finishing my SoftwareEngineering Bootcamp course and am ecstatic to see what I will have completed at the end of this 100 days though I know some days are going to be frustrating! The goal is continue learning and continue growing my knowledge and skills in development

## Day 1 February 17 2021
Worked on quiz answer randomization and answer functionality after some research found a very helpful code example on stack overflow that described the Shwartzian transform in js

- https://github.com/rybaier/React-API

## Day 2 2/18
- Worked on Codewars challenges for both javascript and python
 - thoughts: while the syntax is similiar I am finding it difficult to switch back and forth for each challenge

 ## Day 3 2/19
 - worked on a camelcase codewars challenge for JS 
 - thoughts - it took me a lot longer to figure out than i would have like but I managed it with a combination of regex and array methods. it is aturday however and my mind wasn't completely focused
 the code is in my jsplayground directory in this repo 
 - https://github.com/rybaier/100-days-of-code/blob/master/js%20playground/index.js

## Day 4 2/20
- wordked on codewars challenge for Python for a while then to make myself feel better I started working on a backend for my LOTR-toilet-time project
- thoughts: the kata I worked on has thrown me for a loop I am finding it hard to switch to python as I do not know any of the syntax and the regex kata is difficult currently. I will overcome it but damn is it frustrating. After solving the Kata on codewars I moved on to making a backend for a previous react api project i made earlier in the course. The kata code is in the python_playground.py in this repo
    - I gave my self timer wanted to see how far I could get in 30 min. I will continue to use a 30 min timer to manage building the backend for my LOTR-toilet-time project
    -  https://github.com/rybaier/lotr-TT-BackEnd

## Day 5 2/21
- went back and worked on an assigment from my General Assembly SEI course. It was to create a state capital guessing game in python. 
- Thoughts: After returning to the assignment after a couple days I was able to figure out the loop to make the user decide when the game was over. It took me some trial and error but after I started using a while loop with a flag boolean variable it became much easier to get the game to repeat itself. I did  run into a never ending loop for a bit because my input was not being recognized the fix required a spacing elimination in my multiple conditional statement 
    - code is in todays commit shown here https://github.com/rybaier/100-days-of-code/commit/d910347c751b0ad779de529a4cee9884fbac71cf
  
  ## Day 6 2/22/22 (TwosDay!)
- worked on python for a while and then went back to fiddle with some css bugs I found in the mobile version of my last project for General Assembly. 
- the python work was based on classes and making sub classes I only ran into a one blocker towards the end when trying to print a list of objects i keep gettingthe same error. so I switched to working on CSS for a previous project to make the mobile version appearence a little more user friendly after finding a couple of styling bugs. Then after a bit I went back and quickly solved my blocker and got the code printing what I wanted 
    - https://travel-watcher.herokuapp.com/ 
    - codebar python commit link https://github.com/rybaier/100-days-of-code/commit/15def44cd147212876aee313f8e563076c4deab5

## Day 7 2/23
- worked on django install and python classes and django specific syntax. after lesson on building a basic django backend started work on a seperate django backend for a basic book api. Additionally I started looking at React Native, as I think I am going to use it for my capstone project

- django is super nice compared to mongodb from the shell experience to the GUI it seems so much more streamlined. I am really enjoying python and django both, after some initial struggles I am finding the concepts easy to grasp and debugging errors I run into hasn't been taking me very long to get through
  - link to the commit for this evenings work not sure if it'll will be accessible to anyone but those in class with me. https://git.generalassemb.ly/ryanbaier/django-api-lab/commit/a7d31daaf859582b883ab3e6dca1dc0553f90d5c

## Day 8 2/24
- worked on django views/ templates/ and classbased views with serilizers
- thoughts: it is super nice to be able to manipulate the front end with the backend. I also find it to be incredibly organized. I'm really starting to get a hang of django. There is a ton of new syntax, I think I am absorbing it fairly well. Overall looking forward to working with it more on larger scale projects. I'm going to work on user authentication with django next and maybe return to my lotr-tt backend project for a bit tomorrow.
  - link to the commit for this evenings work https://git.generalassemb.ly/seir-1213/scribble/pull/1/commits/2deaba335cbb3404a6cce34a08caf83400f4e22c
  - link to lotr-tt backend project work, https://github.com/rybaier/lotr-TT-BackEnd/commit/5341a57a7ca3b76af79f3839aa2bcf15a81528b3

## Day 9 2/25
- worked on the express backend of my lotr-tt app made the controllers and started on the seed files. I also started taking a look at React Native in anticipation of my capstone project for my Software Engineering Course. 
: thoughts - expres and mongoose are fairly simple and barebones as a backend but it gets the job done for this particular use case compared to django though it is fairly limited as to what it can do.
  - link to commit for backend https://github.com/rybaier/lotr-TT-BackEnd/commit/d5a8058c8faa9fd2aa05e2161a653eb773902d20

## day 10 2/26
- worked on express backend for lotr-tt i made the seed files and am working on building a getapidata file that writes to my individual seed files. 
thoughts: I am moving along steadily in the process of building the backend for my app. I just ran into a blocker where I am not getting the data set to the variable i want to. I am calling the file with node and once i can log that the data is set to to my desired variable I can proceed to writing the code that writes to the seeds.json  files
  - link to work https://github.com/rybaier/lotr-TT-BackEnd/blob/main/db/getAPIData.js

## day 11 2/27
- worked on and finished building express backend for lotr-tt and the database is seeded. next step is to deploy it for use with front end
- thoughts: happy to have the backend ready to deploy so the quiz portion of the app can operate with request limit restrictions from the original api. Once it's deployed I just have to connect the front end and I will set down the lotr-tt project to focus on more exciting and upcoming prices 
  - link to work https://github.com/rybaier/lotr-TT-BackEnd/commit/671a042c4336b11d2cd97bdf4f2af3786e4b0cf5