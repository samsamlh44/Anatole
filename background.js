// Ce script s'exécute en arrière-plan lors de l'installation ou de la mise à jour de l'extension.
// Il permet d'initialiser l'extension et d'afficher des messages dans la console pour le suivi.

chrome.runtime.onInstalled.addListener(() => {
  console.log("ANTS Guard installé !");
});
