# RabbitMQ

## RabbitMQ Instance with Docker

First, let’s pull the RabbitMQ docker image

```
docker pull rabbitmq:3-management
```

Map port 15672 for the management web app and port 5672 for the message broker

```
docker run --rm -it -p 15672:15672 -p 5672:5672 rabbitmq:3-management
```

* Management Web app: http://localhost:15672
* Username: `guest`
* Password: `guest`