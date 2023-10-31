export default async function Fetchnews(input) {
  const category = input;
  if (category == "india") {
    try {
      const request = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_32181ad478804c19e1a711e0a03b2a745bcd7&q=us`,
      );
      const response = await request.json();
      return response.results;
    } catch (err) {
      throw new Error("Error in genral query" + err);
    }
  } else {
    try {
      const request = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_32181ad478804c19e1a711e0a03b2a745bcd7&category=${category}&country=in&language=en`,
      );

      const response = await request.json();
      return response.results;
    } catch (err) {
      throw new Error("Error get top headlines" + err);
    }
  }
}
