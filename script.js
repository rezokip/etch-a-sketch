const playgroundContainer=document.querySelector('#playground-container')

const layoutButton =document.querySelector('#layout-button')

const colorButton =document.querySelector('#color-button')
// write function for getting the grid layout
  // loop as many times as the user choice 
    //create everytime an new div element
    // append the div element to playgroundContainer
  // style the gridTemplateColumns of the playGroundcontainer to repeat(choice, 1fr)   

 let choosenColor ="red" 


function getGridLayout (choice){
  if(choice<=100&&choice>=2){
    for(i=0;i<(choice*choice);i++){
      div=(document.createElement('div'))
      playgroundContainer.append(div)
      div.classList.add('grid-element')
      div.addEventListener('mouseover', function(e){
        this.style.backgroundColor = choosenColor
      })
      playgroundContainer.style.gridTemplateColumns= `repeat(${choice}, 1fr)` 
    } 
    
  }
 
  
}


layoutButton.addEventListener('click', function(){
  playgroundContainer.innerHTML = "";
  getGridLayout(prompt("choose between 2 and 100"))
})


colorButton.addEventListener('click', function(){
  choosenColor=(prompt("choose your color"))
  
})
 








/*getGridLayout(prompt("choose between 2 and 100"))*/


