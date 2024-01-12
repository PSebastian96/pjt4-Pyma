<a name="topofpage"></a>

# pjt4-PymaSnack

Fourth Milestone Project - Code Institute

<hr>
<img width="672" alt="image" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/c64b2a08-7be0-40b6-9a5c-208753e0dc99">
<hr>

# Table of Contents

*   [Student Details](#student)
*   [Introduction](#intro)
*   [Disclaimer](#disclaimer)
*   [User Experience (UX)](#ux)
    *   [Ideal client](#client)
    *   [User stories](#userstory)
*  [Design](#design)
*  [Technologies used](#tech)
*  [Testing](#test)
*  [Content Sources](#sources)
*  [Deployment](#deploy)
*  [Acknowledgements](#acknowledgements)

<hr>

<a name="student"></a>
# Student Details

Name: Szebasztian Pintyer

Student ID: 715159

Institution: City of Bristol College (https://www.cityofbristol.ac.uk) in partnership with Code Institute (https://codeinstitute.net) 

<hr>

<a name="intro"></a>
# Introduction

Welcome to my fourth project milestone's readme file!

Pyma Snacks is a fictional company that is producing healthy snack alternatives for people who are concerned about the environment and want to contribute to environmental causes by supporting eco-friendly food producing companies.

This project is part of the fourth milestone project within the course from City of Bristol College in partnership with Code Institute.

The fourth milestone project's objective is to make a full-stack web application, that contains frontend and backend technologies with the backend: python and Django framework. The objective of this segment of the course is to create a e-commerce website, where users can register, create a shopping bag, edit the sopping bag and create and order.

This enables to create a fully functional e-commerce website, where users can join a website and interact with the content found on the website.

Github Repo - [https://github.com/PSebastian96/pjt4-Pyma]

Heroku Deployed Link - [https://pymasnack-pj4-666aee4e185d.herokuapp.com]

<hr>

<a name="disclaimer"></a>
# Disclaimer!

<h1>THIS PROJECT IS FOR EDUCATIONAL PURPOSES ONLY.</h1>

<hr/>

<a name="ux"></a>
# User Experience

<a name="client"></a>
#### Ideal client

The ideal client for this business is:

- Young demographic, ages between 18-30
- Customers based in the United Kingdom
- Customers who enjoy healthy alternative snacks
- People who care about environment
- People who want to support eco friendly food producers

The B2B ideal client is:

- A business that has multiple offices
- A multinational business 
- Business's who enjoy healthy alternative snacks
- Business's who want to support eco friendly food producers
- Business's based in within United Kingdom

<br/>

<a name="userstory"></a>
#### User stories

1. User Management:

- User Registration: As a new user, possibility to register an account with email and password in order for the user to view their profile.
- User Authentication: As a returning user,possibility to login using existing credentials or logout in order to access personal information in a secure way. 
- Personal User Profile: As a site user, make access to personalized user profile in order to view order history and payment information and keep track of purchases.
- Purpose of website and navigation: As a site user, enable quick identifying of what the website is selling and easily navigate the pages in order to find the information the user is looking for.
- As a visitor, make the information about the product details and nutritional values accessible on the 'about us' and 'product details' pages.
- As a user, create a profile page, where the user would be able to update delivery detials, personal details, payment details.
- Product View: Make the product listing convenient and easy to view and access.
- Product Details: As a customer, enable view detailed information about each product in order to make the best decision for my purchase.

2. Product Management/Admin:

- Product Creation: As an admin, add new products to the website so that shop is up to date.
- Product Update: As an admin, edit product information so that all products have the most relevant and useful information.
- Product Deletion: As an admin remove products that are no longer available so that the shop up is to date.
- Category Creation: As an admin, be able to create a new category for new products.
- Category Deletion: As an admin, to be able to remove categories for products.
- Super User: Be able to allow staff accounts/admin accounts for product management and for creating manual orders.

3. Shopping Cart and Checkout:

- Add to Cart: As a customer, I can add products to my shopping cart in order to purchase one or multiple items.
- Cart Management: As a customer, I can update the quantity or remove items from my cart so that I can make changes later on in the process or remove any unwanted products.
- View shopping cart total: As a customer, have a view of the total amount of the cart at any time in order to see the total value of the order.
- Checkout Summary: View a checkout page so that the details of the order, delivery and payment details are visible for the customer.
- Order Confirmation: As a customer, I want to be able to view an order confirmation, so the relevant details are visible after completing the purchase.
- Secure Payment Process: As a customer, I can enter the card details with an intuitive checkout process so that the purchase proceeds with a secure payment.
- Notifications: As a customer, be notified by small pop-up messages from the website so that the customer is reassured on all actions and interactions throughout their visit.

<hr/>

<a name="design"></a>
# Design

### Wireframe

- Desktop and Tablet view:
<img width="385" alt="tablet_view" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/157a6268-2e2a-4e10-b8a1-4724c8bba592">

- Mobile view:
<img width="165" alt="mobile_view" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/d39effae-3b1c-4e1e-bf48-c21fa0bf977c">

- Order Forms:
<img width="302" alt="image" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/d05bdae1-d39b-45a5-a360-6c0a4cb39382">

<br/>

### Colour Theme

- Main colours of the web site are: White, Black, Navy blue and Dark blue.

1. Header, Footer and Navbar use Dark Blue Colour - rgb(8, 8, 72) .
<img width="263" alt="darkblue" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/82d84c22-b853-41e0-869e-283e1ad328f7">

2. Background colour for the pages use Lighter Navy Blue colour - rgb(0, 0, 134).
<img width="263" alt="navyblue" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/7b861f55-262b-478e-97c9-e845485acb11">

3. Text Content uses mostly White(hex. #FFFFFF) colour, where the background is white (toasts/notifications) the text content uses Black(hex. #000000) colour.
<img width="365" alt="image" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/40bf1888-382a-49cc-b8a1-8b1489a5c4ee">
<img width="364" alt="image" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/06834cdb-c9ec-4212-9450-3253bfe61c91">


### Typography

1. Logo uses the 'Fontdiner Swanky' google font.

<img width="215" alt="image" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/650a388d-338a-4581-9725-7e52756d2345">

<br/>

2. Titles use the'Rubik Moonrocks' google font.

<img width="139" alt="image" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/7eefc096-8ef6-4477-bc48-21ba4cf94f7c">

<br/>

3. Text uses the 'Nanum Pen Script' google font.

<img width="605" alt="image" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/662bc969-a4d0-446a-a594-efa3f34b2670">


<br/>

### Database Schema

- The functionality of the PymaSnacks Django app, within the models of each app, acts as the back-end logic for storing essential information in databases.

- The Entity Relationship Diagrams below illustrate how the models are connected to each other:
- Product Model:
	- The Product model is related to the Category model using a ForeignKey, allowing products to be categorized.
- Order Model:
	- The Order model is related to the UserProfile model through a ForeignKey, indicating that each order is associated with a user profile.
- OrderLineItem Model:
	- The OrderLineItem model is related to the Order and Product models using ForeignKeys. It represents individual line items within an order and is associated with the products ordered in each order.

<img width="381" alt="image" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/c409126f-654b-49b8-96b0-7af0fc930ba6">


<hr/>

<a name="tech"></a>
# Technologies Used

### Languages:

- HTML5 [https://developer.mozilla.org/en-US/docs/Web/HTML]
- CSS3 [https://developer.mozilla.org/en-US/docs/Web/CSS]
- Javascript/JQuery [https://api.jquery.com]
- Python3 [https://docs.python.org/3/]

### Framework, Libraries:

- [Github](https://github.com) Was used to store the repository and files for the project.  
- [Gitpod](https://www.gitpod.io/docs/introduction) was used for version control, allowing me to commit changes and push them to GitHub directly from the Gitpod terminal. It was the primary code editor.
- [Google Fonts](https://fonts.google.com/) used for the typography.
- [Font Awesome](https://fontawesome.com/) was used to add icons.
- [Bootstrap](https://getbootstrap.com/) was used to build the front-end.
- [Django](https://www.djangoproject.com/) was used as the framework of the application.
- [Gunicorn](https://gunicorn.org/) was used as the Web Server to run Django on Heroku.
- [Pillow](https://pillow.readthedocs.io/en/stable/index.html) - Python Imaging Library used for image handling.
- Django allauth used for account registration and authentication.
- Django crispy forms used for form rendering.
- [Amazon Web Services (AWS)](https://aws.amazon.com) used to store all of static files and images.
- [Boto3](https://pypi.org/project/boto3/) the Amazon Web Services (AWS) Software Development Kit (SDK) for Python.
- [Stripe](https://js.stripe.com/v3/) used for secure payments.
- [Heroku](https://heroku.com/) was used to deploy the application and provides an enviroment in which the code can execute.

### Emailjs API :

- Emailjs - [https://www.emailjs.com]

- Emailjs offers an emailing service for websites. This includes two type of API's : 1. free and personal use of up to 200 session/month and 2. a business API.
  For this project I have signed up for the free/personal use of email service with 200 available sessions/month.
  This API is allowing the developer to receive emails from the forms which are designed for the website for various pourposes.
  The emailjs API makes the following possible:
   
   - The user can fill out the contact form with their details and their query or message.
   - The API connects the "business" or personal email account (gmail,outlook etc) with the websites form and makes it possible to receive the visitors inputs from 
     the same form.
   - API also offers an auto reply mode and it's content is customizable and can fit any business/personal needs for emailing.

 - For any further details about the application of this API, please find the details in the official documentation of the emailjs API [https://www.emailjs.com/docs/].
<hr/>

<a name="test"></a>
# Testing

### HTML validator (https://validator.w3.org)

- When testing HTML pages, most of the warnings are due to the markup not recognising Jinja templates fully.

- base.html page:
<img width="865" alt="test-base" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/0359022f-6d6a-449f-9eaf-259b31a1f37d">

- index.html page:
<img width="860" alt="test-index" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/f58144cc-823d-4a8a-b1f4-d3a3cf103ebe">

- about.html page:
<img width="873" alt="test-about" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/f93e1adf-0053-42e1-8d23-af64063982fd">

- bag.html page:
<img width="869" alt="test-bag" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/ec528937-c119-4c78-a2e6-b0687bb60f5c">

### CSS validator (https://jigsaw.w3.org/css-validator/)

- base.css file:
<img width="894" alt="basecss" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/321a0100-a6e1-42fe-b246-9b44d99ee869">

- checkout.css file:
<img width="893" alt="checkoutcss" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/df81db04-41e7-4007-b82a-bb2210ce9708">

- contact.css file:
<img width="890" alt="contactcss" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/7b9e3d11-3d4a-4b23-bdd2-157feeefe682">

### JS Hint (https://jshint.com)

- messagescript.js file:
<img width="882" alt="messagejs" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/ae9c645f-875f-4fa0-9ff7-fe73e4f61037">

- stripe_elements.js file:
<img width="731" alt="stripejs" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/57aefd30-8d62-4713-8d9d-c0fffaa7fbb6">

### Python Syntax Checker (https://www.pythonchecker.com)

- All the warnings state to put a white space around the operators.

-  profile models.py file:
<img width="909" alt="profilemodelspy" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/304bae90-a7ac-459e-a28b-f9f0ed729845">

<br/>

- checkout views.py file:
<img width="908" alt="image" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/d6543b2d-d8d9-4a64-a023-1b91112efdb4">

### Stripe payment testing:

1. Payment processing:
<img width="910" alt="payment1" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/7d18dcc2-46f4-41d0-a9e7-8d6503e831d7">

2. Payment successfull notification:
<img width="898" alt="payment2" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/dff3d625-8f53-4850-bfd0-e9f0a4a7a8ac">

### EmailJS API testing:

Manual testing of EmailJS API in the browser:

- User fails to fill the form:
<img width="911" alt="emailjsfail" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/8eab2484-4526-49d9-b15f-83187b576c0a">

- User successfully fills the form and it's received (HTTP 200 - OK success status response code):
<img width="910" alt="emailjssuccess" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/1d1e426a-3c1a-4b58-a385-7b38455e8c42">


<hr/>

<a name="deploy"></a>
# Deployment

<p>
<details><summary><h3>How To Clone</h3></summary>
1. Go to the <https://github.com/PSebastian96/pjt4-Pyma> repository.
2. Click the Code button to the left of the green Gitpod button, then choose Local.
3. Click on headings for HTTPS, SSH, and Github CLI to find their individual URL links. Choose the HTTPs one.
4. Open your own terminal in your editor and change the current working directory to the location of where you want the cloned directory to be.
5. In the terminal type git clone, and then paste the URL you copied from the repository page.
6. Press enter to start the process.
7. To install the packages required by the application use the command : pip install -r requirements.txt
8. When developing and running the application locally set DEBUG=True in the settings.py file
9. Modifications performed on the local clone can be synchronized with the repository by executing the following commands:
    -  git add filenames (or "." to add all changed files)
    -  git commit -m "your message"
    -  git push
 Modifications pushed to the main branch will be implemented in the live project after re-deployment from Heroku. Ensure that you do not include DEBUG=True in the settings.py file on GitHub; this setting is intended exclusively for local use.
</details>
</p>

<p>
<details>
    <summary><h3>How To Fork</h3></summary><br/>
1. Go to the https://github.com/PSebastian96/pjt4-Pyma repository.
<br/>
2. Click the fork button in the top right of the screen, between the watch, and the star buttons.
</details>

## Deployment of the project

<details>
    <summary><h3>Create a respository on GitHub</h3></summary>

- Use the [CI Full Template](https://github.com/Code-Institute-Org/ci-full-template) to create a project
- Click on 'Use this template' then 'Create a new respository'
- Fill out the form, especially the 'Repository name' then click on 'Create repository'
- Copy over the URL of the repository and paste it into a New Workspace on Codeanywhere then it will start to build.
- Install Django and supporting libraries in the terminal:
- Create requirements file: 'pip3 freeze --local > requirements.txt'
- Create Project: 'django-admin startproject PROJ_NAME .'
- Create App: 'python3 manage.py startapp APP_NAME'
- Create a new env.py file in the root directory and include the database:
  - 'import os' on the top in env.py file
  - Set the environment variables (same values as later in Heroku Config Vars)
</details>

<details>
    <summary><h3>ElephantSQL</h3></summary>

- Create an account on [ElephantSQL](https://www.elephantsql.com/) and click "Create New Instance"
- In "Create new instance" section setup details:
    - Select the TINY TURTLE database plan and name,
    - Select region,
    - click confirm
- In the Details section you will find the URL which is necessary for the DATABASE_URL config variable later on Heroku.
  
**Connecting ElephantSQL database in Code Anywhere**

After having our instance created on Elephant SQL and the app on Heroku:

- After installing dj_database_url and psycopg2 in the terminal
- Import dj_database_url underneath the import for os in settings.py:
    import os
    import dj_database_url
- Update the DATABASES to the following code, so that the original connection to sqlite3 is commented out and we connect to the new ElephantSQL database instead. Paste in your ElephantSQL database URL.

```
    # DATABASES = {
    #     'default': {
    #         'ENGINE': 'django.db.backends.sqlite3',
    #         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    #     }
    # }
            
    DATABASES = {
        'default': dj_database_url.parse('database-url-here')
    }
```
Do not commit with this database string in the code to avoid leaving database URL in version control. It is a temporary solution so that you can connect to the new database and make migrations. This setting needs to be removed afterwards.
- In the terminal, run the showmigrations command to confirm you are connected to the external database:
  - python3 manage.py showmigrations
  - If you are, the list of all migrations should appear, but none of them should be checked off.
- Run migrations:
  - python3 manage.py makemigrations --dry-run
  - python3 manage.py makemigrations
  - python3 manage.py migrate --plan
  - python3 manage.py migrate
- Load in the fixtures if you are wokring with those. Note, that The order is very important here. Categories need to be loaded first, then products:
  - python3 manage.py loaddata categories
  - python3 manage.py loaddata products
- Create a Superuser:
  - python3 manage.py createsuperuser
- Prevent exposing the database when pushing to GitHub and delete it from settings.py.

`
    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }
`

**Confirming migrations in ElephantSQL**

- On the ElephantSQL page for your database, select BROWSER (left hand side menu)
- Click the Table queries button and select auth_user.
- Click “Execute”, and you should be able to see the new created superuser details.
- This is your proof that the tables have been created and you can add data to your database.
</details>

<details>
    <summary><h3>Heroku</h3></summary>

- Create a Heroku application by pressing "New" on located on the upper right side of the main page
- Select: 'Create new app' from the dropdown menu.
- Go to the next page, fill the form with the following data: 'App name' and 'Choose a region'
- Press 'Create app'
- On the Application Configuration page for the new app, click on the Resources tab.
- In the Resources tab, search for Heroku Postgre and add it to your project.
- You need to install dj_database_url and pyscopg2 in your terminal:
    - pip3 install dj_database_url
    - pip3 install psycopg2
- Click on Settings on the Application Configuration page then "Reveal Config Vars" to add credentials
- Add a new Config Var called DISABLE_COLLECTSTATIC and assign it a value of 1.
- Add a new Config Var called SECRET_KEY and assign it a value.
- The settings.py file should be updated to use the DATABASE_URL and SECRET_KEY environment variable values as follows :
  - if 'DATABASE_URL' in os.environ:
        DATABASES = {
            'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))
        }
    else:
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
            }
        }
  - SECRET_KEY = os.environ.get('SECRET_KEY')
- Install gunicorn:
  - pip3 install gunicorn
- Freeze requirements: 
  - pip3 freeze > requirements.txt
- Create a Procfile, needs to contain the following code:
  - web: gunicorn (the_app_name).wsgi:application
- Disable Heroku from collecting static files:
  - heroku config:set DISABLE_COLLECTSTATIC=1 -- app-name
- Add the host names to settings.py file:
  - ALLOWED_HOSTS = ['app-name.herokuapp.com', 'localhost']
- Set DEBUG flag to False in settings.py
- In order to be able to run the application on localhost, add SECRECT_KEY and DATABASE_URL and their values to env.py as well
- Connect Heroku to your Github (See further below)

Config Vars in Heroku should have:

- AWS_ACCESS_KEY_ID = 'your variable'
- AWS_SECRET_ACCESS_KEY = 'your variable'
- DATABASE_URL = 'your variable'
- DISABLE_COLLECTSTATIC = 1
- EMAIL_HOST_PASS = 'your variable'
- EMAIL_HOST_USER = 'your variable'
- SECRET_KEY = 'your variable'
- STRIPE_PUBLIC_KEY = 'your variable'
- STRIPE_SECRET_KEY = 'your variable'
- STRIPE_WH_SECRET = 'your variable'
- USE_AWS = True
</details>

<details>
    <summary><h3>Connect the Heroku application to the GitHub repository</h3></summary>

- Go on the Heroku page of the application then 'navigate to the Deploy' tab
- Scroll down to 'Deployment method' and select GitHub
- Below that search for the Github repository to connect
- Click on 'Connect'
- Below that there are two options: 'Automatic deploys' or 'Manual deploy'
- To manually deploy: enter 'main' as the name of the branch and press 'Deploy Branch'
- Main branch starts building up automatically
- At the end of the build a message pops up: 'Your app was successfully deployed' and a button: 'View'
- Click on 'View' to see the live project.
</details>

<details>
<summary><h3>Configure Amazon Web Services S3 to store static files and images</h3></summary>

- Go to aws.amazon.com - create an account and log in
- Access the S3 services from the dashboard
- Create a new 'bucket', it is recommended to give this a name matching your application, choose a region, uncheck "Block all public access" and acknowledge that the bucket will be public.  Next, click on the new bucket to create it.
- Go to the properties tab and turn on static website hosting, fill in default values for index and error document settings - e.g. index.html and error.html and click on Save.
- Go to the permissions tab and make the following changes to configure the bucket :

**Configure CORS:**
    - Paste the following CORS configuration string : <br>
    	[ { "AllowedHeaders": ["Authorization"],<br>
                "AllowedMethods": ["GET"],<br>
                "AllowedOrigins": ["*"],<br>
                "ExposeHeaders": [] } ]<br>

**Generate Policy:**
    - Go to the bucket policy area, click on Edit and click on policy generator.  
    - Choose S3 bucket policy from drop-down
    - Put '*' in Principal field
    - Select get object from Actions drop-down
    - Copy ARN and paste into ARN box on the policy generator page
    - Click Add Statement
    - Click Generate Policy then copy the policy into the policy editor window
    - Add /* to the end of the Resource key
    - Click Save

**Access Control List (ACL):**
    - Go to the Access Control List area
    - Set the list objects permission: For Everyone (public access) under the Public Access section and
		check the box to confirm you want this permission setting

**AWS IAM (Identity and Access Management) setup:**
  - From the IAM dashboard (on the left side), select User Groups: click Create a new group then click 
    through and finally click Create Group
  - On the same page click on Policies, then Create Policy, go to JSON table and select Import Managed Policy
  - Click on Import managed policy
  - Search for S3 and select AmazonS3FullAccess and click on Import
  - Go back and get the Bucket Policy ARN
  - Change the Resource value from *to ARN bucket and its contents - e.g : <br>
        "Resource": [<br>
                    "arn:aws:s3:::earthalchemy-naturals",<br>
                    "arn:aws:s3:::earthalchemy-naturals/*"<br>
                ]<br>
  - Click Next and then Review Policy
  - Give the policy a name and click Create Policy
  - Attach the policy to the group you created: 
        Go to groups, click on your group, go to the Permissions tab, click Add permissions and select Attach policies, select the policy created on previous step and click Attach permissions
  - Create user to put into the group. Click Users on the side menu, click Add User, assign name check the programmatic access checkbox, click on Next:Permissions.  Add user to group, click through to the end and click Create User.

- Download and save the generated csv which contains the users access and secret access keys
- Update the AWS section of the settings.py file - replace the bucket name and region with the values you set up in the previous steps :

			if 'USE_AWS' in os.environ:
				# Bucket Config
				AWS_STORAGE_BUCKET_NAME = 'earthalchemy-naturals'
				AWS_S3_REGION_NAME = 'eu-west-2'
				AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
				AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')

- Add the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY config vars to heroku using the values from the downloaded cvs
- Add USE_AWS = True to the Heroku config vars
- Remove the DISABLE_COLLECTSTATIC config var at this point from Heroku
- The custom_storages.py file that is part of this project will tell Django to use S3 to store static and media files when collectstatic is run
- The remaining AWS configuration settings needed are already configured in this projects settings.py file
- Go to the S3 dashboard and create a folder called media in the new bucket.  Specify grant public-read access on the folder and tick the checkbox to confirm.

**Connecting Heroku to AWS S3**

Install boto3 and django-storages
- pip3 install boto3
- pip3 install django-storages
- pip3 freeze > requirements.txt
Add the values from the .csv you downloaded to your Heroku Config Vars, then delete the DISABLE_COLLECTSTATIC variable and deploy your Heroku app.

With your S3 bucket now set up, you can create a new folder called media and upload any required media files to it. - these folder and so the files need to be publicly accessable!
</details>

<details>
<summary><h3>Configure STRIPE config vars and webhooks</h3></summary>

- Log in to your Stripe account
- Add STRIPE_PUBLIC_KEY and STRIPE_SECRET_KEY to the Heroku config vars, find these variables values in your Stripe account dashboard
- Create a webhook endpoint for use with your applications.  On the stripe dashboard go to 'Developers' then Webhooks, click add endpoint, use the url of your Heroku application with '/checkout/wh/' added onto the end of the url string.  When configuring the endpoint, add all events.
- Once the endpoint is set up, retrieve the signing secret key for the webhooks and save this value as a Heroku config var called STRIPE_WH_SECRET.
</details>

<hr/>

<a name="sources"></a>
# Content Sources

### Wireframe
- Diagrams made with Diagrams.net [https://app.diagrams.net]

### Responsivness
- Responsive Images made with Am I Responsive? [https://ui.dev/amiresponsive]

### Images:
- [Gencraft](https://gencraft.com) Is an machine learning web app that generates images by text input.
- [Removebg](https://www.remove.bg) Is a open source web app for removing background from images. 

<hr/>

<a name="acknowledgements"></a>
# Acknowledgements

-   Tutor support at Code Institute for their support.

-   City of Bristol College for their support and help with my studies.
