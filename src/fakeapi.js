const seededGenerator = (date, hour) => {
  if (!(date instanceof Date)) {
    throw new TypeError("Invalid date object");
  }

  const m = 9;
  const d = date.getDate();
  const result = ((d + hour) % m) / 10;

  return result;
}

const fetchAPI = (date) => {
  let result = [];

  result.push("--- Select a Time ---")

  for (let hour = 15; hour <= 23; hour++) {
    if(seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
    if(seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
  }

  return result;
};

const submitAPI = formData => true;

const fakeAPI = {
  fetchAPI: fetchAPI,
  submitAPI: submitAPI,
}

export default fakeAPI;