#!/bin/bash

cd /app

echo "start npm ci..."
npm ci

echo "start build..."
npm run build

echo "start npm start..."
npm start