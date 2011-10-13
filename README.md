# Backbone Rails 3.1 Application with CoffeeScript and Jasmine

This application is a skeleton application for using Backbone and Jasmine
with CoffeeScript.

## Installing

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


## Configuration

Jasmine will check for specs in the compiled directory under public/javascripts/compiled.
The necessary dependencies must be loaded first, for your specs to pass. You can configure
your dependencies by modifying the spec/javascripts/support/jasmine.yml
