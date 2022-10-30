import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const TIME = "videoplayer-current-time"
const iframe = document.querySelector("iframe");

const player = new Vimeo(iframe);

player.setCurrentTime(localStorage.getItem(TIME))

player.on("timeupdate", throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(event) {
    const currentTime = event.seconds;
    localStorage.setItem(TIME, currentTime);
}

