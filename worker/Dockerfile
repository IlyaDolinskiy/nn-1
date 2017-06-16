FROM node:7

# Install nodemon
RUN npm install -g nodemon

# TODO: set proper USER

# Create worker directory
RUN mkdir -p /worker
WORKDIR /worker

# Install worker dependencies
COPY package.json /worker/
RUN npm install

# Bundle worker source
COPY . /worker

# Expose port
EXPOSE  80

# Run worker using nodemon
CMD ["npm", "start"]
