# Folder Structure
my-app
  |-- README.md
  |-- package.json
  |-- .env // your environment variable file
  |-- .gitignore // you can ignore file on git here
  |-- .eslintrc.json // file config eslint
  |-- public
      |-- index.html // import fontawesome (current version 5.0.13), you can edit title here
      |-- favicon.ico // change your favicon
      |-- img // folder img
          |-- your img
      |-- font
          |-- your font
  |-- src
      |-- _variable.scss // font and color template (import file to use font and color)
      |-- App.scss // import bootstrap.min.css and react-select.min.css
      |-- App.jsx // root app
      |-- App.test.js
      |-- index.js // JavaScript entry point
      |-- configureStore.js // apply middleware redux
      |-- component
          |-- Layout
              |-- YourLayout
                  |-- YourLayout.jsx
                  |-- YourLayout.scss
          |-- YourComponent
              |-- YourComponent.jsx
              |-- YourComponent.scss
          |-- helpers
              |-- YourHelper
          |-- actions
              |-- index.js // root action
              |-- YourAction
                  |-- YourAction.js
          |-- reducers
              |-- index.js // root reducer
              |-- YourReducer
                  |-- YourReducer.js

## Helper
helpers
  |-- Cookie
      |-- Cookie // get and create cookie (unit milliseconds 3600000 = 1hr)
  |-- CSCalendar
      |-- CSCalendar // custom package react-day-picker to input group(icon)
  |-- CSCarousel
      |-- CSCarousel // custom carousel on reactstrap
  |-- CSCheckbox
      |-- CSCheckbox // custom css checkbox
  |-- CSModal
      |-- CSModal // custom css modal on reactstrap
  |-- CSRadio
      |-- CSRadio // custom css radio btn
  |-- CSTable
      |-- CSTable // custom css package react-table
  |-- FNFormatString
      |-- FNFormatString // function format string ex. date, date and time, id card, phone number and etc.
  |-- FNRedirect
      |-- FNRedirect // function redirect (redirect different domain)
  |-- FNTimeLeft
      |-- FNTimeLeft // function timeleft example FNTimeLeft('2018-05-25T10:31:52.000+0000')
  |-- Icon
      |-- Icon // component for icon type svg
  |-- UpLoadFile
      |-- UpLoadFile // custom css (input uploaf file)

## Change favicon
change favicon on path /pubic

## Update version fontawesome (current cersion 5.0.13)
change lib on /public/index.html

## Change title html
change title web on /public/index.html (tag title)

## Eslint
config
semicolon id require
comma
  |-- { a, b }
  |-- {
      a,
      b,
  }
quotes
  |-- let a = 'b';
  |-- <Test a="value" />
import (should be import not require)
bind this (should be arrow function)
