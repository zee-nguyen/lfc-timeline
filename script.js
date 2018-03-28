(function() {
  var items = document.querySelectorAll(".timeline li");

  //check if element is in viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && 
    rect.left >= 0 && 
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  function displayItem() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  //listen for events
  window.addEventListener("load", displayItem);
  window.addEventListener("scroll", displayItem);
})();