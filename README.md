# Backbone Rails 3.1 Application with CoffeeScript and Jasmine

This application is a skeleton application for using Backbone and Jasmine
with CoffeeScript.

## Installation

Grab the repository, change into it and install the necessary gems

```bash

git clone git@github.com:bseanvt/backbone-rails.git
cd backbone-rails
bundle

````

To start the Jasmine server and watch for changes to your Coffeescript files (with guard)
start both processes and leave each running in its own terminal session

```bash

bundle exec guard
bundle exec rake jasmine

````

Visit http://localhost:8888

## Organization

In the app/assets/javascripts directory are subdirectories for organizing your Backbone models, collections and views
(routes coming soon). These files (ending in .coffee) are watched by guard, and when saved will compile into public/javascripts
models, collections, views and lib directories.  

The same is true for files in the spec/javascripts directory.

## Configuration

Jasmine will check for specs in the compiled directory under public/javascripts/compiled.
The necessary dependencies must be loaded first, for your specs to pass. You can configure
your dependencies by modifying the spec/javascripts/support/jasmine.yml

It looks something like this

```yml

src_files:
  - public/javascripts/lib/jquery.js
  - public/javascripts/lib/jquery.tmpl.js
  - public/javascripts/lib/underscore.js
  - public/javascripts/lib/backbone.js

  - public/javascripts/models/*.js
  - public/javascripts/collections/*.js
  - public/javascripts/views/*.js

  - public/javascripts/compiled/*.js

```