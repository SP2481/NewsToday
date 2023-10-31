async function FetchSearch(value) {
  try {
    const request = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_32181ad478804c19e1a711e0a03b2a745bcd7&qInTitle=${value}`,
    );
    if (!request.ok) {
      throw new Error("request error" + request.statusText);
    }
    const response = await request.json();
    return response.results;
  } catch (err) {
    throw new Error(err);
  }
}

export default FetchSearch;
