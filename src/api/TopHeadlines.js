async function TopHeadlines() {
  try {
    const request = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_32181ad478804c19e1a711e0a03b2a745bcd7&category=business&country=in,us`,
    );

    const response = await request.json();
    return response.results;
  } catch (err) {
    throw new Error("Error get top headlines" + err);
  }
}

export default TopHeadlines;
