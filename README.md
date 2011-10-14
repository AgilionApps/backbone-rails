# Backbone Rails 3.1 Application with CoffeeScript and Jasmine

This application is a skeleton application for using Backbone and Jasmine
with CoffeeScript.

## Example

In this app is an example Backbone model and accompanying spec.

```coffeescript

# Backbone.js Model
# app/assets/javascripts/models/example.js.coffee
class window.Example extends Backbone.Model
  defaults:
    title: "Hello, World"

```

```coffeescript

# Backbone.js Spec for Example model
# spec/javascripts/models/example_spec.coffee
describe "Example", ()->
  beforeEach ()->
    this.example = new window.Example

  it "should have defaults", ()->
    title = this.example.get('title')
    expect(title).toEqual("Hello, World")

```

_You can remove these examples, they are only for demonstration purposes._

## Installation

Grabs this repository, changes into it and installs the necessary gems

```bash

git clone git@github.com:bseanvt/backbone-rails.git
cd backbone-rails
bundle

````

To start the Jasmine server and watch for changes to your CoffeeScript files (with Guard)
start both processes and leave each running in its own terminal session

```bash

bundle exec guard
bundle exec rake jasmine

````

Visit http://localhost:8888

_keep in mind that you will need to edit/save any files you want
compiled/tested before they will show up in the tests._

## Organization & Configuration

In the app/assets/javascripts directory are subdirectories for organizing your Backbone models, collections and views
(routes coming soon). The files (ending in .coffee) in these directories are watched by Guard, and when saved will compile into public/javascripts/src
models, collections and views directories.

The same is true for files in the spec/javascripts directory.

Jasmine will look for specs in the compiled directory under public/javascripts/compiled.
The necessary dependencies must be loaded first, for your specs to pass. You can configure
your dependencies by modifying the spec/javascripts/support/jasmine.yml

It looks something like this

```yml


src_files:
  # Dependencies
  - public/javascripts/lib/jquery.js
  - public/javascripts/lib/jquery.tmpl.js
  - public/javascripts/lib/underscore.js
  - public/javascripts/lib/backbone.js

  # Source (what we're testing)
  - public/javascripts/compiled/src/models/*.js
  - public/javascripts/compiled/src/collections/*.js
  - public/javascripts/compiled/src/views/*.js

  # Specs (our tests)
  - public/javascripts/compiled/spec/**/*.js


```


### Configuring Guard

The Guardfile is in the root of the project. Just change the output path and the regular expression used to match files
if you need a different structure. It looks something like this

```ruby

guard 'coffeescript', :output => 'public/javascripts/compiled/src' do
  watch(/^app\/assets\/javascripts\/collections\/(.*)\.coffee/)
  watch(/^app\/assets\/javascripts\/views\/(.*)\.coffee/)
end

#...

```

## Rails 3.1 Asset Pipeline

Because load order is important it is not advised to automagically load your javascript files with the require tree directive
in app/assets/javascripts/application.js. All javascripts that are needed by your app are specified explicitly instead.
