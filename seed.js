const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

async function seed() {
  await Book.create({
    title: "The Hunger Games",
    description:
      "The nation of Panem is divided into 12 districts, ruled from the Capitol. As punishment for a failed revolt, each district is forced to select two tributes, one boy and one girl between the ages of 12 and 18, to fight to the death in the annual Hunger Games until there is only one survivor.",
    status: "Completed",
  });
  await Book.create({
    title: "The Novels Extra",
    description:
      "Waking up, Kim Hajin finds himself in a familiar world but an unfamiliar body. A world he created himself and a story he wrote, yet never finished. He had become his novel's extra, a filler character with no importance to the story. The only clue to escaping is to stay close to the main storyline. However, he soon finds out the world isn't exactly identical to his creation.",
    status: "Ongoing",
  });
  await Book.create({
    title: "Harry Potter",
    description:
      "It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he's a wizard.",
    status: "Completed",
  });
}

seed();
