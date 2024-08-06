let movieArr = [
  {
    "title": "The Shawshank Redemption",
    "overview": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "rating": 9.3,
    "image_link": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    "title": "The Godfather",
    "overview": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "rating": 5.2,
    "image_link": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    "title": "The Dark Knight",
    "overview": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    "rating": 4.0,
    "image_link": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    "title": "Pulp Fiction",
    "overview": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "rating": 7.9,
    "image_link": "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg"
  },
  {
    "title": "Schindler's List",
    "overview": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "rating": 3.9,
    "image_link": "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
  },
  {
    "title": "12 Angry Men",
    "overview": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    "rating": 6.9,
    "image_link": "https://image.tmdb.org/t/p/w500/ppd84D2i9W8jXmsyInGyihiSyqz.jpg"
  },
  {
    "title": "Inception",
    "overview": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "rating": 5.8,
    "image_link": "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
  },
  {
    "title": "Fight Club",
    "overview": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    "rating": 8.8,
    "image_link": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg"
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "overview": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "rating": 3.9,
    "image_link": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
  },
  {
    "title": "The Good, the Bad and the Ugly",
    "overview": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    "rating": 8.8,
    "image_link": "https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg"
  },
  {
    "title": "Forrest Gump",
    "overview": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    "rating": 8.8,
    "image_link": "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
  },
  {
    "title": "The Matrix",
    "overview": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "rating": 8.7,
    "image_link": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    "title": "The Empire Strikes Back",
    "overview": "After the Rebels are overpowered by the Empire on their newly established base, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader.",
    "rating": 8.7,
    "image_link": "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg"
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "overview": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "rating": 8.8,
    "image_link": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
  },
  {
    "title": "The Lord of the Rings: The Two Towers",
    "overview": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    "rating": 8.7,
    "image_link": "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg"
  },
  {
    "title": "Star Wars",
    "overview": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    "rating": 8.6,
    "image_link": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
  },
  {
    "title": "The Silence of the Lambs",
    "overview": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    "rating": 8.6,
    "image_link": "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg"
  },
  {
    "title": "Saving Private Ryan",
    "overview": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "rating": 8.6,
    "image_link": "https://image.tmdb.org/t/p/w500/hcGZbK59VNzd4Zip9PAvJuVNmB.jpg"
  },
  {
    "title": "Interstellar",
    "overview": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "rating": 8.6,
    "image_link": "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    "title": "Spirited Away",
    "overview": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    "rating": 8.6,
    "image_link": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
  },
  {
    "title": "Parasite",
    "overview": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "rating": 8.6,
    "image_link": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymC"
  }

];
