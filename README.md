``` bash
docker network create --driver bridge --subnet 172.20.0.0/16 soil-net
```


backend:
build: .docker/backend
image: node:18
container_name: soil-backend
restart: always
networks:
- soil-net
- default
ports:
- "3000:3000"