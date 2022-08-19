const nameUrl = 'https://api.genderize.io';
const counryUrl = 'https://api.nationalize.io';

export async function searchName(name, country) {
  const userName = name;

  if (!country) {
    const url = `${nameUrl}?name=${userName}`;

      const response = await fetch(url);
      const result = await response.json();
      return result.gender;
  } else {
    const url = `${counryUrl}?name=${userName}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      return result.country[0].country_id;
    } catch (error) {
      return error.message
    }
  }
}
