const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Example API Route
app.get("/api/getAnimeList", (req, res) => {
  const animeList = [
    {
      id: 1,
      title: "Naruto: Shippuden",
      description: "Follow Naruto's journey as he grows stronger.",
      image: "https://link-to-image.com/naruto.jpg",
      streamLink: "https://link-to-streaming.com/naruto",
    },
    {
      id: 2,
      title: "Attack on Titan",
      description: "The epic fight between humans and Titans.",
      image: "https://link-to-image.com/aot.jpg",
      streamLink: "https://link-to-streaming.com/aot",
    },
  ];
  res.status(200).json(animeList);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
