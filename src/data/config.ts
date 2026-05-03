// Edit este archivo al fork. Es la SOLA fuente que cambia por app.
import type { AppConfig } from './app-config';

export const config: AppConfig = {
  name: 'AppName',
  tagline: 'Tagline corto que captura propuesta',
  description: 'Descripción 1-2 frases hero. Concreto, sin marketing fluff.',
  longDescription: 'Párrafo qué hace la app, para quién, qué problema resuelve. ~200 chars.',
  packageId: 'com.geosdata.appname',
  domain: 'appname.geosdata.com',

  primaryColor: '#10b981',
  accentColor: '#34d399',
  iconLetter: 'A',

  features: [
    { icon: '✨', title: 'Feature 1', description: 'Qué hace.' },
    { icon: '🎯', title: 'Feature 2', description: 'Qué hace.' },
    { icon: '🌎', title: 'Feature 3', description: 'Qué hace.' },
  ],

  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.geosdata.appname',
  playStoreReady: false,

  contactEmail: 'contacto@geosdata.com',
  privacyEffectiveDate: 'Mayo 2026',
  thirdParties: ['Firebase', 'AdMob', 'Cloudflare R2'],
  dataCollected: ['Device ID anónimo (AdMob)', 'Crash reports'],
  publisher: 'GeosData',
  publisherUrl: 'https://geosdata.com',
};
