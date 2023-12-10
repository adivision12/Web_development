console.log("running");

document.querySelector('.cross').addEventListener("click",()=>{
    document.querySelector('.cross').classList.toggle('corssin');
})
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.hamburger').style.display='inline';
    document.querySelector('.cross').style.display='none';
  } else{
    document.querySelector('.cross').style.display='inline';
    document.querySelector('.hamburger').style.display='inline';
  }
})
document.querySelector('.cross').addEventListener("click",()=>{
    
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
  
            document.querySelector('.cross').style.display='none';
          } 
   
})