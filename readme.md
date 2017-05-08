## Unicorn-FFMPEG

This software is a part of __PlexCloud@Home__ project, it's a binary to replace the official __Plex Transcoder__, the binary will save parameters in your Redis database, the data will be used by __Unicorn-Transcoder__.

## Dependencies
* RedisCache
* *Unicorn-LoadBalancer*
* *Unicorn-Transcoder*

## Installation
* Clone this repository
* Run __npm i__
* Set your Redis configuration in your environement
* Replace the binary called __Plex Transcoder__ by a symlink on __npm start__