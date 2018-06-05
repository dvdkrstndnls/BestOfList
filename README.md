# BestOfList
Simple app allowing users to create a 'Best Of..." Song List and have other users vote on said songs!


# Node Express Handlebars

### Overview

In this assignment, we've created Music Best of List (similar to a burger logger) with MySQL, Node, Express, Handlebars and an ORM. We are following the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

### Important

We are utilizing the [MYSQL Heroku Deployment Guide](../Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy.

### Before You Begin

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. We are modifying this to instead create a Music "Best Of" logger instead

* Whenever a user submits a song name, the app will display the song on the left side of the page -- waiting to be liked by other users.

* Each song in the waiting area also has a `Like` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every song in a database, whether liked or not.

* [Check out this video of the app for a run-through of how it works](burger_demo.mp4).

### Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

## Instructions

#### App Setup

1. Created a GitHub repo called `burger` and clone it to your computer. DONE

2. Made a package.json file by running `npm init` from the command line. DONE

3. Installed the Express npm package: `npm install express`.  DONE

4. Created a server.js file. DONE

5. Installed the Handlebars npm package: `npm install express-handlebars`. DONE

6. Installed the body-parser npm package: `npm install body-parser`. DONE

7. Installed MySQL npm package: `npm install mysql`. DONE

8. Required the following npm packages inside of the server.js file: DONE
   * express
   * body-parser

#### DB Setup

1. Inside your `burger` directory, created a folder named `db`. DONE

2. In the `db` folder, created a file named `schema.sql`. Write SQL queries this file that do the following: DONE

   * Create the `burgers_db`.DONE
   * Switch to or use the `burgers_db`.DONE
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.DONE
     * **burger_name**: a string.DONE
     * **devoured**: a boolean.DONE

3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries. DONE

4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line NOT DONE UNLESS DOING #5 takes care of this

5. Now you're going to run these SQL files.

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`. DONE

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database. DONE

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`. DONE

   * Close out of the MySQL command line tool: `exit`. DONE

#### Config Setup

1. Inside your `burger` directory, create a folder named `config`.

2. Create a `connection.js` file inside `config` directory.

   * Inside the `connection.js` file, setup the code to connect Node to MySQL. DONE

   * Export the connection. DONE

3. Create an `orm.js` file inside `config` directory. DONE

   * Import (require) `connection.js` into `orm.js` DONE

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()` NOT DONE
     * `insertOne()` NOT DONE
     * `updateOne()` NOT DONE

   * Export the ORM object in `module.exports`. DONE

#### Model setup

* Inside your `burger` directory, create a folder named `models`. DONE

  * In `models`, make a `burger.js` file. DONE (listitem.js)

    * Inside `burger.js` (listitem.js), import `orm.js` into `burger.js`(listitem.js) DONE

    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM. EXAMPLE CODE INSERTED INTO FILE NOTE SURE ABOUT THIS STEP

    * Export at the end of the `burger.js` file. DONE

#### Controller setup

1. Inside your `burger` directory, create a folder named `controllers`.

2. In `controllers`, create the `burgers_controller.js` file.

3. Inside the `burgers_controller.js` (list_controller) file, import the following:

   * Express DONE
   * `burger.js` DONE BUT MAYBE WRONG

4. Create the `router` for the app, and export the `router` at the end of your file. DONE

#### View setup

1. Inside your `burger` directory, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory. DONE

   * Create the `layouts` directory inside `views` directory. DONE

     * Create the `main.handlebars` file inside `layouts` directory. DONE

     * Setup the `main.handlebars` file so it's able to be used by Handlebars. DONE? PROBLT NOT.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.
 
- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

This is a really tough homework assignment, but we want you to put in your best effort to finish it.

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.



**Good Luck!**

