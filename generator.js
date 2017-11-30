
// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "I'm no hero. I put my bra on one boob at a time, just like everyone else.",
      "I am a smart, strong, sensual woman.",
      "If we see any mermaids I'm gonna ask them where their merginas are.",
      "My heart just pooped its pants.",
      "Time for the charm bomb to explode.",
      "I want a dry-erase board so I can write down all my private thoughts and then erase them immediately.",
      "My crotch is itchy.",
      "Do you think horses get songs stuck in their heads?",
      "And if boys had uteruses, they'd be called duderuses.",  
      "If you need me, I'll be here on the floor dying.",
      "Is it possible to be in love with 25 people at once?",  
      "Just when I think I'm out, those cheeks pull me right back in.",
      "Wow, Gene's really athletic.",
      "Oh it's okay. I guess I wasn't meant to have a good life.",
      "Our toaster is also confused. It doesn't know why we put bagels in it.",
      "Uhhhhhhhhhhhh.........",
      "Uhhhhhhhhhhhhhhhhhhhhhhhhhhh.........",
      "Uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.........",
      "It's his butt.",
      "Lets just act like a normal family... on vacation with their sexy dentist.",
      "Your ass is grass, and I'm gonna mow it.",
      "Dad, if you believe you're beautiful, you will be. I did.",
      "What's a transvestite hooker?",
      "Don't worry, Gene. There's plenty of manatees in the sea. But there's not, really, because they're endangered.",
      "Thanks, Dad, you're the best pimp I'll ever have.",
      " Jimmy Jr. had a chance to hitch his trailer to the Tina truck, but now it's headed down the highway to Joshville. Honk, honk.",
      "No! Stop interpreting! This whole date has been about you, not me! Jimmy Jr., I don't know if you can understand me, but this is the date I wanted. We'd watch a movie probably 27 Dresses then we'd walk along the beach at low tide and find a cozy place to sit in the kelp and kiss.",
      "It's called fate and it's great.",
      "The hand wants what the hand wants, I can't tell where your back ends and your butt begins.",      
      "Hahahahahahahahaha...that's was my evil laugh...and I have something caught in my throat.",
      "Butt.",
      "I'm ready to dominate.",
      "This is the biggest man cave ever, and Tina's going spelunking.",
      "Horse butt.",
      "Oh, hell neigh!"

    ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
