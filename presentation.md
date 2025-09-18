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

## 📦 Installation

1. Ouvrir le Chrome Web Store sur Google Chrome
2. Rechercher l'extension "Anatole"
3. Cliquer sur installer

**Note** : A l'installation de l'extension, une page html s'ouvre dans le navigateur. Cette page rappelle notamment le prix des diifférents timbres fiscaux et les principaux sites web officiels pour les démarches administratives.

Lien vers la page du Chrome Web Store : https://chromewebstore.google.com/detail/anatole/bgmplhpmpclongfibkibadpffbppocdg?authuser=0&hl=fr

## 🛠️ Personnalisation

- La liste des sites officiels est définie dans `trustedDomains` (dans `content.js`).
- Les mots-clés de recherche sont définis dans `keywords`.

## 📌 À venir

- Badge visuel à côté des liens officiels
- Option de signalement de sites suspects

## 👨‍💻 Auteur

Développé par Samuel BOULLARD, passionné par la transparence numérique et la protection des citoyens face aux arnaques administratives.



---

