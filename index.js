let cardsContent = [
  {
    name: "Percy Jackson",
    quote:
      "The world was collapsing, and the only thing that really mattered to me was that she was alive.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/1/10/Percy_Jackson.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Percy_Jackson"
  },
  {
    name: "Annabeth Chase",
    quote: "Even strength has to bow down to wisdom sometimes.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/c/ca/Annabeth_Chase-Viria.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Annabeth_Chase"
  },
  {
    name: "Jason Grace",
    quote:
      "I'm the son of Jupiter! I'm a child of Rome, consul to demigods, praetor of the Twelfth Legion.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/e/ee/Jason_Grace-Redraw.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Jason_Grace"
  },
  {
    name: "Piper McLean",
    quote:
      "But what if I’m not any of the things I’ve been told I am? I have to figure out who I am.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/2/22/Piper_McLean.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Piper_McLean"
  },
  {
    name: "Hazel Levesque",
    quote: "I'm not choosing one of your paths. I'm making my own.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/a/ac/Hazel_Levesque.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Hazel_Levesque"
  },
  {
    name: "Frank Zhang",
    quote: "If I'm going to burn, I might as well burn bright.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/1/11/Frank_Zhang.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Frank_Zhang"
  },
  {
    name: "Leo Valdez",
    quote: "I figure the universe is basically like a machine.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/5/53/Leo_Valdez-Viria.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Leo_Valdez"
  },
  {
    name: "Calypso",
    quote:
      "Love will make you do crazy things. Or, more accurately, being trapped on a deserted island for centuries will make you do crazy things.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/0/06/Calypso-Viria.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Calypso"
  },
  {
    name: "Nico di Angelo",
    quote: "Your death would be great for me.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/e/e7/Nico_di_Angelo.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Nico_di_Angelo"
  },
  {
    name: "Reyna Avila Ramírez-Arellano",
    quote: "We had one home. Now we have two.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/8/8a/Reyna_Viria.jpg",
    pageLink:
      "https://riordan.fandom.com/wiki/Reyna_Avila_Ram%C3%ADrez-Arellano"
  },
  {
    name: "Thalia Grace",
    quote: "You want some, Seaweed Brain? ",
    image:
      "https://static.wikia.nocookie.net/olympians/images/9/9e/Thalia_Grace.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Thalia_Grace#Love_Interest"
  },
  {
    name: "Gleeson Hedge",
    quote:
      "What about a compromise? I’ll kill them first, and if it turns out they were friendly, I’ll apologize.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/b/b9/Gleeson_Hedge.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Gleeson_Hedge"
  },
  {
    name: "Grover Underwood",
    quote:
      "Stop it! You're as bad as Juniper. I think she wants me to run for president next.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/c/c1/Grover_Underwood.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Grover_Underwood"
  },
  {
    name: "Rachel Elizabeth Dare",
    quote:
      "And I don't have to see the future to tell you what to do now, do I?",
    image:
      "https://static.wikia.nocookie.net/olympians/images/e/e9/Rachel_Dare.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Rachel_Elizabeth_Dare"
  },
  {
    name: "Tyson",
    quote: "You are not dead! I like it when you are not dead!",
    image:
      "https://static.wikia.nocookie.net/olympians/images/e/ee/Tyson-Viria.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Tyson"
  },
  {
    name: "Luke Castellan",
    quote: "Ethan. Me. All the unclaimed. Don’t... Don’t let it happen again.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/c/c0/Luke_Castellan-Viria.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Luke_Castellan"
  },
  {
    name: "Clarisse La Rue",
    quote:
      "I AM CLARISSE, DRAKON-SLAYER! I will kill you ALL! Where is Kronos? Bring him out! Is he a coward?",
    image:
      "https://static.wikia.nocookie.net/olympians/images/f/f6/Clarisse_La_Rue.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Clarisse_La_Rue"
  },
  {
    name: "Bianca di Angelo",
    quote:
      "You must listen to me. Holding a grudge is dangerous for a child of Hades. It is our fatal flaw. You have to forgive. You have to promise me this.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/f/fa/Bianca_di_Angelo.jpeg",
    pageLink: "https://riordan.fandom.com/wiki/Bianca_di_Angelo"
  },
  {
    name: "Will Solace",
    quote: "Good. So you may be dense, but you’re not an idiot.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/8/82/Will_Solace.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Will_Solace"
  },
  {
    name: "Charles Beckendorf",
    quote: "You bet. Let's go blow Kronos back into a million pieces.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/a/a6/Charles-Beckendorf-Viria.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Charles_Beckendorf"
  },
  {
    name: "Silena Beauregard",
    quote: "Charlie . . . See Charlie . . .",
    image:
      "https://static.wikia.nocookie.net/olympians/images/0/0f/Silena_Beauregard.JPG",
    pageLink: "https://riordan.fandom.com/wiki/Silena_Beauregard"
  },
  {
    name: "Stoll Brother",
    quote:
      "Annabeth sent me a message from Tartarus. From fricking Tartarus. Anybody who can do that . . . hey, I listen to them.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/d/d7/Travis_and_Conner_Stoll.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Connor_Stoll"
  },
  {
    name: "Zoë Nightshade",
    quote: "Stars. I can see the stars again, m'lady.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/a/ab/Zoe_Nightshade.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Zo%C3%AB_Nightshade"
  },
  {
    name: "Octavian",
    quote: "I am the savior of Rome! I was promised!",
    image:
      "https://static.wikia.nocookie.net/olympians/images/9/91/Octavian-Viria.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Octavian"
  },
  {
    name: "Poseidon",
    quote: "The sea does not like to be restrained.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/7/79/Poseidon.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Poseidon"
  },
  // {
  //   name: "Hades",
  //   quote: "I am not an Olympian! My family has made that quite clear.	",
  //   image: "https://static.wikia.nocookie.net/olympians/images/6/64/Hades.png",
  //  pageLink:"https://riordan.fandom.com/wiki/Hades",
  // },
  // {
  //   name: "Zeus",
  //   quote: "Very well! In the name of the Council, we swear by the River Styx to grant your reasonable request, as long as it is within our power.",
  //   image: "https://static.wikia.nocookie.net/olympians/images/3/3c/Zeus.png",
  //  pageLink:"https://riordan.fandom.com/wiki/Zeus",
  // },
  {
    name: "Athena",
    quote:
      "I once warned you, Percy Jackson, that to save a friend you would destroy the world. Perhaps I was mistaken. You seemed to have saved both your friends and the world.",
    image: "https://static.wikia.nocookie.net/olympians/images/8/83/Athena.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Athena"
  },
  {
    name: "Apollo",
    quote: "Always. The sun always comes back.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/5/54/Apollo_Viria.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Apollo"
  },
  {
    name: "Ares",
    quote:
      "That means I can smash him into a pulp as often as I want, and he'll just keep coming back for more. I like this idea.",
    image: "https://static.wikia.nocookie.net/olympians/images/c/c4/Ares.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Ares"
  },
  {
    name: "Hephaestus",
    quote:
      "People are more difficult to work with than machines. And when you break a person, he can’t be fixed.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/8/84/Hephaestus.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Hephaestus"
  },
  {
    name: "Aphrodite",
    quote:
      "To be perfect, you have to feel perfect about yourself — avoid trying to be something you're not.",
    image:
      "https://static.wikia.nocookie.net/olympians/images/f/f9/Aphrodite.jpg",
    pageLink: "https://riordan.fandom.com/wiki/Aphrodite"
  }
];

/*
  {
    name: "",
    quote: "",
    image: "",
   pageLink:"",
  },
*/

let cardPanel = document.querySelector("#card-panel");

function createCards(cardsContent) {
  let cardsHTML = "";
  for (let i = 0; i < cardsContent.length; i++) {
    cardsHTML += `
        <a class="card shadow-sm text-secondary my-3" style="width: 12rem;" href=${cardsContent[i].pageLink} target="_blank">
      <img src=${cardsContent[i].image} class="card-img-top" alt=${cardsContent[i].name}>
      <div class="card-body">
        <h4>${cardsContent[i].name}</h4>
        <p class="card-text">${cardsContent[i].quote}</p>
      </div>
    </a>
    `;
  }
  return cardsHTML;
}

cardPanel.innerHTML = createCards(cardsContent);
