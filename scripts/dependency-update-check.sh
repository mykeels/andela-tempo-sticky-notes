#!/bin/bash
# This program will compare the package-lock.json of the current branch with the dev branch,
# and only run "npm install" if there are changes
if [[ $(pwd) =~ .+sticky-notes ]]; then
  # cd to application route directory this allows the commiting/pushing from any part of the application
  cd ${BASH_REMATCH}

  current_branch=$(git rev-parse --abbrev-ref HEAD)

  # count the amount of lines changed in package-lock.json
  if [ $current_branch == "dev" ] || [ $current_branch == "master" ] || [ $current_branch == "staging" ]
  then
    amount_of_additions=$(git diff HEAD@{1} -- package-lock.json | grep "+  " | wc -l)
  else
    amount_of_additions=$(git diff origin/dev -- package-lock.json | grep "+  " | wc -l)
  fi

  # assume a single addition is a version bump
  if [ $amount_of_additions \> 1 ]; then
    echo "Your package-lock.json differs to origin/dev with" \
      $amount_of_additions \
      "additions"

    if cat /proc/version | grep -e microsoft
    then
      # useful if running bash in WSL, like @mykeels, and prefer Windows dev env
      echo "Now running an 'npm install' with cmd.exe"
      cmd.exe /c "npm install"
    else
      echo "Now running an 'npm install' with bash"
      npm install
    fi
  fi
fi