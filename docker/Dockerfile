# This Dockerfile adapted from https://mherman.org/blog/dockerizing-a-react-app/
# and Client Explorer Dockerfile.

# At this moment, Node.js 14.16 LTS is recommended for most users.
#
# In future, as we scale up, we may want to use an Alpine base image, which would reduce
# the size of the image by about an order of magnitude and reduce the attack surface of
# the image as well.

FROM node:14.16

ADD . /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --quiet
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]