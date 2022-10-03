#!/bin/bash


# Allowed merges are:
# * -> dev
# dev -> staging
# staging -> master

echo "Source Branch: $BITBUCKET_BRANCH"
echo "Destination Branch: $BITBUCKET_PR_DESTINATION_BRANCH"

if [ "$BITBUCKET_PR_DESTINATION_BRANCH" == "master" ] && [ "$BITBUCKET_BRANCH" != "staging" ]
then
    echo "Merge to master from $BITBUCKET_BRANCH is not allowed. Only staging branch can merge to master";
    exit 1;
elif [ "$BITBUCKET_PR_DESTINATION_BRANCH" == "staging" ] && [ "$BITBUCKET_BRANCH" != "dev" ]
then
    echo "Merge to staging from $BITBUCKET_BRANCH is not allowed. Only dev branch can merge to staging";
    exit 1;
fi
