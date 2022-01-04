
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




