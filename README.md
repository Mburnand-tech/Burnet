# NC_News (Burnnet)
<div align="center"><a href='http://ec2-18-130-187-9.eu-west-2.compute.amazonaws.com/)/'> :point_right: :point_right: AWS HOSTED WEBSITE :point_left: :point_left: <a></div>
<div align="center">(AWS hosted website, might be turned off)</div>


<div align="center"><a href='https://burnet-news.netlify.app/'> :point_right: :point_right: NETLIFY HOSTED WEBSITE :point_left: :point_left: <a></div>
<div align="center">(API takes 60 seconds to spin up on first request as it's a free hosting service)</div>
  
## :question: Purpose

- This is my personal Front-End project created as part of a one-week solo sprint while I was a student at Northcoders.
- Coupled with my [Back-End](https://github.com/Mburnand-tech/News_Server) project the intention is to demonstrate I am capable of developing, usable and efficient full-stack applications in JavaScript. 

## :memo: Description
  
- It is a Reddit-inspired topical discussion site with a scrollable and responsive display that allows users to 'like' articles/comments and 'post' comments on articles. 
- The Front-End is built using React, with Axios for making API requests and MUI for styled-components. 
  
- Additional features include:
  - Filter bar.
  - Account login.
  - Colour theme switch.
  - Scroll-to-top button.
  - Post & delete comment functionality.
  - Time sensitive to minutes ago from the present. 

## :video_game: Usage
  
The app has the following main pages:

- **`/`**  - A home page showing various articles on different subjects. Ordered by date posted, similar to a topical social media site. 
- **`/category/:topic`** (Technology, LifeStyle, Sports) - Displays articles categorised by subject. Here you can filter results based on user preference. 
- **`/about`** - Gives a description of the project.
- **`/articles/:article_id`** - Displays the details of the specified article, including its comments, and an option to 'like' the article and its comments. If a user is logged in, there is an option to post comments and delete previous comments of that user. 

- LogIn with any of these Usernames:
  - *tickle122*
  - *grumpy19*
  - *happyamy2016*
  - *cooljmessy*
  - *weegembump*
  - *jessjelly*

## 📸 Screenshots

<img width="500" height="250" alt="Screenshot (4)" src="https://github.com/Mburnand-tech/NC_News/assets/82216191/b6f9edfc-4025-43d7-9a2c-a86c18910976">

<img width="500" height="250" alt="Screenshot (4)" src="https://github.com/Mburnand-tech/NC_News/assets/82216191/01e00fbf-6331-4620-b84e-52986dd435bd">

<img width="500" height="250" alt="Screenshot (4)" src="https://github.com/Mburnand-tech/NC_News/assets/82216191/2fe60887-6e16-4067-a78d-01d7c3842e2a">

<img width="500" height="250" alt="Screenshot (4)" src="https://github.com/Mburnand-tech/NC_News/assets/82216191/85700fdc-3122-44ff-ba73-7c3032f7e967">

<img width="500" height="250" alt="Screenshot (4)" src="https://github.com/Mburnand-tech/NC_News/assets/82216191/55759a61-4213-4bb7-b142-7264ea32e4f7">

<img width="500" height="250" alt="Screenshot (4)" src="https://github.com/Mburnand-tech/NC_News/assets/82216191/c6eae56d-04be-4688-b1d5-a10f50493250">


## :computer: Installation
  
To install the app locally, follow these steps:

- Clone the repository: 
  ```bash
  git clone https://github.com/Mburnand-tech/NC_News.git
  ```
- Install dependencies: 
  ```bash 
  npm install
  ```
- Start the app: 
  ```bash
  npm start
  ```
- The app should be running on http://localhost:3000
  
## :scroll: Dependencies
  
This project requires the following dependencies:

- Axios: for making API requests
- moment: for time data conversion
- animate.css: for 'About' page animations
- prop-types: for defining prop types
- MUI: for styling the UI
- react: for building the UI
- react-dom: for rendering the UI
- react-router-dom: for client-side routing
- react-scroll-to-top: for return to the top of page button

- These dependencies are included in the package.json file and will be installed automatically with npm install.

## :earth_africa: Contributing
  
If you would like to contribute to this project, please follow these steps:

- Fork the repository
- Create a new branch: 
  ```bash
  git checkout -b your-branch-name
  ```
- Make your changes and commit them: 
  ```bash
  git commit -m "your commit message"
  ```
- Push to the branch: 
  ```bash
  git push origin your-branch-name
  ```
- Create a pull request

<!-- notes

- home page is ordered by date posted

- dates are sensitive to the minute. 

- can delete comment if logged in as the same user

- list all possible users to log in as  -->
                                                                         

<div align="center"><a href='https://burnet-news.netlify.app/'> :point_right: :point_right: HOSTED WEBSITE :point_left: :point_left: <a></div>
  

