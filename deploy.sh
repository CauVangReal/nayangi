#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "Deploy"
git push -f https://github.com/CauVangReal/nayangi.git master:gh-pages

cd -