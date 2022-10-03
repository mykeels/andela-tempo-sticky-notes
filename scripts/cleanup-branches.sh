#!/bin/bash

# removes unused local and remote git branches

if cat /proc/version | grep -e microsoft
then
    function git {
        cmd.exe /c "git $@"
    }
fi

git branch -d $(git branch --merged=dev | egrep -v "(^\*|master|dev|staging)")
git fetch --prune

if cat /proc/version | grep -e microsoft
then
    git branch -r --merged=dev | \
    egrep -v "(^\*|master|dev|staging)" | \
    sed -e 's/origin\///g' | \
    xargs -n 1 echo git push -d origin
else
    git branch -r --merged=dev | \
    egrep -v "(^\*|master|dev|staging)" | \
    sed -e 's/origin\///g' | \
    xargs -n 1 git push -d origin
fi