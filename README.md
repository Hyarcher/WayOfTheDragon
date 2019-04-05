# WayOfTheDragon
HTML, CSS and JavaScript for a calendar application called WayOfTheDragon.

To use this application you will need to have a command line or terminal application on your device.
You will need to direct yourself into the folder called WayOfTheDragon by using 'cd...' .

- Run 'npm install'.
- Then type 'npm start'.
- The terminal will output "all set... please go to http://localhost:8080 in your chosen web browser".

the server will be running on port 8080.
Go to your favourite web browser and type 'http://localhost:8080'

The application has Google Authentication so you can sign in with your Google Account. If you do not have a Google Account you can create one using the 'create account' button after clicking the Google 'sign in' button.


Functionality:

- Login

The user logs into the application with a Google Account. Upon successful attempt user is Redirected to the ViewCalendarPage. If an Error occurs user is prompted to retry entering credentials or has the option to create an account.


- Logout

The user logs out of the application and is subsequently redirected back to the log in page. Session is terinated.


- Create Account

The user can create an account using the Google option upon sign in and is able to log in successfully once completed.


- View Calendar

The user is redirected to the calendar page after they log into the application. This calendar shows accurate dates from each month between the years 1990 and 2030. The user can also jump between months using the 'next' and 'previous' buttons. The user can also select a month and/or year that they want to see by selecting the drop down menus. The calendar scales to the appropriate size as the dates change.


- Creating an event

By clicking the 'Events' button on the ViewCalendarPage the user is redirected to the CreateEventPage. The user can create an event that saves below in the CreateEventPage but does not save when the user leaves or refreshes the page. Alternatively, the user can change the URL to 'http://localhost:8080/all' which will show data stored in the JSON file. Any data the user needs to store can be saved locally in a 'JSON' file by changing the URL to 'http://localhost:8080/add/string/integer' where string and integer are variables of the user's choice. upon successful attempt the page will display the data and a success status. If the user enters an event but not a time, they will be prompted to retry and add a relevant time.

To view this data the user enters 'http://localhost:8080/all' again which displays the data that is stored within the JSON file acting as a database and is permanent even when the user session ends and the server is terminated.


- Dark theme

By clicking the gear icon on the ViewCalendarPage the user is redirected to the ApplicationSettingsPage. The user can use the radio buttons to toggle between a default or dark theme. This only works for the ApplicationSettingsPage.

- Testing

Testing can be found within the Public/Testing folder.


Enjoy the application :)
