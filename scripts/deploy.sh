#!/bin/sh
cd /home/quasiyoke/frontsexywebsite/
git fetch
git reset --hard origin/master
docker-compose up --build --remove-orphans -d
