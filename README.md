Simple template for typescript telegram bot with PostgreSQL database and Docker.

### Preparations 

- Get telegram bot key from [`@BotFather`](https://core.telegram.org/bots#6-botfather) in telegram.
- Add key as env variable called 'BOT_TOKEN'.

### Run image

```sh
docker-compose up
```

### Run prod image

```sh
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
