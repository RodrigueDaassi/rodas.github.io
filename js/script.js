function ReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var lang = document.documentElement.lang;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = lang === "fr" ? "Plus de nouvelles" : "More news";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = lang === "fr" ? "Réduire" : "Reduce";
    moreText.style.display = "inline";
  }
}

function myMenu() {
  var x = document.getElementById("Menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
