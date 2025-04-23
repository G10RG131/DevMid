#!/bin/bash
LOG_FILE="/home/sha8sha/deployment/app_health.log"
if /usr/bin/curl -s --head http://localhost:3000 | grep "200 OK" > /dev/null; then
    echo "$(date): App is running." >> "$LOG_FILE"
else
    echo "$(date): App is NOT running!" >> "$LOG_FILE"
fi