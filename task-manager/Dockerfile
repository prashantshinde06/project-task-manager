# Use Node.js Alpine for small image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the app
COPY . /app

# Set environment variable so dev server listens on all interfaces
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose the dev server port
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
