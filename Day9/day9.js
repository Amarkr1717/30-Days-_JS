//DAY 9 : DOM Manupulation
//1. Selecting and manupuating element
//A . select an Html element by its id and change its text content.
function myChange(){
document.getElementById("head").textContent =" Chai or Code" ;
}

//b. select an html element by its class and change its background color.
function myChangeColor(){
    document.querySelector(".h11").style.background = "red";
}

//2. Creating and Appending Element.
//a. create a new div element with some text content and append it to the body.
function addDiv(){
    var newDiv = document.createElement("div");

    newDiv.textContent = "This is a new div";

    //Append the new div to the body
    document.body.appendChild(newDiv) ;
}

//b. create a new li element and add it to the existing ul element.
function addNewItem(){
    var newLi = document.createElement("li");

    newLi.textContent = "new Item";

    var ul = document.getElementById("myList");

    ul.appendChild(newLi);
}

//3.Removing Element
//a. select an Html element and remove it to from the DOM.
function removeItem(){
    var ul = document.getElementById("myList");

    ul.remove();

    //b.remove the last child of a specific HTML element
    
    

}

//b.remove the last child of the specific html element
 function removeLast(){
    var ul = document.getElementById("myList");

    if(ul.hasChildNodes()){
        ul.removeChild(ul.lastChild);
    }

 }

 //4.Modifying attributes and classes
 //a . select an html element and change one of its attributes.
 function changeAttribute(){
    var img = document.getElementById("image")

    img.setAttribute('src' , 'Day9/images.jpeg')
 }


 //5. Event Handling
 //a.Add a click event listerner to a button that changes the text content of a paraGraph.
  document.getElementById('myButton').addEventListener('click',()=>{
    document.getElementById('myParagraph').textContent = 'paragraph is changed ';
  })


  //b.add a mouseover eventlistener to an element that changes its border color.

document.getElementById('myButtons').addEventListener('click',()=>{
    document.getElementById('myParagraphs').style.background = "red";
  })

