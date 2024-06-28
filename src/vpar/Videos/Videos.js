var ListURL = [];
var CurrentURL = 0;
document.addEventListener("DOMContentLoaded", function (e) {
  var media = document.getElementById("myVideo");
  // Playing event
  media.addEventListener("playing", function () {
    console.log("Playing event triggered");
  });
  // Pause event
  media.addEventListener("pause", function () {
    console.log("Pause event triggered");
  });
  // Événement lorsque la vidéo se termine
  media.addEventListener("ended", function () {
    console.log("La vidéo est terminée !");
    CurrentURL += 1;
    if (CurrentURL >= ListURL.length) CurrentURL = 0;
    changeSource(ListURL[CurrentURL]);
  });
});

/*
this.registerEvent("volumechange", this.GetVideoId(Index), cur, this.EventVolumeChangeMedia); 
this.registerEvent("timeupdate", this.GetVideoId(Index), cur, this.EventTimeUpdateMedia); 
this.registerEvent("ended", this.GetVideoId(Index), cur, this.EventEndedMedia); 
this.registerEvent("input", this.GetSliderId(Index), cur, this.InputSliderMedia);
*/

// Attendez que le document HTML soit complètement chargé
document.addEventListener("DOMContentLoaded", function (e) {
  // Créez une instance de XMLHttpRequest pour effectuer une requête AJAX
  var xmlhttp = new XMLHttpRequest();
  var url = "./Videos.json"; // Définissez l'URL du fichier JSON

  // Définissez la fonction à appeler lorsque l'état de la requête change
  xmlhttp.onreadystatechange = function () {
    // Vérifiez si la requête est terminée et a renvoyé une réponse valide (statut 200)
    if (this.readyState == 4 && this.status == 200) {
      // Analysez le contenu de la réponse en tant qu'objet JSON
      var myArr = JSON.parse(this.responseText);
      myFunction(myArr); // Appelez la fonction myFunction avec myArr en argument
    }
  };
    //Les boutons
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");

  previousButton.addEventListener("click", () => {
    console.log("Bouton précédent cliqué");
    CurrentURL -= 1;
    if (CurrentURL < 0) CurrentURL = 0;
    changeSource(ListURL[CurrentURL]);
  });

  nextButton.addEventListener("click", () => {
    console.log("Bouton suivant cliqué");
    CurrentURL += 1;
    if (CurrentURL >= ListURL.length) CurrentURL = 0;
    changeSource(ListURL[CurrentURL]);
  });


  // Ouvrez une requête GET asynchrone vers l'URL spécifiée
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  // Définissez la fonction myFunction pour itérer à travers le tableau et afficher les éléments
  function myFunction(arr) {
    var out = "";
    var i;
    ListURL = [];
    for (i = 0; i < arr.List.length; i++) {
      console.log(arr.List[i]); // Affichez chaque élément dans la console
      ListURL.push(arr.List[i].URL);
    }
    CurrentURL = 0;
    changeSource(ListURL[CurrentURL]);
  }
});

function changeSource(url) {
  var video = document.getElementById("myVideo");
  video.src = url;
  video.play();
}


