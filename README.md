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
- Les liens ignorés sont listés dans `excludedPatterns`.

## 📌 À venir

- Interface de configuration utilisateur
- Badge visuel à côté des liens officiels
- Version mobile-friendly
- Option de signalement de sites suspects

## 👨‍💻 Auteur

Développé par Samuel BOULLARD, fondateur de Kracknet_Lab, passionné par la transparence numérique et la protection des citoyens face aux arnaques administratives.



---

