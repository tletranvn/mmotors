# Image de base

FROM node:22-alpine

# Installation des outils necessaires

RUN apk add --no-cache git

# Repertoire de travail

# /var/www/html/frontend = Emplacement du code React
WORKDIR /var/www/html/frontend

# Exposition du port
# 5173 = Port par defaut de Vite (serveur de developpement)
# Ce port sera accessible depuis l'exterieur du container
EXPOSE 5173

# Commande par defaut
# En developpement, on lance le serveur Vite
# Alternative pour production : CMD ["npm", "run", "build"]
CMD ["sh", "-c", "npm install && npm run dev"]
