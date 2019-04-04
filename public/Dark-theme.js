function save() {
	var checkbox = document.getElementById("checkbox1");
    localStorage.setItem("checkbox1", checkbox.checked);
  var checkbox = document.getElementById("checkbox2");
    localStorage.setItem("checkbox2", checkbox.checked);
}

var checked = JSON.parse(localStorage.getItem("checkbox1"));
    document.getElementById("checkbox1").checked = checked;

var checked = JSON.parse(localStorage.getItem("checkbox2"));
    document.getElementById("checkbox2").checked = checked;

if (document.getElementById('checkbox1').checked){
    changeCSS('darkstyle.css', 0);
}else if (document.getElementById('checkbox2').checked) {
    changeCSS('style.css', 0);
}


function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
