# Stage 1: Build Vite React project
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code and public assets
COPY . .

# Build production assets
RUN npm run build

# Stage 2: Serve with lightweight Nginx on port 8080 (Cloud Run)
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 8080 for Google Cloud Run
EXPOSE 8080

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
