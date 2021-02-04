const quizData = [
  {
    question: "Which Of These is Your <span>Body Shape?</span>",
    multiSelect: false,
    index: 0,
    options: [
      {
        image: require("../images/01/women-rectangle-body-type.jpg"),
        value: "Rectangle",
        option_id: "1"
      },
      {
        image: require("../images/01/women-fitness-body-type.jpg"),
        value: "Fitness",
        option_id: "2"
      },
      {
        image: require("../images/01/women-triangle-body-type.jpg"),
        value: "Triangle",
        option_id: "3"
      },
      {
        image: require("../images/01/women-hourglass-body-type.jpg"),
        value: "Hourglass",
        option_id: "4"
      },
      {
        image: require("../images/01/women-round-body-type.jpg"),
        value: "Round",
        option_id: "5"
      }
    ]
  },
  {
    question: "How Do You <span>Describe Yourself</span>?",
    multiSelect: true,
    index: 1,
    options: [
      {
        image: require("../images/02/funky.jpg"),
        value: "Funky",
        option_id: "1"
      },
      {
        image: require("../images/02/conservative.jpg"),
        value: "Conservative",
        option_id: "2"
      },
      {
        image: require("../images/02/wild.jpg"),
        value: "Wild",
        option_id: "3"
      },
      {
        image: require("../images/02/spontaneous-self-180x237.jpg"),
        value: "Spontaneous",
        option_id: "4"
      },
      {
        image: require("../images/02/sociable-self-180x237.jpg"),
        value: "Sociable",
        option_id: "5"
      },
      {
        image: require("../images/02/shy-self-180x240.jpg"),
        value: "Shy",
        option_id: "6"
      },
      {
        image: require("../images/02/happy-self180x240.jpg"),
        value: "Happy",
        option_id: "7"
      },
      {
        image: require("../images/02/moody-self-180x233.jpg"),
        value: "Moody",
        option_id: "8"
      }
    ]
  },
  {
    question: "What Color Clothing <span>Do You Tend To Wear</span>?",
    multiSelect: true,
    index: 2,
    options: [
      {
        image: require("../images/03/all-white-look-180x256.jpg"),
        value: "Mostly White",
        option_id: "1"
      },
      {
        image: require("../images/03/all-blue-look-180x239.jpg"),
        value: "Lots Of Navy Blue",
        option_id: "2"
      },
      {
        image: require("../images/03/bright-colors-look-180x238.jpg"),
        value: "Bright Colors",
        option_id: "3"
      },
      {
        image: require("../images/03/all-black-look-180x248.jpg"),
        value: "Mostly Black",
        option_id: "4"
      },
      {
        image: require("../images/03/neutral-color-look-180x252.jpg"),
        value: "Neutral Colors",
        option_id: "5"
      },
      {
        image: require("../images/03/all-colors-look-180x258.jpg"),
        value: "All Colors",
        option_id: "6"
      }
    ]
  },
  {
    question: "<span>Which Necklace Styles</span> Would You Try On?",
    multiSelect: true,
    index: 3,
    options: [
      {
        image: require("../images/04/choker.jpg"),
        value: "Choker",
        option_id: "1"
      },
      {
        image: require("../images/04/punk.jpg"),
        value: "Punk",
        option_id: "2"
      },
      {
        image: require("../images/04/statement.jpg"),
        value: "Statements",
        option_id: "3"
      },
      {
        image: require("../images/04/pearl.jpg"),
        value: "Pearls",
        option_id: "4"
      },
      {
        image: require("../images/04/long.jpg"),
        value: "Long",
        option_id: "5"
      },
      {
        image: require("../images/04/rhinestone.jpg"),
        value: "Rhinestones",
        option_id: "6"
      },
      {
        image: require("../images/04/vintage.jpg"),
        value: "Vintage",
        option_id: "7"
      },
      {
        image: require("../images/04/Gothic.jpg"),
        value: "Gothic",
        option_id: "8"
      },
      {
        image: require("../images/04/crystal.jpg"),
        value: "Crystal",
        option_id: "9"
      },
      {
        image: require("../images/04/pendant.jpg"),
        value: "Pendant",
        option_id: "10"
      },
      {
        image: require("../images/04/faux.jpg"),
        value: "Faux long",
        option_id: "11"
      },
      {
        image: require("../images/04/bohemian.jpg"),
        value: "Bohemian",
        option_id: "12"
      }
    ]
  },
  {
    question: "<span>Which Bracelet Styles</span> Would You Try On?",
    multiSelect: true,
    index: 4,
    options: [
      {
        image: require("../images/05/stretch.jpg"),
        value: "Stretch",
        option_id: "1"
      },
      {
        image: require("../images/05/bangles.jpg"),
        value: "Bangles",
        option_id: "2"
      },
      {
        image: require("../images/05/chain.jpg"),
        value: "Chains",
        option_id: "3"
      },
      {
        image: require("../images/05/cuff.jpg"),
        value: "Cuff",
        option_id: "4"
      },
      {
        image: require("../images/05/wire.jpg"),
        value: "Wire",
        option_id: "5"
      },
      {
        image: require("../images/05/charm.jpg"),
        value: "Charm",
        option_id: "6"
      },
      {
        image:
          require("../images/05/Punk.jpg"),
        value: "Punk",
        option_id: "7"
      },
      {
        image: require("../images/05/bead.jpg"),
        value: "Beads",
        option_id: "8"
      },
      {
        image: require("../images/05/multi.jpg"),
        value: "Multi set",
        option_id: "9"
      },
      {
        image: require("../images/05/bohemian.jpg"),
        value: "Bohemian",
        option_id: "10"
      },
      {
        image: require("../images/05/infinity.jpg"),
        value: "Infinity",
        option_id: "11"
      },
      {
        image: require("../images/05/rhinestone.jpg"),
        value: "Rhinestones",
        option_id: "12"
      }
    ]
  },
  {
    question: "<span>Which Earring Styles</span> Would You Try On?",
    multiSelect: true,
    index: 5,
    options: [
      {
        image: require("../images/06/Drop.jpg"),
        value: "Drops",
        option_id: "1"
      },
      {
        image: require("../images/06/stud.jpg"),
        value: "Studs",
        option_id: "2"
      },
      {
        image: require("../images/06/Hoop.jpg"),
        value: "Hoops",
        option_id: "3"
      },
      {
        image: require("../images/06/cuff.jpg"),
        value: "Ear Cuff",
        option_id: "4"
      },
      {
        image: require("../images/06/Dangles.jpg"),
        value: "Dangles",
        option_id: "5"
      },
      {
        image: require("../images/06/Huggys.jpg"),
        value: "Huggy",
        option_id: "6"
      },
      {
        image: require("../images/06/Bohemian.jpg"),
        value: "Bohemian",
        option_id: "7"
      },
      {
        image: require("../images/06/Tassel.jpg"),
        value: "Tassel",
        option_id: "8"
      },
      {
        image: require("../images/06/Crystal.jpg"),
        value: "Crystal",
        option_id: "9"
      },
      {
        image: require("../images/06/multi.jpg"),
        value: "Multi-Sets",
        option_id: "10"
      },
      {
        image: require("../images/06/punk.jpg"),
        value: "Punk",
        option_id: "11"
      },
      {
        image: require("../images/06/oversized.jpg"),
        value: "Oversized Hoops",
        option_id: "12"
      }
    ]
  },
  {
    question: "<span>Which Hair Accessories</span> Would You Try On?",
    multiSelect: true,
    index: 6,
    options: [
      {
        image: require("../images/07/hair-clips-180x244.jpg"),
        value: "Clips",
        option_id: "1"
      },
      {
        image: require("../images/07/headband-accessories-180x230.jpg"),
        value: "Bandana",
        option_id: "2"
      },
      {
        image:
        require("../images/07/hair-comb-accessories-180x232.jpg"),
        value: "Hair Comb",
        option_id: "3"
      },
      {
        image:
        require("../images/07/hair-pins-accessories-180x237.jpg"),
        value: "Hair Pins",
        option_id: "4"
      },
      {
        image: require("../images/07/elastic-hair-band-180x249.jpg"),
        value: "Elastic Band",
        option_id: "5"
      },
      {
        image:
        require("../images/07/barrette-hair-accessories-180x243.jpg"),
        value: "Barrettes",
        option_id: "6"
      },
      {
        image:
        require("../images/07/flowers-hair-accessories-180x230.jpg"),
        value: "Flowers",
        option_id: "7"
      },
      {
        image:
        require("../images/07/turban-hair-accessories180x229.jpg"),
        value: "Turban",
        option_id: "8"
      },
      {
        image:
        require("../images/07/special-occassion-hair-comb-180x231.jpg"),
        value: "Special Occasions",
        option_id: "9"
      },
      {
        image: require("../images/07/headband-accessories-180x232.jpg"),
        value: "HeadBand",
        option_id: "10"
      },
      {
        image:
        require("../images/07/hair-chain-accessories180x233.jpg"),
        value: "Hair Chain",
        option_id: "11"
      },
      {
        image:
        require("../images/07/hair-bows-accessories-180x244.jpg"),
        value: "Hair Bows",
        option_id: "12"
      }
    ]
  },
  {
    question: "How Comfortable are you with <span>Colorful Accessories</span>?",
    multiSelect: true,
    index: 7,
    options: [
      {
        image: require("../images/08/very-comfortable.jpg"),
        value: "Very Comfortable",
        option_id: "1"
      },
      {
        image: require("../images/08/somewhat-confortable.jpg"),
        value: "Somewhat Comfortable",
        option_id: "2"
      },
      {
        image: require("../images/08/Preferably-Neutral.jpg"),
        value: "Preferably Neutral",
        option_id: "3"
      },
      {
        image: require("../images/08/Very-Uncomfortable.jpg"),
        value: "Very Uncomfortable",
        option_id: "4"
      }
    ]
  },
  {
    question: "Pick Your Favorites <span>Jewelry Material & Stones</span>?",
    multiSelect: true,
    index: 8,
    options: [
      {
        image: require("../images/09/gold.JPG"),
        value: "Gold",
        option_id: "1"
      },
      {
        image: require("../images/09/silver.jpg"),
        value: "Silver",
        option_id: "2"
      },
      {
        image: require("../images/09/diamonds.jpg"),
        value: "Diamond",
        option_id: "3"
      },
      {
        image: require("../images/09/rhinestones.jpg"),
        value: "Rhinestones",
        option_id: "4"
      }
    ]
  },
  {
    question: "What Occasion Do You Want To Be <span>Styled For</span>?",
    multiSelect: true,
    index: 9,
    options: [
      {
        image: require("../images/10/daytime-look-180x231.jpg"),
        value: "Daytime",
        option_id: "1"
      },
      {
        image: require("../images/10/office-look-styled-180x229.jpg"),
        value: "The Office",
        option_id: "2"
      },
      {
        image:
        require("../images/10/special-occasion-styled-180x227.jpg"),
        value: "Special Occasion",
        option_id: "3"
      },
      {
        image: require("../images/10/nighttime-look-180x242.jpg"),
        value: "Night Out",
        option_id: "4"
      }
    ]
  },
  {
    question: "Which Of These <span>Styles Best Defines You</span>?",
    multiSelect: true,
    index: 10,
    options: [
      {
        image: require("../images/11/formal.jpg"),
        value: "Formal",
        option_id: "1"
      },
      {
        image: require("../images/11/Sporty1.jpg"),
        value: "Sporty",
        option_id: "2"
      },
      {
        image: require("../images/11/retro1.jpg"),
        value: "Retro",
        option_id: "3"
      },
      {
        image: require("../images/11/club-goer1.jpeg"),
        value: "Club-Goer",
        option_id: "4"
      },
      {
        image: require("../images/11/Elegant.jpg"),
        value: "Elegant",
        option_id: "5"
      },
      {
        image: require("../images/11/urban.jpg"),
        value: "Urban",
        option_id: "6"
      },
      {
        image: require("../images/11/Casual.jpg"),
        value: "Casual",
        option_id: "7"
      },
      {
        image: require("../images/11/office1.jpg"),
        value: "Professional",
        option_id: "8"
      }
    ]
  }
];

export function getQuizData() {
  return quizData;
}
