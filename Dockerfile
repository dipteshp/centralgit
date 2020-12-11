FROM node:14-alpine
WORKDIR /code
COPY . /code
RUN npm install
ENV PORT=8080
ENV NODE_ENV=production
EXPOSE 8080
CMD [ "npm", "start" ]