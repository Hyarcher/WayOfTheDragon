'use strict';

//events.js script that was design to implement the postData() function for app.post on server.js.
//implemented using dummy data for a movie format, added data to JSON but
//unfortunately the app.post was unsuccessful as data was continuously overwritten and not stored efficiently

let movies = [];
// example {id:1592304983049, title: '...', year: ...}
const addMovie = (ev)=>{
        ev.preventDefault();  //to stop the form submitting
        let movie = {
            id: Date.now(),
            event: document.getElementById('event').value,
            location: document.getElementById('location').value,
            time: document.getElementById('time').value,
            description: document.getElementById('description').value
        }


        postData('/movies',movie);
        //calling the function with app.post refernece
}
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', addMovie);
});


async function postData(url = ``, data = {}) {
    //console.log(JSON.stringify(data));
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

    return await response.json(); //response is required
}
