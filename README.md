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

2 - One+ motorcycle per user. (Table 2)

3 - One motorcycle has maintenance notes. (Table 3)

4 - Built in React, styled with CSS.

5 - Rails backend.

**The Garage MVP** 

The MVP goals are to have a user concept, one motorcycle per user and one motorcycle has many maintenance notes. This will require a minimum of five pages built initally: a login page, registration page, homepage that includes the user and their motorcycle, a page to add a motorcycle, and a page for the motorcycle's maintenence notes. This will meet the requirement of a rails backend with three tables as well as a React front end.

<br>

### Goals

- Create a user concept with auth.
- Each user can have one or more motorcycles.
- The motorcycles each have a page that displays notes taken for that motorcycle.

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Use the React framework to design the front end of the app. |
|   React Router   | Use React router to make links and Routes throughout the app. |
|     Ruby      | Use the Ruby language to build the backend via Rails |
|  Ruby on Rails  | Use the Rails framework to create the back end and the three tables. |

<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/iHCOw9l8Z2Po8goXsGKw2P/Untitled?node-id=0%3A1

![Image of Homepage](https://github.com/DeanLeong/the_garage/blob/main/wireframes/p4home.png)

- Desktop Homepage

![Image of MC Page](https://github.com/DeanLeong/the_garage/blob/main/wireframes/p4mcpage.png)

- Desktop MC Page

![Image of add MC Page](https://github.com/DeanLeong/the_garage/blob/main/wireframes/p4addmcpage.png)

- Add MC Page

![Image of Login Page](https://github.com/DeanLeong/the_garage/blob/main/wireframes/updatedlogin.png)

- Login Page

![Image of Register Page](https://github.com/DeanLeong/the_garage/blob/main/wireframes/p4register.png)

- Register Page

#### Component Tree

https://whimsical.com/p4-XENZGCryWN8Z14XcTNLfvY

![Image of Component Tree](https://github.com/DeanLeong/the_garage/blob/main/wireframes/Screen%20Shot%202020-11-29%20at%209.13.27%20AM.png)

#### Component Hierarchy


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
        |__ LoginPage/
          |__ LoginPage.jsx
          |__ LoginPage.css
        |__ RegisterPage/
          |__ RegisterPage.jsx
          |__ RegisterPage.css
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
| Add Motorcycle Page |    H     |     5 hrs      |     0 hrs     |     TBD     |
| General CSS |    H     |     10 hrs      |     0 hrs     |     TBD     |
| Quality Testing and Bug Fixing |    H     |     10 hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |     0 hrs      |     0 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.
https://app.diagrams.net/?libs=general;uml#G1srwXfq0TkSBgOqrirRop1_9kiKZA5Zm9

![Image of ERD](https://github.com/DeanLeong/the_garage/blob/main/wireframes/Screen%20Shot%202020-11-28%20at%201.16.31%20PM.png)

<br>

***

## Post-MVP

1 - Add "Motorcycle Parts" to the motorcycle's page. Can add images of desired parts etc.

2 - A history page to see notes after they are deleted.

3 - 

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
