FROM node:14-alpine

# Set working directory to /app
WORKDIR /app

# Copy app source
COPY . .

# Install client dependencies
WORKDIR /app/client
RUN npm i

CMD npm start