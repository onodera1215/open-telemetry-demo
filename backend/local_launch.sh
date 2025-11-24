#!/bin/bash

cd /app

echo "start npm ci..."
npm ci

echo "start prisma migrate deploy..."
npx prisma migrate deploy 

echo "start prisma generate..."
npx prisma generate 

echo "start build..."
npm run build

echo "start npm start..."
npm start