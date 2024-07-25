//Data file containing the locations of the crimes
var os_markers = [
 {
   "id": 1,
   "Longitude": -1.511711,
   "Latitude": 53.814088,
   "Location": "On or near Sandhurst Road",
   "name": "Leeds 053A",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 2,
   "Longitude": -1.580458,
   "Latitude": 53.804165,
   "Location": "On or near Lennox Road",
   "name": "Leeds 056D",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 3,
   "Longitude": -1.723717,
   "Latitude": 53.829989,
   "Location": "On or near Billing View",
   "name": "Bradford 019C",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 4,
   "Longitude": -1.749028,
   "Latitude": 53.817497,
   "Location": "On or near King's Road",
   "name": "Bradford 028D",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 5,
   "Longitude": -1.786931,
   "Latitude": 53.789159,
   "Location": "On or near Legrams Mill Lane",
   "name": "Bradford 041A",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 6,
   "Longitude": -1.76087,
   "Latitude": 53.797164,
   "Location": "On or near ",
   "name": "Bradford 039H",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 7,
   "Longitude": -1.861811,
   "Latitude": 53.723333,
   "Location": "On or near Crown Street",
   "name": "Calderdale 008E",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 8,
   "Longitude": -1.523105,
   "Latitude": 53.634155,
   "Location": "On or near Charles View",
   "name": "Wakefield 037B",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 9,
   "Longitude": -1.935821,
   "Latitude": 53.697204,
   "Location": "On or near Union Street",
   "name": "Calderdale 027E",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 10,
   "Longitude": -1.800583,
   "Latitude": 53.7623,
   "Location": "On or near Burneston Gardens",
   "name": "Bradford 059B",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 11,
   "Longitude": -1.541564,
   "Latitude": 53.849385,
   "Location": "On or near Lingfield Drive",
   "name": "Leeds 018B",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 12,
   "Longitude": -1.617409,
   "Latitude": 53.78997,
   "Location": "On or near Stonebridge Lane",
   "name": "Leeds 078C",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 13,
   "Longitude": -1.808921,
   "Latitude": 53.632615,
   "Location": "On or near Sullivan Close",
   "name": "Kirklees 047C",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 14,
   "Longitude": -1.340777,
   "Latitude": 53.723623,
   "Location": "On or near Ferrybridge Road",
   "name": "Wakefield 005C",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 15,
   "Longitude": -1.714077,
   "Latitude": 53.773117,
   "Location": "On or near Lulworth Grove",
   "name": "Bradford 052E",
   "outcome": "Offender given a caution"
 },
 {
   "id": 16,
   "Longitude": -1.713681,
   "Latitude": 53.799999,
   "Location": "On or near Leeds Old Road",
   "name": "Bradford 038A",
   "outcome": "Suspect charged"
 },
 {
   "id": 17,
   "Longitude": -1.671431,
   "Latitude": 53.803486,
   "Location": "On or near ",
   "name": "Leeds 062B",
   "outcome": "Suspect charged"
 },
 {
   "id": 18,
   "Longitude": -1.309958,
   "Latitude": 53.692646,
   "Location": "On or near Finkle Street",
   "name": "Wakefield 015B",
   "outcome": "Suspect charged"
 },
 {
   "id": 19,
   "Longitude": -1.545127,
   "Latitude": 53.775912,
   "Location": "On or near A653",
   "name": "Leeds 085B",
   "outcome": "Suspect charged"
 },
 {
   "id": 20,
   "Longitude": -1.545127,
   "Latitude": 53.775912,
   "Location": "On or near A653",
   "name": "Leeds 085B",
   "outcome": "Suspect charged"
 },
 {
   "id": 21,
   "Longitude": -1.748873,
   "Latitude": 53.634688,
   "Location": "On or near ",
   "name": "Kirklees 044C",
   "outcome": "Suspect charged"
 },
 {
   "id": 22,
   "Longitude": -1.69965,
   "Latitude": 53.772713,
   "Location": "On or near Holme Lane",
   "name": "Bradford 057C",
   "outcome": "Suspect charged"
 },
 {
   "id": 23,
   "Longitude": -1.69965,
   "Latitude": 53.772713,
   "Location": "On or near Holme Lane",
   "name": "Bradford 057C",
   "outcome": "Suspect charged"
 },
 {
   "id": 24,
   "Longitude": -1.748195,
   "Latitude": 53.794297,
   "Location": "On or near Well Street",
   "name": "Bradford 039J",
   "outcome": "Suspect charged"
 },
 {
   "id": 25,
   "Longitude": -1.537628,
   "Latitude": 53.79823,
   "Location": "On or near ",
   "name": "Leeds 111B",
   "outcome": "Suspect charged"
 },
 {
   "id": 26,
   "Longitude": -1.537628,
   "Latitude": 53.79823,
   "Location": "On or near ",
   "name": "Leeds 111B",
   "outcome": "Suspect charged"
 },
 {
   "id": 27,
   "Longitude": -1.679903,
   "Latitude": 53.701755,
   "Location": "On or near Kings Lea",
   "name": "Kirklees 015B",
   "outcome": "Suspect charged"
 },
 {
   "id": 28,
   "Longitude": -1.679903,
   "Latitude": 53.701755,
   "Location": "On or near Kings Lea",
   "name": "Kirklees 015B",
   "outcome": "Suspect charged"
 },
 {
   "id": 29,
   "Longitude": -1.414282,
   "Latitude": 53.904395,
   "Location": "On or near Crabtree Green",
   "name": "Leeds 006B",
   "outcome": "Local resolution"
 },
 {
   "id": 30,
   "Longitude": -1.584816,
   "Latitude": 53.827653,
   "Location": "On or near ",
   "name": "Leeds 109C",
   "outcome": "Local resolution"
 },
 {
   "id": 31,
   "Longitude": -1.541964,
   "Latitude": 53.796033,
   "Location": "On or near Duncan Street",
   "name": "Leeds 111B",
   "outcome": "Local resolution"
 },
 {
   "id": 32,
   "Longitude": -1.311171,
   "Latitude": 53.690739,
   "Location": "On or near Valley Road",
   "name": "Wakefield 015B",
   "outcome": "Local resolution"
 },
 {
   "id": 33,
   "Longitude": -1.864202,
   "Latitude": 53.724279,
   "Location": "On or near Victoria Street",
   "name": "Calderdale 008E",
   "outcome": "Local resolution"
 },
 {
   "id": 34,
   "Longitude": -1.81691,
   "Latitude": 53.816964,
   "Location": "On or near Hunters Court",
   "name": "Bradford 030A",
   "outcome": "Local resolution"
 },
 {
   "id": 35,
   "Longitude": -1.850979,
   "Latitude": 53.863667,
   "Location": "On or near Croft Avenue",
   "name": "Bradford 010D",
   "outcome": "Local resolution"
 },
 {
   "id": 36,
   "Longitude": -1.850979,
   "Latitude": 53.863667,
   "Location": "On or near Croft Avenue",
   "name": "Bradford 010D",
   "outcome": "Local resolution"
 },
 {
   "id": 37,
   "Longitude": -1.881118,
   "Latitude": 53.674719,
   "Location": "On or near Drury Lane",
   "name": "Calderdale 026B",
   "outcome": "Local resolution"
 },
 {
   "id": 38,
   "Longitude": -1.539724,
   "Latitude": 53.798173,
   "Location": "On or near Sidney Street",
   "name": "Leeds 111B",
   "outcome": "Local resolution"
 },
 {
   "id": 39,
   "Longitude": -1.753982,
   "Latitude": 53.793833,
   "Location": "On or near Ivegate",
   "name": "Bradford 039G",
   "outcome": "Local resolution"
 },
 {
   "id": 40,
   "Longitude": -1.622245,
   "Latitude": 53.817686,
   "Location": "On or near St Catherine's Crescent",
   "name": "Leeds 046C",
   "outcome": "Action to be taken by another organisation"
 },
 {
   "id": 41,
   "Longitude": -1.622245,
   "Latitude": 53.817686,
   "Location": "On or near St Catherine's Crescent",
   "name": "Leeds 046C",
   "outcome": "Action to be taken by another organisation"
 },
 {
   "id": 42,
   "Longitude": -1.622245,
   "Latitude": 53.817686,
   "Location": "On or near St Catherine's Crescent",
   "name": "Leeds 046C",
   "outcome": "Action to be taken by another organisation"
 },
 {
   "id": 43,
   "Longitude": -1.649097,
   "Latitude": 53.706873,
   "Location": "On or near Church Walk",
   "name": "Kirklees 012C",
   "outcome": "Offender given a caution"
 },
 {
   "id": 44,
   "Longitude": -1.486819,
   "Latitude": 53.66585,
   "Location": "On or near Princess Street",
   "name": "Wakefield 030A",
   "outcome": "Offender given a caution"
 },
 {
   "id": 45,
   "Longitude": -1.806354,
   "Latitude": 53.641734,
   "Location": "On or near Wren Street",
   "name": "Kirklees 039A",
   "outcome": "Offender given a caution"
 },
 {
   "id": 46,
   "Longitude": -1.386159,
   "Latitude": 53.648173,
   "Location": "On or near Garmil Lane",
   "name": "Wakefield 032B",
   "outcome": "Offender given a caution"
 },
 {
   "id": 47,
   "Longitude": -1.80322,
   "Latitude": 53.762744,
   "Location": "On or near Crossdale Avenue",
   "name": "Bradford 059D",
   "outcome": "Offender given a caution"
 },
 {
   "id": 48,
   "Longitude": -1.822461,
   "Latitude": 53.642109,
   "Location": "On or near Bankhouse Road",
   "name": "Kirklees 045B",
   "outcome": "Offender given a caution"
 },
 {
   "id": 49,
   "Longitude": -1.724563,
   "Latitude": 53.765924,
   "Location": "On or near Fallowfield Close",
   "name": "Bradford 057D",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 50,
   "Longitude": -1.799708,
   "Latitude": 53.764446,
   "Location": "On or near Stainton Close",
   "name": "Bradford 059B",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 51,
   "Longitude": -1.573728,
   "Latitude": 53.792555,
   "Location": "On or near Holdforth Green",
   "name": "Leeds 071E",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 52,
   "Longitude": -1.862238,
   "Latitude": 53.722318,
   "Location": "On or near George Street",
   "name": "Calderdale 008E",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 53,
   "Longitude": -1.752028,
   "Latitude": 53.793056,
   "Location": "On or near Broadway",
   "name": "Bradford 039G",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 54,
   "Longitude": -1.454528,
   "Latitude": 53.829373,
   "Location": "On or near Naburn View",
   "name": "Leeds 029D",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 55,
   "Longitude": -1.454528,
   "Latitude": 53.829373,
   "Location": "On or near Naburn View",
   "name": "Leeds 029D",
   "outcome": "Investigation complete; no suspect identified"
 },
 {
   "id": 56,
   "Longitude": -1.793145,
   "Latitude": 53.651985,
   "Location": "On or near Norfolk Close",
   "name": "Kirklees 034C",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 57,
   "Longitude": -1.812771,
   "Latitude": 53.726102,
   "Location": "On or near ",
   "name": "Calderdale 011D",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 58,
   "Longitude": -1.518567,
   "Latitude": 53.814817,
   "Location": "On or near Zetland Place",
   "name": "Leeds 048D",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 59,
   "Longitude": -1.512456,
   "Latitude": 53.811395,
   "Location": "On or near Cowper Grove",
   "name": "Leeds 053B",
   "outcome": "Unable to prosecute suspect"
 },
 {
   "id": 60,
   "Longitude": -1.580286,
   "Latitude": 53.690491,
   "Location": "On or near Holly Dene",
   "name": "Wakefield 021C",
   "outcome": "Action to be taken by another organisation"
 },
 {
   "id": 61,
   "Longitude": -1.393708,
   "Latitude": 53.604915,
   "Location": "On or near West Street",
   "name": "Wakefield 040C",
   "outcome": "Action to be taken by another organisation"
 },
 {
   "id": 62,
   "Longitude": -1.759549,
   "Latitude": 53.786492,
   "Location": "On or near Woodville Terrace",
   "name": "Bradford 048C",
   "outcome": "Action to be taken by another organisation"
 },
 {
   "id": 63,
   "Longitude": -1.665808,
   "Latitude": 53.731548,
   "Location": "On or near Whewell Street",
   "name": "Kirklees 002A",
   "outcome": "Action to be taken by another organisation"
 },
 {
   "id": 64,
   "Longitude": -1.541897,
   "Latitude": 53.675233,
   "Location": "On or near Nightingale Crest",
   "name": "Wakefield 026F",
   "outcome": "Action to be taken by another organisation"
 },
 {
   "id": 65,
   "Longitude": -1.267623,
   "Latitude": 53.709617,
   "Location": "On or near Linden Close",
   "name": "Wakefield 011C",
   "outcome": "Action to be taken by another organisation"
 },
 {
   "id": 66,
   "Longitude": -1.806473,
   "Latitude": 53.774488,
   "Location": "On or near Snape Drive",
   "name": "Bradford 049G",
   "outcome": "Further investigation is not in the public interest"
 },
 {
   "id": 67,
   "Longitude": -1.593173,
   "Latitude": 53.718777,
   "Location": "On or near ",
   "name": "Leeds 106D",
   "outcome": "Further investigation is not in the public interest"
 },
 {
   "id": 68,
   "Longitude": -1.657904,
   "Latitude": 53.793948,
   "Location": "On or near Hazelhurst Court",
   "name": "Leeds 079A",
   "outcome": "Further action is not in the public interest"
 },
 {
   "id": 69,
   "Longitude": -1.790196,
   "Latitude": 53.758435,
   "Location": "On or near Wellgarth",
   "name": "Bradford 059H",
   "outcome": "Formal action is not in the public interest"
 },
 {
   "id": 70,
   "Longitude": -1.790196,
   "Latitude": 53.758435,
   "Location": "On or near Wellgarth",
   "name": "Bradford 059H",
   "outcome": "Formal action is not in the public interest"
 },
 {
   "id": 71,
   "Longitude": -1.790196,
   "Latitude": 53.758435,
   "Location": "On or near Wellgarth",
   "name": "Bradford 059H",
   "outcome": "Formal action is not in the public interest"
 },
 {
   "id": 72,
   "Longitude": -1.825732,
   "Latitude": 53.670723,
   "Location": "On or near Branch Lane",
   "name": "Calderdale 025E",
   "outcome": "Further investigation is not in the public interest"
 },
 {
   "id": 73,
   "Longitude": -1.472898,
   "Latitude": 53.807461,
   "Location": "On or near Lyme Chase",
   "name": "Leeds 061B",
   "outcome": "Further investigation is not in the public interest"
 },
 {
   "id": 74,
   "Longitude": -1.539724,
   "Latitude": 53.798173,
   "Location": "On or near Sidney Street",
   "name": "Leeds 111B",
   "outcome": "Formal action is not in the public interest"
 }
];