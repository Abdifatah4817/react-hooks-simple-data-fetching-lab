export function fetchRandomDogImage() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.status !== "success") {
        throw new Error("Failed to fetch dog image");
      }
      return data.message;
    });
}   