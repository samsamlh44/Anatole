[![Licence CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

# 🛡️ Extension Chrome — Vérification des sites administratifs

Cette extension Chrome a pour objectif de protéger les utilisateurs contre les sites non officiels qui proposent des démarches administratives (passeport, carte d'identité, carte grise, acte de naissance) en facturant des frais injustifiés.

## 🎯 Fonctionnalité principale

Lorsqu'un utilisateur effectue une recherche Google liée à une démarche administrative, l'extension affiche une **bulle d'information** au survol des liens présents dans les résultats :

- ✅ Si le lien mène vers un site officiel (ex. `ants.gouv.fr`, `service-public.fr`), la bulle indique que le site est reconnu et prend la couleur verte.
- ⚠️ Si le lien mène vers un site non officiel, la bulle avertit l'utilisateur du risque de frais supplémentaires et prend la couleur jaune.

## 🔍 Détection intelligente

- Activation uniquement sur les pages de recherche Google contenant des mots-clés comme :
  - `passeport`
  - `carte d'identité`
  - `carte grise`
  - `acte de naissance`
  - `permis de conduire`
  - `immatriculation`
  - `ANTS`
- Filtrage des liens internes à Google (images, actualités, pagination, etc.) et informatifs (ex. Wikipedia).

## 🧠 Technologies utilisées

- JavaScript (vanilla)
- API DOM pour l'injection dynamique
- Manifest V3 (Chrome Extension)

## 📦 Installation manuelle

1. Cloner ce dépôt ou télécharger les fichiers.
2. Ouvrir `chrome://extensions/` dans votre navigateur.
3. Activer le **mode développeur**.
4. Cliquer sur **"Charger l’extension non empaquetée"** et sélectionner le dossier du projet.
5. L’extension est maintenant active.

## 🛠️ Personnalisation

- La liste des sites officiels est définie dans `trustedDomains` (dans `content.js`).
- Les mots-clés de recherche sont définis dans `keywords`.

## 📌 À venir

- Déploiement de l'extension sur les principaux navigateurs : Mozilla Firefox et Microsoft Edge (Brave déjà fonctionnel puisqu'il utilise le Chrome Web Store)
- Fonctionnement de l'extension sur d'autres moteurs de recherche : Bing, Yahoo, DuckDuckGo

## Licence

> Ce projet est publié sous la licence Creative Commons BY-NC-SA 4.0.  
Le texte juridique officiel, en anglais, est disponible [ici](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode).\
La [traduction française](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr) est fournie à titre informatif.

## 👨‍💻 Auteur

Développé par Sam Sam, développeur indépendant et agent d'état civil.

Ce projet est né d'un constat, celui que les usagers sont confrontés régulièrement à des sites tiers leur facturant des frais supplémentaires lors de leurs démarches administratives en ligne.

[Contact](mailto:contact@samsamdev.fr) | [Site officiel](https://www.anatole-extension.fr)