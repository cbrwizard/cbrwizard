source 'https://rubygems.org'

ruby '2.1.4'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.6'

gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
gem 'bootstrap-sass'

gem 'simple_form', '~> 3.1.0rc2'
gem 'slim-rails'

# Automatically adds browser prefixes for css
gem 'autoprefixer-rails'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.1'

gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'yard'
end

group :development do
  # Better displays 500 errors
  gem "better_errors"
  # And shows console on their pages
  gem "binding_of_caller"

  # Automatically adds annotations to models
  gem "annotate"

  # Finds wrong db requests
  gem "bullet"

  # Automagically launches tests for changed files
  gem 'guard'
  gem 'guard-rspec', require: false
  # And updates gems when needed
  gem 'guard-bundler', require: false

  # Checks ruby code grammar
  gem 'rubocop', require: false
  # With rspec
  gem 'rubocop-rspec'
  # With guard
  gem 'guard-rubocop'
end

group :test do
  # Rspec console formatting
  gem 'fuubar'

  # Features tests for Rspec
  gem 'capybara'

  # Webkit driver for js feature tests
  # $ brew install qt
  gem "capybara-webkit"

  # For active record imitation in tests
  gem 'factory_girl_rails'

  # To open test pages automatically when open_and_save method is called
  gem 'launchy'
end

group :development, :test do
  # Test framework
  gem 'rspec-rails', '~> 3.0'
end

# Authorization
gem 'devise'

# Easy tags
gem 'acts-as-taggable-on'

# Easy local time rendering
gem 'local_time'

# Faster server
gem 'thin'
