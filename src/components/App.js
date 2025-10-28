// create your App component here
import React, { useState, useEffect } from "react";
import { fetchRandomDogImage } from "../api/dogApi";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomDogImage()
      .then((imageUrl) => {
        setDogImage(imageUrl);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Random Dog Image</h1>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;