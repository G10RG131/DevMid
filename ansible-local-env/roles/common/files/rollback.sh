#!/bin/bash

CURRENT=$(readlink ~/deployment/production)

if [ "$CURRENT" = "$HOME/deployment/blue" ]; then
  ROLLBACK_TARGET="green"
else
  ROLLBACK_TARGET="blue"
fi

echo "Rolling back to $ROLLBACK_TARGET"

ln -sfn ~/deployment/$ROLLBACK_TARGET ~/deployment/production
echo "Rollback complete - now pointing to $ROLLBACK_TARGET"
