$(document).ready(init);

function init() {
  var items = document.querySelectorAll(".timeline li");
  var topBtn = document.getElementById("to-top");

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

    onScroll();
  }

  function onScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("to-top").style.display = "block";
    } else {
      document.getElementById("to-top").style.display = "none";
    }
  }

  function toTop() {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    return false;
  }

  //listen for events
  window.addEventListener("load", displayItem);
  window.addEventListener("scroll", displayItem);
  topBtn.addEventListener("click", toTop);
}