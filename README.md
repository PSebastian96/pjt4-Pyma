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
* [Design]
  * [Wireframes]
  * [Entity Relationship Diagrams]
  * [Theme]
  * [Typography]
* [Technologies used](#tech)
*   [Content Sources](#sources)
*   [Deployment](#deploy)
*   [Acknowledgements](#acknowledgements)

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

<a name="deploy"></a>
# Deployment
<details>
  <summary><h2>How to Clone</h2></summary>
1. Click the Code button to the left of the green Gitpod button, then choose Local.
<br/>
2. Click on headings for HTTPS, SSH, and Github CLI to find their individual URL links. Choose the HTTPs one.
<br/>
3. Open your own terminal in your editor and change the current working directory to the location of where you want the cloned directory to be.
<br/>
4. In the terminal type git clone, and then paste the URL you copied from the repository page.
Press enter to start the process.
<br/>
5. To install the packages required by the application use the command : pip install -r requirements.txt
<br/>
6. When developing and running the application locally set DEBUG=True in the settings.py file
Modifications performed on the local clone can be synchronized with the repository by executing the following commands:
<br/>
git add filenames (or "." to add all changed files)
<br/>
git commit -m "your message"
<br/>
git push Modifications pushed to the main branch will be implemented in the live project after re-deployment from Heroku. Ensure that you do not include DEBUG=True in the settings.py file on GitHub; this setting is intended exclusively for local use.
</details>

<br/>

<details>
    <summary><h2>How to Fork</h2></summary>
1. Go to the https://github.com/PSebastian96/pjt4-Pyma repository.
<br/>
2. Click the fork button in the top right of the screen, between the watch, and the star buttons.
</details>

<br/>

### Deployment of the project

<details>
    <summary><h3>Create a respository on GitHub</h3></summary>
    - Use the CI Full Template to create a project
    <br/>
    - Click on 'Use this template' then 'Create a new respository'
    <br/>
    - Fill out the form, especially the 'Repository name' then click on 'Create repository'
    <br/>
    - Copy over the URL of the repository and paste it into a New Workspace on Codeanywhere then it will start to build.
    <br/>
    - Install Django and supporting libraries in the terminal:
    <br/>
        - Create requirements file: 'pip3 freeze --local > requirements.txt'
    <br/>
    - Create Project: 'django-admin startproject PROJ_NAME .'
    <br/>
    - Create App: 'python3 manage.py startapp APP_NAME'
    <br/>
    - Create a new env.py file in the root directory and include the database:
    <br/>
        - 'import os' on the top in env.py file
    <br/>
    - Set the environment variables (same values as later in Heroku Config Vars)
</details>

<br/>

<details>
    <summary><h3>ElephantSQL</h3></summary>
    1. Create an account on ElephantSQL and click "Create New Instance"
    <br/>
    2. In "Create new instance" section setup details:
        - Select the TINY TURTLE database plan and name,
        - Select region, click confirm
        <br/>
    3. In the Details section you will find the URL which is necessary for the DATABASE_URL config variable later on Heroku. Connecting ElephantSQL database in Code Anywhere/Gitpod
    <br/>
    After having our instance created on Elephant SQL and the app on Heroku:
        - After installing dj_database_url and psycopg2 in the terminal
        - Import dj_database_url underneath the import for os in settings.py: import os import dj_database_url
        - Update the DATABASES to the following code, so that the original connection to sqlite3 is commented out and we connect to the new ElephantSQL database instead. Paste in your ElephantSQL database URL.
        <br/>
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
</details>

