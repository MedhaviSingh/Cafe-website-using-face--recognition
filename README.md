# A cafe website using face recognition

## Inspiration
We all crave for different kind of food in our day-to-day lives based on our emotions. This inspired me to create a platform where we could get a suggestion like what kind of food we can order for a change.  


## What it does?
This JavaScript-based application uses face- recognition feature as to detect the face patterns using the device's camera and creates a coded pattern around the face. The emotion detector tells the users if their expression is a happy, neutral, sad or surprised one.

Then based on these emotions the website suggests you the type of food you can order to uplift your mood.

<img src="image/logo.webp"></img>

## Table of content

* Preview
* How it works?
* TechStack
* Development

## Preview
* Register page

  <img src="image/registered.png"></img>
* Login page 
  
  <img src="image/llogin.png"></img>
* Emotion Detection
  
  <img src="image/emotiond.png"></img>
* Website
  
  <img src="image/nweb1.png"></img>

  <img src="image/nweb2.png"></img>

* Order placed
  
  <img src="image/porder.png"></img>

## How it works?

Whenever A new user visits the website, they will have to register as a new user and their data will be saved in the firebase database. So, if they visit the site again they just have to login to get started. 

After login the emotion detection window will open to record your emotions as happy, sad, surprise or neutral one. 

Based on your emotions the new page will open which will suggest you some kind of food to uplift your mood. Then you can select your choice of food and can order it.

<img src="image/flowchart.png"></img>

## TechStack

### The key technologies used:
I am using face-api.min.js for the face detection. And firebase for storing the data of registered users.

<img src="image/tech.png"></img>

## Development

### Configuration

* To run this website start with register.html file.
  
### Setup
1. Run npm install in the root directory to install all necassary dependencies.
