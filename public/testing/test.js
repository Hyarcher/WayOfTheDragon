// Sign in function
function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  const el = document.getElementById('greeting');
  el.textContent = '– Hello ' + profile.getName() + '!';
  //res.redirect('account');
  window.location="/account.html"

  callServer();
}

// Sign out function
async function signOut() {
  await gapi.auth2.getAuthInstance().signOut();
  window.location="/index.html"
}

// Next month function
function next(){
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

// Previous month function
function previous(){
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

// Jumo to year and/or month function
function jump(){
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}


////////////////////////////////////////////////////////////
/////////////////////// TESTS //////////////////////////////
////////////////////////////////////////////////////////////


QUnit.test( "hello test", function( assert ){
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "signing in", function( assert )){
  assert.ok(onSignIn(googleUser == true))
});
