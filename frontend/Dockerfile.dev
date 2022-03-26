FROM node
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
# CMD ["yarn", "start"] Currently using the cmd below due to an issue in CRA
CMD ["yarn", "start:fix:5"]