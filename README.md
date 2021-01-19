# SEI_UI_DOM_project

Below is the commented HTML code for this project.:

<!-- <!DOCTYPE html>
<html lang="en">
    <head>
        <title>UI-Project,Making-you-hungry  :)</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <div id="mySidepanel" class="sidepanel">

        // Above is the side panel ID the JS code accesses this ID to set it's width to 150px when the side panel is open and 0px when the sidepanel is closed.

            //Below are examples of a links that do not have a value associted with them on page load.
            
             javascript:void(0) acts as a place holder with an undefined value until the appropriate function is called and a new value state is passed in.
            CloseNav, getBurger,getPizza are examples of the functions in JavaScript which pas in values.


            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
            <a href="javascript:void(0)"; onclick="getBurger();"  >Burgers</a>
            <a href="javascript:void(0)"; onclick="getPizza();"  >Pizza</a>
            <a href="javascript:void(0)"; onclick="getFood();"  >Random Food</a>
            <a href="javascript:void(0)"; onclick="getBiryani();"  >Biryani</a>
          </div>
          
            /// opens the sidepanel navagation bar

          <button class="openbtn" onclick="openNav()">☰ Image Menu</button>  
          <h2>Food Images</h2>
          <p>Enjoy the images of food!</p>
          // the below div is a location holder for the images being passed in from the JS functions called above.
          <div>
             <img class = "foodImage" src="">
          </div>
            
        <script src="script.js" ></script>
    </body>
</html> -->

<!-- Below follows the CSS with relavent notation. -->



<!-- // Below is a simple grid set up which faciltates the adaptive media for smaller screen sizes primarily. -->


Body { grid-area: title; }
footer { grid-area: footer; }

.container{
    display: grid;
    grid-template-areas:
    "title title title"
    "footer footer footer";
}  




body {
    font-family: Georgia, 'Times New Roman', Times, serif;
    background: linear-gradient(to left, rgb(7, 7, 7), rgb(97, 94, 94) 50%, #eee 75%, rgb(172, 169, 169) 95%);
  }


<!-- //style below for the side panel attributes. -->
  
  .sidepanel  {
    width: 0;
    position: fixed;
    z-index: 1;
    height: 100%;
    top: 0;
    right: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
<!--   
  //style below for the side panel attributes. -->
  .sidepanel a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  <!-- What it says  , sidepanel hover color -->
  .sidepanel a:hover {
    color: #f1f1f1;
  }
  <!-- The close button, the "x" for closing the sidepanel. -->
  .sidepanel .closebtn {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 36px;
  }
  <!-- /* style button for opening side button  */ -->
  .openbtn {
    top: 0px;
    right: 0px;
    position: fixed;
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;

  }

  <!-- The "open menue " button for the side panel. -->

  .openbtn:hover {
    background-color:#444;
  }

<!-- Then image properties for the images brought in from the API. -->

  .foodImage{
      width: 50%;
      text-align: center;
      padding: 10px 15px;
      border: 20px;
      
  }
 
  h2{
      text-align: center;
  }
  p{
      text-align: center;
  }
  
  <!-- The adaptive display features  for the website. -->

@media (max-width: 565px) {
  .container {
      grid-template-areas: 
      "title"
      "footer";
  }
   
 <!-- Smaller side panel for mobile display. -->
  .sidepanel  {
    width: 0;
    position: fixed;
    z-index: 1;
    height: 140px;
    top: 0;
    right: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 20px;
  }
  <!-- Smaller font to fit in the smaller side panel. -->
  .sidepanel a {
    padding: 5px 8px 8px 8px;
    text-decoration: none;
    font-size: 18px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  .sidepanel a:hover {
    color: #f1f1f1;
  }
  
  .sidepanel .closebtn {
    position: absolute;
    top: 0;
    right: 5px;
    font-size: 18px;
  }
  /* style button for opening side button  */
  .openbtn {
    top: 0px;
    right: 0px;
    position: fixed;
    font-size: 16px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 5px 8px;
    border: none;

  }
  <!-- Changed the food image for mobile display. -->
  .foodImage{
    width: 85%;
    padding: 5px 5px;
}

<!-- Changed text alignment and size for mobile display to allow the size pannel to fit. -->

h2{
  margin-top: 40px;
}

h2{
  text-align: left;
}

p{
  text-align: left;
}
  
}
 

 Below is the commented JavaScript code.

 function openNav() {
    document.getElementById("mySidepanel").style.width = "150px";
  }
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
<!-- //  The above two functions open and close the side-panel navagation panel.  The widths of the side panels are set directly in these functions for each state, open/closed.  -->

<!-- // link to the API images for Burgers, function  call the fetch commands.

Then the function retrievs the image path from th API.
This is repeated several times, varying the path and variables to make the different menue links valid.-->

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