export default function formatFriendlyMatchTime(
  scheduledStart?: string,
  actualStart?: string,
  endedAt?: string,
) {
  let display = "";

  if (scheduledStart === undefined) {
    //something's gone badly wrong
    return display;
  }

  if (!actualStart) {
    // no start time/not started yet, so just display scheduled start
    const start = new Date(scheduledStart);
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

    display = day + " " + date + suffix + " " + month + " " + time;
  } else {
    // there is a start time - it's begin
    const startEpochMs = new Date(actualStart).valueOf();

    let prefix = "";
    let endEpochMs: number = 0;

    if (endedAt) {
      // match is also ended
      endEpochMs = new Date(endedAt).valueOf();
      prefix = "Match ended. Time: ";
    } else {
      endEpochMs = Date.now();
      prefix = "Duration: ";
    }

    const durationMs = endEpochMs - startEpochMs;

    const minutes = Math.floor((durationMs / (1000 * 60)) % 60),
      hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);
    if (hours == 0) {
      display = prefix + minutes + " minutes";
    } else if (hours == 1) {
      display = prefix + hours + " hour,  " + minutes + " minutes";
    } else {
      display = prefix + hours + " hours,  " + minutes + " minutes";
    }
  }
  return display;
}
