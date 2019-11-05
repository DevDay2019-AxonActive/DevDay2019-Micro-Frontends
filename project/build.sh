#!/usr/bin/env bash

for var in "$@"
do
    cd $var
    npm run build
    echo "Build ${var} done"
    cd ..
done