ES6 React project
======================
Blank porject made with React and ES6, you can use it to bootstrap your projects. Please note that this project does not include flux architecture or any libs about it, this is good because you can install your favorite libs.

What's inside
----------------
Batteries included:
 - Gulp
 - Browserify
 - Bootstrap
 - React
 - Livereload
 - Jest

Setup
-----
Clone the repository and install the dependencies.

    $ git clone https://github.com/abiee/es6-react.git mexicoder-react-course
    $ cd mexicoder-react-course
    $ git checkout mexicoder-session-2
    $ npm install
    $ gulp serve

Do not forget to install globally gulp if not installed yet.

    $ npm install -g gulp

Configure twitter credentials
------
You will need to configure Twitter credentials to make the project work, signin in your account and [configure a new app](https://apps.twitter.com/). Once you have the tokens provided by Twitter, edit the `twitterCredentials.json` file.

Build
------
If you want to build the project run.

    $ gulp build

It will compile the project and put the result under `dist` directory. You can run the compiled project also.

    $ gulp serve:dist

Testing
---------
You have two options test the project. The first one is for development process and encorages to practice Test Driven Development or BDD.

    $ gulp tdd

The other option is to run tests just once.
    
    $ gulp test

Contribution
---------------
If you have ideas or find an error feel free to submit a PR.

Licence
-------
Licensed under the MIT license.
