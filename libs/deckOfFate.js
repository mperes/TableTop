const DECK_OF_FATE = [
  new Card(1, SUIT_ARROW, 1, 'Tass', 'Careless', 'Innovative', CARD_WHITE, [0,0], this._cardWidth, true, this._cardDblclickCallback),
  new Card(2, SUIT_ARROW, 2, 'Tanis', 'Meticulous', 'Resourceful', CARD_WHITE, [0,1], this._cardWidth, true, this._cardDblclickCallback),
  new Card(3, SUIT_ARROW, 3, 'Theros', 'Scrupulous', 'Artistic', CARD_WHITE, [0,2], this._cardWidth, true, this._cardDblclickCallback),
  new Card(4, SUIT_ARROW, 4, 'Blister', 'Cautious', 'Inventive', CARD_RED, [0,3], this._cardWidth, true, this._cardDblclickCallback),
  new Card(5, SUIT_ARROW, 5, 'Kith-Kanan', 'Conscientious', 'Clever', CARD_RED, [0,4], this._cardWidth, true, this._cardDblclickCallback),
  new Card(6, SUIT_ARROW, 6, 'Porthios', 'Distant', 'Cunning', CARD_RED, [0,5], this._cardWidth, true, this._cardDblclickCallback),
  new Card(7, SUIT_ARROW, 7, 'Otik', 'Fastidious', 'Conventional', CARD_BLACK, [0,6], this._cardWidth, true, this._cardDblclickCallback),
  new Card(8, SUIT_ARROW, 8, 'Gildentongue', 'Careful', 'Unimaginative', CARD_BLACK, [0,7], this._cardWidth, true, this._cardDblclickCallback),
  new Card(9, SUIT_ARROW, 9, 'Bakaris', 'Heedless', 'Dogmatic', CARD_BLACK, [0,8], this._cardWidth, true, this._cardDblclickCallback),
  new Card(10, SUIT_CROWN, 1, 'Gunthar', 'Authoritative', 'Just', CARD_WHITE, [1,0], this._cardWidth, true, this._cardDblclickCallback),
  new Card(11, SUIT_CROWN, 2, 'Laurana', 'Inspiring', 'Fair', CARD_WHITE, [1,1], this._cardWidth, true, this._cardDblclickCallback),
  new Card(12, SUIT_CROWN, 3, 'Moonsong', 'Independent', 'Reasonable', CARD_WHITE, [1,2], this._cardWidth, true, this._cardDblclickCallback),
  new Card(13, SUIT_CROWN, 4, 'Severus', 'Charismatic', 'Demanding', CARD_RED, [1,3], this._cardWidth, true, this._cardDblclickCallback),
  new Card(14, SUIT_CROWN, 5, 'Belladonna', 'Lawless', 'Tough', CARD_RED, [1,4], this._cardWidth, true, this._cardDblclickCallback),
  new Card(15, SUIT_CROWN, 6, 'Mirielle', 'Imperious', 'Commanding', CARD_RED, [1,5], this._cardWidth, true, this._cardDblclickCallback),
  new Card(16, SUIT_CROWN, 7, 'Seeker Hederick', 'Egotistical', 'Despotic', CARD_BLACK, [1,6], this._cardWidth, true, this._cardDblclickCallback),
  new Card(17, SUIT_CROWN, 8, 'Fewmaster Toede', 'Inspiring', 'Tyranical', CARD_BLACK, [1,7], this._cardWidth, true, this._cardDblclickCallback),
  new Card(18, SUIT_CROWN, 9, 'Verminaard', 'Domineering', 'Dictatorial', CARD_BLACK, [1,8], this._cardWidth, true, this._cardDblclickCallback),
  new Card(19, SUIT_DRAGON, 1, 'Solomirathnius', 'Eccentric', '', CARD_BLACK, [2,0], this._cardWidth, true, this._cardDblclickCallback),
  new Card(20, SUIT_DRAGON, 2, 'Suhnrysanti', 'Hedonistic', '', CARD_BLACK, [2,1], this._cardWidth, true, this._cardDblclickCallback),
  new Card(21, SUIT_DRAGON, 3, 'Shatraklangg', 'Cantankerous', '', CARD_BLACK, [2,2], this._cardWidth, true, this._cardDblclickCallback),
  new Card(22, SUIT_DRAGON, 4, 'Teranyex', 'Egomaniacal', '', CARD_BLACK, [2,3], this._cardWidth, true, this._cardDblclickCallback),
  new Card(23, SUIT_DRAGON, 5, 'Iyesta', 'Vain', '', CARD_BLACK, [2,4], this._cardWidth, true, this._cardDblclickCallback),
  new Card(24, SUIT_DRAGON, 6, 'Onysablet', 'Treacherous', '', CARD_BLACK, [2,5], this._cardWidth, true, this._cardDblclickCallback),
  new Card(25, SUIT_DRAGON, 7, 'Khellendros', 'Wrathful', '', CARD_BLACK, [2,6], this._cardWidth, true, this._cardDblclickCallback),
  new Card(26, SUIT_DRAGON, 8, 'Beryllinthranox', 'Malicious', '', CARD_BLACK, [2,7], this._cardWidth, true, this._cardDblclickCallback),
  new Card(27, SUIT_DRAGON, 9, 'Gellidus', 'Sadistic', '', CARD_BLACK, [2,8], this._cardWidth, true, this._cardDblclickCallback),
  new Card(28, SUIT_DRAGON, 10, 'Malystryx', 'Megalomaniac', '', CARD_BLACK, [2,9], this._cardWidth, true, this._cardDblclickCallback),
  new Card(29, SUIT_HEART, 1, 'Crysania', 'Calm', 'Merciful', CARD_WHITE, [3,0], this._cardWidth, true, this._cardDblclickCallback),
  new Card(30, SUIT_HEART, 2, 'Jasper', 'Honest', 'Kind', CARD_WHITE, [3,1], this._cardWidth, true, this._cardDblclickCallback),
  new Card(31, SUIT_HEART, 3, 'Goldmoon', 'Sensible', 'Compassionate', CARD_WHITE, [3,2], this._cardWidth, true, this._cardDblclickCallback),
  new Card(32, SUIT_HEART, 4, 'Vinas', 'Honorable', 'Grandiose', CARD_RED, [3,3], this._cardWidth, true, this._cardDblclickCallback),
  new Card(33, SUIT_HEART, 5, 'Lorac', 'Realistic', 'Self-Centered', CARD_RED, [3,4], this._cardWidth, true, this._cardDblclickCallback),
  new Card(34, SUIT_HEART, 6, 'Gargath', 'Deceitful', 'Uncaring', CARD_RED, [3,5], this._cardWidth, true, this._cardDblclickCallback),
  new Card(35, SUIT_HEART, 7, 'Lord Soth', 'Pragmatic', 'Murderous', CARD_BLACK, [3,6], this._cardWidth, true, this._cardDblclickCallback),
  new Card(36, SUIT_HEART, 8, 'Ariakan', 'Forthright', 'Cruel', CARD_BLACK, [3,7], this._cardWidth, true, this._cardDblclickCallback),
  new Card(37, SUIT_HEART, 9, 'Kingpriest', 'Dishonest', 'Immoral', CARD_BLACK, [3,8], this._cardWidth, true, this._cardDblclickCallback),
  new Card(38, SUIT_HELM, 1, 'Caramon', 'Thorough', 'Brave', CARD_WHITE, [4,0], this._cardWidth, true, this._cardDblclickCallback),
  new Card(39, SUIT_HELM, 2, 'Flint', 'Resolute', 'Stouthearted', CARD_WHITE, [4,1], this._cardWidth, true, this._cardDblclickCallback),
  new Card(40, SUIT_HELM, 3, 'Kharas', 'Decisive', 'Corageous', CARD_WHITE, [4,2], this._cardWidth, true, this._cardDblclickCallback),
  new Card(41, SUIT_HELM, 4, 'Derkin', 'Cautious', 'Resolute', CARD_RED, [4,3], this._cardWidth, true, this._cardDblclickCallback),
  new Card(42, SUIT_HELM, 5, 'Dougan', 'Purposeful', 'Careful', CARD_RED, [4,4], this._cardWidth, true, this._cardDblclickCallback),
  new Card(43, SUIT_HELM, 6, 'Silver Claw', 'Determined', 'Cicumspect', CARD_RED, [4,5], this._cardWidth, true, this._cardDblclickCallback),
  new Card(44, SUIT_HELM, 7, 'Rennard', 'Decisive', 'Cowaraly', CARD_BLACK, [4,6], this._cardWidth, true, this._cardDblclickCallback),
  new Card(45, SUIT_HELM, 8, 'Bertrem', 'Dedicated', 'Timid', CARD_BLACK, [4,7], this._cardWidth, true, this._cardDblclickCallback),
  new Card(46, SUIT_HELM, 9, 'Bupu', 'Groveling', 'Afraid', CARD_BLACK, [4,8], this._cardWidth, true, this._cardDblclickCallback),
  new Card(47, SUIT_MOON, 1, 'Palin', 'Impulsive', 'Inquisitive', CARD_WHITE, [5,0], this._cardWidth, true, this._cardDblclickCallback),
  new Card(48, SUIT_MOON, 2, 'Par-Salian', 'Thoughful', 'Curious', CARD_WHITE, [5,1], this._cardWidth, true, this._cardDblclickCallback),
  new Card(49, SUIT_MOON, 3, 'Fizban', 'Absent-Minded', 'Nosy', CARD_WHITE, [5,2], this._cardWidth, true, this._cardDblclickCallback),
  new Card(50, SUIT_MOON, 4, 'Justarius', 'Thoughful', 'Contemplative', CARD_RED, [5,3], this._cardWidth, true, this._cardDblclickCallback),
  new Card(51, SUIT_MOON, 5, 'Shadow Sorcerer', 'Enigmatic', 'Introspective', CARD_RED, [5,4], this._cardWidth, true, this._cardDblclickCallback),
  new Card(52, SUIT_MOON, 6, 'Magius', 'Rash', 'Crafty', CARD_RED, [5,5], this._cardWidth, true, this._cardDblclickCallback),
  new Card(53, SUIT_MOON, 7, 'Fistandantilus', 'Mysterious', 'Plotting', CARD_BLACK, [5,6], this._cardWidth, true, this._cardDblclickCallback),
  new Card(54, SUIT_MOON, 8, 'Dalamar', 'Thoughful', 'Conniving', CARD_BLACK, [5,7], this._cardWidth, true, this._cardDblclickCallback),
  new Card(55, SUIT_MOON, 9, 'Raistlin', 'Obsessive', 'Scheming', CARD_BLACK, [5,8], this._cardWidth, true, this._cardDblclickCallback),
  new Card(56, SUIT_ORB, 1, 'Alhana', 'Reserved', 'Insightful', CARD_WHITE, [6,0], this._cardWidth, true, this._cardDblclickCallback),
  new Card(57, SUIT_ORB, 2, 'Gilthas', 'Serious', 'Open-Minded', CARD_WHITE, [6,1], this._cardWidth, true, this._cardDblclickCallback),
  new Card(58, SUIT_ORB, 3, 'Sara', 'Toughful', 'Insightful', CARD_WHITE, [6,2], this._cardWidth, true, this._cardDblclickCallback),
  new Card(59, SUIT_ORB, 4, 'Astinus', 'Studious', 'Methodcal', CARD_RED, [6,3], this._cardWidth, true, this._cardDblclickCallback),
  new Card(60, SUIT_ORB, 5, 'Riverwind', 'Deliberate', 'Vigilant', CARD_RED, [6,4], this._cardWidth, true, this._cardDblclickCallback),
  new Card(61, SUIT_ORB, 6, 'Groller', 'Simple', 'Observant', CARD_RED, [6,5], this._cardWidth, true, this._cardDblclickCallback),
  new Card(62, SUIT_ORB, 7, 'Ackal', 'Shrewd', 'Bigoted', CARD_BLACK, [6,6], this._cardWidth, true, this._cardDblclickCallback),
  new Card(63, SUIT_ORB, 8, 'Verash', 'Studious', 'Opinionated', CARD_BLACK, [6,7], this._cardWidth, true, this._cardDblclickCallback),
  new Card(64, SUIT_ORB, 9, 'Highbulp Phudge', 'Lazy', 'Prejudiced', CARD_BLACK, [6,8], this._cardWidth, true, this._cardDblclickCallback),
  new Card(65, SUIT_SHIELD, 1, 'Tika', 'Nosy', 'Opinionated', CARD_WHITE, [7,0], this._cardWidth, true, this._cardDblclickCallback),
  new Card(66, SUIT_SHIELD, 2, 'Usha', 'Gregarious', 'Optimistic', CARD_WHITE, [7,1], this._cardWidth, true, this._cardDblclickCallback),
  new Card(67, SUIT_SHIELD, 3, 'Linsha', 'Tight-Lipped', 'Confident', CARD_WHITE, [7,2], this._cardWidth, true, this._cardDblclickCallback),
  new Card(68, SUIT_SHIELD, 4, 'Gilthanas', 'Capable', 'Stubborn', CARD_RED, [7,3], this._cardWidth, true, this._cardDblclickCallback),
  new Card(69, SUIT_SHIELD, 5, 'Maquesta', 'Open', 'Sensible', CARD_RED, [7,4], this._cardWidth, true, this._cardDblclickCallback),
  new Card(70, SUIT_SHIELD, 6, 'Milgas', 'Modest', 'Practical', CARD_RED, [7,5], this._cardWidth, true, this._cardDblclickCallback),
  new Card(71, SUIT_SHIELD, 7, 'Ferilleeagh', 'Wild', 'Realistic', CARD_BLACK, [7,6], this._cardWidth, true, this._cardDblclickCallback),
  new Card(72, SUIT_SHIELD, 8, 'Rig Mer-Krel', 'Roguish', 'Cynical', CARD_BLACK, [7,7], this._cardWidth, true, this._cardDblclickCallback),
  new Card(73, SUIT_SHIELD, 9, 'Jendaron', 'Prying', 'Pessimistic', CARD_BLACK, [7,8], this._cardWidth, true, this._cardDblclickCallback),
  new Card(74, SUIT_SWORD, 1, 'Sturm', 'Courageous', 'Inspiring', CARD_WHITE, [8,0], this._cardWidth, true, this._cardDblclickCallback),
  new Card(75, SUIT_SWORD, 2, 'Sir Liam', 'Brave', 'Commanding', CARD_WHITE, [8,1], this._cardWidth, true, this._cardDblclickCallback),
  new Card(76, SUIT_SWORD, 3, 'Huma', 'Valiant', 'Motivated', CARD_WHITE, [8,2], this._cardWidth, true, this._cardDblclickCallback),
  new Card(77, SUIT_SWORD, 4, 'Steel', 'Aggressive', 'Commanding', CARD_RED, [8,3], this._cardWidth, true, this._cardDblclickCallback),
  new Card(78, SUIT_SWORD, 5, 'Dhamon', 'Relentless', 'Independent', CARD_RED, [8,4], this._cardWidth, true, this._cardDblclickCallback),
  new Card(79, SUIT_SWORD, 6, 'Kaz', 'Domineering', 'Belligerent', CARD_RED, [8,5], this._cardWidth, true, this._cardDblclickCallback),
  new Card(80, SUIT_SWORD, 7, 'Chot', 'Aggressive', 'Brutal', CARD_BLACK, [8,6], this._cardWidth, true, this._cardDblclickCallback),
  new Card(81, SUIT_SWORD, 8, 'Kitiara', 'Commanding', 'Fierce', CARD_BLACK, [8,7], this._cardWidth, true, this._cardDblclickCallback),
  new Card(82, SUIT_SWORD, 9, 'Emperor Ariakas', 'Ruthless', 'Sadistic', CARD_BLACK, [8,8], this._cardWidth, true, this._cardDblclickCallback)
];
