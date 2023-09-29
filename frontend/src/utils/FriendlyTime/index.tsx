function getFormattedDisplayDate(inputDate: Date) {
  const day = inputDate.toLocaleDateString("en-GB", {
    weekday: "long",
  });
  const date = inputDate.getDate();
  let suffix =
    (date >= 4 && date <= 20) || (date >= 24 && date <= 30)
      ? "th"
      : ["st", "nd", "rd"][(date % 10) - 1];
  const month = inputDate.toLocaleString("en-GB", { month: "long" });
  const time = inputDate.toLocaleDateString("en-GB", {
    year: "numeric",
    hour: "numeric",
    hourCycle: "h12",
    minute: "numeric",
  });

  return day + " " + date + suffix + " " + month + " " + time;
}

function getFormattedMatchDuration(actualStart: string, endedAt?: string) {
  const startEpochMs = new Date(actualStart).valueOf();
  const endEpochMs = endedAt ? new Date(endedAt).valueOf() : Date.now();
  const durationMs = endEpochMs - startEpochMs;

  let durationDisplay = "";

  const minutes = Math.floor((durationMs / (1000 * 60)) % 60),
    hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);
  if (hours == 0) {
    durationDisplay = minutes + " minutes";
  } else if (hours == 1) {
    durationDisplay = hours + " hour,  " + minutes + " minutes";
  } else {
    durationDisplay = hours + " hours,  " + minutes + " minutes";
  }
  return durationDisplay;
}

export default function formatFriendlyMatchTime(
  scheduledStart?: string,
  actualStart?: string,
  endedAt?: string,
) {
  let display = "";
  let formattedScheduledStart = "";
  let formattedActualStart = "";

  if (scheduledStart) {
    formattedScheduledStart = getFormattedDisplayDate(new Date(scheduledStart));
  } else {
    //something's gone badly wrong
    return formattedScheduledStart;
  }

  if (actualStart) {
    // there is a start time - it's begin
    formattedActualStart = getFormattedDisplayDate(new Date(actualStart));

    const durationDisplay = getFormattedMatchDuration(actualStart, endedAt);

    if (endedAt) {
      // Display past match info.
      // display = "Match ended. Duration: " + durationDisplay;
      display = formattedActualStart + ". (" + durationDisplay + ")";
    } else {
      // Display in-play info
      display = "Duration: " + durationDisplay;
    }
  } else {
    // it hasn't begun yet. Just display the scheduled start time
    display = formattedScheduledStart;
  }

  return display;
}
