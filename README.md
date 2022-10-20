FriendZone



National University of Singapore
CP2106 (Orbital)
Ma Yuchen
Chua Meng Yong Elton




Proposed Level of Achievement: Apollo 11
Year : 2022












1.0 Introduction	3
1.1 Motivation	3
1.2 Aim	3
1.3 Solution	3
1.4 How Are We Different From Existing Platforms?	4
1.4.1 Piazza	4
1.4.2 Facebook	4
2.0 Core Features	4
2.1 User Stories	4
2.2 Proposed Features	5
2.2.1 Login page	5
2.2.2 Profile Page	5
2.2.3 Home Page	6
2.2.4 Discussion Page	6
2.2.5 Additional features	6
3.0 Development Plan	7
3.2 Detailed Development Plan	7
4.0 Technical Aspect	14
4.1 Tech Stack	14
4.2 Program Flow	16
4.3 Testing	29
4.4 Software Engineering Practices	33
4.4.1 Version Control with Git	33
4.4.2 Project management with Monday.com	34
5.0 Demonstration	35
5.1 Project Poster	35
5.2 Project Video	36
5.3 Code Base	36
5.4 Deployment	36
6.0 Project Log	36











1.0 Introduction
1.1 Motivation

Reports have found that COVID-19 and lockdowns that ensued have resulted in young people becoming more reclusive, shifting most of their presence into the online realm (Curtis, Isolated students may struggle to stay mentally healthy 2020). As such, the past couple of years have made it difficult for students in universities to make meaningful friendships and interact face-to-face with others. Without peers to discuss academic material with, one might feel isolated, or avoid taking certain modules altogether despite having an interest in them. This is especially so for students not staying on campus, as the minimisation of physical learning inevitably makes the university grounds a foreign environment for them. As such, we hope that our application that matches students with others with similar interests and modules is able to bridge these current gaps by making learning more personal, interactive, and fun.

Despite having Telegram groups made for specific modules, one of the main reasons that deter students from asking questions in the groups is due to the lack of anonymity. Some students are awkward and might feel shy when asking questions in a group that might have hundreds of students.

1.2 Aim

FriendZone is a study-centric social media app that aims to achieve two things: To help one study better, and to make friends along the way. Those who only want academic help can ask questions in anonymity, whereas those who want to make new friends can match with students with similar courses and interests

1.3 Solution

A social media web application that allows students to match up with their peers who have similar interests or schedules.

1.4 How Are We Different From Existing Platforms?
1.4.1 Piazza
Piazza is a free online gathering place where students can ask, answer, and explore 24/7, under the guidance of their instructors. However, FriendZone is a platform for students to ask questions and also to make friends with people of similar interests/schedules.

1.4.2 Facebook
Facebook is a free online social media and social networking application. People are able to send friend requests to others and share pictures or posts on their wall. FriendZone however allows anonymous posting which will hide the Original Poster’s identity which might be more comfortable for students when asking questions.





2.0 Core Features
2.1 User Stories

Roles
Stories
Student



I am looking for a study partner and I would like to be able to match up with someone from the same course.
I want to be able to articulate my thoughts and discuss the content with someone else when I am studying for my examinations.
I wish to have a forum where I can answer questions asked by other students so that I can help them understand the course material better and to also develop a deeper understanding about the material.
I want to be able to make new friends through bonding activities.
Administrator 
I want to prevent the abuse of the system so that all chats and forum discussions are informational and civil. 
I want to be able to ban users who are abusing the system.











2.2 Proposed Features
2.2.1 Login page
 Username and password authentication with Firebase
 Creating an account saves the user's name into the database
 Error messages with account creation are displayed at the bottom of the form
 Responsive Page that scales with screen size!
 User cannot access other pages within the webapp if not signed in
 Create form after signup where new users can input the modules they are taking
 Forgot password and retrieve password
 Email authentication (send authentication email to your account)

2.2.2 Profile Page
Module card
Profile card
Make profile card show your name, posts, comments, and karma
Make Module card show your modules
Have a posts and comments route in Profile such that you can see your own posts and comments
Function to edit your name and profile picture

2.2.3 Home Page 
Discussions section (Left section) 
Google Calendar (Right section)
Welcome Back banner (Top Left section)


2.2.4 Discussion Page
Sort posts based on latest or popular posts 
Filter posts based on the modules
Create new posts
Individual post page
Comment on posts
Like posts

2.2.5 Additional features
Matching system to match a user to another based on common modules or common interest.
Find other user’s profile
Invite other users to a meetup
Send friend requests to other users
View your friend list 



 	
3.0 Development Plan


3.2 Detailed Development Plan

Milestone
Tasks
Subtasks
Description
Complete?


Firebase setup
Setup firebase authentication
To enable the creation of user accounts.
Create account by email and password 
Enable email authentication

Enable login via google
Provide reset password functionality


Setup firebase hosting
To host our website on a public domain for testing purposes
Hosted our website by milestone 2


Setup firestore database
Store user information, posts, comments in a database
Firestore now contains data for our website


Setup firebase storage
Store files that users upload, mainly pictures
Store and display user profile pictures
Allow user to upload files to discussion posts as reference


Login page
UI-UX
Make sure that our login page is responsive

Make sure that our color scheme matches
Responsive
Color scheme


Create new user account
New users can sign up via email and password, as well as via gmail
There should be a built-in functionality that checks if the email used is valid
Email Signup
Gmail
Email valid?


Sign-in
Users with accounts can sign in
Sign in functionality


Forgot password
Users who forgot their password will be redirected to a page and prompted to enter their email, whereby a link to reset their password will be sent to their email. They can now reset their password by clicking on the link
Reset password functionality


Create user page
Additional page to prompt users to fill in their details
Details that users will need to fill in:
- name
- year
- course of study
- modules taken
- tele handle
- birthday
Implemented


Topbar
UI-UX
Create a topbar that is shown throughout our app
Includes: 
Toggleable navigation button
Logo
Friend requests button
Messages button
Notifications button
Navigation button
Logo
Friend requests button
Messages
Notifications
Make it responsive


Friend requests button
Has a label at the top that shows how many friend requests you have received.

Upon clicking, opens a Modal that displays friend requests banners:
Includes profile picture
Name of user
Clicking on picture brings you to the user's profile page
Accept friend request button
Reject friend request button
Modal containing friend request banners
Accept friend request button
Decline friend request button


Messages button
Has a label at the top that shows how many new messages you have received.

Upon clicking, activates a dropdown with a link that redirects you to the "messages" page
Implemented


Notifications 
Has a label at the top that shows you how many users have replied to your post

Upon clicking, activates a modal displays notification banners
Clicking on each banner will redirect you to your post page.
Implemented


Floating navigation button
UI-UX
Make the navigation bar and its contents match the theme of webpage
*UPDATE*
Button is no longer floating, instead implemented into the topbar
Floating on top of every page
Make it look nice
Implemented into the topbar


Functionality
Implement a button that when clicked, opens a side menu on the left whereby the user will be able to navigate between the pages of the app
Works


Home page
Discussions section (left side)
Implement a snapshot of the discussions page, showing the newest discussions with most views. Clicking on each item will bring the user to the post page.
Implemented


Google calendar (right side)
Implement a calendar widget that shows the user's google calendar
Implemented


Welcome back banner (Top left)
A warm message to welcome the user back according to their username
Implemented


Profile page
UI-UX
Split the profile page into 3 sections with respective cards, and make the cards align properly
Implemented


Profile card (right of page)
A profile card that includes:
Profile image,
Username,
Telegram handle,
Post count,
Comment count,
"Karma"
Other features implemented
Karma counter


Modules card (left of page)
A modules card that displays the modules that the user are currently taking
Implemented


Tab to change information displayed in profile (top of page)
Changes between the showing user details (the two cards above), the user's post history, and the user's comment history
Implemented


User post history
Shows all the posts that the user has written in the discussions section
implemented


User comment history
Shows all the comments that the user has made on the posts of other users.
implemented


Edit profile page


Allows the user to edit their 
- profile picture
- name
- course of study
- year of study
- modules taken
- email address
- telegram handle
- birthday
profile picture
name
course of study
year
modules taken
email
tele handle
birthday


NUS Mods search bar
Search bar containing data of all nus mods
When prompted to enter modules (for edit profile page and discussions page), the user will need to key in the module code in the search bar. As the user keys in, a dropdown menu will be activated whereby the user can select the module
Implemented


Discussions page
Navbar
Navigation bar that displays different sections of the discussions page
Currently, two sections are available: List all posts, Search post by mod
List all posts
Search post by mod


Show posts
Fetch posts from the database (either all posts or conditionally by mod), sorted by their timestamp, and display the posts on screen. Only a brief description of the post will be showed here, not the main body
Each post should show:
Title
Profile picture of poster
Username of poster
Date and time posted
Module that post is related to
Brief description of post
Comment count
View count
Upvote count


Create new post
Clicking the create new post button will activate a modal that prompts the user to write the post.
Submitting the form without filling in all fields will display an error message on the screen

A checkbox is available within the modal, upon clicking on it you will be able to post an anonymous post, hiding your username and profile picture.
Implemented
Allow user to change fonts, add style to the body of the post
Create anonymous post


Individual post page
Clicking on a post will bring the user to a page where they'll be able to see the full contents of the post, as well as its comments.

Users will also see a delete button to the top right of the post if it belongs to them. Clicking on it will delete the post.
Show post
Add new comment functionality
Show comments
Delete post functionality


Comments


Comments contain:
Profile picture of commenter
username of commenter
date and time of comment
Contents of comment
Upvote functionality
Views












People page
Find profiles of other users
Search for people section:
Enter the user's email or username into the search bar to find their profile. Click on it to access their profile page
Implemented


Create meetups






View available meetups






Invite other users to meetup






Send friend request to another user






View your friends






Messages page
UI-UX
Display your list of friends on the left, and the messaging box on the right.

Messaging box contains:
Name and profile picture of person you are messaging
Conversation history (scrolled to the bottom for most recent conversations)
Box where you can write your message, as well as a send button.
Implemented


Left navigation box
Navigate through your list of friends on the left to choose who you want to message

Has a green alert box at the top of each friend banner displaying the number of unread messages you have with that friend.
Implemented


Message display box
Displays all the messages that you have with the selected user in real time, sorted chronologically.

Text input box at the bottom where you can send a message to the user.
Real time messages display
Send message functionality


Include images in message
Implement an upload button to the left of the message box that when clicked, allows the user to upload an image that is stored into the firebase file hosting database. The image is then accessed together with the message.

Clicking on the image within the message will enlarge it, allowing the user to see it clearer.
Upload picture functionality
Enlarge picture functionality








































4.0 Technical Aspect
4.1 Tech Stack

NodeJS
We use NodeJS to handle the installation of packages as well as local testing
ReactJS
We use the functional component programming style of React to render the elements on each page. React is also used to implement the logic within the website, such as button functionality and interactions with our database.

React Router is also used to navigate between pages. Dynamic routing is used for certain components.
Bootstrap
Bootstrap was chosen as a front end library due to its ease of use and sleek design.
Axios
Axios is used to fetch data online and handle the data received.
Firebase
Firebase is used to handle the back-end aspects of the project.

- Firebase authentication is used to create and authenticate users by email and google services - Firestore stores user data, posts, comments, and meetings.
- Cloud messaging services are used to allow users to send messages to other users
- Firebase storage is used to allow users to upload custom files, and also allows users to set a custom profile picture.
- Firebase Hosting is used to host prototypes of our website
Jest
Jest is used to write and implement systematic test cases for our project
Git/Github
Our project is uploaded onto GitHub and all changes will be reflected in the Github repository. Git is used as a version control tool for our project as it allows us to push and pull new content for our project as we work on it.
Figma
Used for preliminary wireframing purposes.


4.2 Program Flow




Fig 1. Login page. Users can either log in or click the sign up button to create a new account. Users can also click on the Forget password link to retrieve their password. 



Fig 2. Sign up page. This is the page that users would see when they click sign up. Clicking on the Sign in  button will bring the user back to the login interface.






Fig 3. Topbar. The topbar comprises of a side navigation bar button on the left, and three buttons on the right, the friend requests button, messages button, notifications button.


Fig 4. Side navigation bar. The sidebar is where the user can navigate across pages within the website, it contains buttons that brings the user to various pages when clicked. It also contains a logout button that logs the user out of the app and redirects them to the home page.




Fig 5. Topbar buttons. The Friend request button will activate a modal, where you can see who has requested to be your friend. From there, you can either accept or decline their request. 

The Messages button will activate a dropdown menu where you can click a link to be redirected to the "messages" page.

The Notifications button will activate a modal, where you can see who has commented on your posts. You can click on each notification to be redirected to the post page.

Fig 5.1 If you have no new friend requests or no new notifications, these dropdown will be displayed instead

Fig 6. Homepage. This is the page where users would see after logging in. There is a calendar on the right side of the screen where users can view their schedules and on the left hand side of the screen is where they can view the latest posts.




Fig 7. Profile Page/My profile. This is the page where users would be able to look at their profile. On the left they can view their modules and on the right they can take a look at their profile card. This is also where they can view their posts, comments and also edit their profile.




Fig 7.1 Profile Page/My Posts 
The second tab of the profile page shows all the posts that the user has written, sorted by chronological order. Clicking on the title of the post redirects you to the post page.



Fig 8. Profile edit page. This is where users would be able to edit their information. Users can upload a new photo to be their profile photo via firebase storage. The module taken field makes use of NUSMods API to allow users to accurately key in their modules.


Fig 8.1 Module search bar
User can enter key words in the search bar to search for their module. The dropdown menu will only open after 4 or more characters has been keyed in.



Fig 9. Discussions page. Users would be able to make a new post by clicking on the + NEW DISCUSSION button, or view posts here. Posts can also be viewed based on modules, by clicking on the Search by mods button on the left. 


Fig 9.1 Create new discussion
Create a new post in just a few clicks! The new post will be displayed on the "All Posts" page immediately. Only the brief description will be shown in the "All posts" page, the main body of the discussion will be shown in the individual post page. (See Fig 10)
Users can also create an anonymous post by checking the Stay anonymous checkbox.

Fig 9.1.5 *Update*
Posts now show their view count, comment count as well as like count.
There is also a button to the right of every post that when clicked, allows a user to like the post.


Fig 9.2 Search posts by mods
Users can filter the posts by the mods which they are looking for by accessing Search by Mods on the side navigation. The module search bar is referenced in detail in Fig 8.1



Fig 10 Individual post page
The individual post page contains the main body of the post. Users can respond to these posts by adding comments. 
Users can also delete their own posts/comments by clicking on the delete button to the top right of the post.

Fig 10.0.5 *Update*
Comments can now be liked. There is a number at the bottom of every comment which shows how many likes it has received.


Fig 10.1 Add comment 
Users can comment on posts. They can tick the checkbox to hide their name and profile picture on the comment.


Fig 11. People page. Users would be able to look up other users and view their profile. Clicking on the other user will redirect the user to their profile.


Fig 11.1 Profile page of another user
The profile page of the other user will be similar to that of yours, where you will be able to see their posts, as well as their modules. There is an Add friend button under their profile card, where you will be able to send the other user a friend request.






Fig 12. Messages page. Users would be able to send messages to other users.
Users can select who they want to message via a list of friends on the left. When clicked, they will be able to send and receive messages from the other user. Users can also send image attachments together with their text message.


Fig 12.1 Picture zoomed in
When clicked, the picture be centralised on the screen, where the user will be able to zoom in and inspect the picture more clearly.







4.3 Testing


Feature
Items to test
Test
Expected Result
Actual Result
Authentication
Registering
Registering with a password that is too short
Displays “Weak Password. Password has to have at least 6 characters”
Same as expected
Registering with passwords that are not the same
Displays “Passwords do not match”
Same as expected
Registering with an email that is already in use
Displays “Email already exists. Please login with the email.”
Same as expected
Registering with empty fields
Displays “Please fill up all empty fields.”
Same as expected
Registering with all valid inputs
Successfully logs in and is brought to the Homepage
Same as expected
Logging in
Logging in with an unregistered email.
Displays “Email not registered!”
Same as expected
Logging in with a wrong password
Displays “Wrong Password!”
Same as expected
Auth State
Protected route of the website
Users who are not logged in cannot access any of the pages except for the login page.
Same as expected
Logging Out
Remove user from the context
No user state stored 
Same as expected
 Navigation Bar
Highlighting
Moving the cursor around in the Navigation Bar
Current directory would be highlighted and target directory’s words would be highlighted
Same as expected
Closing the Navbar
Pressing the ‘X’ button or the area outside the Navbar
The Navigation Bar would be closed
Same as expected
Logging Out
Clicking on the ‘Logout’ button
The user would be logged out
Same as expected
Profile Page
Editing the profile
Clicking on the edit profile
Brings the user to the profile edit page
Same as expected
Changing the details and saving the changes
The changes should be changed and be reflected correctly
Same as expected
Choosing a file and uploading the new profile picture
The new profile picture should be uploaded and be reflected correctly
Same as expected
Searching for modules in the Modules taken field
Suggestions should appear in the dropdown bar after 4 characters are entered in.
Same as expected
Deletion of modules
Pressing the cross button on beside the modules selected should remove it from selection
Same as expected
Discarding the changes
Pressing the Discard changes button should discard all changes and restore the user profile to the previous state
Same as expected
Top Navigation Bar
Viewing ‘My posts’
Shows the posts that were made by the user
Same as expected
Viewing 'My comments'
Shows the comments that were made by the user
To be implemented
Discussion Page
Sorting
Sorting the posts by ‘Latest’
Sorts the posts by the time in which they were posted.
Same as expected
Sorting the posts by ‘Popular’, ‘Solved’, ‘Unsolved’, ‘No replies yet’
Sorts the posts by the respective keywords
To be implemented
Searching for posts
Searching for posts with specific keywords in the search bar
Shows the posts with the specific keywords
Partly implemented, only works with the Search by Mods function. Posts with said module would be shown.
Discussions
Posting a new discussion publicly
Shows the post on the page with the creator of the post
Same as expected
Posting a new discussion anonymously
Shows the post on the wall but hides the name of the creator
Same as expected
Commenting on a post
Shows the comment when clicked into the post
Same as expected
Viewing likes and comments
Shows the number of views and likes on the post or comment
Same as expected
People Page
Finding users
Inputting users’ names or email address into the search bar
The user profile with the matched name or email address should appear in the drop bar
Same as expected
Finding groups
Inputting group names into the search bar
The group with the matched name should appear in the drop bar
To be implemented
Messages Page
Starting conversations
Starting a conversation with friends
A conversation should be started or resumed
Same as expected



4.4 Software Engineering Practices
4.4.1 Version Control with Git



Using Github as the main codebase to control the version we are using, both of us would work on different tasks and have different branches. This allows us to make sure that our code would not interfere with each other’s progress when we push it to the master branch. We also inform each other about the changes that were made.

4.4.2 Project management with Monday.com


We have used Monday.com to create a task management system to allocate and keep track of all the tasks that are to be completed. We would have weekly meetings where we review the status of our project and allocate tasks to each member. From there, each member will work on their respective tasks and change the statuses of the tasks from "Not started", to "In Progress" and "Completed" accordingly. After each task is completed, the other member will review the functionality by accessing the specific branch on Github. If there are functionality issues found with the task, the member would list out the issues as sub-tasks under the task on Monday.com, and notify his partner. 
















5.0 Demonstration 
5.1 Project Poster






5.2 Project Video
https://drive.google.com/file/d/12wQdUqTDM3D4F50Eavaa4_E8lwHX_aFI/view?usp=sharing
5.3 Code Base
https://github.com/notle1706/FriendZone

*UPDATE* As of 28/7/22, we have had some problems with the deployement of the code.
However, we have recreated the project and reinstalled all the dependencies one by one. The deployment WORKS now.
Further updates to the project will be done in a separate github repository:
https://github.com/dawg420/friendzone-deploy

5.4 Deployment
https://friendzone-a76f3.firebaseapp.com/

Feel free to create your own account or use the test account

Test account:
Email: bean@bean.bean
Password: beanbean

6.0 Project Log
Project log
