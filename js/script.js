function ReadMore() {
  // Récupérer les éléments DOM nécessaires
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var lang = document.documentElement.lang;

  // Vérifier que les éléments DOM existent
  if (dots && moreText && btnText) {
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
}

function myMenu() {
  // Récupérer l'élément du menu
  var x = document.getElementById("Menu");

  // Vérifier que l'élément DOM existe
  if (x) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}
