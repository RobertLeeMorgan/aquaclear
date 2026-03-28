# ---------- STAGE 1: Build ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (dev + prod)
RUN npm ci

# Copy source
COPY src ./src
COPY tsconfig.json ./

# Build TypeScript
RUN npm run build

# ---------- STAGE 2: Production ----------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy only the dist folder and package.json / package-lock.json
COPY --from=build /app/dist ./dist
COPY --from=build /app/src/data ./dist/data
COPY --from=build /app/public ./public

COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev --omit=optional

# Expose port
EXPOSE 5000

# Start the app
CMD ["node", "dist/index.js"]