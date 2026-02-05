// Digital SAT Test Questions - June 2023 (Second Set)
// Complete question bank with all 4 modules

// ==============================================
// DOMAIN CATEGORIES FOR SKILL TRACKING
// ==============================================
// Reading & Writing domains:
//   - 'information_ideas'     : Information and Ideas (central ideas, inferences, command of evidence)
//   - 'craft_structure'       : Craft and Structure (words in context, text structure, cross-text connections)
//   - 'expression_ideas'      : Expression of Ideas (rhetorical synthesis, transitions)
//   - 'standard_conventions'  : Standard English Conventions (boundaries, form/structure/sense)
//
// Math domains:
//   - 'algebra'               : Algebra (linear equations, systems, functions)
//   - 'advanced_math'         : Advanced Math (nonlinear equations, equivalent expressions)
//   - 'problem_solving'       : Problem-Solving and Data Analysis (ratios, percentages, statistics)
//   - 'geometry'              : Geometry and Trigonometry (area, volume, angles, trig)
// ==============================================

export const sampleQuestions = {
  readingWriting: [
    // ========================================
    // SECTION 1, MODULE 1: Reading and Writing
    // ========================================

    // Question 1
    {
      id: 1,
      module: 1,
      domain: 'craft_structure', // Words in context
      passage: `The following text is from Mark Twain's 1876 novel The Adventures of Tom Sawyer. Tom, a child, has been told by his aunt to paint their house's fence.

Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush. He surveyed the fence, and all gladness left him and a deep melancholy settled down upon his spirit. Thirty yards of board fence nine feet high.`,
      text: 'As used in the text, what does the word __"surveyed"__ most nearly mean?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Looked at' },
        { letter: 'B', text: 'Had questions about' },
        { letter: 'C', text: 'Organized' },
        { letter: 'D', text: 'Was captivated by' }
      ],
      correctAnswer: 'A'
    },

    // Question 2
    {
      id: 2,
      module: 1,
      domain: 'craft_structure', // Words in context
      passage: `Though most studies of the effect of altitude on blood chemistry usually concentrated on people who live about sea level, researchers Suleiman A. Al-Sweedan and Moath Alhaj have instead chosen the ______ path in their recent work of studying the blood of people who live below sea level, in locations such as the California towns of Salton City and Imperial.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'predictable' },
        { letter: 'B', text: 'timeworn' },
        { letter: 'C', text: 'innovative' },
        { letter: 'D', text: 'idealistic' }
      ],
      correctAnswer: 'C'
    },

    // Question 3
    {
      id: 3,
      module: 1,
      domain: 'craft_structure', // Words in context
      passage: `The Gleaners, painted in the realist style by Jean-François Millet, depicts peasants picking stray wheat from a field after the harvest. The realists' emphasis on accurately portraying the experiences of average working people was largely a rejection of the romantic style evident in many paintings by Jérôme-Martin Langlois, which instead ______ their subjects' beauty or heroism while hiding all imperfection.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'counteract' },
        { letter: 'B', text: 'accentuate' },
        { letter: 'C', text: 'rectify' },
        { letter: 'D', text: 'obscure' }
      ],
      correctAnswer: 'B'
    },

    // Question 4
    {
      id: 4,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Although our knowledge of the Pliocene epoch and the lives of the hominids during this time was once ______, recent analyses of fossils like that of the individual known as KNM-KP 271, discovered in Kenya in 1963, have sharpened our picture of what a day in the life of KNM-KP 271 may have looked like.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'nebulous' },
        { letter: 'B', text: 'intricate' },
        { letter: 'C', text: 'unprecedented' },
        { letter: 'D', text: 'concrete' }
      ],
      correctAnswer: 'A'
    },

    // Question 5
    {
      id: 5,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `In what is now Washington state, the Tulalip Cultural Center. Relying on traditional knowledge to guide the design of exhibits, this institution present Tulalip history and culture to the tribe's citizens. The Citizen Potawatomi Nation, a tribe in Oklahoma, employs a similar strategy in its own cultural center. Both centers contrast with museums that aren't Indigenous-led; when displaying Indigenous artifacts, such museums tend to anticipate mainly non-Indigenous audiences and rely on Euro-centric strategies for designing exhibits.`,
      text: 'Which best describes the overall structure of the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'It discusses two cultural centers operated by tribes, then compares them with non-Indigenous institutions that present Indigenous exhibits.' },
        { letter: 'B', text: 'It describes how tribal cultural centers designed exhibits of a particular set of artifacts, then analyzes how non-Indigenous institutions designed exhibits of the same artifacts.' },
        { letter: 'C', text: 'It outlines an early strategy for exhibit design used by one tribal cultural center, then explain a newer strategy used by a different tribal cultural center.' },
        { letter: 'D', text: 'It examines how tribal citizens responded to exhibits at tribal cultural centers, then speculates how non-Indigenous audiences would respond to the same exhibits.' }
      ],
      correctAnswer: 'A'
    },

    // Question 6
    {
      id: 6,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Luang Prabang has high pedestrian traffic, but simply replicating a feature of Luang Prabang associated with walkability—e.g., its human-scaled architecture—may be insufficient to induce increased walking in other cities. As urbanist Mariela Alfonzo argues, our understanding of individuals' decision-making about whether to walk is insufficiently robust: some studies emphasize the role of local norms, others the role of demographic characteristics, and so on, but walking decisions are made in complex context in which multiple conditions and needs inform individuals' choices.`,
      text: 'Which choice best states the main purpose of the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'To describe the effect of human-scaled architecture on any given city\'s walkability' },
        { letter: 'B', text: 'To explain why it is challenging to compare the amount of pedestrian traffic in different cities' },
        { letter: 'C', text: 'To present a claim about how individuals\' decision-making about walking can be improved' },
        { letter: 'D', text: 'To discuss the difficulty of identifying a reliable way to increase walking in any given city' }
      ],
      correctAnswer: 'D'
    },

    // Question 7
    {
      id: 7,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `In Hoocąk, an Indigenous language from the Mid-Atlantic region of what is now the United States, okayeke means "bad," whereas ati okayeye'tesel means "bad houses." This phenomenon, in which an element of a root word is repeated, sometimes with modification, within another word that is related to the root word, is called reduplication. In this case, the element "ye" in okayake gets repeated in ati okayeye'tesel. There are many examples of this type of reduplication in Hoocąk.`,
      text: 'Which choice best describes the function of the underlined part?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'It elaborates on the description of reduplication by exampling how it works in the specific Hoocąk word mentioned earlier.' },
        { letter: 'B', text: 'It provides English translation of the Hoocąk word mentioned earlier.' },
        { letter: 'C', text: 'It acknowledges that Hoocąk has some important exceptions to the general pattern described earlier.' },
        { letter: 'D', text: 'It emphasizes how frequently reduplication occurs in Hoocąk.' }
      ],
      correctAnswer: 'A'
    },

    // Question 8
    {
      id: 8,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Researcher César A. Hidalgo, Elisa Castañer, and Andres Sevtsuk created a computer model to predict the mix of businesses and places of interest found in a given neighborhood. The team used data from the Google Places API service to help identify furniture stores, florists, and other businesses and map their locations. This approach has some limits—data from Places API tend to be restricted to places that the customer facing—but the data set nonetheless provides an extremely reliable source to study colocation patterns of neighborhood amenities.`,
      text: 'According to the text, what is one potential drawback of Hidalgo and colleagues\' method?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'It depends upon data that are likely to be outdated.' },
        { letter: 'B', text: 'It is based on recent advancements from other fields that have yet to be applied outside of those contexts.' },
        { letter: 'C', text: 'It is likely to contribute to inaccurate identifications of the boundaries of specific neighborhoods.' },
        { letter: 'D', text: 'It may lead to conclusions that are not reflective of all the amenities in a given neighborhood.' }
      ],
      correctAnswer: 'D'
    },

    // Question 9
    {
      id: 9,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `The groundbreaking Negro Ensemble Company (NEC), founded in 1967, produced Paul Carter Harrison's award-winning play The Great MacDaddy in 1974. The company was cofounded by Robert Hooks, an actor, producer, and activist, and actor and playwright Douglas Turner Ward, who had met while performing in a 1960 touring production of Lorraine Hansberry's play A Raisin in the Sun. They shared a vision of a theater company that would nurture and showcase the work of Black theater professionals. Since its beginning, NEC has provided a forum for the voices of Harrison and other Black playwrights through workshops and performances.`,
      text: 'According to the text, how did Hooks and Ward initially meet?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Hooks and Ward participated in the same workshop at NEC.' },
        { letter: 'B', text: 'Harrison introduced Hooks to Ward at a performance of The Great MacDaddy.' },
        { letter: 'C', text: 'Hooks and Ward attended the same performance of The Great MacDaddy.' },
        { letter: 'D', text: 'Hooks and Ward were both actors in a production of A Raisin in the Sun.' }
      ],
      correctAnswer: 'D'
    },

    // Question 10
    {
      id: 10,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Poems is an 1895 collection of poetry by Frances E.W. Harper. In one of Harper's poems, the speaker criticizes activists who champion humanitarian causes in other countries while overlooking local concerns, saying ______`,
      text: 'Which quotation from Poems most effectively illustrates the claim?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '"God bless our native land, / Her homes and children bless, / Oh may she ever stand / For truth and righteousness." (from "God Bless Our Native Land")' },
        { letter: 'B', text: '"Men may tread down the poor and lowly / May crush them in anger and hate / But surely the mills of God\'s justice / Will grind out the grist of their fate." (from "An Appeal to My Countrywomen")' },
        { letter: 'C', text: '"Say not the age is hard and cold— / I think it brave and grand / When men of diverse sects and creeds / Are clasping hand in hand." (from "The Present Age")' },
        { letter: 'D', text: '"When ye plead for the wrecked and fallen, / The exile from far-distant shores, / Remember that men are still wasting / Life\'s crimson around your own doors." (from "An Appeal to My Countrywomen")' }
      ],
      correctAnswer: 'D'
    },

    // Question 11
    {
      id: 11,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Impact of Four Key Industries on Oklahoma Economy in 2017

| Industry | Approximate total contribution by industry | Number of people employed by industry | Average contribution per employee by industry |
|----------|-------------------------------------------|---------------------------------------|---------------------------------------------|
| Professional services | $7,694,000,000 | 69,846 | $110,157 |
| Tribal economic activity | $7,312,400,000 | 51,674 | $141,510 |
| Administration/waste | $5,830,600,000 | 96,964 | $60,132 |
| Wholesale trade | $10,723,400,000 | 58,346 | $183,790 |

The Cherokee Nation, the Seminole Nation, and the more than thirty other tribes in Oklahoma operate numerous businesses and generate billions of dollars in revenue. An economics student is researching the tribes' collective activity as a single industry. The student wants to compare the average amount that industry contributed per employee to Oklahoma's economy with the average amount contributed per employee by three other industries. Looking at the table, the student finds that tribal economic activity contributed over $141,000 per employee, on average, ranking it ______`,
      text: 'Which choice most effectively uses data from the table to complete the comparison?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'below wholesale trade but above both professional service and administration/waste.' },
        { letter: 'B', text: 'above all three of the four industries shown in the table.' },
        { letter: 'C', text: 'below all three of the four industries shown in the table.' },
        { letter: 'D', text: 'above either administration/waste or professional services and nearly equal to wholesale trade.' }
      ],
      correctAnswer: 'A'
    },

    // Question 12
    {
      id: 12,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `To understand the extent of deforestation in the Chorotega Region of Costa Rica, Juan Pablo Arroyo-Mora and colleagues used aerial photography and remote sensing data to track changes in the forest cover area across different land use capability class (categories that indicate possible uses of forest land.) Due to the Chorotega region's accessibility, various types of forest areas were converted to cattle practices as rising international meat prices drove a cattle ranching boom in the 1960s and 1970s. By the mid 1980s, however, increased public awareness and environmental reforms, along with a decline in meat prices, engendered a natural forest regrowth, as evident by the ______`,
      text: 'Which choice most effectively uses data from the graph to complete the assertion?',
      image: '/images/questions/rw_m1_q12_forest.png',
      imageDescription: 'Line graph showing "Forest Area for Three Land Use Capability Classes in the Chorotega Region, Costa Rica" from 1960 to 2000. Y-axis shows Area (square kilometers) from 0 to 1,050. Three lines represent Class VI (severe limitations on use for crops), Class VII (very severe limitations on use for crops), and Class I-IV (valuable for crops). All three classes show decline from 1960 to around 1979, then increase from 1986 to 2000.',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'difference between the forest cover area in Class I-V and in Class VI in 2000.' },
        { letter: 'B', text: 'increase in the forest cover area for all classes from 1979 to 2000.' },
        { letter: 'C', text: 'decrease in the forest cover area for all classes from 1960 to 1979.' },
        { letter: 'D', text: 'similarity in forest cover area in Class I-V and Class VII in 1986.' }
      ],
      correctAnswer: 'B'
    },

    // Question 13
    {
      id: 13,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Veronice L. Bura, Akito Y. Kawahara, and Jayne E. Yack investigated the evolution and function of sound production in silk moth and hawk moth caterpillars. They found that during harmless simulated attacks on isolated caterpillars, 33% of the tested species produced sound, which ranged from clicks in Manduca pellenia to whistles in Rhodinia fugax. Although some insects use sound to communicate with members of the same species, the researchers claim that the caterpillar sounds recorded in their study are directed primarily at predators.`,
      text: 'Which finding, if true, would most directly support Bura and colleagues\' claim?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'In most case, the sound that caterpillar species produced during simulated attacks was not produced by other caterpillar species during simulated attacks.' },
        { letter: 'B', text: 'Chickens and yellow warblers, two predators of caterpillars, have been observed to stop their attacks in response to caterpillars sounds.' },
        { letter: 'C', text: 'Caterpillar clicks were emitted in a frequency of detectable by birds that prey on caterpillar, but caterpillar whistles were not.' },
        { letter: 'D', text: 'Each caterpillar species tended to produce one sound during simulated attacks, although individuals occasionally made a variety of other sounds during simulated attacks as well.' }
      ],
      correctAnswer: 'B'
    },

    // Question 14
    {
      id: 14,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `The British Bronze Age began when sophisticated techniques for making tools, weapons, and other objects from metal were introduced to the British Isles around 2500 BCE, and it lasted until around 700 BCE. In Britain during this time, collections of valuable metal objects (called hoards) were sometimes buried for safekeeping. Some stayed buried for many centuries, such as the Parc-y-Meirch hoard, which was unearthed around 1868, and the Fittleworth hoard, discovered in 1995. And although the period is known as the Bronze Age, some hoards, like the Fittleworth hoard, contained decorative objects made of gold; gold was much rarer than bronze, however, and thus it is not surprising that ______`,
      text: 'Which choice most logically completes the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'some hoards contained no gold, as was the case for the Parc-y-Meirch hoard.' },
        { letter: 'B', text: 'most Bronze Age gold objects were melted down so that the gold could be reused.' },
        { letter: 'C', text: 'the skills needed to make tools and weapones from bronze were to adapt to making decorative items from gold.' },
        { letter: 'D', text: 'some hoards were found as a result of artifacts being dug up by accident.' }
      ],
      correctAnswer: 'A'
    },

    // Question 15
    {
      id: 15,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `The state of North Dakota has designated the spiny water flea as an invasive species that could outcompete some of the state's native species. Many other states draw similar distinctions between invasive and native species. But researchers Alejandro Camacho and Jason McLachlan have pointed out that Earth's climate is changing in ways that challenge such designations. Climate changes may cause animals to leave their current ranges and establish new ones. Climate changes may also create good habitats in areas where a species couldn't live previously. These observations suggest that ______`,
      text: 'Which choice most logically completes the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'It\'s useful at present for North Dakota to distinguish between invasive and native species in some instances but not in the case of the spiny water flea.' },
        { letter: 'B', text: 'North Dakota was previously home to some spiny water flea but they were outcompeted by invasive species.' },
        { letter: 'C', text: 'state such as North Dakota may need to reevaluate their classifications of species.' },
        { letter: 'D', text: 'North Dakota should coordinate with other states to protect their native species from invasive species.' }
      ],
      correctAnswer: 'C'
    },

    // Question 16
    {
      id: 16,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Water boils at around 212°F at sea level, but in Highland, Utah (elevation: 4,977 feet above sea level), it boils at around 202°F. Food writer J. Kenji López-Alt, who explores the science behind cooking, ______ that lower boiling points at higher elevations "can wreak all sorts of havoc on recipes."`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'explains' },
        { letter: 'B', text: 'explain' },
        { letter: 'C', text: 'have explained' },
        { letter: 'D', text: 'are explaining' }
      ],
      correctAnswer: 'A'
    },

    // Question 17
    {
      id: 17,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `It is widely known that New York City's Museum of Modern Art (MoMA) ______ a vast collection of oil paintings, including Franz Marc's The World Cow and Katherine S. Dreier's Abstract Portrait of Marcel Duchamp.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'housing' },
        { letter: 'B', text: 'to house' },
        { letter: 'C', text: 'to have housed' },
        { letter: 'D', text: 'houses' }
      ],
      correctAnswer: 'D'
    },

    // Question 18
    {
      id: 18,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Lily Everett and Mary Foote were among the 300 artists who exhibited at the 1913 Armory Show, a groundbreaking New York City art exhibition that introduced modernism to American audience. Marcel Duchamp's abstract cubist aesthetic received the most skepticism form critics, as ______ represented a radical departure from the more realistic painting style that was popular at the time.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'these' },
        { letter: 'B', text: 'they' },
        { letter: 'C', text: 'we' },
        { letter: 'D', text: 'it' }
      ],
      correctAnswer: 'D'
    },

    // Question 19
    {
      id: 19,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `In Moscow, Russia, the average temperature is 62.6 degrees Fahrenheit in June, ______ to 66.6 degree in July, and then dips slightly to 62.6 degrees in August.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'has risen' },
        { letter: 'B', text: 'rises' },
        { letter: 'C', text: 'rising' },
        { letter: 'D', text: 'rose' }
      ],
      correctAnswer: 'B'
    },

    // Question 20
    {
      id: 20,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `After finding information about Major Robert Odell Owens, who represented New York in the United States House of Representatives, the student discovered biographical sketches of two other Black Americans who served in ______ Josiah Thomas Walls of Florida and Thomas Ezekiel Miller of South Carolina.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Congress.' },
        { letter: 'B', text: 'Congress:' },
        { letter: 'C', text: 'Congress;' },
        { letter: 'D', text: 'Congress' }
      ],
      correctAnswer: 'B'
    },

    // Question 21
    {
      id: 21,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `The first documented use of the English word "depart" is attributed to poet Geoffrey Chaucer's 1386 work "The Parson's Tale." However, Chaucer didn't write in Modern English; ______ he wrote it what we now call Middle English, which was commonly used during the period.`,
      text: 'Which choice completes the text with the most logical transition?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'rather,' },
        { letter: 'B', text: 'finally,' },
        { letter: 'C', text: 'as a result,' },
        { letter: 'D', text: 'similarly,' }
      ],
      correctAnswer: 'A'
    },

    // Question 22
    {
      id: 22,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `In his essay "Of Coaches," French philosopher Michel de Montaigne explores a relatively light subject, but he expresses heavier fare in "Of the Inconvenience of Greatness." Regardless of subject matter, Montaigne works to question his own perceptive throughout his essay. ______ his personal motto was "What do I know?"`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Still,' },
        { letter: 'B', text: 'Conversely,' },
        { letter: 'C', text: 'Fittingly,' },
        { letter: 'D', text: 'Nowadays,' }
      ],
      correctAnswer: 'C'
    },

    // Question 23
    {
      id: 23,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Blanche K. Bruce was an outspoken abolitionist whose Washington, DC, home was a stop on the underground railroad (the network of people and places that some enslaved people used to escape to freedom). It was relatively rare for supporters of the railroad to be secretive about their antislavery views. ______ they were vocal abolitionist like Bruce.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Fittingly,' },
        { letter: 'B', text: 'Granted,' },
        { letter: 'C', text: 'For example,' },
        { letter: 'D', text: 'More often,' }
      ],
      correctAnswer: 'D'
    },

    // Question 24
    {
      id: 24,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `While researching a topic, a student has taken the following notes:
• The Archipelago-Madrean Mountains are located in northwestern Mexico.
• They cover an area of 1,038 square miles (mi²)
• The Big Hatchet Mountains are located in the southwestern United States.
• They cover an area of 65 mi²
• These mountain ranges are two of the dozens of "sky inlands" in the southwestern US and northwestern Mexico.
• A sky inland is an isolated mountain range whose environment differs dramatically from that of the surrounding lowlands.`,
      text: 'The student wants to emphasis the similarity between the two mountain ranges. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'There are dozens of different mountain ranges in located in the southwestern US and northwestern Mexico.' },
        { letter: 'B', text: 'The Archipelago-Madrean Mountains and the Big Hatchet Mountains are both inland mountain ranges whose surroundings are different from those of the surrounding mountains.' },
        { letter: 'C', text: 'The Archipelago-Madrean Mountains cover an area of 1,038 mi², while the Big Hatchet Mountains cover an area of 65 mi².' },
        { letter: 'D', text: 'Even though they are both sky inlands, the Archipelago-Madrean Mountains and the Big Hatchet Mountains are located in different countries.' }
      ],
      correctAnswer: 'B'
    },

    // Question 25
    {
      id: 25,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `While researching a topic, a student has taken the following notes:
• The Future of Nostalgia is a scholarly book by literary theorist Svetlana Boym.
• The book provides a multifaced exploration of the concept of nostalgia.
• Chapter 14 discusses themes of nostalgia in Joseph Brodsky's writing.
• Chapter 17 discusses various skeptics' takes on the concept of nostalgia.
• In chapter 17, Boym writes, "The poethics of nostalgia combines estrangement and human solidarity, affect and reflection."`,
      text: 'The student wants to provide a quotation from chapter 17. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'After discussing themes of nostalgia in Joseph Brodsky\'s writing, Svetlana Boym goes on to discuss various skeptics\' takes on the concept of nostalgia.' },
        { letter: 'B', text: 'Svetlana Boym\'s The Future of Nostalgia is a multifaced exploration of nostalgia.' },
        { letter: 'C', text: 'In an exploration of various skeptics\' takes on the concept of nostalgia, Svetlana Boym writes, "The poethics of nostalgia combines estrangement and human solidarity, affect and reflection."' },
        { letter: 'D', text: 'Svetlana Boym discusses themes of nostalgia in Joseph Brodsky\'s writing in chapter 14 of her book.' }
      ],
      correctAnswer: 'C'
    },

    // Question 26
    {
      id: 26,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `While researching a topic, a student has taken the following notes:
• Hina Hanta is an online archive curated by the Choctaw Nation of Oklahoma.
• Hina Hanta means "bright path" in Choctaw.
• It features images of cultural artifacts relevant to the history of the Choctaw people.
• It includes a cup (isht ishko in Choctaw) made from clay.
• It includes a stickball collar (innuchi) made from horsehair.`,
      text: 'The student wants to specify the cup\'s name in Choctaw. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'The Hina Hanta archive features cultural artifacts, such as a cup and a stickball collar, that are relevant to the history of the Choctaw people.' },
        { letter: 'B', text: 'The clay cup, which is included in the Hina Hanta online archive, is called an isht ishko in Choctaw.' },
        { letter: 'C', text: 'Hina Hanta, which means "bright path" in Choctaw, includes a cup in its archive.' },
        { letter: 'D', text: 'The name of the online archive Hina Hanta means "bright path" in Choctaw.' }
      ],
      correctAnswer: 'B'
    },

    // Question 27
    {
      id: 27,
      module: 1,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `While researching a topic, a student has taken the following notes:
• A currency is a money system.
• Sometimes, countries adopt a new currency to replace an older one.
• Mozambique adopted the escudo as its official currency in 1914.
• The metical replaced the escudo in 1980.
• The metical remains Mozambique's official currency.`,
      text: 'The student wants to specify how long Mozambique officially used the escudo. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Countries sometimes adopt new currency systems, as Mozambique did when it replaced the escudo with the metical.' },
        { letter: 'B', text: 'Though Mozambique currently uses the metical, the country\'s former official currency was introduced in 1914.' },
        { letter: 'C', text: 'The escudo was Mozambique\'s official currency from 1914 to 1980.' },
        { letter: 'D', text: 'The metical has been Mozambique\'s official currency since 1980, when it replaced the escudo.' }
      ],
      correctAnswer: 'C'
    },

    // ========================================
    // SECTION 1, MODULE 2: Reading and Writing
    // ========================================

    // Question 1 (Module 2)
    {
      id: 28,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `The following text is adapted from John Matheus's 1926 short story, "Mr. Bradford Teaches Sunday School." Mr. Bradford is driving through the countryside in Florida.

The moss in the towering water oaks had become enlivened with a verdant sheen of silver and hung like festoons of carnival or like funeral decorations for the mourning of the dead. The pine cones were pungent, the pine green was resplendent. The bald cypresses spread themselves along the water courses while the willows wept as they always did.

Mr. Bradford was conscious of this gorgeous display of nature.`,
      text: 'As used in the text, what does the word "display" most nearly mean?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Spectacle' },
        { letter: 'B', text: 'Reproduction' },
        { letter: 'C', text: 'Pretentiousness' },
        { letter: 'D', text: 'Disguise' }
      ],
      correctAnswer: 'A'
    },

    // Question 2 (Module 2)
    {
      id: 29,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Béláné Mocsáry, who traveled solo to four continents in the early 1900s, undoubtedly accomplished much, but her place in our historical memory is perhaps more ______ than that of a noteworthy "first" such as Adeline and Augusta Van Buren, who were the first women to ride solo motorcycles across the continental United States, a deed for which they will always be remembered.`,
      text: 'Which choice completes the text with most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'enduring' },
        { letter: 'B', text: 'conspicuous' },
        { letter: 'C', text: 'deserving' },
        { letter: 'D', text: 'uncertain' }
      ],
      correctAnswer: 'D'
    },

    // Question 3 (Module 2)
    {
      id: 30,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `A number of recording artists ______ distinctions between Indigenous music and other musical style. For example, Inuit singer-songwriter Tanya Tagaq incorporated Inuit throat singing into electronic music on her album Tongue, and Swinomist/Iñupiaq musician Black Belt Eagle Scout combined powwow-style melodies with rock on her album At the Party with My Brown Friends.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'disguise' },
        { letter: 'B', text: 'reject' },
        { letter: 'C', text: 'replace' },
        { letter: 'D', text: 'observe' }
      ],
      correctAnswer: 'B'
    },

    // Question 4 (Module 2)
    {
      id: 31,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Text corpora such as the British National Corpus are enormous collections of electronically stored texts that can be used for empirical testing of hypotheses regarding how ______ a word is in spoken and written English. For instance, one might have a guess about the incidence of the word "world," but only an analysis of a corpus can prove that "world" is the eighth most commonly used noun.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'pervasive' },
        { letter: 'B', text: 'credible' },
        { letter: 'C', text: 'assertive' },
        { letter: 'D', text: 'profound' }
      ],
      correctAnswer: 'A'
    },

    // Question 5 (Module 2)
    {
      id: 32,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `______ though it seemed to many mathematicians, the honeycomb conjecture, posited in the first century BCE, eventually yielded to the efforts of Thomas C. Hales, who presented a proof of it in 1999.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Irreproachable' },
        { letter: 'B', text: 'Unequivocal' },
        { letter: 'C', text: 'Insuperable' },
        { letter: 'D', text: 'Ineluctable' }
      ],
      correctAnswer: 'C'
    },

    // Question 6 (Module 2)
    {
      id: 33,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Mexican textile artist Victoria Villasana weave stories of triumph, using her unique method of applying colorful yarn to photographs of people. In some works, Villasana focuses on celebrating cultural icons who are people of color, as she does in her depiction of activist Ryu Gwansun. However, in other works, Villasana honors ordinary people, as she does in her captivating portrayal of young girl sitting on a sidewalk. Villasana sees both of these approaches as ways of depicting the power and interconnectedness of all people.`,
      text: 'Which choice best states the function of the underlined portion in the text as a whole?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'To emphasize that Villasana prefers to focus on famous figures in her work' },
        { letter: 'B', text: 'To offer an overview of Villasana artistic style' },
        { letter: 'C', text: 'To demonstrate the Villasana collaborates frequently with other artists' },
        { letter: 'D', text: 'To provide an example of an everyday individual whom Villasana has portrayed in her work' }
      ],
      correctAnswer: 'D'
    },

    // Question 7 (Module 2)
    {
      id: 34,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Text 1
For decades, ornithologists assumed that if they saw a singing Bell's vireo—a bird species found in temperate North American—they must be observing a male. That's because birdsong has long been considered a male trait; researchers have argued that males to attract mates and claim territory.

Text 2
Recent evidence shows that a female Bell's vireo is as capable of song as a male is. In fact, Karan J. Odom and colleagues found evidence of female song in 71% of the 323 species they examined. They claim that the historical mischaracterization of birdsong as a male trait is largely the result of bias: much of the research ornithologists have carried out has been near universities in the temperate northern hemisphere, where female birdsong is less common than it is in the tropics.`,
      text: 'Based on the text, how would Odom and colleagues (Text 2) most likely respond to the view of birdsong presented in Text 1?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'They would suggest that it reflects a tendency to study male birds rather than female birds.' },
        { letter: 'B', text: 'They would claim that other factors than mate attraction and territorial defense have driven that evolution of singing in male birds.' },
        { letter: 'C', text: 'They would underscore that male songbirds in temperature zones are likely using their songs for different purposes than are male songbirds in the tropics.' },
        { letter: 'D', text: 'They would argue that it was influenced by the kinds of study sites researchers tended to selected.' }
      ],
      correctAnswer: 'D'
    },

    // Question 8 (Module 2)
    {
      id: 35,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Like all species of baleen whales, the Antarctic minke whale feeds on tiny creatures known as krill by filtering water through bristlelike keratin structures called baleen plates. In this way, baleen whales can eat up to 30 percent of their total mass per day. And while no one would call the Antarctic minke whale small—it can have a mass as high as 10,000 kg—it is one of the smaller whales and is much smaller than the bowhead whale, which can weight a whopping 66,000 kg and consume as much as 19,800 kg of krill per day.`,
      text: 'Based on the text, what can most reasonably be concluded about krill consumption among Antarctic minke and bowhead whale?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'The bowhead whale is able to eat more krill per day than the Antarctic minke whale is.' },
        { letter: 'B', text: 'Both the Antarctic minke whale and the bowhead whale can eat as much as 19,800 kg of krill per day.' },
        { letter: 'C', text: 'The quantities of krill consumed by bowhead whale has made it difficult for Antarctic minke whales to find sufficient food.' },
        { letter: 'D', text: 'Most baleen whales included krill in their diary, but the Antarctic minke whale is less likely than the bowhead whale to do so.' }
      ],
      correctAnswer: 'A'
    },

    // Question 9 (Module 2)
    {
      id: 36,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Meredith E. Protas and colleagues have explored how convergent evolution—a phenomenon that occurs when the same trait evolves independently in two reproductively separate lineages—can result from a genetic mechanism shared by both lineages. Meanwhile, Bas J. Zwaan and colleagues have investigated how convergence occurs through different genetic mechanisms, but the relative prevalence of convergence through shared and different genetic processes is still poorly understood. This motivated biologist Delbert A. Green II and Cassandra G. Extavour to evaluate both types of convergence in a single study for their 2012 paper.`,
      text: 'Which choice best states the main idea of the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Before Green and Extavour\'s study, convergence evolution was assumed to require a shared genetic mechanism between two lineages that shared the trait.' },
        { letter: 'B', text: 'Green and Extavour\'s study was conducted using data from the studies by Protas and colleagues and Zwaan and colleagues.' },
        { letter: 'C', text: 'Green and Extavour\'s study addresses convergent evolution more comprehensively than the studies by Protas and colleagues and Zwaan and colleagues do.' },
        { letter: 'D', text: 'Both the study by Protas and colleagues and that by Green and Extavour compare convergence through shared genetic mechanism to convergence through different genetic mechanisms.' }
      ],
      correctAnswer: 'C'
    },

    // Question 10 (Module 2)
    {
      id: 37,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `US Hydroelectric Power Plants, 2019

| Plant | State | Mode | Generators in plant | Average power generation (MWh/yr) | Water source |
|-------|-------|------|---------------------|-----------------------------------|--------------|
| Kaw Hydro | Oklahoma | run-of-river | 1 | 103,163 | Arkansas River |
| Kankakee Hydro Facility | Illinois | run-of-river | 3 | 1,832 | Kankakee River |
| Richard B. Russell | Georgia | peaking | 8 | 394,195 | Savannah River |
| Gaston Shoals | South Carolina | peaking | 4 | 14,059 | Broad River |

A run-of-river hydroelectric power plant, as the name suggests, uses the natural flow of a water source to generate electricity but is unable to start or stop that flow through its generator. In contrast, a peaking hydroelectric power plant (used when demand for electricity peaks) controls the flow of water through its generators: starting flow when demand is high enough, stopping it when demand is too low, and otherwise regulating it to keep pace with changing electricity needs. Although peaking plants do not typically operate continuously as run-of-river plants do, peaking plants can generate more megawatt-hour of power per year (MWh/yr) than some run-of-river plants. For example, the ______`,
      text: 'Which choice most effectively uses data from the table to complete the example?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'average power generated annually by the Richard B. Russell plant is higher than that generated by any of the run-of-river plants in the table.' },
        { letter: 'B', text: 'Gaston Shoals plant, which is a peaking plant, has more generators than any of the other plants in the table.' },
        { letter: 'C', text: 'average power generated annually by the Kaw Hydro plant is higher than that generated by the Gaston Shoals plant.' },
        { letter: 'D', text: 'run-of-river plant with the highest average annual power generation in the table generates more electricity than the peaking plant with the highest annual power generation in the table.' }
      ],
      correctAnswer: 'A'
    },

    // Question 11 (Module 2)
    {
      id: 38,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Days per Winter That Lakes Have Surface Ice

| Lake | Latitude (degrees) | 1980-81 | 1985-86 | 1990-91 | 1995-96 | 2000-01 | 2005-06 |
|------|-------------------|---------|---------|---------|---------|---------|---------|
| Kalmarinjärvi | 62.79 | 198 | 172 | 175 | 184 | 131 | 152 |
| Lake Neusiedl | 47.82 | 77 | 86 | 87 | 128 | 50 | 104 |
| Mirror Lake | 43.94 | 122 | 129 | 125 | 136 | 141 | 119 |

It is common for freshwater lakes near or above a latitude of 45° north of the equator, like Lake Mjosa in Norway, to accumulate surface ice in winter. The amount and duration of ice depends on many factors, including local weather conditions as well as the lake's depth, volume, and surface area, but a climate researcher claims that some lakes in these latitudes have seen a decline in the duration of ice between the early 1980s and the mid-2000s.`,
      text: 'Which choice best describe data in the table that support the researcher\'s claim?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Kalmarinjärvi had fewer days of ice in the winter of 2005-06 that it did in the winter of 1980-81.' },
        { letter: 'B', text: 'Kalmarinjärvi is at a higher latitude than Mirrow Lake and typically had fewer days of ice per winter than Mirrow Lake did.' },
        { letter: 'C', text: 'Kalmarinjärvi is at a higher latitude than Mirrow Lake and typically had more days of ice per winter than Mirrow Lake did.' },
        { letter: 'D', text: 'Lake Neusiedl had more days of ice in the winter of 2005-06 than it did in the winter of 1980-81.' }
      ],
      correctAnswer: 'A'
    },

    // Continue with remaining Module 2 RW questions...
    // Question 12 (Module 2)
    {
      id: 39,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Some fuel additives contain cerium oxide nanoparticles (CeO₂-NPs), which can leach into waterways and soils via wastewater. In a 2015 study, Maël Garaud and colleagues found that CeO₂-NPs can accumulate in the bodies of zebra mussels (Dreissena polymorpha). While bioaccumulation of manufactured nanoparticles may be inherently worrisome, it has been hypothesized that CeO₂-NP bioaccumulation in invertebrate like D. polymorpha could serve a valuable proxy role, observing the need for manufacturers to conduct costly and intrusive sampling of vertebrate species—such as rainbow trout (Oncorhynchus mykiss), commonly used in regulatory compliance testing—for manipulative bioaccumulation, as environmental protection laws currently require.`,
      text: 'Which finding, if true, would most directly weaken the hypothesis presented in the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'When D. polymorpha and O. mykiss are exposed to similar levels of CeO₂-NPs, concentrations of CeO₂-NPs in animals of both species show little variation from individual to individual.' },
        { letter: 'B', text: 'The rate of CeO₂-NP uptake in D. polymorpha differs from the rate of CeO₂-NP uptake in O. mykiss in a way that is not yet well understood by researchers.' },
        { letter: 'C', text: 'D. polymorpha has been shown to accumulate several other types of manufactured nanoparticles in addition to CeO₂-NPs, whereas O. mykiss has been shown to accumulate only CeO₂-NPs.' },
        { letter: 'D', text: 'Compared with O. mykiss, D. polymorpha can accumulate detectable CeO₂-NP concentrations with significantly fewer negative effects.' }
      ],
      correctAnswer: 'D'
    },

    // Question 13 (Module 2)
    {
      id: 40,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Callie W Babbitt, Hema Madaka, and colleagues assembled a database of materials used in consumer electronics by studying products in the lab and by gathering data from similar product studies. The team gave each of these studies a rating for level of traceability (with a higher rating for clearer description of procedures) and for category consistency (with a higher rating for using materials categories more closely aligned with the categories in the team's database). Based on these ratings, a second research team concluded that the methodology was better explained in a study by Jaco Huisman and colleagues than it was in a study by Oguchi Masahiro and colleagues.`,
      text: 'Which finding, if true, would most directly challenges the second research team\'s conclusion?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'The study by Huisman and colleagues had a lower traceability rating than the study by Oguchi and colleagues did.' },
        { letter: 'B', text: 'The study by Huisman and colleagues had a high consistency rating and a high traceability rating.' },
        { letter: 'C', text: 'The study by Huisman and colleagues had a lower consistency rating than the study by Oguchi and colleagues did.' },
        { letter: 'D', text: 'The study by Oguchi and colleagues had a low consistency rating and a low traceability rating.' }
      ],
      correctAnswer: 'A'
    },

    // Question 14 (Module 2)
    {
      id: 41,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Arthurian legends (tales related to the character of King Arthur) derive from many sources, such as Preiddeu Annwfn, composed around 900, and Perceval, the Story of the Grail from around 1181. Sir Thomas Malory's 15th-centruy text Le Morte d'Arthur was an attempt to compile these stories into a coherent narrative. Many of Malory's sources derive from Geoffrey of Monmouth's History of the Kings of Britain, written in the 1130s. While neither History nor any works that predate it mention Arthur's famous Round Table at which his knights assembled, Le Morte d'Arthur does, suggesting that ______`,
      text: 'Which choice most logically completes the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Geoffrey of Monmouth\'s accounts of Arthurian legends in History are more similar overall in content to the accounts in Perceval, the Story of the Grail than they are to the account in Le Morte d\'Arthur.' },
        { letter: 'B', text: 'Malory encountered the Round Table in a version that Geoffrey of Monmouth was not familiar with when writing his History.' },
        { letter: 'C', text: 'Le Morte d\'Arthur is more historically accurate than History, because Perceval, the Story of the Grail had not been written when Geoffrey of Monmouth was writing his work.' },
        { letter: 'D', text: 'When a version of an Arthurian legends contradicted the version in History, Malory preferred to include Geoffrey of Monmouth\'s version in Le Morte d\'Arthur.' }
      ],
      correctAnswer: 'B'
    },

    // Question 15 (Module 2)
    {
      id: 42,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `In June of 1987, South Korean liberalized its stock market, meaning that it began allowing foreign individuals and businesses to invest money in South Korean companies. This was part of a wave of stock markets liberalization from the mid-1980s through the mid-1990s—Brazil in 1988, Venezuela in 1990, and so on. In an analysis of economic data from 1976 to 1993, Ross Levine and Sara Zervos found that liberalization did not lead to enduring increases in investment in companies based in countries that liberalized. Peter Blair Henry, however, found that, on average, investment in companies in liberalized countries increased significantly in the three years following liberation. Taken together, these results suggest that ______`,
      text: 'Which choice most logically completes the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'investment growth is likely to be more consistent in countries that liberalize than in countries that do not.' },
        { letter: 'B', text: 'it typically takes at least three years for companies to benefit from government policies allowing foreign investment, but governments rarely maintain such policies for that long.' },
        { letter: 'C', text: 'economist\'s expectations about the effect of liberalization on investment were largely correct.' },
        { letter: 'D', text: 'companies based in countries that begin allowing foreign investment will probably see short term increases in investment, but that their gains are unlikely to last.' }
      ],
      correctAnswer: 'D'
    },

    // Question 16 (Module 2)
    {
      id: 43,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Each year, the Nobel Prize in Literature is given to an author who has, in the words of its founder Alfre Nobel, "produced the most outstanding work in an idealistic ______ in 1952, for instance, judges recognized François Mauriac "for the deep spiritual insight and the artistic intensity with which he has in his novels penetrated the drama of human life."`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'direction" and,' },
        { letter: 'B', text: 'direction"' },
        { letter: 'C', text: 'direction,"' },
        { letter: 'D', text: 'direction";' }
      ],
      correctAnswer: 'C'
    },

    // Question 17 (Module 2)
    {
      id: 44,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `In Los Angeles County, California, bicycle paths such as the San Gabriel River bicycle path—which is 28 miles long—have become an increasingly popular means of travel. Moreover, lawyer and cycling ______ has identified several features of the Los Angeles landscape, like its temperate climate and mostly flat roads, that make the city naturally bike-friendly.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'advocate Ernesto Hernandez-Lopez,' },
        { letter: 'B', text: 'advocate, Ernesto Hernandez-Lopez,' },
        { letter: 'C', text: 'advocate Ernesto Hernandez-Lopez' },
        { letter: 'D', text: 'advocate, Ernesto Hernandez-Lopez,' }
      ],
      correctAnswer: 'C'
    },

    // Question 18 (Module 2)
    {
      id: 45,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Yerevan is the capital city of Armenia and, ______ roughly one million people, home to an impressive 36 percent of Armenia's total population.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'contained' },
        { letter: 'B', text: 'contains' },
        { letter: 'C', text: 'containing' },
        { letter: 'D', text: 'has contained' }
      ],
      correctAnswer: 'C'
    },

    // Question 19 (Module 2)
    {
      id: 46,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `It was the kind of challenge that would set any art curator's mind into ______ that elusive thread that could link artists as disparate as American abstract painter Anne Ryan, Romanian impressionist painter Micaela Eleutheriade, and Flemish mannerist painter Anthony van Dyck.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'motion, finding:' },
        { letter: 'B', text: 'motion. Finding' },
        { letter: 'C', text: 'motion; finding' },
        { letter: 'D', text: 'motion: finding' }
      ],
      correctAnswer: 'D'
    },

    // Question 20 (Module 2)
    {
      id: 47,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `In 2020, internationally renowned Slovak photographer Mária Švarbová exhibited her work at the Contessa Gallery and the Art Angle Gallery in the United States and ______ utilizing vivid pastel colors, overexposed tones, and mirrorlike symmetry, Švarbová's photographs evoke a Socialist-era aesthetic that she describes as "minimalistic but also futuristic."`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Japan, respectively,' },
        { letter: 'B', text: 'Japan, respectively;' },
        { letter: 'C', text: 'Japan; respectively,' },
        { letter: 'D', text: 'Japan, respectively' }
      ],
      correctAnswer: 'B'
    },

    // Question 21 (Module 2)
    {
      id: 48,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Though he's performed on many respected albums, including Trypnotyx by Victor Wooten, drummer Dennis Chambers may be best known for his time as house drummer for the hip-hop label Sugar Hill Records. He did not play drums on the label's classic song "Rapper's ______ he joined the label after the song's release.`,
      text: 'Which choice completes the text with the most logical transition?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Delight," however,' },
        { letter: 'B', text: 'Delight," however;' },
        { letter: 'C', text: 'Delight." However,' },
        { letter: 'D', text: 'Delight" however' }
      ],
      correctAnswer: 'B'
    },

    // Question 22 (Module 2)
    {
      id: 49,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `With their distinctive cone shapes and steeply sloping sides, the volcanoes Maungarei (New Zealand) and Harunasan (Japan) may look similar from afar. Tehnuka Ilanko and other volcanologists, ______ can tell by how each was formed that Maungarei is a cinder cone volcano, while Harunasan is a composite volcano.`,
      text: 'Which choice completes the text with the most logical transition?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'in addition,' },
        { letter: 'B', text: 'therefore,' },
        { letter: 'C', text: 'for example,' },
        { letter: 'D', text: 'though,' }
      ],
      correctAnswer: 'D'
    },

    // Question 23 (Module 2)
    {
      id: 50,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `Space scientist Maggie Aderin-Pocock is excited about the potential of the new James Webb Space Telescope (JWST). Unlike its predecessor the Hubble Telescope, the JWST is optimized for infrared wavelength. When light from distant galaxies is infrared, ______ the JWST can provide sharp images that reveal much more information about those galaxies than the Hubble could.`,
      text: 'Which choice completes the text with the most logical transition?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'consequently,' },
        { letter: 'B', text: 'admittedly,' },
        { letter: 'C', text: 'actually,' },
        { letter: 'D', text: 'in addition,' }
      ],
      correctAnswer: 'A'
    },

    // Question 24 (Module 2)
    {
      id: 51,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `While researching a topic, a student has taken the following notes:
• Antonio Stradivari (1644-1737) made about 1,000 violins in his lifetime.
• Musicians prize his Stradivarius violins for their famed sound quality.
• Many of the 500 or so that exist today are named for a previous owner.
• The Jules Falk Stradivarius is named for Jules Falk, an American violinist.`,
      text: 'Which choice most effectively uses information from the given sentences to explain how the Jules Falk Stradivarius got its name?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Jules Falk was an American violinist.' },
        { letter: 'B', text: 'Of the 1,000 or so violins Antonio Stradivari made, only about 5000 exist today.' },
        { letter: 'C', text: 'Designed by Antonio Stradivari, Stradivarius violins like the Jules Falk are renowned for their quality.' },
        { letter: 'D', text: 'The Jules Falk Stradivarius is named after its former owner, July Falk.' }
      ],
      correctAnswer: 'D'
    },

    // Question 25 (Module 2)
    {
      id: 52,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `While researching a topic, a student has taken the following notes:
• Grimanesa Amoros is a Peruvian American artist.
• She is well known for her large-scale LED light sculptures.
• Argentum debuted in 2018 at the Bronx Museum of the Arts in New York City, New York.
• It is made of iridescent multicolored LED domes.
• It occupies 253 cubic feet of space.`,
      text: 'Which choice most effectively uses information from the given sentences to emphasize when and where Argentum debuted?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'As is common of Grimanesa Amoros\'s sculptures, the iridescent multicolored LED domes of Argentum cut an imposing 253 cubic foot figure when the piece debuted.' },
        { letter: 'B', text: 'Artist Grimanesa Amoros often works with light in her sculptures, which tend to be large in scale.' },
        { letter: 'C', text: 'In 2018, Grimanesa Amoros debuted Argentum in New York City, New York.' },
        { letter: 'D', text: 'Grimanesa Amoros is a Peruvian American artist who often works with LED light in her large-scale sculptures, such as Argentum [2018].' }
      ],
      correctAnswer: 'C'
    },

    // Question 26 (Module 2)
    {
      id: 53,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `While researching a topic, a student has taken the following notes:
• Calida Garcia Rawles is an African American painter.
• She is known for her large-scale, hyperrealistic paintings depicting African American figures in water.
• The painting Lightness of Being (24 × 30 in) depicts a young man with his arms outstretched floating on the right side of the canvas.
• Lost in the Shuffle (36 × 24 in) depicts two young men with their arms outstretched floating in the bottom left and upper right conners of the canvas.
• She paints the water with vivid blue colors, including sky blue and indigo.
• The mood in the painting is calm.`,
      text: 'Which choice most effectively uses information from the given sentences to emphasize the location of the figures in Lost in the Shuffle?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'At 36 by 24 inches, Rawles\'s Lost in the Shuffle is even larger than the sizable 24-by 30-inch painting Lightness of Being.' },
        { letter: 'B', text: 'Rawles captures the water in painting such as Lightness of Being and Lost in the Shuffle in vivid hues of sky blue and indigo.' },
        { letter: 'C', text: 'In Rawles\'s painting Lost in the Shuffle, two young men are depicted in the bottom left and upper right corners of the canvas.' },
        { letter: 'D', text: 'While the number of figures may differ, constant among Rawles\'s hyperrealistic works is the calm mood that painting evoke.' }
      ],
      correctAnswer: 'C'
    },

    // Question 27 (Module 2)
    {
      id: 54,
      module: 2,
      domain: '', // TODO: categorize as information_ideas, craft_structure, expression_ideas, or standard_conventions
      passage: `While researching a topic, a student has taken the following notes:
• Ynés Mexía was a Mexican American botanist.
• Between 1917 and 1938, she collected over 150,000 botanical samples throughout the Americas.
• She collected a sample of Trixis antimenorrhoea in Minas Gerais, Brazil, on June 26, 1930.
• She collected a sample of Stephanomeria thurberi in Chihuahua, Mexico, on May 27, 1929.
• These specimens are members of the Asteraceae family.
• They can now be viewed online at the C.V. Starr Virtual Herbarium.`,
      text: 'Which choice most effectively uses information from the given sentences to emphasize when she collected both of the samples?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Thousands of botanical samples collected by Ynés Mexía can now be found in one place: online at the C.V. Starr Virtual Herbarium.' },
        { letter: 'B', text: 'While both specimens collected by Ynés Mexía are members of the same family, Trixis antimenorrhoea was found in Minas Gerais and Stephanomeria thurberi was found in Chihuahua.' },
        { letter: 'C', text: 'On June 26 in 1930, Ynés Mexía added a new specimen to her growing collection of botanical samples: Trixis antimenorrhoea of the Asteraceae family.' },
        { letter: 'D', text: 'Ynés Mexía collected a ssample of Trixis antimenorrhoea in June of 1930, after collecting Stephanomeria thurberi in May of 1929.' }
      ],
      correctAnswer: 'D'
    }
  ],

  math: [
    // ========================================
    // SECTION 2, MODULE 1: Math
    // ========================================

    // Question 1
    {
      id: 1,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      passage: `The table summarizes the UV index value recorded by a research assistant at noon each day for 49 days.

| UV index | Number of days |
|----------|----------------|
| 1 | 9 |
| 2 | 15 |
| 3 | 12 |
| 4 | 13 |`,
      text: 'According to the table, a UV index value of 1 was recorded on how many days?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '4' },
        { letter: 'B', text: '9' },
        { letter: 'C', text: '40' },
        { letter: 'D', text: '49' }
      ],
      correctAnswer: 'B'
    },

    // Question 2
    {
      id: 2,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'To make a bookcase, a woodworker charged a onetime fee plus $17 per hour worked. The equation 17h + 45 = 164 represents this situation, where h is the number of hours worked. Which of the following is the best interpretation of 164 in this context?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'The onetime fee, in dollars' },
        { letter: 'B', text: 'The number of hours worked' },
        { letter: 'C', text: 'The charge per hour, in dollars' },
        { letter: 'D', text: 'The total charge, in dollars' }
      ],
      correctAnswer: 'D'
    },

    // Question 3
    {
      id: 3,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'In December 2017, the lowest temperature recorded in a certain city was 40 degrees Fahrenheit (°F) and the highest temperature recorded was 90°F. Which inequality is true for all values of t, where t represents any temperature, in °F, recorded in the city in December 2017?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '40 ≤ t ≤ 90' },
        { letter: 'B', text: 't ≤ 40' },
        { letter: 'C', text: 't ≤ 50' },
        { letter: 'D', text: 't ≥ 90' }
      ],
      correctAnswer: 'A'
    },

    // Question 4
    {
      id: 4,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'The function f is defined by f(x) = 6(2x + 4). For what value of x does f(x) = 48?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '2' },
        { letter: 'B', text: '6' },
        { letter: 'C', text: '8' },
        { letter: 'D', text: '22' }
      ],
      correctAnswer: 'A'
    },

    // Question 5
    {
      id: 5,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'The ratio of green tiles to blue tiles in a piece of artwork is 5 to 2. If there are 16 blue tiles in the piece of artwork, how many green tiles are there?',
      type: 'fillIn',
      correctAnswer: '40'
    },

    // Question 6
    {
      id: 6,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'Which of the following equations is the most appropriate linear model for the data shown?',
      image: '/images/questions/math_m1_q6_scatter.png',
      imageDescription: 'A scatterplot showing the relationship between two variables, x and y. The y-axis ranges from 0 to 30, and the x-axis ranges from 0 to 4. Points show a negative correlation, starting around (0, 25) and decreasing to approximately (4, 8).',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'y = -6 + 28x' },
        { letter: 'B', text: 'y = -6 - 28x' },
        { letter: 'C', text: 'y = 28 + 6x' },
        { letter: 'D', text: 'y = 28 - 6x' }
      ],
      correctAnswer: 'D'
    },

    // Question 7
    {
      id: 7,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'A scientist analyzed a soil sample with a mass of 900 grams and determined that it contained 189 grams of water. What is the percentage of water, by mass, in this soil sample?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '9%' },
        { letter: 'B', text: '9.9%' },
        { letter: 'C', text: '18.9%' },
        { letter: 'D', text: '21%' }
      ],
      correctAnswer: 'D'
    },

    // Question 8
    {
      id: 8,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'Line n is shown in the xy-plane. Line k (not shown) is perpendicular to line n. What is the slope of line k?',
      image: '/images/questions/math_m1_q8_line.png',
      imageDescription: 'A coordinate plane showing line n passing through approximately (-2, 2) and (0, 3), with a positive slope of about 1/5 or 0.2. The line continues in both directions.',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '-1/5' },
        { letter: 'B', text: '-1/6' },
        { letter: 'C', text: '5' },
        { letter: 'D', text: '6' }
      ],
      correctAnswer: 'A'
    },

    // Question 9
    {
      id: 9,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'mx + ky = -83\n2x + ky = 22\n\nIn the given system of equation, m and k are constants. The graphs of these equations in the xy-plane intersect at the point (5, y). What is the value of m?',
      type: 'fillIn',
      correctAnswer: '-19'
    },

    // Question 10
    {
      id: 10,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'For the linear function f, the graph of y = f(x) in the xy-plane passes through the point (0, 2) and (3, 3). What is the slope of y = f(x)?',
      type: 'fillIn',
      correctAnswer: '1/3'
    },

    // Question 11
    {
      id: 11,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'A certain book has 250 pages, and 21 of these pages have an illustration. If one of the book\'s pages is selected at random, what is the probability of selecting a page with an illustration? (Express your answer as a decimal or fraction, not as a percent.)',
      type: 'fillIn',
      correctAnswer: '0.084'
    },

    // Question 12
    {
      id: 12,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'b² + 5c = 9d\n\nThe given equation relates the real numbers b, c, and d, where d > 5/9 c. Which equation correctly express b in terms of c and d?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'b = (9d + 5c)/2' },
        { letter: 'B', text: 'b = (9d - 5c)/2' },
        { letter: 'C', text: 'b = ±√(9d + 5c)' },
        { letter: 'D', text: 'b = ±√(9d - 5c)' }
      ],
      correctAnswer: 'D'
    },

    // Question 13
    {
      id: 13,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'A right circular cylinder has a height of 4 meters (m) and a base with a radius of 18 m. What is the volume, in m³, of the cylinder?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '4π' },
        { letter: 'B', text: '22π' },
        { letter: 'C', text: '288π' },
        { letter: 'D', text: '1,296π' }
      ],
      correctAnswer: 'D'
    },

    // Question 14
    {
      id: 14,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'What is the y-intercept of the graph of 3x + 2y = 96 in the xy-plane?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '(0, 5)' },
        { letter: 'B', text: '(0, 6)' },
        { letter: 'C', text: '(0, 32)' },
        { letter: 'D', text: '(0, 48)' }
      ],
      correctAnswer: 'D'
    },

    // Question 15
    {
      id: 15,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'If (6/7)p + 12 = 54, what is the value of 7p?',
      type: 'fillIn',
      correctAnswer: '343'
    },

    // Question 16
    {
      id: 16,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'A certain neighborhood had a population of 1,340 in 2009. Each year for the next 5 years, the population of the neighborhood increased by approximately 3% of the population the previous year. Which of the following equations represents the population, N, of the neighborhood t years after 2009, where t ≤ 5?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'N = 0.03(1,340)ᵗ' },
        { letter: 'B', text: 'N = 1,340(0.03)ᵗ' },
        { letter: 'C', text: 'N = 1,340(1.03)ᵗ' },
        { letter: 'D', text: 'N = 1.03(1,340)ᵗ' }
      ],
      correctAnswer: 'C'
    },

    // Question 17
    {
      id: 17,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'In the xy-plane, which of the following does NOT contain any points (x, y) that are solutions to 7x + 4y > 12?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'The region where x > 0 and y > 0' },
        { letter: 'B', text: 'The region where x < 0 and y > 0' },
        { letter: 'C', text: 'The region where x < 0 and y < 0' },
        { letter: 'D', text: 'The region where x > 0 and y < 0' }
      ],
      correctAnswer: 'C'
    },

    // Question 18
    {
      id: 18,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'In triangle RST, the measure of angle R is 10 degrees and the measure of angle T is 50 degrees. Point L lies on RS, point K lies on ST, and LK is parallel to RT. What is the measure, in degree, of angle SKL? (Disregard the degree symbol when entering your answer.)',
      type: 'fillIn',
      correctAnswer: '50'
    },

    // Question 19
    {
      id: 19,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'An auditorium has seats for 3,200 people. Tickets to attend a show at the auditorium currently cost $8.00. For each $1.00 increase to the ticket price, 100 fewer tickets will be sold. This situation can be modeled by the equation y = -100x² + 2,400x + 25,600, where x represents the increase in ticket price, in dollars, and y represents the revenue, in dollars, from ticket sales. If this equation is graphed in the xy-plane, at what value of x is the maximum of the graph?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '8' },
        { letter: 'B', text: '12' },
        { letter: 'C', text: '24' },
        { letter: 'D', text: '32' }
      ],
      correctAnswer: 'B'
    },

    // Question 20
    {
      id: 20,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: '(x + 3)² + (y - 4)² = 25\n\nIn the xy-plane, the graph of the given equation is circle. Which point lies on this circle?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '(-3, 4)' },
        { letter: 'B', text: '(3, -4)' },
        { letter: 'C', text: '(√11 + 3, √14 - 4)' },
        { letter: 'D', text: '(√11 - 3, √14 + 4)' }
      ],
      correctAnswer: 'D'
    },

    // Question 21
    {
      id: 21,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'The expression (x²⁰(x - 4))/(5x²) + (4x²⁰)/(5x²) is equivalent to (1/5)xᶜ, where c is a constant and x > 0. What is the value of c?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '4' },
        { letter: 'B', text: '5' },
        { letter: 'C', text: '19' },
        { letter: 'D', text: '21' }
      ],
      correctAnswer: 'C'
    },

    // Question 22
    {
      id: 22,
      module: 1,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'Triangle ABC is similar to triangle DEF, where angle A corresponds to angle D and angle C and F are right angles. The length of AB is 2.4 times the length of DE. If tan A = 21/20, what is the value of sin D?',
      type: 'fillIn',
      correctAnswer: '21/29'
    },

    // ========================================
    // SECTION 2, MODULE 2: Math
    // ========================================

    // Question 1 (Module 2)
    {
      id: 23,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'The speed of a white-throated needletail, a type of bird, in flight was measured to be 49 miles per hour. What was the white-throated needletail\'s measured speed, in __kilometers__ per hour? (Use 1 mile = 1.6 kilometers.)',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '30.6' },
        { letter: 'B', text: '47.4' },
        { letter: 'C', text: '50.6' },
        { letter: 'D', text: '78.4' }
      ],
      correctAnswer: 'D'
    },

    // Question 2 (Module 2)
    {
      id: 24,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'Which expression is equivalent to (3x³ - x² + 4)(5x² + 8x)?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '15x⁵ + 19x⁴ - 8x³ - 20x + 32' },
        { letter: 'B', text: '15x⁵ + 19x⁴ - 8x³ - 20x² + 32' },
        { letter: 'C', text: '15x⁵ + 19x⁴ - 8x³ - 20x² + 32x' },
        { letter: 'D', text: '15x⁵ + 29x⁴ - 8x³ - 20x² + 32x' }
      ],
      correctAnswer: 'C'
    },

    // Question 3 (Module 2)
    {
      id: 25,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'If 5(x + 1) = 25, what is the value of x + 1?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '4' },
        { letter: 'B', text: '5' },
        { letter: 'C', text: '19' },
        { letter: 'D', text: '20' }
      ],
      correctAnswer: 'B'
    },

    // Question 4 (Module 2)
    {
      id: 26,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'The graph shows the estimated concentration of a certain strain of bacteria, y, in millions of cells per mL of nutrient medium, over time x, in minutes since the initial measurement. According to the graph, which of the following is closest to the number of minutes it took for the estimated concentration of the bacteria to increase from 20 million cells per mL of nutrient medium to 30 million cells per mL of nutrient medium?',
      image: '/images/questions/math_m2_q4_bacteria.png',
      imageDescription: 'A graph showing exponential growth of bacteria concentration over time. The x-axis shows Time (minutes) from 0 to 80, and the y-axis shows Concentration of bacteria (millions of cells per mL) from 0 to 80. The curve starts near 10 at x=0 and increases exponentially, reaching about 80 at x=80.',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '15' },
        { letter: 'B', text: '20' },
        { letter: 'C', text: '30' },
        { letter: 'D', text: '35' }
      ],
      correctAnswer: 'A'
    },

    // Question 5 (Module 2)
    {
      id: 27,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'If (x + 3)² = 30, what is the value of x² + 6x?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '21' },
        { letter: 'B', text: '30' },
        { letter: 'C', text: '39' },
        { letter: 'D', text: '60' }
      ],
      correctAnswer: 'A'
    },

    // Question 6 (Module 2)
    {
      id: 28,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'y = 5x\ny = 2x + 2\n\nHow many solutions does the given system of equations have?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Exactly one' },
        { letter: 'B', text: 'Exactly two' },
        { letter: 'C', text: 'Infinitely many' },
        { letter: 'D', text: 'Zero' }
      ],
      correctAnswer: 'A'
    },

    // Question 7 (Module 2)
    {
      id: 29,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'f(x) = |71 - 2x|\n\nThe function f is defined by the given equation. For which of the following values of k does f(k) = 3k?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '71/5' },
        { letter: 'B', text: '71/2' },
        { letter: 'C', text: '213/5' },
        { letter: 'D', text: '71' }
      ],
      correctAnswer: 'A'
    },

    // Question 8 (Module 2)
    {
      id: 30,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'g(x) = 2(16x - 17)\n\nWhat is the y-coordinate of the y-intercept of the graph of y = g(x) - 3 in the xy-plane?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '-37' },
        { letter: 'B', text: '-34' },
        { letter: 'C', text: '-20' },
        { letter: 'D', text: '-17' }
      ],
      correctAnswer: 'A'
    },

    // Question 9 (Module 2)
    {
      id: 31,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      passage: `| x | y |
|---|---|
| 0 | n |
| 4 | n + 19 |
| 8 | n + 38 |`,
      text: 'There is a linear relationship between x and y. The table shows three values of x and their corresponding value of y in terms of a constant n. What is the slope of the line that represents this relationship in the xy-plane?',
      type: 'fillIn',
      correctAnswer: '19/4'
    },

    // Question 10 (Module 2)
    {
      id: 32,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: '18x² + 24x + c = 0\n\nIn the given equation, c is a constant. The equation has exactly one solution. What is the value of c?',
      type: 'fillIn',
      correctAnswer: '8'
    },

    // Question 11 (Module 2)
    {
      id: 33,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: '(x - 3) - 8(y + 9) = 129\n(x - 3) + 8(y + 9) = 432\n\nThe solution to the given system of equations is (x, y). What is the value of 8(x - 3)?',
      type: 'fillIn',
      correctAnswer: '2244'
    },

    // Question 12 (Module 2)
    {
      id: 34,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'The volume of a right rectangular prism with a square base is 2,448 cubic centimeters. If the area of the square base is 144 square centimeters, what is the area, in square centimeters, of one of the four lateral faces of the prism?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '17' },
        { letter: 'B', text: '204' },
        { letter: 'C', text: '540' },
        { letter: 'D', text: '816' }
      ],
      correctAnswer: 'B'
    },

    // Question 13 (Module 2)
    {
      id: 35,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'y = 5(x - 2)²\ny = 10(x - 2)\n\nA solution to the given system of equations is (x, y). What is one possible value of x + y?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '-20' },
        { letter: 'B', text: '4' },
        { letter: 'C', text: '20' },
        { letter: 'D', text: '24' }
      ],
      correctAnswer: 'D'
    },

    // Question 14 (Module 2)
    {
      id: 36,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'The graph of the quadratic function y = f(x) in the xy-plane intersects the x-axis when x = 39 and when x = p, where p is a constant. The maximum value of y = f(x) occurs at the point (14, m), where m is a constant. What is the value of p?',
      type: 'fillIn',
      correctAnswer: '-11'
    },

    // Question 15 (Module 2)
    {
      id: 37,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: '(x + 1)/(5x²) = k/x\n\nIn the given equation, k is a constant. The solution to the given equation is 1/174. What is the value of k?',
      type: 'fillIn',
      correctAnswer: '35'
    },

    // Question 16 (Module 2)
    {
      id: 38,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'The area of a triangle is equal to x² square centimeters. The length of the base of the triangle is 2x + 6 centimeters, and the height of the triangle is x - 2 centimeters. What is the value of x?',
      type: 'fillIn',
      correctAnswer: '6'
    },

    // Question 17 (Module 2)
    {
      id: 39,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'The function g is a quadratic function. In the xy-plane, the graph of y = g(x) has a vertex at (-1, -4) and passes through the points (-2, -43) and (1, -160). What is the value of g(0) - g(2)?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '-121' },
        { letter: 'B', text: '0' },
        { letter: 'C', text: '117' },
        { letter: 'D', text: '312' }
      ],
      correctAnswer: 'D'
    },

    // Question 18 (Module 2)
    {
      id: 40,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'Triangle ABC and DEF are congruent, where A corresponds to D, and B and E are right angles. The measure of angle A is 62°. What is the measure of angle F?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '28°' },
        { letter: 'B', text: '62°' },
        { letter: 'C', text: '90°' },
        { letter: 'D', text: '118°' }
      ],
      correctAnswer: 'A'
    },

    // Question 19 (Module 2)
    {
      id: 41,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'A business consultant charge $408 for the first hour and $204 for each additional hour of work. Which of the following functions gives the charge C(h), in dollars, for h hours of work, where h is a positive integer?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'C(h) = 204h + 204' },
        { letter: 'B', text: 'C(h) = 204h + 408' },
        { letter: 'C', text: 'C(h) = 408h + 204' },
        { letter: 'D', text: 'C(h) = 408h + 612' }
      ],
      correctAnswer: 'A'
    },

    // Question 20 (Module 2)
    {
      id: 42,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'An acceptable noise criterion rating for the background noise in a laundry room is 50. For a noise criterion rating of 50, the equation y = 22(0.997)^(x-60) + 47 gives the estimated sound pressure level, y, in decibels, as a function of the octave band center frequency, x, in hertz, where x ≥ 60. Which of the following is the best interpretation of 47 in this context?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '47 is 22 less than the estimated sound pressure level, in decibels, at an octave band center frequency of 60 hertz.' },
        { letter: 'B', text: '47 is 22 less than the estimated sound pressure level, in decibels, at an octave band center frequency of 0 hertz.' },
        { letter: 'C', text: '47 is the estimated sound pressure level, in decibels, at an octave band center frequency of 60 hertz.' },
        { letter: 'D', text: '47 is the estimated sound pressure level, in decibels, at an octave band center frequency of 0 hertz.' }
      ],
      correctAnswer: 'A'
    },

    // Question 21 (Module 2)
    {
      id: 43,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: '3x + 5y = 8\n9x + 15y = 24\n\nFor each real number r, which of the following points lies on the graph of each equation in the xy-plane for the given system?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '(r, -5r/3 + 8/3)' },
        { letter: 'B', text: '(r, 3r/5 + 8/5)' },
        { letter: 'C', text: '(-5r/3 + 8/3, r)' },
        { letter: 'D', text: '(r/3 + 8, -r/3 + 24)' }
      ],
      correctAnswer: 'C'
    },

    // Question 22 (Module 2)
    {
      id: 44,
      module: 2,
      domain: '', // TODO: categorize as algebra, advanced_math, problem_solving, or geometry
      text: 'In the figure, parallel lines a and b are intersected by lines c, d, and e. If z = 49, y = 136, and v < z, which statement about x and w must be true?',
      image: '/images/questions/math_m2_q22_parallel.png',
      imageDescription: 'A figure showing two parallel horizontal lines a and b intersected by three lines c, d, and e. Various angles are marked: v° and x° at the intersection with line c on line b, y° where line d intersects, w° where line e intersects with line a, and z° where line e intersects with line b.',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'x < w' },
        { letter: 'B', text: 'x > w' },
        { letter: 'C', text: 'x = w' },
        { letter: 'D', text: 'x + w = 90' }
      ],
      correctAnswer: 'B'
    }
  ]
};
