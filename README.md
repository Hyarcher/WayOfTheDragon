# WayOfTheDragon
HTML, CSS and JavaScript for a calendar application called WayOfTheDragon.

To use this application you will need to have a command line or terminal application on your device. 
You will need to direct yourself into the folder called WayOfTheDragon by using 'cd...' .

- Run 'npm install'.
- Then type 'npm start'.
Now the server should be running on port 8080.

Go to your favourite web browser and type 'http://localhost:8080' 

The application has Google Authentication so you can sign in with your Google Account. If you do not have a Google Account you can create one using the 'create account' button after clicking the Google 'sign in' button.


Functionality:

- Login

The user logs into the application with a Google Account.


- Logout

The user logs out of the application.


- Create Account

The user creates an account using Google.


- View Calendar

The user can view a calendar after they log into the applciation. This calendar shows accurate dates fro each month between the years 1990 and 2030. The user can also jump between months using the 'next' and 'previous' buttons. The user can also select a month and/or year that they want to see by selecting the drop down menus.


- Creating an event

By clicking the 'Events' button on the ViewCalendarPage the user is redirected to the CreateEventPage. The user can create an event that saves below in the CreateEventPage but does not save when the user leaves or refreshes the page. Alternatively, the user can change the URL to 'http://localhost:8080/all' which will show data stored in the JSON file. Any data the user needs to store locally, they can save in this file by changing the URL to 'http://localhost:8080/add/string/integer' where string and integer are objects of the user's choice. To view this data the user enters 'http://localhost:8080/all' again. This displays the whole JSON file.


- Dark theme

By clicking the gear icon on the ViewCalendarPage the user is redirected to the ApplicationSettingsPage. The user can use the radio buttons to toggle between a default or dark theme. This only works for the ApplicationSettingsPage.


Enjoy the application :)
