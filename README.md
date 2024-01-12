<a name="topofpage"></a>

# pjt4-PymaSnack

Fourth Milestone Project - Code Institute

<hr>

# Table of Contents

*   [Student Details](#student)
*   [Introduction](#intro)
*   [Disclaimer](#disclaimer)
*   [Experience (UX)](#ux)
    *   [Ideal client](#client)
    *   [User stories](#userstory)
*  [Design](#design)
*  [Technologies used](#tech)
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

<br/>

<a name="userstory"></a>
#### User stories

<hr/>

<a name="design"></a>
# Design

### Wireframe

<br/>

### Colour Theme

- Main colours of the web site are: White, Black, Navy blue and Dark blue.

1. Header, Footer and Navbar use Dark Blue Colour - rgb(8, 8, 72).
<img width="263" alt="darkblue" src="https://github.com/PSebastian96/pjt4-Pyma/assets/123810890/82d84c22-b853-41e0-869e-283e1ad328f7">

2. Background colour for the pages use Lighter Navy Blue colour - rgb().
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

### Images:
- [Gencraft](https://gencraft.com) Is an machine learning web app that generates images by text input.
- [Removebg](https://www.remove.bg) Is a open source web app for removing background from images. 

<hr/>

<a name="acknowledgements"></a>
# Acknowledgements

-   Tutor support at Code Institute for their support.

-   City of Bristol College for their support and help with my studies.
