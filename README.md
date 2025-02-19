# Connect Four

[My Notes](notes.md)

A brief description of the application here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Despair. Sadness. Misery. These are synonyms for the lack of joy you will feel in a world filled with a lack of competitive gaming. How may we fill this void? Connect four! The connect four application will fill the void that the people in your life never could. Complete with score tracking and multiplayer interactions download the connect four application today to find joy and peace in your life!

### Design

![Design image](ConnectFour-1.jpg)

Here is a sequence diagram that shows how to people would interact with the backend to vote.

```mermaid
sequenceDiagram
    actor You
    actor Friend
    actor Website
    You->>Friend: Connect with Friend
    You->>Website: Make move
    Website->>Friend: Updates page with new score
    Friend->>Website: Make move
    Website->>You: Updates page with new score
```

### Key features

- Secure login over HTTPS
- Ability to connect with other players for multiplayer play
- Display of current score
- Ability to select which row to place your chip.
- Total scores from all users displayed in realtime
- Results are persistently stored

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login, one for playing, and one for viewing the user scores.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **React** - Provides login, updates board, display other users scores, and use of React for routing and components.
- **Service** - Backend service with endpoints for:
    - login
    - updating board
    - retrieving user scores
- **DB/Login** - Store users, scores, and active games in database. Register and login users. Credentials securely stored in database. Can't play unless authenticated.
- **WebSocket** - As each user makes column selection, the board is updated and broadcast to the other user.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://engagefour.click/).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Four HTML pages which represent the ability to login, vote, learn, and view user scores.
- [x] **Proper HTML element usage** - HTML elements have been implemented on each page.
- [x] **Links** - There are links to get to every page from each page.
- [x] **Text** - There is text on the about page describing connect four, its associated copyright, and a quote from Mater Yoda.
- [x] **3rd party API placeholder** - A connect four table placeholder and buttons are found on the play/Connect Four page.
- [x] **Images** - A placeholder image has been placed on the about page.
- [x] **Login placeholder** - There are placeholders on the main page when the website is first loaded.
- [x] **DB data placeholder** - The player scores from the scores page represent data pulled from the database.
- [x] **WebSocket placeholder** - The count of games won represent the tally of realtime wins.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** 
- [x] **Navigation elements** - I dropped the underlines and changed the color for anchor elements. Added buttons to select
which column to place game piece.
- [x] **Responsive to window resizing** - Edited @media elements so header and footer will disapear at different window sizes.
Connect four grid will adjust which side its size is in relation to depending on landscape or portrait orientation.
- [x] **Application elements** - Used good contrast and whitespace
- [x] **Application text content** - Consistent fonts
- [x] **Application images** - I added a very nice picture with an adaptive size and border the about section.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
