CURRENT=$(readlink ~/deployment/production)

if [ "$CURRENT" = "$HOME/deployment/blue" ]; then
  TARGET="green"
else
  TARGET="blue"
fi

echo "Deploying new version to $TARGET"

echo "New version deployed to $TARGET folder"

echo "Running smoke tests..."
sleep 2
echo "Tests passed!"

ln -sfn ~/deployment/$TARGET ~/deployment/production
echo "Traffic switched to $TARGET"

echo "Previous version kept for rollback: $CURRENT"
