window.onload = () => {
  let seacrh = document.getElementById("search");
  
  seacrh.addEventListener("focus", () => {
    let searchInput = document.getElementById("searchInput");
    searchInput.checked = true;
  });
  let checkboxMenu = document.getElementById("checkboxMenu")
  window.onresize = ()=>{
    if(window.innerWidth >767 && (checkboxMenu.checked = true)){
      checkboxMenu.checked = false;
    }else{
      return
    }
  }
};
