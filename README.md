# cgko-week-4
Your app can be found at https://postcode-autocomplete.herokuapp.com/

# Postcode Autocomplete :checkered_flag:

## Team   
[Tony](github.com/tonylomax):yum:  
[Christine](github.com/xIrusux):wink:  
[Gigi](github.com/gminova):relieved:  
[Francesca](github.com/frannyfra):grinning:  

## Aim :dart:

Our aim was to build a simple postcode autocomplete app using Node.JS, HTML and CSS.

## Group Mantra
1. Our focus this week is on everyone learning the most rather than having the most fabulous project
2. Pair programming - esure everyone pairs up with everyone at least once
3. Use 20/20/20 - if a pair has not found an answer after 20 min we can open the problem up to the team and do a mob


## The Project 
![](https://i.imgur.com/ZcZZ3AL.jpg =300x400)![](https://i.imgur.com/pcK7QkY.jpg =300x400)


### Features & APIs 

[postcode API](https://postcodes.io/)

Autocomplete dropdown:
https://www.w3schools.com/howto/howto_js_autocomplete.asp

Lsiten to input value change: 
https://stackoverflow.com/questions/26946235/pure-javascript-listen-to-input-value-change



### Task List

#### Day 1
- [x] Deploy to Heroku as a group (+ link to our repos)
- [x] App architecture mock up
- [x] Set up skeleton files
- [x] Agree on file structure for server side code

#### Day 2
- [ ] Decide on new task list + distribute to pairs
- [ ] Access object from server side and populate dom dropdown 
    - [ ] Event listener on key_press and re query the object
    - [ ] Use query string to to concatante to longer query string and parse in order to return updated object data
    - [ ] 
- [ ] Create pure functions + tests
- [ ] Create dom functions 
- [ ] CSS Styling
- [ ] Put in favicon
- [ ] Ensure file structure is good and maintainable (continues to work)
- [ ] Keep an eye on Heroku deployment 
- [ ] Keep Readme updated



### Requirements
* website that enables users to quickly find and select words from a list of suggestions, as they type.
* The list is dynamically generated from a pre-populated list of values (i.e. a dictionary file), leveraging searching and filtering.
* A large data file is required to search through - consider the best data structure for this (e.g. .txt or .json).
* Consider how implementation affects user experience and web performance (e.g. time to load and search through the data file).

### Testing and deployment
* We expect back-end testing using tape (test as many components as you can) and basic front-end testing. Please note that we expect tests on pure functions and not on the router or the DOM.

* Host your project on heroku, see resource.

* Use module.exports and require to break a single large server file into smaller modules.

* Consider what would be a good server file structure based on what we have discussed over the week.

### Strech Goals
* using bodyparse / html autocomplete
* API call to postcodes.io

