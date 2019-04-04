'use strict';


let movies = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev)=>{
        ev.preventDefault();  //to stop the form submitting
        let movie = {
            id: Date.now(),
            event: document.getElementById('event').value,
            location: document.getElementById('location').value,
            time: document.getElementById('time').value,
            description: document.getElementById('description').value
        }

        //console.log(JSON.stringify(movie));
        //return;

        postData('/movies',movie);
        //saving to localStorage
        //localStorage.setItem('MyMovieList', JSON.stringify(movies) );
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

    return await response.json();
}
