
# Use an official Node.js runtime as a parent image (specify the version)
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on (make sure it matches your app's port)
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
