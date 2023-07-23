# Welcome to Mugs And Pillows Mania


[Live site here](https://mugs-and-pillows-mania-4ab38e9b53bf.herokuapp.com/)


# Description 

* Welcome to my Code Institute Milestone 4 project - [Mugs And Pillows Mania](https://mugs-and-pillows-mania-4ab38e9b53bf.herokuapp.com/). This project serves as the culmination of my learning journey with Code Institute's Full Stack Web Development program. The primary objective of this project was to design and develop a dynamic and interactive website that showcases my skills and understanding of various web development technologies.


### Mugs And Pillows Mania is an online store that offers an unique a assortment of mugs and pillows for customers seeking unique and nice gifts for their loved ones. 


# Key Features 

- Variety of Products
- Secure Checkout: We prioritize the security of our customers' personal and financial information.
- User Registration and Profile: To enhance the shopping experience, customers can create their personalized accounts on Mugs and Pillows Mania. The registration process is quick and straightforward, allowing users to access their profiles with ease and manage their orders efficiently.
- User-Friendly Navigation: Our website features an intuitive and user-friendly navigation system, making it easy for visitors to browse through an extensive catalog, filter products based on preferences, and quickly find the items they desire.


# Project Goals 

- **Create an Engaging and Intuitive User Interface**: The primary goal is to design a visually appealing and user-friendly interface that captivates visitors and encourages them to explore the product offerings.
- **Offer a Diverse Product Collection**: Curate a diverse and extensive collection of mugs and pillows, catering to various themes and styles.
- **Implement Secure User Registration and Authentication**: Ensure a secure and seamless user registration process with password and user authentication, providing a safe environment for users to create accounts and manage their profiles.
- **Provide a Secure Checkout Process**: Implement a robust and secure checkout system that protects users' financial data, reassuring customers that their transactions are safe and confidential.
- **Responsive and Mobile-Friendly Design**: Ensure that the website is fully responsive and optimized for various devices, providing a seamless shopping experience for users on desktops, tablets, and smartphones.
- **Efficient Order Management**: Implement an order management system to allow customers to track their orders.
- **Performance Optimization**: Optimize the website's performance to ensure fast loading times and smooth navigation, minimizing bounce rates and enhancing user satisfaction.
- **Search and Filter Functionality**: Provide a powerful search and filter feature, enabling users to quickly find specific products based on categories, keywords, or other relevant criteria.
- **Comprehensive Product Descriptions**: Ensure that each product page includes detailed descriptions, specifications, and high-quality images, giving customers a clear understanding of the items they are interested in.


# Technology Stack

* The following Languages were used to build this project:

## Front-end: HTML5 CSS, JAVA-SCRIPT
## Back-end: Python


# Frameworks, Libraries & Programs Used

* [Google Fonts](https://fonts.google.com/)was used to import Lato Text.
* [Git](https://git-scm.com/) was used for version control by using the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub](https://github.com/)was used to store the projects' code, and to handle version control.
* [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)was used to troubleshoot and test features and solve issues with responsiveness and styling.
* [Psycopg2 ](https://www.psycopg.org/docs/) was used to connect Python code with the database.
* [Django](https://www.djangoproject.com/) is the main framework this website was buid.
* [Bootstrap](https://getbootstrap.com/)was used for responsive and pre-designed CSS.
* [ElephantSQL ](https://www.elephantsql.com/) was used to host the database.
* [Heroku](https://heroku.com/)was used to deploy the website.
* [Canva](https://www.canva.com/en_gb/) was used to create the products mockups.
* [Font Awesome](https://fontawesome.com/)was used for the icons.
* [Amazon Web Services](https://aws.amazon.com/)was used to host the images for the Heroku-hosted site.
* [Stripe](https://stripe.com/) was used for payment integration.


## User Stories 

* As a customer, I want to be able to browse a wide variety of mugs and pillows on the website so that I can find the perfect design that suits my preferences and style
* As a first-time visitor, I want a user-friendly and intuitive navigation system that enables me to easily filter products based on categories, prices, and customer ratings, so I can quickly locate the items I'm interested in
* As a mobile user, I want the website to be fully responsive and optimized for different screen sizes, ensuring a smooth and enjoyable shopping experience on my smartphone or tablet.
* As a returning customer, I want to have the option to create an account and sign in, allowing me to track my order history.

## Registration and User Accounts
* Be able to register for an account.
* Be adble to log in or log out.
* Easily recover my password in case I forget it.
* Receive an email confirmation after registering.
* Have a personalised user profile.


## Sorting and Setting
* Sort the list of available products.
* Sort a specific category of product.
* Search for a product by name or description.


## Purchasing and Checkout
* Be able to  select the quantity of a product when purchasing it.
* View items in my bag to be purchased.
* Adjust the number of individual items in my bag.
* Easily enter my payment information.
* Feel my personal and payment information is safe and secure.
* View an order confirmation after checkout.
* Receive an email confirmation after checking out.

## Admin and Store Management
* B eable to add products.
* Access to Edit/update a product.
* Access to Delete a product.



# Deployment and Local Development

## Deployment

* This project was deployed to Heroku using the following steps:

* Navigate to ElephantSQL.com and create a user account, by using the log-in with GitHub option.
* Click “Create New Instance”.
* Set up your plan. (You can leave the 'tags' field blank.)
* Select a region.
* Select a data centre near you
* Then click “Review”.
* Check your details are correct and then click “Create instance”.
* Return to the ElephantSQL dashboard and click on the database instance name for this project
* In the URL section, clicking the copy icon will copy the database URL to your clipboard
* Leave this tab open, we will come back here later

# Heroku 

1. Log into Heroku.com, click “New” and then “Create a new app”.
2. Choose a unique name for your app, select the region closest to you, and click “Create app”.
3. Go to the Settings tab of your new app
4. Click Reveal Config Vars
5. Return to your ElephantSQL tab and copy your database URL
6. Back on Heroku, add a Config Var called DATABASE_URL and paste your ElephantSQL database URL in as the value. Make sure you click “Add.”
7. Add each of your other environment variables except DEVELOPMENT and DB_URL from the env.py file as a Config Var.
8. Navigate to the “Deploy” tab of your app.
9. Select “Connect to GitHub” in the Deployment method section.
10. Search for your repo and click Connect
11. Optional: You can click Enable Automatic Deploys in case you make any further changes to the project. This will trigger any time code is pushed to your GitHub repository.
12. As we already have all our changes pushed to GitHub, we will use the Manual Deploy section and click Deploy Branch. This will start the build process.
13. The app should be up and running now, so click the “Open app” button


# Local Deployment

## How to Fork
* To fork the Mugs And Pillows Mania repository:

1. Login (or sign up) to GitHub.
2. Go to the repository for this project, at [GitHub Repository](www.github.com/Laidybird/Milestone4/).
3. Click the Fork button in the top right corner.

## How To Clone

* To clone the Mugs And Pillows Mania repository:

1. Login (or sign up) to GitHub.
2. Go to the repository for this project, at  [GitHub Repository](www.github.com/Laidybird/Milestone4/).
3. Above the list of files, click "Code".
4. Click "Open with GitHub Desktop" to clone and open the repository with GitHub Desktop.
5. Click "Choose..." and, using Windows Explorer, navigate to a local path where you want to clone the repository.
6. Click "Clone".


# Design 

## Home page
![home](https://github.com/Laidybird/Milestone4/assets/66474546/a0d06e6b-3941-4460-b2a8-1fe331f0628f)

## Filtering
![filter](https://github.com/Laidybird/Milestone4/assets/66474546/1ae4378a-7b8a-40c4-aa50-0a9f3dda41de)

![mug](https://github.com/Laidybird/Milestone4/assets/66474546/654b364e-2d3d-4f23-9178-a75d89539608)

## Register
![sign up](https://github.com/Laidybird/Milestone4/assets/66474546/625f6ab0-b470-4e83-ace9-502cb568a6cd)

## Login  
![login](https://github.com/Laidybird/Milestone4/assets/66474546/5d4b0693-1384-47b4-92b8-69daba8e8648)

## Shoping Bag
![shoping bag](https://github.com/Laidybird/Milestone4/assets/66474546/86bb887a-4b9d-4d21-bd35-a625c84dc4ac)

## Checkout Form
![checkout](https://github.com/Laidybird/Milestone4/assets/66474546/30959ae1-aa6e-48ec-933c-0b6e032c4e96)


## Flow Chart

![Shopping Process Flow Graph](https://github.com/Laidybird/Milestone4/assets/66474546/beb42976-6391-4273-afd5-734ebfc29a73)




## Color Scheme 

* The predominant color of the website is black; I chose it for its simplicity and elegance.

## Typography

* Google Fonts was used to import Lato Text, which is a sans-serif font.

# Testing

* Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along.
* Testing was done manually as was the case with all my projects throughout my time on the course. Testing was a constant affair during development and was tested on multiple devices at a time. This ensured that any prevalent bugs at time of development were dealt with in a swift and timely manner and not on an ad-hoc basis at the end of the Development of the Application.
* It became apparent though that due to Django's template structure passing the templates themselves into a HTML validator was proving difficult as Jinja expressions and variable injection into the template would return as an error in the Validator.











