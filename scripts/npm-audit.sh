#!/bin/bash

function throw-error {
    STATUS=$?
    if [[ $STATUS -ne 0 ]]
    then
        echo "CI Failed"
        exit 1
    fi
}

if cat /proc/version | grep -e microsoft
then
    function npm {
        cmd.exe /c "npm $@"
    }
fi

npm audit --audit-level=high
throw-error
