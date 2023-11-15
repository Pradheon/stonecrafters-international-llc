function toggleMenu() {
  let navMenu = document.getElementById("nav-menu-wrapper");
  let links = document.getElementById("nav-items");
  let expand = document.getElementById("expand");
  let collapse = document.getElementById("collapse");

  if (links.style.display === "flex") {
    navMenu.style.background = "rgba(0, 0, 0, 1.0)";
    links.style.display = "none";
    expand.style.display = "block";
    collapse.style.display = "none";
  } else {
    links.style.display = "flex";
    links.style.flexDirection = "column";
    links.style.alignItems = "center";
    links.style.gap = "32px";
    expand.style.display = "none";
    collapse.style.display = "block";
  }
}

var $el, leftPos, newWidth;

$("#nav-items").append("<li id='magic-line'></li>");

var $magicLine = $("#magic-line");

$magicLine
  .width($(".active").width())
  .css("left", $(".active a").position().left)
  .data("origLeft", $magicLine.position().left)
  .data("origWidth", $magicLine.width());

$("#nav-items li")
  .find("a")
  .hover(
    function() {
      $el = $(this);
      leftPos = $el.position().left;
      newWidth = $el.parent().width();

      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },
    function() {
      $magicLine.stop().animate({
        left: $magicLine.data("origLeft"),
        width: $magicLine.data("origWidth")
      });
    }
  );