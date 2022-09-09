Simple template for typescript telegram bot with PostgreSQL database and Docker.

### Preparations 

- Get telegram bot key from [`@BotFather`](https://core.telegram.org/bots#6-botfather) in telegram.
- Create ".env.dev" and ".env.prod" files at root (you can copy ".env.example" file).
- Add the "BOT_TOKEN" key to the generated files with the value received from @BotFather.

### Run image

```sh
docker-compose up
```

### Run prod image

```sh
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
