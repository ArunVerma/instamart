# Instamart

A single-page web application inspired by same-day delivery service, [Instacart](www.instacart.com)

# The stack

## client-side

Backbone.js with a little help from Marionette.js for view layer logic

## backend

RESTful API powered by Ruby on Rails, PostgreSQL and Unicorn

## toolkit

jQuery UI, SASS, Bootstrap, Twitter Typeahead, jBuilder, EJS

# Live demo

Available at http://instamart.marclang.net

# Instructions

To run locally, do the following from the command line:

```
git clone https://www.github.com/tradecraft/instamart.git
cd instamart
sudo bundle install
bundle exec rake db:create db:migrate db:seed
rails s
```

If no errors, navigate to localhost:3000 in a Chrome browser window and and everything should be working

# Questions

Get in touch via email: bulaise at gmail dot com
