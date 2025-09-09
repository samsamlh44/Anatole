// Ce script s'exécute en arrière-plan lors de l'installation ou de la mise à jour de l'extension.
// Il permet d'initialiser l'extension et d'afficher des messages dans la console pour le suivi.

chrome.runtime.onInstalled.addListener(() => {
  console.log("Anatole !");

  // Ouvre la oage d'accueil pédagogique lors de l'installation de l'extension
  chrome.tabs.create({
    url: chrome.runtime.getURL("welcome.html")
  });;
});
