// R/W Practice Set 2
// Module 1: 31 questions, Module 2 (Easier): 21 questions, Total: 52
// Official Answer Key:
// Module 1: 1-10 DDAA DDDA AD, 11-20 ABADDDAA AA, 21-31 ADDC BACD ACC
// Module 2: 1-10 BCBA DDAA DD, 11-21 BACB CBAA BCB

export const rwPracticeSet2 = {
  id: 'rw-set2',
  name: 'R/W Practice Set 2',
  type: 'readingWriting',
  questions: [
    // MODULE 1 (31 questions, ids 1-31)

    // Question 1 - Answer: D
    {
      id: 1,
      module: 1,
      domain: 'craft_structure',
      passage: `The Al-Fattah Al-Aleem Mosque in the New Administrative Capital, Egypt, is a massive mosque that can accommodate approximately 17,000 people at once, making it an ______ sight to behold.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'idealized' },
        { letter: 'B', text: 'intricate' },
        { letter: 'C', text: 'illusory' },
        { letter: 'D', text: 'imposing' }
      ],
      correctAnswer: 'D'
    },

    // Question 2 - Answer: D
    {
      id: 2,
      module: 1,
      domain: 'craft_structure',
      passage: `The Lascaux Cave paintings—detailed paintings of animals found in what is now France and dating from around 17,000 years ago—are sometimes said to be emotionally powerful despite their age, but in fact the paintings are ______ precisely because of their age. It is the link of shared humanity with the artists across so many centuries that gives the Lascaux Cave paintings such resonance.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'ingenious' },
        { letter: 'B', text: 'meticulous' },
        { letter: 'C', text: 'pristine' },
        { letter: 'D', text: 'affecting' }
      ],
      correctAnswer: 'D'
    },

    // Question 3 - Answer: A
    {
      id: 3,
      module: 1,
      domain: 'craft_structure',
      passage: `Some robots such as Surena (developed in 2008) and COMAN (developed in 2012) feature humanoid characteristics like bipedal locomotion so that people will find it easier to interact with them. While these features can help to ______ feelings of comfort in people, a robot that looks too like a human can fall into the "uncanny valley," meaning that its appearance unintentionally unsettles those who encounter it.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'engender' },
        { letter: 'B', text: 'constrict' },
        { letter: 'C', text: 'counterbalance' },
        { letter: 'D', text: 'repudiate' }
      ],
      correctAnswer: 'A'
    },

    // Question 4 - Answer: A
    {
      id: 4,
      module: 1,
      domain: 'craft_structure',
      passage: `Text corpora such as the International Corpus of English are enormous collections of electronically stored texts that can be used for empirical testing of hypotheses regarding how ______ a word is in spoken and written English. For instance, one might have a guess about the incidence of the word "first," but only an analysis of a corpus can prove that "first" is the third most commonly used adjective.`,
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

    // Question 5 - Answer: D
    {
      id: 5,
      module: 1,
      domain: 'information_ideas',
      passage: `The following text is adapted from Matthew Arnold's 1869 nonfiction book Culture and Anarchy.

<u>The Times [a British newspaper], replying to some foreign strictures on the dress, looks, and behavior of the English abroad, urges that the English ideal is that everyone should be free to do and to look just as he likes.</u> But culture indefatigably tries, not to make what each raw person may like the rule by which he fashions himself; but to draw ever nearer to a sense of what is indeed beautiful, graceful, and becoming, and to get the raw person to like that.`,
      text: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'It suggests that opinions regarding culture change over time.' },
        { letter: 'B', text: 'It asserts that the English are not as well known for their sense of taste as they ought to be.' },
        { letter: 'C', text: 'It details an example that supports the author\'s primary claim.' },
        { letter: 'D', text: 'It presents an opinion with which the author disagrees.' }
      ],
      correctAnswer: 'D'
    },

    // Question 6 - Answer: D
    {
      id: 6,
      module: 1,
      domain: 'information_ideas',
      passage: `The bird species Myiobius barbatus (the bearded flycatcher), which forages in relatively dense vegetation, and Platyrinchus saturatus (the cinnamon-crested spadebill), which forages in open areas or low-density vegetation, share territory in French Guiana with Thamnomanes caesius (the cinereous antshrike), which emits a loud alarm call when it detects predators. Biologist Ari Martinez and colleagues, who studied the ecological community the species share, hypothesized that there is an inverse relationship between birds' field of vision while foraging and their sensitivity to alarm calls from neighboring species.`,
      text: 'Which finding, if true, would most directly support Martinez and colleagues\' hypothesis?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'When Martinez and colleagues played T. caesius alarm calls, M. barbatus and P. saturatus displayed no reaction, whereas T. caesius displayed predator-avoidance behavior.' },
        { letter: 'B', text: 'Many local bird species with similar foraging habits to those of M. barbatus displayed no reaction when Martinez and colleagues played T. caesius alarm calls, whereas M. barbatus displayed predator-avoidance behavior.' },
        { letter: 'C', text: 'Some individuals of P. saturatus displayed predator-avoidance behavior when Martinez and colleagues played T. caesius alarm calls, whereas nearly all did when M. barbatus alarm calls were played.' },
        { letter: 'D', text: 'P. saturatus displayed no reaction when Martinez and colleagues played T. caesius alarm calls, whereas M. barbatus displayed predator-avoidance behavior in response to the calls.' }
      ],
      correctAnswer: 'D'
    },

    // Question 7 - Answer: D
    {
      id: 7,
      module: 1,
      domain: 'information_ideas',
      image: '/images/questions/rw2_m1_q7_judges.png',
      imageDescription: 'Line graph titled "Women Judges and Magistrates on High Courts, 2009-2013." Y-axis shows Number from 0 to 10. Three lines: Slovenia (solid triangles) starts at ~4, stays ~4-5 through 2013. Finland (dashed squares) starts at ~7, fluctuates, returns to ~7 in 2013. Dominican Republic (dotted circles) starts at ~5, peaks ~8 in 2011, drops to ~4 in 2013.',
      passage: `[Graph showing Women Judges and Magistrates on High Courts, 2009-2013, with data for Slovenia, Finland, and Dominican Republic]

A report from an international organization that monitors the numbers of women serving as judges or magistrates on various nations' highest courts, such as the Supreme Court in Finland and the Supreme Court in the Dominican Republic. From 2009 to 2013, the number of women serving as justices or magistrates on highest courts in most countries increased. However, there are also countries where the number decreased or remained unchanged; for example, ______`,
      text: 'Which choice most effectively uses data from the graph to complete the example?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Slovenia was greater in 2013 than in 2009, whereas the number in the Dominican Republic was lower in 2013 than in 2009.' },
        { letter: 'B', text: 'Slovenia was greater in 2013 than in 2009, whereas the number in Finland was the same in 2013 as in 2009.' },
        { letter: 'C', text: 'Finland was the same in 2013 as in 2009, but it had more women on its high courts than either Slovenia or the Dominican Republic did in 2013.' },
        { letter: 'D', text: 'the Dominican Republic was lower in 2013 than in 2009, whereas the number in Finland was the same in 2013 as in 2009.' }
      ],
      correctAnswer: 'D'
    },

    // Question 8 - Answer: A
    {
      id: 8,
      module: 1,
      domain: 'information_ideas',
      passage: `Studies of the Effects of Tilling vs. No Tilling on Crop Yields

| Authors | Crop | Yield with tilling (kg/ha) | Yield no tilling (kg/ha) |
|---|---|---|---|
| Acharya et al. | soybeans | 3,062 | 2,670 |
| Gracia-Romero et al. | maize | 2,420 | 2,990 |
| Jug et al. | winter wheat | 4,860 | 3,910 |
| Huang et al. | rice | 2,534 | 5,226 |

Danijel Jug and colleagues found that tilling was associated with an increased yield of winter wheat. But some studies of other crops have found the opposite effect, for example ______`,
      text: 'Which choice most effectively uses data from the table to complete the assertion?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Min Huang and colleagues reported an even larger positive effect of no tilling on the yield of rice.' },
        { letter: 'B', text: 'Bharat Sharma Acharya and colleagues found a similar association in a study using soybeans.' },
        { letter: 'C', text: 'crop yields with tilling have ranged from 2,420 kilograms per hectare for maize to 4,860 kilograms per hectare for winter wheat.' },
        { letter: 'D', text: 'a study using winter wheat yielded 4,860 kilograms per hectare with tilling and only 3,910 kilograms per hectare without tilling.' }
      ],
      correctAnswer: 'A'
    },

    // Question 9 - Answer: A
    {
      id: 9,
      module: 1,
      domain: 'information_ideas',
      passage: `Population and Area Data for Four Cities in 2018

| City | Country | UN estimate | City proper | Metropolitan area | Area (sq km) |
|---|---|---|---|---|---|
| Bangkok | Thailand | 10,156,000 | 5,782,000 | 16,255,990 | 7,762 |
| Toronto | Canada | 6,082,000 | 2,731,571 | 5,928,040 | 5,906 |
| Houston | United States | 6,115,000 | 2,325,502 | 6,997,384 | 21,395 |
| Bogota | Colombia | 10,574,000 | 7,963,000 | 12,545,272 | 5,934 |

Population figures for a city can vary significantly depending on what areas are included in the count. A journalist claims the UN population estimates most likely included people outside the cities proper.`,
      text: 'Which choice best describes data in the table that support the journalist\'s claim?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'The UN estimated Bogota\'s population to be 10,574,000, which is significantly larger than the reported population for the city proper.' },
        { letter: 'B', text: 'The metropolitan area of Bangkok is significantly larger than 1,569 square kilometers.' },
        { letter: 'C', text: 'The reported city proper population of Bogota is significantly larger than the reported city proper population of Houston.' },
        { letter: 'D', text: 'All the city proper areas are below 3,000 square kilometers.' }
      ],
      correctAnswer: 'A'
    },

    // Question 10 - Answer: D
    {
      id: 10,
      module: 1,
      domain: 'information_ideas',
      passage: `The Study on Global Ageing and Adult Health (SAGE) seeks to discover long-term trends related to aging by compiling and analyzing evidence from approximately 66,000 participants in multiple countries. As with most longitudinal studies, extensive funding support is needed for SAGE to collect the relevant data over timescales and at intervals that will support robust conclusions. But the quality of a more constrained investigation, such as a sociology study seeking only to yield the average age at which people in a given city first become parents, is much less dependent on high levels of funding because ______`,
      text: 'Which choice most logically completes the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'such studies are likely to be a lower priority for funding than SAGE.' },
        { letter: 'B', text: 'the sociology study is unlikely to be able to recruit 66,000 participants.' },
        { letter: 'C', text: 'expanding the scope of such studies is unlikely to be feasible.' },
        { letter: 'D', text: 'such studies are not trying to identify trends over time.' }
      ],
      correctAnswer: 'D'
    },

    // Question 11 - Answer: A
    {
      id: 11,
      module: 1,
      domain: 'information_ideas',
      passage: `Anne Bronte's 1847 novel Agnes Grey contains elements drawn from Bronte's own life: there are many parallels between the experiences of the novel's title character and those of Bronte, and as a result Agnes Grey is regularly described as an autobiographical novel. This characterization can be useful, but it also presents drawbacks in terms of how the work is perceived, as it may lead readers to believe that Bronte merely fictionalized true events, which, in an artistic field where creativity and inventiveness are prized, can suggest that ______`,
      text: 'Which choice most logically completes the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Agnes Grey is less of an imaginative achievement than it actually is.' },
        { letter: 'B', text: 'the real-world counterparts of other characters in Agnes Grey are hard to identify.' },
        { letter: 'C', text: 'Bronte should not have claimed that Agnes Grey is based on real events.' },
        { letter: 'D', text: 'critics disagree about whether Agnes Grey shows greater originality than works without autobiographical elements.' }
      ],
      correctAnswer: 'A'
    },

    // Question 12 - Answer: B
    {
      id: 12,
      module: 1,
      domain: 'information_ideas',
      passage: `Previous research has shown that plant species with a narrow geographical range tend to be more genetically homogeneous than plant species with extensive ranges are. Researchers recently ran simulations to predict how the genetic variation of several species of Mammillaria, a genus of cactus found throughout the Americas, might change in different distribution conditions. One of these species, M. klissingiana, is found only in the state of Tamaulipas. The researchers simulated what would happen if M. klissingiana spread to new habitats outside Tamaulipas, and, consistent with previous findings, the results showed that ______`,
      text: 'Which choice most logically completes the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'several other Mammillaria species could survive in Tamaulipas in the future.' },
        { letter: 'B', text: 'the genetic homogeneity of M. klissingiana decreased over time.' },
        { letter: 'C', text: 'there was a gradual increase in the genetic homogeneity of Mammillaria species in states neighboring Tamaulipas.' },
        { letter: 'D', text: 'Mammillaria species other than M. klissingiana would become more common in Tamaulipas.' }
      ],
      correctAnswer: 'B'
    },

    // Question 13 - Answer: A
    {
      id: 13,
      module: 1,
      domain: 'information_ideas',
      passage: `Arthurian legends derive from many sources, such as Annales Cambriae, composed around 970, and the Mabinogion from the 12th and 13th centuries. One of the most significant sources, Geoffrey of Monmouth's History of the Kings of Britain, was written in Latin in the 1130s; some material from it was later adapted by the Norman poet Wace into the Roman de Brut in 1155. But while no source before 1155 includes references to the famous Round Table at which Arthur's knights assembled, both the Roman de Brut and Sir Thomas Malory's 15th-century Le Morte d'Arthur do. It can therefore be inferred that ______`,
      text: 'Which choice most logically completes the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Malory did not use Annales Cambriae as a source for information about the Round Table.' },
        { letter: 'B', text: 'Geoffrey of Monmouth\'s accounts are more similar to the Mabinogion than to Roman de Brut.' },
        { letter: 'C', text: 'Geoffrey of Monmouth was unaware of stories of the Round Table when composing his History, though works containing such stories were available to him.' },
        { letter: 'D', text: 'Le Morte d\'Arthur is more historically accurate than History, because the Mabinogion had not been written when Geoffrey of Monmouth was writing.' }
      ],
      correctAnswer: 'A'
    },

    // Question 14 - Answer: D
    {
      id: 14,
      module: 1,
      domain: 'craft_structure',
      passage: `Few new parents ______ that their baby will someday become an astronaut. Yet if Jerry L. Ross's parents had made this prediction when he was born in 1948, they would have been correct, for NASA selected him for the job in 1980.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'disagree' },
        { letter: 'B', text: 'ignore' },
        { letter: 'C', text: 'require' },
        { letter: 'D', text: 'anticipate' }
      ],
      correctAnswer: 'D'
    },

    // Question 15 - Answer: D
    {
      id: 15,
      module: 1,
      domain: 'craft_structure',
      passage: `The following text is from Kenneth Grahame's 1908 novel The Wind in the Willows. The Rat is looking for the Mole, his friend, in the woods.

[The Rat] had patiently hunted through the wood for an hour or more, when at last to his joy he heard a little answering cry. Guiding himself by the sound, he made his way through the gathering darkness to the foot of an old beech tree.`,
      text: 'As used in the text, what does the word "guiding" most nearly mean?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Withdrawing' },
        { letter: 'B', text: 'Presenting' },
        { letter: 'C', text: 'Instructing' },
        { letter: 'D', text: 'Steering' }
      ],
      correctAnswer: 'D'
    },

    // Question 16 - Answer: D
    {
      id: 16,
      module: 1,
      domain: 'craft_structure',
      passage: `Alfred Nobel intended for the Nobel Prize to be an award honoring those who have contributed "the greatest benefit to mankind." Indeed, the work of Richard Laurence Millington Synge represented a significant ______ the field of chemistry, and in 1952 he was among those awarded the Nobel Prize in Chemistry for "their invention of partition chromatography."`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'controversy in' },
        { letter: 'B', text: 'exposure to' },
        { letter: 'C', text: 'dependence on' },
        { letter: 'D', text: 'advancement in' }
      ],
      correctAnswer: 'D'
    },

    // Question 17 - Answer: D
    {
      id: 17,
      module: 1,
      domain: 'craft_structure',
      passage: `The arrival of humans to the Americas is thought to have ______ a sudden decrease in biodiversity throughout the continents. Although the extinction of species like the toxodon was likely the result of a combination of factors, from decreasing food sources to habitat destruction, most of these factors can be directly tied to the presence of humans.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'followed' },
        { letter: 'B', text: 'prolonged' },
        { letter: 'C', text: 'counteracted' },
        { letter: 'D', text: 'triggered' }
      ],
      correctAnswer: 'D'
    },

    // Question 18 - Answer: A
    {
      id: 18,
      module: 1,
      domain: 'craft_structure',
      passage: `Some robots such as Surena (developed in 2008) and COMAN (developed in 2012) are designed to resemble humans so that people will find it easier to interact with them. To this end, certain features such as the ability to respond to voice commands can help to create the comforting semblance of humanity, but a robot that appears too similar to humans can make people feel more unsettled than ______`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'soothed' },
        { letter: 'B', text: 'indifferent' },
        { letter: 'C', text: 'revolted' },
        { letter: 'D', text: 'vindicated' }
      ],
      correctAnswer: 'A'
    },

    // Question 19 - Answer: A
    {
      id: 19,
      module: 1,
      domain: 'information_ideas',
      passage: `The following text is Rainer Maria Rilke's 1897 poem "Evening" (translated by Jessie Lamont in 1918).

<u>The bleak fields are asleep,
My heart alone wakes;</u>
The evening in the harbour
Down his red sails takes.
Night, guardian of dreams,
Now wanders through the land;
The moon, a lily white,
Blossoms within her hand.`,
      text: 'Which choice best states the function of the underlined portion in the text as a whole?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'It conveys the speaker\'s sense that he is alone while experiencing the evening.' },
        { letter: 'B', text: 'It shows that the speaker would rather look at the fields than at the water.' },
        { letter: 'C', text: 'It indicates the speaker\'s disappointment that other people dislike rural settings.' },
        { letter: 'D', text: 'It explains why the speaker has woken up from sleeping.' }
      ],
      correctAnswer: 'A'
    },

    // Question 20 - Answer: A
    {
      id: 20,
      module: 1,
      domain: 'information_ideas',
      passage: `When people think of dinosaurs with feathers, they typically think of winged dinosaurs, such as the bat-like Ambopteryx. However, many dinosaurs that didn't have wings also had feathers on their bodies. For instance, research indicates that the wingless, large Yutyrannus likely had feathers.`,
      text: 'Which choice best states the main purpose of the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'To discuss the presence of feathers on certain types of dinosaurs' },
        { letter: 'B', text: 'To point out the differences between dinosaur feathers and bird feathers' },
        { letter: 'C', text: 'To explain why feathered dinosaurs went extinct' },
        { letter: 'D', text: 'To argue that only one species of dinosaur had feathers' }
      ],
      correctAnswer: 'A'
    },

    // Question 21 - Answer: A
    {
      id: 21,
      module: 1,
      domain: 'information_ideas',
      passage: `Text 1:
In 2017, Buenaventura, Colombia, was named a City of Gastronomy by UNESCO in recognition of the city's unique food culture. The honor is well known among residents of the city as well as tourists who visit. <u>It's obvious that the selection of Buenaventura by UNESCO has brought awareness to local recipes, cooking practices, and chefs and has provided a boost to the city's tourism industry.</u>

Text 2:
Many people in Buenaventura's restaurant industry hoped that food tourism would increase after the city was chosen as a City of Gastronomy in 2017. However, as researcher Eerang Park and colleagues argue, cities must still create effective marketing strategies to benefit fully from being named a City of Gastronomy. Without an intentional effort to promote the city's food scene, many current and potential visitors to Buenaventura may not even be aware that it's home to uniquely delicious food.`,
      text: 'Based on the texts, what would the author of Text 2 most likely say in response to the underlined claim in Text 1?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'A city that UNESCO officially names as a City of Gastronomy should still make deliberate efforts to attract visitors in order to boost tourism.' },
        { letter: 'B', text: 'Many people worked together to help Buenaventura be recognized by UNESCO, but chefs deserve the most credit.' },
        { letter: 'C', text: 'There are other benefits to being named a UNESCO City of Gastronomy besides increased tourism.' },
        { letter: 'D', text: 'The naming of Buenaventura as a City of Gastronomy was long overdue, given the city\'s delicious food.' }
      ],
      correctAnswer: 'A'
    },

    // Question 22 - Answer: D
    {
      id: 22,
      module: 1,
      domain: 'information_ideas',
      passage: `In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Panama City, Panama, and Fortaleza, Brazil, were surveyed about parks in their cities. Of the 318 respondents from Panama City, 53.5% indicated that they use the city's parks, and of 938 respondents from Fortaleza, 35.7% indicated using city parks. Given that the percentage of Panama City respondents who reported living within a 10-minute walk of a park was much lower than that reported by Fortaleza respondents, greater proximity alone can't explain the difference in park use.`,
      text: 'The text makes which point about the difference between the proportions of Panama City residents and Fortaleza residents using parks?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'It was much larger than the researchers conducting the study expected.' },
        { letter: 'B', text: 'It could be due to inaccuracies in the survey results.' },
        { letter: 'C', text: 'It was calculated using sources that predate the survey.' },
        { letter: 'D', text: 'It is caused by something other than the parks\' proximity to the residents.' }
      ],
      correctAnswer: 'D'
    },

    // Question 23 - Answer: D
    {
      id: 23,
      module: 1,
      domain: 'information_ideas',
      passage: `The following text is adapted from Daniel Defoe's 1704 nonfiction book The Storm.

The sermon is a sound of words spoken to the ear, and prepared only for present meditation and extends no farther than the strength of memory can convey it; a book printed is a record, remaining in every man's possession, always ready to renew its acquaintance with his memory, and always ready to be produced as an authority or voucher to any reports he makes out of it, and conveys its contents for ages to come, to the eternity of mortal time, when the author is forgotten in his grave.`,
      text: 'Which choice best states the main idea of the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'People are less likely to forget a message when they hear it spoken aloud than they are when they read it in print.' },
        { letter: 'B', text: 'Unless a spoken message is delivered by a confident orator, it may be ignored.' },
        { letter: 'C', text: 'Most authors have little hope of being remembered well past their lifetimes.' },
        { letter: 'D', text: 'Words committed to print have a greater permanence than messages that are merely spoken aloud.' }
      ],
      correctAnswer: 'D'
    },

    // Question 24 - Answer: C
    {
      id: 24,
      module: 1,
      domain: 'information_ideas',
      passage: `The Far Side of the World, first published in 1984, is a novel in Patrick O'Brian's Aubrey/Maturin series, which includes twenty books plus an unfinished fragment of a twenty-first. Like the rest of the books in the series, The Far Side of the World has a rather abrupt ending, but the following book, The Reverse of the Medal, picks up neatly where The Far Side of the World leaves off. Thus, the sudden ending is only an issue if one considers the books as independent texts—the Aubrey/Maturin series is best thought of as a single incredibly long work, similar to other multivolume stories, such as John Galsworthy's The Forsyte Saga.`,
      text: 'Which choice best states the main idea of the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'It is unfair that the Aubrey/Maturin series does not have the critical reputation of The Forsyte Saga.' },
        { letter: 'B', text: 'The Far Side of the World and The Reverse of the Medal are two of the most complex novels in the series.' },
        { letter: 'C', text: 'The structure of each of the novels suggests that the series should be considered a single continuous story.' },
        { letter: 'D', text: 'Many readers find the Aubrey/Maturin novels to be remarkably entertaining despite flaws in the novels\' structures.' }
      ],
      correctAnswer: 'C'
    },

    // Question 25 - Answer: B
    {
      id: 25,
      module: 1,
      domain: 'information_ideas',
      passage: `Pyramids in Egypt and the Americas

| Pyramid | Country | Height (meters) | Age (years before present) |
|---|---|---|---|
| Pyramid of Khafre | Egypt | 143.5 | 4,500 to 4,600 |
| La Danta | Guatemala | 72 | 1,900 to 2,300 |
| Tikal Temple IV | Guatemala | 70 | 1,300 |
| Pyramid of Amenemhet I | Egypt | 55 | 3,800 to 4,000 |

A student is writing an essay about four pyramids and wants to indicate how long ago each pyramid was built. Consulting the table, the student finds that the Tikal Temple IV was built ______`,
      text: 'Which choice most effectively uses data from the table to complete the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '1,900 to 2,300 years ago.' },
        { letter: 'B', text: '1,300 years ago.' },
        { letter: 'C', text: '4,500 to 4,600 years ago.' },
        { letter: 'D', text: '3,800 to 4,000 years ago.' }
      ],
      correctAnswer: 'B'
    },

    // Question 26 - Answer: A
    {
      id: 26,
      module: 1,
      domain: 'information_ideas',
      passage: `Life Among the Paiutes is an 1882 autobiographical narrative by Sarah Winnemucca Hopkins. In the work, Winnemucca directly addresses the reader to establish her authority and credibility, writing ______`,
      text: 'Which quotation from Life Among the Paiutes most effectively illustrates the claim?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '"My dear reader, I have not lived in this world for over thirty or forty years for nothing, and I know what I am talking about."' },
        { letter: 'B', text: '"I was born somewhere near 1844, but am not sure of the precise time."' },
        { letter: 'C', text: '"Oh, dear readers, these soldiers had gone only sixty miles away to Muddy Lake, where my people were then living and fishing."' },
        { letter: 'D', text: '"But how can I describe the scene that followed? Some of you, dear readers, can imagine."' }
      ],
      correctAnswer: 'A'
    },

    // Question 27 - Answer: C
    {
      id: 27,
      module: 1,
      domain: 'information_ideas',
      passage: `Hypothesizing that lullabies are universally calming to infants, Constance M. Bainbridge and colleagues played a lullaby sung in Scottish Gaelic and a non-lullaby sung in the Seri language to a group of infants. The team found that the infants' heart rates decreased more during the lullaby than during the non-lullaby. Since a decrease in heart rate is associated with relaxation, the team concluded that the lullaby relaxed the infants. Noting that reduced heart rate can also be associated with increased attention, one critic argues that the lullaby simply attracted the infants' attention. Bainbridge and colleagues also measured pupil size, as pupils typically become larger when a stimulus captures a person's attention.`,
      text: 'Which finding, if true, would most directly weaken the critic\'s claim?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Blinking, which indicates attention, was equally frequent whether infants were listening to the Scottish Gaelic or Seri song.' },
        { letter: 'B', text: 'Neither the Scottish Gaelic language nor the melody was familiar to infants in the study.' },
        { letter: 'C', text: 'The infants\' pupils were smaller when the infants were listening to lullabies than when they were listening to non-lullabies.' },
        { letter: 'D', text: 'Parents of infants in the study chose the lullaby over the non-lullaby when asked which song they would use to calm their child.' }
      ],
      correctAnswer: 'C'
    },

    // Question 28 - Answer: D
    {
      id: 28,
      module: 1,
      domain: 'information_ideas',
      passage: `In the early 19th century, ships in the British Royal Navy were ranked based on military strength. The system considered the number of a ship's cannons and decks. "First rate" was the highest ranking, and "sixth-rate" was the lowest ranking, followed by unranked ships. This ranking determined the size of a ship's crew: first-rate ships had between 850 and 875 crewmen, while lower-ranked ships had fewer. Two of the ships from this period were the Dreadnought (98 cannons and three decks) and the Royal George (120 cannons and three decks). Of these two, only the Royal George was ranked a first-rate ship. It can therefore be concluded that ______`,
      text: 'Which choice most logically completes the text?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'the Dreadnought had between 850 and 875 crewmen.' },
        { letter: 'B', text: 'all ships with at least 98 cannons were ranked as first-rate ships.' },
        { letter: 'C', text: 'the Royal George needed a crew larger than 875 people in order to operate efficiently.' },
        { letter: 'D', text: 'not all ships with three decks were ranked as first-rate ships.' }
      ],
      correctAnswer: 'D'
    },

    // Question 29 - Answer: A
    {
      id: 29,
      module: 1,
      domain: 'craft_structure',
      passage: `Some features, such as the mihrab (or niche), are present in nearly every mosque. But mosques often reflect multiple architectural styles, resulting in a unique ______ of those influences, as in the case of the Sheikh Zayed Mosque, which combines elements from the Persian, Mughal, and Moorish styles.`,
      text: 'Which choice completes the text with the most logical and precise word or phrase?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'fusion' },
        { letter: 'B', text: 'dismissal' },
        { letter: 'C', text: 'critique' },
        { letter: 'D', text: 'simplification' }
      ],
      correctAnswer: 'A'
    },

    // Question 30 - Answer: C
    {
      id: 30,
      module: 1,
      domain: 'craft_structure',
      passage: `The following text is from E. Pauline Johnson's 1902 poem "Shadow Lake."

The little fern-leaf, bending
Upon the brink, its green reflection greets,
And kisses soft the shadow that it meets
With touch so fine,
The border line
The keenest vision can't define;
So perfect is the blending.`,
      text: 'As used in the text, what does the word "define" most nearly mean?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'explain' },
        { letter: 'B', text: 'state' },
        { letter: 'C', text: 'detect' },
        { letter: 'D', text: 'reduce' }
      ],
      correctAnswer: 'C'
    },

    // Question 31 - Answer: C
    {
      id: 31,
      module: 1,
      domain: 'information_ideas',
      passage: `The Underdogs is a 1915 novel by Mariano Azuela, originally written in Spanish. In the novel, the town of Juchipila is depicted as a striking sight for a group of soldiers as they view it from afar: ______`,
      text: 'Which quotation from a translation of The Underdogs most effectively illustrates the claim?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: '"All day long [the soldiers] rode through the canyon, up and down the steep, round hills, dirty and bald as a man\'s head, hill after hill in endless succession."' },
        { letter: 'B', text: '"[The soldiers] entered the streets of Juchipila as the church bells rang, loud and joyfully, with that peculiar tone that thrills every mountaineer."' },
        { letter: 'C', text: '"Juchipila rose in the distance, white, bathed in sunlight, shining in the midst of a thick forest at the foot of a proud, lofty mountain."' },
        { letter: 'D', text: '"The sierra is clad in gala colors. Over its inaccessible peaks the opalescent fog settles like a snowy veil on the forehead of a bride."' }
      ],
      correctAnswer: 'C'
    },

    // MODULE 2 (21 questions, ids 32-52)

    // Question 1/M2 (id:32) - Answer: B
    {
      id: 32,
      module: 2,
      domain: 'standard_conventions',
      passage: `The writer Maya Angelou, along with others such as Lorenzo Thomas and Gwendolyn Brooks, ______ commonly associated with the Black Arts movement, a loose-knit group of writers and artists active in the 1960s and the 1970s who were interested in exploring the Black American experience through their work.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'have been' },
        { letter: 'B', text: 'is' },
        { letter: 'C', text: 'are' },
        { letter: 'D', text: 'were' }
      ],
      correctAnswer: 'B'
    },

    // Question 2/M2 (id:33) - Answer: C
    {
      id: 33,
      module: 2,
      domain: 'standard_conventions',
      passage: `Today, the Michelin Guide is widely known as the arbiter of fine dining, but when it was created in 1889, it was little more than a marketing gimmick; brothers Andre and Edouard Michelin sought to increase profits for their tire company by encouraging their customers to drive across France, visiting the guide's recommended hotels and restaurants along the way. Nevertheless, the guide soon grew in scope ______ and its modest French eateries were replaced with some of the most esteemed restaurants from around the world, including Ishikawa in Tokyo and Jade Dragon in Macau.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'influence' },
        { letter: 'B', text: 'influence,' },
        { letter: 'C', text: 'influence, and' },
        { letter: 'D', text: 'influence and' }
      ],
      correctAnswer: 'C'
    },

    // Question 3/M2 (id:34) - Answer: B
    {
      id: 34,
      module: 2,
      domain: 'standard_conventions',
      passage: `Writer Silvia Moreno-Garcia's love of short fiction began when she read a collection of Edgar Allan Poe's stories as a child, and she would develop into a prolific short story writer herself, publishing pieces like "Ahuizotl" (2015) and "Water" (2007). Yet she's best known as a novelist, in part due to her ______ Gothic (2020) earning a spot on the New York Times Best Sellers list.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'novel (Mexican' },
        { letter: 'B', text: 'novel Mexican' },
        { letter: 'C', text: 'novel: Mexican' },
        { letter: 'D', text: 'novel, Mexican' }
      ],
      correctAnswer: 'B'
    },

    // Question 4/M2 (id:35) - Answer: A
    {
      id: 35,
      module: 2,
      domain: 'standard_conventions',
      passage: `Within Earth's biomes, there are four main types of deserts: arid, semiarid, coastal, and cold. The Great Salt Desert in western Asia is an arid ______ it is one of the largest deserts in the world, with a total area of about 77,000 km².`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'desert, for example;' },
        { letter: 'B', text: 'desert, for example,' },
        { letter: 'C', text: 'desert; for example,' },
        { letter: 'D', text: 'desert, for example' }
      ],
      correctAnswer: 'A'
    },

    // Question 5/M2 (id:36) - Answer: D
    {
      id: 36,
      module: 2,
      domain: 'standard_conventions',
      passage: `Sociologist Alton Okinaka sits on the review board tasked with adding new sites to the Hawaii Register of Historic Places, which includes the Pufu'opae Bridge, built in 1915, and the Ma'alaea General Store, built in 1910. Okinaka doesn't make such decisions single-handedly, ______ historical designations must be approved by a group of nine other experts.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'however, all' },
        { letter: 'B', text: 'however and all' },
        { letter: 'C', text: 'however all' },
        { letter: 'D', text: 'however. All' }
      ],
      correctAnswer: 'D'
    },

    // Question 6/M2 (id:37) - Answer: D
    {
      id: 37,
      module: 2,
      domain: 'standard_conventions',
      passage: `After finding information about Harold Eugene Ford, who represented Tennessee in the United States House of Representatives, the student discovered biographical sketches of two other Black Americans who served in ______ Harold Washington of Illinois and Augustus (Gus) Freeman Hawkins of California.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Congress.' },
        { letter: 'B', text: 'Congress;' },
        { letter: 'C', text: 'Congress' },
        { letter: 'D', text: 'Congress,' }
      ],
      correctAnswer: 'D'
    },

    // Question 7/M2 (id:38) - Answer: A
    {
      id: 38,
      module: 2,
      domain: 'standard_conventions',
      passage: `The Organisation for Economic Co-operation and Development (OECD) tracks comparative price list data for its thirty-eight member countries. According to this data, in July 2021, a "basket" of goods and services priced at 100 US dollars (USD) in the United States would have cost 62 USD in fellow OECD member ______`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'nation Chile.' },
        { letter: 'B', text: 'nation: Chile.' },
        { letter: 'C', text: 'nation, Chile.' },
        { letter: 'D', text: 'nation—Chile.' }
      ],
      correctAnswer: 'A'
    },

    // Question 8/M2 (id:39) - Answer: A
    {
      id: 39,
      module: 2,
      domain: 'expression_ideas',
      passage: `"Of Names," an essay by French philosopher Michel de Montaigne, explores a relatively light subject, while his essay "Of the Punishment of Cowardice" takes on heavier fare. No matter the essay topic, Montaigne challenges his own ideas, beliefs, and values. ______ he questions his own perspective, regardless of subject matter.`,
      text: 'Which choice completes the text with the most logical transition?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'For example,' },
        { letter: 'B', text: 'At that time,' },
        { letter: 'C', text: 'Indeed,' },
        { letter: 'D', text: 'However,' }
      ],
      correctAnswer: 'A'
    },

    // Question 9/M2 (id:40) - Answer: D
    {
      id: 40,
      module: 2,
      domain: 'expression_ideas',
      passage: `Though Middle English was widely spoken in fourteenth-century England, the language was rarely employed in literature until poet Geoffrey Chaucer helped pioneer its literary use. ______ his manuscripts contain the first documented uses of over 2,000 English words—like the word "exaltation" in his 1386 poem "The Squire's Tale"—which led a contemporary to dub him "the first finder of our fair language."`,
      text: 'Which choice completes the text with the most logical transition?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'However,' },
        { letter: 'B', text: 'That being said,' },
        { letter: 'C', text: 'Besides,' },
        { letter: 'D', text: 'Indeed,' }
      ],
      correctAnswer: 'D'
    },

    // Question 10/M2 (id:41) - Answer: D
    {
      id: 41,
      module: 2,
      domain: 'expression_ideas',
      passage: `Built at a scale of 1:110, the Eiffel Tower in Baku, Azerbaijan, is one of many replicas of the famous Eiffel Tower in Paris, France. ______ towers like the Metallic Tower of Fourviere in Lyon, France, though not exact replicas, pay homage to the Eiffel's iconic spire-like design.`,
      text: 'Which choice completes the text with the most logical transition?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'On the contrary,' },
        { letter: 'B', text: 'Consequently,' },
        { letter: 'C', text: 'Invariably,' },
        { letter: 'D', text: 'Moreover,' }
      ],
      correctAnswer: 'D'
    },

    // Question 11/M2 (id:42) - Answer: B
    {
      id: 42,
      module: 2,
      domain: 'expression_ideas',
      passage: `The Cheruku rasamu mango variety is from the South Asian country of India. ______ in 2018, 18.8 million metric tons of mangoes were produced.`,
      text: 'Which choice completes the text with the most logical transition?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Hence,' },
        { letter: 'B', text: 'There,' },
        { letter: 'C', text: 'In fact,' },
        { letter: 'D', text: 'Specifically,' }
      ],
      correctAnswer: 'B'
    },

    // Question 12/M2 (id:43) - Answer: A
    {
      id: 43,
      module: 2,
      domain: 'expression_ideas',
      passage: `While researching a topic, a student has taken the following notes:
• Merle Oberon (1911-1979) was an actress born in Mumbai (then known as Bombay), India.
• She was of Indian, Maori, and Irish heritage.
• She was the first Indian-born actress to be nominated for an Academy Award.
• Early in her career, she played many nameless, uncredited roles, such as her role in Aren't We All? (1932).
• Later, she played many named, credited roles, such as Sue Mayberry in Affectionately Yours (1941).

The student wants to begin a narrative about Merle Oberon's life.`,
      text: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Merle Oberon\'s story begins in Mumbai (then known as Bombay), India, in 1911.' },
        { letter: 'B', text: 'Merle Oberon appeared in many films, including Aren\'t We All? and Affectionately Yours (1941), and was the first Indian-born actress nominated for an Academy Award.' },
        { letter: 'C', text: 'In 1941, Merle Oberon played the role of Sue Mayberry in the film Affectionately Yours.' },
        { letter: 'D', text: 'Though she would go on to receive many credits, Merle Oberon also played nameless, uncredited roles in many films such as Aren\'t We All? (1932).' }
      ],
      correctAnswer: 'A'
    },

    // Question 13/M2 (id:44) - Answer: C
    {
      id: 44,
      module: 2,
      domain: 'expression_ideas',
      passage: `While researching a topic, a student has taken the following notes:
• The Music by Black Composers (MBC) project aims to inspire aspiring music students by archiving and sharing information about the music of Black classical composers.
• George Theophilus Walker is a Black classical music composer included in MBC's Historic Composers Directory.
• He was born in 1922 and died in 2018.

The student wants to set up a discussion of Walker's career for an audience already familiar with the MBC project.`,
      text: 'Which choice most effectively uses information from the given sentences to set up a discussion of Walker\'s career for an audience already familiar with the MBC Project?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'While George Theophilus Walker is considered a great composer, there are many more composers included in MBC\'s Historic Composers Directory.' },
        { letter: 'B', text: 'Born in 1922, George Theophilus Walker passed away in 2018 according to the MBC project.' },
        { letter: 'C', text: 'Among the many talented figures included in the MBC project is classical music composer George Theophilus Walker.' },
        { letter: 'D', text: 'The MBC project\'s Historic Composers Directory highlights Black classical composers of the past, such as George Theophilus Walker (1922-2018), in order to inspire music students.' }
      ],
      correctAnswer: 'C'
    },

    // Question 14/M2 (id:45) - Answer: B
    {
      id: 45,
      module: 2,
      domain: 'expression_ideas',
      passage: `While researching a topic, a student has taken the following notes:
• Sister cities are pairs of cities that form social or legal partnerships to promote each other's cultures.
• Previously known as "town twinning," the concept evolved in Europe after World War II as a way to repair bonds between cities.
• Many cities in New York State maintain such partnerships with cities around the world.
• Rhinebeck, New York, and Larreynaga, Nicaragua, became sister cities in 1989.

The student wants to emphasize the duration of Rhinebeck and Larreynaga's sister city relationship.`,
      text: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Since the end of World War II, sister cities such as Rhinebeck and Larreynaga have continued to form social partnerships.' },
        { letter: 'B', text: 'As sister cities, Rhinebeck, New York, and Larreynaga, Nicaragua, have engaged in cultural exchange and partnership since 1989.' },
        { letter: 'C', text: 'Larreynaga, which in 1989 became a sister city to Rhinebeck, New York, is located in Nicaragua.' },
        { letter: 'D', text: 'Despite their distance from each other, the sister cities of Rhinebeck and Larreynaga have enjoyed the same partnership as many other sister cities.' }
      ],
      correctAnswer: 'B'
    },

    // Question 15/M2 (id:46) - Answer: C
    {
      id: 46,
      module: 2,
      domain: 'standard_conventions',
      passage: `At 1,006 meters, the Forth Road Bridge in the United Kingdom is one of the longest suspension bridges in the ______ the Yavuz Sultan Selim Bridge in Turkey, at 1,408 meters, is even longer.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'world, but,' },
        { letter: 'B', text: 'world,' },
        { letter: 'C', text: 'world, but' },
        { letter: 'D', text: 'world but' }
      ],
      correctAnswer: 'C'
    },

    // Question 16/M2 (id:47) - Answer: B
    {
      id: 47,
      module: 2,
      domain: 'standard_conventions',
      passage: `Both Heinrich Böll and Camilo José Cela have been commended for ______ contributions to literature, perhaps most notably when the Swedish Academy awarded Böll the Nobel Prize in Literature in 1972 and Cela in 1989.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'it\'s' },
        { letter: 'B', text: 'their' },
        { letter: 'C', text: 'its' },
        { letter: 'D', text: 'they\'re' }
      ],
      correctAnswer: 'B'
    },

    // Question 17/M2 (id:48) - Answer: A
    {
      id: 48,
      module: 2,
      domain: 'standard_conventions',
      passage: `On the other hand, Newark Liberty International Airport, which ______ located in Newark, New Jersey, saw an overall increase in departing passengers over the same time period, from 16,704,844 total passengers to 23,171,827.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'is' },
        { letter: 'B', text: 'are' },
        { letter: 'C', text: 'were' },
        { letter: 'D', text: 'have been' }
      ],
      correctAnswer: 'A'
    },

    // Question 18/M2 (id:49) - Answer: A
    {
      id: 49,
      module: 2,
      domain: 'standard_conventions',
      passage: `Rising 11,371 feet above sea level, Mount Leuser ______ among the world's tallest mountains.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'is ranked' },
        { letter: 'B', text: 'to rank' },
        { letter: 'C', text: 'ranking' },
        { letter: 'D', text: 'having ranked' }
      ],
      correctAnswer: 'A'
    },

    // Question 19/M2 (id:50) - Answer: B
    {
      id: 50,
      module: 2,
      domain: 'standard_conventions',
      passage: `As an object-oriented computer programming language, Kotlin is used by coders like Black Girls Code founder Kimberly Bryant to create programs by manipulating "objects" into interacting with each other. Conversely, Pascal, ______ in software development and educational instruction, is not an object-oriented language.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'to use' },
        { letter: 'B', text: 'used' },
        { letter: 'C', text: 'the use' },
        { letter: 'D', text: 'using' }
      ],
      correctAnswer: 'B'
    },

    // Question 20/M2 (id:51) - Answer: C
    {
      id: 51,
      module: 2,
      domain: 'standard_conventions',
      passage: `Fans of the film The Princess and the Frog (2009) likely ______ the commanding bass voice behind the character Dr. Facilier. It belongs to actor Keith David. The veteran actor has performed in everything from commercials to Broadway musicals, but he is most known for his voice acting.`,
      text: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'recognizes' },
        { letter: 'B', text: 'has recognized' },
        { letter: 'C', text: 'recognize' },
        { letter: 'D', text: 'is recognizing' }
      ],
      correctAnswer: 'C'
    },

    // Question 21/M2 (id:52) - Answer: B
    {
      id: 52,
      module: 2,
      domain: 'expression_ideas',
      passage: `While researching a topic, a student has taken the following notes:
• Blackberries are fruits that contain ascorbic acid, an essential nutrient for humans.
• Every 100 grams (g) of blackberries contains 21 milligrams (mg) of ascorbic acid.
• Many animals can make ascorbic acid in their bodies, but humans cannot.
• Humans must get ascorbic acid from foods, including fruits and vegetables.
• Ascorbic acid is also known as Vitamin C.

The student wants to specify how much vitamin C is in blackberries.`,
      text: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      type: 'multipleChoice',
      options: [
        { letter: 'A', text: 'Many animals can make ascorbic acid, also known as vitamin C, in their bodies, but humans cannot.' },
        { letter: 'B', text: 'There is 21 mg of vitamin C in every 100 g of blackberries.' },
        { letter: 'C', text: 'Since humans cannot make vitamin C in their bodies, they must get this essential nutrient from foods like blackberries.' },
        { letter: 'D', text: 'Blackberries contain vitamin C, which humans must get from food.' }
      ],
      correctAnswer: 'B'
    }
  ]
};
