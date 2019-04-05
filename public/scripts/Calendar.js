let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next(){
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous(){
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump(){
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  const el = document.getElementById('greeting');
  el.textContent = '– Hello ' + profile.getName() + '!';
  //res.redirect('account');
  window.location="/account.html"

  callServer();
}
async function signOut() {
  await gapi.auth2.getAuthInstance().signOut();
  window.location="/index.html"
}

async function callServer() {
  const token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;

  const el = document.getElementById('server-response');
  el.textContent = 'loading…';

  const fetchOptions = {
    credentials: 'same-origin',
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token },
  };
  const response = await fetch('/api/hello', fetchOptions);
  if (!response.ok) {
    // handle the error
    el.textContent = "Server error:\n" + response.status;
    return;
  }

  // handle the response
  const data = await response.text();
  console.log('setting text content: ' + data);
  el.textContent = data;
}

// react to computer sleeps, get a new token; gapi doesn't do this reliably
// adapted from http://stackoverflow.com/questions/4079115/can-any-desktop-browsers-detect-when-the-computer-resumes-from-sleep/4080174#4080174
(function () {
  const CHECK_DELAY = 2000;
  let lastTime = Date.now();

  setInterval(() => {
    const currentTime = Date.now();
    if (currentTime > (lastTime + CHECK_DELAY*2)) {  // ignore small delays
      gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
    }
    lastTime = currentTime;
  }, CHECK_DELAY);
}());

function showCalendar(month, year){

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body");

    tbl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    let date = 1;
    for (let i = 0; i < 6; i++){

        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++){
            if (i === 0 && j < firstDay){
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth){
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
                    cell.classList.add("bg-info");
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }

        }
        tbl.appendChild(row);
    }
}
