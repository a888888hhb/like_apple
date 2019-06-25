window.onload = () => {
  let seacrh = document.getElementById("search");
  let checkboxMenu = document.getElementById("checkboxMenu")
  
  seacrh.addEventListener("focus", () => {
    let searchInput = document.getElementById("searchInput");
    searchInput.checked = true;
  });
  
  window.onresize = ()=>{
    if(window.innerWidth >767 && (checkboxMenu.checked = true)){
      checkboxMenu.checked = false;
    }else{
      return
    }
  }
};
