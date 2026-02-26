#!/bin/sh
#
# Script d'installation des git hooks Husky - M-Motors
#
# A executer UNE SEULE FOIS apres avoir clone le projet :
#   sh .husky/install.sh
#
# Pourquoi ce script ?
#   Node.js tourne dans Docker - le hook "husky" ne peut pas s'initialiser
#   automatiquement via "npm install" (git absent du container).
#   Ce script copie manuellement le hook dans .git/hooks/.
#

echo "Installation des git hooks Husky..."

if [ ! -d ".git" ]; then
  echo "Erreur : lancez ce script depuis la racine du projet (la ou se trouve .git/)"
  exit 1
fi

cp .husky/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit

echo "Hook pre-commit installe dans .git/hooks/pre-commit"
echo "Les verifications ESLint + TypeScript s'executeront avant chaque commit."
echo "(Le container Docker 'node' doit etre demarre : docker compose up -d node)"
