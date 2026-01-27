#!/bin/bash

echo "=== PRECISE METHOD - Production Deployment Script ==="

# Build the application
echo "Building application..."
npm ci
npm run build

# Run database migrations
echo "Running database migrations..."
npm run db:push

# Start the production server
echo "Starting production server..."
npm run start
