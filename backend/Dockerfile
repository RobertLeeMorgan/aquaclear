# ---------- STAGE 1: Build ----------
FROM node:20-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build TypeScript
RUN npm run build

# ---------- STAGE 2: Production ----------
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package files and dist folder from build stage
COPY package*.json ./
COPY --from=build /app/dist ./dist

# Install only production dependencies
RUN npm ci --omit=dev

# Expose the app port (change if needed)
EXPOSE 5000

# Start the app
CMD ["node", "dist/index.js"]
