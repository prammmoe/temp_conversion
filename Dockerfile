# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# Expose port 5173 (default port for Vite preview)
EXPOSE 5173

# Command to run the Vite preview server
CMD ["npm", "run", "preview", "--host", "--port", "5173"]