# Project 2

## Project Description

My app is called Astronomy Picture of the Day or APOD, for short. It is an Astronomy app, that generates an "image of the day" that relates to Astronomy, from around the world. With each image, the app will provide a brief description of its significance and an explanation of what you are viewing. Users can select random APOD's from the past 5+ years or they can search a specific date, of their choosing. In addition, the user can select, "Where is the ISS". This feature provides the user with a static map, identifying where the International Space Station is, in real time.

![Screen Shot 2020-08-03 at 6 58 03 PM](https://media.git.generalassemb.ly/user/28784/files/84183100-d5bb-11ea-8b7a-cb76daef8ba9)

### Technologies Used

- ReactJS
- React Router
- Moment.js: For Datetime conversion
- Datepicker.js: For calendar functionality
- React-Youtube: to display the video URLS
- NASA's APOD API: Used to generate pictures/videos, as well as descriptions of photos from Astronomers around the world.
- Where the ISS At API: Lives tracks the location of the ISS and provides its current Latitude and Longitude coordinates.
- Mapquest reverse Geocoding map API: Allows users to reverse Geo-code, using latitude and longitude coordinates, to display a map.
- Github
- Visual Studio Code
- Heroku

### Getting Started

- Open the application in a browser
- Right at the home page, you will be able to see the "Astronomy Picture of the Day" along with a description of what you are seeing.
- If you are interested in viewing a random "Astronomy Picture of the Day", you can select the "Random Picture" button.
- If you are interested in viewing an "Astronomy Picture of the Day", from a specific date, you can click the "Select By Date". From there, a drop down calendar will open, allowing you to pick the date of your choosing.
- If you are interested in seeing the current location of the International Space Station, you can select "Where is the ISS". This will provide you with a small map, using its current coordinates, of where the space station is currently located.

## Editing the Application

- If you wish to make edits to this application, you can find instructions for forking here. https://help.github.com/en/github/getting-started-with-github/fork-a-repo

- You will need your own NASA API key https://api.nasa.gov/ and Mapquest API key https://developer.mapquest.com/

## User Stories

#### MVP Goals

- As a user, I want to see the APOD, with a description of what I am viewing and other relevant information.

- As a user, I want to be able to look up specific dates, to see what the APOD was, for that specific day.

- As a user, I want to be able to be able to easily navigate the screen, without getting confused.

#### Stretch Goals

- As a developer, I want to create a more dynamic search functionality, so that if you're interested in seeing a specific event, you can search for those specific pictures.

- As a developer, I want to incorporate a secondary API, that provides a realtime location of the International Space Station.

### Contribution

This is a solo project presented for evaluation and is not open for outside contributions at this time. However, if you have feature suggestions to improve the usability or functionality of the application, feel free to create an Issue on this GitHub repository. https://github.com/mpgasbarro/apod-app/issues
