cd C:\Users\HP\Documents\projects\guide\test-info
write-host "==== GIT PULL ==== "
git pull origin main
write-host "==== INSTALLING PACKAGES ==== "
npm i
write-host "==== RUNNING APP ==== "
node index.js