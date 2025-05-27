# Step 1: Use Node.js image to build the React app
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app (output goes to /app/build)
RUN npm run build

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy built React files from previous step to Nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
