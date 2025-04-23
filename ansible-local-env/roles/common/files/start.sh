#!/bin/bash

cd /home/$USER/deployment/production || {
  echo "Failed to navigate to the production folder."
  exit 1
}

npm start &>/dev/null &

if [ $? -eq 0 ]; then
  echo "Application started successfully in the background."
else
  echo "Failed to start the application."
  exit 1
fi