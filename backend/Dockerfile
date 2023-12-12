FROM node:18.13.0
WORKDIR /
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]