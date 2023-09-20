function updateTime() {
  const clockElement = document.getElementById("current-time");
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "Europe/Helsinki",
  };
  const timeString = now.toLocaleTimeString("en-GB", options);
  clockElement.textContent = timeString;
  setTimeout(updateTime, 1000);
}

updateTime();
