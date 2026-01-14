#!/bin/bash

# Quick deployment script for GCP VM
# Usage: ./deploy.sh

echo "🚀 Building Docker image..."
docker build -t mada-portfolio:latest .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📦 Starting container..."
    docker-compose down 2>/dev/null
    docker-compose up -d
    echo "✨ Portfolio is now running on http://localhost:3000"
    echo "📋 View logs with: docker logs -f mada-portfolio"
else
    echo "❌ Build failed!"
    exit 1
fi
