# IonicApp 🎵

**IonicApp** est une application mobile développée avec le framework **Ionic**, permettant la gestion d'une liste de musiques. Elle utilise l'API de **Spotify** pour effectuer des recherches de morceaux et inclut également une fonctionnalité de prise de photo.

---

## ✨ Fonctionnalités

### 🎧 Gestion des musiques
- Recherche de musiques via l'API Spotify en renseignant un **titre** et un **artiste** (optionnel).
- Affichage d'une liste de musiques correspondant aux critères de recherche.
- Ajout des musiques sélectionnées à une liste personnelle.
- Lecture de courts extraits audio via les liens fournis par l'API Spotify.

### 📸 Prise de photos
- Une page dédiée pour prendre des photos via l'appareil photo du téléphone.
- **Note :** Cette fonctionnalité est indépendante du reste de l'application.

### 🔒 Gestion des tokens d'accès
- L'application gère automatiquement la génération d'un nouveau **token d'accès** à l'API Spotify, car celui-ci expire toutes les heures.
- **Attention :** Les identifiants sensibles (**Client ID** et **Client Secret**) sont actuellement présents dans le code source.

**Difficulté à utilisé Firebase dans mon projet**.

---

## 🚀 Installation et exécution

### Prérequis
1. **Node.js** et **npm** installés sur votre machine.
2. **Ionic CLI** installé globalement :
   ```bash
   npm install -g @ionic/cli
