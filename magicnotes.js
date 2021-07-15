


/* Hit the target */

 let notes=localStorage.getItem("notes");
    noteobj=JSON.parse(notes);
  if(noteobj!=null){
 showNotes();
 }
 else{  
 let htmladd=document.getElementById("notes");
  htmladd.innerHTML=`<h5 style="text-align:center">Nothing to Show no nodes are present</h5>`
}

// getting add button
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",addNote);
function addNote(e){
    e.preventDefault();
    let addText=document.getElementById("addText");
    let addTitle=document.getElementById("addTitle");
    let notes=localStorage.getItem("notes");
    if(notes==null){
      noteobj=[];
    }
    else{
       noteobj= JSON.parse(notes);
    }
    let myobj={
        title:addTitle.value,
        text:addText.value
    }
    noteobj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    addText.value="";
    addTitle.value="";
    showNotes();
}  

// function to show notes
function showNotes(){
    let notes=localStorage.getItem("notes");
    noteobj= JSON.parse(notes);
    let html="";
    if(noteobj!=null); {  
         noteobj.forEach(function(element,index){
               html+=`
               <div class="card select mx-2 my-2" style="width: 12rem;">
               <div class="card-body">
                 <h5 class="card-title">Note ${index+1}</h5>
                 <h5 class="card-title">${element.title}</h5>
                 <p class="card-text">${element.text}</p>
                 <button id="${index}" onclick="deleteNode(this.id)"  class="btn btn-secondary">Delete</button>
               </div>
             </div>
               `        
    });   
}

let htmladd=document.getElementById("notes");
if(noteobj.length!=0){
   htmladd.innerHTML=html;
}
else{
  htmladd.innerHTML=`<h5 style="text-align:center">Nothing to Show no nodes are present</h5>`
}
}

function deleteNode(index){
             //console.log("I m deleting"); 
             let notes=localStorage.getItem("notes");
                noteobj=JSON.parse(notes);
                noteobj.splice(index,1);
                localStorage.setItem("notes",JSON.stringify(noteobj));
                showNotes();
}

let search=document.getElementById("searchText")
search.addEventListener("input",searchNode);// input listner checks everyinput u enter

function searchNode(){
              let  inputval=search.value;
              let notecards=document.getElementsByClassName("select");       
               Array.from(notecards).forEach(function(element){
                 let number=element.getElementsByTagName("h5")[1].innerText;
                 let card=element.getElementsByTagName("p")[0].innerText; // our element is document now so use
                 console.log(card); 
                 if(card.includes(inputval) || number.includes(inputval)){    // element.get etc
                      element.style.display="block";
                 }
                 else{
                   element.style.display="none";
                 }
               }) ;
}