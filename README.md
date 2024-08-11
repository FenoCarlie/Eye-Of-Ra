# Eye Of Ra

**Eye Of Ra** est une application complète développée avec le stack MERN, intégrant divers services pour un serveur local. Le projet vise à créer une solution tout-en-un incluant des fonctionnalités de stockage en nuage, streaming de médias, gestion des utilisateurs, et plus encore.

## Fonctionnalités

- **Drive Service**: Stockage et gestion des fichiers similaires à Google Drive.
- **Streaming Service**: Plateforme pour le streaming de films et de musique depuis le serveur.
- **User Management**: Gestion des utilisateurs et authentification.
- **Notification Service**: Système de notifications pour les événements et alertes.

## Structure du Projet

```plaintext
EyeOfRa/
│
├── service/
│   ├── drive/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   ├── index.js
│   │   └── package.json
│   │
│   ├── streaming/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   ├── index.js
│   │   └── package.json
│   │
│   ├── user/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   ├── index.js
│   │   └── package.json
│   │
│   ├── media-management/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   ├── index.js
│   │   └── package.json
│   │
│   └── notification/
│       ├── src/
│       │   ├── controllers/
│       │   ├── models/
│       │   ├── routes/
│       │   ├── services/
│       │   ├── utils/
│       │   ├── index.js
│       └── package.json
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
│
├── config/
│   ├── env/
│   │   ├── development.env
│   │   ├── production.env
│   ├── docker-compose.yml
│   ├── nginx.conf
│
└── README.md
```
