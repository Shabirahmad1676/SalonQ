# 1. Use a lightweight Node.js image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy only the package files first (this makes future builds much faster!)
COPY package*.json ./

# 4. Install all the React dependencies
RUN npm install

# 5. Copy the rest of your SalonQ source code into the container
COPY . .

# 6. Expose port 5173 to the outside world
EXPOSE 5173

# 7. Start the Vite development server and expose it to the network
CMD ["npm", "run", "dev", "--", "--host"]