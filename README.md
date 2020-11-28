# the_garage
# PROJECT 4 README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**The Garage** 

The Garage is an app that is focused on helping users manage their motorcycle's maintenance. Users will be able to add a motorcycle to their "garage" and add their motorcycle's maintenence schedule to the motorcycle. For example, "At 10k miles an oil chance is needed." These maintenance notes will feature full CRUD.  The motorcycle will also have general notes such as "takes 10w-30 oil" so that the app is capable of being a one-stop app for most things motorcycle maintenence related. Other features will include uploading a picture of the motorcycle.


<br>

## MVP


1 - A users concept. (Table 1)

2 - One motorcycle per user. (Table 2)

3 - One motorcycle has maintenance notes. (Table 3)

4 - Built in React, styled with CSS.

5 - Rails backend.

**The Garage MVP** 

The MVP goals are to have a user concept, one motorcycle per user and one motorcycle has many maintenance notes. This will require a minimum of 4 pages built initally: a login page, registration page, homepage that includes the user and their motorcycle, and a page for the motorcycle's maintenence notes. This will meet the requirement of a rails backend with three tables as well as a React front end.

<br>

### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Use the React framework to design the front end of the app. |
|   React Router   | Use React router to make links and Routes throughout the app. |
|     Ruby      | Use the Ruby language to build the backend via Rails |
|  Ruby on Rails  | Use the Rails framework to create the back end and the three tables. |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

https://www.figma.com/file/iHCOw9l8Z2Po8goXsGKw2P/Untitled?node-id=0%3A1

![Image of Homepage](https://imgur.com/7R9NVF0)

- Desktop Homepage

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

https://whimsical.com/p4-XENZGCryWN8Z14XcTNLfvY

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

client
|__ src/
  |__ assets/
        |__ fonts
        |__ images
  |__ components/
        |__ Shared/
           |__ Header/
             |__ Header.jsx
             |__ Header.css
           |__ Footer/  
             |__ Footer.jsx
             |__ Footer.css
           |__ Layout
             |__ Layout.jsx
             |__ Footer.css
           |__ Buttons/
             |__ Buttons.jsx
             |__ Buttons.css
           |__ McImageContainer/
             |__ McImageContainer.jsx
             |__ McImageContainer.css
      |__ Screens       
        |__ HomePage/
          |__ HomePage.jsx
          |__ HomePage.css
        |__ McPage/
          |__ McPage.jsx
          |__ McPage.css
        |__ AddMcPage/
          |__ AddMcPage.jsx
          |__ AddMcPage.css
      |__ services/
          |__ apiConfig.js
          |__ auth.js
          |__ motorcycles.js
          |__ maintenanceNotes.js
     |__App.js
     |__App.css
     |__Index.js
     |__Index.css

```

#### Component Tree

https://whimsical.com/p4-XENZGCryWN8Z14XcTNLfvY

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Rails Boilerplate   |    H     |     3 hrs      |     0 hrs     |   TBD    |
| Rails Tables 1-3 |    H     |     6 hrs      |     0 hrs     |     TBD     |
| Users Concept|    H     |     10 hrs      |     0 hrs     |   TBD   |
| React Boilerplate |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Register Page   |    H     |     3 hrs      |     0 hrs     |    TBD   |
| Login Page |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Homepage   |    H     |     5 hrs      |     0 hrs     |   TBD    |
| Motorcycle Page |    H     |     5 hrs      |     0 hrs     |     TBD     |
| General CSS |    H     |     10 hrs      |     0 hrs     |     TBD     |
| Quality Testing and Bug Fixing |    H     |     10 hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.
https://app.diagrams.net/?libs=general;uml#G1srwXfq0TkSBgOqrirRop1_9kiKZA5Zm9

<br>

***

## Post-MVP

1 - Users can have multiple motorcycles.

2 - Add "Motorcycle Parts" to the motorcycle's page. Can add images of desired parts etc.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
