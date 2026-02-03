
# Image de base
FROM php:8.3-fpm-alpine

# Installation des dependances systeme
RUN apk add --no-cache \
    git \
    unzip \
    libzip-dev \
    libpq-dev \
    icu-dev \
    oniguruma-dev

# Installation des extensions PHP

RUN docker-php-ext-install \
    pdo \
    pdo_pgsql \
    zip \
    intl \
    opcache \
    mbstring

# Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer 


# Configuration du repertoire de travail
# Toutes les commandes suivantes (et docker exec) partiront de /var/www/html
# C'est ici que le code Symfony sera monte
WORKDIR /var/www/html

# Configuration des permissions
# Par defaut, les fichiers appartiennent a root dans Docker
# On cree un utilisateur "www-data" avec les memes UID/GID que sur l'hote
# Cela evite les problemes de permissions quand Symfony ecrit des fichiers
# (cache, logs, uploads, etc.)
RUN chown -R www-data:www-data /var/www/html

# Exposition du port
# PHP-FPM ecoute sur le port 9000 par defaut
# Nginx enverra les requetes PHP vers ce port
EXPOSE 9000

# Commande de demarrage
# php-fpm = Lance le processus PHP-FPM en premier plan
# Le container reste actif tant que ce processus tourne
CMD ["php-fpm"]
