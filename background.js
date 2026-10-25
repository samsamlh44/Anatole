// Ce script s'exécute en arrière-plan lors de l'installation ou de la mise à jour de l'extension.
// Il permet d'initialiser l'extension et d'afficher des messages dans la console pour le suivi.

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") { // Si nouvelle installation, ouverture de la page pédagogique welcome.html
    chrome.tabs.create({ url: "welcome.html" });
    console.log("Anatole a été installé pour la première fois.");
  } else if (details.reason === "update") { // Si mise à jour, ouverture du changelog pour informer l'utilisateur des nouveautés
    chrome.tabs.create({ url: "changelog.html" });
    console.log("Anatole a été mis à jour. Consultez le changelog pour les nouveautés.");
  }
});