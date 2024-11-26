FROM node:18-alpine
WORKDIR /gallery/
COPY public/ /gallery/public
COPY src/ /gallery/src
COPY package.json /gallery/
COPY package-lock.json /gallery/
RUN npm install
EXPOSE 3978
CMD ["npm", "start"]