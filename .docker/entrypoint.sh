#!/bin/bash

npm cache clean --force
npm install -g npm@latest
npm install
npx prisma generate
npx prisma migrate dev --name init
npm uninstall bcrypt
npm uninstall @types/bcrypt
npm i bcrypt
npm i --save-dev @types/bcrypt
# npm run build
npm run dev