
// resume generator
// wrong function ~ have to write function totally of codewithharry building notes app
//  function addmorewe(){
//    console.log("i am working")
//   let wefield = document.getElementsByClassName("wefield");
//  let html =  wefield;
//     html+= 
//       `<div>
//       <textarea type="text" class="form-control wefield mt-3"  placeholder="Enter here" rows="3"></textarea>
//       </div>`;
      
//  let weobj = document.getElementById("we");
//  let weaddbutton =  document.getElementById("weaddbutton");
//   weobj.innerHTML = html ;
//  }

 // function for work experience
function  addmorewe(){
let newnode = document.createElement("textarea");
newnode.classList.add("wefield");
newnode.classList.add("form-control");
newnode.classList.add("mt-3");
newnode.setAttribute("rows", 3);
newnode.setAttribute("placeholder", "Enter here");


let weobj = document.getElementById("we");
let weaddbuttonob = document.getElementById("clickwe");
weobj.insertBefore(newnode, weaddbuttonob);
}

 //  function for academic qualification
function addmoreaq(){
  let newnode = document.createElement("textarea");
newnode.classList.add("aqfield");
newnode.classList.add("form-control");
newnode.classList.add("mt-3");
newnode.setAttribute("rows", 3);
newnode.setAttribute("placeholder", "Enter here");


let aqobj = document.getElementById("aq");
let aqaddbuttonob = document.getElementById("clickaq");
aqobj.insertBefore(newnode, aqaddbuttonob);

}

// to show  template page clicking on template nav
function showtemplates(){
 let cvform = document.getElementById("cv-form");
let cvtemplatepage = document.getElementById("cv-template");
 cvform.style.display = "none";
 cvformpage.style.display = "none";
 cvtemplatepage.style.display = "block";
}

// build cv on homepage
function buildcv(){
  let homepage = document.getElementById("cvformpage");
  let cvform = document.getElementById("cv-form");
 let cvtemplate = document.getElementById("cv-template");
  homepage.style.display = "none";
  cvform.style.display = "block";
  cvtemplate.style.display = "none";
}

//  to generate cv
function generatecv(){

  // name
let namefield = document.getElementById("namefield").value;
let namet1 = document.getElementById("nameT1")
let namet2 = document.getElementById("namet2")
namet1.innerHTML = namefield;
namet2.innerHTML = namefield;

// contact
document.getElementById("contactt").innerHTML = document.getElementById("contactfield").value;


document.getElementById("addresst").innerHTML = document.getElementById("addressfield").value;

document.getElementById("countryt").innerHTML = document.getElementById("countryfield").value;

document.getElementById("emailt").innerHTML = document.getElementById("emailfield").value;

document.getElementById("linkedint").innerHTML = document.getElementById("linkedfield").value;

document.getElementById("githubt").innerHTML = document.getElementById("githubfield").value;


      
      
      
      
