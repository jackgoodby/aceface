export default function formatFriendlyMatchTime(eventStartTime?: string) {
  if (eventStartTime === undefined) {
    return "";
  }

  const start = new Date(eventStartTime);

  if (Date.now() < start.valueOf()) {
    const day = start.toLocaleDateString("en-GB", {
      weekday: "long",
    });
    const date = start.getDate();
    let suffix =
      (date >= 4 && date <= 20) || (date >= 24 && date <= 30)
        ? "th"
        : ["st", "nd", "rd"][(date % 10) - 1];
    const month = start.toLocaleString("en-GB", { month: "long" });
    const time = start.toLocaleDateString("en-GB", {
      year: "numeric",
      hour: "numeric",
      hourCycle: "h12",
      minute: "numeric",
    });

    return "Starts: " + day + " " + date + suffix + " " + month + " " + time;
  } else {
    const durationInMs = Date.now() - start.valueOf();
    const minutes = Math.floor((durationInMs / (1000 * 60)) % 60),
      hours = Math.floor((durationInMs / (1000 * 60 * 60)) % 24);
    const displayHours = hours > 0 ? hours.toString() + " hours, " : hours;
    if (hours > 0) {
      return "Duration: " + displayHours + " hour " + minutes + " minutes";
    } else {
      return "Duration: " + minutes + " minutes";
    }
  }
}
