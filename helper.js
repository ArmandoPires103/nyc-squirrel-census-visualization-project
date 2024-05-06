import { uniqueNamesGenerator, names, starWars } from "unique-names-generator";

// Generate squirrel names
export function grabName() {
  const funnyNicknames = [
    "Snickerdoodle",
    "Bubbles",
    "Squiggles",
    "Chuckles",
    "Gizmo",
    "Buttercup",
    "Marshmallow",
    "Giggles",
    "Sprinkles",
    "Smarty",
    "Bumblebee",
    "Sherbet",
    "Jellyfish",
    "Freckles",
    "Wiggles",
    "Fluffy",
    "Beanie",
    "Dumpling",
    "Jigsaw",
    "Gummy",
    "Sparky",
    "Squishy",
    "Pickles",
    "Scooter",
    "Ziggy",
    "Sizzle",
    "Waldo",
    "Peekaboo",
    "Goober",
    "Sunny",
    "Muffin",
    "Noodle",
    "Banana",
    "Snickers",
    "Fuzzy",
    "Jellybean",
    "Dizzy",
    "Pickle",
    "Wombat",
    "Toasty",
    "Bubblegum",
    "Flapjack",
    "Boomerang",
    "Twinkle",
    "Peaches",
    "Scooby",
    "Waffles",
    "Pudding",
    "Peanut",
    "Tater",
    "Fiddlesticks",
    "Cupcake",
    "Doodlebug",
    "Butterfingers",
    "Snuggle",
    "Bacon",
    "Sugar",
    "Ninja",
    "Moonbeam",
    "Donut",
    "Raspberry",
    "Cinnamon",
    "Kit-Kat",
    "Pumpkin",
    "Sherbet",
    "Cherry",
    "Dumpling",
    "Boomer",
    "Beanie",
    "Kitty",
    "Peppermint",
    "Cookie",
    "Tinkerbell",
    "Gummy",
    "Bubble",
    "Hiccup",
    "Ninja",
    "Squishy",
    "Cocoa",
    "Turtle",
    "Wiggly",
    "Snooze",
    "Pancake",
    "Fuzzy",
    "Sizzle",
    "Waldo",
    "Peekaboo",
    "Goober",
  ];

  const randomName = uniqueNamesGenerator({
    dictionaries: [names, funnyNicknames, starWars],
  });
  const [firstName, nickname, lastName] = randomName.split("_");
  let finalLastName = lastName.split(" " || "-");
  if (finalLastName[1]) finalLastName = finalLastName[1];
  else finalLastName = finalLastName[0];
  return `${firstName} "${nickname}" ${finalLastName}`;
}

export function dateFormatting(date) {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const monthNumber = date.slice(0, 2);
  const dayNumber = date.slice(2, 4);
  const year = date.slice(4, 8);

  return `${months[monthNumber]} ${dayNumber}, ${year}`;
}
