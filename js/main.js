//create curds

var siteName = document.getElementById('Site-Name');
var websiteURL = document.getElementById('Site-URL');
var submitBtn = document.getElementById('submitBtn');
var tableBody =document.getElementById('tableBody');
var visitbtn;
bookarry = [];

// localStorage.clear();
//localstorge

if (localStorage.getItem('allbooks') != null) {
    bookarry = JSON.parse(localStorage.getItem('allbooks'));
    displaybook(bookarry);
}

// addfunction
function bookMark() {
    var book = {
        Name: siteName.value,
        Websiteurl: websiteURL.value,
    }
    bookarry.push(book);
    localStorage.setItem('allbooks', JSON.stringify(bookarry));
    clearForm();
    displaybook(bookarry);
}

//regexfunction
var nameRegex = /^[A-Za-z_]{1,}$/

function isNameValid(){
    if(nameRegex.test(siteName.value)){
        return true;
    }else
    return false;
}

var urlRegex = /^(https:\/\/)?(www\.)[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/
function isUrlValid(){
    if(urlRegex.test(websiteURL.value)){
        return true;
    }else
    return false;
}
siteName.onkeyup =function(){
    if( isNameValid() && isUrlValid()){
        submitBtn.removeAttribute("disabled");
    }else
    submitBtn.disabled ="true";
}

websiteURL.onkeyup =function(){
    if( isNameValid() && isUrlValid()){
        submitBtn.removeAttribute("disabled");
    }else
    submitBtn.disabled ="true";
}

// clearfunction
function clearForm() {
    siteName.value = '';
    websiteURL.value = '';
}
//displayfunction

function displaybook(bookarry) {
    var cartona = ``;

    for (var i = 0; i < bookarry.length; i++) {
        var loop = i + 1;
        cartona += `
        <tr>
            <td>${[loop]}</td>
            <td>${bookarry[i].Name}</td>
            <td><a href="${bookarry[i].Websiteurl}" target="_blank"><button class="bt2 rounded-2"><i class="fa-solid fa-eye pe-2 btn-visit"></i>Visit</button></a></td>
            <td><button onClick="deletBook(${i});" class="bt3 btn-delete rounded-2"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
        `
    }
    document.getElementById('tableBody').innerHTML = cartona;

}



//deletefunction//splice
function deletBook(deletindex) {
    bookarry.splice(deletindex, 1);
    localStorage.setItem('allbooks', JSON.stringify(bookarry));
    displaybook(bookarry);
}

