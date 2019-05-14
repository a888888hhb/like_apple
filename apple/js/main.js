window.onload = () => {
  let seacrh = document.getElementById("search");
  
  seacrh.addEventListener("focus", () => {
    let searchInput = document.getElementById("searchInput");
    searchInput.checked = true;
  });
 
};
