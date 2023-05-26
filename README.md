## For Local Development

1. Clone this repository using :

```bash
git clone https://github.com/Lishan778/mc-status.git
```

2. Install package using npm :

```bash
npm install
```

3. Create `.env` file in the root folder and put this inside the file :

```bash
TOKEN = < DISCORD BOT TOKEN >
CHANNEL_ID = < CHANNEL ID WHERE U WANA IT TO DISPLAY STATUS>
SERVER_IP = < SERVER IP WITH PORT EXAMPLE 0.0.0.0:0000 >
```

4. Start local server :

```bash
node app.js or node .
```

### Docker
Docker image is available at [Docker Hub](https://hub.docker.com/r/shaandev/mc-status).

run the following command to pull and run the docker image.

```sh
$ docker pull shaandev/mc-status
$ docker run shaandev/mc-status
```

You can add `-d` flag to run the server in detached mode.

## Support This Project

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/shaanjp)

