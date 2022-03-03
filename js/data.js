// Load in all the questions
const questions = [
    {
      "grade": "white",
      "id": "white1",
      "question": "What does Tae Kwon-Do literally mean?",
      "micah": "Foot Hand Art",
      "fu1": "Hand Foot Art",
      "fu2": "The Hand of Foot or Art",
      "fu3": "The Hand of Feet Art"
    },
    {
      "grade": "white",
      "id": "white2",
      "question": "Who is the Father and founder of Tae Kwon-Do?",
      "micah": "General Choi Hong Hi 9th Dan",
      "fu1": "Grand Master Haeng Ung Lee 10th Dan",
      "fu2": "Grand Master Haeng Ung Lee 9th Dan",
      "fu3": "General Choi Hong Hi 10th Dan"
    },
    {
      "grade": "white",
      "id": "white3",
      "question": "In which country did Tae Kwon-Do originate?",
      "micah": "Korea",
      "fu1": "Japan",
      "fu2": "China",
      "fu3": "Wales"
    },
    {
      "grade": "white",
      "id": "white4",
      "question": "What is the first tenet of Tae Kwon-Do?",
      "micah": "Courtesy",
      "fu1": "Indomitable Spirit",
      "fu2": "Perseverance",
      "fu3": "Integrity"
    },
    {
      "grade": "white",
      "id": "white5",
      "question": "What is the second tenet of Tae Kwon-Do?",
      "micah": "Integrity",
      "fu1": "Courtesy",
      "fu2": "Indomitable Spirit",
      "fu3": "Self Control"
    },
    {
      "grade": "white",
      "id": "white6",
      "question": "What is the third tenet of Tae Kwon-Do?",
      "micah": "Perseverance",
      "fu1": "Integrity",
      "fu2": "Courtesy",
      "fu3": "Indomitable Spirit"
    },
    {
      "grade": "white",
      "id": "white7",
      "question": "What is the fourth tenet of Tae Kwon-Do?",
      "micah": "Self Control",
      "fu1": "Indomitable Spirit",
      "fu2": "Integrity",
      "fu3": "Courtesy"
    },
    {
      "grade": "white",
      "id": "white8",
      "question": "What is the fifth tenet of Tae Kwon-Do?",
      "micah": "Indomitable Spirit",
      "fu1": "Perseverance",
      "fu2": "Self Control",
      "fu3": "Integrity"
    },
    {
      "grade": "white",
      "id": "white9",
      "question": "What does White Belt signify?",
      "micah": "Innocence – as the beginner has no previous knowledge of Tae Kwon-Do",
      "fu1": "A clean start – as the beginner is forgiven from all previous transgressions",
      "fu2": "Persil – good luck keeping that dobok sparkling white",
      "fu3": "Purity – as the beginner has no previous knowledge of Tae Kwon-Do"
    },
    {
      "grade": "white",
      "id": "white10",
      "question": "What is the title given to a 7th or 8th Degree Black Belt?",
      "micah": "Master",
      "fu1": "Lord",
      "fu2": "Sensei",
      "fu3": "Halmeoni"
    },
    {
      "grade": "white",
      "id": "white11",
      "question": "What is the title given to a 9th Degree Black Belt?",
      "micah": "Grand Master",
      "fu1": "Master",
      "fu2": "Sensei",
      "fu3": "Haejeog"
    },
    {
      "grade": "white",
      "id": "white12",
      "question": "Name the 3 sections of the body in Korean.",
      "micah": "Nopunde (High), Kaunde (Middle), Najunde (Low)",
      "fu1": "Nopunde (Middle), Kaunde (High), Najunde (Low)",
      "fu2": "Nopunde (Low), Kaunde (High), Najunde (Middle)",
      "fu3": "Nopunde (High), Kaunde (Low), Najunde (Middle)"
    },
    {
      "grade": "white",
      "id": "white13",
      "question": "What is Master in Korean?",
      "micah": "Sahyun",
      "fu1": "Saseong",
      "fu2": "Oppa",
      "fu3": "Dono"
    },
    {
      "grade": "white",
      "id": "white14",
      "question": "What is Grand Master in Korean?",
      "micah": "Saseong",
      "fu1": "Sahyun",
      "fu2": "Appa",
      "fu3": "Sensei"
    },
    {
      "grade": "white",
      "id": "white15",
      "question": "What is Attention Stance in Korean?",
      "micah": "Charyot Sogi",
      "fu1": "Junbi Sogi",
      "fu2": "Narani Sogi",
      "fu3": "Annun Sogi"
    },
    {
      "grade": "white",
      "id": "white16",
      "question": "What is Ready Stance in Korean?",
      "micah": "Junbi Sogi",
      "fu1": "Narani Sogi",
      "fu2": "Charyot Sogi",
      "fu3": "Gunnun Sogi"
    },
    {
      "grade": "white",
      "id": "white17",
      "question": "What does Narani Sogi mean in English?",
      "micah": "Parallel Stance",
      "fu1": "Ready Stance",
      "fu2": "Attention Stance",
      "fu3": "Sitting Stance"
    },
    {
      "grade": "white",
      "id": "white18",
      "question": "What is Walking Stance in Korean?",
      "micah": "Gunnun Sogi",
      "fu1": "Junbi Sogi",
      "fu2": "Narani Sogi",
      "fu3": "Annun Sogi"
    },
    {
      "grade": "white",
      "id": "white19",
      "question": "What is Sitting Stance in Korean?",
      "micah": "Annun Sogi",
      "fu1": "Gunnun Sogi",
      "fu2": "Charyot Sogi",
      "fu3": "Junbi Sogi"
    },
    {
      "grade": "white",
      "id": "white20",
      "question": "What is Forefist in Korean?",
      "micah": "Ap Joomuk",
      "fu1": "Joomuk",
      "fu2": "Sonkal",
      "fu3": "Palmok"
    },
    {
      "grade": "white",
      "id": "white21",
      "question": "What does Palmok mean in English?",
      "micah": "Forearm",
      "fu1": "Fist",
      "fu2": "Forefist",
      "fu3": "Knife-hand"
    },
    {
      "grade": "white",
      "id": "white22",
      "question": "What is Knife-hand in Korean?",
      "micah": "Sonkal",
      "fu1": "Ap Joomuk",
      "fu2": "An Palmok",
      "fu3": "Bakat Palmok"
    },
    {
      "grade": "white",
      "id": "white23",
      "question": "Translate the following into Korean: Inner forearm, outer forearm",
      "micah": "An palmok, bakat palmok",
      "fu1": "Bakat palmok, an palmok",
      "fu2": "Anuro palmok, bakuro palmok",
      "fu3": "Bakuro palmok, anuro palmok"
    },
    {
      "grade": "white",
      "id": "white24",
      "question": "How do you say 4-directional punch in Korean?",
      "micah": "Saju Jirugi",
      "fu1": "Saju Makgi",
      "fu2": "Saji Chagi",
      "fu3": "Saju Tulgi"
    },
    {
      "grade": "white",
      "id": "white25",
      "question": "How do you say 4-directional block in Korean?",
      "micah": "Saju Makgi",
      "fu1": "Saju Jirugi",
      "fu2": "Saji Chagi",
      "fu3": "Saju Tulgi"
    },
    {
      "grade": "white",
      "id": "white26",
      "question": "Where should your fist or fingertips be for a middle block?",
      "micah": "Shoulder level",
      "fu1": "Eye level",
      "fu2": "Belt level",
      "fu3": "Knee level"
    },
    {
      "grade": "white",
      "id": "white27",
      "question": "Where should your fist be for a middle punch?",
      "micah": "Shoulder level",
      "fu1": "Belt level",
      "fu2": "Eye level",
      "fu3": "Knee level"
    },
    {
      "grade": "white",
      "id": "white28",
      "question": "How wide and long is a walking stance?",
      "micah": "Width: 1 shoulder width, Length: 1 and a half shoulder widths",
      "fu1": "Width: 2 shoulder widths, Length: 1 and a half shoulder widths",
      "fu2": "Width: 1 shoulder width, Length: 2 shoulder widths",
      "fu3": "Width: 1 and a half shoulder widths, Length: 1 shoulder width"
    },
    {
      "grade": "white",
      "id": "white29",
      "question": "Which sequence is correct?",
      "micah": "Hana, dool, set, net, tasut, hasut, ilgop, yadul, ahop, yul",
      "fu1": "Hana, hasut, ilgop, yadul, ahop, yul, dool, set, net, tasut",
      "fu2": "Hana, dool, set, net, ahop, yul, tasut, hasut, ilgop, yadul",
      "fu3": "Hana, set, dool, net, hasut, tasut, ilgop, yadul, ahop, yul"
    },
    {
      "grade": "white",
      "id": "white30",
      "question": "When was Tae Kwon Do officially recognised?",
      "micah": "11th April 1955",
      "fu1": "12th April 1955",
      "fu2": "11th April 1956",
      "fu3": "12th April 1956"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag1",
      "question": "What is the diagram of Chonji?",
      "micah": "A cross",
      "fu1": "A square",
      "fu2": "A circle",
      "fu3": "A capital 'i'"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag2",
      "question": "What does Chonji literally mean?",
      "micah": "Heaven and the Earth",
      "fu1": "Moon and stars",
      "fu2": "Heaven and hell",
      "fu3": "Earth, wind and fire"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag3",
      "question": "How many movements does Chonji have?",
      "micah": "19",
      "fu1": "20",
      "fu2": "21",
      "fu3": "22"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag4",
      "question": "What is the 9th movement of Chonji?",
      "micah": "Niunja So, An palmok kaunde makgi",
      "fu1": "Niunja So, An joomuk kaunde makgi",
      "fu2": "Niunja So, An palmok nopunde makgi",
      "fu3": "Niunja So, An palmok kaunde makgi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag5",
      "question": "What is the last movement of Chonji?",
      "micah": "Gunnun so, baro jirugi",
      "fu1": "Annun so, baro jirugi",
      "fu2": "Narani so, baro jirugi",
      "fu3": "Gunnun so, baro makgi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag6",
      "question": "What is a pattern called in Korean?",
      "micah": "Tul",
      "fu1": "Palmok",
      "fu2": "Dojang",
      "fu3": "Golpeu"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag7",
      "question": "What is a pattern?",
      "micah": "A set of fundamental movements both offensive and defensive against an imaginary opponent",
      "fu1": "A set of fundamental movements performed with a partner taking it in turns to attack",
      "fu2": "A type of sparring where students use whatever techniques they wish and the number of steps is not set",
      "fu3": "A choreographed set of movements performed with rhythm and set to music"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag8",
      "question": "What section punch are you executing in pattern Chon-Ji?",
      "micah": "Middle",
      "fu1": "Low",
      "fu2": "High",
      "fu3": "C"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag9",
      "question": "What is an inner forearm block called in Korean?",
      "micah": "An palmok makgi",
      "fu1": "Baro jirugi",
      "fu2": "Bandae jirugi",
      "fu3": "Bakat palmok makgi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag10",
      "question": "What is an outer forearm block called in Korean?",
      "micah": "Bakat palmok makgi",
      "fu1": "An palmok Makgi",
      "fu2": "Baro jirugi",
      "fu3": "Bandae jirugi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag11",
      "question": "What is an obverse punch called in Korean?",
      "micah": "Baro jirugi",
      "fu1": "Bakat palmok makgi",
      "fu2": "An palmok Makgi",
      "fu3": "Bandae jirugi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag12",
      "question": "What is a reverse punch called in Korean?",
      "micah": "Bandae jirugi",
      "fu1": "Baro jirugi",
      "fu2": "Bakat palmok makgi",
      "fu3": "An palmok Makgi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag13",
      "question": "Name all the stances you know in Korean",
      "micah": "Charyot Sogi, Narani sogi, Annun Sogi, Gunnun Sogi, Niunja Sogi",
      "fu1": "Charyot Sogi, Narani junbi sogi, Annun Sogi",
      "fu2": "Charyot Sogi, Narani junbi sogi, Gunnun Sogi, Niunja Sogi",
      "fu3": "Charyot Sogi, Narani junbi sogi, Annun Sogi, Gunnun Sogi, Ninja Sogi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag14",
      "question": "What does the colour of your belt signify?",
      "micah": "Innocence and that the beginning student has no previous knowledge of Taekwon-Do",
      "fu1": "Patience",
      "fu2": "Purity",
      "fu3": "Tae Kwon-Do"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag15",
      "question": "What is front snap kick in Korean?",
      "micah": "Apcha busigi",
      "fu1": "Baro jirugi",
      "fu2": "Gunnun junbi sogi",
      "fu3": "Bandae jirugi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag16",
      "question": "What is obverse punch in Korean?",
      "micah": "Baro jirugi",
      "fu1": "Bandae jirugi",
      "fu2": "Gunnun junbi sogi",
      "fu3": "Apcha busigi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag17",
      "question": "What is reverse punch in Korean?",
      "micah": "Bandae jirugi",
      "fu1": "Gunnun junbi sogi",
      "fu2": "Baro jirugi",
      "fu3": "Apcha busigi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag18",
      "question": "What is walking ready stance in Korean?",
      "micah": "Gunnun junbi sogi",
      "fu1": "Baro jirugi",
      "fu2": "Bandae jirugi",
      "fu3": "Apcha busigi"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag19",
      "question": "Describe what an inward block is",
      "micah": "It is a block which makes contact with your opponents inner forearm to expose the inside portion of their body",
      "fu1": "It is a block which makes contact with your opponents outer forearm to expose the outside portion of their body",
      "fu2": "It is a block which makes contact with your opponents inner forearm to expose the inside portion of your body",
      "fu3": "It is a block which makes contact with your opponents outer forearm to expose the lower portion of their body"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag20",
      "question": "Describe what an outward block is",
      "micah": "It is a block which makes contact with your opponents outer forearm to expose the outside portion of their body",
      "fu1": "It is a block which makes contact with your opponents inner forearm to expose the inside portion of their body",
      "fu2": "It is a block which makes contact with your opponents inner forearm to expose the inside portion of your body",
      "fu3": "It is a block which makes contact with your opponents outer forearm to expose the lower portion of their body"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag21",
      "question": "What is an Anuro makgi?",
      "micah": "Inward block",
      "fu1": "Outward block",
      "fu2": "Inside block",
      "fu3": "Outside block"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag22",
      "question": "What is a Bakuro makgi?",
      "micah": "Outward block",
      "fu1": "Inside block",
      "fu2": "Inward block",
      "fu3": "Upside down block"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag23",
      "question": "What does Niunja sogi mean?",
      "micah": "L-stance",
      "fu1": "Walking stance",
      "fu2": "Fixed stance",
      "fu3": "Happen-stance"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag24",
      "question": "What does Narani junbi sogi mean?",
      "micah": "Parallel ready stance",
      "fu1": "Fixed stance",
      "fu2": "Bending ready stance",
      "fu3": "Perpendicular ready stance"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag25",
      "question": "Which foot moves when when you return to parallel ready stance at the end of Chonji?",
      "micah": "Left",
      "fu1": "Right",
      "fu2": "Does not matter",
      "fu3": "Both"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag26",
      "question": "What is the name of your next pattern after Chonji?",
      "micah": "Dan-Gun",
      "fu1": "Do-San",
      "fu2": "Won-Hyo",
      "fu3": "Chonji 2"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag27",
      "question": "What number is Yul + Ahop?",
      "micah": "19",
      "fu1": "21",
      "fu2": "17",
      "fu3": "15"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag28",
      "question": "Which leg is in front when forming a right L-Stance",
      "micah": "Left",
      "fu1": "Right",
      "fu2": "Both",
      "fu3": "None"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag29",
      "question": "What does yellow belt signify?",
      "micah": "The earth from which a plant sprouts as the Taekwon-Do foundation is being laid",
      "fu1": "The plant's growth as the Taekwon-Do skill begins to develop",
      "fu2": "Light, through which knowledge of Taekwon-Do scatters and shines",
      "fu3": "Cowardice"
    },
    {
      "grade": "yellow-tag",
      "id": "yellowtag30",
      "question": "What anagram represents the tenets of Taekwon-Do?",
      "micah": "CIPSI",
      "fu1": "CIPSO",
      "fu2": "CISCO",
      "fu3": "CALIPPO"
    },
    {
      "grade": "yellow",
      "id": "yellow1",
      "question": "What is the diagram of Dan-Gun?",
      "micah": "An I shape",
      "fu1": "A Z shape",
      "fu2": "A circle",
      "fu3": "A cross"
    },
    {
      "grade": "yellow",
      "id": "yellow2",
      "question": "What is the meaning of Dan-Gun?",
      "micah": "Dan-Gun is named after the holy Dan-Gun, the legendary founder of Korea in the year 2333 BC",
      "fu1": "Dan-Gun is named after the holy Dan-Gun, the legendary founder of Korea in the year 3222 BC",
      "fu2": "Dan-Gun is named after the holy Dan-Gun, the legendary founder of Korea in the year 2333 AD",
      "fu3": "Dan-Gun is named after the holy Gun-Dan, the legendary founder of Korea in the year 2333 BC"
    },
    {
      "grade": "yellow",
      "id": "yellow3",
      "question": "How many movements does Dan-Gun have?",
      "micah": "21",
      "fu1": "20",
      "fu2": "22",
      "fu3": "19"
    },
    {
      "grade": "yellow",
      "id": "yellow4",
      "question": "What does Daebi makgi mean?",
      "micah": "Guarding block",
      "fu1": "Rising block",
      "fu2": "Blocking block",
      "fu3": "Rising kick"
    },
    {
      "grade": "yellow",
      "id": "yellow5",
      "question": "What is the purpose of step-sparring?",
      "micah": "To practice focus, distance and timing. To learn the appropriate tools for different vital spots. ",
      "fu1": "To improve focus, distance and timing by using taekwon-do as a semi-contact sport",
      "fu2": "To demonstrate whatever techniques and combinations you wish with no number of steps set",
      "fu3": "To demonstrate a lack of control and very little mastery of the techniques used"
    },
    {
      "grade": "yellow",
      "id": "yellow6",
      "question": "What level punch are you performing in pattern Dan-Gun?",
      "micah": "Nopunde",
      "fu1": "Nijunde",
      "fu2": "Kaunde",
      "fu3": "Middle"
    },
    {
      "grade": "yellow",
      "id": "yellow7",
      "question": "How many different blocks are there in the pattern and what are they called in Korean?",
      "micah": "4 (Sonkal daebi makgi, an palmok najunde makgi, sang palmok makgi, bakat palmok chookyo makgi)",
      "fu1": "3 (Sonkal daebi makgi, an palmok najunde makgi, sang palmok makgi)",
      "fu2": "2 (Sonkal daebi makgi, an palmok najunde makgi)",
      "fu3": "5 (Sonkal daebi makgi, an palmok najunde makgi, sang palmok makgi, chookyo makgi, an palmok kaunde makgi)"
    },
    {
      "grade": "yellow",
      "id": "yellow8",
      "question": "What is the Korean for three step sparring?",
      "micah": "Sambo matsogi",
      "fu1": "Jayu matsogi",
      "fu2": "Ban-jayu matsogi",
      "fu3": "Banyu mathsogi"
    },
    {
      "grade": "yellow",
      "id": "yellow9",
      "question": "Explain the difference between inside and outside blocks?",
      "micah": "An inside block is a block directed at the inner portion of the attacking arm or foot. An Outside block is a block directed at the outside portion of the attacking arm or foot prohibiting the opponent from utilising his other arm/foot in a combination attack.",
      "fu1": "Outside refers to an attack on the inside of your opponent’s body, inside refers to the outside",
      "fu2": "Inside refers to a block moving from the outside of your body to the inside, and vice versa",
      "fu3": "Outside refers to a block moving from the outside of your body to the inside, and vice versa"
    },
    {
      "grade": "yellow",
      "id": "yellow10",
      "question": "Explain the difference between inward and outward blocks?",
      "micah": "Inward refers to a blocking tool moving from an outward to an inward trajectory towards the chest line. An outward block is when the blocking tool reaches the target from an inward to outward trajectory.",
      "fu1": "Outward refers to a block moving from the outside of your body to the inside, and vice versa",
      "fu2": "Inward refers to an attack on the inside of your opponent’s body, outside refers to the outside",
      "fu3": "Outward refers to an attack on the inside of your opponent’s body, inside refers to the outside"
    },
    {
      "grade": "yellow",
      "id": "yellow11",
      "question": "What does the colour of yellow belt signify?",
      "micah": "The earth from which a plant sprouts as the taekwon-do foundation is laid",
      "fu1": "The plant from which earth sprouts as the taekwon-do foundation is laid",
      "fu2": "The plant from which earth sprouts as the taekwon-do foundation is finely honed to an expert level",
      "fu3": "Fear"
    },
    {
      "grade": "yellow",
      "id": "yellow12",
      "question": "What is the outer forearm low block called in Korean?",
      "micah": "Najunde bakat palmok makgi",
      "fu1": "Kaunde bakat palmok makgi",
      "fu2": "Najunde anuro palmok makgi",
      "fu3": "Kaunde bakat palmok makgi"
    },
    {
      "grade": "yellow",
      "id": "yellow13",
      "question": "What is the rising block called in Korean?",
      "micah": "Chookyo makgi",
      "fu1": "Palmok daebi makgi",
      "fu2": "Bakat palmok makgi",
      "fu3": "Sang palmok makgi"
    },
    {
      "grade": "yellow",
      "id": "yellow14",
      "question": "What is continuous motion in Korean?",
      "micah": "Yongsok dongjak",
      "fu1": "Barun dongjak",
      "fu2": "Yongyol dongjak",
      "fu3": "Gurunun dongjak"
    },
    {
      "grade": "yellow",
      "id": "yellow15",
      "question": "Why do we wrap our belt around the waist once?",
      "micah": "To pursue one goal, to serve one master with unshakeable loyalty, to gain victory in one blow",
      "fu1": "To pursue one goal and gain victory in one blow",
      "fu2": "To serve one master at a time. Typcially Micah",
      "fu3": "To symbolise the love between two friends"
    },
    {
      "grade": "yellow",
      "id": "yellow16",
      "question": "What is the Korean for thrust?",
      "micah": "Tulgi",
      "fu1": "Taerigi",
      "fu2": "Jirugi",
      "fu3": "Chagi"
    },
    {
      "grade": "yellow",
      "id": "yellow17",
      "question": "How bent is the blocking arm when forming an inner forearm middle block",
      "micah": "90 degrees",
      "fu1": "25 degrees",
      "fu2": "180 degrees",
      "fu3": "80 degrees"
    },
    {
      "grade": "yellow",
      "id": "yellow18",
      "question": "What is the Korean for the number 20?",
      "micah": "Sumul",
      "fu1": "Sorun",
      "fu2": "Mahun",
      "fu3": "Ilgop"
    },
    {
      "grade": "yellow",
      "id": "yellow19",
      "question": "What is Ilgop multiplied by Dool?",
      "micah": "Yul-net",
      "fu1": "Yul-set",
      "fu2": "Yul-tasot",
      "fu3": "Yul-yadul"
    },
    {
      "grade": "yellow",
      "id": "yellow20",
      "question": "What does Busigi mean in Korean?",
      "micah": "Snap",
      "fu1": "Bending",
      "fu2": "Rising",
      "fu3": "Rotating"
    },
    {
      "grade": "yellow",
      "id": "yellow21",
      "question": "What does Sang palmok mean?",
      "micah": "Twin forearm",
      "fu1": "Dual elbow",
      "fu2": "Combination backfirst",
      "fu3": "A pair of punches"
    },
    {
      "grade": "yellow",
      "id": "yellow22",
      "question": "How many Kup grades are there?",
      "micah": "10",
      "fu1": "8",
      "fu2": "6",
      "fu3": "12"
    },
    {
      "grade": "yellow",
      "id": "yellow23",
      "question": "In what year was Korea founded?",
      "micah": "2333 BC",
      "fu1": "1816 BC",
      "fu2": "2002 BC",
      "fu3": "2136 BC"
    },
    {
      "grade": "yellow",
      "id": "yellow24",
      "question": "Which of the following is not part of the oath?",
      "micah": "I shall strive for a more peaceful world",
      "fu1": "I shall observe the tenets of Taekwon-Do",
      "fu2": "I shall be a champion of freedom and justice",
      "fu3": "I shall never misuse Taekwon-Do"
    },
    {
      "grade": "yellow",
      "id": "yellow25",
      "question": "What is the ninth move of Dan-gun?",
      "micah": "Niunja so sang palmok makgi",
      "fu1": "Gunnun so bakat palmok chookyo makgi",
      "fu2": "Niunja so sonkal kaunde daebi makgi",
      "fu3": "Niunja so sonkal yop taerigi"
    },
    {
      "grade": "yellow",
      "id": "yellow26",
      "question": "What is the sixteenth move of Dan-Gun?",
      "micah": "Gunnun so bakat palmok chookyo makgi",
      "fu1": "Niunja so sang palmok makgi",
      "fu2": "Niunja so sonkal kaunde daebi makgi",
      "fu3": "Niunja so sonkal yop taerigi"
    },
    {
      "grade": "yellow",
      "id": "yellow27",
      "question": "What is the seventh move of Dan-Gun?",
      "micah": "Walking stance high punch",
      "fu1": "L-stance twin forearm block",
      "fu2": "Walking stance outer forearm rising block",
      "fu3": "L-stance knife-hand middle side strike"
    },
    {
      "grade": "yellow",
      "id": "yellow28",
      "question": "What is the ninth move of Dan-Gun?",
      "micah": "L-stance twin forearm block",
      "fu1": "Walking stance high punch",
      "fu2": "Walking stance outer forearm rising block",
      "fu3": "L-stance knife-hand middle side strike"
    },
    {
      "grade": "yellow",
      "id": "yellow29",
      "question": "Which of the following is not part of Dan-Gun?",
      "micah": "Walking stance middle punch",
      "fu1": "Walking stance high punch",
      "fu2": "L-stance twin forearm block",
      "fu3": "L-stance knife-hand middle side strike"
    },
    {
      "grade": "yellow",
      "id": "yellow30",
      "question": "What do you say at the end of Dan-Gun?",
      "micah": "Dan-Gun",
      "fu1": "Kihap",
      "fu2": "Sijak",
      "fu3": "Chonji"
    },
    {
      "grade": "green-tag",
      "id": "green-tag1",
      "question": "How many movements are in Do-San?",
      "micah": "24",
      "fu1": "21",
      "fu2": "19",
      "fu3": "22"
    },
    {
      "grade": "green-tag",
      "id": "green-tag2",
      "question": "What does Do-San mean?",
      "micah": "It is the pseudonym of the patriot Ahn Chang-Ho. The 24 movements represent his entire life which he devoted to furthering the education of Korea and its independence movement.",
      "fu1": "It is the pseudonym of the patriot Ahn Chang-Ho. The 24 movements represent each hour of the day he spent training",
      "fu2": "It is the pseudonym of the patriot Ahn Chang-Ho. The 24 movements represent his favourite crime drama starring Kiefer Sutherland",
      "fu3": "It is the pseudonym of the patriot Ahn Chang-Ho. The 24 movements represent the number of months in his calender which was actually two calenders stuck together"
    },
    {
      "grade": "green-tag",
      "id": "green-tag3",
      "question": "Whats the weight distribution of Niunja sogi?",
      "micah": "70% on the rear, 30% on the front",
      "fu1": "30% on the rear, 70% on the front",
      "fu2": "50% on the rear, 50% on the front",
      "fu3": "100% on the rear, 0% on the front"
    },
    {
      "grade": "green-tag",
      "id": "green-tag4",
      "question": "How long is a walking stance?",
      "micah": "1.5 shoulder widths from big toe to big toe",
      "fu1": "1 shoulder widths from big toe to big toe",
      "fu2": "2.5 shoulder widths from big toe to big toe",
      "fu3": "1.5 shoulder widths from front toes to back of rear foot"
    },
    {
      "grade": "green-tag",
      "id": "green-tag5",
      "question": "What does wen and orun mean?",
      "micah": "Left and right",
      "fu1": "Right and left",
      "fu2": "Up and down",
      "fu3": "Down and left"
    },
    {
      "grade": "green-tag",
      "id": "green-tag6",
      "question": "What is Korean for Parallel ready stance?",
      "micah": "Narani junbi sogi",
      "fu1": "Junbi sogi",
      "fu2": "Narani sogi",
      "fu3": "Narani gunnun sogi"
    },
    {
      "grade": "green-tag",
      "id": "green-tag7",
      "question": "What does Barun dongjak mean?",
      "micah": "Fast motion",
      "fu1": "Slow motion",
      "fu2": "Continuous motion",
      "fu3": "Connecting motion"
    },
    {
      "grade": "green-tag",
      "id": "green-tag8",
      "question": "How many patterns are there in Taekwon-Do?",
      "micah": "24",
      "fu1": "25",
      "fu2": "34",
      "fu3": "35"
    },
    {
      "grade": "green-tag",
      "id": "green-tag9",
      "question": "What motion are moves 15 and 16 of Do-San performed in?",
      "micah": "Barun Dongjak (fast motion)",
      "fu1": "Yongsok Dongjak (continuous motion)",
      "fu2": "Yongyol dongjak (Connecting motion)",
      "fu3": "Neurin dongjak (Slow motion)"
    },
    {
      "grade": "green-tag",
      "id": "green-tag10",
      "question": "How many different types of stances are there in Do-San?",
      "micah": "4",
      "fu1": "2",
      "fu2": "3",
      "fu3": "1"
    },
    {
      "grade": "green-tag",
      "id": "green-tag11",
      "question": "How many Tulgis are there in pattern Do-san",
      "micah": "1",
      "fu1": "2",
      "fu2": "3",
      "fu3": "4"
    },
    {
      "grade": "green-tag",
      "id": "green-tag12",
      "question": "What is the pattern diagram for Do-San",
      "micah": "A step shape",
      "fu1": "An I shape",
      "fu2": "The Scholar",
      "fu3": "The Admiral"
    },
    {
      "grade": "green-tag",
      "id": "green-tag13",
      "question": "What does Sun mean in English ",
      "micah": "Straight",
      "fu1": "Upwards",
      "fu2": "Twin",
      "fu3": "Release"
    },
    {
      "grade": "green-tag",
      "id": "green-tag14",
      "question": "What does Jappyosul tae mean?",
      "micah": "Release from grab",
      "fu1": "Upwards motion",
      "fu2": "Twin",
      "fu3": "Straight"
    },
    {
      "grade": "green-tag",
      "id": "green-tag15",
      "question": "Which pioneer master brought Taekwon-Do to the UK?",
      "micah": "Grand Master Rhee Ki Ha",
      "fu1": "The patriot Ahn Joong-Gun",
      "fu2": "Grand Master General Choi Hong Hi",
      "fu3": "Noted monk Won-Hyo"
    },
    {
      "grade": "green-tag",
      "id": "green-tag16",
      "question": "When was the patriot Ahn Joong-Gun born and when did he die?",
      "micah": "1876 to 1938",
      "fu1": "1838 to 1976",
      "fu2": "1786 to 1848",
      "fu3": "1876 to 1939"
    },
    {
      "grade": "green-tag",
      "id": "green-tag17",
      "question": "What is the Korean for fingertips?",
      "micah": "Sonkut",
      "fu1": "Sonkal",
      "fu2": "Sonbadak",
      "fu3": "Palmok"
    },
    {
      "grade": "green-tag",
      "id": "green-tag18",
      "question": "What is the Korean for back-fist?",
      "micah": "Dung joomuk",
      "fu1": "Ap joomuk",
      "fu2": "Yop joomuk",
      "fu3": "Ap kumchi"
    },
    {
      "grade": "green-tag",
      "id": "green-tag19",
      "question": "What is the Korean for forefist?",
      "micah": "Ap joomuk",
      "fu1": "Dung joomuk",
      "fu2": "Yop joomuk",
      "fu3": "Ap kumchi"
    },
    {
      "grade": "green-tag",
      "id": "green-tag20",
      "question": "What is the Korean for ball of the foot?",
      "micah": "Ap kumchi",
      "fu1": "Balkal",
      "fu2": "Dung joomuk",
      "fu3": "Yop joomuk"
    },
    {
      "grade": "green-tag",
      "id": "green-tag21",
      "question": "What is the difference between a thrust and a strike?",
      "micah": "A thrust goes straight to a target, whilst a strike can come from any direction",
      "fu1": "A strike goes straight to a target, whilst a thurst can come from any direction",
      "fu2": "A strike can only be used on a soft target, whilst a thurst can be used on any target",
      "fu3": "A thurst is always a hand technique, a strike can be a kick too"
    },
    {
      "grade": "green-tag",
      "id": "green-tag22",
      "question": "What is turn-around in Korean?",
      "micah": "Dwiro dora",
      "fu1": "Duruogi",
      "fu2": "Kyong-Ye",
      "fu3": "Paro"
    },
    {
      "grade": "green-tag",
      "id": "green-tag23",
      "question": "Which foot moves when when you return to parallel ready stance at the end of Do-san?",
      "micah": "Right",
      "fu1": "Left",
      "fu2": "Does not matter",
      "fu3": "Both"
    },
    {
      "grade": "green-tag",
      "id": "green-tag24",
      "question": "Which motion is used in Do-san?",
      "micah": "Barun dongjak (fast motion)",
      "fu1": "Yongsok Dongjak (continuous motion)",
      "fu2": "Neurin Dongjak (slow motion)",
      "fu3": "Yongyol Dongjak (connected motion)"
    },
    {
      "grade": "green-tag",
      "id": "green-tag25",
      "question": "What is the height of the wedging blocks in Do-San",
      "micah": "Eye",
      "fu1": "Shoulder",
      "fu2": "Solar plexus",
      "fu3": "Head"
    },
    {
      "grade": "green-tag",
      "id": "green-tag26",
      "question": "What does Hechyo makgi mean?",
      "micah": "Wedging block",
      "fu1": "Rising block",
      "fu2": "High side strike",
      "fu3": "Front snap kick"
    },
    {
      "grade": "green-tag",
      "id": "green-tag27",
      "question": "I am in Do-san twice, but Dan-gun four times. What am I?",
      "micah": "A rising block",
      "fu1": "A spot turn",
      "fu2": "A front snap kick",
      "fu3": "A middle reverse punch"
    },
    {
      "grade": "green-tag",
      "id": "green-tag28",
      "question": "In Do-san, how many breaths do you take during the fast-motion technique?",
      "micah": "2",
      "fu1": "1",
      "fu2": "3",
      "fu3": "0"
    },
    {
      "grade": "green-tag",
      "id": "green-tag29",
      "question": "Translate: Annun so sonkal kaunde yop taerigi",
      "micah": "Sitting stance knife-hand middle side strike",
      "fu1": "Walking stance knife-hand middle side strike",
      "fu2": "Walking stance outer forearm high strike",
      "fu3": "Sitting stance outer forearm high strike"
    },
    {
      "grade": "green-tag",
      "id": "green-tag30",
      "question": "What are the tenets of Taekwon-Do?",
      "micah": "Courtesy, Integrity, Perseverance, Self Control, Indomitable Spirit",
      "fu1": "Courtesy, Integrity, Power, Self Control, Unyielding Spirit",
      "fu2": "Courtesy, Integrity, Perseverance, Honour, Indomitable Spirit",
      "fu3": "Courtesy, Integrity, Perseverance, Self Control, Unyielding Spirit"
    },
    {
      "grade": "green",
      "id": "green1",
      "question": "What does the colour green signify?",
      "micah": "The plantʼs growth – as Taekwon-Do skills begin to develop.",
      "fu1": "The earth – from which a plant sprouts and takes root as the Taekwon-Do",
      "fu2": "Creativity – but don't tell yellow belts",
      "fu3": "Jealousy – Because blue belts don't clash as much with natural skin tones"
    },
    {
      "grade": "green",
      "id": "green2",
      "question": "how many moves are there in Won-Hyo?",
      "micah": "28",
      "fu1": "38",
      "fu2": "27",
      "fu3": "36"
    },
    {
      "grade": "green",
      "id": "green3",
      "question": "What does Moa jumbi sogi A symbolise?",
      "micah": "Peace over war",
      "fu1": "War over peace",
      "fu2": "War equals peace",
      "fu3": "Peas over sweetcorn"
    },
    {
      "grade": "green",
      "id": "green4",
      "question": "What is the distance between the hands and philtrum in Moa Jumbi Sogi A",
      "micah": "30cm",
      "fu1": "20cm",
      "fu2": "25cm",
      "fu3": "15cm"
    },
    {
      "grade": "green",
      "id": "green5",
      "question": "How much longer is a fixed stance than a L-stance?",
      "micah": "The width of your foot",
      "fu1": "The length of your foot",
      "fu2": "10cm",
      "fu3": "Half a should width"
    },
    {
      "grade": "green",
      "id": "green6",
      "question": "What is the significance of the year 686 AD?",
      "micah": "It's when noted monk Won-Hyo introduced Buddhism into the Silla Dynasty",
      "fu1": "It's when noted monk Ahn Joong-Gun introduced Buddhism into the Silla Dynasty",
      "fu2": "It's when noted monk Won-Hyo introduced Taoism into the Silla Dynasty",
      "fu3": "It's when noted monk Won-Hyo introduced Buddhism into the Cilla Dynasty"
    },
    {
      "grade": "green",
      "id": "green7",
      "question": "What is the height of the front kicks in Won-Hyo?",
      "micah": "Low",
      "fu1": "Middle",
      "fu2": "High",
      "fu3": "Medium"
    },
    {
      "grade": "green",
      "id": "green8",
      "question": "What is the height of the side piercing kicks in Won-Hyo?",
      "micah": "Shoulder",
      "fu1": "Head",
      "fu2": "Waist",
      "fu3": "Knee"
    },
    {
      "grade": "green",
      "id": "green9",
      "question": "How many stances are there in Won-Hyo?",
      "micah": "5",
      "fu1": "4",
      "fu2": "3",
      "fu3": "2"
    },
    {
      "grade": "green",
      "id": "green10",
      "question": "What is the meaning of Won-Hyo?",
      "micah": "Won-Hyo was the noted monk who introduced Buddhism to the Silla\nDynasty in the year 686 AD",
      "fu1": "Won-Hyo was the noted monk who introduced Neo-Confucianism to the Silla Dynasty in the year 686 AD",
      "fu2": "Won-Hyo was the noted monk who introduced Confucianism to the Silla Dynasty in the year 686 AD",
      "fu3": "Won-Hyo was the noted monk who introduced Neo-Confucianism to the Silla Dynasty in the year 868 AD"
    },
    {
      "grade": "green",
      "id": "green11",
      "question": "What is circular block in Korean?",
      "micah": "Dollimyo makgi",
      "fu1": "Hechyo makgi",
      "fu2": "Chookyo makgi",
      "fu3": "Daebi makgi"
    },
    {
      "grade": "green",
      "id": "green12",
      "question": "How long is a fixed stance?",
      "micah": "One and half shoulder-widths",
      "fu1": "One shoulder-widths",
      "fu2": "Two shoulder-widths",
      "fu3": "Half a shoulder-width"
    },
    {
      "grade": "green",
      "id": "green13",
      "question": "What is the significance of 2333 BC?",
      "micah": "Korea was founded by legendary holy Dan-Gun",
      "fu1": "Noted monk Won-Hyo introduces Buddhism into Silla Dynasty",
      "fu2": "The patriot Ahn Chang Ho, also known as 'Do-San', is born",
      "fu3": "Taekwon-Do is officially recognised"
    },
    {
      "grade": "green",
      "id": "green14",
      "question": "What is CREMBS an acronym for?",
      "micah": "Concentration, Reaction Force, Equilibrium, Mass, Breath Control, Speed",
      "fu1": "Concentration, Reaction Force, Equilibrium, Momentum, Breath Control, Safety",
      "fu2": "Creativity, Reaction Force, Equalness, Mass, Breath Control, Speed",
      "fu3": "Charisma, Rhinestones, Elocution, Magnets, Bladder Control, Sympathy "
    },
    {
      "grade": "green",
      "id": "green15",
      "question": "Which attacking tool is used for a side piercing kick?",
      "micah": "Balkal (Foot Sword)",
      "fu1": "Ap Kumchi (Ball of the foot)",
      "fu2": "Baldung (Instep)",
      "fu3": "Dwitchook (Heel)"
    },
    {
      "grade": "green",
      "id": "green16",
      "question": "What is the pattern diagram for Won-Hyo",
      "micah": "An I shape",
      "fu1": "A Z shape",
      "fu2": "The Scholar",
      "fu3": "The Admiral"
    },
    {
      "grade": "green",
      "id": "green17",
      "question": "In Moa junbi sogi A, how close are our toes?",
      "micah": "They're touching",
      "fu1": "Should-width",
      "fu2": "A small gap (5cm)",
      "fu3": "So close you'd think they were touching but they must never touch"
    },
    {
      "grade": "green",
      "id": "green18",
      "question": "What does Yopcha jirugi mean?",
      "micah": "Side piercing kick",
      "fu1": "Front snap kick",
      "fu2": "Side piercing stirke",
      "fu3": "Front snap strike"
    },
    {
      "grade": "green",
      "id": "green19",
      "question": "Which statement about Bending ready stance A is true",
      "micah": "Your standing foot should be 90° to where you are facing",
      "fu1": "Weight distribution is 90/10",
      "fu2": "The raised leg is the leading leg",
      "fu3": "There are three in Won-Hyo"
    },
    {
      "grade": "green",
      "id": "green20",
      "question": "What does Balkal mean?",
      "micah": "Foot-sword",
      "fu1": "Ball of the foot",
      "fu2": "Fingertip",
      "fu3": "Heel"
    },
    {
      "grade": "green",
      "id": "green21",
      "question": "How many techniques does a circular block block in Won-Hyo?",
      "micah": "1 or 2",
      "fu1": "1",
      "fu2": "2",
      "fu3": "0"
    },
    {
      "grade": "green",
      "id": "green22",
      "question": "What is knife-hand high inward strike in Korean?",
      "micah": "Sonkal nopunde anuro taerigi",
      "fu1": "Sonkal nopunde anuro tulgi",
      "fu2": "Sonkal nopunde bakuro tulgi",
      "fu3": "Sonkal nopunde bakuro taerigi"
    },
    {
      "grade": "green",
      "id": "green23",
      "question": "How many patterns should green belts know?",
      "micah": "4",
      "fu1": "5",
      "fu2": "6",
      "fu3": "7"
    },
    {
      "grade": "green",
      "id": "green24",
      "question": "Translate this: Najunde apcha busigi",
      "micah": "Low front snap kick",
      "fu1": "Low side front snap kick",
      "fu2": "High front snap kick",
      "fu3": "High side front snap kick"
    },
    {
      "grade": "green",
      "id": "green25",
      "question": "What is the first move in Won-Hyo?",
      "micah": "L-stance twin forearm block",
      "fu1": "L-stance knife-hand high inward strike",
      "fu2": "Fixed stance middle side punch",
      "fu3": "L-stance knife-hand middle guarding block"
    },
    {
      "grade": "green",
      "id": "green26",
      "question": "What is the second move in Won-Hyo?",
      "micah": "L-stance knife-hand high inward strike",
      "fu1": "L-stance twin forearm block",
      "fu2": "Fixed stance middle side punch",
      "fu3": "L-stance knife-hand middle guarding block"
    },
    {
      "grade": "green",
      "id": "green27",
      "question": "How bent is the blocking arm when forming an inner forearm middle block",
      "micah": "90 degrees",
      "fu1": "60 degrees",
      "fu2": "80 degrees",
      "fu3": "100 degrees"
    },
    {
      "grade": "green",
      "id": "green28",
      "question": "What is the ninth move in Won-Hyo?",
      "micah": "L-stance knife-hand middle guarding block",
      "fu1": " L-stance twin forearm block",
      "fu2": "Low front snap kick",
      "fu3": "Middle side piercing kick"
    },
    {
      "grade": "green",
      "id": "green29",
      "question": "How high should the fingertips be when forming a Kaunde Sonkal Daebi Magki",
      "micah": "Shoulder",
      "fu1": "Eye",
      "fu2": "Chest",
      "fu3": "Solar plexus"
    },
    {
      "grade": "green",
      "id": "green30",
      "question": "Where do your feet point when doing a fixed stance?",
      "micah": "Both feet point 15° inward",
      "fu1": "One foot points 15° inward, the other points 10° inward",
      "fu2": "One foot points 10° inward, the other points 90° outwards",
      "fu3": "Both feet point 25° inward"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag1",
      "question": "What does blue signify?",
      "micah": "The Heaven – towards which the\nplant matures into a\ntowering tree as training in\nTaekwon-Do progresses",
      "fu1": "The Sky – towards which the\nplant matures into a\ntowering tree as training in\nTaekwon-Do finishes",
      "fu2": "The Ocean – vast and unexplored like your understanding of\nTaekwon-Do",
      "fu3": "Timeless pop classics – Obviously Simon Webbe had all the talent but you could rely on Lee Ryan for a decent high note"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag2",
      "question": "How many moves are there in Yul-Gok?",
      "micah": "38",
      "fu1": "37",
      "fu2": "36",
      "fu3": "Too many, let's be honest"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag3",
      "question": "What is the meaning of Yul-Gok?",
      "micah": "Yul-Gok is the pseudonym of the great philosopher and scholar Yi I (1536-1584) nicknamed the 'Confucius of Korea'. The 38 movements of this pattern refer to his birthplace on 38 degrees latitude and the diagram represents scholar",
      "fu1": "Yul-Gok is the pseudonym of the great philosopher and scholar Yi I (1535-1585) nicknamed the 'Confucius of Korea'. The 38 movements of this pattern refer to his birthplace on 38 degrees latitude and the diagram represents scholar",
      "fu2": "Yul-Gok is the pseudonym of the great philosopher and scholar Yi I (1526-1585) nicknamed the 'Confucius of Korea'. The 38 movements of this pattern refer to his birthplace on 38 degrees latitude and the diagram represents scholar",
      "fu3": "Yul-Gok is the pseudonym of the great philosopher and scholar Yi I (1536-1584) nicknamed the 'Confucius of Korea'. The 38 movements of this pattern refer to his age when he found ot the plural of beef is 'beeves'"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag4",
      "question": "Which one of the following is not a training secret of Taekwon-Do?",
      "micah": "To study the human anatomy",
      "fu1": "To choose the appropriate attacking tool for each vital spot",
      "fu2": "To keep both arms and\nlegs bent slightly while\na movement is in\nmotion",
      "fu3": "To exhale briefly at\nthe moment of each\nblow without exception"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag5",
      "question": "Which one of the following encompasses the theory of power?",
      "micah": "CREMBS",
      "fu1": "CRAMBS",
      "fu2": "CRAMPS",
      "fu3": "CRUMBS"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag6",
      "question": "What is connecting motion?",
      "micah": "Two movements connected with a single sine-wave\nand only one breath",
      "fu1": "Two or more techniques performed with the movements between being sped up, but without rushing",
      "fu2": "Two or more techniques performed with no pause in\nbetween, with one inhalation",
      "fu3": "A single movement where the execution time is the most efficient"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag7",
      "question": "What is fast motion?",
      "micah": "Two or more techniques performed with increased verlocity between movements, but without rushing",
      "fu1": "Two movements connected with a single sine-wave\nand only one breath",
      "fu2": "Two or more techniques performed with no pause in\nbetween, with one inhalation",
      "fu3": "A single movement where the execution time is the most efficient"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag8",
      "question": "What is continuous motion?",
      "micah": "Two or more techniques performed without pause in\nbetween techniques, with one one inhalation and many exhalations",
      "fu1": "Two movements connected with a single sine-wave\nand only one breath",
      "fu2": "Two or more techniques performed with the movements between being sped up, but without rushing",
      "fu3": "A single movement where the execution time is the most efficient"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag9",
      "question": "On which line should the measure be for moves one and four of Yul-Gok?",
      "micah": "Shoulder line",
      "fu1": "Centre line",
      "fu2": "Chest line",
      "fu3": "It doesn't matter"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag10",
      "question": "What is the significance of 1967?",
      "micah": "Taekwon-Do is brought to\nthe UK by Rhee Ki Ha",
      "fu1": "ITF is founded",
      "fu2": "Taekwon-Do officially recognised",
      "fu3": "Greenwich TKD is founded"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag11",
      "question": "What is Palkup in English?",
      "micah": "Elbow",
      "fu1": "Knee",
      "fu2": "Forearm",
      "fu3": "Heel"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag12",
      "question": "How many degrees should your feet point inwards in a niunga sogi?",
      "micah": "15",
      "fu1": "25",
      "fu2": "20",
      "fu3": "45"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag13",
      "question": "What is the height of the front snap kicks in Yul-Gok?",
      "micah": "Low",
      "fu1": "Middle",
      "fu2": "High",
      "fu3": "Depends on how tall you are"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag14",
      "question": "What does Sambo mat sogi mean?",
      "micah": "Three-step sparring",
      "fu1": "Semi-free sparring",
      "fu2": "Free sparring",
      "fu3": "Two-step sparring"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag15",
      "question": "What is X-stance in Korean?",
      "micah": "Kyocha sogi",
      "fu1": "Gunnun sogi",
      "fu2": "Soojik sogi",
      "fu3": "Dwitbal sogi"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag16",
      "question": "What is a Cha Olligi?",
      "micah": "Rising kick",
      "fu1": "Turning kick",
      "fu2": "Front kick",
      "fu3": "Side kick"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag17",
      "question": "What does Sonbadak mean in Korean?",
      "micah": "Palm",
      "fu1": "Hand",
      "fu2": "Elbow",
      "fu3": "Hooking"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag18",
      "question": "Golcho refers to...",
      "micah": "a defensive technique",
      "fu1": "an attacking technique",
      "fu2": "A circular technique",
      "fu3": "A punch"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag19",
      "question": "Goro refers to...",
      "micah": "an attacking technique",
      "fu1": "a defensive technique",
      "fu2": "A circular technique",
      "fu3": "A punch"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag20",
      "question": "When you refer to height you are talking about how high you should perform a technique in relation to...",
      "micah": "Your own body",
      "fu1": "Your opponents body",
      "fu2": "Your instructors body",
      "fu3": "General Choi Hong Hi's body"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag21",
      "question": "What is front elbow reverse strike in Korean?",
      "micah": "Ap palkup bandae taerigi",
      "fu1": "Bakat palkup bandae taerigi",
      "fu2": "Ap palkup anuro taerigi",
      "fu3": "Bakat palkup baro taerigi"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag22",
      "question": "What is the height of the hooking blocks in Yul-Gok",
      "micah": "Shoulder",
      "fu1": "Eye",
      "fu2": "Chest",
      "fu3": "Waist"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag23",
      "question": "How many high punches are there in Yul-Gok?",
      "micah": "0",
      "fu1": "2",
      "fu2": "6",
      "fu3": "4"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag24",
      "question": "Which of the following is not a reason we wrap our belt only once around our waists?",
      "micah": "To dedicate yourself to one martial art",
      "fu1": "To pursue one goal",
      "fu2": "To serve one master with unshakable loyalty",
      "fu3": "To gain victory in one blow"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag25",
      "question": "What makes the X in X-stance?",
      "micah": "Your shins, your feet should be facing the same way and be parallel to each other",
      "fu1": "Your feet, your shins should be facing the same way and be parallel to each other",
      "fu2": "Your knees, your feet should be facing the same way and be parallel to each other",
      "fu3": "Your shins and feet, your knees should be facing the same way and be parallel to each other"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag26",
      "question": "How many training secrets are there?",
      "micah": "9",
      "fu1": "10",
      "fu2": "8",
      "fu3": "7"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag27",
      "question": "What is two-step sparring in Korean?",
      "micah": "Ibo matsogi",
      "fu1": "Ilbo matsogi",
      "fu2": "Sambo matsogi",
      "fu3": "Jayoo matsogi"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag28",
      "question": "What does Doo palmok mean?",
      "micah": "Double forearm",
      "fu1": "Triple forearm",
      "fu2": "Reverse forearm",
      "fu3": "Twin forearm"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag29",
      "question": "How many double forearm blocks are there in Yul-Gok?",
      "micah": "2",
      "fu1": "4",
      "fu2": "0",
      "fu3": "1"
    },
    {
      "grade": "blue-tag",
      "id": "blue-tag30",
      "question": "What does Golcho makgi mean?",
      "micah": "Hooking block",
      "fu1": "Rising block",
      "fu2": "Circular block",
      "fu3": "Twin forearm block"
    },
    {
      "grade": "blue",
      "id": "blue1",
      "question": "What is the difference between a Tulgi and a Taerigi ?",
      "micah": "Tulgi = Thrust\nTaerigi = Strike",
      "fu1": "Tulgi = Strike\nTaerigi = Thrust",
      "fu2": "Tulgi = Kick\nTaerigi = Punch",
      "fu3": "Tulgi = Jump\nTaerigi = Shift"
    },
    {
      "grade": "blue",
      "id": "blue2",
      "question": "What is a Bandae Goro chagi?",
      "micah": "Reverse hooking kick (attacking version)",
      "fu1": "Reverse hooking kick (defensive version)",
      "fu2": "Hooking block (attacking version)",
      "fu3": "Hooking block (defensive version)"
    },
    {
      "grade": "blue",
      "id": "blue3",
      "question": "What is a Nachuo sogi?",
      "micah": "Low stance",
      "fu1": "Long stance",
      "fu2": "Stuck stance",
      "fu3": "Splits stance"
    },
    {
      "grade": "blue",
      "id": "blue4",
      "question": "What is the weight distribution of a dwitbal sogi?",
      "micah": "90/10",
      "fu1": "80/20",
      "fu2": "70/30",
      "fu3": "60/40"
    },
    {
      "grade": "blue",
      "id": "blue5",
      "question": "Which line does a Giokja jirugi meet?",
      "micah": "Chest line",
      "fu1": "Solar plexus line",
      "fu2": "Shoulder line",
      "fu3": "Center line"
    },
    {
      "grade": "blue",
      "id": "blue6",
      "question": "What is the significance of 1910?",
      "micah": "The year Anh Joong-Gun was executed in Lui-Shung prison",
      "fu1": "The year Joong-Gun was arrested and sent to Lui-Shung prison",
      "fu2": "The year Joong-Gun was born in Lui-Shung prison",
      "fu3": "The year Joong-Gun escaped from Lui-Shung prison"
    },
    {
      "grade": "blue",
      "id": "blue7",
      "question": "Which stance has a wider shoulder-width measurement, a parallel stance or a walking stance?",
      "micah": "They are both one shoulder-width wide but measured from different parts of the feet",
      "fu1": "Parallel stance",
      "fu2": "Walking stance",
      "fu3": "They are both one and a half shoulder-width wide and measured from the same parts of the feet"
    },
    {
      "grade": "blue",
      "id": "blue8",
      "question": "Which stance has a longer shoulder-width measurement, a Gunnun sogi or a Nachuo sogi?",
      "micah": "They are both one and a half shoulder-widths long but measured from different parts of the feet",
      "fu1": "They are both one and a half shoulder-widths long and measured from the same parts of the feet",
      "fu2": "Nachuo sogi",
      "fu3": "Gunnun sogi"
    },
    {
      "grade": "blue",
      "id": "blue9",
      "question": "How long is a low stance? Where is it measured from?",
      "micah": "One and a half shoulder widths, from heel of front foot to big toe of back foot",
      "fu1": "Two shoulder widths, from heel of front foot to big toe of back foot",
      "fu2": "One and a half shoulder widths, from big toe of front foot to big toe of back foot",
      "fu3": "One and a half shoulder widths, from heel of front foot to heel of back foot"
    },
    {
      "grade": "blue",
      "id": "blue10",
      "question": "What is the angle of the back foot in a low stance?",
      "micah": "25 degrees",
      "fu1": "30 degrees",
      "fu2": "45 degrees",
      "fu3": "15 degrees"
    },
    {
      "grade": "blue",
      "id": "blue11",
      "question": "What is one-step sparring in Korean?",
      "micah": "Ilbo matsogi",
      "fu1": "Ibo matsogi",
      "fu2": "Sambo matsogi",
      "fu3": "Idil matsogi"
    },
    {
      "grade": "blue",
      "id": "blue12",
      "question": "How many movements are there in Joong-gun?",
      "micah": "32",
      "fu1": "38",
      "fu2": "24",
      "fu3": "28"
    },
    {
      "grade": "blue",
      "id": "blue13",
      "question": "In what stance do you start Joong-Gun?",
      "micah": "Moa junbi sogi B",
      "fu1": "Moa junbi sogi A",
      "fu2": "Moa junbi sogi D",
      "fu3": "Moa junbi sogi C"
    },
    {
      "grade": "blue",
      "id": "blue14",
      "question": "Who did Ahn Joong-Gun assasinate?",
      "micah": "Hiro Bumi Ito",
      "fu1": "Yoshihide Suga ",
      "fu2": "Shinzo Abe",
      "fu3": "Lui-Shung"
    },
    {
      "grade": "blue",
      "id": "blue15",
      "question": "What do the number of movements in Joong-gun represent?",
      "micah": "Ahn Joong-Gun's age when he was executed",
      "fu1": "Ahn Joong-Gun's age when he was sent to Lui-Shung prison",
      "fu2": "Ahn Joong-Gun's age when he killed the first Japanese governor-general of Korea",
      "fu3": "Hiro Bumi Ito's age when he was killed"
    },
    {
      "grade": "blue",
      "id": "blue16",
      "question": "What does Bandal son mean?",
      "micah": "Arc hand",
      "fu1": "Hand sword",
      "fu2": "Palm hand",
      "fu3": "Sharp hand"
    },
    {
      "grade": "blue",
      "id": "blue17",
      "question": "What is the first movement in Joong-gun?",
      "micah": "Niunja so sonkal dung kaunde makgi",
      "fu1": "Niunja so sonkal kaunde makgi",
      "fu2": "Gunnen so sonkal kaunde makgi",
      "fu3": "Niunja so sonkal dung nopunde makgi"
    },
    {
      "grade": "blue",
      "id": "blue18",
      "question": "What height is the backfist side strike in Joong-Gun tul",
      "micah": "Eye",
      "fu1": "Head",
      "fu2": "Shoulder",
      "fu3": "Philtrum"
    },
    {
      "grade": "blue",
      "id": "blue19",
      "question": "What height are the yop cha jirugi's perfomed in Joong-Gun tul",
      "micah": "Shoulder",
      "fu1": "Solar plexus",
      "fu2": "Head",
      "fu3": "Eye"
    },
    {
      "grade": "blue",
      "id": "blue20",
      "question": "What height is the palm upward block in the Sonbadak noollo magki?",
      "micah": "Solar plexus",
      "fu1": "Waist",
      "fu2": "Chest",
      "fu3": "Shoulder"
    },
    {
      "grade": "blue",
      "id": "blue21",
      "question": "How heigh should the side front snap kicks be in Joong-Gun tul",
      "micah": "Below the belt",
      "fu1": "Solar plexus",
      "fu2": "Shoulder level",
      "fu3": "Belly button"
    },
    {
      "grade": "blue",
      "id": "blue22",
      "question": "Which foot moved back to close ready stance b at the end of Joong-Gun tul",
      "micah": "Left",
      "fu1": "Right",
      "fu2": "Both",
      "fu3": "None"
    },
    {
      "grade": "blue",
      "id": "blue23",
      "question": "What is the final movement in Joong-Gun?",
      "micah": "Fixed stance U-shape block",
      "fu1": "Close stance right angle-punch",
      "fu2": "Low stance palm reverse pressing block",
      "fu3": "L stance U-shape block"
    },
    {
      "grade": "blue",
      "id": "blue24",
      "question": "How many fast-motion techniques are there in Joong-gun?",
      "micah": "2",
      "fu1": "3",
      "fu2": "4",
      "fu3": "1"
    },
    {
      "grade": "blue",
      "id": "blue25",
      "question": "How many slow-motion techniques are there in Joong-gun?",
      "micah": "3",
      "fu1": "4",
      "fu2": "1",
      "fu3": "2"
    },
    {
      "grade": "blue",
      "id": "blue26",
      "question": "What is U-shape block in Korean?",
      "micah": "Digutja makgi",
      "fu1": "Ollyo makgi",
      "fu2": "Noollo makgi",
      "fu3": "Chookyo makgi"
    },
    {
      "grade": "blue",
      "id": "blue27",
      "question": "What is pressing block in Korean?",
      "micah": "Noollo makgi",
      "fu1": "Digutja makgi",
      "fu2": "Ollyo makgi",
      "fu3": "Chookyo makgi"
    },
    {
      "grade": "blue",
      "id": "blue28",
      "question": "What is upward block in Korean?",
      "micah": "Ollyo makgi",
      "fu1": "Noollo makgi",
      "fu2": "Digutja makgi",
      "fu3": "Chookyo makgi"
    },
    {
      "grade": "blue",
      "id": "blue29",
      "question": "What is upset punch in Korean?",
      "micah": "Dwijibo jirugi",
      "fu1": "Giokja jirugi",
      "fu2": "Sewo jirugi",
      "fu3": "Yopcha jirugi"
    },
    {
      "grade": "blue",
      "id": "blue30",
      "question": "What is angle punch in Korean?",
      "micah": "Giokja jirugi",
      "fu1": "Dwijibo jirugi",
      "fu2": "Sewo jirugi",
      "fu3": "Yopcha jirugi"
    },
    {
      "grade": "red-tag",
      "id": "red-tag1",
      "question": "Toi-Gye is the pen name of which noted scholar?",
      "micah": "Yi Hwang",
      "fu1": "Yi I",
      "fu2": "Toi-Gye",
      "fu3": "Won-Hyo"
    },
    {
      "grade": "red-tag",
      "id": "red-tag2",
      "question": "What was Yi Hwang an authority on?",
      "micah": "Neo-Confucianism",
      "fu1": "Confucianism",
      "fu2": "Buddism",
      "fu3": "Taoism"
    },
    {
      "grade": "red-tag",
      "id": "red-tag3",
      "question": "How many moves in Toi-Gye?",
      "micah": "37",
      "fu1": "36",
      "fu2": "35",
      "fu3": "38"
    },
    {
      "grade": "red-tag",
      "id": "red-tag4",
      "question": "What does Red Belt signify?",
      "micah": "Danger - cautioning the student to exercise control and warning the opponent to stay away",
      "fu1": "Blood - cautioning the student to exercise control unless they hurt themselves and others",
      "fu2": "Anger - cautioning the student to calm down by using self-control",
      "fu3": "Protection - cautioning the student to look out for others"
    },
    {
      "grade": "red-tag",
      "id": "red-tag5",
      "question": "What is the diagramatic symbol of Toi-Gye?",
      "micah": "Scholar",
      "fu1": "Professor",
      "fu2": "Student",
      "fu3": "Preacher"
    },
    {
      "grade": "red-tag",
      "id": "red-tag6",
      "question": "What does Yopdwi Taerigi mean?",
      "micah": "Side-back stike",
      "fu1": "Backwards strike",
      "fu2": "Side strike",
      "fu3": "Diagonal strike"
    },
    {
      "grade": "red-tag",
      "id": "red-tag7",
      "question": "What does Doo Palmok Magki mean?",
      "micah": "Double forearm block",
      "fu1": "Twin forearm block",
      "fu2": "Supported forearm block",
      "fu3": "Single forearm block"
    },
    {
      "grade": "red-tag",
      "id": "red-tag8",
      "question": "What are the 1st and 4th movements of Toi-Gye tul?",
      "micah": "Niunja so an palmok kaunde makgi",
      "fu1": "Niunja so bakat palmok kaunde makgi",
      "fu2": "Annun so an palmok kaunde makgi",
      "fu3": "Gunnun so an palmok kaunde makgi"
    },
    {
      "grade": "red-tag",
      "id": "red-tag9",
      "question": "What are the 2nd and 5th movements of Toi-Gye tul?",
      "micah": "Gunnun so najunde dwijibun sonkut  tulgi",
      "fu1": "Niunja so najunde dwijibun sonkut tulgi",
      "fu2": "Gunnun so najunde dwijibo  jirugi",
      "fu3": "Niunja so najunde dwijibo jirugi"
    },
    {
      "grade": "red-tag",
      "id": "red-tag10",
      "question": "How many low side front snap kicks are there in Toi-Gye tul?",
      "micah": "2",
      "fu1": "3",
      "fu2": "4",
      "fu3": "1"
    },
    {
      "grade": "red-tag",
      "id": "red-tag11",
      "question": "How many middle front kicks are there in Toi-Gye tul?",
      "micah": "1",
      "fu1": "2",
      "fu2": "none",
      "fu3": "3"
    },
    {
      "grade": "red-tag",
      "id": "red-tag12",
      "question": "Which foot moves back to Moa junbi sogi B at the end of Toi-Gye tul?",
      "micah": "Left",
      "fu1": "Right",
      "fu2": "Both",
      "fu3": "None"
    },
    {
      "grade": "red-tag",
      "id": "red-tag13",
      "question": "What is Ilbo Matsogi?",
      "micah": "One-step sparring",
      "fu1": "Two-step sparring",
      "fu2": "Two v one sparring",
      "fu3": "Semi-free sparring"
    },
    {
      "grade": "red-tag",
      "id": "red-tag14",
      "question": "What does Neurin Dongjak mean?",
      "micah": "Slow motion",
      "fu1": "Fast motion",
      "fu2": "Connected motion",
      "fu3": "Continuous motion"
    },
    {
      "grade": "red-tag",
      "id": "red-tag15",
      "question": "What is free sparring in Korean?",
      "micah": "Jayu matsogi",
      "fu1": "Ban-jayu matsogi",
      "fu2": "Idil matsogi",
      "fu3": "Yaksok matsogi"
    },
    {
      "grade": "red-tag",
      "id": "red-tag16",
      "question": "What is the significance of 37?",
      "micah": "37 represents the degrees latitude where Yi Hwang was born",
      "fu1": "37 represents the degrees longitude where Yi Hwang was born",
      "fu2": "37 represents the age of Yi Hwang when he died",
      "fu3": "There is no significance of 37"
    },
    {
      "grade": "red-tag",
      "id": "red-tag17",
      "question": "How wide is a sitting stance and where is it measured from?",
      "micah": "One and a half shoulder widths, from the inside of the feet",
      "fu1": "One and a half shoulder widths, from the outside of the feet",
      "fu2": "Two shoulder widths, from the inside of the feet",
      "fu3": "Two shoulder widths, from the outside of the feet"
    },
    {
      "grade": "red-tag",
      "id": "red-tag18",
      "question": "What does San Makgi mean in Korean?",
      "micah": "W-shaped block",
      "fu1": "V-shaped block",
      "fu2": "Y-shaped block",
      "fu3": "X-shaped block"
    },
    {
      "grade": "red-tag",
      "id": "red-tag19",
      "question": "What is circular block in Korean?",
      "micah": "Dollimyo makgi",
      "fu1": "Dolmio makgi",
      "fu2": "Dollyo makgi",
      "fu3": "Dwijibo makgi"
    },
    {
      "grade": "red-tag",
      "id": "red-tag20",
      "question": "How many Sonkal Daebi Magki are there in Toi Gye?",
      "micah": "4",
      "fu1": "8",
      "fu2": "2",
      "fu3": "6"
    },
    {
      "grade": "red-tag",
      "id": "red-tag21",
      "question": "How is a side-front snap kick performed differently to a front snap kick?",
      "micah": "Side-front snap kick standing foot is pointed to the side. Front snap kick standing foot is pointing forwards.",
      "fu1": "Side-front snap kick standing foot is pointed forwards. Front snap kick standing foot is pointing to the side.",
      "fu2": "Side-front snap kick standing foot is pointed to the back. Front snap kick standing foot is pointing sideways.",
      "fu3": "Side-front snap kick standing foot is pointed out to the forwards. Front snap kick standing foot is pointing backwards."
    },
    {
      "grade": "red-tag",
      "id": "red-tag22",
      "question": "What is downward kick in Korean?",
      "micah": "Naeryo chagi",
      "fu1": "Ollyo chagi",
      "fu2": "Cha momchugi",
      "fu3": "Neurin chagi"
    },
    {
      "grade": "red-tag",
      "id": "red-tag23",
      "question": "What is the first movement in Toi Gye?",
      "micah": "Niunja so an palmok kaunde makgi",
      "fu1": "Moa so orun dung joomuk\nyopdwi taerigi",
      "fu2": "Gunnun so dwijibun sonkut najunde tulgi",
      "fu3": "Gunnun so kyocha joomuk\nnoollo makgi"
    },
    {
      "grade": "red-tag",
      "id": "red-tag24",
      "question": "What is the second movement in Toi Gye?",
      "micah": "Gunnun so dwijibun sonkut najunde tulgi",
      "fu1": "Niunja so an palmok kaunde makgi",
      "fu2": "Moa so orun dung joomuk\nyopdwi taerigi",
      "fu3": "Gunnun so kyocha joomuk\nnoollo makgi"
    },
    {
      "grade": "red-tag",
      "id": "red-tag25",
      "question": "What is the third movement in Toi Gye?",
      "micah": "Moa so orun dung joomuk\nyopdwi taerigi",
      "fu1": "Gunnun so dwijibun sonkut najunde tulgi",
      "fu2": "Niunja so an palmok kaunde makgi",
      "fu3": "Gunnun so kyocha joomuk\nnoollo makgi"
    },
    {
      "grade": "red-tag",
      "id": "red-tag26",
      "question": "How many technques in Toi Gye are in sitting stance?",
      "micah": "6",
      "fu1": "7",
      "fu2": "8",
      "fu3": "9"
    },
    {
      "grade": "red-tag",
      "id": "red-tag27",
      "question": "What ready stance do you start Toi Gye in?",
      "micah": "Moa junbi sogi B",
      "fu1": "Moa junbi sogi A",
      "fu2": "Moa junbi sogi C",
      "fu3": "Moa junbi sogi D"
    },
    {
      "grade": "red-tag",
      "id": "red-tag28",
      "question": "What does Gurunun dongjak mean?",
      "micah": "Stamping motion",
      "fu1": "Slow motion",
      "fu2": "Shifting motion",
      "fu3": "Sliding motion"
    },
    {
      "grade": "red-tag",
      "id": "red-tag29",
      "question": "What does Moorup ollyo chagi mean?",
      "micah": "Knee upward kick",
      "fu1": "Knee rising kick",
      "fu2": "Knee snap kick",
      "fu3": "Upset turning kick"
    },
    {
      "grade": "red-tag",
      "id": "red-tag30",
      "question": "How many elbow techniques are there in Toi Gye?",
      "micah": "1",
      "fu1": "0",
      "fu2": "2",
      "fu3": "3"
    },
    {
      "grade": "red",
      "id": "red1",
      "question": "What is idil matsogi?",
      "micah": "Two v one sparring",
      "fu1": "Foot sparring",
      "fu2": "Semi-free sparring",
      "fu3": "Free sparring"
    },
    {
      "grade": "red",
      "id": "red2",
      "question": "How long should a slide be?",
      "micah": "One shoulder width",
      "fu1": "Two shoulder width",
      "fu2": "One and a half shoulder widths",
      "fu3": "One and a half metres"
    },
    {
      "grade": "red",
      "id": "red3",
      "question": "What is the weigh distribution of a soojik sogi?",
      "micah": "60/40",
      "fu1": "50/50",
      "fu2": "70/30",
      "fu3": "90/10"
    },
    {
      "grade": "red",
      "id": "red4",
      "question": "What is \"Integrity\" in korean?",
      "micah": "Yom Chi",
      "fu1": "Ye Ui",
      "fu2": "In Nae",
      "fu3": "Guk Gi"
    },
    {
      "grade": "red",
      "id": "red5",
      "question": "What distance should the fist be to your umbilicus in Moa jumbi sogi b?",
      "micah": "20cm",
      "fu1": "10cm",
      "fu2": "30cm",
      "fu3": "15cm"
    },
    {
      "grade": "red",
      "id": "red6",
      "question": "What does Mikulgi mean?",
      "micah": "Sliding",
      "fu1": "Jumping",
      "fu2": "Shifting",
      "fu3": "Shaking"
    },
    {
      "grade": "red",
      "id": "red7",
      "question": "How many moves are there in Hwa-Rang?",
      "micah": "29",
      "fu1": "19",
      "fu2": "39",
      "fu3": "36"
    },
    {
      "grade": "red",
      "id": "red8",
      "question": "When did the Hwa-Rang Youth Group originate?",
      "micah": "Early 7th century (AD)",
      "fu1": "Early 6th century (AD)",
      "fu2": "Early 8th century (AD)",
      "fu3": "Early 5th century (AD)"
    },
    {
      "grade": "red",
      "id": "red9",
      "question": "What do the 29 movements in Hwa-Rang refer to?",
      "micah": "The Hwa-Rang Youth Group was the 29th infantry division",
      "fu1": "The maximum age members of the Hwa-Rang youth club could be",
      "fu2": "The Hwa-Rang Youth Club was founded on 29 degrees latitude",
      "fu3": "The 29 members of the Hwa-Rang Youth Group (the 30th member was Taekwon-Do itself)"
    },
    {
      "grade": "red",
      "id": "red10",
      "question": "Where do your feet point when doing a vertical stance?",
      "micah": "Both feet point 15° inward",
      "fu1": "One foot points 15° inward, the other points 10° inward",
      "fu2": "One foot points 10° inward, the other points 90° outwards",
      "fu3": "Both feet point 25° inward"
    },
    {
      "grade": "red",
      "id": "red11",
      "question": "What height are the turning kicks in Hwa-Rang?",
      "micah": "High",
      "fu1": "Low",
      "fu2": "Mid-section",
      "fu3": "Shoulder-height"
    },
    {
      "grade": "red",
      "id": "red12",
      "question": "What does Pyun joomuk mean?",
      "micah": "Open fist",
      "fu1": "Closed fist",
      "fu2": "Double fist",
      "fu3": "Single fist"
    },
    {
      "grade": "red",
      "id": "red13",
      "question": "What is the meaning of the colour black?",
      "micah": "Black is opposite to white, therefore, signifying the maturity and proficiency in Taekwon-Do. It also indicates the wearer’s imperviousness to darkness and fear.",
      "fu1": "Black signifies danger, cautioning the student to exercise control and warning the opponent to stay away.",
      "fu2": "Black signifies the lack of innocence compared to the beginner. It also represents restraint and sadness as the wearer must follow a lot of rules.",
      "fu3": "Black belt signifies messiness as your white belt should now be covered in dirt from all the training."
    },
    {
      "grade": "red",
      "id": "red14",
      "question": "What does Miro makgi mean?",
      "micah": "Pushing block",
      "fu1": "Pressing block",
      "fu2": "Crushing block",
      "fu3": "Mirrored block"
    },
    {
      "grade": "red",
      "id": "red15",
      "question": "What is the pattern diagram for Hwa-Rang?",
      "micah": "An ɪ shape",
      "fu1": "A Z shape",
      "fu2": "The Scholar",
      "fu3": "The Admiral"
    },
    {
      "grade": "red",
      "id": "red16",
      "question": "What does Waebal sogi mean?",
      "micah": "One-legged stance",
      "fu1": "Vertical stance",
      "fu2": "Wide fixed stance",
      "fu3": "Side front stance"
    },
    {
      "grade": "red",
      "id": "red17",
      "question": "In what motion are the Dollyo chagi performed in Hwa-Rang?",
      "micah": "Fast",
      "fu1": "Connected",
      "fu2": "Continuous",
      "fu3": "Normal"
    },
    {
      "grade": "red",
      "id": "red18",
      "question": "What is the first movement in Hwa-Rang?",
      "micah": "Annun so sonbadak kaunde yobap miro makgi",
      "fu1": "Niunja so sang palmok makgi",
      "fu2": "Annun so joomuk kaunde ap jirugi",
      "fu3": "Gojung so kaunde yop jirugi"
    },
    {
      "grade": "red",
      "id": "red19",
      "question": "What is the second movement in Hwa-Rang?",
      "micah": "Annun so ap joomuk kaunde jirugi",
      "fu1": "Annun so sonbadak kaunde yobap miro makgi",
      "fu2": "Niunja so sang palmok makgi",
      "fu3": "Gojung so kaunde yop jirugi"
    },
    {
      "grade": "red",
      "id": "red20",
      "question": "What is the fourth movement in Hwa-Rang?",
      "micah": "Niunja so sang palmok makgi",
      "fu1": "Annun so joomuk kaunde ap jirugi",
      "fu2": "Annun so sonbadak kaunde yobap miro makgi",
      "fu3": "Gojung so kaunde yop jirugi"
    },
    {
      "grade": "red",
      "id": "red21",
      "question": "How many sliding techniques are there in Hwa-Rang?",
      "micah": "2",
      "fu1": "1",
      "fu2": "3",
      "fu3": "0"
    },
    {
      "grade": "red",
      "id": "red22",
      "question": "What does Ollyo jirugi mean?",
      "micah": "Upward punch",
      "fu1": "Downward punch",
      "fu2": "Falling punch",
      "fu3": "Descending punch"
    },
    {
      "grade": "red",
      "id": "red23",
      "question": "What does Naeryo taerigi mean?",
      "micah": "Downward strike",
      "fu1": "Upward strike",
      "fu2": "Falling strike",
      "fu3": "Rising strike"
    },
    {
      "grade": "red",
      "id": "red24",
      "question": "Translate this: Flying",
      "micah": "Twimyo",
      "fu1": "Twiyo",
      "fu2": "Twiggi",
      "fu3": "Twigyo"
    },
    {
      "grade": "red",
      "id": "red25",
      "question": "Translate this: Jumping",
      "micah": "Twiggi",
      "fu1": "Twimyo",
      "fu2": "Twiyo",
      "fu3": "Twigyo"
    },
    {
      "grade": "red",
      "id": "red26",
      "question": "Translate this: Mid-air",
      "micah": "Twiyo",
      "fu1": "Twiggi",
      "fu2": "Twimyo",
      "fu3": "Twigyo"
    },
    {
      "grade": "red",
      "id": "red27",
      "question": "Aside from Hwa-Rang, which other colour belt pattern do you do a X-fist pressing block in?",
      "micah": "Toi Gye",
      "fu1": "Joong Gun",
      "fu2": "Yul-Gok",
      "fu3": "Choong Moo"
    },
    {
      "grade": "red",
      "id": "red28",
      "question": "At the end of Hwa-Rang, which foot moves when you return to ready stance?",
      "micah": "Right",
      "fu1": "Left",
      "fu2": "Both",
      "fu3": "Neither"
    },
    {
      "grade": "red",
      "id": "red29",
      "question": "With which part of the foot do you perform a Golcho chagi?",
      "micah": "Yop baldung",
      "fu1": "Dwitchook",
      "fu2": "Balkal dung",
      "fu3": "Balkal dung"
    },
    {
      "grade": "red",
      "id": "red30",
      "question": "With which part of the foot do you perform a Bandae Goro chagi?",
      "micah": "Dwitchook",
      "fu1": "Yop baldung",
      "fu2": "Dwit kumchi",
      "fu3": "Dwit kumchi"
    },
    {
      "grade": "black-tag",
      "id": "black-tag1",
      "question": "What is the meaning of the colour black?",
      "micah": "Black is opposite to white, therefore, signifying the maturity and proficiency in Taekwon-Do. It also indicates the wearer’s imperviousness to darkness and fear.",
      "fu1": "Black signifies danger, cautioning the student to exercise control and warning the opponent to stay away.",
      "fu2": "Black signifies the lack of innocence compared to the beginner. It also represents restraint and sadness as the wearer must follow a lot of rules.",
      "fu3": "Black belt signifies messiness as your white belt should now be covered in dirt from all the training."
    },
    {
      "grade": "black-tag",
      "id": "black-tag2",
      "question": "Who is Choong-Moo named after?",
      "micah": "The great Admiral Yi Soon-Sin",
      "fu1": "The great Architect Yi Soon-Sin",
      "fu2": "The great Ambassador Yi Soon-Sin",
      "fu3": "The great Assasin Yi Soon-Sin"
    },
    {
      "grade": "black-tag",
      "id": "black-tag3",
      "question": "What is the significance of 1592?",
      "micah": "It was the year the great Admiral Yi Soon-Sin invented the first amoured battleship",
      "fu1": "It was the year the great Admiral Yi Soon-Sin was born",
      "fu2": "It was the year Buddism was introduced to the Silla dynasty by the great Admiral Yi Soon-Sin",
      "fu3": "It was the year the great Admiral Yi Soon-Sin invented the submarine"
    },
    {
      "grade": "black-tag",
      "id": "black-tag4",
      "question": "What is the difference between Twimyo and Twiggi?",
      "micah": "Twimyo = Flying\nTwiggi = Jumping",
      "fu1": "Twimyo = Jumping\nTwiggi = Flying",
      "fu2": "There is no difference",
      "fu3": "Twimyo = Twin\nTwiggi = Double"
    },
    {
      "grade": "black-tag",
      "id": "black-tag5",
      "question": "What does Momchau Makgi mean in Korean?",
      "micah": "Checking block",
      "fu1": "Catching block",
      "fu2": "Crossing block",
      "fu3": "Pressing block"
    },
    {
      "grade": "black-tag",
      "id": "black-tag6",
      "question": "What height is the Doo Palmok Magki performed in Choong Moo?",
      "micah": "High (fist at at eye level)",
      "fu1": "High (top of palm at eye level)",
      "fu2": "Middle (fist at shoulder level)",
      "fu3": "Middle (top of palm at shoulder level)"
    },
    {
      "grade": "black-tag",
      "id": "black-tag7",
      "question": "What is the height of the second turning kick in Choong Moo?",
      "micah": "Middle (shoulder level)",
      "fu1": "High (head level)",
      "fu2": "Middle (solar plexus level)",
      "fu3": "High (shoulder level)"
    },
    {
      "grade": "black-tag",
      "id": "black-tag8",
      "question": "What is the height of the first turning kick in Choong Moo?",
      "micah": "High (head level)",
      "fu1": "Middle (solar plexus level)",
      "fu2": "High (shoulder level)",
      "fu3": "Middle (shoulder level)"
    },
    {
      "grade": "black-tag",
      "id": "black-tag9",
      "question": "What is a Bituro Chagi?",
      "micah": "Twisting kick",
      "fu1": "Split kick",
      "fu2": "Checking kick",
      "fu3": "Fake kick"
    },
    {
      "grade": "black-tag",
      "id": "black-tag10",
      "question": "How many movements are there in Choong Moo?",
      "micah": "30",
      "fu1": "31",
      "fu2": "32",
      "fu3": "33"
    },
    {
      "grade": "black-tag",
      "id": "black-tag11",
      "question": "What are the heights of the side kicks in Choong Moo?",
      "micah": "Middle (shoulder level)",
      "fu1": "High (head level)",
      "fu2": "Low (waist level)",
      "fu3": "Middle (solar plexus level)"
    },
    {
      "grade": "black-tag",
      "id": "black-tag12",
      "question": "How many different blocks are in Choong Moo?",
      "micah": "11",
      "fu1": "10",
      "fu2": "12",
      "fu3": "9"
    },
    {
      "grade": "black-tag",
      "id": "black-tag13",
      "question": "How many types of motions are there in Choong Moo? And what are they?",
      "micah": "2 (Normal and Fast)",
      "fu1": "2 (Normal and Continuous)",
      "fu2": "3 (Normal, Fast and Continuous)",
      "fu3": "3 (Normal, Continuous and Connecting)"
    },
    {
      "grade": "black-tag",
      "id": "black-tag14",
      "question": "How many colour belt patterns start the first move with the right foot?",
      "micah": "0",
      "fu1": "1",
      "fu2": "2",
      "fu3": "3"
    },
    {
      "grade": "black-tag",
      "id": "black-tag15",
      "question": "How many black belt grades are there?",
      "micah": "9",
      "fu1": "8",
      "fu2": "10",
      "fu3": "11"
    },
    {
      "grade": "black-tag",
      "id": "black-tag16",
      "question": "When blocking a punch or knifehand strike with a knifehand block, which part of the opponents hand or arm do you make contact with?",
      "micah": "The forearm",
      "fu1": "The knifehand",
      "fu2": "The elbow",
      "fu3": "The fingers"
    },
    {
      "grade": "black-tag",
      "id": "black-tag17",
      "question": "How many patterns are there in total?",
      "micah": "24",
      "fu1": "15",
      "fu2": "9",
      "fu3": "27"
    },
    {
      "grade": "black-tag",
      "id": "black-tag18",
      "question": "What does Saju-Tulgi mean?",
      "micah": "Four-directional thrust",
      "fu1": "Four-directional block",
      "fu2": "Four-directional punch",
      "fu3": "Four-directional strike"
    },
    {
      "grade": "black-tag",
      "id": "black-tag19",
      "question": "How should you refer to a 1st, 2nd or 3rd degree black belt?",
      "micah": "Boo-sabum-nim",
      "fu1": "Sabum-nim",
      "fu2": "Sahyun-nim",
      "fu3": "Saseong-nim"
    },
    {
      "grade": "black-tag",
      "id": "black-tag20",
      "question": "What is the significance of the black trim around a black belt dobok?",
      "micah": "Black trim is symbolic of the royal family and members of aristocratic houses during the Koguryo, Baekje and Silla dynasties",
      "fu1": "It doesn't have any significance.",
      "fu2": "Black trim represents maturity and proficiency in Taekwon-Do and represents the wearer's imperviousness to darkness and fear.",
      "fu3": "It was only added to go with the black belt."
    },
    {
      "grade": "black-tag",
      "id": "black-tag21",
      "question": "What is a Kobukson?",
      "micah": "An armoured battleship",
      "fu1": "A heavy cannon",
      "fu2": "A long wooden staff",
      "fu3": "A healthy drink"
    },
    {
      "grade": "black-tag",
      "id": "black-tag22",
      "question": "Why does Choong-Moo end in a left-hand attack?",
      "micah": "To symbolise Admiral Yi Soon-Sin's regrettable death",
      "fu1": "To symbolise the betrayal of Admiral Yi-Soon-Sin",
      "fu2": "Because the pattern starts with a right-hand attack",
      "fu3": "Because the pattern has an odd number of kicks"
    },
    {
      "grade": "black-tag",
      "id": "black-tag23",
      "question": "What does Kyocha sonkal mean?",
      "micah": "X-knife-hand",
      "fu1": "X-knife-block",
      "fu2": "X-fist-hand",
      "fu3": "X-block-hand"
    },
    {
      "grade": "black-tag",
      "id": "black-tag24",
      "question": "In what stance do you do Digutja makgi in Choong-Moo?",
      "micah": "Fixed stance",
      "fu1": "L-stance",
      "fu2": "Walking stance",
      "fu3": "Sitting stance"
    },
    {
      "grade": "black-tag",
      "id": "black-tag25",
      "question": "In which direction do you jump in Choong-Moo (technique 19)",
      "micah": "360º anti-clockwise",
      "fu1": "180º anti-clockwise",
      "fu2": "360º clockwise",
      "fu3": "180º clockwise"
    },
    {
      "grade": "black-tag",
      "id": "black-tag26",
      "question": "What does Ap taerigi mean?",
      "micah": "Front strike",
      "fu1": "Back strike",
      "fu2": "Side strike",
      "fu3": "Left strike"
    },
    {
      "grade": "black-tag",
      "id": "black-tag27",
      "question": "What does Dwitcha jirugi mean?",
      "micah": "Back-piercing kick",
      "fu1": "Back kick",
      "fu2": "Reverse turning kick",
      "fu3": "Backheel kick"
    },
    {
      "grade": "black-tag",
      "id": "black-tag28",
      "question": "What does Kaunde ap makgi mean?",
      "micah": "Middle front block",
      "fu1": "Rising front block",
      "fu2": "Middle rising block",
      "fu3": "Side front block"
    },
    {
      "grade": "black-tag",
      "id": "black-tag29",
      "question": "What does Sang sonbadak mean?",
      "micah": "Twin palm",
      "fu1": "Double palm",
      "fu2": "Twin pressing",
      "fu3": "Double pressing"
    },
    {
      "grade": "black-tag",
      "id": "black-tag30",
      "question": "Add up all the moves in all colour belt patterns. How many moves?",
      "micah": "258",
      "fu1": "312",
      "fu2": "276",
      "fu3": "290"
    }
 ];
