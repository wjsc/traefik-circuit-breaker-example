https://doc.traefik.io/traefik/middlewares/circuitbreaker/


```
docker build -t fail-random ./server && docker-compose up

curl -XGET http://localhost:3000/hello -i


watch -n0.1 curl -H Host:fail-random.docker.localhost http://127.0.0.1 -i
ab -n1000 -c2 -H'Host:fail-random.docker.localhost' http://127.0.0.1/
```