# ---------- STAGE 1: Build ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (dev + prod)
RUN npm ci

# Copy source
COPY . .

# Build TypeScript
RUN npm run build

# ---------- STAGE 2: Production ----------
FROM node:20-alpine

WORKDIR /app

# Copy only the dist folder and package.json / package-lock.json
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Expose port
EXPOSE 5000

# Start the app
CMD ["node", "dist/index.js"]