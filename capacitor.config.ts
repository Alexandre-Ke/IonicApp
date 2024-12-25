import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.musicplayer', // Remplacez par votre ID d'application réel
  appName: 'MusicPlayer', // Nom de votre application
  webDir: 'www', // Répertoire où vos fichiers web sont construits (par Angular/Ionic)
  bundledWebRuntime: false, // Ne pas utiliser le runtime web embarqué par Capacitor
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, // Désactive l'écran de démarrage (optionnel)
    },
    Media: {
      // Configuration pour les médias si applicable
      ios: {
        playInBackground: true, // Permet de jouer des médias en arrière-plan
        audioCategory: 'Playback', // Catégorie audio pour iOS
      },
      android: {
        playInBackground: true, // Lecture en arrière-plan pour Android
      },
    },
  },
  server: {
    androidScheme: 'https', // Assure l'utilisation de HTTPS pour Android
  },
};

export default config;
