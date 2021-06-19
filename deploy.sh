#!/bin/bash

git branch -f master
git checkout master
git reset --hard origin/develop
npm run export
cp -r out/* .
touch .nojekyll
git add -A .
git commit -a -m 'chore: deploy new production version'
git push origin master --force
git checkout develop