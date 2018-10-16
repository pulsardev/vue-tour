#!/bin/bash

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
pwd

npm install
npm run test
npm run build

rm -rf ./docs/
cd ./demo/

npm install
npm run test:e2e
npm run build

mv ./dist/ ../docs/
cd ../
cp ./public/demo.html ./dist

echo "Finished Deployment!"
