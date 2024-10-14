# Spotify Live Detector

![Spotify Live Detector](https://img.shields.io/badge/Deployer%20Lib-v1.0.1-blue.svg)

Spotify Live Detector is a library to detect the song you are listening to in your spotify application on the computer and display it in OBS for your streams or your videos.

## Features

- **Detect song**: Every so often you determine that the active song is consulted.
- **Configuration file**: Configure your environment in 1 minute from the configuration file.

## Installation

First you must clone this project and install the following dependencies:

```bash
git clone https://github.com/angelovelandia/now-spotify-playing-obs.git
cd now-spotify-playing-obs
npm install
```

## Usage
To start using the project, you must first create the .env file in the root of the project with the following information:

```bash
OBS_HOST=
OBS_PORT=
OBS_PASSWORD=
NAME_GUI_TEXT_OBS=SpotifyNowPlaying
TIME=5000
```

Explicacion de variables:

- **OBS_HOST**: Your OBS WebSocket HOST.
- **OBS_PORT**: The PORT of your OBS WebSocket.
- **OBS_PASSWORD**: The PASSWORD of your OBS WebSocket.
- **NAME_GUI_TEXT_OBS**: The name of your text(GDI+) that you created in OBS.
  - ![image](https://github.com/user-attachments/assets/3a9fbc00-eb79-4e30-b934-d7ffda0e3939)
- **TIME**: The time in milliseconds at which the active song is called up again.

If you have doubts about how to obtain this information from OBS you can read this article or follow the steps in the image below

![image](https://github.com/user-attachments/assets/14fe4bbd-5f1a-46a0-a01d-11f890c0fd36)

Now, all you have to do is to execute the following command and everything will work correctly

```bash
npm run start
```

## Demonstration:
![2024-10-1414-56-03-ezgif com-crop](https://github.com/user-attachments/assets/b80206f9-5706-4b6c-b891-1d7ed80268a7)


## Contributions
If you want to contribute to Spotify Live Detector, feel free to open an issue or send a pull request!

I hope you find Spotify Live Detector useful! 🚀
