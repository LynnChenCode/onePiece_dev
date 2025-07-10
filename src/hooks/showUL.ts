export function showUl(IdName:string){
    let ul:HTMLElement|null  =document.getElementById(IdName);
    if(ul!==null){
      if( ul.style.display==="none"){
        ul.style.display="block"
       }else{
         ul.style.display="none"
       } 
    }
 
 }