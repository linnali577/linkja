function timeDiffText(current, previous) {
  const msPerMin = 60 * 1000;
  const msPerHr = msPerMin * 60;
  const msPerDay = msPerHr * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMin) {
    return "just now";
  } else if (elapsed < msPerHr) {
    return Math.round(elapsed / msPerMin) + " min(s) ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHr) + " hr(s) ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " day(s) ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " month(s) ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
}

export function timeDiff(date) {
  const now = new Date().getTime();
  const updated = new Date(date).getTime();
  return timeDiffText(now, updated);
}
