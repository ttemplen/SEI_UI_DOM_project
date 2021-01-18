function openNav() {
    document.getElementById("mySidepanel").style.width = "150px";
  }
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }



let url ='https://foodish-api.herokuapp.com/api/images/burger'
let response;
  function getBurger(){
    fetch(url)
    .then (response =>response.json())
    .then(json => {
        document.querySelector('.foodImage').src = json.image;
  });
  
}
getBurger();

let url2 ='https://foodish-api.herokuapp.com/api/images/pizza'
let response2;
  function getPizza(){
    fetch(url2)
    .then (response2 =>response2.json())
    .then(json => {
        document.querySelector('.foodImage').src = json.image;
  });
}
getPizza();


let url3 ='https://foodish-api.herokuapp.com/api/'
let response3;
  function getFood(){
    fetch(url3)
    .then (response3 =>response3.json())
    .then(json => {
        document.querySelector('.foodImage').src = json.image;
  });
}
getFood();

let url4 ='https://foodish-api.herokuapp.com/api/images/biryani'
let response4;
  function getBiryani(){
    fetch(url4)
    .then (response4 =>response4.json())
    .then(json => {
        document.querySelector('.foodImage').src = json.image;
  });
}
getBiryani();