#!/bin/bash

echo "==== Start deployment... ==== "
cd c:/Users/HP/Documents/projects/guide/test-info
echo $pwd
#cd C:\Users\HP\Documents\projects\guide\test-info || { echo "Directory not found"; exit 1; }
echo "==== Pulling latest changes... ==== "
git pull origin main
echo "==== Installing dependencies... ==== "
npm install
echo"==== RUNNING APP ==== "
node index.js
#pm2 start app.js --name "your-app-name"

echo "Deployment finished"