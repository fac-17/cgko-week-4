# [Postcode Autocomplete](https://postcode-autocomplete.herokuapp.com/) :checkered_flag:

## Team   
[Tony](github.com/tonylomax):yum:  
[Christine](github.com/xIrusux):wink:  
[Gigi](github.com/gminova):relieved:  
[Francesca](github.com/frannyfra):grinning:  

## Aim :dart:

Our aim was to build a simple postcode autocomplete app using Node.JS, HTML and CSS.

## Group Mantra
1. Our focus this week is on everyone learning the most rather than having the most fabulous project
2. Pair programming - ensure everyone pairs up with everyone at least once
3. Use 20/20/20 - if a pair has not found an answer after 20 min we can open the problem up to the team and do a mob


## The Project 
<img src="https://i.imgur.com/ZcZZ3AL.jpg" width="400" height="600"> <img src="https://i.imgur.com/pcK7QkY.jpg" width="400" height="600">


### Features & APIs 

1. We use an autocomplete API [link](https://postcodes.io/)

2. Autocomplete dropdown:
https://www.w3schools.com/howto/howto_js_autocomplete.asp

3. Listen to input value change: 
https://stackoverflow.com/questions/26946235/pure-javascript-listen-to-input-value-change

4. Initially we set up a dummy JSON file and made an API call from the client side to our own backend dummy data. This was successful, however we were unable to make an API call from our server to the Postcodes API, hence we just enhanced our app by making the API call from client side to the Postcodes API.



### Task List

#### Day 1
- [x] Deploy to Heroku as a group (+ link to our repos)
- [x] App architecture mock up
- [x] Set up skeleton files
- [x] Agree on file structure for server side code

#### Day 2
- [x] Decide on new task list + distribute to pairs
- [x] Access object from server side and populate dom dropdown 
    - [x] Event listener on key_press and re query the object
    - [ ] Use query string to to concatante to longer query string and parse in order to return updated object data (irrelevant as inconsistent with app architecture)
- [ ] Create pure functions + tests (irrelevant as inconsistent with app architecture)
- [x] Create dom functions 
- [x] CSS Styling
- [ ] Put in favicon
- [x] Ensure file structure is good and maintainable (continues to work)
- [x] Keep an eye on Heroku deployment 
- [x] Keep Readme updated



### Requirements
* website that enables users to quickly find and select words from a list of suggestions, as they type.
* The list is dynamically generated from a pre-populated list of values (i.e. a dictionary file), leveraging searching and filtering.
* A large data file is required to search through - consider the best data structure for this (e.g. .txt or .json).
* Consider how implementation affects user experience and web performance (e.g. time to load and search through the data file).

### Strech Goals
- [x] API call to postcodes.io

### What we have learned

- there is a HTML5 <datalist> tag that is used to provide an "autocomplete" feature on <input> elements. Users will see a drop-down list of pre-defined options as they input data. (carefull! - cant be styled)
https://www.w3schools.com/tags/tag_datalist.asp

- We now understand the connection between srever, router and handler functions

- How the backend and frontend communicate 

- That API calls are best placed on the backend, which 

- How to deploy to Heroku! 

- How usefull mobs are with unfamiliar topics 

- Lsiten to input value change: 
https://stackoverflow.com/questions/26946235/pure-javascript-listen-to-input-value-change


### Challenges 

- Making an API call from the backend is hard!

- Maximal confusion on how back and front-end communicate

![](https://i.imgur.com/wkOs9Zl.jpg)




