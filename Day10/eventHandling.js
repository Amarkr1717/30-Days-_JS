//10 . Event Handling

//1. Basic Event Handling.
//A. Add a click Event listener to a button that change the text content of a paragraph.
let para1 = document.getElementById("head");
document.getElementById("btn1").addEventListener('click' , ()=>{
  para1.textContent = "Event listener worked" ;
})

//b. add a double click event listener to an image that toggles its visibility.
document.addEventListener('DOMContentLoad', (event)=>{
  const image = document.getElementById('myImg');

  image.addEventListener('dbclick' , (event)=>{
    if(image.style.display === 'none')
      image.style.display ='block';

    else{
      image.style.display='none'
    }
  });
});

//2.Mouse Event
// a. add a mouseover event Listener to an element that change its background color.
para1.addEventListener('mouseover' ,()=>{
  para1.style.background = 'yellow'
})

//b. add a mouseout event Listener to an element that resets its background color.
para1.addEventListener('mouseout' ,()=>{
  para1.style.background = 'white';
})

//3.keyboard Event.
//a. Add a keydown event listener to an input field that logs the key pressed to the console.
document.addEventListener('DOMContentLoaded' , (event) =>{
  const input = document.getElementById('myInput');
 
  input.addEventListener('keydown' ,(event)=>{
    console.log(`key pressed : ${event.key}`);

  
  })
})

//b. Add a keyup event listener to an input field that display the current value in a paragraph.
document.addEventListener('DOMContentLoaded' , (event) =>{
  const input = document.getElementById('myyInput');
  const display = document.getElementById('displayText');
 
  input.addEventListener('keydown' ,(event)=>{
    
   display.textContent = input.value ;
  
  })
})

// 4. Event delegation
//a .  add a click eventListener to a list that logs the textContent of the clicked list item using event delegation.
    document.addEventListener('DOMContentLoaded' , (event)=>{
     const list = document.getElementById('myList') ;

     list.addEventListener('click' , (event)=>{
        if(event.target && event.target.nodeName === 'LI'){
          console.log(`list item clicked : ${event.target.textContent}`);
        }
     })
    })

    //b. add an event listener to a parent element that listen for events from dynamically added child element.
    document.addEventListener('DOMContentLoaded', (event) => {
      const parent = document.getElementById('parent');
      const list = document.getElementById('list');
      const addButton = document.getElementById('addButton');
  
      // Event listener on the parent element
      parent.addEventListener('click', (event) => {
          if (event.target && event.target.nodeName === 'LI') {
              console.log(`List item clicked: ${event.target.textContent}`);
          }
      });
  
      // Add new list items dynamically
      addButton.addEventListener('click', () => {
          const newItem = document.createElement('li');
          newItem.textContent = `Item ${list.children.length + 1}`;
          list.appendChild(newItem);
      });
  });
  
