### How to run the app using docker

- build docker image : `docker build -t node-app:0.0.1 .`
- run docker image : `docker run --name=my-node-app --rm -p8089:8081 node-app:0.0.1`
- Opne the browser and go to : `http://localhost:8089`

#### Some useful docker commands : 
- delete a container : `docker rm -f <container_name>`
- enter on the container with shell mode : `docker exec -ti <container_name> /bin/sh`

To be continued..