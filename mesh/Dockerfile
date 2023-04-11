FROM node:19-alpine
WORKDIR /usr/app
ENV PATH /usr/app/node_modules/.bin:$PATH
COPY . .
RUN npm i 
# ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD ["npm" ,"run", "start"]

# keep container running
