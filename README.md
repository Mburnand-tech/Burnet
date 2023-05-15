# [Website](https://burnet-news.netlify.app/)
# :question: Purpose

- This is my personal front-end project created as part of a one-week solo sprint while I was a student at Northcoders. 
- Coupled with my [backend Project](https://github.com/Mburnand-tech/News_Server) the intention is to remonstrate I am capable of developing, usable and efficient full stack applications in JavaScript. 

# :microphone: Descripion
  
- It is a Reddit-inspired topical discussion site with a scrollable and responsive display that allows users to like articles and comments and post comments on articles. 
- The front end is built using React, with Axios for making API requests and MUI for styled components. 
  
- Additional features include a filter bar, account logging in, colour theme switch, scroll to top button and delete comments functionality.

You can try out a live version of the app here:
### [Website](https://burnet-news.netlify.app/)

PICTURES
  
**Log In with any of these Usernames:**
- tickle122
- grumpy19
- happyamy2016
- cooljmessy
- weegembump
- jessjelly

# :computer: Installation
  
To install the app locally, follow these steps:

- Clone the repository: `git clone https://github.com/Mburnand-tech/NC_News.git`
- Install dependencies: `npm install`
- Start the app: `npm start`
- The app should be running on http://localhost:3000

# :video_game: Usage
  
The app has the following main pages:

- **/**  Home page showing the abundances of different articles to entice user. Ordered by date posted similiar to a topical social media. 
- **Category/:topic** (Technology, LifeStyle, Sports) Displays articles categorised by subject. Within here you can filter results based off user preference. 
- **/about** Gives a description of the project.
- **articles/:article_id** Displays the details of specified article, including its comments and an option to like the article and its comments. If a user is logged in, theres an input method to leave comments and delete previous comments. 
  
# :electric_plug: Dependencies
  
This project requires the following dependencies:

- axios: for making API requests
- moment: for time data conversion
- animate.css: for 'About' page animations
- prop-types: for defining prop types
- MUI: for styling the UI
- react: for building the UI
- react-dom: for rendering the UI
- react-router-dom: for client-side routing
- react-scroll-to-top: for return to the top of page button

- These dependencies are included in the package.json file and will be installed automatically with npm install.

# :earth_africa: Contributing
  
If you would like to contribute to this project, please follow these steps:

- Fork the repository
- Create a new branch: `git checkout -b your-branch-name`
- Make your changes and commit them: `git commit -m "your commit message"`
- Push to the branch: `git push origin your-branch-name`
- Create a pull request

notes

- home page is ordered by date posted

- dates are sensitive to the minute. 

- can delete comment if logged in as the same user

- list all possible users to log in as 




