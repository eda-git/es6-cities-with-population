const cities = [
  {
    "geoname_id": "1688749",
    "name": "San Pedro",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "270216",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1699296",
    "name": "Rodriguez",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "134432",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1710141",
    "name": "Jolo",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "101002",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1710544",
    "name": "Iriga City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "114457",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1162004",
    "name": "Khairpur Mir’s",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "124602",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1168197",
    "name": "Peshawar",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "1218773",
    "admin1_code": "03"
  },
  {
    "geoname_id": "504341",
    "name": "Pskov",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "210501",
    "admin1_code": "60"
  },
  {
    "geoname_id": "516215",
    "name": "Odintsovo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "137041",
    "admin1_code": "47"
  },
  {
    "geoname_id": "517161",
    "name": "Novyye Cherëmushki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "101000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "523812",
    "name": "Mytishchi",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "160542",
    "admin1_code": "47"
  },
  {
    "geoname_id": "546105",
    "name": "Kolpino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "138979",
    "admin1_code": "66"
  },
  {
    "geoname_id": "549479",
    "name": "Khoroshëvo-Mnevniki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "159000",
    "admin1_code": "47"
  },
  {
    "geoname_id": "1496153",
    "name": "Omsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1172070",
    "admin1_code": "54"
  },
  {
    "geoname_id": "106297",
    "name": "Hafar Al-Batin",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "271642",
    "admin1_code": "06"
  },
  {
    "geoname_id": "107968",
    "name": "Ta’if",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "688693",
    "admin1_code": "14"
  },
  {
    "geoname_id": "368277",
    "name": "Rabak",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "135281",
    "admin1_code": "41"
  },
  {
    "geoname_id": "379149",
    "name": "Al Manāqil",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "128297",
    "admin1_code": "38"
  },
  {
    "geoname_id": "2673730",
    "name": "Stockholm",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "1515017",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1882316",
    "name": "Woodlands",
    "country_code": "SG",
    "cou_name_en": "Singapore",
    "population": "252530",
    "admin1_code": "03"
  },
  {
    "geoname_id": "363885",
    "name": "Wau",
    "country_code": "SS",
    "cou_name_en": "South Sudan, The Republic of",
    "population": "127384",
    "admin1_code": "09"
  },
  {
    "geoname_id": "169389",
    "name": "Idlib",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "128840",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2425791",
    "name": "Sarh",
    "country_code": "TD",
    "cou_name_en": "Chad",
    "population": "102528",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1607508",
    "name": "Phra Pradaeng",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "171333",
    "admin1_code": "42"
  },
  {
    "geoname_id": "1610780",
    "name": "Hat Yai",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "191696",
    "admin1_code": "68"
  },
  {
    "geoname_id": "303195",
    "name": "Osmaniye",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "202837",
    "admin1_code": "91"
  },
  {
    "geoname_id": "769250",
    "name": "Kielce",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "208598",
    "admin1_code": "84"
  },
  {
    "geoname_id": "3094802",
    "name": "Kraków",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "755050",
    "admin1_code": "77"
  },
  {
    "geoname_id": "7303419",
    "name": "East Jerusalem",
    "country_code": "PS",
    "cou_name_en": "West Bank and Gaza Strip",
    "population": "428304",
    "admin1_code": "WE"
  },
  {
    "geoname_id": "678817",
    "name": "Drobeta-Turnu Severin",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "102346",
    "admin1_code": "26"
  },
  {
    "geoname_id": "792680",
    "name": "Belgrade",
    "country_code": "RS",
    "cou_name_en": "Serbia",
    "population": "1273651",
    "admin1_code": "SE"
  },
  {
    "geoname_id": "691650",
    "name": "Ternopil",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "225238",
    "admin1_code": "22"
  },
  {
    "geoname_id": "4683416",
    "name": "Corpus Christi",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "326586",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4703223",
    "name": "Killeen",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "140806",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4776024",
    "name": "Newport News",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "182385",
    "admin1_code": "VA"
  },
  {
    "geoname_id": "482283",
    "name": "Tolyatti",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "702879",
    "admin1_code": "65"
  },
  {
    "geoname_id": "5107129",
    "name": "Amherst",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "122366",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5109790",
    "name": "Borough Park",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "149248",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5120034",
    "name": "Harlem",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "116345",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5145476",
    "name": "Akron",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "197542",
    "admin1_code": "OH"
  },
  {
    "geoname_id": "5318313",
    "name": "Tucson",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "531641",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5336269",
    "name": "Chico",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "121345",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5344994",
    "name": "East Los Angeles",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "126496",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5391710",
    "name": "San Bernardino",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "216108",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5399020",
    "name": "Stockton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "305658",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5419384",
    "name": "Denver",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "715522",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "5509403",
    "name": "North Las Vegas",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "234807",
    "admin1_code": "NV"
  },
  {
    "geoname_id": "5525577",
    "name": "Lubbock",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "249042",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "5725846",
    "name": "Eugene",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "163460",
    "admin1_code": "OR"
  },
  {
    "geoname_id": "5793933",
    "name": "Everett",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "108010",
    "admin1_code": "WA"
  },
  {
    "geoname_id": "1216311",
    "name": "Qarshi",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "278300",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3625542",
    "name": "Valera",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "244708",
    "admin1_code": "21"
  },
  {
    "geoname_id": "70225",
    "name": "Taiz",
    "country_code": "YE",
    "cou_name_en": "Yemen",
    "population": "615222",
    "admin1_code": "25"
  },
  {
    "geoname_id": "949880",
    "name": "Tembisa",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "511655",
    "admin1_code": "06"
  },
  {
    "geoname_id": "965528",
    "name": "Phalaborwa",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "109468",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1019330",
    "name": "Bhisho",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "137287",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1586203",
    "name": "Cần Thơ",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "812088",
    "admin1_code": "87"
  },
  {
    "geoname_id": "3526683",
    "name": "Iztapalapa",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1815786",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3530594",
    "name": "Ciudad Madero",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "197216",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3827407",
    "name": "Venustiano Carranza",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "430978",
    "admin1_code": "09"
  },
  {
    "geoname_id": "4005143",
    "name": "Heroica Guaymas",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "113082",
    "admin1_code": "26"
  },
  {
    "geoname_id": "4019233",
    "name": "Aguascalientes",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "722250",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1734586",
    "name": "Taiping",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "217647",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1735106",
    "name": "George Town",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "158336",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1735161",
    "name": "Kuala Lumpur",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "1453975",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2441291",
    "name": "Maradi",
    "country_code": "NE",
    "cou_name_en": "Niger",
    "population": "163487",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2319133",
    "name": "Warri",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "536023",
    "admin1_code": "36"
  },
  {
    "geoname_id": "2338106",
    "name": "Ikot Ekpene",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "254806",
    "admin1_code": "21"
  },
  {
    "geoname_id": "2338273",
    "name": "Ikire",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "222160",
    "admin1_code": "42"
  },
  {
    "geoname_id": "3181928",
    "name": "Bologna",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "394843",
    "admin1_code": "05"
  },
  {
    "geoname_id": "250336",
    "name": "Ar Ramthā",
    "country_code": "JO",
    "cou_name_en": "Jordan",
    "population": "155693",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1849429",
    "name": "Ueda",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "157480",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1860034",
    "name": "Kariya",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "139159",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1860827",
    "name": "Kagoshima",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "595049",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1861464",
    "name": "Isahaya",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "135546",
    "admin1_code": "27"
  },
  {
    "geoname_id": "1862599",
    "name": "Hino",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "187048",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1863289",
    "name": "Hamamatsu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "791707",
    "admin1_code": "37"
  },
  {
    "geoname_id": "7303138",
    "name": "Kirishima",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "123205",
    "admin1_code": "18"
  },
  {
    "geoname_id": "2043572",
    "name": "Kanggye",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "209530",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1832847",
    "name": "Yangju",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "179923",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1845604",
    "name": "Cheongju-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "846291",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1517945",
    "name": "Turkestan",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "227098",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1234569",
    "name": "Dehiwala-Mount Lavinia",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "219827",
    "admin1_code": "36"
  },
  {
    "geoname_id": "2210554",
    "name": "Sirte",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "128123",
    "admin1_code": "76"
  },
  {
    "geoname_id": "1314759",
    "name": "Lashio",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "131016",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1261039",
    "name": "Orai",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "158265",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1263780",
    "name": "Mangalore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "417387",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1264621",
    "name": "Madanapalle",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "108593",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1268907",
    "name": "Jīnd",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "161260",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1269374",
    "name": "Jamālpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "100780",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1271308",
    "name": "Ghāziābād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1199191",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1273874",
    "name": "Cochin",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "604696",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1275716",
    "name": "Bihār Sharīf",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "244230",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1279233",
    "name": "Ahmedabad",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "6357693",
    "admin1_code": "09"
  },
  {
    "geoname_id": "7284820",
    "name": "Jaigaon",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "158664",
    "admin1_code": "28"
  },
  {
    "geoname_id": "91597",
    "name": "Sāmarrā’",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "158508",
    "admin1_code": "18"
  },
  {
    "geoname_id": "98463",
    "name": "As Sulaymānīyah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "878146",
    "admin1_code": "05"
  },
  {
    "geoname_id": "115770",
    "name": "Shahr-e Kord",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "129153",
    "admin1_code": "03"
  },
  {
    "geoname_id": "132144",
    "name": "Hamadān",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "528256",
    "admin1_code": "09"
  },
  {
    "geoname_id": "449504",
    "name": "Eslāmshahr",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "450000",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3165185",
    "name": "Trieste",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "204338",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3172394",
    "name": "Naples",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "909048",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3174659",
    "name": "Livorno",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "157017",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3176746",
    "name": "Forlì",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "116696",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2640194",
    "name": "Plymouth",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "260203",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2643097",
    "name": "Mansfield",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "171958",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2647356",
    "name": "Hastings",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "133422",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2651347",
    "name": "Derby",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "270468",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2655775",
    "name": "Bexley",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "228000",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "1819400",
    "name": "Ma On Shan",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "215200",
    "admin1_code": "NST"
  },
  {
    "geoname_id": "3613533",
    "name": "Choloma",
    "country_code": "HN",
    "cou_name_en": "Honduras",
    "population": "139100",
    "admin1_code": "06"
  },
  {
    "geoname_id": "7284830",
    "name": "Budapest XIII. kerület",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "113531",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1214073",
    "name": "Rantauprapat",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "103009",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1621613",
    "name": "Weru",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "139004",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1624494",
    "name": "Tegal",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "237084",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1637090",
    "name": "Lumajang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "123626",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1639094",
    "name": "Kuningan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "111742",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1640581",
    "name": "Kedungwuni",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "117249",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1651531",
    "name": "Ambon",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "347288",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1254241",
    "name": "Tonk",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "151331",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1254320",
    "name": "Tiruvottiyūr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "248059",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1259091",
    "name": "Kollam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "367107",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1259239",
    "name": "Punāsa",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "350000",
    "admin1_code": "35"
  },
  {
    "geoname_id": "2938913",
    "name": "Darmstadt",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "140385",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2949186",
    "name": "Bielefeld",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "331906",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2475744",
    "name": "Tizi Ouzou",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "144000",
    "admin1_code": "14"
  },
  {
    "geoname_id": "349158",
    "name": "Shibīn al Kawm",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "267945",
    "admin1_code": "09"
  },
  {
    "geoname_id": "349717",
    "name": "Samālūţ",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "142009",
    "admin1_code": "10"
  },
  {
    "geoname_id": "352733",
    "name": "Mersa Matruh",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "176498",
    "admin1_code": "22"
  },
  {
    "geoname_id": "359815",
    "name": "As Sinbillāwayn",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "124020",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2511174",
    "name": "Santa Cruz de Tenerife",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "204856",
    "admin1_code": "53"
  },
  {
    "geoname_id": "3110044",
    "name": "Donostia / San Sebastián",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "185357",
    "admin1_code": "59"
  },
  {
    "geoname_id": "6544490",
    "name": "Usera",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "141189",
    "admin1_code": "29"
  },
  {
    "geoname_id": "343663",
    "name": "Arba Minch",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "192043",
    "admin1_code": "54"
  },
  {
    "geoname_id": "8521718",
    "name": "Bole",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "235585",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3673164",
    "name": "Palmira",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "312519",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3674962",
    "name": "Medellín",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "1999979",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3689169",
    "name": "Barrancabermeja",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "191403",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3903320",
    "name": "Tarija",
    "country_code": "BO",
    "cou_name_en": "Bolivia",
    "population": "159269",
    "admin1_code": "09"
  },
  {
    "geoname_id": "6075357",
    "name": "Mississauga",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "668549",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6077243",
    "name": "Montréal",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "1762949",
    "admin1_code": "10"
  },
  {
    "geoname_id": "6094578",
    "name": "Oshawa",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "166000",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6324733",
    "name": "St. John's",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "110525",
    "admin1_code": "05"
  },
  {
    "geoname_id": "215976",
    "name": "Ilebo",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "107093",
    "admin1_code": "18"
  },
  {
    "geoname_id": "219057",
    "name": "Beni",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "232000",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2290486",
    "name": "Daloa",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "421871",
    "admin1_code": "96"
  },
  {
    "geoname_id": "3874787",
    "name": "Punta Arenas",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "117430",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3875024",
    "name": "Puente Alto",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "568106",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3899361",
    "name": "Arica",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "185999",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1280737",
    "name": "Lhasa",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "118721",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1783873",
    "name": "Zhumadian",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "721670",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1784658",
    "name": "Zhengzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "4253913",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1787816",
    "name": "Ya'an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "612056",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1790353",
    "name": "Xianyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1034081",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1791673",
    "name": "Weihai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "844310",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1798827",
    "name": "Pingdingshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "979130",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1801615",
    "name": "Maba",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "113609",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1805733",
    "name": "Jinchang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "228561",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1805962",
    "name": "Jiawang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "133861",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1808212",
    "name": "Hechuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "377213",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1810240",
    "name": "Gejiu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "136135",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1813344",
    "name": "Dawukou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "131880",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1816440",
    "name": "Bengbu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "972784",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1816920",
    "name": "Shaoyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "753194",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1885823",
    "name": "Jiangyou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "127225",
    "admin1_code": "32"
  },
  {
    "geoname_id": "2033196",
    "name": "Zhangjiakou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "692602",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2036113",
    "name": "Liaoyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "687890",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2036427",
    "name": "Jinzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "604269",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2036973",
    "name": "Heihe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "109427",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2037685",
    "name": "Didao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "109561",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2396518",
    "name": "Port-Gentil",
    "country_code": "GA",
    "cou_name_en": "Gabon",
    "population": "109163",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2634341",
    "name": "City of Westminster",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "247614",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2874545",
    "name": "Magdeburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "235775",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2884161",
    "name": "Kreuzberg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "153135",
    "admin1_code": "16"
  },
  {
    "geoname_id": "616052",
    "name": "Yerevan",
    "country_code": "AM",
    "cou_name_en": "Armenia",
    "population": "1093485",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3427408",
    "name": "Villa Lugano",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "114000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2158177",
    "name": "Melbourne",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "4917750",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2177091",
    "name": "Ballarat",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "116201",
    "admin1_code": "07"
  },
  {
    "geoname_id": "584649",
    "name": "Yevlakh",
    "country_code": "AZ",
    "cou_name_en": "Azerbaijan",
    "population": "127400",
    "admin1_code": "68"
  },
  {
    "geoname_id": "7283386",
    "name": "Changshu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1677050",
    "admin1_code": "04"
  },
  {
    "geoname_id": "11838258",
    "name": "Bayan Nur",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1760000",
    "admin1_code": "20"
  },
  {
    "geoname_id": "12489673",
    "name": "Liangping",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "137620",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3682385",
    "name": "Floridablanca",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "267591",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3689147",
    "name": "Barranquilla",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "1206319",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3067696",
    "name": "Prague",
    "country_code": "CZ",
    "cou_name_en": "Czech Republic",
    "population": "1165581",
    "admin1_code": "52"
  },
  {
    "geoname_id": "3078610",
    "name": "Brno",
    "country_code": "CZ",
    "cou_name_en": "Czech Republic",
    "population": "379466",
    "admin1_code": "78"
  },
  {
    "geoname_id": "2825297",
    "name": "Stuttgart",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "630305",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3493146",
    "name": "San Francisco de Macorís",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "124763",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2485801",
    "name": "Ouargla",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "129402",
    "admin1_code": "50"
  },
  {
    "geoname_id": "2485926",
    "name": "Oran",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "645984",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3652941",
    "name": "Portoviejo",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "321800",
    "admin1_code": "14"
  },
  {
    "geoname_id": "352181",
    "name": "Mīt Ghamr",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "153754",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2515270",
    "name": "Las Palmas de Gran Canaria",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "378517",
    "admin1_code": "53"
  },
  {
    "geoname_id": "3104324",
    "name": "Zaragoza",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "675301",
    "admin1_code": "52"
  },
  {
    "geoname_id": "3114711",
    "name": "Oviedo",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "220020",
    "admin1_code": "34"
  },
  {
    "geoname_id": "333795",
    "name": "Jijiga",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "483000",
    "admin1_code": "52"
  },
  {
    "geoname_id": "3868626",
    "name": "Valparaíso",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "282448",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3893894",
    "name": "Concepción",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "223574",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1279891",
    "name": "Tengyue",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "127133",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1529660",
    "name": "Aksu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "535657",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1783745",
    "name": "Zigong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1262064",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1784617",
    "name": "Zhenping Chengguanzhen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "181528",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1785462",
    "name": "Zaoyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "184509",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1785623",
    "name": "Kunshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2092496",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1786764",
    "name": "Yichang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1350150",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1788816",
    "name": "Xinji",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "145911",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1789137",
    "name": "Xindi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "175761",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1796663",
    "name": "Sanming",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "602166",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1799194",
    "name": "Guang’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "858159",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1799722",
    "name": "Nantong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2273326",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1801620",
    "name": "Ma’anshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "741531",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1805540",
    "name": "Jingzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1052282",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1805618",
    "name": "Jingling",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "224871",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1807738",
    "name": "Huacheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "101165",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1810295",
    "name": "Gaozhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "292164",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1810820",
    "name": "Fuzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1089888",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1811729",
    "name": "Encheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "110921",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1812101",
    "name": "Dongying",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "998968",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1812228",
    "name": "Dongtai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "110988",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1815477",
    "name": "Changyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "186653",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1816858",
    "name": "Basuo",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "444458",
    "admin1_code": "31"
  },
  {
    "geoname_id": "2033467",
    "name": "Yanji",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "326957",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2036458",
    "name": "Jining",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "258757",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2037355",
    "name": "Fushun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1400646",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2037620",
    "name": "Dongling",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "171454",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2038569",
    "name": "Baicheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "316970",
    "admin1_code": "05"
  },
  {
    "geoname_id": "295432",
    "name": "Bet Shemesh",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "124957",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1253747",
    "name": "Unnāo",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "161671",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1255344",
    "name": "Suriāpet",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "111729",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1258182",
    "name": "Rewa",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "208461",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1259184",
    "name": "Puri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "170841",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1259297",
    "name": "Pudukkottai",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "112118",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1260434",
    "name": "Panvel",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "128046",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1265711",
    "name": "Kulti",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "305405",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1269321",
    "name": "Jammu",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "465567",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1269407",
    "name": "Jalgaon",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "429298",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1270990",
    "name": "Gondiā",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "124897",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1271885",
    "name": "Fīrozābād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "306409",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1271942",
    "name": "Farrukhābād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "241152",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1272013",
    "name": "Erode",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "521891",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1272648",
    "name": "Dibrugarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "122155",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1273587",
    "name": "Damoh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "118776",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1275339",
    "name": "Mumbai",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "12691836",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1275947",
    "name": "Bhīmavaram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "142967",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1276128",
    "name": "Bharatpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "229384",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1276736",
    "name": "Bastī",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "115115",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1277508",
    "name": "Bālurghāt",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "141404",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1278985",
    "name": "Alappuzha",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "240991",
    "admin1_code": "13"
  },
  {
    "geoname_id": "7279746",
    "name": "Noida",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "293908",
    "admin1_code": "36"
  },
  {
    "geoname_id": "98530",
    "name": "As Samawah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "152890",
    "admin1_code": "03"
  },
  {
    "geoname_id": "98854",
    "name": "Nasiriyah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "558400",
    "admin1_code": "09"
  },
  {
    "geoname_id": "23814",
    "name": "Kahrīz",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "766706",
    "admin1_code": "13"
  },
  {
    "geoname_id": "32767",
    "name": "Qarchak",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "251834",
    "admin1_code": "26"
  },
  {
    "geoname_id": "127349",
    "name": "Khorramabad",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "329825",
    "admin1_code": "23"
  },
  {
    "geoname_id": "132892",
    "name": "Gorgān",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "244937",
    "admin1_code": "37"
  },
  {
    "geoname_id": "2523920",
    "name": "Palermo",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "648260",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3170647",
    "name": "Pisa",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "109960",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3588258",
    "name": "Totonicapán",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "103952",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1931681",
    "name": "Victoria",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "956800",
    "admin1_code": "HCW"
  },
  {
    "geoname_id": "717582",
    "name": "Miskolc",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "154521",
    "admin1_code": "04"
  },
  {
    "geoname_id": "7284842",
    "name": "Budapest III. kerület",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "123723",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1624877",
    "name": "Tanjung Pandan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "103062",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1625812",
    "name": "Surakarta",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "522364",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1628884",
    "name": "Sampit",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "166773",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1632998",
    "name": "Pamanukan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "114290",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1642414",
    "name": "Jombang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "126465",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1646678",
    "name": "Cikarang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "106479",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1647383",
    "name": "Ciampea",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "207212",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1650213",
    "name": "Banjarmasin",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "657663",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2637433",
    "name": "Southend-on-Sea",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "295310",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2643339",
    "name": "Luton",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "225262",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2654710",
    "name": "Brighton",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "277103",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "6947756",
    "name": "Mendip",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "110000",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "611717",
    "name": "Tbilisi",
    "country_code": "GE",
    "cou_name_en": "Georgia",
    "population": "1049498",
    "admin1_code": "51"
  },
  {
    "geoname_id": "2302357",
    "name": "Cape Coast",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "143015",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2419533",
    "name": "Kindia",
    "country_code": "GN",
    "cou_name_en": "Guinea",
    "population": "117062",
    "admin1_code": "D"
  },
  {
    "geoname_id": "734077",
    "name": "Thessaloníki",
    "country_code": "GR",
    "cou_name_en": "Greece",
    "population": "317778",
    "admin1_code": "ESYE12"
  },
  {
    "geoname_id": "2747373",
    "name": "The Hague",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "474292",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2342490",
    "name": "Funtua",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "136811",
    "admin1_code": "24"
  },
  {
    "geoname_id": "2636432",
    "name": "Swansea",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "300352",
    "admin1_code": "WLS"
  },
  {
    "geoname_id": "2636486",
    "name": "Sutton Coldfield",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "107030",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2636531",
    "name": "Sunderland",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "170134",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2867838",
    "name": "Mülheim",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "170921",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2875376",
    "name": "Ludwigshafen am Rhein",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "163196",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2875601",
    "name": "Lübeck",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "212207",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2895044",
    "name": "Jena",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "104712",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2935517",
    "name": "Dortmund",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "588462",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1139715",
    "name": "Jalālābād",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "271900",
    "admin1_code": "18"
  },
  {
    "geoname_id": "2766824",
    "name": "Salzburg",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "157245",
    "admin1_code": "05"
  },
  {
    "geoname_id": "7281838",
    "name": "Logan City",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "326615",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1185128",
    "name": "Rājshāhi",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "763580",
    "admin1_code": "83"
  },
  {
    "geoname_id": "1185188",
    "name": "Rangpur",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "1031388",
    "admin1_code": "87"
  },
  {
    "geoname_id": "2787149",
    "name": "Schaerbeek",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "132761",
    "admin1_code": "BRU"
  },
  {
    "geoname_id": "2792413",
    "name": "Liège",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "195278",
    "admin1_code": "WAL"
  },
  {
    "geoname_id": "3522210",
    "name": "Pachuca de Soto",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "256584",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3522551",
    "name": "Nuevo Laredo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "373725",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3526485",
    "name": "Jiutepec",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "162427",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3530599",
    "name": "Ciudad del Carmen",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "169466",
    "admin1_code": "04"
  },
  {
    "geoname_id": "4005937",
    "name": "San Pedro Garza García",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "122627",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2338313",
    "name": "Ikeja",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "313196",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1847963",
    "name": "Atsugi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "223960",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1847966",
    "name": "Akashi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "297279",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1848522",
    "name": "Yao",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "273213",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1849186",
    "name": "Urayasu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "170091",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1859307",
    "name": "Kitakyushu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "940978",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2112708",
    "name": "Hitachi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "173750",
    "admin1_code": "14"
  },
  {
    "geoname_id": "11468429",
    "name": "Kuwana",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "140051",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1845033",
    "name": "Chungju",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "209483",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1846898",
    "name": "Anyang-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "595644",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1519928",
    "name": "Kostanay",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "210000",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2218970",
    "name": "Az Zāwīyah",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "200000",
    "admin1_code": "68"
  },
  {
    "geoname_id": "2555745",
    "name": "Beni Mellal",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "166399",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1064890",
    "name": "Fianarantsoa",
    "country_code": "MG",
    "cou_name_en": "Madagascar",
    "population": "191776",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1302439",
    "name": "Pakokku",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "126938",
    "admin1_code": "15"
  },
  {
    "geoname_id": "934765",
    "name": "Beau Bassin-Rose Hill",
    "country_code": "MU",
    "cou_name_en": "Mauritius",
    "population": "111355",
    "admin1_code": "17"
  },
  {
    "geoname_id": "776069",
    "name": "Białystok",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "291855",
    "admin1_code": "81"
  },
  {
    "geoname_id": "3099230",
    "name": "Gliwice",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "198835",
    "admin1_code": "83"
  },
  {
    "geoname_id": "665087",
    "name": "Timişoara",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "315053",
    "admin1_code": "36"
  },
  {
    "geoname_id": "670889",
    "name": "Piatra Neamţ",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "102688",
    "admin1_code": "28"
  },
  {
    "geoname_id": "707753",
    "name": "Horlivka",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "239828",
    "admin1_code": "05"
  },
  {
    "geoname_id": "4177887",
    "name": "West Palm Beach",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "106779",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4333177",
    "name": "Metairie",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "138481",
    "admin1_code": "LA"
  },
  {
    "geoname_id": "4644585",
    "name": "Nashville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "689447",
    "admin1_code": "TN"
  },
  {
    "geoname_id": "4706057",
    "name": "Lewisville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "104039",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4850751",
    "name": "Cedar Rapids",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "130405",
    "admin1_code": "IA"
  },
  {
    "geoname_id": "726848",
    "name": "Stara Zagora",
    "country_code": "BG",
    "cou_name_en": "Bulgaria",
    "population": "143431",
    "admin1_code": "59"
  },
  {
    "geoname_id": "3919968",
    "name": "Cochabamba",
    "country_code": "BO",
    "cou_name_en": "Bolivia",
    "population": "841276",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3390760",
    "name": "Recife",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "1653461",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3454244",
    "name": "Pelotas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "320674",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3455070",
    "name": "Paranaguá",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "141013",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3455478",
    "name": "Palhoça",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "175272",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3456068",
    "name": "Novo Hamburgo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "253841",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3461655",
    "name": "Hortolândia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "234259",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3463422",
    "name": "Ferraz de Vasconcelos",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "167900",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3464008",
    "name": "Esmeraldas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "103206",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3465624",
    "name": "Contagem",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "627123",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3467865",
    "name": "Campinas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "1031554",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3468403",
    "name": "Cachoeirinha",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "121084",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3468615",
    "name": "Cabo Frio",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "108239",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3470044",
    "name": "Betim",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "384000",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3470583",
    "name": "Barreiras",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "158292",
    "admin1_code": "05"
  },
  {
    "geoname_id": "11048322",
    "name": "Sector 5",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "271575",
    "admin1_code": "10"
  },
  {
    "geoname_id": "4907959",
    "name": "Rockford",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "148278",
    "admin1_code": "IL"
  },
  {
    "geoname_id": "2759879",
    "name": "Almere Stad",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "176432",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3693345",
    "name": "Pucallpa",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "326040",
    "admin1_code": "25"
  },
  {
    "geoname_id": "3698350",
    "name": "Chiclayo",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "552508",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1694611",
    "name": "Pasay",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "416522",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1711005",
    "name": "Iloilo",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "387681",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1711082",
    "name": "Iligan City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "312323",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1725804",
    "name": "Bayawan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "122747",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1167528",
    "name": "Quetta",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "733675",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1180809",
    "name": "Dadu",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "139784",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1185056",
    "name": "Abbottabad",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "120000",
    "admin1_code": "03"
  },
  {
    "geoname_id": "496015",
    "name": "Shakhty",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "221312",
    "admin1_code": "61"
  },
  {
    "geoname_id": "514734",
    "name": "Orsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "246836",
    "admin1_code": "55"
  },
  {
    "geoname_id": "515012",
    "name": "Orël",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "303696",
    "admin1_code": "56"
  },
  {
    "geoname_id": "516436",
    "name": "Obninsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "107392",
    "admin1_code": "25"
  },
  {
    "geoname_id": "569696",
    "name": "Cheboksary",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "492331",
    "admin1_code": "16"
  },
  {
    "geoname_id": "577206",
    "name": "Berezniki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "167748",
    "admin1_code": "90"
  },
  {
    "geoname_id": "2664454",
    "name": "Västerås",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "127799",
    "admin1_code": "25"
  },
  {
    "geoname_id": "2410048",
    "name": "Bo",
    "country_code": "SL",
    "cou_name_en": "Sierra Leone",
    "population": "174354",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2243940",
    "name": "Ziguinchor",
    "country_code": "SN",
    "cou_name_en": "Senegal",
    "population": "159778",
    "admin1_code": "12"
  },
  {
    "geoname_id": "173576",
    "name": "Latakia",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "709000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "162183",
    "name": "Ashgabat",
    "country_code": "TM",
    "cou_name_en": "Turkmenistan",
    "population": "727700",
    "admin1_code": "S"
  },
  {
    "geoname_id": "309647",
    "name": "Ağrı",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "120390",
    "admin1_code": "04"
  },
  {
    "geoname_id": "311073",
    "name": "Isparta",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "172334",
    "admin1_code": "33"
  },
  {
    "geoname_id": "317109",
    "name": "Denizli",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "313238",
    "admin1_code": "20"
  },
  {
    "geoname_id": "737071",
    "name": "Zeytinburnu",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "288743",
    "admin1_code": "34"
  },
  {
    "geoname_id": "745028",
    "name": "İzmit",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "196571",
    "admin1_code": "41"
  },
  {
    "geoname_id": "1668355",
    "name": "Tainan",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "771235",
    "admin1_code": "04"
  },
  {
    "geoname_id": "4942618",
    "name": "Lowell",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110699",
    "admin1_code": "MA"
  },
  {
    "geoname_id": "4945121",
    "name": "New Bedford",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "101079",
    "admin1_code": "MA"
  },
  {
    "geoname_id": "5392423",
    "name": "San Mateo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "103536",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5405288",
    "name": "Valencia",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "148456",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5406602",
    "name": "Vista",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "100890",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "3633009",
    "name": "Maracaibo",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "2225000",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3805673",
    "name": "San Fernando de Apure",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "229197",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1560037",
    "name": "Yên Vinh",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "107082",
    "admin1_code": "58"
  },
  {
    "geoname_id": "1591474",
    "name": "Bạc Liêu",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "107911",
    "admin1_code": "73"
  },
  {
    "geoname_id": "971421",
    "name": "Newcastle",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "404838",
    "admin1_code": "02"
  },
  {
    "geoname_id": "909137",
    "name": "Lusaka",
    "country_code": "ZM",
    "cou_name_en": "Zambia",
    "population": "1267440",
    "admin1_code": "09"
  },
  {
    "geoname_id": "147622",
    "name": "Lankaran",
    "country_code": "AZ",
    "cou_name_en": "Azerbaijan",
    "population": "240300",
    "admin1_code": "29"
  },
  {
    "geoname_id": "585514",
    "name": "Mingelchaur",
    "country_code": "AZ",
    "cou_name_en": "Azerbaijan",
    "population": "106048",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1851002",
    "name": "Takasaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "372369",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1854487",
    "name": "Ōita",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "477715",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1863641",
    "name": "Gifu-shi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "400118",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2113126",
    "name": "Akita",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "305625",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2128574",
    "name": "Otaru",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "115333",
    "admin1_code": "12"
  },
  {
    "geoname_id": "195272",
    "name": "Kakamega",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "1867579",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1831797",
    "name": "Battambang",
    "country_code": "KH",
    "cou_name_en": "Cambodia",
    "population": "119251",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1846266",
    "name": "Jeju City",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "486306",
    "admin1_code": "01"
  },
  {
    "geoname_id": "412800",
    "name": "Şabāḩ as Sālim",
    "country_code": "KW",
    "cou_name_en": "Kuwait",
    "population": "139163",
    "admin1_code": "09"
  },
  {
    "geoname_id": "267008",
    "name": "Tyre",
    "country_code": "LB",
    "cou_name_en": "Lebanon",
    "population": "135204",
    "admin1_code": "06"
  },
  {
    "geoname_id": "932505",
    "name": "Maseru",
    "country_code": "LS",
    "cou_name_en": "Lesotho",
    "population": "118355",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2558545",
    "name": "Al Hoceïma",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "395644",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2561668",
    "name": "Agadir",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "698310",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2028462",
    "name": "Ulan Bator",
    "country_code": "MN",
    "cou_name_en": "Mongolia",
    "population": "844818",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3979844",
    "name": "Zacatecas",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "129011",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1736376",
    "name": "Kota Bharu",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "568900",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1035025",
    "name": "Nacala",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "225034",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2320576",
    "name": "Umuahia",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "264662",
    "admin1_code": "45"
  },
  {
    "geoname_id": "2327735",
    "name": "Ogbomoso",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "433030",
    "admin1_code": "32"
  },
  {
    "geoname_id": "2336056",
    "name": "Jimeta",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "248148",
    "admin1_code": "35"
  },
  {
    "geoname_id": "2399697",
    "name": "Libreville",
    "country_code": "GA",
    "cou_name_en": "Gabon",
    "population": "578156",
    "admin1_code": "01"
  },
  {
    "geoname_id": "295548",
    "name": "Bat Yam",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "129012",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1254657",
    "name": "Thānesar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "138279",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1255062",
    "name": "Tambaram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "174787",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1256515",
    "name": "Shimoga",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "319550",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1256523",
    "name": "Shillong",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "132842",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1261731",
    "name": "Nashik",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1289497",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1262775",
    "name": "Morbi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "118022",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1264637",
    "name": "Machilīpatnam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "192827",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1264733",
    "name": "Lucknow",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "2472011",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1267696",
    "name": "Karol Bāgh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "505241",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1270642",
    "name": "Gurgaon",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "197340",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1272243",
    "name": "Dam Dam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "122719",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1272552",
    "name": "Dimāpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "135860",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1277976",
    "name": "Badlapur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "104636",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1278708",
    "name": "Amroha",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "176253",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1348843",
    "name": "Maheshtala",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "448317",
    "admin1_code": "28"
  },
  {
    "geoname_id": "99131",
    "name": "Al Kūt",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "315162",
    "admin1_code": "16"
  },
  {
    "geoname_id": "118743",
    "name": "Rasht",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "594590",
    "admin1_code": "08"
  },
  {
    "geoname_id": "121801",
    "name": "Orūmīyeh",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "577307",
    "admin1_code": "01"
  },
  {
    "geoname_id": "125185",
    "name": "Malāyer",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "176573",
    "admin1_code": "09"
  },
  {
    "geoname_id": "130802",
    "name": "Īlām",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "140940",
    "admin1_code": "10"
  },
  {
    "geoname_id": "142363",
    "name": "Bābol",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "202796",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1159301",
    "name": "Zahedan",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "551980",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3169361",
    "name": "Rimini",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "148688",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3169522",
    "name": "Reggio nell'Emilia",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "171944",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2639577",
    "name": "Reading",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "318014",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2648579",
    "name": "Glasgow",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "626410",
    "admin1_code": "SCT"
  },
  {
    "geoname_id": "2649997",
    "name": "Enfield Town",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "156858",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2651621",
    "name": "Dagenham",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "108368",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "255524",
    "name": "Peristéri",
    "country_code": "GR",
    "cou_name_en": "Greece",
    "population": "139981",
    "admin1_code": "ESYE31"
  },
  {
    "geoname_id": "1819609",
    "name": "Kowloon",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "2303100",
    "admin1_code": "KKC"
  },
  {
    "geoname_id": "1624041",
    "name": "Ternate",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "205001",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1640344",
    "name": "Kendari",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "345107",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1643078",
    "name": "Indramayu",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "123263",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1650527",
    "name": "Balikpapan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "695287",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1283581",
    "name": "Birgañj",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "268273",
    "admin1_code": "2"
  },
  {
    "geoname_id": "287286",
    "name": "Muscat",
    "country_code": "OM",
    "cou_name_en": "Oman",
    "population": "797000",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1687687",
    "name": "Santol",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "298976",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1688216",
    "name": "Santa Cruz",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "126735",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1688830",
    "name": "San Pablo",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "207577",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1690039",
    "name": "San Fernando",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "251248",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1694781",
    "name": "Paranaque City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "689992",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1701472",
    "name": "Mantampay",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "265032",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1709968",
    "name": "Kabankalan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "136483",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1167460",
    "name": "Rahim Yar Khan",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "788915",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3082707",
    "name": "Wałbrzych",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "127431",
    "admin1_code": "72"
  },
  {
    "geoname_id": "3085128",
    "name": "Sosnowiec",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "227295",
    "admin1_code": "83"
  },
  {
    "geoname_id": "3437056",
    "name": "San Lorenzo",
    "country_code": "PY",
    "cou_name_en": "Paraguay",
    "population": "227876",
    "admin1_code": "06"
  },
  {
    "geoname_id": "470451",
    "name": "Vykhino-Zhulebino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "216000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "472757",
    "name": "Volgograd",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1013533",
    "admin1_code": "84"
  },
  {
    "geoname_id": "479123",
    "name": "Ulyanovsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "626540",
    "admin1_code": "81"
  },
  {
    "geoname_id": "491023",
    "name": "Solikamsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "100812",
    "admin1_code": "90"
  },
  {
    "geoname_id": "553915",
    "name": "Kaluga",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "340851",
    "admin1_code": "25"
  },
  {
    "geoname_id": "554233",
    "name": "Korolev",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "139798",
    "admin1_code": "47"
  },
  {
    "geoname_id": "580922",
    "name": "Armavir",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "199548",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1494114",
    "name": "Prokop’yevsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "219000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1500973",
    "name": "Kyzyl",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "116983",
    "admin1_code": "79"
  },
  {
    "geoname_id": "2022890",
    "name": "Khabarovsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "618150",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2023469",
    "name": "Irkutsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "623869",
    "admin1_code": "20"
  },
  {
    "geoname_id": "367644",
    "name": "Sinnar",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "130122",
    "admin1_code": "58"
  },
  {
    "geoname_id": "3196359",
    "name": "Ljubljana",
    "country_code": "SI",
    "cou_name_en": "Slovenia",
    "population": "272220",
    "admin1_code": "61"
  },
  {
    "geoname_id": "3060972",
    "name": "Bratislava",
    "country_code": "SK",
    "cou_name_en": "Slovakia",
    "population": "423737",
    "admin1_code": "02"
  },
  {
    "geoname_id": "55671",
    "name": "Kismayo",
    "country_code": "SO",
    "cou_name_en": "Somalia",
    "population": "234852",
    "admin1_code": "09"
  },
  {
    "geoname_id": "934995",
    "name": "Manzini",
    "country_code": "SZ",
    "cou_name_en": "Swaziland",
    "population": "110537",
    "admin1_code": "03"
  },
  {
    "geoname_id": "307654",
    "name": "Kırıkkale",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "186960",
    "admin1_code": "79"
  },
  {
    "geoname_id": "321836",
    "name": "Batman",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "452157",
    "admin1_code": "76"
  },
  {
    "geoname_id": "324190",
    "name": "Alanya",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "112969",
    "admin1_code": "07"
  },
  {
    "geoname_id": "744562",
    "name": "Karabük",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "125403",
    "admin1_code": "89"
  },
  {
    "geoname_id": "7628419",
    "name": "Sultanbeyli",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "286622",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1665443",
    "name": "Yuanlin",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "124725",
    "admin1_code": "04"
  },
  {
    "geoname_id": "149606",
    "name": "Tanga",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "224876",
    "admin1_code": "18"
  },
  {
    "geoname_id": "498698",
    "name": "Saransk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "318841",
    "admin1_code": "46"
  },
  {
    "geoname_id": "508101",
    "name": "Podolsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "179400",
    "admin1_code": "47"
  },
  {
    "geoname_id": "2346615",
    "name": "Buguma",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "135404",
    "admin1_code": "50"
  },
  {
    "geoname_id": "5110629",
    "name": "Buffalo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "258071",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5125771",
    "name": "Manhattan",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "1487536",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5308480",
    "name": "Peoria",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "190985",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5325738",
    "name": "Bakersfield",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "373640",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5345529",
    "name": "El Cajon",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "103679",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5359777",
    "name": "Irvine",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "256927",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5401395",
    "name": "Temecula",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110003",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5640350",
    "name": "Billings",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110263",
    "admin1_code": "MT"
  },
  {
    "geoname_id": "3625829",
    "name": "Turmero",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "344700",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3632929",
    "name": "Mariara",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "116142",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1571644",
    "name": "Ô Môn",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "129683",
    "admin1_code": "87"
  },
  {
    "geoname_id": "1574023",
    "name": "Mỹ Tho",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "122310",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1586989",
    "name": "Buôn Hồ",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "127920",
    "admin1_code": "88"
  },
  {
    "geoname_id": "710719",
    "name": "Chernivtsi",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "265471",
    "admin1_code": "03"
  },
  {
    "geoname_id": "4180386",
    "name": "Athens",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "127315",
    "admin1_code": "GA"
  },
  {
    "geoname_id": "4276614",
    "name": "Olathe",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "134305",
    "admin1_code": "KS"
  },
  {
    "geoname_id": "4330145",
    "name": "Lafayette",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "127657",
    "admin1_code": "LA"
  },
  {
    "geoname_id": "4460243",
    "name": "Charlotte",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "874579",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "4508722",
    "name": "Cincinnati",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "309317",
    "admin1_code": "OH"
  },
  {
    "geoname_id": "4612862",
    "name": "Chattanooga",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "181099",
    "admin1_code": "TN"
  },
  {
    "geoname_id": "4634946",
    "name": "Knoxville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "185291",
    "admin1_code": "TN"
  },
  {
    "geoname_id": "4710826",
    "name": "Mesquite",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "144788",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4883817",
    "name": "Aurora",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "200661",
    "admin1_code": "IL"
  },
  {
    "geoname_id": "939270",
    "name": "Emalahleni",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "262491",
    "admin1_code": "07"
  },
  {
    "geoname_id": "980921",
    "name": "Mabopane",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "110972",
    "admin1_code": "06"
  },
  {
    "geoname_id": "8416626",
    "name": "Fengcheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "175576",
    "admin1_code": "33"
  },
  {
    "geoname_id": "12277239",
    "name": "Yunlong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "345393",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3668605",
    "name": "Santa Marta",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "499192",
    "admin1_code": "38"
  },
  {
    "geoname_id": "3672328",
    "name": "Piedecuesta",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "163362",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3687238",
    "name": "Cartagena",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "914552",
    "admin1_code": "35"
  },
  {
    "geoname_id": "3537906",
    "name": "Santa Clara",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "250512",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3556969",
    "name": "Holguín",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "319102",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3564436",
    "name": "Cerro",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "132351",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2940187",
    "name": "Charlottenburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "129359",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2945756",
    "name": "Bottrop",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "119909",
    "admin1_code": "07"
  },
  {
    "geoname_id": "7290243",
    "name": "Bergedorf",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "119665",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3492914",
    "name": "Santiago de los Caballeros",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "1200000",
    "admin1_code": "25"
  },
  {
    "geoname_id": "2487134",
    "name": "Mostaganem",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "130000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2507480",
    "name": "Algiers",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "1977663",
    "admin1_code": "01"
  },
  {
    "geoname_id": "355026",
    "name": "Girga",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "151256",
    "admin1_code": "24"
  },
  {
    "geoname_id": "361058",
    "name": "Alexandria",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "5263542",
    "admin1_code": "06"
  },
  {
    "geoname_id": "361546",
    "name": "Arish",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "199243",
    "admin1_code": "27"
  },
  {
    "geoname_id": "2510542",
    "name": "Telde",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "100015",
    "admin1_code": "53"
  },
  {
    "geoname_id": "2521420",
    "name": "Badajoz",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "148334",
    "admin1_code": "57"
  },
  {
    "geoname_id": "3121424",
    "name": "Gijón",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "277554",
    "admin1_code": "34"
  },
  {
    "geoname_id": "339666",
    "name": "Bishoftu",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "197557",
    "admin1_code": "51"
  },
  {
    "geoname_id": "3394023",
    "name": "Natal",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "896708",
    "admin1_code": "22"
  },
  {
    "geoname_id": "3445156",
    "name": "Viamão",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "285269",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3447212",
    "name": "Suzano",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "283314",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3449324",
    "name": "São Caetano do Sul",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "136453",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3450404",
    "name": "Santa Bárbara d'Oeste",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "188000",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3461786",
    "name": "Guarulhos",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "1169577",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3465476",
    "name": "Coronel Fabriciano",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "100916",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3470858",
    "name": "Barbacena",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "122211",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3663517",
    "name": "Manaus",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "2219580",
    "admin1_code": "04"
  },
  {
    "geoname_id": "6317344",
    "name": "Jaboatão dos Guararapes",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "630008",
    "admin1_code": "30"
  },
  {
    "geoname_id": "5946768",
    "name": "Edmonton",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "1010899",
    "admin1_code": "01"
  },
  {
    "geoname_id": "6076211",
    "name": "Moncton",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "108620",
    "admin1_code": "04"
  },
  {
    "geoname_id": "212902",
    "name": "Kindu",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "135698",
    "admin1_code": "10"
  },
  {
    "geoname_id": "214481",
    "name": "Kananga",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "463546",
    "admin1_code": "23"
  },
  {
    "geoname_id": "2388873",
    "name": "Bimbo",
    "country_code": "CF",
    "cou_name_en": "Central African Republic",
    "population": "129655",
    "admin1_code": "17"
  },
  {
    "geoname_id": "2282006",
    "name": "San-Pédro",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "390654",
    "admin1_code": "76"
  },
  {
    "geoname_id": "2286304",
    "name": "Korhogo",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "440926",
    "admin1_code": "87"
  },
  {
    "geoname_id": "2596934",
    "name": "Séguéla",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "103980",
    "admin1_code": "97"
  },
  {
    "geoname_id": "3899887",
    "name": "Alto Hospicio",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "108375",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2231320",
    "name": "Garoua",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "436899",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1281019",
    "name": "Hotan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "408894",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1788046",
    "name": "Xuchang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1265536",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1790630",
    "name": "Xi’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "9600000",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1791121",
    "name": "Changde",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1457419",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1792585",
    "name": "Fuding",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "192352",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1795874",
    "name": "Shaoguan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1028460",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1803352",
    "name": "Linshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "109955",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1803782",
    "name": "Lichuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "120587",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1812990",
    "name": "Dengzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "285032",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2035225",
    "name": "Fendou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "226298",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2036434",
    "name": "Lianshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "313247",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2036502",
    "name": "Jilin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1895865",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2037411",
    "name": "Fengcheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "120514",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2038365",
    "name": "Bei’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "436444",
    "admin1_code": "08"
  },
  {
    "geoname_id": "12042053",
    "name": "Musaffah",
    "country_code": "AE",
    "cou_name_en": "United Arab Emirates",
    "population": "243341",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3347939",
    "name": "Lobito",
    "country_code": "AO",
    "cou_name_en": "Angola",
    "population": "207932",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3348078",
    "name": "Cuito",
    "country_code": "AO",
    "cou_name_en": "Angola",
    "population": "113624",
    "admin1_code": "02"
  },
  {
    "geoname_id": "12501204",
    "name": "Santa María",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "113302",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2067119",
    "name": "Mandurah",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "107641",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2146142",
    "name": "Townsville",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "180820",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2174003",
    "name": "Brisbane",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "2582007",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2892518",
    "name": "Kassel",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "194501",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1185281",
    "name": "Bagerhat",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "266388",
    "admin1_code": "82"
  },
  {
    "geoname_id": "1336143",
    "name": "Pābna",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "186781",
    "admin1_code": "83"
  },
  {
    "geoname_id": "1337233",
    "name": "Bogra",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "210000",
    "admin1_code": "83"
  },
  {
    "geoname_id": "2797656",
    "name": "Gent",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "265086",
    "admin1_code": "VLG"
  },
  {
    "geoname_id": "294751",
    "name": "H̱olon",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "196282",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1259686",
    "name": "Pīlibhīt",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "131008",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1260637",
    "name": "Palwal",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "121965",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1261653",
    "name": "Navsari",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "171109",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1266049",
    "name": "Kota",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "763088",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1268593",
    "name": "Kaithal",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "140604",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1270239",
    "name": "Hassan",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "128531",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1270407",
    "name": "Hanumāngarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "155687",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1271662",
    "name": "Gangāwati",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "106250",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1273800",
    "name": "Kadapa",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "127010",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1276100",
    "name": "Bharūch",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "153528",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1277029",
    "name": "Barddhamān",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "301725",
    "admin1_code": "28"
  },
  {
    "geoname_id": "99072",
    "name": "Mosul",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "1683000",
    "admin1_code": "15"
  },
  {
    "geoname_id": "99532",
    "name": "Basrah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "1326564",
    "admin1_code": "02"
  },
  {
    "geoname_id": "116667",
    "name": "Sāveh",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "175533",
    "admin1_code": "34"
  },
  {
    "geoname_id": "119208",
    "name": "Qom",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "900000",
    "admin1_code": "39"
  },
  {
    "geoname_id": "124721",
    "name": "Marvdasht",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "148858",
    "admin1_code": "07"
  },
  {
    "geoname_id": "140463",
    "name": "Bīrjand",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "196982",
    "admin1_code": "41"
  },
  {
    "geoname_id": "3165243",
    "name": "Trento",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "120709",
    "admin1_code": "17"
  },
  {
    "geoname_id": "2646277",
    "name": "Ilford",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "168168",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2654675",
    "name": "Bristol",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "465866",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2654789",
    "name": "Brent",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "329100",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "255274",
    "name": "Piraeus",
    "country_code": "GR",
    "cou_name_en": "Greece",
    "population": "163688",
    "admin1_code": "ESYE31"
  },
  {
    "geoname_id": "1818673",
    "name": "Tai Po",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "274100",
    "admin1_code": "NTP"
  },
  {
    "geoname_id": "3718420",
    "name": "Port-de-Paix",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "306217",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3723779",
    "name": "Jacmel",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "137966",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1213547",
    "name": "Tanjungbalai",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "176027",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1626801",
    "name": "Situbondo",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "685967",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1633419",
    "name": "Padang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "909040",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1636544",
    "name": "Manado",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "451916",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1646698",
    "name": "Cikampek",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "145620",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2343784",
    "name": "Ejigbo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "138357",
    "admin1_code": "42"
  },
  {
    "geoname_id": "2347059",
    "name": "Birnin Kebbi",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "108164",
    "admin1_code": "40"
  },
  {
    "geoname_id": "3405870",
    "name": "Belém",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "1499641",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3446621",
    "name": "Teófilo Otoni",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "101170",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3137115",
    "name": "Stavanger",
    "country_code": "NO",
    "cou_name_en": "Norway",
    "population": "144877",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1283339",
    "name": "Hetauda",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "195951",
    "admin1_code": "3"
  },
  {
    "geoname_id": "2193733",
    "name": "Auckland",
    "country_code": "NZ",
    "cou_name_en": "New Zealand",
    "population": "417910",
    "admin1_code": "E7"
  },
  {
    "geoname_id": "3943789",
    "name": "Chincha Alta",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "153076",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1700360",
    "name": "Mati",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "105908",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1725115",
    "name": "Biñan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "300000",
    "admin1_code": "40"
  },
  {
    "geoname_id": "499099",
    "name": "Samara",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1163399",
    "admin1_code": "65"
  },
  {
    "geoname_id": "523750",
    "name": "Naberezhnyye Chelny",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "509870",
    "admin1_code": "73"
  },
  {
    "geoname_id": "566532",
    "name": "Derbent",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "105965",
    "admin1_code": "17"
  },
  {
    "geoname_id": "575505",
    "name": "Bogorodskoye",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "103000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "581049",
    "name": "Arkhangel’sk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "349742",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1498920",
    "name": "Mezhdurechensk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "101026",
    "admin1_code": "29"
  },
  {
    "geoname_id": "8504949",
    "name": "Vasyl'evsky Ostrov",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "203058",
    "admin1_code": "66"
  },
  {
    "geoname_id": "364103",
    "name": "Wad Medani",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "332714",
    "admin1_code": "38"
  },
  {
    "geoname_id": "3583096",
    "name": "Soyapango",
    "country_code": "SV",
    "cou_name_en": "El Salvador",
    "population": "329708",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2427123",
    "name": "N'Djamena",
    "country_code": "TD",
    "cou_name_en": "Chad",
    "population": "721081",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1514896",
    "name": "Isfara",
    "country_code": "TJ",
    "cou_name_en": "Tajikistan",
    "population": "274000",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2464915",
    "name": "Sousse",
    "country_code": "TN",
    "cou_name_en": "Tunisia",
    "population": "164123",
    "admin1_code": "23"
  },
  {
    "geoname_id": "2468369",
    "name": "Gabès",
    "country_code": "TN",
    "cou_name_en": "Tunisia",
    "population": "110075",
    "admin1_code": "29"
  },
  {
    "geoname_id": "308464",
    "name": "Kayseri",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "1204641",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1670909",
    "name": "Bade",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "209148",
    "admin1_code": "04"
  },
  {
    "geoname_id": "11048323",
    "name": "Sector 6",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "367760",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2944388",
    "name": "Bremen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "546501",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2624886",
    "name": "Aalborg",
    "country_code": "DK",
    "cou_name_en": "Denmark",
    "population": "142937",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2483668",
    "name": "Relizane",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "130094",
    "admin1_code": "51"
  },
  {
    "geoname_id": "359792",
    "name": "Aswan",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "379774",
    "admin1_code": "16"
  },
  {
    "geoname_id": "360048",
    "name": "Ashmūn",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "124483",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2522013",
    "name": "Algeciras",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "116209",
    "admin1_code": "51"
  },
  {
    "geoname_id": "6544488",
    "name": "San Blas-Canillejas",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "157367",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6544494",
    "name": "Madrid Centro",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "149718",
    "admin1_code": "29"
  },
  {
    "geoname_id": "331180",
    "name": "Mek'ele",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "436910",
    "admin1_code": "53"
  },
  {
    "geoname_id": "727523",
    "name": "Ruse",
    "country_code": "BG",
    "cou_name_en": "Bulgaria",
    "population": "143417",
    "admin1_code": "53"
  },
  {
    "geoname_id": "3452465",
    "name": "Praia Grande",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "250027",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3453186",
    "name": "Ponta Grossa",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "292177",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3453643",
    "name": "Piracicaba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "407252",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3455775",
    "name": "Osasco",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "677856",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3461789",
    "name": "Guarujá",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "322750",
    "admin1_code": "27"
  },
  {
    "geoname_id": "624784",
    "name": "Navapolatsk",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "108000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2293549",
    "name": "Abengourou",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "164424",
    "admin1_code": "94"
  },
  {
    "geoname_id": "1529651",
    "name": "Altay",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "190064",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1791325",
    "name": "Wuda",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "129922",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1803318",
    "name": "Linyi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2743843",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1804153",
    "name": "Leshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "662814",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1810979",
    "name": "Fuling",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "268658",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1815276",
    "name": "Chenggu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "116375",
    "admin1_code": "26"
  },
  {
    "geoname_id": "2034440",
    "name": "Tieli",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "109636",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2034655",
    "name": "Suihua",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "252245",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2036401",
    "name": "Jiutai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "175115",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2036892",
    "name": "Hohhot",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2350000",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2836788",
    "name": "Schöneberg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "122658",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2928810",
    "name": "Essen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "593085",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1851483",
    "name": "Suita",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "351630",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1855189",
    "name": "Nishio",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "169984",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1856367",
    "name": "Musashino",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "147492",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1861107",
    "name": "Izumi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "184615",
    "admin1_code": "32"
  },
  {
    "geoname_id": "6822216",
    "name": "Kani",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "102143",
    "admin1_code": "09"
  },
  {
    "geoname_id": "179330",
    "name": "Thika",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "200000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1869012",
    "name": "Sunch’ŏn",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "437000",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1838524",
    "name": "Busan",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "3678555",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1839652",
    "name": "Osan",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "158978",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1841598",
    "name": "Gyeongsan-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "129903",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1897000",
    "name": "Seongnam-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "1031935",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1226260",
    "name": "Trincomalee",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "108420",
    "admin1_code": "37"
  },
  {
    "geoname_id": "598316",
    "name": "Kaunas",
    "country_code": "LT",
    "cou_name_en": "Lithuania",
    "population": "289380",
    "admin1_code": "57"
  },
  {
    "geoname_id": "2212775",
    "name": "Sabhā",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "130000",
    "admin1_code": "75"
  },
  {
    "geoname_id": "1055429",
    "name": "Toliara",
    "country_code": "MG",
    "cou_name_en": "Madagascar",
    "population": "168756",
    "admin1_code": "51"
  },
  {
    "geoname_id": "3522790",
    "name": "Naucalpan de Juárez",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "792211",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3530240",
    "name": "Córdoba",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "140896",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3988086",
    "name": "Saltillo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "709671",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1734759",
    "name": "Malacca",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "579000",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2327879",
    "name": "Offa",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "113830",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2328765",
    "name": "Nnewi",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "193987",
    "admin1_code": "25"
  },
  {
    "geoname_id": "2338400",
    "name": "Ijebu-Ode",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "209175",
    "admin1_code": "16"
  },
  {
    "geoname_id": "694423",
    "name": "Sevastopol",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "547820",
    "admin1_code": "20"
  },
  {
    "geoname_id": "704147",
    "name": "Kremenchuk",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "217710",
    "admin1_code": "18"
  },
  {
    "geoname_id": "4151316",
    "name": "Clearwater",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "113003",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4273837",
    "name": "Kansas City",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "151306",
    "admin1_code": "KS"
  },
  {
    "geoname_id": "4347778",
    "name": "Baltimore",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "576498",
    "admin1_code": "MD"
  },
  {
    "geoname_id": "4575352",
    "name": "Columbia",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "133803",
    "admin1_code": "SC"
  },
  {
    "geoname_id": "4671240",
    "name": "Arlington",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "388125",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4693003",
    "name": "Garland",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "236897",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4726206",
    "name": "San Antonio",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "1434625",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4752186",
    "name": "Chesapeake",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "235429",
    "admin1_code": "VA"
  },
  {
    "geoname_id": "4781708",
    "name": "Richmond",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "226610",
    "admin1_code": "VA"
  },
  {
    "geoname_id": "4853828",
    "name": "Des Moines",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "210330",
    "admin1_code": "IA"
  },
  {
    "geoname_id": "8408334",
    "name": "Qianjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "143727",
    "admin1_code": "33"
  },
  {
    "geoname_id": "12492669",
    "name": "Pingwu County",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "180000",
    "admin1_code": "32"
  },
  {
    "geoname_id": "3540667",
    "name": "Sancti Spíritus",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "127069",
    "admin1_code": "14"
  },
  {
    "geoname_id": "485239",
    "name": "Syktyvkar",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "245083",
    "admin1_code": "34"
  },
  {
    "geoname_id": "487495",
    "name": "Sterlitamak",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "267231",
    "admin1_code": "08"
  },
  {
    "geoname_id": "5097598",
    "name": "Elizabeth",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "129007",
    "admin1_code": "NJ"
  },
  {
    "geoname_id": "5396003",
    "name": "Simi Valley",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "126788",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5404794",
    "name": "Universal City",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "105000",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5427946",
    "name": "Lakewood",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "152597",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "5750162",
    "name": "Salem",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "164549",
    "admin1_code": "OR"
  },
  {
    "geoname_id": "1514210",
    "name": "Chirchiq",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "162800",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3625515",
    "name": "Valle de La Pascua",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "153136",
    "admin1_code": "12"
  },
  {
    "geoname_id": "12253704",
    "name": "Phú Quốc",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "179480",
    "admin1_code": "21"
  },
  {
    "geoname_id": "78754",
    "name": "Mukalla",
    "country_code": "YE",
    "cou_name_en": "Yemen",
    "population": "566000",
    "admin1_code": "04"
  },
  {
    "geoname_id": "910111",
    "name": "Livingstone",
    "country_code": "ZM",
    "cou_name_en": "Zambia",
    "population": "109203",
    "admin1_code": "07"
  },
  {
    "geoname_id": "890299",
    "name": "Harare",
    "country_code": "ZW",
    "cou_name_en": "Zimbabwe",
    "population": "1542813",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1580240",
    "name": "Huế",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "351456",
    "admin1_code": "66"
  },
  {
    "geoname_id": "1586443",
    "name": "Cà Mau",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "111894",
    "admin1_code": "77"
  },
  {
    "geoname_id": "292932",
    "name": "Ajman City",
    "country_code": "AE",
    "cou_name_en": "United Arab Emirates",
    "population": "490035",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1138958",
    "name": "Kabul",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "4434550",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3433899",
    "name": "Formosa",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "222226",
    "admin1_code": "09"
  },
  {
    "geoname_id": "8063098",
    "name": "Favoriten",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "201882",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2165798",
    "name": "Geelong",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "268984",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3182351",
    "name": "Bari",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "316491",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1857910",
    "name": "Kyoto",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "1463723",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1861449",
    "name": "Isehara",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "103401",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1861450",
    "name": "Ise",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "123533",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1861749",
    "name": "Ikoma",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "120741",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1926004",
    "name": "Wakayama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "351000",
    "admin1_code": "43"
  },
  {
    "geoname_id": "1897007",
    "name": "Hanam",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "254415",
    "admin1_code": "13"
  },
  {
    "geoname_id": "11523293",
    "name": "Sejong",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "351007",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1520316",
    "name": "Ust-Kamenogorsk",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "319067",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2208485",
    "name": "Zliten",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "109972",
    "admin1_code": "72"
  },
  {
    "geoname_id": "2529013",
    "name": "Temara",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "313510",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2548880",
    "name": "Fès al Bali",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "156000",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2453348",
    "name": "Mopti",
    "country_code": "ML",
    "cou_name_en": "Mali",
    "population": "108456",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1285173",
    "name": "Yenangyaung",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "110553",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3483849",
    "name": "Ciudad Valles",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "124644",
    "admin1_code": "24"
  },
  {
    "geoname_id": "3515062",
    "name": "Tulancingo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "102406",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3247449",
    "name": "Aachen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "265208",
    "admin1_code": "07"
  },
  {
    "geoname_id": "6545310",
    "name": "Mitte",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "102338",
    "admin1_code": "16"
  },
  {
    "geoname_id": "355795",
    "name": "Ḩalwān",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "230000",
    "admin1_code": "11"
  },
  {
    "geoname_id": "358448",
    "name": "Damanhūr",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "318207",
    "admin1_code": "03"
  },
  {
    "geoname_id": "358600",
    "name": "Būsh",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "136441",
    "admin1_code": "18"
  },
  {
    "geoname_id": "2511401",
    "name": "La Laguna",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "150661",
    "admin1_code": "53"
  },
  {
    "geoname_id": "2517117",
    "name": "Granada",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "234325",
    "admin1_code": "51"
  },
  {
    "geoname_id": "3107784",
    "name": "Torrejón de Ardoz",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "118162",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3120619",
    "name": "L'Hospitalet de Llobregat",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "257038",
    "admin1_code": "56"
  },
  {
    "geoname_id": "3130564",
    "name": "Alcorcón",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "167967",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6544099",
    "name": "Moncloa-Aravaca",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "116531",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6544100",
    "name": "Eixample",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "266477",
    "admin1_code": "56"
  },
  {
    "geoname_id": "8285534",
    "name": "Fuencarral-El Pardo",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "220085",
    "admin1_code": "29"
  },
  {
    "geoname_id": "330186",
    "name": "Nazrēt",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "435222",
    "admin1_code": "51"
  },
  {
    "geoname_id": "333772",
    "name": "Jimma",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "239022",
    "admin1_code": "51"
  },
  {
    "geoname_id": "295629",
    "name": "Ashdod",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "226838",
    "admin1_code": "01"
  },
  {
    "geoname_id": "7498240",
    "name": "West Jerusalem",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "400000",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1252942",
    "name": "Wardha",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "113759",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1254163",
    "name": "Thiruvananthapuram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "784153",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1255647",
    "name": "Srikakulam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "118299",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1257540",
    "name": "Sambhal",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "196109",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1258662",
    "name": "Rāmgundam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "452261",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1264521",
    "name": "Madurai",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1465625",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1265014",
    "name": "Latur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "348967",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1269935",
    "name": "Hospet",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "197846",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1270351",
    "name": "Haridwar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "186079",
    "admin1_code": "39"
  },
  {
    "geoname_id": "1270498",
    "name": "Haldwani",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "139497",
    "admin1_code": "39"
  },
  {
    "geoname_id": "1270801",
    "name": "Gudivāda",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "116161",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1273892",
    "name": "Chūru",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "103533",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1274693",
    "name": "Chānda",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "328351",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1275637",
    "name": "Bilāspur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "282705",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1276856",
    "name": "Bārsi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "110983",
    "admin1_code": "16"
  },
  {
    "geoname_id": "7302845",
    "name": "Quthbullapur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "225816",
    "admin1_code": "40"
  },
  {
    "geoname_id": "98717",
    "name": "Ramadi",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "223500",
    "admin1_code": "01"
  },
  {
    "geoname_id": "100077",
    "name": "Abū Ghurayb",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "900000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "125446",
    "name": "Mahābād",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "162434",
    "admin1_code": "01"
  },
  {
    "geoname_id": "128747",
    "name": "Karaj",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "1448075",
    "admin1_code": "44"
  },
  {
    "geoname_id": "3165072",
    "name": "Udine",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "100170",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3165926",
    "name": "Taranto",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "198585",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2641430",
    "name": "Northampton",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "245899",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2650839",
    "name": "Dudley",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "199059",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2651817",
    "name": "Croydon",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "173314",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2652053",
    "name": "Crawley",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "180508",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2416969",
    "name": "Nzérékoré",
    "country_code": "GN",
    "cou_name_en": "Guinea",
    "population": "132728",
    "admin1_code": "N"
  },
  {
    "geoname_id": "3726786",
    "name": "Delmas 73",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "382920",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3728097",
    "name": "Les Cayes",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "125799",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1626381",
    "name": "Sukabumi",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "276414",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1630997",
    "name": "Plumbon",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "167105",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1631992",
    "name": "Pati",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "107028",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1632228",
    "name": "Pasarkemis",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "273659",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1635882",
    "name": "Mataram",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "429651",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1636308",
    "name": "Manokwari",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "107325",
    "admin1_code": "39"
  },
  {
    "geoname_id": "1636930",
    "name": "Madiun",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "210115",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1638284",
    "name": "Lawang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "159380",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1643761",
    "name": "Grogol",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "100613",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1645524",
    "name": "Depok",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "2056400",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1646034",
    "name": "Citeureup",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "214668",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1647142",
    "name": "Cianjur",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "174587",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3595069",
    "name": "Jutiapa",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "145880",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1818223",
    "name": "Yuen Long Kau Hui",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "169600",
    "admin1_code": "NYL"
  },
  {
    "geoname_id": "1818483",
    "name": "Tsing Yi Town",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "182100",
    "admin1_code": "NKT"
  },
  {
    "geoname_id": "2633352",
    "name": "York",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "156135",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "650224",
    "name": "Kuopio",
    "country_code": "FI",
    "cou_name_en": "Finland",
    "population": "121557",
    "admin1_code": "11"
  },
  {
    "geoname_id": "291074",
    "name": "Ras Al Khaimah City",
    "country_code": "AE",
    "cou_name_en": "United Arab Emirates",
    "population": "351943",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1141269",
    "name": "Ghazni",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "141000",
    "admin1_code": "08"
  },
  {
    "geoname_id": "12076997",
    "name": "José C. Paz",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "230208",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2778067",
    "name": "Graz",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "295424",
    "admin1_code": "06"
  },
  {
    "geoname_id": "232422",
    "name": "Kampala",
    "country_code": "UG",
    "cou_name_en": "Uganda",
    "population": "1353189",
    "admin1_code": "C"
  },
  {
    "geoname_id": "4140963",
    "name": "Washington",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "689545",
    "admin1_code": "DC"
  },
  {
    "geoname_id": "4221552",
    "name": "Savannah",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "147780",
    "admin1_code": "GA"
  },
  {
    "geoname_id": "4297999",
    "name": "Lexington-Fayette",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "314488",
    "admin1_code": "KY"
  },
  {
    "geoname_id": "4300488",
    "name": "Meads",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "288649",
    "admin1_code": "KY"
  },
  {
    "geoname_id": "4469146",
    "name": "Greensboro",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "285342",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "4669635",
    "name": "Abilene",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "125182",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4672989",
    "name": "Beaumont",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "115282",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4676740",
    "name": "Brownsville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "183887",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4719457",
    "name": "Plano",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "283558",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4887398",
    "name": "Chicago",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "2696555",
    "admin1_code": "IL"
  },
  {
    "geoname_id": "4898015",
    "name": "Joliet",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "147861",
    "admin1_code": "IL"
  },
  {
    "geoname_id": "5263045",
    "name": "Milwaukee",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "600155",
    "admin1_code": "WI"
  },
  {
    "geoname_id": "5336477",
    "name": "Chinatown",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "100574",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5350734",
    "name": "Fremont",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "232206",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5363748",
    "name": "Koreatown",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "124281",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5373900",
    "name": "Modesto",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "211266",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5405380",
    "name": "Vallejo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "121692",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5412347",
    "name": "Aurora",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "359407",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "1215957",
    "name": "Tirmiz",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "182800",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1513886",
    "name": "Jizzax",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "179200",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3629710",
    "name": "Puerto Ayacucho",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "125840",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3647637",
    "name": "Cabudare",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "102686",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1566319",
    "name": "Thái Nguyên",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "249004",
    "admin1_code": "85"
  },
  {
    "geoname_id": "1568574",
    "name": "Qui Nhon",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "210338",
    "admin1_code": "46"
  },
  {
    "geoname_id": "1580410",
    "name": "Hạ Long",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "148066",
    "admin1_code": "30"
  },
  {
    "geoname_id": "5174035",
    "name": "Toledo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "279789",
    "admin1_code": "OH"
  },
  {
    "geoname_id": "1016181",
    "name": "Brakpan",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "305692",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1018725",
    "name": "Bloemfontein",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "556000",
    "admin1_code": "03"
  },
  {
    "geoname_id": "884979",
    "name": "Mutare",
    "country_code": "ZW",
    "cou_name_en": "Zimbabwe",
    "population": "224802",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2755251",
    "name": "Groningen",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "233218",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1696710",
    "name": "Pagadian",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "186852",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1697175",
    "name": "Olongapo",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "221178",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1707267",
    "name": "Lapu-Lapu City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "350467",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1710914",
    "name": "Imus",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "216099",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1727995",
    "name": "Baliuag",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "135679",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1166548",
    "name": "Sahiwal",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "235695",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1168718",
    "name": "Okara",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "223648",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1175864",
    "name": "Jhelum",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "145000",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3515431",
    "name": "Tlalnepantla",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "653410",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3515807",
    "name": "Cuautitlán Izcalli",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "484573",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3992619",
    "name": "Piedras Negras",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "150178",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1028434",
    "name": "Quelimane",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "349842",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2324774",
    "name": "Port Harcourt",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "1865000",
    "admin1_code": "50"
  },
  {
    "geoname_id": "2337659",
    "name": "Ilobu",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "118089",
    "admin1_code": "42"
  },
  {
    "geoname_id": "2337704",
    "name": "Ilesa",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "277904",
    "admin1_code": "42"
  },
  {
    "geoname_id": "532096",
    "name": "Makhachkala",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "596356",
    "admin1_code": "17"
  },
  {
    "geoname_id": "532615",
    "name": "Lyubertsy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "154650",
    "admin1_code": "47"
  },
  {
    "geoname_id": "578740",
    "name": "Bataysk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "109962",
    "admin1_code": "61"
  },
  {
    "geoname_id": "1497543",
    "name": "Nizhnevartovsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "244937",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1504682",
    "name": "Kansk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "101502",
    "admin1_code": "91"
  },
  {
    "geoname_id": "6418146",
    "name": "Chertanovo Yuzhnoye",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "142000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "380148",
    "name": "El Daein",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "264734",
    "admin1_code": "60"
  },
  {
    "geoname_id": "2675408",
    "name": "Sollentuna",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "139606",
    "admin1_code": "26"
  },
  {
    "geoname_id": "2686657",
    "name": "Örebro",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "155989",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2246678",
    "name": "Pikine",
    "country_code": "SN",
    "cou_name_en": "Senegal",
    "population": "874062",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2250805",
    "name": "Kaolack",
    "country_code": "SN",
    "cou_name_en": "Senegal",
    "population": "172305",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2253354",
    "name": "Dakar",
    "country_code": "SN",
    "cou_name_en": "Senegal",
    "population": "2476400",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3583334",
    "name": "Santa Ana",
    "country_code": "SV",
    "cou_name_en": "El Salvador",
    "population": "176661",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3099424",
    "name": "Gdynia",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "244969",
    "admin1_code": "82"
  },
  {
    "geoname_id": "11048319",
    "name": "Sector 3",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "385439",
    "admin1_code": "10"
  },
  {
    "geoname_id": "751077",
    "name": "Bandırma",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "107631",
    "admin1_code": "10"
  },
  {
    "geoname_id": "6947641",
    "name": "Büyükçekmece",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "163140",
    "admin1_code": "34"
  },
  {
    "geoname_id": "148730",
    "name": "Zanzibar",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "403658",
    "admin1_code": "25"
  },
  {
    "geoname_id": "3620381",
    "name": "Chinandega",
    "country_code": "NI",
    "cou_name_en": "Nicaragua",
    "population": "126387",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1179400",
    "name": "Faisalabad",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "2506595",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2341355",
    "name": "Gbongan",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "139485",
    "admin1_code": "42"
  },
  {
    "geoname_id": "8400694",
    "name": "Taizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1485502",
    "admin1_code": "02"
  },
  {
    "geoname_id": "8403616",
    "name": "Pailou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "104351",
    "admin1_code": "33"
  },
  {
    "geoname_id": "10942283",
    "name": "Jinzhong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1226617",
    "admin1_code": "24"
  },
  {
    "geoname_id": "12022102",
    "name": "Tumxuk",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "135727",
    "admin1_code": "13"
  },
  {
    "geoname_id": "12324556",
    "name": "Shizuishan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "472472",
    "admin1_code": "21"
  },
  {
    "geoname_id": "2392204",
    "name": "Parakou",
    "country_code": "BJ",
    "cou_name_en": "Benin",
    "population": "163753",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3399415",
    "name": "Fortaleza",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "2400000",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3449433",
    "name": "Santos",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "433656",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3454783",
    "name": "Patos de Minas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "126234",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3458131",
    "name": "Mairiporã",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "101937",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3463030",
    "name": "Foz do Iguaçu",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "258248",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3468376",
    "name": "Cachoeiro de Itapemirim",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "187019",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3662574",
    "name": "Rio Branco",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "419452",
    "admin1_code": "01"
  },
  {
    "geoname_id": "6119109",
    "name": "Regina",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "176183",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1783633",
    "name": "Zoucheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "277400",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1784178",
    "name": "Zhoucun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "122402",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1787323",
    "name": "Yangshuo",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "300000",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1793700",
    "name": "Taishan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "145440",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1797658",
    "name": "Jinjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1416151",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1798425",
    "name": "Puyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3590000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1805611",
    "name": "Jingmen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "632954",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1806881",
    "name": "Huicheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "125919",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1807234",
    "name": "Huangshi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "688090",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1807700",
    "name": "Huaibei",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1113321",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1808770",
    "name": "Hebi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "634721",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2038300",
    "name": "Benxi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "987717",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2038679",
    "name": "Acheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "144665",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2912621",
    "name": "Hagen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "198972",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3204541",
    "name": "Banja Luka",
    "country_code": "BA",
    "cou_name_en": "Bosnia and Herzegovina",
    "population": "221106",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1336144",
    "name": "Tāngāil",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "180144",
    "admin1_code": "81"
  },
  {
    "geoname_id": "2803138",
    "name": "Antwerpen",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "529247",
    "admin1_code": "VLG"
  },
  {
    "geoname_id": "1793879",
    "name": "Suizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "618582",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1794060",
    "name": "Songcheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "165730",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2753801",
    "name": "Hoofddorp",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "132734",
    "admin1_code": "07"
  },
  {
    "geoname_id": "288764",
    "name": "Bawshar",
    "country_code": "OM",
    "cou_name_en": "Oman",
    "population": "383257",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3698304",
    "name": "Chimbote",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "316966",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3928245",
    "name": "Santiago de Surco",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "251648",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3941584",
    "name": "Cusco",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "428450",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1698829",
    "name": "Naga",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "174931",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1699802",
    "name": "Meycauayan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "184839",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1169607",
    "name": "Muzaffarābād",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "725000",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3088825",
    "name": "Płock",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "127474",
    "admin1_code": "78"
  },
  {
    "geoname_id": "281133",
    "name": "Gaza",
    "country_code": "PS",
    "cou_name_en": "West Bank and Gaza Strip",
    "population": "410000",
    "admin1_code": "GZ"
  },
  {
    "geoname_id": "2264268",
    "name": "Queluz",
    "country_code": "PT",
    "cou_name_en": "Portugal",
    "population": "103399",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3439389",
    "name": "Asunción",
    "country_code": "PY",
    "cou_name_en": "Paraguay",
    "population": "1482200",
    "admin1_code": "22"
  },
  {
    "geoname_id": "484912",
    "name": "Taganskiy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "116000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "3522732",
    "name": "Nicolás Romero",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "281799",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3827408",
    "name": "Miguel Hidalgo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "372889",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3982912",
    "name": "Soledad de Graciano Sánchez",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "332072",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1732687",
    "name": "Batu Pahat",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "156236",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1732869",
    "name": "Muar",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "127897",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1732905",
    "name": "Klang",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "879867",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2331140",
    "name": "Makurdi",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "292645",
    "admin1_code": "26"
  },
  {
    "geoname_id": "582432",
    "name": "Al’met’yevsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "140437",
    "admin1_code": "73"
  },
  {
    "geoname_id": "1486209",
    "name": "Yekaterinburg",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1495066",
    "admin1_code": "71"
  },
  {
    "geoname_id": "1493467",
    "name": "Rubtsovsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "161065",
    "admin1_code": "04"
  },
  {
    "geoname_id": "8504948",
    "name": "Petrogradka",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "130455",
    "admin1_code": "66"
  },
  {
    "geoname_id": "108648",
    "name": "Qurayyat",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "102903",
    "admin1_code": "20"
  },
  {
    "geoname_id": "109353",
    "name": "Al Kharj",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "425300",
    "admin1_code": "10"
  },
  {
    "geoname_id": "110336",
    "name": "Dammam",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "1252523",
    "admin1_code": "06"
  },
  {
    "geoname_id": "110690",
    "name": "Abha",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "210886",
    "admin1_code": "11"
  },
  {
    "geoname_id": "724443",
    "name": "Košice",
    "country_code": "SK",
    "cou_name_en": "Slovakia",
    "population": "228249",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1221874",
    "name": "Dushanbe",
    "country_code": "TJ",
    "cou_name_en": "Tajikistan",
    "population": "679400",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1218667",
    "name": "Mary",
    "country_code": "TM",
    "cou_name_en": "Turkmenistan",
    "population": "114680",
    "admin1_code": "05"
  },
  {
    "geoname_id": "307084",
    "name": "Kızıltepe",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "150174",
    "admin1_code": "72"
  },
  {
    "geoname_id": "314830",
    "name": "Gaziantep",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "1808948",
    "admin1_code": "83"
  },
  {
    "geoname_id": "442301",
    "name": "Batikent",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "300000",
    "admin1_code": "68"
  },
  {
    "geoname_id": "738618",
    "name": "Turhal",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "110884",
    "admin1_code": "60"
  },
  {
    "geoname_id": "6947637",
    "name": "Ataşehir",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "361615",
    "admin1_code": "34"
  },
  {
    "geoname_id": "7628416",
    "name": "Sultangazi",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "436935",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1668875",
    "name": "Shulin",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "180044",
    "admin1_code": "03"
  },
  {
    "geoname_id": "500004",
    "name": "Rybinsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "216724",
    "admin1_code": "88"
  },
  {
    "geoname_id": "503550",
    "name": "Pyatigorsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "142865",
    "admin1_code": "70"
  },
  {
    "geoname_id": "515879",
    "name": "Oktyabrsky",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "108200",
    "admin1_code": "08"
  },
  {
    "geoname_id": "517121",
    "name": "Novyye Kuz’minki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "143000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "520068",
    "name": "Noginsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "115979",
    "admin1_code": "47"
  },
  {
    "geoname_id": "532288",
    "name": "Magnitogorsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "413351",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2745912",
    "name": "Utrecht",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "361742",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2747351",
    "name": "'s-Hertogenbosch",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "134520",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1173055",
    "name": "Kotli",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "640000",
    "admin1_code": "06"
  },
  {
    "geoname_id": "5231851",
    "name": "Sioux Falls",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "171544",
    "admin1_code": "SD"
  },
  {
    "geoname_id": "5282804",
    "name": "Bridgeport",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "147629",
    "admin1_code": "CT"
  },
  {
    "geoname_id": "5313457",
    "name": "Scottsdale",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "236839",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5387877",
    "name": "Riverside",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "322424",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5780026",
    "name": "Provo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "115264",
    "admin1_code": "UT"
  },
  {
    "geoname_id": "3631412",
    "name": "Ocumare del Tuy",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "166072",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3649017",
    "name": "Araure",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "181820",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1580830",
    "name": "Hòa Bình",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "105260",
    "admin1_code": "53"
  },
  {
    "geoname_id": "1588275",
    "name": "Bảo Lộc",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "151915",
    "admin1_code": "23"
  },
  {
    "geoname_id": "706369",
    "name": "Khmelnytskyi",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "274582",
    "admin1_code": "09"
  },
  {
    "geoname_id": "230166",
    "name": "Lira",
    "country_code": "UG",
    "cou_name_en": "Uganda",
    "population": "119323",
    "admin1_code": "N"
  },
  {
    "geoname_id": "4076598",
    "name": "Mobile",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "194288",
    "admin1_code": "AL"
  },
  {
    "geoname_id": "4466033",
    "name": "Fayetteville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "201963",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "946877",
    "name": "Uitenhage",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "228912",
    "admin1_code": "05"
  },
  {
    "geoname_id": "690548",
    "name": "Uzhgorod",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "115449",
    "admin1_code": "25"
  },
  {
    "geoname_id": "3403642",
    "name": "Campina Grande",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "348936",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3445782",
    "name": "Umuarama",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "107319",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3448622",
    "name": "São Leopoldo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "209229",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3448877",
    "name": "São João de Meriti",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "454849",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3456166",
    "name": "Nova Friburgo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "191158",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3460102",
    "name": "Jaraguá do Sul",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "130130",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3469058",
    "name": "Brasília",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "2207718",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3471766",
    "name": "Araraquara",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "168468",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3472766",
    "name": "Alagoinhas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "122688",
    "admin1_code": "05"
  },
  {
    "geoname_id": "11184422",
    "name": "Planaltina",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "189412",
    "admin1_code": "07"
  },
  {
    "geoname_id": "6141256",
    "name": "Saskatoon",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "198958",
    "admin1_code": "11"
  },
  {
    "geoname_id": "6169141",
    "name": "Trois-Rivières",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "119693",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2389853",
    "name": "Bangui",
    "country_code": "CF",
    "cou_name_en": "Central African Republic",
    "population": "542393",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3547867",
    "name": "Manzanillo",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "128188",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2954172",
    "name": "Augsburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "259196",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2477461",
    "name": "Tébessa",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "634332",
    "admin1_code": "33"
  },
  {
    "geoname_id": "2491889",
    "name": "Khenchela",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "117000",
    "admin1_code": "47"
  },
  {
    "geoname_id": "2495662",
    "name": "Guelma",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "123590",
    "admin1_code": "23"
  },
  {
    "geoname_id": "2506999",
    "name": "Annaba",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "206570",
    "admin1_code": "37"
  },
  {
    "geoname_id": "3654667",
    "name": "Loja",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "274112",
    "admin1_code": "12"
  },
  {
    "geoname_id": "360502",
    "name": "Luxor",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "422407",
    "admin1_code": "28"
  },
  {
    "geoname_id": "360686",
    "name": "Al Minyā",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "283605",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2518559",
    "name": "Elche",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "230112",
    "admin1_code": "60"
  },
  {
    "geoname_id": "2519752",
    "name": "Castelló de la Plana",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "180005",
    "admin1_code": "60"
  },
  {
    "geoname_id": "2521886",
    "name": "Almería",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "188810",
    "admin1_code": "51"
  },
  {
    "geoname_id": "3116156",
    "name": "Moratalaz",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "104923",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6544105",
    "name": "Sant Martí",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "235719",
    "admin1_code": "56"
  },
  {
    "geoname_id": "338832",
    "name": "Dire Dawa",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "277000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "339219",
    "name": "Desē",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "257126",
    "admin1_code": "46"
  },
  {
    "geoname_id": "3887127",
    "name": "Iquique",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "191468",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3895088",
    "name": "Chillán",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "150396",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1279945",
    "name": "Jiuquan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "428346",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1783763",
    "name": "Zhuzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1129687",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1783940",
    "name": "Zhuji",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "110721",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1787746",
    "name": "Yancheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1615717",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1788852",
    "name": "Xining",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1677177",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1793424",
    "name": "Tanggu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "535298",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1795940",
    "name": "Shantou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3838900",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1796068",
    "name": "Shangluo",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "531696",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1798449",
    "name": "Putian",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1539389",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1800657",
    "name": "Mentougou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "197772",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1801401",
    "name": "Majie",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "131696",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1801640",
    "name": "Luzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "998900",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1801799",
    "name": "Luoyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "123144",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1804386",
    "name": "Laohekou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "253112",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1804430",
    "name": "Lanzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3000000",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1805844",
    "name": "Jieshou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "141993",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1808316",
    "name": "Yiyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1249807",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1808336",
    "name": "Hepo",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "131238",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1815059",
    "name": "Chenzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "822534",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1816269",
    "name": "Baise",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "686078",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1886760",
    "name": "Suzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "6715559",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2034937",
    "name": "Shenyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "7050000",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2036670",
    "name": "Hulan Ergi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "265344",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2037335",
    "name": "Fuyu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "138704",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2037860",
    "name": "Daqing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1604027",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2852458",
    "name": "Potsdam",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "182112",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2874225",
    "name": "Mainz",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "217123",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2907669",
    "name": "Heilbronn",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "120733",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2911298",
    "name": "Hamburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "1845229",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2172517",
    "name": "Canberra",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "367752",
    "admin1_code": "01"
  },
  {
    "geoname_id": "248946",
    "name": "Irbid",
    "country_code": "JO",
    "cou_name_en": "Jordan",
    "population": "569068",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1849837",
    "name": "Toyonaka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "384459",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1854083",
    "name": "Ōmuta",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "131974",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1855207",
    "name": "Nishinomiya-hama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "468925",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1857843",
    "name": "Maebashi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "282711",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1860672",
    "name": "Kamakura",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "172929",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2112664",
    "name": "Ichihara",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "283531",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2130203",
    "name": "Hachinohe",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "239046",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2130658",
    "name": "Aomori",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "298394",
    "admin1_code": "03"
  },
  {
    "geoname_id": "189386",
    "name": "Limuru",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "159314",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1527534",
    "name": "Osh",
    "country_code": "KG",
    "cou_name_en": "Kyrgyzstan",
    "population": "322164",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1528675",
    "name": "Bishkek",
    "country_code": "KG",
    "cou_name_en": "Kyrgyzstan",
    "population": "900000",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2042893",
    "name": "Manp’o",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "116760",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1835648",
    "name": "Suncheon",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "230796",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1842025",
    "name": "Gunsan",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "243406",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1520172",
    "name": "Petropavl",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "200920",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2984114",
    "name": "Reims",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "196565",
    "admin1_code": "44"
  },
  {
    "geoname_id": "3024635",
    "name": "Clermont-Ferrand",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "147865",
    "admin1_code": "84"
  },
  {
    "geoname_id": "2964574",
    "name": "Dublin",
    "country_code": "IE",
    "cou_name_en": "Ireland",
    "population": "1024027",
    "admin1_code": "L"
  },
  {
    "geoname_id": "1256287",
    "name": "Silchar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "152393",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1257055",
    "name": "Satara",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "112793",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1257629",
    "name": "Salem",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "917414",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1261045",
    "name": "Ongole",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "172872",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1262180",
    "name": "Nagpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "2228018",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1262204",
    "name": "Nāgercoil",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "224849",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1266285",
    "name": "Kolhāpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "516142",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1273780",
    "name": "Cuttack",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "580000",
    "admin1_code": "21"
  },
  {
    "geoname_id": "8223943",
    "name": "Kumarapalayam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "195071",
    "admin1_code": "25"
  },
  {
    "geoname_id": "124085",
    "name": "Mīāndoāb",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "132819",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2525473",
    "name": "Cagliari",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "149257",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3164419",
    "name": "Vicenza",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "111980",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3169921",
    "name": "Prato",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "195089",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2637627",
    "name": "Slough",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "164793",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2638671",
    "name": "Salford",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "129794",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2655095",
    "name": "Bournemouth",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "163600",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "261745",
    "name": "Irákleion",
    "country_code": "GR",
    "cou_name_en": "Greece",
    "population": "137154",
    "admin1_code": "ESYE43"
  },
  {
    "geoname_id": "3608248",
    "name": "La Ceiba",
    "country_code": "HN",
    "cou_name_en": "Honduras",
    "population": "222055",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3722286",
    "name": "Léogâne",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "134190",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1621177",
    "name": "Yogyakarta",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "373589",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1622786",
    "name": "Makassar",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1423877",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1626542",
    "name": "Sorong",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "254294",
    "admin1_code": "PD"
  },
  {
    "geoname_id": "1627253",
    "name": "Sidoarjo",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "139189",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1630328",
    "name": "Purwokerto",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "230235",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1632353",
    "name": "Parepare",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "151454",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1640660",
    "name": "Kediri",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "235143",
    "admin1_code": "08"
  },
  {
    "geoname_id": "933945",
    "name": "Vacoas",
    "country_code": "MU",
    "cou_name_en": "Mauritius",
    "population": "115289",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3514663",
    "name": "Álvaro Obregón",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "726664",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3514670",
    "name": "Villahermosa",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "353577",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3171058",
    "name": "Piacenza",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "103607",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3171728",
    "name": "Padova",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "203725",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2634491",
    "name": "West Bromwich",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "135618",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2634838",
    "name": "Walthamstow",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "109424",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2636389",
    "name": "Swindon",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "201669",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "3590979",
    "name": "Quetzaltenango",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "180706",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2395049",
    "name": "Bohicon",
    "country_code": "BJ",
    "cou_name_en": "Benin",
    "population": "125092",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3444876",
    "name": "Volta Redonda",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "249580",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3446606",
    "name": "Teresópolis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "123979",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3447186",
    "name": "Taboão da Serra",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "214523",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3447624",
    "name": "Sete Lagoas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "201334",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3452324",
    "name": "Presidente Prudente",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "209502",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3461888",
    "name": "Guarapari",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "100925",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3462377",
    "name": "Goiânia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "1536097",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3466779",
    "name": "Cascavel",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "257172",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3571824",
    "name": "Nassau",
    "country_code": "BS",
    "cou_name_en": "Bahamas",
    "population": "227940",
    "admin1_code": "23"
  },
  {
    "geoname_id": "6050610",
    "name": "Laval",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "422993",
    "admin1_code": "10"
  },
  {
    "geoname_id": "209228",
    "name": "Mbuji-Mayi",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "874761",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1792621",
    "name": "Tongling",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "402062",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1795928",
    "name": "Shanwei",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "491766",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1798972",
    "name": "Peicheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "195363",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1800130",
    "name": "Nancun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "124210",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1801934",
    "name": "Luohe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1294974",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1804120",
    "name": "Lianjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "100341",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1804651",
    "name": "Kunming",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3855346",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1805029",
    "name": "Jizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "362013",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1805857",
    "name": "Jieshi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "137444",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1806602",
    "name": "Cixi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1457510",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1808857",
    "name": "Hanzhong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1006557",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1809858",
    "name": "Guangzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "16096724",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1812521",
    "name": "Donghai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "264709",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2033413",
    "name": "Yichun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "155762",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3837056",
    "name": "San Luis",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "169947",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1336137",
    "name": "Barishal",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "202242",
    "admin1_code": "85"
  },
  {
    "geoname_id": "6545349",
    "name": "Saidpur",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "199422",
    "admin1_code": "87"
  },
  {
    "geoname_id": "3871336",
    "name": "Santiago",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "4837295",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3884373",
    "name": "La Serena",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "154521",
    "admin1_code": "07"
  },
  {
    "geoname_id": "7281017",
    "name": "La Pintana",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "201178",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2223763",
    "name": "Nkongsamba",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "117063",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2229798",
    "name": "Kousséri",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "435547",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1783621",
    "name": "Zunyi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2037775",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1784130",
    "name": "Zhoukou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "505171",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1784990",
    "name": "Zhanjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1400709",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1786546",
    "name": "Zhongxiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "108883",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1787901",
    "name": "Xunchang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "118664",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1790371",
    "name": "Xiantao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "239406",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1791272",
    "name": "Wugang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "132457",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1791388",
    "name": "Wenzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2650000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3188582",
    "name": "Tuzla",
    "country_code": "BA",
    "cou_name_en": "Bosnia and Herzegovina",
    "population": "142486",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2497411",
    "name": "El Oued",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "134699",
    "admin1_code": "43"
  },
  {
    "geoname_id": "3658192",
    "name": "Eloy Alfaro",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "315724",
    "admin1_code": "10"
  },
  {
    "geoname_id": "350550",
    "name": "Qinā",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "252883",
    "admin1_code": "23"
  },
  {
    "geoname_id": "358172",
    "name": "Dikirnis",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "137542",
    "admin1_code": "01"
  },
  {
    "geoname_id": "359212",
    "name": "Banī Mazār",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "115759",
    "admin1_code": "10"
  },
  {
    "geoname_id": "362973",
    "name": "Abnūb",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "111785",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3110876",
    "name": "Sant Andreu",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "147732",
    "admin1_code": "56"
  },
  {
    "geoname_id": "3118150",
    "name": "Logroño",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "152485",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3129028",
    "name": "Badalona",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "219547",
    "admin1_code": "56"
  },
  {
    "geoname_id": "6544493",
    "name": "Carabanchel",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "253678",
    "admin1_code": "29"
  },
  {
    "geoname_id": "328689",
    "name": "Shashemenē",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "208368",
    "admin1_code": "51"
  },
  {
    "geoname_id": "2972315",
    "name": "Toulouse",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "493465",
    "admin1_code": "76"
  },
  {
    "geoname_id": "8555643",
    "name": "Cergy-Pontoise",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "183430",
    "admin1_code": "11"
  },
  {
    "geoname_id": "8416218",
    "name": "Lizhi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "156753",
    "admin1_code": "33"
  },
  {
    "geoname_id": "8416933",
    "name": "Huixing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "186972",
    "admin1_code": "33"
  },
  {
    "geoname_id": "12450887",
    "name": "Shuanglonghu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "128563",
    "admin1_code": "33"
  },
  {
    "geoname_id": "2849647",
    "name": "Recklinghausen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "122438",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2860410",
    "name": "Oberhausen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "219176",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2867714",
    "name": "Munich",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "1260391",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2892794",
    "name": "Karlsruhe",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "283799",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2411989",
    "name": "Serekunda",
    "country_code": "GM",
    "cou_name_en": "Gambia",
    "population": "340000",
    "admin1_code": "01"
  },
  {
    "geoname_id": "258576",
    "name": "Lárisa",
    "country_code": "GR",
    "cou_name_en": "Greece",
    "population": "146926",
    "admin1_code": "ESYE14"
  },
  {
    "geoname_id": "2641022",
    "name": "Oldham",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "237110",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2641674",
    "name": "Newcastle under Lyme",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "129441",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2842150",
    "name": "Salzgitter",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "103866",
    "admin1_code": "06"
  },
  {
    "geoname_id": "5059163",
    "name": "Fargo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "118523",
    "admin1_code": "ND"
  },
  {
    "geoname_id": "5140405",
    "name": "Syracuse",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "144142",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5308655",
    "name": "Phoenix",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "1608139",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5334223",
    "name": "Carlsbad",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "114746",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5346827",
    "name": "Escondido",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "151451",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5509952",
    "name": "Paradise",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "223167",
    "admin1_code": "NV"
  },
  {
    "geoname_id": "5512909",
    "name": "Spring Valley",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "178395",
    "admin1_code": "NV"
  },
  {
    "geoname_id": "1512473",
    "name": "Urganch",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "145000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1513131",
    "name": "Navoiy",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "144158",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3626219",
    "name": "Tinaquillo",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "115937",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3640049",
    "name": "Guarenas",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "248588",
    "admin1_code": "15"
  },
  {
    "geoname_id": "685948",
    "name": "Bacău",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "171396",
    "admin1_code": "04"
  },
  {
    "geoname_id": "468902",
    "name": "Yaroslavl",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "608722",
    "admin1_code": "88"
  },
  {
    "geoname_id": "483551",
    "name": "Tyoply Stan",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "125000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "484646",
    "name": "Tambov",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "293661",
    "admin1_code": "72"
  },
  {
    "geoname_id": "3182164",
    "name": "Bergamo",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "121200",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3182884",
    "name": "Arezzo",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "100734",
    "admin1_code": "16"
  },
  {
    "geoname_id": "7838895",
    "name": "Russeifa",
    "country_code": "JO",
    "cou_name_en": "Jordan",
    "population": "268237",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1849796",
    "name": "Tsu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "163461",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1853909",
    "name": "Osaka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "2753862",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1855425",
    "name": "Niihama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "123059",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1857553",
    "name": "Matsudo",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "498575",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1860243",
    "name": "Kanazawa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "466029",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1861310",
    "name": "Itami",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "197335",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1863905",
    "name": "Honchō",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "644668",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1864518",
    "name": "Chōfu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "212977",
    "admin1_code": "40"
  },
  {
    "geoname_id": "2112141",
    "name": "Kōriyama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "322996",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2113015",
    "name": "Chiba",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "979768",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2128295",
    "name": "Sapporo",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "1973832",
    "admin1_code": "12"
  },
  {
    "geoname_id": "198629",
    "name": "Eldoret",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "475716",
    "admin1_code": "52"
  },
  {
    "geoname_id": "1528249",
    "name": "Jalal-Abad",
    "country_code": "KG",
    "cou_name_en": "Kyrgyzstan",
    "population": "123239",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1839071",
    "name": "Pohang",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "500000",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1841066",
    "name": "Mokpo",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "268402",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1842225",
    "name": "Gumi",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "427770",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1842943",
    "name": "Kimhae",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "550758",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1845759",
    "name": "Cheonan",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "666417",
    "admin1_code": "17"
  },
  {
    "geoname_id": "2210221",
    "name": "Tarhuna",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "210697",
    "admin1_code": "82"
  },
  {
    "geoname_id": "3523466",
    "name": "Heroica Matamoros",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "449815",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3985606",
    "name": "San Luis Potosí",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "722772",
    "admin1_code": "24"
  },
  {
    "geoname_id": "4012176",
    "name": "Culiacán",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "808416",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1732811",
    "name": "Kluang",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "169828",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2319668",
    "name": "Uromi",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "108608",
    "admin1_code": "37"
  },
  {
    "geoname_id": "2327220",
    "name": "Okene",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "479178",
    "admin1_code": "41"
  },
  {
    "geoname_id": "2328684",
    "name": "Nsukka",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "111017",
    "admin1_code": "47"
  },
  {
    "geoname_id": "2335727",
    "name": "Kaduna",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "1582102",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1252797",
    "name": "Yamunānagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "208931",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1255783",
    "name": "Rajpur Sonarpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "424368",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1256052",
    "name": "Sirsa",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "181639",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1258932",
    "name": "Rājahmundry",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "376333",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1259411",
    "name": "Ponnāni",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "105512",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1260086",
    "name": "Patna",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1599920",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1260728",
    "name": "Palakkad",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "132728",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1267995",
    "name": "Kanpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "2823249",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1269388",
    "name": "Jalpāiguri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "107832",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1269743",
    "name": "Indore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1837041",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1269910",
    "name": "Hugli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "177005",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1270484",
    "name": "Hālīsahar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "128172",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1270670",
    "name": "Guntakal Junction",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "120964",
    "admin1_code": "02"
  },
  {
    "geoname_id": "140044",
    "name": "Borūjerd",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "251958",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1819729",
    "name": "Hong Kong",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "7482500",
    "admin1_code": "HCW"
  },
  {
    "geoname_id": "1819873",
    "name": "Fanling",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "263200",
    "admin1_code": "NNO"
  },
  {
    "geoname_id": "3718962",
    "name": "Tigwav",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "117504",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3719028",
    "name": "Pétionville",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "283052",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1214369",
    "name": "Padangsidempuan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "225105",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1631761",
    "name": "Pekanbaru",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1085000",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1636722",
    "name": "Malang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "843810",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1647149",
    "name": "Ciamis",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "109839",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1650227",
    "name": "Banjaran",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "164952",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1963770",
    "name": "Padalarang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "184182",
    "admin1_code": "30"
  },
  {
    "geoname_id": "515003",
    "name": "Orenburg",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "564773",
    "admin1_code": "55"
  },
  {
    "geoname_id": "551487",
    "name": "Kazan",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1243500",
    "admin1_code": "73"
  },
  {
    "geoname_id": "560465",
    "name": "Gol’yanovo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "158000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "1488754",
    "name": "Tyumen",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "768358",
    "admin1_code": "78"
  },
  {
    "geoname_id": "1490624",
    "name": "Surgut",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "300367",
    "admin1_code": "32"
  },
  {
    "geoname_id": "202061",
    "name": "Kigali",
    "country_code": "RW",
    "cou_name_en": "Rwanda",
    "population": "1132686",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1608048",
    "name": "Pak Kret",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "182926",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1608133",
    "name": "Mueang Nonthaburi",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "254375",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1614295",
    "name": "Pattaya",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "119532",
    "admin1_code": "46"
  },
  {
    "geoname_id": "786714",
    "name": "Pristina",
    "country_code": "XK",
    "cou_name_en": "None",
    "population": "550000",
    "admin1_code": "10097360"
  },
  {
    "geoname_id": "911148",
    "name": "Kitwe",
    "country_code": "ZM",
    "cou_name_en": "Zambia",
    "population": "400914",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1106542",
    "name": "Chitungwiza",
    "country_code": "ZW",
    "cou_name_en": "Zimbabwe",
    "population": "371244",
    "admin1_code": "10"
  },
  {
    "geoname_id": "710791",
    "name": "Cherkasy",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "272651",
    "admin1_code": "01"
  },
  {
    "geoname_id": "311111",
    "name": "İskenderun",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "159965",
    "admin1_code": "31"
  },
  {
    "geoname_id": "316541",
    "name": "Diyarbakır",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "1791373",
    "admin1_code": "21"
  },
  {
    "geoname_id": "748208",
    "name": "Derince",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "125485",
    "admin1_code": "41"
  },
  {
    "geoname_id": "750516",
    "name": "Bolu",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "184682",
    "admin1_code": "14"
  },
  {
    "geoname_id": "281184",
    "name": "Jerusalem",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "971800",
    "admin1_code": "06"
  },
  {
    "geoname_id": "510808",
    "name": "Pervouralsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "133600",
    "admin1_code": "71"
  },
  {
    "geoname_id": "157738",
    "name": "Kigoma",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "164268",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2339631",
    "name": "Hadejia",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "110753",
    "admin1_code": "39"
  },
  {
    "geoname_id": "2344082",
    "name": "Ebute Ikorodu",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "535619",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2347283",
    "name": "Benin City",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "1782000",
    "admin1_code": "37"
  },
  {
    "geoname_id": "2347954",
    "name": "Bama",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "118121",
    "admin1_code": "27"
  },
  {
    "geoname_id": "8411054",
    "name": "Madhyapur Thimi",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "119955",
    "admin1_code": "3"
  },
  {
    "geoname_id": "2187404",
    "name": "Manukau City",
    "country_code": "NZ",
    "cou_name_en": "New Zealand",
    "population": "362000",
    "admin1_code": "E7"
  },
  {
    "geoname_id": "1683881",
    "name": "Talisay",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "133148",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1713022",
    "name": "General Santos",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "679588",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1716771",
    "name": "Cotabato",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "325079",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1729564",
    "name": "Bacolod City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "454898",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1170295",
    "name": "Mirpur Khas",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "215657",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3515463",
    "name": "Tláhuac",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "305076",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3517270",
    "name": "Santa María Chimalhuacán",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "612383",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3519537",
    "name": "San Cristóbal de las Casas",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "158027",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3521168",
    "name": "Poza Rica de Hidalgo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "185242",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3523760",
    "name": "Magdalena Contreras",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "238431",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3526798",
    "name": "Iguala de la Independencia",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "118468",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3984583",
    "name": "Santa Catarina",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "268347",
    "admin1_code": "19"
  },
  {
    "geoname_id": "4000900",
    "name": "La Paz",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "250141",
    "admin1_code": "03"
  },
  {
    "geoname_id": "4018390",
    "name": "Ciudad Apodaca",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "467157",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1732752",
    "name": "Johor Bahru",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "858118",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1735076",
    "name": "Butterworth",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "107591",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1764160",
    "name": "Kampung Sungai Ara",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "140849",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1026014",
    "name": "Tete",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "305722",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2325330",
    "name": "Owerri",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "215038",
    "admin1_code": "28"
  },
  {
    "geoname_id": "2336905",
    "name": "Iwo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "250443",
    "admin1_code": "42"
  },
  {
    "geoname_id": "2338403",
    "name": "Ijebu-Igbo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "109261",
    "admin1_code": "16"
  },
  {
    "geoname_id": "250090",
    "name": "Zarqa",
    "country_code": "JO",
    "cou_name_en": "Jordan",
    "population": "792665",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1848373",
    "name": "Yokkaichi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "295841",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1850152",
    "name": "Tokuyama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "101133",
    "admin1_code": "45"
  },
  {
    "geoname_id": "1856584",
    "name": "Moriguchi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "142655",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1856977",
    "name": "Mishima",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "107851",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1859393",
    "name": "Kisarazu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "136023",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1859924",
    "name": "Kashiwa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "433436",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2111684",
    "name": "Narita",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "100641",
    "admin1_code": "04"
  },
  {
    "geoname_id": "6825489",
    "name": "Jōetsu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "189430",
    "admin1_code": "29"
  },
  {
    "geoname_id": "181032",
    "name": "Ruiru",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "490120",
    "admin1_code": "22"
  },
  {
    "geoname_id": "184622",
    "name": "Nakuru",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "259903",
    "admin1_code": "39"
  },
  {
    "geoname_id": "1833105",
    "name": "Wŏnju",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "332849",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1516905",
    "name": "Taraz",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "358153",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1526273",
    "name": "Astana",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "345604",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1276895",
    "name": "Barnāla",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "105016",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1279344",
    "name": "Ādilābād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "118526",
    "admin1_code": "40"
  },
  {
    "geoname_id": "7302828",
    "name": "Malkajgiri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "150000",
    "admin1_code": "40"
  },
  {
    "geoname_id": "12165956",
    "name": "Kallakurichi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1682687",
    "admin1_code": "25"
  },
  {
    "geoname_id": "90708",
    "name": "Sīnah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "128776",
    "admin1_code": "08"
  },
  {
    "geoname_id": "96994",
    "name": "Dihok",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "340900",
    "admin1_code": "08"
  },
  {
    "geoname_id": "116402",
    "name": "Semnan",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "124826",
    "admin1_code": "25"
  },
  {
    "geoname_id": "143083",
    "name": "Ardabīl",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "410753",
    "admin1_code": "32"
  },
  {
    "geoname_id": "10630176",
    "name": "Pasragad Branch",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "787878",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3165771",
    "name": "Terni",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "111189",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3600949",
    "name": "Tegucigalpa",
    "country_code": "HN",
    "cou_name_en": "Honduras",
    "population": "850848",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3050434",
    "name": "Kecskemét",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "109847",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1214882",
    "name": "Kisaran",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "141915",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1625958",
    "name": "Sungailiat",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "100750",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1626103",
    "name": "Sumedang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "200000",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1632937",
    "name": "Pamulang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "174557",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1636022",
    "name": "Martapura",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "131449",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1649378",
    "name": "Bekasi",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "2564940",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1649593",
    "name": "Baturaja",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "134759",
    "admin1_code": "32"
  },
  {
    "geoname_id": "456172",
    "name": "Riga",
    "country_code": "LV",
    "cou_name_en": "Latvia",
    "population": "742572",
    "admin1_code": "25"
  },
  {
    "geoname_id": "2212771",
    "name": "Şabrātah",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "102038",
    "admin1_code": "68"
  },
  {
    "geoname_id": "2538475",
    "name": "Rabat",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "1655753",
    "admin1_code": "04"
  },
  {
    "geoname_id": "618605",
    "name": "Bălţi",
    "country_code": "MD",
    "cou_name_en": "Moldova, Republic of",
    "population": "125000",
    "admin1_code": "60"
  },
  {
    "geoname_id": "931755",
    "name": "Blantyre",
    "country_code": "MW",
    "cou_name_en": "Malawi",
    "population": "584877",
    "admin1_code": "S"
  },
  {
    "geoname_id": "2965140",
    "name": "Cork",
    "country_code": "IE",
    "cou_name_en": "Ireland",
    "population": "190384",
    "admin1_code": "M"
  },
  {
    "geoname_id": "1257804",
    "name": "Saharsa",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "145764",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1261977",
    "name": "Nanded",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "550564",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1265491",
    "name": "Kurnool",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "460184",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1268715",
    "name": "Kānchrāpāra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "136954",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1270583",
    "name": "Gwalior",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "882458",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1270927",
    "name": "Gorakhpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "674246",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1272423",
    "name": "Dombivli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1193000",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1273802",
    "name": "Cuddalore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "173636",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1274784",
    "name": "Chandannagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "180623",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1275701",
    "name": "Bijapur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "271064",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1275899",
    "name": "Bhiwāni",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "190855",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1276609",
    "name": "Begusarai",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "103060",
    "admin1_code": "34"
  },
  {
    "geoname_id": "3587902",
    "name": "Villa Nueva",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "618397",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1282931",
    "name": "Pātan",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "299283",
    "admin1_code": "3"
  },
  {
    "geoname_id": "1697018",
    "name": "Ormoc",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "191200",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1173664",
    "name": "Khuzdar",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "141227",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3090048",
    "name": "Opole",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "127676",
    "admin1_code": "79"
  },
  {
    "geoname_id": "3099434",
    "name": "Gdańsk",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "461865",
    "admin1_code": "82"
  },
  {
    "geoname_id": "4563243",
    "name": "Carolina",
    "country_code": "PR",
    "cou_name_en": "Puerto Rico",
    "population": "170404",
    "admin1_code": "031"
  },
  {
    "geoname_id": "2740637",
    "name": "Coimbra",
    "country_code": "PT",
    "cou_name_en": "Portugal",
    "population": "106582",
    "admin1_code": "07"
  },
  {
    "geoname_id": "681290",
    "name": "Cluj-Napoca",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "316748",
    "admin1_code": "13"
  },
  {
    "geoname_id": "685826",
    "name": "Baia Mare",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "136553",
    "admin1_code": "25"
  },
  {
    "geoname_id": "495344",
    "name": "Shchyolkovo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "113000",
    "admin1_code": "47"
  },
  {
    "geoname_id": "563523",
    "name": "Elektrostal’",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "144387",
    "admin1_code": "47"
  },
  {
    "geoname_id": "1510018",
    "name": "Biysk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "215430",
    "admin1_code": "04"
  },
  {
    "geoname_id": "8504951",
    "name": "Kalininskiy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "504641",
    "admin1_code": "66"
  },
  {
    "geoname_id": "101760",
    "name": "Sulţānah",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "946697",
    "admin1_code": "05"
  },
  {
    "geoname_id": "380174",
    "name": "Ad-Damazin",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "186051",
    "admin1_code": "42"
  },
  {
    "geoname_id": "3584257",
    "name": "Santa Tecla",
    "country_code": "SV",
    "cou_name_en": "El Salvador",
    "population": "124694",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1514891",
    "name": "Konibodom",
    "country_code": "TJ",
    "cou_name_en": "Tajikistan",
    "population": "211100",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1219649",
    "name": "Türkmenabat",
    "country_code": "TM",
    "cou_name_en": "Turkmenistan",
    "population": "234817",
    "admin1_code": "04"
  },
  {
    "geoname_id": "304531",
    "name": "Mersin",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "537842",
    "admin1_code": "32"
  },
  {
    "geoname_id": "747323",
    "name": "Esenyurt",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "211330",
    "admin1_code": "34"
  },
  {
    "geoname_id": "152224",
    "name": "Mwanza",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "436801",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3095049",
    "name": "Koszalin",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "107450",
    "admin1_code": "87"
  },
  {
    "geoname_id": "2743856",
    "name": "Zoetermeer",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "115845",
    "admin1_code": "11"
  },
  {
    "geoname_id": "706448",
    "name": "Kherson",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "283649",
    "admin1_code": "08"
  },
  {
    "geoname_id": "710735",
    "name": "Chernihiv",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "285234",
    "admin1_code": "02"
  },
  {
    "geoname_id": "4158928",
    "name": "Hollywood",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "149728",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4160021",
    "name": "Jacksonville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "954614",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4464368",
    "name": "Durham",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "257636",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "5295903",
    "name": "Gilbert",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "247542",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "7289169",
    "name": "Tri-Cities",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "244036",
    "admin1_code": "WA"
  },
  {
    "geoname_id": "1217662",
    "name": "Bukhara",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "280187",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3645854",
    "name": "Charallave",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "129182",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1566559",
    "name": "Tây Ninh",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "135254",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1567148",
    "name": "Tam Kỳ",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "165240",
    "admin1_code": "84"
  },
  {
    "geoname_id": "1583518",
    "name": "Dĩ An",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "474681",
    "admin1_code": "75"
  },
  {
    "geoname_id": "1584784",
    "name": "Cờ Đỏ",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "116576",
    "admin1_code": "87"
  },
  {
    "geoname_id": "1586357",
    "name": "Cẩm Phả Mines",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "135477",
    "admin1_code": "30"
  },
  {
    "geoname_id": "5107464",
    "name": "Astoria",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "150165",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5115985",
    "name": "East New York",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "173198",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5150529",
    "name": "Cleveland",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "388072",
    "admin1_code": "OH"
  },
  {
    "geoname_id": "8764562",
    "name": "Diepsloot",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "350000",
    "admin1_code": "06"
  },
  {
    "geoname_id": "693468",
    "name": "Sloviansk",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "106972",
    "admin1_code": "05"
  },
  {
    "geoname_id": "528293",
    "name": "Maykop",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "141970",
    "admin1_code": "01"
  },
  {
    "geoname_id": "563464",
    "name": "Engels",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "196011",
    "admin1_code": "67"
  },
  {
    "geoname_id": "579492",
    "name": "Balakovo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "199572",
    "admin1_code": "67"
  },
  {
    "geoname_id": "1503901",
    "name": "Kemerovo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "558973",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2013159",
    "name": "Yakutsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "235600",
    "admin1_code": "63"
  },
  {
    "geoname_id": "2013952",
    "name": "Ust’-Ilimsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "100271",
    "admin1_code": "20"
  },
  {
    "geoname_id": "379003",
    "name": "El Obeid",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "393311",
    "admin1_code": "56"
  },
  {
    "geoname_id": "2692969",
    "name": "Malmö",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "351749",
    "admin1_code": "27"
  },
  {
    "geoname_id": "2407790",
    "name": "Kenema",
    "country_code": "SL",
    "cou_name_en": "Sierra Leone",
    "population": "143137",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2427455",
    "name": "Moundou",
    "country_code": "TD",
    "cou_name_en": "Chad",
    "population": "135167",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1605239",
    "name": "Udon Thani",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "130531",
    "admin1_code": "76"
  },
  {
    "geoname_id": "738648",
    "name": "Trabzon",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "244083",
    "admin1_code": "61"
  },
  {
    "geoname_id": "741763",
    "name": "Maltepe",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "427040",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1675393",
    "name": "Xizhi",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "204619",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2944368",
    "name": "Bremerhaven",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "113557",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2624652",
    "name": "Århus",
    "country_code": "DK",
    "cou_name_en": "Denmark",
    "population": "285273",
    "admin1_code": "18"
  },
  {
    "geoname_id": "2503826",
    "name": "Biskra",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "307987",
    "admin1_code": "19"
  },
  {
    "geoname_id": "3660689",
    "name": "Ambato",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "387309",
    "admin1_code": "19"
  },
  {
    "geoname_id": "347907",
    "name": "Sinnūris",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "133532",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3111199",
    "name": "Sabadell",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "206493",
    "admin1_code": "56"
  },
  {
    "geoname_id": "6544491",
    "name": "Salamanca",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "147707",
    "admin1_code": "29"
  },
  {
    "geoname_id": "7064006",
    "name": "Tongchuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "417740",
    "admin1_code": "26"
  },
  {
    "geoname_id": "8537264",
    "name": "Huanggang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "366769",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3665900",
    "name": "Villavicencio",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "321717",
    "admin1_code": "19"
  },
  {
    "geoname_id": "3682516",
    "name": "Facatativá",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "141762",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3557689",
    "name": "Guantánamo",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "272801",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2994160",
    "name": "Metz",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "123914",
    "admin1_code": "44"
  },
  {
    "geoname_id": "3003796",
    "name": "Le Havre",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "185972",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3031582",
    "name": "Bordeaux",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "260958",
    "admin1_code": "75"
  },
  {
    "geoname_id": "294071",
    "name": "Netanya",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "228204",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1253237",
    "name": "Verāval",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "163326",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1253315",
    "name": "Vejalpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "121610",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1255927",
    "name": "Siwān",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "119181",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1256320",
    "name": "Sīkar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "199932",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1256525",
    "name": "Siliguri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "515574",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1256949",
    "name": "Sawāi Mādhopur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "108612",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1270216",
    "name": "Hāthras",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "126882",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1271987",
    "name": "Etāwah",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "257448",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1272691",
    "name": "Dhūlia",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "366980",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1273066",
    "name": "Dewas",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "261218",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1275218",
    "name": "Botād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "117053",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1278946",
    "name": "Alwar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "283228",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1279290",
    "name": "Agartala",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "203264",
    "admin1_code": "26"
  },
  {
    "geoname_id": "6954929",
    "name": "Greater Noida",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "293908",
    "admin1_code": "36"
  },
  {
    "geoname_id": "7302826",
    "name": "Lal Bahadur Nagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "261987",
    "admin1_code": "40"
  },
  {
    "geoname_id": "10263232",
    "name": "Deoli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "120000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "98182",
    "name": "Baghdad",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "7216000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "98846",
    "name": "An Nu‘mānīyah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "110000",
    "admin1_code": "16"
  },
  {
    "geoname_id": "99454",
    "name": "Al Fallūjah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "190159",
    "admin1_code": "01"
  },
  {
    "geoname_id": "99608",
    "name": "Al ‘Amārah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "323302",
    "admin1_code": "14"
  },
  {
    "geoname_id": "388349",
    "name": "Al Başrah al Qadīmah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "2015483",
    "admin1_code": "02"
  },
  {
    "geoname_id": "114259",
    "name": "Sirjan",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "207645",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3445026",
    "name": "Vila Velha",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "394930",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3467081",
    "name": "Caraguatatuba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "123389",
    "admin1_code": "27"
  },
  {
    "geoname_id": "6324729",
    "name": "Halifax",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "439819",
    "admin1_code": "07"
  },
  {
    "geoname_id": "216281",
    "name": "Goma",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "144124",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2290956",
    "name": "Bouaké",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "832371",
    "admin1_code": "90"
  },
  {
    "geoname_id": "2293521",
    "name": "Abobo",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "1340083",
    "admin1_code": "93"
  },
  {
    "geoname_id": "1529195",
    "name": "Shihezi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "572772",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1785725",
    "name": "Yunfu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2612800",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1790492",
    "name": "Xiangtan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "959303",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1791056",
    "name": "Dongyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "130387",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1791544",
    "name": "Wenchang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "560894",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1794479",
    "name": "Laixi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "341470",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1794794",
    "name": "Shouguang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "473620",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1800175",
    "name": "Nanbin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "118597",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1804578",
    "name": "Laizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "188000",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1805935",
    "name": "Jiazi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "130298",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1806097",
    "name": "Ningde",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "429260",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1806488",
    "name": "Qionghai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "528238",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1808872",
    "name": "Fu’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "154439",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1809380",
    "name": "Gunan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "208010",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1814757",
    "name": "Chuzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "782671",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2035399",
    "name": "Songyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "113611",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2035669",
    "name": "Lianhe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "121367",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2036337",
    "name": "Kaiyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "112462",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2852217",
    "name": "Prenzlauer Berg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "148878",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2642465",
    "name": "Milton Keynes",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "256385",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2644688",
    "name": "Leeds",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "516298",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2648657",
    "name": "Gillingham",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "101187",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2653225",
    "name": "Chesterfield",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "113057",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2655237",
    "name": "Bolton",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "141331",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "1141857",
    "name": "Gardez",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "103601",
    "admin1_code": "36"
  },
  {
    "geoname_id": "2774326",
    "name": "Klagenfurt am Wörthersee",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "100316",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3589289",
    "name": "Santa Lucía Cotzumalguapa",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "112780",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3052009",
    "name": "Győr",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "129301",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1624917",
    "name": "Bandar Lampung",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1166066",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1643837",
    "name": "Gorontalo",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "198539",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1645133",
    "name": "Dumai",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "143760",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1646170",
    "name": "Cirebon",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "333303",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1646492",
    "name": "Cileunyi",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "111476",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1646559",
    "name": "Cilacap",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "256996",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1651112",
    "name": "Astanajapura",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "148047",
    "admin1_code": "30"
  },
  {
    "geoname_id": "5346111",
    "name": "Elk Grove",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "166913",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5364940",
    "name": "Lancaster",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "161103",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5378538",
    "name": "Oakland",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "419267",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5577147",
    "name": "Fort Collins",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "161175",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "5812944",
    "name": "Tacoma",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "207948",
    "admin1_code": "WA"
  },
  {
    "geoname_id": "3647651",
    "name": "Cabimas",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "291147",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1566166",
    "name": "Thanh Hóa",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "112473",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1577995",
    "name": "La Gi",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "160652",
    "admin1_code": "47"
  },
  {
    "geoname_id": "3515428",
    "name": "Tlalpan",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "574577",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3530870",
    "name": "Chilpancingo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "187251",
    "admin1_code": "12"
  },
  {
    "geoname_id": "4005509",
    "name": "Guadalupe",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "215000",
    "admin1_code": "32"
  },
  {
    "geoname_id": "4005867",
    "name": "Ciudad General Escobedo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "352444",
    "admin1_code": "19"
  },
  {
    "geoname_id": "4014875",
    "name": "Celaya",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "340387",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2335204",
    "name": "Kano",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "4103000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "702569",
    "name": "Lutsk",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "215986",
    "admin1_code": "24"
  },
  {
    "geoname_id": "711390",
    "name": "Brovary",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "109806",
    "admin1_code": "13"
  },
  {
    "geoname_id": "4164167",
    "name": "Miami Gardens",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "113187",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4171563",
    "name": "St. Petersburg",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "257083",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4543762",
    "name": "Norman",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "124880",
    "admin1_code": "OK"
  },
  {
    "geoname_id": "962367",
    "name": "Richards Bay",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "252968",
    "admin1_code": "02"
  },
  {
    "geoname_id": "965289",
    "name": "Polokwane",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "123749",
    "admin1_code": "09"
  },
  {
    "geoname_id": "986846",
    "name": "Kroonstad",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "103992",
    "admin1_code": "03"
  },
  {
    "geoname_id": "687700",
    "name": "Zaporizhzhya",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "710052",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3489297",
    "name": "New Kingston",
    "country_code": "JM",
    "cou_name_en": "Jamaica",
    "population": "583958",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1848774",
    "name": "Yaizu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "139578",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1849845",
    "name": "Toyokawa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "120537",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1857871",
    "name": "Machida",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "399969",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1859100",
    "name": "Kōfu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "187985",
    "admin1_code": "46"
  },
  {
    "geoname_id": "1861164",
    "name": "Iwatsuki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "108833",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1861602",
    "name": "Inazawa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "102130",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1861949",
    "name": "Ichinomiya",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "379654",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2130629",
    "name": "Asahikawa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "333530",
    "admin1_code": "12"
  },
  {
    "geoname_id": "6822163",
    "name": "Iruma",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "147166",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1871859",
    "name": "Pyongyang",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "3222000",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1518980",
    "name": "Shymkent",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "1200000",
    "admin1_code": "1537272"
  },
  {
    "geoname_id": "1238992",
    "name": "Sri Jayewardenepura Kotte",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "115826",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1248991",
    "name": "Colombo",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "648034",
    "admin1_code": "36"
  },
  {
    "geoname_id": "4562831",
    "name": "Bayamón",
    "country_code": "PR",
    "cou_name_en": "Puerto Rico",
    "population": "203499",
    "admin1_code": "021"
  },
  {
    "geoname_id": "3437863",
    "name": "Lambaré",
    "country_code": "PY",
    "cou_name_en": "Paraguay",
    "population": "126377",
    "admin1_code": "06"
  },
  {
    "geoname_id": "935221",
    "name": "Saint-Paul",
    "country_code": "RE",
    "cou_name_en": "Réunion",
    "population": "103208",
    "admin1_code": "RE"
  },
  {
    "geoname_id": "462444",
    "name": "Zlatoust",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "191366",
    "admin1_code": "13"
  },
  {
    "geoname_id": "480562",
    "name": "Tula",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "482873",
    "admin1_code": "76"
  },
  {
    "geoname_id": "460413",
    "name": "Daugavpils",
    "country_code": "LV",
    "cou_name_en": "Latvia",
    "population": "111564",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2550078",
    "name": "El Jadid",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "147549",
    "admin1_code": "06"
  },
  {
    "geoname_id": "934154",
    "name": "Port Louis",
    "country_code": "MU",
    "cou_name_en": "Mauritius",
    "population": "155226",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1177384",
    "name": "Hafizabad",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "153656",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1183880",
    "name": "Bahawalpur",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "552607",
    "admin1_code": "04"
  },
  {
    "geoname_id": "757065",
    "name": "Targówek",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "124279",
    "admin1_code": "78"
  },
  {
    "geoname_id": "758470",
    "name": "Śródmieście",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "134306",
    "admin1_code": "78"
  },
  {
    "geoname_id": "727011",
    "name": "Sofia",
    "country_code": "BG",
    "cou_name_en": "Bulgaria",
    "population": "1152556",
    "admin1_code": "42"
  },
  {
    "geoname_id": "3906194",
    "name": "Sacaba",
    "country_code": "BO",
    "cou_name_en": "Bolivia",
    "population": "180726",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3402655",
    "name": "Caruaru",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "235371",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3448136",
    "name": "São Vicente",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "324457",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3454031",
    "name": "Petrópolis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "272691",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3454857",
    "name": "Passo Fundo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "179529",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3456160",
    "name": "Nova Iguaçu",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "823302",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3457381",
    "name": "Mauá",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "477552",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3464739",
    "name": "Diadema",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "390633",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3468031",
    "name": "Camaçari",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "188758",
    "admin1_code": "05"
  },
  {
    "geoname_id": "5992996",
    "name": "Kitchener",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "256885",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3348313",
    "name": "Huambo",
    "country_code": "AO",
    "cou_name_en": "Angola",
    "population": "226145",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3430545",
    "name": "Morón",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "122642",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3432043",
    "name": "La Plata",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "195443",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3435910",
    "name": "Buenos Aires",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "2891082",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2155472",
    "name": "Newcastle",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "348539",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1192366",
    "name": "Pār Naogaon",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "192464",
    "admin1_code": "83"
  },
  {
    "geoname_id": "7303248",
    "name": "Jiashan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "137112",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3538803",
    "name": "San Miguel del Padrón",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "159273",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3374333",
    "name": "Praia",
    "country_code": "CV",
    "cou_name_en": "Cape Verde",
    "population": "113364",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3513090",
    "name": "Willemstad",
    "country_code": "CW",
    "cou_name_en": "None",
    "population": "125000",
    "admin1_code": "None"
  },
  {
    "geoname_id": "3068799",
    "name": "Ostrava",
    "country_code": "CZ",
    "cou_name_en": "Czech Republic",
    "population": "279791",
    "admin1_code": "85"
  },
  {
    "geoname_id": "3071961",
    "name": "Liberec",
    "country_code": "CZ",
    "cou_name_en": "Czech Republic",
    "population": "102951",
    "admin1_code": "83"
  },
  {
    "geoname_id": "2947416",
    "name": "Bochum",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "385729",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2950159",
    "name": "Berlin",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "3426354",
    "admin1_code": "16"
  },
  {
    "geoname_id": "8354626",
    "name": "Hamburg-Nord",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "315514",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2505572",
    "name": "Batna",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "280798",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2508287",
    "name": "Aïn Beïda",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "105765",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3654533",
    "name": "Machala",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "289141",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3657509",
    "name": "Guayaquil",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "2723665",
    "admin1_code": "10"
  },
  {
    "geoname_id": "353219",
    "name": "Madīnat Sittah Uktūbar",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "368650",
    "admin1_code": "08"
  },
  {
    "geoname_id": "361055",
    "name": "Ismailia",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "429465",
    "admin1_code": "07"
  },
  {
    "geoname_id": "361291",
    "name": "Hurghada",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "207132",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2522258",
    "name": "Albacete",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "169716",
    "admin1_code": "54"
  },
  {
    "geoname_id": "3108118",
    "name": "Tetuán de las Victorias",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "155000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2292852",
    "name": "Anyama",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "100653",
    "admin1_code": "93"
  },
  {
    "geoname_id": "1529102",
    "name": "Ürümqi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3029372",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1529484",
    "name": "Hami",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "246373",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1784554",
    "name": "Zhicheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "159383",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1784953",
    "name": "Zhaoyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "120000",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1790437",
    "name": "Zhuhai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2207090",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1797929",
    "name": "Qingdao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "7172451",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1799846",
    "name": "Nanping",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "467875",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1800234",
    "name": "Nada",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "256652",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1803331",
    "name": "Linxia Chengguanzhen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "274466",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1804169",
    "name": "Lengshuijiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "115399",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1805270",
    "name": "Qianzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "102332",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1808612",
    "name": "Hejiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "137437",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1809152",
    "name": "Guyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "411854",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1811720",
    "name": "Enshi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "279185",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1815482",
    "name": "Changyi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "302072",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1817441",
    "name": "Baisha",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "115761",
    "admin1_code": "33"
  },
  {
    "geoname_id": "2033824",
    "name": "Xilin Hot",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "120965",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2036671",
    "name": "Hulan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "109104",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6648023",
    "name": "Xiangjiaba",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "102143",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2633948",
    "name": "Wigan",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "175405",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2861650",
    "name": "Nürnberg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "515543",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2886242",
    "name": "Köln",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "963395",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2911296",
    "name": "Altona",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "250192",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2921466",
    "name": "Gelsenkirchen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "270028",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2929567",
    "name": "Erlangen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "102675",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2934691",
    "name": "Duisburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "504358",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2294877",
    "name": "Tamale",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "360579",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2306079",
    "name": "Atsiaman",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "202932",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2849483",
    "name": "Regensburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "129151",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2800931",
    "name": "Brugge",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "118509",
    "admin1_code": "VLG"
  },
  {
    "geoname_id": "3617708",
    "name": "Matagalpa",
    "country_code": "NI",
    "cou_name_en": "Nicaragua",
    "population": "109089",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1283161",
    "name": "Lahān",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "102955",
    "admin1_code": "2"
  },
  {
    "geoname_id": "2179537",
    "name": "Wellington",
    "country_code": "NZ",
    "cou_name_en": "New Zealand",
    "population": "381900",
    "admin1_code": "G2"
  },
  {
    "geoname_id": "3703443",
    "name": "Panamá",
    "country_code": "PA",
    "cou_name_en": "Panama",
    "population": "408168",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1683013",
    "name": "Tanza",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "105510",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1730501",
    "name": "Antipolo",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "549543",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1169116",
    "name": "Nawabshah",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "229504",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1169692",
    "name": "Muridke",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "164246",
    "admin1_code": "04"
  },
  {
    "geoname_id": "5037649",
    "name": "Minneapolis",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "410939",
    "admin1_code": "MN"
  },
  {
    "geoname_id": "5128581",
    "name": "New York City",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "8804190",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5292387",
    "name": "Deer Valley",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "165656",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5341430",
    "name": "Daly City",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "106562",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5393180",
    "name": "Santa Maria",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "105093",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5527554",
    "name": "Odessa",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "118968",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "5731371",
    "name": "Hillsboro",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "102347",
    "admin1_code": "OR"
  },
  {
    "geoname_id": "5746545",
    "name": "Portland",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "652503",
    "admin1_code": "OR"
  },
  {
    "geoname_id": "3486270",
    "name": "Anaco",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "139397",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3629614",
    "name": "Punta Cardón",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "113999",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3630297",
    "name": "Petare",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "364684",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3634922",
    "name": "La Victoria",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "126721",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3647444",
    "name": "Calabozo",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "168605",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1575627",
    "name": "Long Xuyên",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "272365",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2747891",
    "name": "Rotterdam",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "598199",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1283467",
    "name": "Dhangaḍhi̇̄",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "204788",
    "admin1_code": "7"
  },
  {
    "geoname_id": "2192362",
    "name": "Christchurch",
    "country_code": "NZ",
    "cou_name_en": "New Zealand",
    "population": "363926",
    "admin1_code": "E9"
  },
  {
    "geoname_id": "288955",
    "name": "As Suwayq",
    "country_code": "OM",
    "cou_name_en": "Oman",
    "population": "107143",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3936456",
    "name": "Lima",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "7737002",
    "admin1_code": "LMA"
  },
  {
    "geoname_id": "1680932",
    "name": "Tuguegarao",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "166334",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1688253",
    "name": "Santa Cruz",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "108145",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1692192",
    "name": "Quezon City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "2761720",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1701500",
    "name": "Mansilingan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "454150",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1725094",
    "name": "Binangonan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "219204",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1175892",
    "name": "Jhang Sadr",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "341210",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2650752",
    "name": "Dundee",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "148210",
    "admin1_code": "SCT"
  },
  {
    "geoname_id": "2655603",
    "name": "Birmingham",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "1144919",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2656194",
    "name": "Basildon",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "144859",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "3718426",
    "name": "Port-au-Prince",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "1234742",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1631905",
    "name": "Payakumbuh",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "139576",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1632033",
    "name": "Pasuruan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "208006",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1645518",
    "name": "Depok",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "104527",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1255364",
    "name": "Surat",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "4591246",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1256826",
    "name": "Seoni",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "101379",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1258916",
    "name": "Rajapalaiyam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "124168",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1260341",
    "name": "Parbhani",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "289629",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1261529",
    "name": "Nellore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "404158",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1262395",
    "name": "Murwāra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "195856",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1263220",
    "name": "Medinīpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "153349",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1263494",
    "name": "Mormugao",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "102345",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1265859",
    "name": "Krishnanagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "145926",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1268865",
    "name": "Jodhpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "921476",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1274767",
    "name": "Chanduasi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "112635",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1275665",
    "name": "Bīkaner",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "576015",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1277240",
    "name": "Bānsbāria",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "108474",
    "admin1_code": "28"
  },
  {
    "geoname_id": "660158",
    "name": "Espoo",
    "country_code": "FI",
    "cou_name_en": "Finland",
    "population": "256760",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3523149",
    "name": "Miramar",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "118614",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3526617",
    "name": "Xalapa de Enríquez",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "424755",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3530049",
    "name": "Delegación Cuajimalpa de Morelos",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "160491",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3530517",
    "name": "Coatzacoalcos",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "235983",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3530597",
    "name": "Mexico City",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "12294193",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3981369",
    "name": "Tonalá",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "408759",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3995019",
    "name": "Navojoa",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "113836",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3998655",
    "name": "León de los Aldama",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1721199",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1733953",
    "name": "Lahad Datu",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "105622",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1735079",
    "name": "Bukit Mertajam",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "212329",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1735902",
    "name": "Sibu",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "198239",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1738050",
    "name": "Miri",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "300543",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1039536",
    "name": "Maxixe",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "123868",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1049261",
    "name": "Chimoio",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "372821",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2323675",
    "name": "Sapele",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "161686",
    "admin1_code": "36"
  },
  {
    "geoname_id": "2325590",
    "name": "Osogbo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "156694",
    "admin1_code": "42"
  },
  {
    "geoname_id": "765876",
    "name": "Lublin",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "360044",
    "admin1_code": "75"
  },
  {
    "geoname_id": "3083271",
    "name": "Toruń",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "198613",
    "admin1_code": "73"
  },
  {
    "geoname_id": "3098722",
    "name": "Gorzów Wielkopolski",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "124430",
    "admin1_code": "76"
  },
  {
    "geoname_id": "11048318",
    "name": "Sector 2",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "345370",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1851100",
    "name": "Takamatsu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "418994",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1855095",
    "name": "Nobeoka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "119521",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1859586",
    "name": "Kazo",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "112792",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1859884",
    "name": "Kasukabe",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "206915",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1865294",
    "name": "Anjō",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "188693",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2111834",
    "name": "Morioka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "290700",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2127733",
    "name": "Tomakomai",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "174806",
    "admin1_code": "12"
  },
  {
    "geoname_id": "942470",
    "name": "Vryheid",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "150012",
    "admin1_code": "02"
  },
  {
    "geoname_id": "952865",
    "name": "Springs",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "186394",
    "admin1_code": "06"
  },
  {
    "geoname_id": "894701",
    "name": "Bulawayo",
    "country_code": "ZW",
    "cou_name_en": "Zimbabwe",
    "population": "1200337",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2507972",
    "name": "Aïn Oussera",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "118687",
    "admin1_code": "22"
  },
  {
    "geoname_id": "3652462",
    "name": "Quito",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "2781641",
    "admin1_code": "18"
  },
  {
    "geoname_id": "346030",
    "name": "Zefta",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "111700",
    "admin1_code": "05"
  },
  {
    "geoname_id": "347497",
    "name": "Ţanţā",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "576648",
    "admin1_code": "05"
  },
  {
    "geoname_id": "349076",
    "name": "Shubrā al Khaymah",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "1240289",
    "admin1_code": "12"
  },
  {
    "geoname_id": "360630",
    "name": "Cairo",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "9606916",
    "admin1_code": "11"
  },
  {
    "geoname_id": "360829",
    "name": "Al Maḩallah al Kubrá",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "592573",
    "admin1_code": "05"
  },
  {
    "geoname_id": "361329",
    "name": "Al Fashn",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "112999",
    "admin1_code": "18"
  },
  {
    "geoname_id": "2521978",
    "name": "Alicante",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "334757",
    "admin1_code": "60"
  },
  {
    "geoname_id": "3109981",
    "name": "Santa Coloma de Gramenet",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "118821",
    "admin1_code": "56"
  },
  {
    "geoname_id": "336014",
    "name": "Gondar",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "443156",
    "admin1_code": "46"
  },
  {
    "geoname_id": "342884",
    "name": "Bahir Dar",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "332856",
    "admin1_code": "46"
  },
  {
    "geoname_id": "343137",
    "name": "Hawassa",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "403288",
    "admin1_code": "54"
  },
  {
    "geoname_id": "2990999",
    "name": "Nancy",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "105058",
    "admin1_code": "44"
  },
  {
    "geoname_id": "3003603",
    "name": "Le Mans",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "144515",
    "admin1_code": "52"
  },
  {
    "geoname_id": "2633691",
    "name": "Wolverhampton",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "263700",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "3392242",
    "name": "Petrolina",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "194650",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3398269",
    "name": "Imperatriz",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "218106",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3402591",
    "name": "Castanhal",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "137406",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3445679",
    "name": "Uruguaiana",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "123480",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3456283",
    "name": "Niterói",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "456456",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3458930",
    "name": "Lages",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "164676",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3459462",
    "name": "Jundiaí",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "321589",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3462980",
    "name": "Francisco Morato",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "171790",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3470451",
    "name": "Barretos",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "101220",
    "admin1_code": "27"
  },
  {
    "geoname_id": "622428",
    "name": "Salihorsk",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "106627",
    "admin1_code": "05"
  },
  {
    "geoname_id": "627907",
    "name": "Homyel'",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "526872",
    "admin1_code": "02"
  },
  {
    "geoname_id": "6173577",
    "name": "Vaughan",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "306233",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6183235",
    "name": "Winnipeg",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "749607",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2228373",
    "name": "Maroua",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "319941",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1529114",
    "name": "Turpan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "273385",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1786746",
    "name": "Yichun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1045952",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1793511",
    "name": "Taiyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "4303673",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1793900",
    "name": "Suining",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "656760",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1795857",
    "name": "Shaowu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "112585",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1799471",
    "name": "Nianbo",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "260184",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1800829",
    "name": "Wuchuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "104168",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1802875",
    "name": "Guankou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1380000",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1804540",
    "name": "Langfang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "868066",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1805753",
    "name": "Jinan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "4335989",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1809412",
    "name": "Guli",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "536000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1809532",
    "name": "Guigang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1086327",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1812728",
    "name": "Dingzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "152934",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1814087",
    "name": "Dalian",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "4913879",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1814906",
    "name": "Chongqing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "7457599",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1816234",
    "name": "Bozhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1409436",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1817990",
    "name": "Anqiu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "364208",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1818020",
    "name": "Anliu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "115560",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2035970",
    "name": "Longjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "106384",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2036109",
    "name": "Liaoyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "465249",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2037069",
    "name": "Hailun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "109881",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2862375",
    "name": "Nippes",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "113487",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2864695",
    "name": "Neukölln",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "164636",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2911285",
    "name": "Wandsbek",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "411422",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2918632",
    "name": "Göttingen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "122149",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2935022",
    "name": "Dresden",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "556227",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3436043",
    "name": "Berazategui",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "180523",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3841956",
    "name": "Paraná",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "247139",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3865086",
    "name": "Bahía Blanca",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "299101",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1185098",
    "name": "Tungi",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "337579",
    "admin1_code": "81"
  },
  {
    "geoname_id": "1185099",
    "name": "Sylhet",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "237000",
    "admin1_code": "86"
  },
  {
    "geoname_id": "2790471",
    "name": "Namur",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "110939",
    "admin1_code": "WAL"
  },
  {
    "geoname_id": "3529986",
    "name": "Cuautitlán",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "108449",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3532624",
    "name": "Ciudad López Mateos",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "489160",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3827406",
    "name": "Benito Juarez",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "355017",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3827606",
    "name": "Buenavista",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "206081",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3991164",
    "name": "Santiago de Querétaro",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1594212",
    "admin1_code": "22"
  },
  {
    "geoname_id": "4004330",
    "name": "Irapuato",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "380941",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1734393",
    "name": "Kulim",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "170889",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3352136",
    "name": "Windhoek",
    "country_code": "NA",
    "cou_name_en": "Namibia",
    "population": "268132",
    "admin1_code": "21"
  },
  {
    "geoname_id": "2440485",
    "name": "Niamey",
    "country_code": "NE",
    "cou_name_en": "Niger",
    "population": "774235",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2322911",
    "name": "Sokoto",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "563861",
    "admin1_code": "51"
  },
  {
    "geoname_id": "543460",
    "name": "Kovrov",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "154224",
    "admin1_code": "83"
  },
  {
    "geoname_id": "555312",
    "name": "Ivanovo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "406113",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1501321",
    "name": "Kurgan",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "309285",
    "admin1_code": "40"
  },
  {
    "geoname_id": "2122104",
    "name": "Petropavlovsk-Kamchatsky",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "181216",
    "admin1_code": "92"
  },
  {
    "geoname_id": "105343",
    "name": "Jeddah",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "4697000",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1880252",
    "name": "Singapore",
    "country_code": "SG",
    "cou_name_en": "Singapore",
    "population": "5638700",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2246452",
    "name": "Saint-Louis",
    "country_code": "SN",
    "cou_name_en": "Senegal",
    "population": "258592",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1607782",
    "name": "Phasi Charoen",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "122070",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1611110",
    "name": "Chon Buri",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "219164",
    "admin1_code": "46"
  },
  {
    "geoname_id": "1645457",
    "name": "Dili",
    "country_code": "TL",
    "cou_name_en": "Timor-Leste",
    "population": "150000",
    "admin1_code": "DI"
  },
  {
    "geoname_id": "2473449",
    "name": "Kairouan",
    "country_code": "TN",
    "cou_name_en": "Tunisia",
    "population": "119794",
    "admin1_code": "03"
  },
  {
    "geoname_id": "300614",
    "name": "Siverek",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "175341",
    "admin1_code": "63"
  },
  {
    "geoname_id": "306571",
    "name": "Konya",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "1390051",
    "admin1_code": "71"
  },
  {
    "geoname_id": "315808",
    "name": "Elazığ",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "443363",
    "admin1_code": "23"
  },
  {
    "geoname_id": "325303",
    "name": "Afyonkarahisar",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "251799",
    "admin1_code": "03"
  },
  {
    "geoname_id": "747712",
    "name": "Edirne",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "180002",
    "admin1_code": "22"
  },
  {
    "geoname_id": "749780",
    "name": "Çanakkale",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "143622",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1675151",
    "name": "Hsinchu",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "404109",
    "admin1_code": "04"
  },
  {
    "geoname_id": "5338122",
    "name": "Clovis",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "104180",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5343858",
    "name": "Downey",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "114219",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5375911",
    "name": "Murrieta",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "109830",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5380184",
    "name": "Oxnard",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "207254",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5388881",
    "name": "Roseville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "130269",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5400075",
    "name": "Sunnyvale",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "155805",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5416541",
    "name": "Centennial",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "109741",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "5475352",
    "name": "Las Cruces",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "101643",
    "admin1_code": "NM"
  },
  {
    "geoname_id": "5799625",
    "name": "Kent",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "126952",
    "admin1_code": "WA"
  },
  {
    "geoname_id": "1513064",
    "name": "Olmaliq",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "133400",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3626402",
    "name": "Táriba",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "138402",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3630932",
    "name": "Palo Negro",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "128875",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3632308",
    "name": "Mérida",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "300000",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3642833",
    "name": "El Limón",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "148247",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1562693",
    "name": "Vĩnh Long",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "137870",
    "admin1_code": "69"
  },
  {
    "geoname_id": "1562820",
    "name": "Việt Trì",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "140935",
    "admin1_code": "83"
  },
  {
    "geoname_id": "697889",
    "name": "Pavlohrad",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "101430",
    "admin1_code": "04"
  },
  {
    "geoname_id": "698740",
    "name": "Odesa",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "1015826",
    "admin1_code": "17"
  },
  {
    "geoname_id": "702320",
    "name": "Makiivka",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "338968",
    "admin1_code": "05"
  },
  {
    "geoname_id": "4076784",
    "name": "Montgomery",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "200603",
    "admin1_code": "AL"
  },
  {
    "geoname_id": "4297983",
    "name": "Lexington",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "225366",
    "admin1_code": "KY"
  },
  {
    "geoname_id": "4641239",
    "name": "Memphis",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "633104",
    "admin1_code": "TN"
  },
  {
    "geoname_id": "4691930",
    "name": "Fort Worth",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "918915",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "5089178",
    "name": "Manchester",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110229",
    "admin1_code": "NH"
  },
  {
    "geoname_id": "944385",
    "name": "Vereeniging",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "474681",
    "admin1_code": "06"
  },
  {
    "geoname_id": "990930",
    "name": "Kimberley",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "142089",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1849498",
    "name": "Ube",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "173733",
    "admin1_code": "45"
  },
  {
    "geoname_id": "1852899",
    "name": "Sasebo",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "237444",
    "admin1_code": "27"
  },
  {
    "geoname_id": "1853303",
    "name": "Saga",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "232736",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1855431",
    "name": "Niigata",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "797591",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1863431",
    "name": "Hadano",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "163787",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1907301",
    "name": "Shimotoda",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "118731",
    "admin1_code": "34"
  },
  {
    "geoname_id": "2130057",
    "name": "Hirosaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "168739",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1846986",
    "name": "Andong",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "158765",
    "admin1_code": "14"
  },
  {
    "geoname_id": "285629",
    "name": "Ḩawallī",
    "country_code": "KW",
    "cou_name_en": "Kuwait",
    "population": "164212",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1516589",
    "name": "Zhezqazghan",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "104357",
    "admin1_code": "12510145"
  },
  {
    "geoname_id": "1519843",
    "name": "Rudnyy",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "124000",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2542997",
    "name": "Marrakesh",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "839296",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2451185",
    "name": "Sikasso",
    "country_code": "ML",
    "cou_name_en": "Mali",
    "population": "144786",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3088171",
    "name": "Poznań",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "570352",
    "admin1_code": "86"
  },
  {
    "geoname_id": "3093692",
    "name": "Legnica",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "106033",
    "admin1_code": "72"
  },
  {
    "geoname_id": "3102014",
    "name": "Bydgoszcz",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "366452",
    "admin1_code": "73"
  },
  {
    "geoname_id": "2271772",
    "name": "Amadora",
    "country_code": "PT",
    "cou_name_en": "Portugal",
    "population": "178858",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3439101",
    "name": "Ciudad del Este",
    "country_code": "PY",
    "cou_name_en": "Paraguay",
    "population": "301815",
    "admin1_code": "01"
  },
  {
    "geoname_id": "667268",
    "name": "Sibiu",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "151894",
    "admin1_code": "33"
  },
  {
    "geoname_id": "668872",
    "name": "Râmnicu Vâlcea",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "107558",
    "admin1_code": "39"
  },
  {
    "geoname_id": "8403612",
    "name": "Taibai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "108387",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3688465",
    "name": "Bucaramanga",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "581130",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3621849",
    "name": "San José",
    "country_code": "CR",
    "cou_name_en": "Costa Rica",
    "population": "335007",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3493175",
    "name": "Puerto Plata",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "146000",
    "admin1_code": "18"
  },
  {
    "geoname_id": "2474141",
    "name": "Boumerdas",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "786499",
    "admin1_code": "40"
  },
  {
    "geoname_id": "2488835",
    "name": "Médéa",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "147707",
    "admin1_code": "06"
  },
  {
    "geoname_id": "350203",
    "name": "Rosetta",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "125778",
    "admin1_code": "03"
  },
  {
    "geoname_id": "343300",
    "name": "Asmara",
    "country_code": "ER",
    "cou_name_en": "Eritrea",
    "population": "563930",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3104499",
    "name": "Gasteiz / Vitoria",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "249176",
    "admin1_code": "59"
  },
  {
    "geoname_id": "3111108",
    "name": "Salamanca",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "155619",
    "admin1_code": "55"
  },
  {
    "geoname_id": "3128760",
    "name": "Barcelona",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "1620343",
    "admin1_code": "56"
  },
  {
    "geoname_id": "6544103",
    "name": "Horta-Guinardó",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "168092",
    "admin1_code": "56"
  },
  {
    "geoname_id": "3396016",
    "name": "Macapá",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "512902",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3402383",
    "name": "Caxias",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "148072",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3444924",
    "name": "Vitória",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "312656",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3451234",
    "name": "Rio Claro",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "180147",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3452525",
    "name": "Pouso Alegre",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "115201",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3457001",
    "name": "Mogi das Cruzes",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "325746",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3460949",
    "name": "Itabuna",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "205660",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3470127",
    "name": "Belo Horizonte",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "2721564",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3470636",
    "name": "Barra Mansa",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "164052",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3471697",
    "name": "Araucária",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "111302",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3471859",
    "name": "Araçatuba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "170024",
    "admin1_code": "27"
  },
  {
    "geoname_id": "627904",
    "name": "Hrodna",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "373547",
    "admin1_code": "03"
  },
  {
    "geoname_id": "6354908",
    "name": "Sydney",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "105968",
    "admin1_code": "07"
  },
  {
    "geoname_id": "7602078",
    "name": "Ladner",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "200000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2312895",
    "name": "Mbandaka",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "184185",
    "admin1_code": "02"
  },
  {
    "geoname_id": "686254",
    "name": "Arad",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "169065",
    "admin1_code": "02"
  },
  {
    "geoname_id": "792078",
    "name": "Čačak",
    "country_code": "RS",
    "cou_name_en": "Serbia",
    "population": "117072",
    "admin1_code": "SE"
  },
  {
    "geoname_id": "511196",
    "name": "Perm",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "982419",
    "admin1_code": "90"
  },
  {
    "geoname_id": "511510",
    "name": "Novo-Peredelkino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "115536",
    "admin1_code": "48"
  },
  {
    "geoname_id": "523523",
    "name": "Nalchik",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "239300",
    "admin1_code": "22"
  },
  {
    "geoname_id": "649360",
    "name": "Lahti",
    "country_code": "FI",
    "cou_name_en": "Finland",
    "population": "120093",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1176515",
    "name": "Jacobabad",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "170588",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2349019",
    "name": "Atani",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "230000",
    "admin1_code": "25"
  },
  {
    "geoname_id": "2352778",
    "name": "Abuja",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "1235880",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2353151",
    "name": "Aba",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "897560",
    "admin1_code": "45"
  },
  {
    "geoname_id": "295514",
    "name": "Bnei Brak",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "214444",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1253133",
    "name": "Virār",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "150357",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1254361",
    "name": "Tirunelveli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1435844",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1254649",
    "name": "Thanjavur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "291067",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1254661",
    "name": "Thāne",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1261517",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1256422",
    "name": "Shrīrāmpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "226317",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1256436",
    "name": "Solāpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "997281",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1258831",
    "name": "Rāj-Nāndgaon",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "150755",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1259163",
    "name": "Puruliya",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "122533",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1261481",
    "name": "New Delhi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "317797",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1262111",
    "name": "Najafgarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1365000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1262332",
    "name": "Muzaffarnagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "349706",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1264154",
    "name": "Malappuram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "101386",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1265683",
    "name": "Kumbakonam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "167155",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1265767",
    "name": "Kūkatpalli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "341709",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1267755",
    "name": "Karīmnagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "228745",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1270022",
    "name": "Hisar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "296436",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1270896",
    "name": "Gosāba",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "222764",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1271306",
    "name": "Ghazīpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "103095",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1271883",
    "name": "Ferozepore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "102130",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1273193",
    "name": "Deoria",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "129570",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1273294",
    "name": "Delhi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "10927986",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1275248",
    "name": "Borivli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "609617",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1276634",
    "name": "Beāwar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "130777",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1277065",
    "name": "Bārāsat",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "298127",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1277324",
    "name": "Bangaon",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "111693",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1277835",
    "name": "Bahādurgarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "153613",
    "admin1_code": "10"
  },
  {
    "geoname_id": "122285",
    "name": "Neyshābūr",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "220929",
    "admin1_code": "42"
  },
  {
    "geoname_id": "126409",
    "name": "Kūhdasht",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "100208",
    "admin1_code": "23"
  },
  {
    "geoname_id": "418606",
    "name": "Najafābād",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "223450",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3176959",
    "name": "Florence",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "367150",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2289887",
    "name": "Divo",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "127867",
    "admin1_code": "95"
  },
  {
    "geoname_id": "2229752",
    "name": "Kumba",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "144413",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2234359",
    "name": "Bertoua",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "218111",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1785412",
    "name": "Zhabei",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "840000",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1791706",
    "name": "Wayaobu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "113698",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1792520",
    "name": "Tongzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "163326",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1794035",
    "name": "Songjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "130218",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1794806",
    "name": "Shizuishan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "136570",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1800627",
    "name": "Mianyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1550000",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1803834",
    "name": "Liaocheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1229768",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1803886",
    "name": "Anning",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "106795",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1805012",
    "name": "Jiyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "242143",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1806096",
    "name": "Jiaozhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "619266",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1807112",
    "name": "Huangzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "122563",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1809498",
    "name": "Guilin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1572300",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1815395",
    "name": "Chaozhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1750945",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2034497",
    "name": "Taonan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "112819",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2036776",
    "name": "Huadian",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "139047",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2037078",
    "name": "Hailar",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "211066",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2038584",
    "name": "Baishan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "183880",
    "admin1_code": "05"
  },
  {
    "geoname_id": "6929460",
    "name": "Panzhihua",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "787177",
    "admin1_code": "32"
  },
  {
    "geoname_id": "616635",
    "name": "Gyumri",
    "country_code": "AM",
    "cou_name_en": "Armenia",
    "population": "148381",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3836277",
    "name": "Santa Fe",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "391164",
    "admin1_code": "21"
  },
  {
    "geoname_id": "2772400",
    "name": "Linz",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "204846",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2073124",
    "name": "Darwin",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "147255",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2638785",
    "name": "St Helens",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "183200",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2643179",
    "name": "Maidstone",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "107627",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2644210",
    "name": "Liverpool",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "864122",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2654993",
    "name": "Bradford",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "366187",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2842647",
    "name": "Saarbrücken",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "179349",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3587923",
    "name": "Villa Canales",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "155423",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1818506",
    "name": "Tseung Kwan O",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "412900",
    "admin1_code": "NSK"
  },
  {
    "geoname_id": "716935",
    "name": "Nyíregyháza",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "117689",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3042430",
    "name": "Zugló",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "130000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1631648",
    "name": "Pemalang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "184149",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1639900",
    "name": "Klaten",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "126831",
    "admin1_code": "07"
  },
  {
    "geoname_id": "8581443",
    "name": "South Tangerang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1365688",
    "admin1_code": "33"
  },
  {
    "geoname_id": "2756253",
    "name": "Eindhoven",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "209620",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1689286",
    "name": "San Juan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "121430",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1701053",
    "name": "Marawi City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "143627",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1703417",
    "name": "Makati City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "510383",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1728930",
    "name": "Baguio",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "272714",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1172128",
    "name": "Larkana",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "364033",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3699088",
    "name": "Cajamarca",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "201329",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1701947",
    "name": "Mandaue City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "331320",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1705357",
    "name": "Lucena",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "228758",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1707404",
    "name": "Laoag",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "102105",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1165221",
    "name": "Shekhupura",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "361303",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1170880",
    "name": "Mardan",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "300424",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3521081",
    "name": "Puebla",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1692181",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3995523",
    "name": "Monclova",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "215271",
    "admin1_code": "07"
  },
  {
    "geoname_id": "4005539",
    "name": "Guadalajara",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1385629",
    "admin1_code": "14"
  },
  {
    "geoname_id": "4013720",
    "name": "Ciudad Delicias",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "118071",
    "admin1_code": "06"
  },
  {
    "geoname_id": "7280708",
    "name": "Colonia del Valle",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "250000",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1735150",
    "name": "Rawang",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "120447",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2326016",
    "name": "Onitsha",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "1553000",
    "admin1_code": "25"
  },
  {
    "geoname_id": "2329821",
    "name": "Mubi",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "225705",
    "admin1_code": "35"
  },
  {
    "geoname_id": "2332121",
    "name": "Lekki",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "401272",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2338269",
    "name": "Ikirun",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "134240",
    "admin1_code": "42"
  },
  {
    "geoname_id": "695594",
    "name": "Rivne",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "245289",
    "admin1_code": "19"
  },
  {
    "geoname_id": "702550",
    "name": "Lviv",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "717273",
    "admin1_code": "15"
  },
  {
    "geoname_id": "703448",
    "name": "Kyiv",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "2797553",
    "admin1_code": "12"
  },
  {
    "geoname_id": "4149962",
    "name": "Cape Coral",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "175229",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4155966",
    "name": "Fort Lauderdale",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "178590",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4168139",
    "name": "Pembroke Pines",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "166611",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4644312",
    "name": "Murfreesboro",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "126118",
    "admin1_code": "TN"
  },
  {
    "geoname_id": "4671654",
    "name": "Austin",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "931830",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4679195",
    "name": "Carrollton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "133168",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4903976",
    "name": "North Peoria",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "113004",
    "admin1_code": "IL"
  },
  {
    "geoname_id": "5385955",
    "name": "Rancho Cucamonga",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "175236",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5387428",
    "name": "Richmond",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "109708",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "3628423",
    "name": "San Felipe",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "206270",
    "admin1_code": "22"
  },
  {
    "geoname_id": "4990729",
    "name": "Detroit",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "677116",
    "admin1_code": "MI"
  },
  {
    "geoname_id": "415189",
    "name": "Aden",
    "country_code": "YE",
    "cou_name_en": "Yemen",
    "population": "863000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3359041",
    "name": "Worcester",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "127597",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1585489",
    "name": "Chí Linh",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "220421",
    "admin1_code": "79"
  },
  {
    "geoname_id": "161325",
    "name": "Arusha",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "341136",
    "admin1_code": "26"
  },
  {
    "geoname_id": "688105",
    "name": "Yevpatoriya",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "106202",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1848313",
    "name": "Yokosuka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "409478",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1849846",
    "name": "Toyohashi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "377453",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1856775",
    "name": "Miyakonojō",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "161137",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1857144",
    "name": "Minamirinkan",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "224015",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1857550",
    "name": "Matsue",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "156811",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1859171",
    "name": "Kobe",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "1522188",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1860871",
    "name": "Kadoma",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "131727",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1861864",
    "name": "Iida",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "101536",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1862752",
    "name": "Higashi-ōsaka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "489077",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1864624",
    "name": "Chigasaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "242798",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1907146",
    "name": "Sayama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "160843",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1907299",
    "name": "Asaka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "128058",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1821306",
    "name": "Phnom Penh",
    "country_code": "KH",
    "cou_name_en": "Cambodia",
    "population": "1573544",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1866923",
    "name": "Wŏnsan",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "329207",
    "admin1_code": "09"
  },
  {
    "geoname_id": "11695689",
    "name": "Jeongeup",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "139876",
    "admin1_code": "03"
  },
  {
    "geoname_id": "285704",
    "name": "As Sālimīyah",
    "country_code": "KW",
    "cou_name_en": "Kuwait",
    "population": "147649",
    "admin1_code": "08"
  },
  {
    "geoname_id": "268064",
    "name": "Sidon",
    "country_code": "LB",
    "cou_name_en": "Lebanon",
    "population": "163554",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2219936",
    "name": "Al Jumayl",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "102000",
    "admin1_code": "67"
  },
  {
    "geoname_id": "1309611",
    "name": "Myeik",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "173298",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2377450",
    "name": "Nouakchott",
    "country_code": "MR",
    "cou_name_en": "Mauritania",
    "population": "661400",
    "admin1_code": "None"
  },
  {
    "geoname_id": "3514450",
    "name": "Xochimilco",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "407885",
    "admin1_code": "09"
  },
  {
    "geoname_id": "518970",
    "name": "Novocherkassk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "166974",
    "admin1_code": "61"
  },
  {
    "geoname_id": "519336",
    "name": "Velikiy Novgorod",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "222868",
    "admin1_code": "52"
  },
  {
    "geoname_id": "569154",
    "name": "Cherkessk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "122395",
    "admin1_code": "27"
  },
  {
    "geoname_id": "580724",
    "name": "Arzamas",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "109479",
    "admin1_code": "51"
  },
  {
    "geoname_id": "1497917",
    "name": "Nefteyugansk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "112632",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1503277",
    "name": "Kiselëvsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "104000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1538637",
    "name": "Seversk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "109844",
    "admin1_code": "75"
  },
  {
    "geoname_id": "378231",
    "name": "Atbara",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "107930",
    "admin1_code": "53"
  },
  {
    "geoname_id": "602150",
    "name": "Umeå",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "130224",
    "admin1_code": "23"
  },
  {
    "geoname_id": "2407656",
    "name": "Koidu",
    "country_code": "SL",
    "cou_name_en": "Sierra Leone",
    "population": "124662",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1152473",
    "name": "Lampang",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "156139",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1607017",
    "name": "Rayong",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "106737",
    "admin1_code": "47"
  },
  {
    "geoname_id": "3086586",
    "name": "Rybnik",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "142510",
    "admin1_code": "83"
  },
  {
    "geoname_id": "6545348",
    "name": "Praga Południe",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "179836",
    "admin1_code": "78"
  },
  {
    "geoname_id": "4566880",
    "name": "Ponce",
    "country_code": "PR",
    "cou_name_en": "Puerto Rico",
    "population": "137491",
    "admin1_code": "113"
  },
  {
    "geoname_id": "665004",
    "name": "Târgu-Mureş",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "146863",
    "admin1_code": "27"
  },
  {
    "geoname_id": "8419424",
    "name": "Shenglilu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "134218",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3666608",
    "name": "Tunja",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "172548",
    "admin1_code": "36"
  },
  {
    "geoname_id": "3673899",
    "name": "Neiva",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "357392",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3545064",
    "name": "Palma Soriano",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "102826",
    "admin1_code": "15"
  },
  {
    "geoname_id": "146268",
    "name": "Nicosia",
    "country_code": "CY",
    "cou_name_en": "Cyprus",
    "population": "200452",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2805615",
    "name": "Würzburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "133731",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2820256",
    "name": "Ulm",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "120451",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3393001",
    "name": "Parnaíba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "138008",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3397838",
    "name": "Jaboatão",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "702621",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3402429",
    "name": "Caucaia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "275019",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3445839",
    "name": "Uberaba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "260843",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3458449",
    "name": "Londrina",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "588125",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3460170",
    "name": "Jandira",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "113605",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3461311",
    "name": "Indaiatuba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "256223",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3471872",
    "name": "Aracaju",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "664908",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3472287",
    "name": "Anápolis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "319587",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3925033",
    "name": "Ji Paraná",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "107697",
    "admin1_code": "24"
  },
  {
    "geoname_id": "5907364",
    "name": "Brampton",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "593638",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6122091",
    "name": "Richmond Hill",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "195022",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6159905",
    "name": "Surrey",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "394976",
    "admin1_code": "02"
  },
  {
    "geoname_id": "304922",
    "name": "Malatya",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "806156",
    "admin1_code": "44"
  },
  {
    "geoname_id": "315373",
    "name": "Erzincan",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "150714",
    "admin1_code": "24"
  },
  {
    "geoname_id": "323779",
    "name": "Antakya",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "210000",
    "admin1_code": "31"
  },
  {
    "geoname_id": "7628420",
    "name": "Sancaktepe",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "241000",
    "admin1_code": "34"
  },
  {
    "geoname_id": "7701384",
    "name": "Karabağlar",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "458000",
    "admin1_code": "35"
  },
  {
    "geoname_id": "466806",
    "name": "Yoshkar-Ola",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "268272",
    "admin1_code": "45"
  },
  {
    "geoname_id": "2346229",
    "name": "Calabar",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "461796",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1253084",
    "name": "Vizianagaram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "179358",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1253184",
    "name": "Vijayawada",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "874587",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1253744",
    "name": "Uppal Kalan",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "118259",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1254745",
    "name": "Teni",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1034724",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1255491",
    "name": "Sultānpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "110368",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1261809",
    "name": "Narela",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "800000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1262131",
    "name": "Naihāti",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "253221",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1263834",
    "name": "Mandsaur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "124988",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1264527",
    "name": "Chennai",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "4681087",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1264543",
    "name": "Madhyamgram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "161126",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1268936",
    "name": "Jhunjhunūn",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "113193",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1269006",
    "name": "Jhānsi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "412927",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1270525",
    "name": "Hājīpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "133606",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1272181",
    "name": "Durg",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "255283",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1278860",
    "name": "Ambāla",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "146787",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1279228",
    "name": "Ahmadnagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "367140",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1344377",
    "name": "Haldia",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "170695",
    "admin1_code": "28"
  },
  {
    "geoname_id": "99446",
    "name": "Al Fāw",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "104569",
    "admin1_code": "02"
  },
  {
    "geoname_id": "112931",
    "name": "Tehran",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "7153309",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3169070",
    "name": "Rome",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "2318895",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3171457",
    "name": "Parma",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "198292",
    "admin1_code": "05"
  },
  {
    "geoname_id": "6543969",
    "name": "Lyon 03",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "102725",
    "admin1_code": "84"
  },
  {
    "geoname_id": "2633563",
    "name": "Worcester",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "101659",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2646914",
    "name": "High Wycombe",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "133204",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2653261",
    "name": "Cheltenham",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "116447",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2653266",
    "name": "Chelmsford",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "111511",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2656046",
    "name": "Bedford",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "106940",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2656173",
    "name": "Bath",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "101557",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "3345439",
    "name": "Telford",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "155570",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2294665",
    "name": "Teshi Old Town",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "144013",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3598119",
    "name": "Cobán",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "212047",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3054643",
    "name": "Budapest",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "1741041",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1213500",
    "name": "Tebingtinggi",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "117530",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1215412",
    "name": "Belawan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "102707",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1624863",
    "name": "Tanjung Pinang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "227663",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1630789",
    "name": "Pontianak",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "658685",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1633034",
    "name": "Palu",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "373218",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1649150",
    "name": "Bengkulu",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "373591",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1650077",
    "name": "Banyuwangi",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "117558",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1990589",
    "name": "Teluknaga",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "128275",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2637546",
    "name": "Solihull",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "126577",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2640354",
    "name": "Peterborough",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "163379",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2374775",
    "name": "Bissau",
    "country_code": "GW",
    "cou_name_en": "Guinea-Bissau",
    "population": "388028",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1796236",
    "name": "Shanghai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "22315474",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1797121",
    "name": "Jieyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1899394",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2946447",
    "name": "Bonn",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "330579",
    "admin1_code": "07"
  },
  {
    "geoname_id": "6941055",
    "name": "Bochum-Hordel",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "380000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2481700",
    "name": "Sétif",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "288461",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2491191",
    "name": "Laghouat",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "113872",
    "admin1_code": "25"
  },
  {
    "geoname_id": "3652567",
    "name": "Quevedo",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "213842",
    "admin1_code": "13"
  },
  {
    "geoname_id": "354502",
    "name": "Kafr ash Shaykh",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "194569",
    "admin1_code": "21"
  },
  {
    "geoname_id": "358269",
    "name": "Dayrūţ",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "102570",
    "admin1_code": "17"
  },
  {
    "geoname_id": "358619",
    "name": "Port Said",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "780515",
    "admin1_code": "19"
  },
  {
    "geoname_id": "359173",
    "name": "Banī Suwayf",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "273151",
    "admin1_code": "18"
  },
  {
    "geoname_id": "359783",
    "name": "Asyūţ",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "528669",
    "admin1_code": "17"
  },
  {
    "geoname_id": "7799991",
    "name": "New Cairo",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "313139",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3114965",
    "name": "Ourense",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "105233",
    "admin1_code": "58"
  },
  {
    "geoname_id": "3118532",
    "name": "León",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "134305",
    "admin1_code": "55"
  },
  {
    "geoname_id": "345149",
    "name": "Ādīgrat",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "116193",
    "admin1_code": "53"
  },
  {
    "geoname_id": "7281020",
    "name": "Lo Prado",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "104316",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1529363",
    "name": "Kuqa",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "102752",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1783683",
    "name": "Ziyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "905729",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1786378",
    "name": "Yongchuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "192954",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1786657",
    "name": "Yinchuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1487579",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1787331",
    "name": "Zhangjiagang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1432044",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1794371",
    "name": "Shuizhai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "140493",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1798490",
    "name": "Pulandian",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "104277",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1802276",
    "name": "Longyan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1025087",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1802420",
    "name": "Longshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "121609",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1803791",
    "name": "Licheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "172775",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1807566",
    "name": "Xingyi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "322890",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1811619",
    "name": "Ezhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "193652",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1916012",
    "name": "Wuzhishan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "112269",
    "admin1_code": "31"
  },
  {
    "geoname_id": "2036595",
    "name": "Jalai Nur",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "107828",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2037886",
    "name": "Dandong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "631973",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2038438",
    "name": "Baoshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "123791",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2853969",
    "name": "Pforzheim",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "119313",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2869894",
    "name": "Mönchengladbach",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "261742",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2905891",
    "name": "Herne",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "172108",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2911288",
    "name": "Hamburg-Mitte",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "301231",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2924573",
    "name": "Friedrichshain",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "117829",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2925533",
    "name": "Frankfurt am Main",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "650000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3351663",
    "name": "Benguela",
    "country_code": "AO",
    "cou_name_en": "Angola",
    "population": "151226",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2775220",
    "name": "Innsbruck",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "132493",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2176187",
    "name": "Bendigo",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "103034",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3186573",
    "name": "Zenica",
    "country_code": "BA",
    "cou_name_en": "Bosnia and Herzegovina",
    "population": "164423",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3494242",
    "name": "Punta Cana",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "100023",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3654410",
    "name": "Manta",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "264281",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3657990",
    "name": "Esmeraldas",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "218727",
    "admin1_code": "09"
  },
  {
    "geoname_id": "350789",
    "name": "Qalyūb",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "156363",
    "admin1_code": "12"
  },
  {
    "geoname_id": "360761",
    "name": "Al Manşūrah",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "621953",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2510911",
    "name": "Sevilla",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "684234",
    "admin1_code": "51"
  },
  {
    "geoname_id": "2520600",
    "name": "Cadiz",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "126766",
    "admin1_code": "51"
  },
  {
    "geoname_id": "3114472",
    "name": "Pamplona",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "209672",
    "admin1_code": "32"
  },
  {
    "geoname_id": "3117164",
    "name": "Mataró",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "121722",
    "admin1_code": "56"
  },
  {
    "geoname_id": "3117735",
    "name": "Madrid",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "3255944",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3125239",
    "name": "Chamartín",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "140000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6544102",
    "name": "Sarrià-Sant Gervasi",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "147912",
    "admin1_code": "56"
  },
  {
    "geoname_id": "290340",
    "name": "Manama",
    "country_code": "BH",
    "cou_name_en": "Bahrain",
    "population": "147074",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3386361",
    "name": "Timon",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "124427",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3394682",
    "name": "Mossoró",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "202005",
    "admin1_code": "22"
  },
  {
    "geoname_id": "3446370",
    "name": "Toledo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "119313",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3448439",
    "name": "São Paulo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "12400232",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3448639",
    "name": "São José do Rio Preto",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "374699",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3450594",
    "name": "Salto",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "119736",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3451668",
    "name": "Resende",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "111514",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3456814",
    "name": "Montes Claros",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "332379",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3459943",
    "name": "Jequié",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "127475",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3470142",
    "name": "Belford Roxo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "466096",
    "admin1_code": "21"
  },
  {
    "geoname_id": "216449",
    "name": "Gandajika",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "154425",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3868707",
    "name": "Valdivia",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "133419",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1789262",
    "name": "Xinyi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "300511",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1789647",
    "name": "Xichang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "481796",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1790254",
    "name": "Xiaogan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "908266",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1793703",
    "name": "Taicang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "831113",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1801792",
    "name": "Luoyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1390581",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1803334",
    "name": "Linxi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "100316",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1803364",
    "name": "Linqu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "299646",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1804252",
    "name": "Lecheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "124268",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1809461",
    "name": "Guiyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3037159",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1810437",
    "name": "Gaoping",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "204368",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1810638",
    "name": "Ganzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1977253",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1811028",
    "name": "Fuji",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "131927",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1817720",
    "name": "Shangyu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "770000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2036597",
    "name": "Jiagedaqi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "135760",
    "admin1_code": "20"
  },
  {
    "geoname_id": "292968",
    "name": "Abu Dhabi",
    "country_code": "AE",
    "cou_name_en": "United Arab Emirates",
    "population": "1807000",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3838583",
    "name": "Rosario",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "948312",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1185155",
    "name": "Nārāyanganj",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "223622",
    "admin1_code": "81"
  },
  {
    "geoname_id": "293397",
    "name": "Tel Aviv",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "432892",
    "admin1_code": "05"
  },
  {
    "geoname_id": "293703",
    "name": "Rishon LeTsiyyon",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "258535",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1252758",
    "name": "Yelahanka",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "116447",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1253914",
    "name": "Ujjain",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "457346",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1258847",
    "name": "Rājkot",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1390640",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1259229",
    "name": "Pune",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "3124458",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1260482",
    "name": "Pānihāti",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "378705",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1261927",
    "name": "Nandyāl",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "165337",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1262292",
    "name": "Nadiād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "202067",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1264728",
    "name": "Ludhiāna",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1545368",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1265157",
    "name": "Lalitpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "126475",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1269300",
    "name": "Jamshedpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1339438",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1274353",
    "name": "Chāpra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "201597",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1275901",
    "name": "Bhiwandi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "874032",
    "admin1_code": "16"
  },
  {
    "geoname_id": "95446",
    "name": "Erbil",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "1612700",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3176219",
    "name": "Genoa",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "580097",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1626932",
    "name": "Singaraja",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "133784",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1628453",
    "name": "Sawangan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "165631",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1630634",
    "name": "Probolinggo",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "241202",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1631733",
    "name": "Pelabuhanratu",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "109523",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1633037",
    "name": "Palopo",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "184681",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1638868",
    "name": "Labuan Bajo",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "188724",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1642858",
    "name": "Jambi City",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "606200",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1648580",
    "name": "Blitar",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "150371",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1649541",
    "name": "Baubau",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "159248",
    "admin1_code": "22"
  },
  {
    "geoname_id": "2641170",
    "name": "Nottingham",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "323632",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2294700",
    "name": "Tema",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "155782",
    "admin1_code": "01"
  },
  {
    "geoname_id": "643492",
    "name": "Oulu",
    "country_code": "FI",
    "cou_name_en": "Finland",
    "population": "209648",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1259385",
    "name": "Port Blair",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "112050",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3159016",
    "name": "Drammen",
    "country_code": "NO",
    "cou_name_en": "Norway",
    "population": "103007",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2185964",
    "name": "North Shore",
    "country_code": "NZ",
    "cou_name_en": "New Zealand",
    "population": "207865",
    "admin1_code": "E7"
  },
  {
    "geoname_id": "1684308",
    "name": "Taguig",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "644473",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1695743",
    "name": "Panalanoy",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "189090",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1729524",
    "name": "Bacoor",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "356974",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1164408",
    "name": "Sukkur",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "417767",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1173378",
    "name": "Kot Addu",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "104217",
    "admin1_code": "04"
  },
  {
    "geoname_id": "5289282",
    "name": "Chandler",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "260828",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5303929",
    "name": "Maryvale",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "208189",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5339111",
    "name": "Concord",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "128667",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5368361",
    "name": "Los Angeles",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "3898747",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5379513",
    "name": "Orange",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "140992",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5381396",
    "name": "Pasadena",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "142250",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "1513243",
    "name": "Marg‘ilon",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "242500",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3625207",
    "name": "Yaritagua",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "113343",
    "admin1_code": "22"
  },
  {
    "geoname_id": "3627047",
    "name": "Santa Teresa del Tuy",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "278890",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3629965",
    "name": "Porlamar",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "216234",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3644768",
    "name": "Cumaná",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "405626",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1586296",
    "name": "Cần Giuộc",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "152200",
    "admin1_code": "24"
  },
  {
    "geoname_id": "3489854",
    "name": "Kingston",
    "country_code": "JM",
    "cou_name_en": "Jamaica",
    "population": "937700",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1849876",
    "name": "Toyama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "415844",
    "admin1_code": "42"
  },
  {
    "geoname_id": "1854703",
    "name": "Ōgaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "161539",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1857568",
    "name": "Matsubara",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "130855",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1859093",
    "name": "Koga",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "138446",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1860063",
    "name": "Karatsu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "117663",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1860704",
    "name": "Kakogawachō-honmachi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "271634",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2128815",
    "name": "Obihiro",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "165851",
    "admin1_code": "12"
  },
  {
    "geoname_id": "184745",
    "name": "Nairobi",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "2750547",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1651944",
    "name": "Vientiane",
    "country_code": "LA",
    "cou_name_en": "Lao People's Dem. Rep.",
    "population": "196731",
    "admin1_code": "24"
  },
  {
    "geoname_id": "618577",
    "name": "Bender",
    "country_code": "MD",
    "cou_name_en": "Moldova, Republic of",
    "population": "110175",
    "admin1_code": "62"
  },
  {
    "geoname_id": "3521342",
    "name": "Playa del Carmen",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "149923",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3526682",
    "name": "Ixtapaluca",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "322271",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3529947",
    "name": "Cuernavaca",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "338650",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3532497",
    "name": "Azcapotzalco",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "414711",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3981461",
    "name": "Tlaquepaque",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "575942",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3995402",
    "name": "Morelia",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "743275",
    "admin1_code": "16"
  },
  {
    "geoname_id": "4003757",
    "name": "Ciudad Benito Juárez",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "151893",
    "admin1_code": "19"
  },
  {
    "geoname_id": "4004867",
    "name": "Parral",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "104836",
    "admin1_code": "06"
  },
  {
    "geoname_id": "4005492",
    "name": "Guadalupe",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "673616",
    "admin1_code": "19"
  },
  {
    "geoname_id": "4011743",
    "name": "Victoria de Durango",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "518709",
    "admin1_code": "10"
  },
  {
    "geoname_id": "4013714",
    "name": "Ciudad Guzmán",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "111975",
    "admin1_code": "14"
  },
  {
    "geoname_id": "4014338",
    "name": "Chihuahua",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "925762",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1733432",
    "name": "Kota Kinabalu",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "500421",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1736309",
    "name": "Alor Setar",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "417800",
    "admin1_code": "02"
  },
  {
    "geoname_id": "4152820",
    "name": "Davie",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "100882",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4169171",
    "name": "Port Saint Lucie",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "164603",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4174715",
    "name": "Tallahassee",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "189907",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4259418",
    "name": "Indianapolis",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "887642",
    "admin1_code": "IN"
  },
  {
    "geoname_id": "4685907",
    "name": "Denton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "131044",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4839745",
    "name": "North Stamford",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "121230",
    "admin1_code": "CT"
  },
  {
    "geoname_id": "2989317",
    "name": "Orléans",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "116269",
    "admin1_code": "24"
  },
  {
    "geoname_id": "10859300",
    "name": "Lianyungang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2001009",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3671916",
    "name": "Popayán",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "318059",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3566067",
    "name": "Camagüey",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "347562",
    "admin1_code": "05"
  },
  {
    "geoname_id": "686967",
    "name": "Zhytomyr",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "261624",
    "admin1_code": "27"
  },
  {
    "geoname_id": "2744114",
    "name": "Zaanstad",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "140085",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2755003",
    "name": "Haarlem",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "147590",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2756669",
    "name": "Dordrecht",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "119260",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1282898",
    "name": "Pokhara",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "200000",
    "admin1_code": "4"
  },
  {
    "geoname_id": "288967",
    "name": "Seeb",
    "country_code": "OM",
    "cou_name_en": "Oman",
    "population": "470878",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3691175",
    "name": "Trujillo",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "919899",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3928128",
    "name": "Tacna",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "286240",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3931276",
    "name": "Puno",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "128637",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1715348",
    "name": "Davao",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "1776949",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1721080",
    "name": "Cagayan de Oro",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "445103",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1730737",
    "name": "Angeles City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "299391",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1166000",
    "name": "Sargodha",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "542603",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1175156",
    "name": "Kamalia",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "112426",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1176106",
    "name": "Jaranwala",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "119785",
    "admin1_code": "04"
  },
  {
    "geoname_id": "4568127",
    "name": "San Juan",
    "country_code": "PR",
    "cou_name_en": "Puerto Rico",
    "population": "418140",
    "admin1_code": "127"
  },
  {
    "geoname_id": "476077",
    "name": "Velikiye Luki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "103149",
    "admin1_code": "60"
  },
  {
    "geoname_id": "479411",
    "name": "Ukhta",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "102187",
    "admin1_code": "34"
  },
  {
    "geoname_id": "495136",
    "name": "Shchukino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "102000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "524294",
    "name": "Murom",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "126931",
    "admin1_code": "83"
  },
  {
    "geoname_id": "536164",
    "name": "Tsaritsyno",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "123000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "543878",
    "name": "Kostroma",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "277280",
    "admin1_code": "37"
  },
  {
    "geoname_id": "554840",
    "name": "Izhevsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "648213",
    "admin1_code": "80"
  },
  {
    "geoname_id": "1489425",
    "name": "Tomsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "574002",
    "admin1_code": "75"
  },
  {
    "geoname_id": "8504952",
    "name": "Krasnogvargeisky",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "337091",
    "admin1_code": "66"
  },
  {
    "geoname_id": "8504953",
    "name": "Admiralteisky",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "157897",
    "admin1_code": "66"
  },
  {
    "geoname_id": "103630",
    "name": "Najrān",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "505652",
    "admin1_code": "16"
  },
  {
    "geoname_id": "379062",
    "name": "Al Qadarif",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "363945",
    "admin1_code": "39"
  },
  {
    "geoname_id": "363807",
    "name": "Winejok",
    "country_code": "SS",
    "cou_name_en": "South Sudan, The Republic of",
    "population": "300000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1609350",
    "name": "Bangkok",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "5104476",
    "admin1_code": "40"
  },
  {
    "geoname_id": "303873",
    "name": "Nazilli",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "119370",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1673820",
    "name": "Kaohsiung",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "1519711",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1674504",
    "name": "Hualien City",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "350468",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3531732",
    "name": "Campeche",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "220389",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3817746",
    "name": "Tepexpan",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "102667",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3827409",
    "name": "Cuauhtémoc",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "531831",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3979770",
    "name": "Zapopan",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1476491",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2323411",
    "name": "Shagamu",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "214558",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2325314",
    "name": "Owo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "276574",
    "admin1_code": "48"
  },
  {
    "geoname_id": "4509884",
    "name": "Dayton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "137644",
    "admin1_code": "OH"
  },
  {
    "geoname_id": "4544349",
    "name": "Oklahoma City",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "681054",
    "admin1_code": "OK"
  },
  {
    "geoname_id": "4574324",
    "name": "Charleston",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "132609",
    "admin1_code": "SC"
  },
  {
    "geoname_id": "4705349",
    "name": "Laredo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "255473",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4741752",
    "name": "Wichita Falls",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "104710",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4776222",
    "name": "Norfolk",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "246393",
    "admin1_code": "VA"
  },
  {
    "geoname_id": "1176615",
    "name": "Islamabad",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "601600",
    "admin1_code": "08"
  },
  {
    "geoname_id": "12129605",
    "name": "Chakwama",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "200000",
    "admin1_code": "39"
  },
  {
    "geoname_id": "5014051",
    "name": "Warren",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "134056",
    "admin1_code": "MI"
  },
  {
    "geoname_id": "5072006",
    "name": "Lincoln",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "277348",
    "admin1_code": "NE"
  },
  {
    "geoname_id": "5110266",
    "name": "The Bronx",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "1385108",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5331835",
    "name": "Burbank",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "105319",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5392171",
    "name": "San Jose",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "1026908",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5393015",
    "name": "Santa Clara",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "126215",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5407933",
    "name": "West Covina",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "108484",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5412199",
    "name": "Arvada",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "115368",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "5513343",
    "name": "Sunrise Manor",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "189372",
    "admin1_code": "NV"
  },
  {
    "geoname_id": "1216265",
    "name": "Samarkand",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "513572",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3648546",
    "name": "Barinas",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "397279",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1565136",
    "name": "Thốt Nốt",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "158225",
    "admin1_code": "87"
  },
  {
    "geoname_id": "1583992",
    "name": "Da Nang",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "988561",
    "admin1_code": "78"
  },
  {
    "geoname_id": "963241",
    "name": "Randburg",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "337053",
    "admin1_code": "06"
  },
  {
    "geoname_id": "916095",
    "name": "Kabwe",
    "country_code": "ZM",
    "cou_name_en": "Zambia",
    "population": "188979",
    "admin1_code": "02"
  },
  {
    "geoname_id": "918702",
    "name": "Chipata",
    "country_code": "ZM",
    "cou_name_en": "Zambia",
    "population": "327059",
    "admin1_code": "03"
  },
  {
    "geoname_id": "888710",
    "name": "Kwekwe",
    "country_code": "ZW",
    "cou_name_en": "Zimbabwe",
    "population": "119863",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3181913",
    "name": "Bolzano",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "107436",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1852383",
    "name": "Minato",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "375339",
    "admin1_code": "43"
  },
  {
    "geoname_id": "1853574",
    "name": "Ōtsu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "343991",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1856717",
    "name": "Miyazaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "398215",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1858926",
    "name": "Komaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "148872",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1864031",
    "name": "Fukayachō",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "106595",
    "admin1_code": "34"
  },
  {
    "geoname_id": "2112539",
    "name": "Iwaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "357309",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6822129",
    "name": "Tama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "148285",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1873757",
    "name": "Namp’o",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "455000",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1877615",
    "name": "Haeju",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "222396",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1841603",
    "name": "Gyeongju",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "155237",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1522203",
    "name": "Kokshetau",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "150649",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1524325",
    "name": "Ekibastuz",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "121470",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1242110",
    "name": "Kalmunai",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "100171",
    "admin1_code": "37"
  },
  {
    "geoname_id": "598098",
    "name": "Klaipėda",
    "country_code": "LT",
    "cou_name_en": "Lithuania",
    "population": "172292",
    "admin1_code": "58"
  },
  {
    "geoname_id": "2210247",
    "name": "Tripoli",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "1150989",
    "admin1_code": "77"
  },
  {
    "geoname_id": "2537763",
    "name": "Sale",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "903485",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2490098",
    "name": "Mascara",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "150000",
    "admin1_code": "26"
  },
  {
    "geoname_id": "353225",
    "name": "Madīnat an Naşr",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "668413",
    "admin1_code": "11"
  },
  {
    "geoname_id": "355635",
    "name": "Idfū",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "133000",
    "admin1_code": "16"
  },
  {
    "geoname_id": "358108",
    "name": "Disūq",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "149291",
    "admin1_code": "21"
  },
  {
    "geoname_id": "361179",
    "name": "Al Ḩawāmidīyah",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "155055",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2514169",
    "name": "Marbella",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "134623",
    "admin1_code": "51"
  },
  {
    "geoname_id": "3130583",
    "name": "Alcobendas",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "107514",
    "admin1_code": "29"
  },
  {
    "geoname_id": "634963",
    "name": "Tampere",
    "country_code": "FI",
    "cou_name_en": "Finland",
    "population": "244315",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3021372",
    "name": "Dijon",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "158002",
    "admin1_code": "27"
  },
  {
    "geoname_id": "1253102",
    "name": "Visakhapatnam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1063178",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1258076",
    "name": "Rohtak",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "317245",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1258315",
    "name": "Raurkela",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "536450",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1261913",
    "name": "Nāngloi Jāt",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "194363",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1261931",
    "name": "Nandurbar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "100703",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1262710",
    "name": "Mothīhāri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "112144",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1264111",
    "name": "Māler Kotla",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "113840",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1264407",
    "name": "Mahbūbnagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "136135",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1266607",
    "name": "Khurja",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "105909",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1266945",
    "name": "Khardah",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "128346",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1268561",
    "name": "Kākināda",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "292923",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1269280",
    "name": "Jāmuria",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "160242",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1271685",
    "name": "Gangānagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "231838",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1272979",
    "name": "Dhanbad",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1196214",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1274056",
    "name": "Chitradurga",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "138587",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1275068",
    "name": "Burhānpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "202695",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1275362",
    "name": "Bokāro",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "564319",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1276321",
    "name": "Bhadrāvati",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "163903",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1277082",
    "name": "Baranagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "260072",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1278903",
    "name": "Amarnāth",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "217780",
    "admin1_code": "16"
  },
  {
    "geoname_id": "12501195",
    "name": "Shahuwadi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "180322",
    "admin1_code": "16"
  },
  {
    "geoname_id": "112646",
    "name": "Torbat-e Ḩeydarīyeh",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "125633",
    "admin1_code": "42"
  },
  {
    "geoname_id": "113646",
    "name": "Tabriz",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "1424641",
    "admin1_code": "33"
  },
  {
    "geoname_id": "117392",
    "name": "Saqqez",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "151237",
    "admin1_code": "16"
  },
  {
    "geoname_id": "124665",
    "name": "Mashhad",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "2307177",
    "admin1_code": "42"
  },
  {
    "geoname_id": "145459",
    "name": "Abadan",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "370180",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2844588",
    "name": "Rostock",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "198293",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2864118",
    "name": "Neuss",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "152457",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2873074",
    "name": "Marzahn",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "111508",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2887933",
    "name": "Kleinzschocher",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "597493",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2891122",
    "name": "Kiel",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "246601",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2911240",
    "name": "Hamm",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "178967",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2911522",
    "name": "Halle (Saale)",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "237865",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3598465",
    "name": "Chiquimula",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "111505",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1818446",
    "name": "Tuen Mun",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "507900",
    "admin1_code": "NTM"
  },
  {
    "geoname_id": "3610613",
    "name": "El Progreso",
    "country_code": "HN",
    "cou_name_en": "Honduras",
    "population": "100810",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3191648",
    "name": "Rijeka",
    "country_code": "HR",
    "cou_name_en": "Croatia",
    "population": "107964",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1625822",
    "name": "Surabaya",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "2874314",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1631393",
    "name": "Prabumulih",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "103470",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1635111",
    "name": "Mojokerto",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "133272",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1650234",
    "name": "Banjar",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "200970",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1651887",
    "name": "Adiwerna",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "134188",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2082539",
    "name": "Merauke",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "102351",
    "admin1_code": "PS"
  },
  {
    "geoname_id": "2639912",
    "name": "Preston",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "313332",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2644668",
    "name": "Leicester",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "368600",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2652618",
    "name": "Colchester",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "121859",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2310046",
    "name": "Bata",
    "country_code": "GQ",
    "cou_name_en": "Equatorial Guinea",
    "population": "173046",
    "admin1_code": "08"
  },
  {
    "geoname_id": "655194",
    "name": "Jyväskylä",
    "country_code": "FI",
    "cou_name_en": "Finland",
    "population": "144477",
    "admin1_code": "13"
  },
  {
    "geoname_id": "763166",
    "name": "Olsztyn",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "171803",
    "admin1_code": "85"
  },
  {
    "geoname_id": "3101619",
    "name": "Chorzów",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "113430",
    "admin1_code": "83"
  },
  {
    "geoname_id": "2267057",
    "name": "Lisbon",
    "country_code": "PT",
    "cou_name_en": "Portugal",
    "population": "517802",
    "admin1_code": "14"
  },
  {
    "geoname_id": "665850",
    "name": "Suceava",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "105796",
    "admin1_code": "34"
  },
  {
    "geoname_id": "670609",
    "name": "Piteşti",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "167669",
    "admin1_code": "03"
  },
  {
    "geoname_id": "473249",
    "name": "Vladikavkaz",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "306258",
    "admin1_code": "68"
  },
  {
    "geoname_id": "496348",
    "name": "Severnyy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "200000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "520494",
    "name": "Nizhny Tagil",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "381116",
    "admin1_code": "71"
  },
  {
    "geoname_id": "563514",
    "name": "Elista",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "106971",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1510853",
    "name": "Barnaul",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "632372",
    "admin1_code": "04"
  },
  {
    "geoname_id": "8504958",
    "name": "Akademicheskoe",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "103304",
    "admin1_code": "42"
  },
  {
    "geoname_id": "8504960",
    "name": "Centralniy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "214625",
    "admin1_code": "66"
  },
  {
    "geoname_id": "107304",
    "name": "Buraydah",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "745353",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2244802",
    "name": "Thiès",
    "country_code": "SN",
    "cou_name_en": "Senegal",
    "population": "320000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "53654",
    "name": "Mogadishu",
    "country_code": "SO",
    "cou_name_en": "Somalia",
    "population": "2587183",
    "admin1_code": "02"
  },
  {
    "geoname_id": "169577",
    "name": "Homs",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "775404",
    "admin1_code": "11"
  },
  {
    "geoname_id": "322830",
    "name": "Aydın",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "163022",
    "admin1_code": "09"
  },
  {
    "geoname_id": "741100",
    "name": "Ordu",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "229214",
    "admin1_code": "52"
  },
  {
    "geoname_id": "1670029",
    "name": "Banqiao",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "543342",
    "admin1_code": "03"
  },
  {
    "geoname_id": "12382296",
    "name": "Thuận An",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "588616",
    "admin1_code": "75"
  },
  {
    "geoname_id": "71137",
    "name": "Sanaa",
    "country_code": "YE",
    "cou_name_en": "Yemen",
    "population": "1937451",
    "admin1_code": "26"
  },
  {
    "geoname_id": "964137",
    "name": "Pretoria",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "1619438",
    "admin1_code": "06"
  },
  {
    "geoname_id": "965301",
    "name": "Pietermaritzburg",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "750845",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3518692",
    "name": "San Juan del Río",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "138878",
    "admin1_code": "22"
  },
  {
    "geoname_id": "3522507",
    "name": "Oaxaca",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "255029",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3523183",
    "name": "Minatitlán",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "112046",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3529612",
    "name": "Ecatepec de Morelos",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1645352",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3531673",
    "name": "Cancún",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "628306",
    "admin1_code": "23"
  },
  {
    "geoname_id": "4004898",
    "name": "Hermosillo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "812229",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1735158",
    "name": "Petaling Jaya",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "902086",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1736372",
    "name": "Pasir Mas",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "230424",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2317765",
    "name": "Zaria",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "975153",
    "admin1_code": "23"
  },
  {
    "geoname_id": "2328811",
    "name": "Nkpor",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "103733",
    "admin1_code": "25"
  },
  {
    "geoname_id": "281129",
    "name": "Jabālyā",
    "country_code": "PS",
    "cou_name_en": "West Bank and Gaza Strip",
    "population": "168568",
    "admin1_code": "GZ"
  },
  {
    "geoname_id": "3438115",
    "name": "Fernando de la Mora",
    "country_code": "PY",
    "cou_name_en": "Paraguay",
    "population": "120167",
    "admin1_code": "06"
  },
  {
    "geoname_id": "683844",
    "name": "Braşov",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "253200",
    "admin1_code": "09"
  },
  {
    "geoname_id": "11048317",
    "name": "Sector 1",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "225453",
    "admin1_code": "10"
  },
  {
    "geoname_id": "472761",
    "name": "Volgodonsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "167731",
    "admin1_code": "61"
  },
  {
    "geoname_id": "481453",
    "name": "Troparëvo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "118000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "484972",
    "name": "Syzran",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "189338",
    "admin1_code": "65"
  },
  {
    "geoname_id": "487928",
    "name": "Staryy Oskol",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "226977",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3029241",
    "name": "Caen",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "110624",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3672778",
    "name": "Pasto",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "392930",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3682018",
    "name": "Girón",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "108466",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3544091",
    "name": "Pinar del Río",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "186990",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2498392",
    "name": "El Eulma",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "128351",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2498954",
    "name": "Ech Chettia",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "167955",
    "admin1_code": "41"
  },
  {
    "geoname_id": "2509954",
    "name": "Valencia",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "789744",
    "admin1_code": "60"
  },
  {
    "geoname_id": "3119841",
    "name": "A Coruña",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "246056",
    "admin1_code": "58"
  },
  {
    "geoname_id": "6544106",
    "name": "Ciutat Vella",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "102347",
    "admin1_code": "56"
  },
  {
    "geoname_id": "6544489",
    "name": "Latina",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "256644",
    "admin1_code": "29"
  },
  {
    "geoname_id": "339686",
    "name": "Debre Tabor",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "119176",
    "admin1_code": "46"
  },
  {
    "geoname_id": "1255634",
    "name": "Srinagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "975857",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1259827",
    "name": "Phagwāra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "100146",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1266976",
    "name": "Kharagpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "219665",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1270711",
    "name": "Guna",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "153689",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1272175",
    "name": "Durgapur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "518872",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1277599",
    "name": "Balasore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "114321",
    "admin1_code": "21"
  },
  {
    "geoname_id": "6992326",
    "name": "Mohali",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "123484",
    "admin1_code": "23"
  },
  {
    "geoname_id": "7302833",
    "name": "Gajuwaka",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "258944",
    "admin1_code": "02"
  },
  {
    "geoname_id": "418863",
    "name": "Isfahan",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "1547164",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3185728",
    "name": "Durrës",
    "country_code": "AL",
    "cou_name_en": "Albania",
    "population": "122034",
    "admin1_code": "42"
  },
  {
    "geoname_id": "3429886",
    "name": "Posadas",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "305874",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3436077",
    "name": "Belgrano",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "138942",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3836873",
    "name": "San Miguel de Tucumán",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "548866",
    "admin1_code": "24"
  },
  {
    "geoname_id": "2852566",
    "name": "Porz am Rhein",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "113415",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2864072",
    "name": "Neue Neustadt",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "226851",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2870221",
    "name": "Moers",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "103487",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1798654",
    "name": "Pingxiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "893550",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1801180",
    "name": "Maoming",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1307802",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1803245",
    "name": "Lishui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "451418",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1803367",
    "name": "Qingnian",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "110046",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1807544",
    "name": "Daxing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "104904",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1812955",
    "name": "Dezhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "679535",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1813425",
    "name": "Datun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "110258",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1815577",
    "name": "Changsha",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3093980",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1817968",
    "name": "Anshun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "765313",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1997228",
    "name": "Hedong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "101825",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2034714",
    "name": "Siping",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "555609",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2034754",
    "name": "Shunyi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "117623",
    "admin1_code": "22"
  },
  {
    "geoname_id": "2034786",
    "name": "Shuangyashan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "600000",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2035261",
    "name": "Qitaihe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "345033",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2036581",
    "name": "Jiamusi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "549549",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2743477",
    "name": "Zwolle",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "111805",
    "admin1_code": "15"
  },
  {
    "geoname_id": "12358476",
    "name": "Hechi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "330131",
    "admin1_code": "16"
  },
  {
    "geoname_id": "12358616",
    "name": "Yintai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "217509",
    "admin1_code": "26"
  },
  {
    "geoname_id": "12492660",
    "name": "Longling County",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "270000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3682631",
    "name": "Envigado",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "163007",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3564124",
    "name": "Cienfuegos",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "186644",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3568342",
    "name": "Arroyo Naranjo",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "210053",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3746181",
    "name": "Ciudad Camilo Cienfuegos",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "178041",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3397147",
    "name": "Juazeiro do Norte",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "225230",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3445831",
    "name": "Uberlândia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "563536",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3446682",
    "name": "Taubaté",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "317915",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3448742",
    "name": "São José",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "200000",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3450144",
    "name": "Santa Luzia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "243503",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3451190",
    "name": "Rio de Janeiro",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "6747815",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3451328",
    "name": "Ribeirão Preto",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "711825",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3460950",
    "name": "Itaboraí",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "182498",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3464975",
    "name": "Curitiba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "1948626",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3472177",
    "name": "Angra dos Reis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "153635",
    "admin1_code": "21"
  },
  {
    "geoname_id": "626081",
    "name": "Lida",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "102700",
    "admin1_code": "03"
  },
  {
    "geoname_id": "5911592",
    "name": "Burlington",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "183314",
    "admin1_code": "08"
  },
  {
    "geoname_id": "5990579",
    "name": "Kelowna",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "142146",
    "admin1_code": "02"
  },
  {
    "geoname_id": "6074377",
    "name": "Milton",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "132979",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6092122",
    "name": "Oakville",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "193832",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2288829",
    "name": "Gagnoa",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "277044",
    "admin1_code": "95"
  },
  {
    "geoname_id": "3874096",
    "name": "Quilpué",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "130263",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1784580",
    "name": "Zhenzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "176006",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1786770",
    "name": "Yibin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "836340",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1793724",
    "name": "Tai’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1735425",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1796669",
    "name": "Sanmenxia",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "669307",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1797063",
    "name": "Rui’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "927383",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1799397",
    "name": "Ningbo",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3731203",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1801909",
    "name": "Luojiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "212186",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1803551",
    "name": "Beiliu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "199769",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1805179",
    "name": "Jiujiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1164268",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1805987",
    "name": "Jiaozuo",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "865413",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1806299",
    "name": "Jiangmen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1795459",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1806776",
    "name": "Huizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2900113",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1808956",
    "name": "Changzhi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1214940",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1810821",
    "name": "Fuzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3740000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1813325",
    "name": "Dazhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1589435",
    "admin1_code": "32"
  },
  {
    "geoname_id": "2035966",
    "name": "Longjing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "117185",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2037013",
    "name": "Harbin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "5242897",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2037086",
    "name": "Haicheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "191651",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2038342",
    "name": "Beipiao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "154999",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1140026",
    "name": "Herāt",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "574300",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3427833",
    "name": "Tandil",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "115877",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3835994",
    "name": "Santa Rosa",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "102860",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2761369",
    "name": "Vienna",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "1691468",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1185107",
    "name": "Shibganj",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "378701",
    "admin1_code": "83"
  },
  {
    "geoname_id": "1185191",
    "name": "Kushtia",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "135724",
    "admin1_code": "82"
  },
  {
    "geoname_id": "1337240",
    "name": "Nawābganj",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "142361",
    "admin1_code": "83"
  },
  {
    "geoname_id": "498677",
    "name": "Saratov",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "844858",
    "admin1_code": "67"
  },
  {
    "geoname_id": "571476",
    "name": "Bryansk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "427236",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1504826",
    "name": "Kamensk-Ural’skiy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "182500",
    "admin1_code": "71"
  },
  {
    "geoname_id": "2019528",
    "name": "Nakhodka",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "146920",
    "admin1_code": "59"
  },
  {
    "geoname_id": "380173",
    "name": "Ed Damer",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "103941",
    "admin1_code": "53"
  },
  {
    "geoname_id": "3383330",
    "name": "Paramaribo",
    "country_code": "SR",
    "cou_name_en": "Suriname",
    "population": "223757",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3583446",
    "name": "San Miguel",
    "country_code": "SV",
    "cou_name_en": "El Salvador",
    "population": "247126",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3587345",
    "name": "Apopa",
    "country_code": "SV",
    "cou_name_en": "El Salvador",
    "population": "112158",
    "admin1_code": "10"
  },
  {
    "geoname_id": "706483",
    "name": "Kharkiv",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "1433886",
    "admin1_code": "07"
  },
  {
    "geoname_id": "713716",
    "name": "Alchevsk",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "106062",
    "admin1_code": "14"
  },
  {
    "geoname_id": "4068590",
    "name": "Huntsville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "215006",
    "admin1_code": "AL"
  },
  {
    "geoname_id": "4164601",
    "name": "Miramar",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "137132",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4167499",
    "name": "Palm Bay",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "107888",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4905687",
    "name": "Peoria",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "115070",
    "admin1_code": "IL"
  },
  {
    "geoname_id": "728193",
    "name": "Plovdiv",
    "country_code": "BG",
    "cou_name_en": "Bulgaria",
    "population": "346893",
    "admin1_code": "51"
  },
  {
    "geoname_id": "2394819",
    "name": "Cotonou",
    "country_code": "BJ",
    "cou_name_en": "Benin",
    "population": "780000",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3387296",
    "name": "Sobral",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "157996",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3389321",
    "name": "Santa Rita",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "119893",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3389353",
    "name": "Santarém",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "189047",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3399058",
    "name": "Garanhuns",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "110085",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3449344",
    "name": "São Bernardo do Campo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "743372",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3450269",
    "name": "Santa Cruz do Sul",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "106113",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3451138",
    "name": "Rio Grande",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "187838",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3452925",
    "name": "Porto Alegre",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "1488252",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3457671",
    "name": "Maringá",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "311724",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3459505",
    "name": "Juiz de Fora",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "573285",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3463478",
    "name": "Feira de Santana",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "619609",
    "admin1_code": "05"
  },
  {
    "geoname_id": "625144",
    "name": "Minsk",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "1742124",
    "admin1_code": "04"
  },
  {
    "geoname_id": "5894171",
    "name": "Barrie",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "141434",
    "admin1_code": "08"
  },
  {
    "geoname_id": "5959974",
    "name": "Gatineau",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "242124",
    "admin1_code": "10"
  },
  {
    "geoname_id": "6087029",
    "name": "Nepean",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "180000",
    "admin1_code": "08"
  },
  {
    "geoname_id": "922704",
    "name": "Lubumbashi",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "1373770",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2660646",
    "name": "Genève",
    "country_code": "CH",
    "cou_name_en": "Switzerland",
    "population": "183981",
    "admin1_code": "GE"
  },
  {
    "geoname_id": "300619",
    "name": "Sivas",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "264022",
    "admin1_code": "58"
  },
  {
    "geoname_id": "745169",
    "name": "İnegol",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "133959",
    "admin1_code": "16"
  },
  {
    "geoname_id": "7627067",
    "name": "Bahçelievler",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "576799",
    "admin1_code": "34"
  },
  {
    "geoname_id": "963230",
    "name": "Randfontein",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "133654",
    "admin1_code": "06"
  },
  {
    "geoname_id": "976361",
    "name": "Middelburg",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "154706",
    "admin1_code": "07"
  },
  {
    "geoname_id": "986822",
    "name": "Krugersdorp",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "378821",
    "admin1_code": "06"
  },
  {
    "geoname_id": "909863",
    "name": "Luanshya",
    "country_code": "ZM",
    "cou_name_en": "Zambia",
    "population": "113365",
    "admin1_code": "08"
  },
  {
    "geoname_id": "158151",
    "name": "Katumba",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "108558",
    "admin1_code": "09"
  },
  {
    "geoname_id": "160196",
    "name": "Dodoma",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "180541",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2756071",
    "name": "Enschede",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "153655",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3947322",
    "name": "Arequipa",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "1008290",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1684712",
    "name": "Tacloban",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "242089",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1722930",
    "name": "Bulaon",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "131818",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1163198",
    "name": "Tordher",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "150000",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1165108",
    "name": "Shikarpur",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "156901",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1169605",
    "name": "Muzaffargarh",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "165192",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1169825",
    "name": "Multan",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "1437230",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1171123",
    "name": "Mandi Bahauddin",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "129733",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1174167",
    "name": "Khanpur",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "142426",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1181073",
    "name": "Chishtian",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "122199",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1183883",
    "name": "Bahawalnagar",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "126617",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3183539",
    "name": "Acilia-Castel Fusano-Ostia Antica",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "129362",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1849372",
    "name": "Uji",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "192925",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1850158",
    "name": "Tokushima",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "267345",
    "admin1_code": "39"
  },
  {
    "geoname_id": "1852225",
    "name": "Shimonoseki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "265684",
    "admin1_code": "45"
  },
  {
    "geoname_id": "1853195",
    "name": "Sakai",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "782339",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1854747",
    "name": "Odawara",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "188482",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1855078",
    "name": "Noda",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "154114",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1856057",
    "name": "Nagoya",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "2191279",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1858729",
    "name": "Koshigaya",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "345353",
    "admin1_code": "34"
  },
  {
    "geoname_id": "6822174",
    "name": "Nasushiobara",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "115794",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1822214",
    "name": "Siem Reap",
    "country_code": "KH",
    "cou_name_en": "Cambodia",
    "population": "139458",
    "admin1_code": "24"
  },
  {
    "geoname_id": "285839",
    "name": "Al Aḩmadī",
    "country_code": "KW",
    "cou_name_en": "Kuwait",
    "population": "637411",
    "admin1_code": "04"
  },
  {
    "geoname_id": "276781",
    "name": "Beirut",
    "country_code": "LB",
    "cou_name_en": "Lebanon",
    "population": "1916100",
    "admin1_code": "04"
  },
  {
    "geoname_id": "278913",
    "name": "Nabatîyé et Tahta",
    "country_code": "LB",
    "cou_name_en": "Lebanon",
    "population": "120000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1234633",
    "name": "Moratuwa",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "168280",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1242833",
    "name": "Jaffna",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "169102",
    "admin1_code": "38"
  },
  {
    "geoname_id": "2543549",
    "name": "Larache",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "109294",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2544571",
    "name": "Kenitra",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "366570",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2451478",
    "name": "Ségou",
    "country_code": "ML",
    "cou_name_en": "Mali",
    "population": "153349",
    "admin1_code": "05"
  },
  {
    "geoname_id": "927967",
    "name": "Lilongwe",
    "country_code": "MW",
    "cou_name_en": "Malawi",
    "population": "646750",
    "admin1_code": "C"
  },
  {
    "geoname_id": "3514519",
    "name": "Xico",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "356352",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3514783",
    "name": "Veracruz",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "428323",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1818558",
    "name": "Tin Shui Wai",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "282400",
    "admin1_code": "NYL"
  },
  {
    "geoname_id": "1632197",
    "name": "Paseh",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "126181",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1639362",
    "name": "Kresek",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "110182",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1646448",
    "name": "Cimahi",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "568400",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1647003",
    "name": "Cibinong",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "363424",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1649881",
    "name": "Batang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "127832",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1185121",
    "name": "Shāhzādpur",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "102420",
    "admin1_code": "83"
  },
  {
    "geoname_id": "1185186",
    "name": "Comilla",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "1030000",
    "admin1_code": "84"
  },
  {
    "geoname_id": "1187530",
    "name": "Sonārgaon",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "130000",
    "admin1_code": "81"
  },
  {
    "geoname_id": "1203344",
    "name": "Farīdpur",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "112187",
    "admin1_code": "81"
  },
  {
    "geoname_id": "2284647",
    "name": "Man",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "241969",
    "admin1_code": "78"
  },
  {
    "geoname_id": "3870011",
    "name": "Temuco",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "238129",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2232239",
    "name": "Edéa",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "203149",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1529376",
    "name": "Korla",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "549324",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1529531",
    "name": "Dunhuang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "186027",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1785453",
    "name": "Zaozhuang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "899753",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1788245",
    "name": "Xiuying",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "290000",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1790645",
    "name": "Xiamen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "4617251",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1793036",
    "name": "Chengtangcun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "105456",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1793419",
    "name": "Binhe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "278055",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1795565",
    "name": "Shenzhen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "17494398",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2653941",
    "name": "Cambridge",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "145674",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2294915",
    "name": "Takoradi",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "232919",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2422465",
    "name": "Conakry",
    "country_code": "GN",
    "cou_name_en": "Guinea",
    "population": "1767200",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2642607",
    "name": "Middlesbrough",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "142707",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2800866",
    "name": "Brussels",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "1019022",
    "admin1_code": "BRU"
  },
  {
    "geoname_id": "4951788",
    "name": "Springfield",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "154341",
    "admin1_code": "MA"
  },
  {
    "geoname_id": "5134086",
    "name": "Rochester",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "209802",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5377995",
    "name": "Norwalk",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "107140",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5530022",
    "name": "San Angelo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "100450",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "5729485",
    "name": "Gresham",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110553",
    "admin1_code": "OR"
  },
  {
    "geoname_id": "3441575",
    "name": "Montevideo",
    "country_code": "UY",
    "cou_name_en": "Uruguay",
    "population": "1270737",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3625549",
    "name": "Valencia",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "1619470",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3641099",
    "name": "El Vigía",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "108668",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3644918",
    "name": "Cúa",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "182558",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1572151",
    "name": "Nha Trang",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "283441",
    "admin1_code": "54"
  },
  {
    "geoname_id": "1283240",
    "name": "Kathmandu",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "1442271",
    "admin1_code": "3"
  },
  {
    "geoname_id": "2190324",
    "name": "Hamilton",
    "country_code": "NZ",
    "cou_name_en": "New Zealand",
    "population": "178500",
    "admin1_code": "G1"
  },
  {
    "geoname_id": "289011",
    "name": "Rustaq",
    "country_code": "OM",
    "cou_name_en": "Oman",
    "population": "120000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3938527",
    "name": "Ica",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "282407",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1701966",
    "name": "Mandaluyong City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "425758",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1704703",
    "name": "Mabalacat City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "188050",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1707174",
    "name": "Las Piñas",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "590000",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1720840",
    "name": "Cainta",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "283172",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1721281",
    "name": "Cabuyao",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "308745",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1162813",
    "name": "Vihari",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "112840",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1163965",
    "name": "Tando Allahyar",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "127202",
    "admin1_code": "05"
  },
  {
    "geoname_id": "501175",
    "name": "Rostov-na-Donu",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1130305",
    "admin1_code": "61"
  },
  {
    "geoname_id": "518557",
    "name": "Novomoskovsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "130982",
    "admin1_code": "76"
  },
  {
    "geoname_id": "2014407",
    "name": "Ulan-Ude",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "360278",
    "admin1_code": "11"
  },
  {
    "geoname_id": "106281",
    "name": "Ha'il",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "605930",
    "admin1_code": "13"
  },
  {
    "geoname_id": "108512",
    "name": "Arar",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "148540",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2244322",
    "name": "Touba",
    "country_code": "SN",
    "cou_name_en": "Senegal",
    "population": "529176",
    "admin1_code": "03"
  },
  {
    "geoname_id": "170654",
    "name": "Damascus",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "1569394",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2366152",
    "name": "Kara",
    "country_code": "TG",
    "cou_name_en": "Togo",
    "population": "104207",
    "admin1_code": "23"
  },
  {
    "geoname_id": "2464470",
    "name": "Tunis",
    "country_code": "TN",
    "cou_name_en": "Tunisia",
    "population": "693210",
    "admin1_code": "36"
  },
  {
    "geoname_id": "300822",
    "name": "Siirt",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "114034",
    "admin1_code": "74"
  },
  {
    "geoname_id": "307864",
    "name": "Kilis",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "111648",
    "admin1_code": "90"
  },
  {
    "geoname_id": "743882",
    "name": "Kastamonu",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "125622",
    "admin1_code": "37"
  },
  {
    "geoname_id": "751868",
    "name": "Arnavutköy",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "198165",
    "admin1_code": "34"
  },
  {
    "geoname_id": "680963",
    "name": "Constanţa",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "317832",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3194360",
    "name": "Novi Sad",
    "country_code": "RS",
    "cou_name_en": "Serbia",
    "population": "215400",
    "admin1_code": "VO"
  },
  {
    "geoname_id": "490971",
    "name": "Solntsevo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "120000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "250799",
    "name": "‘Ajlūn",
    "country_code": "JO",
    "cou_name_en": "Jordan",
    "population": "125557",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1854902",
    "name": "Numazu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "189486",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1865005",
    "name": "Ashikaga",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "143653",
    "admin1_code": "38"
  },
  {
    "geoname_id": "2112656",
    "name": "Ichinoseki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "114476",
    "admin1_code": "16"
  },
  {
    "geoname_id": "6822179",
    "name": "Inzai",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "105463",
    "admin1_code": "04"
  },
  {
    "geoname_id": "6822188",
    "name": "Ōsaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "128763",
    "admin1_code": "24"
  },
  {
    "geoname_id": "7279570",
    "name": "Higashimurayama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "148275",
    "admin1_code": "40"
  },
  {
    "geoname_id": "11611478",
    "name": "Yamato",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "242065",
    "admin1_code": "19"
  },
  {
    "geoname_id": "192126",
    "name": "Kikuyu",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "323881",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1845136",
    "name": "Chuncheon",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "209746",
    "admin1_code": "06"
  },
  {
    "geoname_id": "608668",
    "name": "Oral",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "330000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3520339",
    "name": "Reynosa",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "589466",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3526700",
    "name": "Iztacalco",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "384326",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3530937",
    "name": "Chicoloapan",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "172919",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3996322",
    "name": "Mazatlán",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "381583",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1734199",
    "name": "Tawau",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "372615",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1734634",
    "name": "Ipoh",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "840000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1735227",
    "name": "Kuantan",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "548014",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2327143",
    "name": "Okigwe",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "115499",
    "admin1_code": "28"
  },
  {
    "geoname_id": "2331447",
    "name": "Maiduguri",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "758700",
    "admin1_code": "27"
  },
  {
    "geoname_id": "2337207",
    "name": "Ise-Ekiti",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "190063",
    "admin1_code": "54"
  },
  {
    "geoname_id": "2542051",
    "name": "Mohammedia",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "187708",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3193044",
    "name": "Podgorica",
    "country_code": "ME",
    "cou_name_en": "Montenegro",
    "population": "236852",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1298824",
    "name": "Yangon",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "4477638",
    "admin1_code": "17"
  },
  {
    "geoname_id": "2343093",
    "name": "Esuk Oron",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "112033",
    "admin1_code": "21"
  },
  {
    "geoname_id": "2352379",
    "name": "Ado-Ekiti",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "424340",
    "admin1_code": "54"
  },
  {
    "geoname_id": "755330",
    "name": "Wola",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "140958",
    "admin1_code": "78"
  },
  {
    "geoname_id": "5043473",
    "name": "Rochester",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "112225",
    "admin1_code": "MN"
  },
  {
    "geoname_id": "5116495",
    "name": "Elmhurst",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "113364",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5295985",
    "name": "Glendale",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "240126",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5345743",
    "name": "El Monte",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "116732",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5379439",
    "name": "Ontario",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "171214",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5551123",
    "name": "Alhambra",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "127764",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5574991",
    "name": "Boulder",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "107349",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "601294",
    "name": "Nukus",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "332500",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1514588",
    "name": "Andijon",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "447800",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3625710",
    "name": "Upata",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "112617",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3640226",
    "name": "Guanare",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "112286",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3641351",
    "name": "El Tigre",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "222450",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1562773",
    "name": "Vĩnh Châu",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "183918",
    "admin1_code": "65"
  },
  {
    "geoname_id": "1568212",
    "name": "Sa Dec",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "203588",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1581298",
    "name": "Haiphong",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "841520",
    "admin1_code": "13"
  },
  {
    "geoname_id": "693805",
    "name": "Simferopol",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "336460",
    "admin1_code": "11"
  },
  {
    "geoname_id": "707471",
    "name": "Ivano-Frankivsk",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "238196",
    "admin1_code": "06"
  },
  {
    "geoname_id": "4299276",
    "name": "Louisville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "243639",
    "admin1_code": "KY"
  },
  {
    "geoname_id": "4845193",
    "name": "Waterbury",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "108802",
    "admin1_code": "CT"
  },
  {
    "geoname_id": "76184",
    "name": "Dhamār",
    "country_code": "YE",
    "cou_name_en": "Yemen",
    "population": "160114",
    "admin1_code": "11"
  },
  {
    "geoname_id": "964420",
    "name": "Port Elizabeth",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "967677",
    "admin1_code": "05"
  },
  {
    "geoname_id": "970566",
    "name": "Nigel",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "140644",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3369157",
    "name": "Cape Town",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "4710000",
    "admin1_code": "11"
  },
  {
    "geoname_id": "8594670",
    "name": "Xingning",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "274499",
    "admin1_code": "30"
  },
  {
    "geoname_id": "9181182",
    "name": "Puyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "655674",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3666304",
    "name": "Valledupar",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "490075",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3675443",
    "name": "Manizales",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "434403",
    "admin1_code": "37"
  },
  {
    "geoname_id": "3680656",
    "name": "Ibagué",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "529635",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3068160",
    "name": "Pilsen",
    "country_code": "CZ",
    "cou_name_en": "Czech Republic",
    "population": "168733",
    "admin1_code": "87"
  },
  {
    "geoname_id": "2808473",
    "name": "Wilmersdorf",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "101877",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2821164",
    "name": "Trier",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "100129",
    "admin1_code": "08"
  },
  {
    "geoname_id": "294801",
    "name": "Haifa",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "285316",
    "admin1_code": "04"
  },
  {
    "geoname_id": "295530",
    "name": "Beersheba",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "186600",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1253405",
    "name": "Varanasi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1164404",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1254187",
    "name": "Thrissur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "315957",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1254309",
    "name": "Titāgarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "127751",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1255560",
    "name": "Sūjāngarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "183808",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1258599",
    "name": "Rāmpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "296418",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1259425",
    "name": "Puducherry",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "657209",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1262209",
    "name": "Nagda",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "103501",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1269723",
    "name": "Ingrāj Bāzār",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "170039",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1270752",
    "name": "Kalaburagi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "483615",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1271107",
    "name": "Godhra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "131913",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1271715",
    "name": "Gandhinagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "195985",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1275841",
    "name": "Bhopāl",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1599914",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1277100",
    "name": "Bārākpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "148174",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1279259",
    "name": "Agra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1430055",
    "admin1_code": "36"
  },
  {
    "geoname_id": "12501153",
    "name": "Kanayannur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "851406",
    "admin1_code": "13"
  },
  {
    "geoname_id": "94787",
    "name": "Kirkuk",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "1031000",
    "admin1_code": "13"
  },
  {
    "geoname_id": "98860",
    "name": "Najaf",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "482576",
    "admin1_code": "17"
  },
  {
    "geoname_id": "99071",
    "name": "Al Mawşil al Jadīdah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "2065597",
    "admin1_code": "15"
  },
  {
    "geoname_id": "117574",
    "name": "Sanandaj",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "349176",
    "admin1_code": "16"
  },
  {
    "geoname_id": "121380",
    "name": "Pārsābād",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "101661",
    "admin1_code": "32"
  },
  {
    "geoname_id": "139889",
    "name": "Būkān",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "213331",
    "admin1_code": "01"
  },
  {
    "geoname_id": "140380",
    "name": "Bojnūrd",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "192041",
    "admin1_code": "43"
  },
  {
    "geoname_id": "2523630",
    "name": "Reggio Calabria",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "182455",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3177090",
    "name": "Ferrara",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "132009",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2618425",
    "name": "Copenhagen",
    "country_code": "DK",
    "cou_name_en": "Denmark",
    "population": "1153615",
    "admin1_code": "17"
  },
  {
    "geoname_id": "2498766",
    "name": "El Achir",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "158333",
    "admin1_code": "39"
  },
  {
    "geoname_id": "633679",
    "name": "Turku",
    "country_code": "FI",
    "cou_name_en": "Finland",
    "population": "195301",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2998324",
    "name": "Lille",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "234475",
    "admin1_code": "32"
  },
  {
    "geoname_id": "3030300",
    "name": "Brest",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "144899",
    "admin1_code": "53"
  },
  {
    "geoname_id": "3038354",
    "name": "Aix-en-Provence",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "146821",
    "admin1_code": "93"
  },
  {
    "geoname_id": "2856883",
    "name": "Osnabrück",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "166462",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2857458",
    "name": "Oldenburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "159218",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1818920",
    "name": "Sha Tin",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "495200",
    "admin1_code": "NST"
  },
  {
    "geoname_id": "1624725",
    "name": "Tarakan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "242786",
    "admin1_code": "42"
  },
  {
    "geoname_id": "1625084",
    "name": "Tangerang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1911914",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1630333",
    "name": "Purwodadi",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "139387",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1642548",
    "name": "Jepara",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1257912",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1648759",
    "name": "Bima",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "155140",
    "admin1_code": "17"
  },
  {
    "geoname_id": "2637487",
    "name": "Southampton",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "269781",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2646003",
    "name": "Islington",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "319143",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2296606",
    "name": "Obuase",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "137856",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2973783",
    "name": "Strasbourg",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "274845",
    "admin1_code": "44"
  },
  {
    "geoname_id": "2991214",
    "name": "Mulhouse",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "111430",
    "admin1_code": "44"
  },
  {
    "geoname_id": "3903987",
    "name": "Sucre",
    "country_code": "BO",
    "cou_name_en": "Bolivia",
    "population": "224838",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3407669",
    "name": "Ananindeua",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "433956",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3448031",
    "name": "Sapucaia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "130937",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3460370",
    "name": "Jacareí",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "213110",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3469989",
    "name": "Birigui",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "102277",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3470353",
    "name": "Barueri",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "251994",
    "admin1_code": "27"
  },
  {
    "geoname_id": "6317872",
    "name": "Parauapebas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "196259",
    "admin1_code": "16"
  },
  {
    "geoname_id": "625665",
    "name": "Mahilyow",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "369200",
    "admin1_code": "06"
  },
  {
    "geoname_id": "6146143",
    "name": "Sherbrooke",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "129447",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2657896",
    "name": "Zürich",
    "country_code": "CH",
    "cou_name_en": "Switzerland",
    "population": "341730",
    "admin1_code": "ZH"
  },
  {
    "geoname_id": "3870282",
    "name": "Talcahuano",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "252968",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3873775",
    "name": "Rancagua",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "212695",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3882428",
    "name": "Los Ángeles",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "125430",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3899539",
    "name": "Antofagasta",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "352638",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1280037",
    "name": "Shache",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "128145",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1529435",
    "name": "Yili",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "269158",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1783700",
    "name": "Zitong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "212819",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1785974",
    "name": "Yuci",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "235929",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1786067",
    "name": "Qianjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "179079",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1788534",
    "name": "Xinyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1230042",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1790894",
    "name": "Wuxue",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "220661",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1791636",
    "name": "Weinan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1199290",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1791779",
    "name": "Wanning",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "545992",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1792260",
    "name": "Wafangdian",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "250591",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1795270",
    "name": "Shijiazhuang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3938513",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1796421",
    "name": "Shahecheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "125132",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1804591",
    "name": "Laiwu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "989535",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1804850",
    "name": "Kaiyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "198423",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1805298",
    "name": "Jinzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "215386",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1807508",
    "name": "Huanggang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "225956",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1808370",
    "name": "Hengyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1075516",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1808950",
    "name": "Hanfeng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "196528",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1814093",
    "name": "Dali",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "235305",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2036418",
    "name": "Jishu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "103988",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2038180",
    "name": "Changchun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "4714996",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1185115",
    "name": "Sirajganj",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "127481",
    "admin1_code": "83"
  },
  {
    "geoname_id": "586523",
    "name": "Ganja",
    "country_code": "AZ",
    "cou_name_en": "Azerbaijan",
    "population": "335600",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2188164",
    "name": "Lower Hutt",
    "country_code": "NZ",
    "cou_name_en": "New Zealand",
    "population": "112500",
    "admin1_code": "G2"
  },
  {
    "geoname_id": "3937513",
    "name": "Juliaca",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "245675",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1681602",
    "name": "Toledo",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "207314",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1163967",
    "name": "Tando Adam",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "125598",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3488465",
    "name": "Spanish Town",
    "country_code": "JM",
    "cou_name_en": "Jamaica",
    "population": "145018",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1851012",
    "name": "Takarazuka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "219789",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1856215",
    "name": "Nagano",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "360176",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1865714",
    "name": "Ageoshimo",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "219401",
    "admin1_code": "34"
  },
  {
    "geoname_id": "191299",
    "name": "Kisii",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "112417",
    "admin1_code": "25"
  },
  {
    "geoname_id": "2544001",
    "name": "Ksar El Kebir",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "108753",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1053384",
    "name": "Toamasina",
    "country_code": "MG",
    "cou_name_en": "Madagascar",
    "population": "325857",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1069129",
    "name": "Antsiranana",
    "country_code": "MG",
    "cou_name_en": "Madagascar",
    "population": "129320",
    "admin1_code": "71"
  },
  {
    "geoname_id": "1292288",
    "name": "Thaton",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "123727",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3991328",
    "name": "Puerto Vallarta",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "203342",
    "admin1_code": "14"
  },
  {
    "geoname_id": "4013728",
    "name": "Ciudad Acuña",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "134233",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1732903",
    "name": "Shah Alam",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "740750",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2448085",
    "name": "Agadez",
    "country_code": "NE",
    "cou_name_en": "Niger",
    "population": "124324",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2330100",
    "name": "Minna",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "291905",
    "admin1_code": "31"
  },
  {
    "geoname_id": "3080165",
    "name": "Zielona Góra",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "118433",
    "admin1_code": "76"
  },
  {
    "geoname_id": "3082914",
    "name": "Tychy",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "130000",
    "admin1_code": "83"
  },
  {
    "geoname_id": "282615",
    "name": "Nablus",
    "country_code": "PS",
    "cou_name_en": "West Bank and Gaza Strip",
    "population": "130326",
    "admin1_code": "WE"
  },
  {
    "geoname_id": "6697759",
    "name": "South Dublin",
    "country_code": "IE",
    "cou_name_en": "Ireland",
    "population": "278749",
    "admin1_code": "L"
  },
  {
    "geoname_id": "295620",
    "name": "Ashkelon",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "144073",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1253200",
    "name": "Vidisha",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "140045",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1253573",
    "name": "Vadodara",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1822221",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1257416",
    "name": "Sāngli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "601214",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1259312",
    "name": "Proddatūr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "177797",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1262995",
    "name": "Mirzāpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "220029",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1264773",
    "name": "Loni",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "164810",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1266305",
    "name": "Kolār",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "126441",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1269317",
    "name": "Jamnagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "492056",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1271476",
    "name": "Guwahati",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "899094",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1271850",
    "name": "Gadag",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "162569",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1273241",
    "name": "Deoghar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "203123",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1274040",
    "name": "Chittaurgarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "106710",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1275778",
    "name": "Bhusāval",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "183001",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1277397",
    "name": "Bānda",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "152218",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1277539",
    "name": "Bāli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "296973",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1278672",
    "name": "Anantapur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "240442",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1278994",
    "name": "Prayagraj",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1073438",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1279017",
    "name": "Alīgarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "753207",
    "admin1_code": "36"
  },
  {
    "geoname_id": "8629640",
    "name": "Thoothukudi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "410760",
    "admin1_code": "25"
  },
  {
    "geoname_id": "99762",
    "name": "Ad Dīwānīyah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "318801",
    "admin1_code": "04"
  },
  {
    "geoname_id": "128226",
    "name": "Kermanshah",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "621100",
    "admin1_code": "13"
  },
  {
    "geoname_id": "141584",
    "name": "Bāneh",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "104799",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3168673",
    "name": "Salerno",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "125797",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3173529",
    "name": "Mestre",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "147662",
    "admin1_code": "20"
  },
  {
    "geoname_id": "965154",
    "name": "Pinetown",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "144026",
    "admin1_code": "02"
  },
  {
    "geoname_id": "993800",
    "name": "Johannesburg",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "5635127",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1006984",
    "name": "East London",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "478676",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1014073",
    "name": "Carletonville",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "182304",
    "admin1_code": "06"
  },
  {
    "geoname_id": "4926563",
    "name": "South Bend",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "101516",
    "admin1_code": "IN"
  },
  {
    "geoname_id": "4994358",
    "name": "Grand Rapids",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "195097",
    "admin1_code": "MI"
  },
  {
    "geoname_id": "4998830",
    "name": "Lansing",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "115056",
    "admin1_code": "MI"
  },
  {
    "geoname_id": "5137849",
    "name": "Sheepshead Bay",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "122534",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5254962",
    "name": "Green Bay",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "105207",
    "admin1_code": "WI"
  },
  {
    "geoname_id": "5435464",
    "name": "Pueblo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "109412",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "5526337",
    "name": "Midland",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "132950",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "5784549",
    "name": "West Jordan",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "111946",
    "admin1_code": "UT"
  },
  {
    "geoname_id": "3628473",
    "name": "San Cristóbal",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "289852",
    "admin1_code": "20"
  },
  {
    "geoname_id": "498817",
    "name": "Saint Petersburg",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "5351935",
    "admin1_code": "66"
  },
  {
    "geoname_id": "517836",
    "name": "Novotroitsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "106186",
    "admin1_code": "55"
  },
  {
    "geoname_id": "518255",
    "name": "Novorossiysk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "241856",
    "admin1_code": "38"
  },
  {
    "geoname_id": "518659",
    "name": "Novokuybyshevsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "111800",
    "admin1_code": "65"
  },
  {
    "geoname_id": "518976",
    "name": "Novocheboksarsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "128468",
    "admin1_code": "16"
  },
  {
    "geoname_id": "529237",
    "name": "Mar’ino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "243000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "580497",
    "name": "Astrakhan",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "533925",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1496503",
    "name": "Noyabrsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "110000",
    "admin1_code": "87"
  },
  {
    "geoname_id": "1512165",
    "name": "Achinsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "117634",
    "admin1_code": "91"
  },
  {
    "geoname_id": "2026609",
    "name": "Blagoveshchensk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "225091",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2244799",
    "name": "Thiès Nones",
    "country_code": "SN",
    "cou_name_en": "Senegal",
    "population": "252320",
    "admin1_code": "07"
  },
  {
    "geoname_id": "170063",
    "name": "Aleppo",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "2098210",
    "admin1_code": "09"
  },
  {
    "geoname_id": "172955",
    "name": "Ar Raqqah",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "531952",
    "admin1_code": "04"
  },
  {
    "geoname_id": "702658",
    "name": "Luhansk",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "397677",
    "admin1_code": "14"
  },
  {
    "geoname_id": "704508",
    "name": "Kramatorsk",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "147145",
    "admin1_code": "05"
  },
  {
    "geoname_id": "4257227",
    "name": "Evansville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "119943",
    "admin1_code": "IN"
  },
  {
    "geoname_id": "309527",
    "name": "Karaman",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "175390",
    "admin1_code": "78"
  },
  {
    "geoname_id": "737022",
    "name": "Zonguldak",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "101749",
    "admin1_code": "85"
  },
  {
    "geoname_id": "1562414",
    "name": "Vũng Tàu",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "341552",
    "admin1_code": "45"
  },
  {
    "geoname_id": "1569684",
    "name": "Pleiku",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "114225",
    "admin1_code": "49"
  },
  {
    "geoname_id": "347296",
    "name": "Ţimā",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "101130",
    "admin1_code": "24"
  },
  {
    "geoname_id": "347796",
    "name": "Sohag",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "266944",
    "admin1_code": "24"
  },
  {
    "geoname_id": "2462881",
    "name": "Laayoune",
    "country_code": "EH",
    "cou_name_en": "Western Sahara",
    "population": "196331",
    "admin1_code": "None"
  },
  {
    "geoname_id": "2516548",
    "name": "Huelva",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "144258",
    "admin1_code": "51"
  },
  {
    "geoname_id": "2518794",
    "name": "Dos Hermanas",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "122943",
    "admin1_code": "51"
  },
  {
    "geoname_id": "3112737",
    "name": "Puente de Vallecas",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "244151",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3118514",
    "name": "Lleida",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "137856",
    "admin1_code": "56"
  },
  {
    "geoname_id": "334609",
    "name": "Hosa’ina",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "179761",
    "admin1_code": "54"
  },
  {
    "geoname_id": "2968254",
    "name": "Villeurbanne",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "131445",
    "admin1_code": "84"
  },
  {
    "geoname_id": "2988507",
    "name": "Paris",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "2138551",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2867543",
    "name": "Münster",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "270184",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2895992",
    "name": "Ingolstadt",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "120658",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2907911",
    "name": "Heidelberg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "143345",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2910685",
    "name": "Harburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "169221",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1819757",
    "name": "Aberdeen",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "157400",
    "admin1_code": "HSO"
  },
  {
    "geoname_id": "11101593",
    "name": "Tung Chung",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "114100",
    "admin1_code": "NIS"
  },
  {
    "geoname_id": "1214204",
    "name": "Pematangsiantar",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "268254",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1627896",
    "name": "Semarang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1653524",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1633118",
    "name": "Palangkaraya",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "293500",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1648186",
    "name": "Bontang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "178917",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2647425",
    "name": "Harrow",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "149246",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2655984",
    "name": "Belfast",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "345418",
    "admin1_code": "NIR"
  },
  {
    "geoname_id": "615532",
    "name": "Batumi",
    "country_code": "GE",
    "cou_name_en": "Georgia",
    "population": "172100",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2295458",
    "name": "Sekondi-Takoradi",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "138872",
    "admin1_code": "09"
  },
  {
    "geoname_id": "8544703",
    "name": "Nanchuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "204775",
    "admin1_code": "33"
  },
  {
    "geoname_id": "12358576",
    "name": "Wanzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "723215",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3665542",
    "name": "Zipaquirá",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "130432",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3675692",
    "name": "Magangué",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "123982",
    "admin1_code": "35"
  },
  {
    "geoname_id": "3688451",
    "name": "Buenaventura",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "240387",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6956648",
    "name": "Diez de Octubre",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "227293",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2393693",
    "name": "Kandi",
    "country_code": "BJ",
    "cou_name_en": "Benin",
    "population": "109701",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3460598",
    "name": "Itatiba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "122581",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3460728",
    "name": "Itapetininga",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "126243",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3460748",
    "name": "Itapecerica da Serra",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "151605",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3469136",
    "name": "Botucatu",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "148130",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3471715",
    "name": "Araruama",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "109637",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3471910",
    "name": "Apucarana",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "107085",
    "admin1_code": "18"
  },
  {
    "geoname_id": "5911606",
    "name": "Burnaby",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "202799",
    "admin1_code": "02"
  },
  {
    "geoname_id": "6176823",
    "name": "Waterloo",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "104986",
    "admin1_code": "08"
  },
  {
    "geoname_id": "217562",
    "name": "Butembo",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "154621",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3874960",
    "name": "Puerto Montt",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "245902",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1529046",
    "name": "Xinyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "282718",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1784393",
    "name": "Zhonghe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "105003",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1785294",
    "name": "Anyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1146839",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1786731",
    "name": "Qingzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "236406",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1797595",
    "name": "Qinhuangdao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "759718",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1799629",
    "name": "Nanyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1811812",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1800779",
    "name": "Meizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "992351",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1805528",
    "name": "Jinhua",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1463990",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1806408",
    "name": "Yangjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1292987",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1809408",
    "name": "Gulin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "116527",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1812545",
    "name": "Dongguan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "9644871",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1816221",
    "name": "Buhe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "106347",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1816670",
    "name": "Beijing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "18960744",
    "admin1_code": "22"
  },
  {
    "geoname_id": "1909733",
    "name": "Banan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "508703",
    "admin1_code": "33"
  },
  {
    "geoname_id": "2034439",
    "name": "Tieling",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "333907",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2036920",
    "name": "Hengshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "164844",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2147714",
    "name": "Sydney",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "5231147",
    "admin1_code": "02"
  },
  {
    "geoname_id": "522377",
    "name": "Nevinnomyssk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "134345",
    "admin1_code": "70"
  },
  {
    "geoname_id": "522942",
    "name": "Neftekamsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "126805",
    "admin1_code": "08"
  },
  {
    "geoname_id": "550280",
    "name": "Khimki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "239967",
    "admin1_code": "47"
  },
  {
    "geoname_id": "3194828",
    "name": "Mostar",
    "country_code": "BA",
    "cou_name_en": "Bosnia and Herzegovina",
    "population": "104518",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1185117",
    "name": "Narsingdi",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "281080",
    "admin1_code": "81"
  },
  {
    "geoname_id": "1336135",
    "name": "Khulna",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "1500689",
    "admin1_code": "82"
  },
  {
    "geoname_id": "7483813",
    "name": "Natore",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "369138",
    "admin1_code": "83"
  },
  {
    "geoname_id": "1503772",
    "name": "Khanty-Mansiysk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "101466",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1508291",
    "name": "Chelyabinsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1202371",
    "admin1_code": "13"
  },
  {
    "geoname_id": "100425",
    "name": "Yanbu",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "200161",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2694762",
    "name": "Linköping",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "166673",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2800481",
    "name": "Charleroi",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "200132",
    "admin1_code": "WAL"
  },
  {
    "geoname_id": "170794",
    "name": "Deir ez-Zor",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "271800",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1606250",
    "name": "Si Racha",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "178916",
    "admin1_code": "46"
  },
  {
    "geoname_id": "4174757",
    "name": "Tampa",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "384959",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4333190",
    "name": "Metairie Terrace",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "142489",
    "admin1_code": "LA"
  },
  {
    "geoname_id": "4553433",
    "name": "Tulsa",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "413066",
    "admin1_code": "OK"
  },
  {
    "geoname_id": "7910932",
    "name": "Shangri-La",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "130000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "9931406",
    "name": "Jianshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "490000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "12324302",
    "name": "Yidu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "105070",
    "admin1_code": "25"
  },
  {
    "geoname_id": "3670745",
    "name": "Riohacha",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "188014",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3688689",
    "name": "Bogotá",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "7674366",
    "admin1_code": "34"
  },
  {
    "geoname_id": "3688928",
    "name": "Bello",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "392939",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3536729",
    "name": "Santiago de Cuba",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "555865",
    "admin1_code": "15"
  },
  {
    "geoname_id": "6690108",
    "name": "Panchkula",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "200000",
    "admin1_code": "10"
  },
  {
    "geoname_id": "111453",
    "name": "Zanjān",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "357471",
    "admin1_code": "36"
  },
  {
    "geoname_id": "112214",
    "name": "Varāmīn",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "179603",
    "admin1_code": "26"
  },
  {
    "geoname_id": "116996",
    "name": "Sari",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "255396",
    "admin1_code": "35"
  },
  {
    "geoname_id": "141681",
    "name": "Bandar Abbas",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "352173",
    "admin1_code": "11"
  },
  {
    "geoname_id": "143534",
    "name": "Āmol",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "199382",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1113217",
    "name": "Zābol",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "121989",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3171180",
    "name": "Perugia",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "120137",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3176885",
    "name": "Foggia",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "137032",
    "admin1_code": "13"
  },
  {
    "geoname_id": "298333",
    "name": "Şanlıurfa",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "449549",
    "admin1_code": "63"
  },
  {
    "geoname_id": "311665",
    "name": "Iğdır",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "101700",
    "admin1_code": "88"
  },
  {
    "geoname_id": "324496",
    "name": "Aksaray",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "247147",
    "admin1_code": "75"
  },
  {
    "geoname_id": "738329",
    "name": "Üsküdar",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "582666",
    "admin1_code": "34"
  },
  {
    "geoname_id": "738743",
    "name": "Tokat",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "129702",
    "admin1_code": "60"
  },
  {
    "geoname_id": "751324",
    "name": "Bağcılar",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "749024",
    "admin1_code": "34"
  },
  {
    "geoname_id": "6947639",
    "name": "Başakşehir",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "193750",
    "admin1_code": "34"
  },
  {
    "geoname_id": "8074174",
    "name": "Muratpaşa",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "450000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "154380",
    "name": "Mbeya",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "291649",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2548885",
    "name": "Fès",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "964891",
    "admin1_code": "03"
  },
  {
    "geoname_id": "10920963",
    "name": "Salé Al Jadida",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "200000",
    "admin1_code": "04"
  },
  {
    "geoname_id": "689558",
    "name": "Vinnytsya",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "369839",
    "admin1_code": "23"
  },
  {
    "geoname_id": "5074472",
    "name": "Omaha",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "486051",
    "admin1_code": "NE"
  },
  {
    "geoname_id": "5102466",
    "name": "Paterson",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "147754",
    "admin1_code": "NJ"
  },
  {
    "geoname_id": "5119167",
    "name": "Gravesend",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "112229",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5122520",
    "name": "Jamaica",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "216866",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5317071",
    "name": "Tempe Junction",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "158368",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5387288",
    "name": "Rialto",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "103132",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5392900",
    "name": "Santa Ana",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "335400",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5506956",
    "name": "Las Vegas",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "623747",
    "admin1_code": "NV"
  },
  {
    "geoname_id": "5511077",
    "name": "Reno",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "241445",
    "admin1_code": "NV"
  },
  {
    "geoname_id": "1513157",
    "name": "Namangan",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "1010000",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3629576",
    "name": "Punto Fijo",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "141729",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3633622",
    "name": "Los Teques",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "252242",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3646487",
    "name": "Carora",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "121741",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1562798",
    "name": "Vinh",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "163759",
    "admin1_code": "58"
  },
  {
    "geoname_id": "1573517",
    "name": "Nam Định",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "193499",
    "admin1_code": "82"
  },
  {
    "geoname_id": "1584071",
    "name": "Ðà Lạt",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "197000",
    "admin1_code": "23"
  },
  {
    "geoname_id": "696643",
    "name": "Poltava",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "283402",
    "admin1_code": "18"
  },
  {
    "geoname_id": "4169014",
    "name": "Pompano Beach",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "107762",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4295940",
    "name": "Ironville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "288649",
    "admin1_code": "KY"
  },
  {
    "geoname_id": "4385018",
    "name": "East Independence",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110675",
    "admin1_code": "MO"
  },
  {
    "geoname_id": "4431410",
    "name": "Jackson",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "170674",
    "admin1_code": "MS"
  },
  {
    "geoname_id": "4613868",
    "name": "Clarksville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "166722",
    "admin1_code": "TN"
  },
  {
    "geoname_id": "4692559",
    "name": "Frisco",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "154407",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4710178",
    "name": "McKinney",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "162898",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4843564",
    "name": "Stamford",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "128874",
    "admin1_code": "CT"
  },
  {
    "geoname_id": "515024",
    "name": "Orekhovo-Zuyevo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "120000",
    "admin1_code": "47"
  },
  {
    "geoname_id": "515027",
    "name": "Orekhovo-Borisovo Severnoye",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "128000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "524305",
    "name": "Murmansk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "295374",
    "admin1_code": "49"
  },
  {
    "geoname_id": "571741",
    "name": "Brateyevo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "102000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "576432",
    "name": "Bibirevo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "159000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "2013348",
    "name": "Vladivostok",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "604901",
    "admin1_code": "59"
  },
  {
    "geoname_id": "2027456",
    "name": "Artëm",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "102300",
    "admin1_code": "59"
  },
  {
    "geoname_id": "377039",
    "name": "Port Sudan",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "489725",
    "admin1_code": "36"
  },
  {
    "geoname_id": "2244616",
    "name": "Tiébo",
    "country_code": "SN",
    "cou_name_en": "Senegal",
    "population": "100289",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1606590",
    "name": "Samut Prakan",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "388920",
    "admin1_code": "42"
  },
  {
    "geoname_id": "1221194",
    "name": "Kŭlob",
    "country_code": "TJ",
    "cou_name_en": "Tajikistan",
    "population": "214700",
    "admin1_code": "02"
  },
  {
    "geoname_id": "298033",
    "name": "Viranşehir",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "154163",
    "admin1_code": "63"
  },
  {
    "geoname_id": "310859",
    "name": "Kahramanmaraş",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "384953",
    "admin1_code": "46"
  },
  {
    "geoname_id": "325363",
    "name": "Adana",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "1779463",
    "admin1_code": "81"
  },
  {
    "geoname_id": "1668341",
    "name": "Taipei",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "7871900",
    "admin1_code": "04"
  },
  {
    "geoname_id": "153209",
    "name": "Moshi",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "156959",
    "admin1_code": "06"
  },
  {
    "geoname_id": "12217184",
    "name": "Huyện Lâm Hà",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "144707",
    "admin1_code": "23"
  },
  {
    "geoname_id": "901344",
    "name": "Ndola",
    "country_code": "ZM",
    "cou_name_en": "Zambia",
    "population": "451246",
    "admin1_code": "08"
  },
  {
    "geoname_id": "487150",
    "name": "Strogino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "152000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "1682598",
    "name": "Taytay",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "231460",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1714956",
    "name": "Digos",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "116122",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1715430",
    "name": "Dasmariñas",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "441876",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1168555",
    "name": "Pakpattan",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "126706",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1173491",
    "name": "Kohat",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "151427",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3516355",
    "name": "Tampico",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "309003",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3518723",
    "name": "Tuxtepec",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "101810",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3523349",
    "name": "Mérida",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1201000",
    "admin1_code": "31"
  },
  {
    "geoname_id": "3531023",
    "name": "Chetumal",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "169028",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3995465",
    "name": "Monterrey",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1135512",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1732745",
    "name": "Skudai",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "159733",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1734705",
    "name": "Kuala Terengganu",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "426500",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3096880",
    "name": "Kalisz",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "108759",
    "admin1_code": "86"
  },
  {
    "geoname_id": "285066",
    "name": "Hebron",
    "country_code": "PS",
    "cou_name_en": "West Bank and Gaza Strip",
    "population": "160470",
    "admin1_code": "WE"
  },
  {
    "geoname_id": "472045",
    "name": "Voronezh",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1047549",
    "admin1_code": "86"
  },
  {
    "geoname_id": "496638",
    "name": "Sergiyev Posad",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "109252",
    "admin1_code": "47"
  },
  {
    "geoname_id": "532535",
    "name": "Lyublino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "172000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "535121",
    "name": "Lipetsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "509735",
    "admin1_code": "43"
  },
  {
    "geoname_id": "537832",
    "name": "Kuz’minki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "143000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "561347",
    "name": "Glazov",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "100676",
    "admin1_code": "80"
  },
  {
    "geoname_id": "576279",
    "name": "Biryulëvo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "144000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "2014006",
    "name": "Ussuriysk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "157068",
    "admin1_code": "59"
  },
  {
    "geoname_id": "1849519",
    "name": "Tsuyama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "102294",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1849563",
    "name": "Tsuruoka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "125389",
    "admin1_code": "44"
  },
  {
    "geoname_id": "1853483",
    "name": "Oyama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "167647",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1853677",
    "name": "Ōta",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "224358",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1854376",
    "name": "Okazaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "352361",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1854383",
    "name": "Okayama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "720841",
    "admin1_code": "31"
  },
  {
    "geoname_id": "102527",
    "name": "Sakakah",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "128332",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1856184",
    "name": "Nagareyama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "200136",
    "admin1_code": "04"
  },
  {
    "geoname_id": "107781",
    "name": "Az Zulfī",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "125000",
    "admin1_code": "10"
  },
  {
    "geoname_id": "109435",
    "name": "Al Jubayl",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "237274",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1858964",
    "name": "Kokubunji",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "118682",
    "admin1_code": "40"
  },
  {
    "geoname_id": "366847",
    "name": "Singa",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "250000",
    "admin1_code": "58"
  },
  {
    "geoname_id": "1859383",
    "name": "Kishiwada",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "205561",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1859405",
    "name": "Kiryū",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "108991",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2676209",
    "name": "Södermalm",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "127323",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1862540",
    "name": "Hirakata",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "406331",
    "admin1_code": "32"
  },
  {
    "geoname_id": "8715035",
    "name": "Nakano",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "344880",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1880668",
    "name": "Geylang",
    "country_code": "SG",
    "cou_name_en": "Singapore",
    "population": "110200",
    "admin1_code": "00"
  },
  {
    "geoname_id": "2043837",
    "name": "Hyesan",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "192680",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2044757",
    "name": "Chongjin",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "327000",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1835235",
    "name": "Daejeon",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "1469543",
    "admin1_code": "19"
  },
  {
    "geoname_id": "363619",
    "name": "Yei",
    "country_code": "SS",
    "cou_name_en": "South Sudan, The Republic of",
    "population": "260720",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1241622",
    "name": "Kandy",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "111701",
    "admin1_code": "29"
  },
  {
    "geoname_id": "293788",
    "name": "Ramat Gan",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "170822",
    "admin1_code": "05"
  },
  {
    "geoname_id": "294514",
    "name": "Kfar Saba",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "110456",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1252770",
    "name": "Yavatmāl",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "128175",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1254327",
    "name": "Tiruvannāmalai",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "138243",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1255744",
    "name": "Sonīpat",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "250521",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1258451",
    "name": "Rānipet",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "264330",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1220253",
    "name": "Istaravshan",
    "country_code": "TJ",
    "cou_name_en": "Tajikistan",
    "population": "273500",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1258980",
    "name": "Raipur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "679995",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1260173",
    "name": "Pātan",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "117863",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1262801",
    "name": "Morādābād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "721139",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1266122",
    "name": "Korba",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "419146",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1270393",
    "name": "Hāpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "242920",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1271439",
    "name": "Gaya",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "423692",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1274304",
    "name": "Chhindwāra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "134847",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1275120",
    "name": "Bulandshahr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "198612",
    "admin1_code": "36"
  },
  {
    "geoname_id": "745044",
    "name": "Istanbul",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "14804116",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1277333",
    "name": "Bengaluru",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "8443675",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1277799",
    "name": "Bahraigh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "182218",
    "admin1_code": "36"
  },
  {
    "geoname_id": "752850",
    "name": "Adapazarı",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "286787",
    "admin1_code": "54"
  },
  {
    "geoname_id": "6947640",
    "name": "Beylikdüzü",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "122452",
    "admin1_code": "34"
  },
  {
    "geoname_id": "6943660",
    "name": "Shivaji Nagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1000000",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1668399",
    "name": "Taichung",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "1040725",
    "admin1_code": "04"
  },
  {
    "geoname_id": "12165955",
    "name": "Mulugu",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "297671",
    "admin1_code": "40"
  },
  {
    "geoname_id": "118063",
    "name": "Sabzevar",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "226183",
    "admin1_code": "42"
  },
  {
    "geoname_id": "122438",
    "name": "Naz̧arābād",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "213388",
    "admin1_code": "44"
  },
  {
    "geoname_id": "126972",
    "name": "Khowy",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "175370",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3413829",
    "name": "Reykjavík",
    "country_code": "IS",
    "cou_name_en": "Iceland",
    "population": "118918",
    "admin1_code": "39"
  },
  {
    "geoname_id": "2759661",
    "name": "Arnhem",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "141674",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3165524",
    "name": "Turin",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "847287",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3693528",
    "name": "Piura",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "484475",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3939459",
    "name": "Huancayo",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "456250",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3946083",
    "name": "Callao",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "1300000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "12157007",
    "name": "Santa Anita - Los Ficus",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "184614",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2088122",
    "name": "Port Moresby",
    "country_code": "PG",
    "cou_name_en": "Papua New Guinea",
    "population": "283733",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1069166",
    "name": "Antsirabe",
    "country_code": "MG",
    "cou_name_en": "Madagascar",
    "population": "265018",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1079048",
    "name": "Ambovombe",
    "country_code": "MG",
    "cou_name_en": "Madagascar",
    "population": "114230",
    "admin1_code": "52"
  },
  {
    "geoname_id": "1686547",
    "name": "Silang",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "119475",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1290596",
    "name": "Taungoo",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "106945",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1307835",
    "name": "Myingyan",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "141713",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1309937",
    "name": "Pyin Oo Lwin",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "117303",
    "admin1_code": "08"
  },
  {
    "geoname_id": "760778",
    "name": "Radom",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "226794",
    "admin1_code": "78"
  },
  {
    "geoname_id": "776103",
    "name": "Białołeka",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "129106",
    "admin1_code": "78"
  },
  {
    "geoname_id": "1183105",
    "name": "Battagram",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "700000",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2341656",
    "name": "Gashua",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "125817",
    "admin1_code": "44"
  },
  {
    "geoname_id": "1717512",
    "name": "Cebu City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "964169",
    "admin1_code": "07"
  },
  {
    "geoname_id": "759734",
    "name": "Rzeszów",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "158382",
    "admin1_code": "80"
  },
  {
    "geoname_id": "3080985",
    "name": "Zabrze",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "192177",
    "admin1_code": "83"
  },
  {
    "geoname_id": "6545326",
    "name": "Ursynów",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "150668",
    "admin1_code": "78"
  },
  {
    "geoname_id": "290030",
    "name": "Doha",
    "country_code": "QA",
    "cou_name_en": "Qatar",
    "population": "344939",
    "admin1_code": "01"
  },
  {
    "geoname_id": "935264",
    "name": "Saint-Denis",
    "country_code": "RE",
    "cou_name_en": "Réunion",
    "population": "137195",
    "admin1_code": "RE"
  },
  {
    "geoname_id": "11048320",
    "name": "Sector 4",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "287828",
    "admin1_code": "10"
  },
  {
    "geoname_id": "789128",
    "name": "Kragujevac",
    "country_code": "RS",
    "cou_name_en": "Serbia",
    "population": "147473",
    "admin1_code": "SE"
  },
  {
    "geoname_id": "461835",
    "name": "Zyablikovo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "129000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "709717",
    "name": "Donetsk",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "901645",
    "admin1_code": "05"
  },
  {
    "geoname_id": "4188985",
    "name": "Columbus",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "206922",
    "admin1_code": "GA"
  },
  {
    "geoname_id": "4250542",
    "name": "Springfield",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "116565",
    "admin1_code": "IL"
  },
  {
    "geoname_id": "4407066",
    "name": "St. Louis",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "315685",
    "admin1_code": "MO"
  },
  {
    "geoname_id": "4499379",
    "name": "Wilmington",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "115933",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "4718097",
    "name": "Pearland",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "108821",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4722625",
    "name": "Richardson",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110815",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "2746301",
    "name": "Tilburg",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "199613",
    "admin1_code": "06"
  },
  {
    "geoname_id": "690688",
    "name": "Uman",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "100135",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1332083",
    "name": "Bahawalnagar",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "126700",
    "admin1_code": "04"
  },
  {
    "geoname_id": "8347664",
    "name": "Ordos",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1940653",
    "admin1_code": "20"
  },
  {
    "geoname_id": "8417605",
    "name": "Yangcheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "186242",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3688452",
    "name": "Buenaventura",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "432385",
    "admin1_code": "29"
  },
  {
    "geoname_id": "146384",
    "name": "Limassol",
    "country_code": "CY",
    "cou_name_en": "Cyprus",
    "population": "154000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2950349",
    "name": "Bergisch Gladbach",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "106184",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3492908",
    "name": "Santo Domingo",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "2201941",
    "admin1_code": "34"
  },
  {
    "geoname_id": "3511540",
    "name": "San Cristóbal",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "154040",
    "admin1_code": "33"
  },
  {
    "geoname_id": "347591",
    "name": "Ţalkhā",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "157737",
    "admin1_code": "01"
  },
  {
    "geoname_id": "358821",
    "name": "Bilqās",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "137080",
    "admin1_code": "01"
  },
  {
    "geoname_id": "359493",
    "name": "Zagazig",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "430445",
    "admin1_code": "14"
  },
  {
    "geoname_id": "360754",
    "name": "Al Manzalah",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "127394",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2513416",
    "name": "Murcia",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "460349",
    "admin1_code": "31"
  },
  {
    "geoname_id": "3114256",
    "name": "Parla",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "115611",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3121245",
    "name": "Gràcia",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "121502",
    "admin1_code": "56"
  },
  {
    "geoname_id": "3033123",
    "name": "Besançon",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "128426",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3037044",
    "name": "Argenteuil",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "101475",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2636882",
    "name": "Stockport",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "139052",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2873891",
    "name": "Mannheim",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "307960",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2925177",
    "name": "Freiburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "215966",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2650225",
    "name": "Edinburgh",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "506520",
    "admin1_code": "SCT"
  },
  {
    "geoname_id": "2650497",
    "name": "Eastbourne",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "118219",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "1213614",
    "name": "Sunggal",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "157914",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1214520",
    "name": "Medan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "2435252",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1624647",
    "name": "Tasikmalaya",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "271143",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1629710",
    "name": "Rengasdengklok",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "201463",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1631766",
    "name": "Pekalongan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "307097",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1651226",
    "name": "Arjawinangun",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "105845",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2645425",
    "name": "Kingston upon Hull",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "314018",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "246013",
    "name": "Wādī as Sīr",
    "country_code": "JO",
    "cou_name_en": "Jordan",
    "population": "181212",
    "admin1_code": "16"
  },
  {
    "geoname_id": "250258",
    "name": "As Salţ",
    "country_code": "JO",
    "cou_name_en": "Jordan",
    "population": "107874",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1849053",
    "name": "Utsunomiya",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "449865",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1849814",
    "name": "Toyota",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "426162",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1850181",
    "name": "Tokorozawa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "344194",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1851193",
    "name": "Tajimi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "107818",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1857046",
    "name": "Mino",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "129127",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1858067",
    "name": "Kusatsu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "127680",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1858421",
    "name": "Kumamoto",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "738907",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1859740",
    "name": "Kawagoe",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "337931",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1864092",
    "name": "Fujisawa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "439728",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2110556",
    "name": "Yamagata",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "248772",
    "admin1_code": "44"
  },
  {
    "geoname_id": "2112312",
    "name": "Katsuta",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "155968",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2112576",
    "name": "Ishinomaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "138538",
    "admin1_code": "24"
  },
  {
    "geoname_id": "2129537",
    "name": "Kitami",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "119135",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1821940",
    "name": "Takeo",
    "country_code": "KH",
    "cou_name_en": "Cambodia",
    "population": "843931",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1870883",
    "name": "Sariwŏn",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "310100",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1835329",
    "name": "Daegu",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "2566540",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1842944",
    "name": "Gimcheon",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "150000",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1843491",
    "name": "Iksan",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "307000",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1892823",
    "name": "Donghae City",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "101128",
    "admin1_code": "06"
  },
  {
    "geoname_id": "607610",
    "name": "Zhanaozen",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "103598",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1518262",
    "name": "Temirtau",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "170600",
    "admin1_code": "12"
  },
  {
    "geoname_id": "593116",
    "name": "Vilnius",
    "country_code": "LT",
    "cou_name_en": "Lithuania",
    "population": "542366",
    "admin1_code": "65"
  },
  {
    "geoname_id": "2540483",
    "name": "Oujda-Angad",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "405253",
    "admin1_code": "02"
  },
  {
    "geoname_id": "785842",
    "name": "Skopje",
    "country_code": "MK",
    "cou_name_en": "Macedonia, The former Yugoslav Rep. of",
    "population": "474889",
    "admin1_code": "F6"
  },
  {
    "geoname_id": "3515302",
    "name": "Toluca",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "489333",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3530589",
    "name": "Ciudad Nezahualcoyotl",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1104585",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3996069",
    "name": "Mexicali",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1032686",
    "admin1_code": "02"
  },
  {
    "geoname_id": "4013708",
    "name": "Ciudad Juárez",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1501551",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1771023",
    "name": "Kampung Baru Subang",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "833571",
    "admin1_code": "12"
  },
  {
    "geoname_id": "8504423",
    "name": "Subang Jaya",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "708296",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1040652",
    "name": "Maputo",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "1191613",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2328952",
    "name": "Nguru",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "111014",
    "admin1_code": "44"
  },
  {
    "geoname_id": "2334327",
    "name": "Kisi",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "155510",
    "admin1_code": "32"
  },
  {
    "geoname_id": "2982652",
    "name": "Rouen",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "234475",
    "admin1_code": "28"
  },
  {
    "geoname_id": "2983990",
    "name": "Rennes",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "220488",
    "admin1_code": "53"
  },
  {
    "geoname_id": "2990363",
    "name": "Nîmes",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "148236",
    "admin1_code": "76"
  },
  {
    "geoname_id": "2990440",
    "name": "Nice",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "342669",
    "admin1_code": "93"
  },
  {
    "geoname_id": "8533870",
    "name": "Saint-Quentin-en-Yvelines",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "146598",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1255947",
    "name": "Sivakasi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "234704",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1257022",
    "name": "Satna",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "257778",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1257542",
    "name": "Sambalpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "162887",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1258044",
    "name": "Roorkee",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "103894",
    "admin1_code": "39"
  },
  {
    "geoname_id": "1258526",
    "name": "Ranchi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1120374",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1259009",
    "name": "Rāiganj",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "170252",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1259064",
    "name": "Raebareli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "186433",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1259395",
    "name": "Porbandar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "138872",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1261258",
    "name": "Nizāmābād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "305438",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1261669",
    "name": "Navadwīp",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "111123",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1263311",
    "name": "Mau",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "246050",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1266486",
    "name": "Kishangarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "131749",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1267016",
    "name": "Khanna",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "117137",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1267708",
    "name": "Karnāl",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "225049",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1268782",
    "name": "Jalandhar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "785178",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1269653",
    "name": "Itārsi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "100574",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1269843",
    "name": "Hyderābād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "6809970",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1270994",
    "name": "Gondal",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "101801",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1276014",
    "name": "Bhayandar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "520301",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1277013",
    "name": "Bareilly",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "745435",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1277780",
    "name": "Baidyabāti",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "115504",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1277820",
    "name": "Baharampur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "180547",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1278130",
    "name": "Āvadi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "250044",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1279335",
    "name": "Ādoni",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "163631",
    "admin1_code": "02"
  },
  {
    "geoname_id": "11127930",
    "name": "Phusro",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "185555",
    "admin1_code": "38"
  },
  {
    "geoname_id": "12261477",
    "name": "Amaravati",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "103000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "12495083",
    "name": "Chirmiri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "100800",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1160939",
    "name": "Iranshahr",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "131232",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3164527",
    "name": "Verona",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "258031",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3173331",
    "name": "Modena",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "184732",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2640729",
    "name": "Oxford",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "162100",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2651123",
    "name": "Doncaster",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "113566",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2655459",
    "name": "Blackpool",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "145007",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "3046526",
    "name": "Pécs",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "145347",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1650357",
    "name": "Bandung",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "2444160",
    "admin1_code": "30"
  },
  {
    "geoname_id": "5327684",
    "name": "Berkeley",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "120972",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5389489",
    "name": "Sacramento",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "490712",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5405693",
    "name": "Van Nuys",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "136443",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5586437",
    "name": "Boise",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "145987",
    "admin1_code": "ID"
  },
  {
    "geoname_id": "5784607",
    "name": "West Valley City",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "136208",
    "admin1_code": "UT"
  },
  {
    "geoname_id": "1512569",
    "name": "Tashkent",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "1978028",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3487903",
    "name": "Alto Barinas",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "284289",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3629672",
    "name": "Puerto La Cruz",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "370000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3647549",
    "name": "Cagua",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "119033",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3778045",
    "name": "Maturín",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "647459",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1581130",
    "name": "Hanoi",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "8053663",
    "admin1_code": "44"
  },
  {
    "geoname_id": "5011148",
    "name": "Sterling Heights",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "132052",
    "admin1_code": "MI"
  },
  {
    "geoname_id": "5110302",
    "name": "Brooklyn",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "2736074",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "3392740",
    "name": "Paulista",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "289971",
    "admin1_code": "30"
  },
  {
    "geoname_id": "786712",
    "name": "Prizren",
    "country_code": "XK",
    "cou_name_en": "None",
    "population": "171464",
    "admin1_code": "10097361"
  },
  {
    "geoname_id": "1017780",
    "name": "Boksburg",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "445168",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3445446",
    "name": "Várzea Paulista",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "110936",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3445487",
    "name": "Varginha",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "116571",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3451353",
    "name": "Ribeirão das Neves",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "406802",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3457692",
    "name": "Marília",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "240590",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3461144",
    "name": "Ipatinga",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "228746",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3464305",
    "name": "Embu",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "221733",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3466692",
    "name": "Catanduva",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "109612",
    "admin1_code": "27"
  },
  {
    "geoname_id": "623549",
    "name": "Pinsk",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "130777",
    "admin1_code": "01"
  },
  {
    "geoname_id": "5882873",
    "name": "Ajax",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "119677",
    "admin1_code": "08"
  },
  {
    "geoname_id": "5969782",
    "name": "Hamilton",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "519949",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6122085",
    "name": "Richmond",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "198309",
    "admin1_code": "02"
  },
  {
    "geoname_id": "6137270",
    "name": "Saguenay",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "143692",
    "admin1_code": "10"
  },
  {
    "geoname_id": "6174041",
    "name": "Victoria",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "289625",
    "admin1_code": "02"
  },
  {
    "geoname_id": "6182962",
    "name": "Windsor",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "278013",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2220957",
    "name": "Yaoundé",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "1299369",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2227613",
    "name": "Mbouda",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "111320",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2235189",
    "name": "Bafoussam",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "290768",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1783988",
    "name": "Zhucheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "499285",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1785018",
    "name": "Zhangzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "589831",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1785716",
    "name": "Pizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "343421",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1787351",
    "name": "Yangquan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "731228",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1787824",
    "name": "Tongshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "329661",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1791765",
    "name": "Wansheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "113751",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1792359",
    "name": "Huangshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "460786",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1795196",
    "name": "Tongchuanshi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "223603",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1796556",
    "name": "Sanya",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1031396",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1797945",
    "name": "Qingyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1738424",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1803842",
    "name": "Hepu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "192813",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1804586",
    "name": "Laiyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "169594",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1806445",
    "name": "Ji’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "538699",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1808916",
    "name": "Hanjia",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "108430",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1809078",
    "name": "Haikou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2873358",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1811103",
    "name": "Foshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "9042509",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1811200",
    "name": "Fengcheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "161850",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1815427",
    "name": "Chaohu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "138463",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1816705",
    "name": "Beihai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "525329",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2033168",
    "name": "Zhaodong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "154406",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2037712",
    "name": "Dehui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "108818",
    "admin1_code": "05"
  },
  {
    "geoname_id": "292672",
    "name": "Sharjah",
    "country_code": "AE",
    "cou_name_en": "United Arab Emirates",
    "population": "1274749",
    "admin1_code": "06"
  },
  {
    "geoname_id": "292913",
    "name": "Al Ain City",
    "country_code": "AE",
    "cou_name_en": "United Arab Emirates",
    "population": "846747",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3430697",
    "name": "Merlo",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "268961",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3835869",
    "name": "Santiago del Estero",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "252192",
    "admin1_code": "22"
  },
  {
    "geoname_id": "3836564",
    "name": "San Salvador de Jujuy",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "257970",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3838874",
    "name": "Río Cuarto",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "157010",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2063523",
    "name": "Perth",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "2192229",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2357043",
    "name": "Ouahigouya",
    "country_code": "BF",
    "cou_name_en": "Burkina Faso",
    "population": "124587",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2359608",
    "name": "Kaya",
    "country_code": "BF",
    "cou_name_en": "Burkina Faso",
    "population": "121970",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3404545",
    "name": "Cabo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "143105",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3407327",
    "name": "Arapiraca",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "166562",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3446692",
    "name": "Tatuí",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "122967",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3447779",
    "name": "Serra",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "394153",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3448632",
    "name": "São José dos Pinhais",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "124224",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3458329",
    "name": "Luziânia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "143601",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3458498",
    "name": "Linhares",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "105075",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3467467",
    "name": "Canoas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "328291",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3471374",
    "name": "Assis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "105087",
    "admin1_code": "27"
  },
  {
    "geoname_id": "6316406",
    "name": "Aparecida de Goiânia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "510770",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6318694",
    "name": "Simões Filho",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "116662",
    "admin1_code": "05"
  },
  {
    "geoname_id": "12199880",
    "name": "Alvorada",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "211352",
    "admin1_code": "23"
  },
  {
    "geoname_id": "6173331",
    "name": "Vancouver",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "600000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "215771",
    "name": "Isiro",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "127076",
    "admin1_code": "16"
  },
  {
    "geoname_id": "217831",
    "name": "Bukavu",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "225389",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2314302",
    "name": "Kinshasa",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "7785965",
    "admin1_code": "06"
  },
  {
    "geoname_id": "7602670",
    "name": "Zhu Cheng City",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1000000",
    "admin1_code": "25"
  },
  {
    "geoname_id": "10630003",
    "name": "Xuzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1253991",
    "admin1_code": "04"
  },
  {
    "geoname_id": "12159964",
    "name": "Chongzuo",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "384905",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3675657",
    "name": "Maicao",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "166603",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3685095",
    "name": "Dosquebradas",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "206693",
    "admin1_code": "24"
  },
  {
    "geoname_id": "3685533",
    "name": "Cúcuta",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "777106",
    "admin1_code": "21"
  },
  {
    "geoname_id": "6956647",
    "name": "Boyeros",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "188593",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3493032",
    "name": "San Pedro de Macorís",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "217899",
    "admin1_code": "24"
  },
  {
    "geoname_id": "7874116",
    "name": "Santo Domingo Oeste",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "701269",
    "admin1_code": "37"
  },
  {
    "geoname_id": "2479536",
    "name": "Skikda",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "162702",
    "admin1_code": "31"
  },
  {
    "geoname_id": "2498611",
    "name": "Chlef",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "178616",
    "admin1_code": "41"
  },
  {
    "geoname_id": "3654215",
    "name": "Milagro",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "133508",
    "admin1_code": "10"
  },
  {
    "geoname_id": "352354",
    "name": "Munūf",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "125707",
    "admin1_code": "09"
  },
  {
    "geoname_id": "354775",
    "name": "Kafr ad Dawwār",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "267370",
    "admin1_code": "03"
  },
  {
    "geoname_id": "355628",
    "name": "Idkū",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "210678",
    "admin1_code": "03"
  },
  {
    "geoname_id": "359280",
    "name": "Banhā",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "182254",
    "admin1_code": "12"
  },
  {
    "geoname_id": "361661",
    "name": "Akhmīm",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "151430",
    "admin1_code": "24"
  },
  {
    "geoname_id": "2514256",
    "name": "Málaga",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "578460",
    "admin1_code": "51"
  },
  {
    "geoname_id": "3106672",
    "name": "Valladolid",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "299265",
    "admin1_code": "55"
  },
  {
    "geoname_id": "3127461",
    "name": "Burgos",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "178966",
    "admin1_code": "55"
  },
  {
    "geoname_id": "335035",
    "name": "Harar",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "153000",
    "admin1_code": "50"
  },
  {
    "geoname_id": "339734",
    "name": "Debre Birhan",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "139724",
    "admin1_code": "46"
  },
  {
    "geoname_id": "632453",
    "name": "Vantaa",
    "country_code": "FI",
    "cou_name_en": "Finland",
    "population": "190058",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2279755",
    "name": "Yamoussoukro",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "194530",
    "admin1_code": "81"
  },
  {
    "geoname_id": "3868121",
    "name": "Viña del Mar",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "294551",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1529569",
    "name": "Changji",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "198776",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1785738",
    "name": "Yuncheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "680036",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1786640",
    "name": "Chengzhong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "265886",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1793346",
    "name": "Tangshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3372102",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1794209",
    "name": "Simao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "296565",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1798473",
    "name": "Puqi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "132891",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1799491",
    "name": "Neijiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1251095",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1803567",
    "name": "Linfen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "959198",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1810458",
    "name": "Gaomi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "391986",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1814870",
    "name": "Yiwu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1481384",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2035265",
    "name": "Qiqihar",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "882364",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2036536",
    "name": "Jiaohe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "123018",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2038432",
    "name": "Baotou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2150000",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2911293",
    "name": "Eimsbüttel",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "269118",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1185106",
    "name": "Jamālpur",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "167900",
    "admin1_code": "H"
  },
  {
    "geoname_id": "584923",
    "name": "Sumqayıt",
    "country_code": "AZ",
    "cou_name_en": "Azerbaijan",
    "population": "358675",
    "admin1_code": "54"
  },
  {
    "geoname_id": "3439214",
    "name": "Capiatá",
    "country_code": "PY",
    "cou_name_en": "Paraguay",
    "population": "198553",
    "admin1_code": "06"
  },
  {
    "geoname_id": "787657",
    "name": "Niš",
    "country_code": "RS",
    "cou_name_en": "Serbia",
    "population": "250000",
    "admin1_code": "SE"
  },
  {
    "geoname_id": "480060",
    "name": "Tver",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "420065",
    "admin1_code": "77"
  },
  {
    "geoname_id": "487846",
    "name": "Stavropol’",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "433931",
    "admin1_code": "70"
  },
  {
    "geoname_id": "491422",
    "name": "Sochi",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "327608",
    "admin1_code": "38"
  },
  {
    "geoname_id": "2751283",
    "name": "Maastricht",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "122378",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2758401",
    "name": "Breda",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "167673",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3133880",
    "name": "Trondheim",
    "country_code": "NO",
    "cou_name_en": "Norway",
    "population": "147139",
    "admin1_code": "21"
  },
  {
    "geoname_id": "286647",
    "name": "Şaḩam",
    "country_code": "OM",
    "cou_name_en": "Oman",
    "population": "140000",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3701329",
    "name": "San Miguelito",
    "country_code": "PA",
    "cou_name_en": "Panama",
    "population": "321501",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1684269",
    "name": "Magugpo Poblacion",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "233254",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1689056",
    "name": "San Mateo",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "134327",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1691444",
    "name": "Roxas City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "102688",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1706889",
    "name": "Legaspi",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "179481",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1714201",
    "name": "Dumaguete",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "113541",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1166652",
    "name": "Saddiqabad",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "189876",
    "admin1_code": "04"
  },
  {
    "geoname_id": "508751",
    "name": "Ryazanskiy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "101000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "509820",
    "name": "Petrozavodsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "279190",
    "admin1_code": "28"
  },
  {
    "geoname_id": "520555",
    "name": "Nizhniy Novgorod",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1259013",
    "admin1_code": "51"
  },
  {
    "geoname_id": "524901",
    "name": "Moscow",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "10381222",
    "admin1_code": "48"
  },
  {
    "geoname_id": "538560",
    "name": "Kursk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "448733",
    "admin1_code": "41"
  },
  {
    "geoname_id": "548114",
    "name": "Kislovodsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "132771",
    "admin1_code": "70"
  },
  {
    "geoname_id": "555129",
    "name": "Ivanovskoye",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "128000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "105299",
    "name": "Jizan",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "105198",
    "admin1_code": "17"
  },
  {
    "geoname_id": "365137",
    "name": "Omdurman",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "1200000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "378699",
    "name": "An Nuhūd",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "108008",
    "admin1_code": "62"
  },
  {
    "geoname_id": "379252",
    "name": "Khartoum",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "1974647",
    "admin1_code": "29"
  },
  {
    "geoname_id": "57289",
    "name": "Hargeysa",
    "country_code": "SO",
    "cou_name_en": "Somalia",
    "population": "477876",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3584399",
    "name": "Mejicanos",
    "country_code": "SV",
    "cou_name_en": "El Salvador",
    "population": "160317",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1609899",
    "name": "Khlong Luang",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "118551",
    "admin1_code": "39"
  },
  {
    "geoname_id": "1665221",
    "name": "Yongkang",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "233730",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1678228",
    "name": "Keelung",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "397515",
    "admin1_code": "04"
  },
  {
    "geoname_id": "153220",
    "name": "Morogoro",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "250902",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1850692",
    "name": "Nishi-Tokyo-shi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "195164",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1858296",
    "name": "Kure",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "196624",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1858311",
    "name": "Kurashiki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "483576",
    "admin1_code": "31"
  },
  {
    "geoname_id": "1859146",
    "name": "Kochi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "332059",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1859891",
    "name": "Kasugai",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "298589",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1859951",
    "name": "Kashihara-shi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "124521",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1862415",
    "name": "Hiroshima",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "1199391",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1864416",
    "name": "Daitō",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "119329",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1864750",
    "name": "Beppu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "122643",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2112923",
    "name": "Fukushima",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "294237",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2129376",
    "name": "Kushiro",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "167875",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2130404",
    "name": "Ebetsu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "133953",
    "admin1_code": "12"
  },
  {
    "geoname_id": "6697563",
    "name": "Neyagawa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "238549",
    "admin1_code": "32"
  },
  {
    "geoname_id": "6940394",
    "name": "Saitama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "1324854",
    "admin1_code": "34"
  },
  {
    "geoname_id": "191220",
    "name": "Kitale",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "162174",
    "admin1_code": "50"
  },
  {
    "geoname_id": "1841988",
    "name": "Guri-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "195236",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1519922",
    "name": "Kyzylorda",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "354800",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1520240",
    "name": "Pavlodar",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "329002",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2214846",
    "name": "Mişrātah",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "386120",
    "admin1_code": "72"
  },
  {
    "geoname_id": "2558470",
    "name": "Khemisset",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "106991",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1293625",
    "name": "Dawei",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "136783",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1311874",
    "name": "Mandalay",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "1208099",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1821274",
    "name": "Macau",
    "country_code": "MO",
    "cou_name_en": "Macau, China",
    "population": "649335",
    "admin1_code": "02"
  },
  {
    "geoname_id": "925475",
    "name": "Mzuzu",
    "country_code": "MW",
    "cou_name_en": "Malawi",
    "population": "175345",
    "admin1_code": "N"
  },
  {
    "geoname_id": "4931972",
    "name": "Cambridge",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110402",
    "admin1_code": "MA"
  },
  {
    "geoname_id": "4956184",
    "name": "Worcester",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "206518",
    "admin1_code": "MA"
  },
  {
    "geoname_id": "5099836",
    "name": "Jersey City",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "264290",
    "admin1_code": "NJ"
  },
  {
    "geoname_id": "5110918",
    "name": "Bushwick",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "112620",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5133273",
    "name": "Queens",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "2272771",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5336899",
    "name": "Chula Vista",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "265757",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5339631",
    "name": "Corona",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "164226",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5355933",
    "name": "Hayward",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "158289",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5384170",
    "name": "Pomona",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "153266",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5443910",
    "name": "Westminster",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "116317",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "8436486",
    "name": "Sunset Park",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "126000",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "3646738",
    "name": "Caracas",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "3000000",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1567069",
    "name": "Tân An",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "215250",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1587923",
    "name": "Biên Hòa",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "830829",
    "admin1_code": "43"
  },
  {
    "geoname_id": "3981941",
    "name": "Tepic",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "332863",
    "admin1_code": "18"
  },
  {
    "geoname_id": "4004886",
    "name": "Nogales",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "212533",
    "admin1_code": "26"
  },
  {
    "geoname_id": "4006702",
    "name": "Ensenada",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "279765",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1734810",
    "name": "Seremban",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "372917",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1735168",
    "name": "Ampang",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "126285",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1033356",
    "name": "Nampula",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "743125",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2332459",
    "name": "Lagos",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "15388000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2337639",
    "name": "Ilorin",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "814192",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2338287",
    "name": "Ikere-Ekiti",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "103054",
    "admin1_code": "54"
  },
  {
    "geoname_id": "2239076",
    "name": "N’dalatando",
    "country_code": "AO",
    "cou_name_en": "Angola",
    "population": "383100",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2240449",
    "name": "Luanda",
    "country_code": "AO",
    "cou_name_en": "Angola",
    "population": "2776168",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3844421",
    "name": "Mendoza",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "114893",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2765028",
    "name": "Simmering",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "101420",
    "admin1_code": "09"
  },
  {
    "geoname_id": "706524",
    "name": "Kerch",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "148932",
    "admin1_code": "11"
  },
  {
    "geoname_id": "233346",
    "name": "Gulu",
    "country_code": "UG",
    "cou_name_en": "Uganda",
    "population": "146858",
    "admin1_code": "N"
  },
  {
    "geoname_id": "4156404",
    "name": "Gainesville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "141085",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4221333",
    "name": "Sandy Springs",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "105330",
    "admin1_code": "GA"
  },
  {
    "geoname_id": "4276873",
    "name": "Overland Park",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "186515",
    "admin1_code": "KS"
  },
  {
    "geoname_id": "4315588",
    "name": "Baton Rouge",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "228590",
    "admin1_code": "LA"
  },
  {
    "geoname_id": "4393217",
    "name": "Kansas City",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "475378",
    "admin1_code": "MO"
  },
  {
    "geoname_id": "4409896",
    "name": "Springfield",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "166810",
    "admin1_code": "MO"
  },
  {
    "geoname_id": "4835797",
    "name": "Hartford",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "121054",
    "admin1_code": "CT"
  },
  {
    "geoname_id": "4890864",
    "name": "Elgin",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "112111",
    "admin1_code": "IL"
  },
  {
    "geoname_id": "7576887",
    "name": "Hezhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1005490",
    "admin1_code": "16"
  },
  {
    "geoname_id": "8505006",
    "name": "Wenshan City",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "450000",
    "admin1_code": "29"
  },
  {
    "geoname_id": "11694038",
    "name": "Huocheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "360000",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3672486",
    "name": "Pereira",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "467269",
    "admin1_code": "24"
  },
  {
    "geoname_id": "3547398",
    "name": "Matanzas",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "146733",
    "admin1_code": "03"
  },
  {
    "geoname_id": "936374",
    "name": "Roodepoort",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "326416",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1007311",
    "name": "Durban",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "3120282",
    "admin1_code": "02"
  },
  {
    "geoname_id": "159071",
    "name": "Iringa",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "111820",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1177662",
    "name": "Gujranwala",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "1384471",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1181096",
    "name": "Chiniot",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "201781",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1181636",
    "name": "Chakwal",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "101200",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1182637",
    "name": "Bhimber",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "342900",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2357048",
    "name": "Ouagadougou",
    "country_code": "BF",
    "cou_name_en": "Burkina Faso",
    "population": "1086505",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3904906",
    "name": "Santa Cruz de la Sierra",
    "country_code": "BO",
    "cou_name_en": "Bolivia",
    "population": "1831434",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3453303",
    "name": "Poços de Caldas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "168641",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3460899",
    "name": "Itaguaí",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "100752",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3462964",
    "name": "Franco da Rocha",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "108858",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3464374",
    "name": "Duque de Caxias",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "818329",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3469092",
    "name": "Bragança Paulista",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "125096",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3664980",
    "name": "Boa Vista",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "419652",
    "admin1_code": "25"
  },
  {
    "geoname_id": "630429",
    "name": "Baranovichi",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "179000",
    "admin1_code": "01"
  },
  {
    "geoname_id": "5967629",
    "name": "Guelph",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "115760",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6155721",
    "name": "St. Catharines",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "133113",
    "admin1_code": "08"
  },
  {
    "geoname_id": "7281931",
    "name": "Okanagan",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "297601",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2316702",
    "name": "Boma",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "162521",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2317397",
    "name": "Bandundu",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "118211",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1784853",
    "name": "Zhaoqing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1553109",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1786395",
    "name": "Yong’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "144314",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1786577",
    "name": "Yingtan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "214229",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1787765",
    "name": "Yan’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "475234",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1789703",
    "name": "Xiazhen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "125667",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1790396",
    "name": "Xianning",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "512517",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1790923",
    "name": "Wuxi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "4396835",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1793505",
    "name": "Taizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1607108",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1793771",
    "name": "Suqian",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1437685",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1798713",
    "name": "Pingshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "113631",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1800498",
    "name": "Mingshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "114858",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1800818",
    "name": "Meishan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1107742",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1803590",
    "name": "Lincang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "323708",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1804866",
    "name": "Kaili",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "275745",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1808931",
    "name": "Hangu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "208369",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1809062",
    "name": "Haimen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "125427",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1809879",
    "name": "Guangshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "154771",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1814082",
    "name": "Daliang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "210411",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1815456",
    "name": "Changzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3290918",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1817240",
    "name": "Baiyin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "294400",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2034400",
    "name": "Tongliao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "261110",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2034414",
    "name": "Tonghua",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "510000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2036389",
    "name": "Jixi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "403759",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2038087",
    "name": "Chengde",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "449325",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1138336",
    "name": "Kandahār",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "523300",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3183875",
    "name": "Tirana",
    "country_code": "AL",
    "cou_name_en": "Albania",
    "population": "418495",
    "admin1_code": "50"
  },
  {
    "geoname_id": "3347762",
    "name": "Lubango",
    "country_code": "AO",
    "cou_name_en": "Angola",
    "population": "102541",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2165087",
    "name": "Gold Coast",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "640778",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2171507",
    "name": "Wollongong",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "280153",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1185162",
    "name": "Mymensingh",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "225126",
    "admin1_code": "H"
  },
  {
    "geoname_id": "2972191",
    "name": "Tours",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "141621",
    "admin1_code": "24"
  },
  {
    "geoname_id": "3037854",
    "name": "Amiens",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "143086",
    "admin1_code": "32"
  },
  {
    "geoname_id": "2634739",
    "name": "Warrington",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "172330",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "223817",
    "name": "Djibouti",
    "country_code": "DJ",
    "cou_name_en": "Djibouti",
    "population": "623891",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3511550",
    "name": "Bella Vista",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "175683",
    "admin1_code": "34"
  },
  {
    "geoname_id": "2501152",
    "name": "Constantine",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "450097",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2503769",
    "name": "Blida",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "182447",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2505329",
    "name": "Bejaïa",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "164103",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3111933",
    "name": "Reus",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "107118",
    "admin1_code": "56"
  },
  {
    "geoname_id": "3116025",
    "name": "Móstoles",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "206478",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1253286",
    "name": "Vellore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "484690",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1253958",
    "name": "Udgīr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "101064",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1256451",
    "name": "Shivpuri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "164215",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1257806",
    "name": "Sahāranpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "484873",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1259012",
    "name": "Rāichūr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "225962",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1260692",
    "name": "Pallāvaram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "157145",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1262321",
    "name": "Mysore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "868313",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1262482",
    "name": "Monghyr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "203163",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1262771",
    "name": "Morena",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "152004",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1272543",
    "name": "Dindigul",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "292512",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1273865",
    "name": "Coimbatore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "2136916",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1274220",
    "name": "Chikmagalūr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "121484",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1274746",
    "name": "Chandīgarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "960787",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1275812",
    "name": "Bhuj",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "133459",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1278710",
    "name": "Amritsar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1092450",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1278815",
    "name": "Ambur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "109873",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1279105",
    "name": "Akola",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "428857",
    "admin1_code": "16"
  },
  {
    "geoname_id": "89824",
    "name": "Umm Qaşr",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "107620",
    "admin1_code": "02"
  },
  {
    "geoname_id": "119505",
    "name": "Qazvin",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "333635",
    "admin1_code": "38"
  },
  {
    "geoname_id": "143127",
    "name": "Arāk",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "503647",
    "admin1_code": "34"
  },
  {
    "geoname_id": "2886946",
    "name": "Koblenz",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "107319",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2914796",
    "name": "Großzschocher",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "597493",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3598122",
    "name": "Coatepeque",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "105415",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3601782",
    "name": "San Pedro Sula",
    "country_code": "HN",
    "cou_name_en": "Honduras",
    "population": "801259",
    "admin1_code": "06"
  },
  {
    "geoname_id": "7284824",
    "name": "Budapest XI. kerület",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "139049",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1214724",
    "name": "Langsa",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "185971",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1645895",
    "name": "Curug",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "191406",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1646194",
    "name": "Ciputat",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "207858",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2641181",
    "name": "Norwich",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "143135",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "11777624",
    "name": "Archway",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "215667",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "3191281",
    "name": "Sarajevo",
    "country_code": "BA",
    "cou_name_en": "Bosnia and Herzegovina",
    "population": "696731",
    "admin1_code": "01"
  },
  {
    "geoname_id": "709930",
    "name": "Dnipro",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "968502",
    "admin1_code": "04"
  },
  {
    "geoname_id": "4119403",
    "name": "Little Rock",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "197992",
    "admin1_code": "AR"
  },
  {
    "geoname_id": "4158476",
    "name": "Hialeah",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "237069",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4167147",
    "name": "Orlando",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "307573",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4335045",
    "name": "New Orleans",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "389617",
    "admin1_code": "LA"
  },
  {
    "geoname_id": "4381982",
    "name": "Columbia",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "119108",
    "admin1_code": "MO"
  },
  {
    "geoname_id": "4498303",
    "name": "West Raleigh",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "338759",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "4694482",
    "name": "Grand Prairie",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "187809",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4709796",
    "name": "McAllen",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "140269",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "5323810",
    "name": "Anaheim",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "350742",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5358705",
    "name": "Huntington Beach",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "201899",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5406222",
    "name": "Victorville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "122225",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5520993",
    "name": "El Paso",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "681124",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "5808189",
    "name": "Renton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "100242",
    "admin1_code": "WA"
  },
  {
    "geoname_id": "1514019",
    "name": "Fergana",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "299200",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3648439",
    "name": "Baruta",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "244216",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1571058",
    "name": "Phan Thiết",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "160652",
    "admin1_code": "47"
  },
  {
    "geoname_id": "1587759",
    "name": "Bình Thủy",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "113565",
    "admin1_code": "87"
  },
  {
    "geoname_id": "944986",
    "name": "Vanderbijlpark",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "246754",
    "admin1_code": "06"
  },
  {
    "geoname_id": "964349",
    "name": "Potchefstroom",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "123669",
    "admin1_code": "10"
  },
  {
    "geoname_id": "890422",
    "name": "Gweru",
    "country_code": "ZW",
    "cou_name_en": "Zimbabwe",
    "population": "158200",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1283460",
    "name": "Dharān",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "173096",
    "admin1_code": "1"
  },
  {
    "geoname_id": "2191562",
    "name": "Dunedin",
    "country_code": "NZ",
    "cou_name_en": "New Zealand",
    "population": "133300",
    "admin1_code": "F7"
  },
  {
    "geoname_id": "2208032",
    "name": "Tauranga",
    "country_code": "NZ",
    "cou_name_en": "New Zealand",
    "population": "155200",
    "admin1_code": "E8"
  },
  {
    "geoname_id": "3947019",
    "name": "Ayacucho",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "140033",
    "admin1_code": "05"
  },
  {
    "geoname_id": "12157013",
    "name": "San Francisco De Borja",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "105076",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1679432",
    "name": "Zamboanga",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "457623",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1708522",
    "name": "Koronadal",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "195398",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1711982",
    "name": "Hagonoy",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "123531",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1712051",
    "name": "Guyong",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "155391",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1726280",
    "name": "Batangas",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "237370",
    "admin1_code": "40"
  },
  {
    "geoname_id": "7290466",
    "name": "Pasig City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "617301",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "757026",
    "name": "Tarnów",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "117799",
    "admin1_code": "77"
  },
  {
    "geoname_id": "521118",
    "name": "Nizhnekamsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "234297",
    "admin1_code": "73"
  },
  {
    "geoname_id": "1498894",
    "name": "Miass",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "167500",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1512236",
    "name": "Abakan",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "184168",
    "admin1_code": "31"
  },
  {
    "geoname_id": "2021851",
    "name": "Komsomolsk-on-Amur",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "275908",
    "admin1_code": "30"
  },
  {
    "geoname_id": "369004",
    "name": "Nyala",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "565734",
    "admin1_code": "49"
  },
  {
    "geoname_id": "379303",
    "name": "Geneina",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "162981",
    "admin1_code": "47"
  },
  {
    "geoname_id": "2666199",
    "name": "Uppsala",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "177074",
    "admin1_code": "21"
  },
  {
    "geoname_id": "64536",
    "name": "Baidoa",
    "country_code": "SO",
    "cou_name_en": "Somalia",
    "population": "129839",
    "admin1_code": "04"
  },
  {
    "geoname_id": "370737",
    "name": "Malakal",
    "country_code": "SS",
    "cou_name_en": "South Sudan, The Republic of",
    "population": "160765",
    "admin1_code": "07"
  },
  {
    "geoname_id": "174018",
    "name": "Al Bāb",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "130745",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1153671",
    "name": "Chiang Mai",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "127240",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1605245",
    "name": "Ubon Ratchathani",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "122533",
    "admin1_code": "75"
  },
  {
    "geoname_id": "1514879",
    "name": "Khujand",
    "country_code": "TJ",
    "cou_name_en": "Tajikistan",
    "population": "191000",
    "admin1_code": "03"
  },
  {
    "geoname_id": "298806",
    "name": "Turgutlu",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "103292",
    "admin1_code": "45"
  },
  {
    "geoname_id": "315202",
    "name": "Eskişehir",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "898369",
    "admin1_code": "26"
  },
  {
    "geoname_id": "323777",
    "name": "Antalya",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "1344000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "11238838",
    "name": "Merkezefendi",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "280341",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1671467",
    "name": "Neihu",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "271594",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3516266",
    "name": "Tapachula",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "202672",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3530139",
    "name": "Coyoacán",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "620416",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3530580",
    "name": "Ciudad Victoria",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "332100",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3979802",
    "name": "Zamora",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "141627",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3980194",
    "name": "Ciudad de Villa de Álvarez",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "117600",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1735093",
    "name": "Tasek Glugor",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "135786",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1735498",
    "name": "Sungai Petani",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "228843",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2325200",
    "name": "Oyo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "736072",
    "admin1_code": "32"
  },
  {
    "geoname_id": "3100796",
    "name": "Dąbrowa Górnicza",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "118285",
    "admin1_code": "83"
  },
  {
    "geoname_id": "3103402",
    "name": "Bielsko-Biala",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "176515",
    "admin1_code": "83"
  },
  {
    "geoname_id": "680332",
    "name": "Craiova",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "305689",
    "admin1_code": "17"
  },
  {
    "geoname_id": "683506",
    "name": "Bucharest",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "1877155",
    "admin1_code": "10"
  },
  {
    "geoname_id": "683902",
    "name": "Brăila",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "213569",
    "admin1_code": "08"
  },
  {
    "geoname_id": "684039",
    "name": "Botoşani",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "114783",
    "admin1_code": "07"
  },
  {
    "geoname_id": "491687",
    "name": "Smolensk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "330025",
    "admin1_code": "69"
  },
  {
    "geoname_id": "503977",
    "name": "Pushkino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "102816",
    "admin1_code": "47"
  },
  {
    "geoname_id": "8601412",
    "name": "Santo Domingo Este",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "700000",
    "admin1_code": "37"
  },
  {
    "geoname_id": "2479215",
    "name": "Souk Ahras",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "156745",
    "admin1_code": "52"
  },
  {
    "geoname_id": "352913",
    "name": "Manfalūţ",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "117925",
    "admin1_code": "17"
  },
  {
    "geoname_id": "360890",
    "name": "Al Khuşūş",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "488904",
    "admin1_code": "12"
  },
  {
    "geoname_id": "361320",
    "name": "Al Fayyūm",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "519047",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3108288",
    "name": "Tarragona",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "132299",
    "admin1_code": "56"
  },
  {
    "geoname_id": "3124964",
    "name": "Ciudad Lineal",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "228171",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6252065",
    "name": "Nou Barris",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "166310",
    "admin1_code": "56"
  },
  {
    "geoname_id": "9072919",
    "name": "Rizhao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "661943",
    "admin1_code": "25"
  },
  {
    "geoname_id": "12269572",
    "name": "Fangchenggang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "276315",
    "admin1_code": "16"
  },
  {
    "geoname_id": "12359313",
    "name": "Qingyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "377528",
    "admin1_code": "15"
  },
  {
    "geoname_id": "12492662",
    "name": "Mianzhu, Deyang, Sichuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "510000",
    "admin1_code": "32"
  },
  {
    "geoname_id": "3667905",
    "name": "Soacha",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "313945",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3675595",
    "name": "Malambo",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "129148",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3682028",
    "name": "Girardot City",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "107324",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3550598",
    "name": "Las Tunas",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "203684",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3746183",
    "name": "Centro Habana",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "158151",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3395473",
    "name": "Maracanaú",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "193529",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3395981",
    "name": "Maceió",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "1031597",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3397277",
    "name": "João Pessoa",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "817511",
    "admin1_code": "17"
  },
  {
    "geoname_id": "3456223",
    "name": "Nossa Senhora do Socorro",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "163993",
    "admin1_code": "28"
  },
  {
    "geoname_id": "3460791",
    "name": "Itanhaém",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "103102",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3462089",
    "name": "Gravataí",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "238778",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3463690",
    "name": "Eunápolis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "114275",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3466998",
    "name": "Carapicuíba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "361112",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3467693",
    "name": "Campos dos Goytacazes",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "511168",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3473964",
    "name": "Guaíba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "101024",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3474574",
    "name": "Palmas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "306296",
    "admin1_code": "31"
  },
  {
    "geoname_id": "624079",
    "name": "Orsha",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "125347",
    "admin1_code": "07"
  },
  {
    "geoname_id": "5937615",
    "name": "Delta",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "101668",
    "admin1_code": "02"
  },
  {
    "geoname_id": "5964700",
    "name": "Greater Sudbury",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "157857",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6066513",
    "name": "Markham",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "328966",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6325521",
    "name": "Lévis",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "143414",
    "admin1_code": "10"
  },
  {
    "geoname_id": "204405",
    "name": "Uvira",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "170391",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3897347",
    "name": "Calama",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "143084",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2224827",
    "name": "Ngaoundéré",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "231357",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1783934",
    "name": "Shangqiu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1536392",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1785036",
    "name": "Zhangye",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "507433",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1788081",
    "name": "Xuanzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "774332",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1788508",
    "name": "Xinyu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "839488",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1788572",
    "name": "Xinxiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1047088",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1789065",
    "name": "Ankang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "870126",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1791236",
    "name": "Wuhu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1598165",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1791247",
    "name": "Wuhan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "10392693",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1797873",
    "name": "Huai'an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2494013",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1800163",
    "name": "Nanchang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2357839",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1802204",
    "name": "Luancheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "597130",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1803300",
    "name": "Liuzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1436599",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1804208",
    "name": "Leiyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "129116",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1806466",
    "name": "Guangyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "516424",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1808392",
    "name": "Hengshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "522147",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1809061",
    "name": "Jiaojiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "470804",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1813812",
    "name": "Danshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "126701",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1815302",
    "name": "Chenghua",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "152453",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1816373",
    "name": "Bijie",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1137383",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1816865",
    "name": "Bashan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "103748",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1886762",
    "name": "Zhoushan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "882932",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2034312",
    "name": "Ulanhot",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "165846",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2034996",
    "name": "Shanhaiguan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "140000",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2035980",
    "name": "Longfeng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "152074",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2036986",
    "name": "Hegang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "743307",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2038120",
    "name": "Chaoyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "410005",
    "admin1_code": "19"
  },
  {
    "geoname_id": "6642286",
    "name": "E’zhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "668727",
    "admin1_code": "12"
  },
  {
    "geoname_id": "783263",
    "name": "Elbasan",
    "country_code": "AL",
    "cou_name_en": "Albania",
    "population": "100903",
    "admin1_code": "43"
  },
  {
    "geoname_id": "3429577",
    "name": "Resistencia",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "290793",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3848950",
    "name": "La Rioja",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "178872",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1185111",
    "name": "Sātkhira",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "128918",
    "admin1_code": "82"
  },
  {
    "geoname_id": "1185159",
    "name": "Nāgarpur",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "238422",
    "admin1_code": "81"
  },
  {
    "geoname_id": "3488981",
    "name": "Portmore",
    "country_code": "JM",
    "cou_name_en": "Jamaica",
    "population": "102861",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1848689",
    "name": "Yamaguchi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "145515",
    "admin1_code": "45"
  },
  {
    "geoname_id": "1852663",
    "name": "Seto",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "127659",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1853008",
    "name": "Sandachō",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "132858",
    "admin1_code": "13"
  },
  {
    "geoname_id": "187968",
    "name": "Malindi",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "118265",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1869446",
    "name": "Songnim-ni",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "152425",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1876373",
    "name": "Kaesŏng",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "338155",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1841811",
    "name": "Gwangju",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "1490092",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1846052",
    "name": "Chinju",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "307242",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1846918",
    "name": "Ansan-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "716785",
    "admin1_code": "13"
  },
  {
    "geoname_id": "609655",
    "name": "Karagandy",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "497777",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2553604",
    "name": "Casablanca",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "3144909",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1062663",
    "name": "Mahajanga",
    "country_code": "MG",
    "cou_name_en": "Madagascar",
    "population": "246022",
    "admin1_code": "41"
  },
  {
    "geoname_id": "1293960",
    "name": "Taunggyi",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "160115",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1325211",
    "name": "Hinthada",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "134947",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2987914",
    "name": "Perpignan",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "110706",
    "admin1_code": "76"
  },
  {
    "geoname_id": "2634910",
    "name": "Wakefield",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "109766",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2636503",
    "name": "Sutton",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "187600",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "1254360",
    "name": "Tirupati",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "250821",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1260137",
    "name": "Pathānkot",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "174306",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1269633",
    "name": "Jabalpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1030168",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1269937",
    "name": "Hoshiārpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "158142",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1271912",
    "name": "Fatehpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "166480",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1272805",
    "name": "Dhaulpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "102462",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1274553",
    "name": "Chās",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "112141",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1275610",
    "name": "Bilimora",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "510879",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1278685",
    "name": "Anand",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "138009",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1278840",
    "name": "Ambattūr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "341049",
    "admin1_code": "25"
  },
  {
    "geoname_id": "8740017",
    "name": "Gadag-Betageri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "172813",
    "admin1_code": "19"
  },
  {
    "geoname_id": "124620",
    "name": "Masjed Soleymān",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "111510",
    "admin1_code": "15"
  },
  {
    "geoname_id": "124862",
    "name": "Marand",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "124191",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3171168",
    "name": "Pescara",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "119554",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2643743",
    "name": "London",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "8961989",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2644487",
    "name": "Lincoln",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "103813",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2657832",
    "name": "Aberdeen",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "198590",
    "admin1_code": "SCT"
  },
  {
    "geoname_id": "613607",
    "name": "Kutaisi",
    "country_code": "GE",
    "cou_name_en": "Georgia",
    "population": "135201",
    "admin1_code": "66"
  },
  {
    "geoname_id": "2306104",
    "name": "Accra",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "1963264",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1626899",
    "name": "Singosari",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "180050",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1632276",
    "name": "Parung",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "123078",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1636884",
    "name": "Magelang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "121526",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1648473",
    "name": "Bogor",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1099422",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1649824",
    "name": "Batu",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "213046",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2348595",
    "name": "Azare",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "105687",
    "admin1_code": "46"
  },
  {
    "geoname_id": "2350841",
    "name": "Akure",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "420594",
    "admin1_code": "48"
  },
  {
    "geoname_id": "1147540",
    "name": "Baghlān",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "108449",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3836846",
    "name": "San Nicolás de los Arroyos",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "134217",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2159220",
    "name": "Mackay",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "123183",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1849892",
    "name": "Tottori",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "154098",
    "admin1_code": "41"
  },
  {
    "geoname_id": "1850034",
    "name": "Tondabayashichō",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "132873",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1851032",
    "name": "Takaoka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "170077",
    "admin1_code": "42"
  },
  {
    "geoname_id": "1851604",
    "name": "Sōka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "249645",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1852964",
    "name": "Sano",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "117669",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1854162",
    "name": "Ōme",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "131895",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1856177",
    "name": "Nagasaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "407624",
    "admin1_code": "27"
  },
  {
    "geoname_id": "1856199",
    "name": "Nagaoka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "195318",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1859675",
    "name": "Kawanishi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "155165",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1861084",
    "name": "Izumo",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "172039",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1863209",
    "name": "Handa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "116119",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1864105",
    "name": "Fujinomiya",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "132507",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1864572",
    "name": "Chikushino-shi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "100353",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1926099",
    "name": "Matsuyama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "509835",
    "admin1_code": "05"
  },
  {
    "geoname_id": "6825496",
    "name": "Habikino",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "109479",
    "admin1_code": "32"
  },
  {
    "geoname_id": "2040893",
    "name": "Sinŭiju",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "288112",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1835553",
    "name": "Suwon",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "1241311",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1842030",
    "name": "Gunpo",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "286485",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1843564",
    "name": "Incheon",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "2954955",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1843847",
    "name": "Hwaseong-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "640890",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1846326",
    "name": "Changwon",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "550000",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1236854",
    "name": "Maharagama",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "195355",
    "admin1_code": "36"
  },
  {
    "geoname_id": "2544248",
    "name": "Khouribga",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "167673",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2460596",
    "name": "Bamako",
    "country_code": "ML",
    "cou_name_en": "Mali",
    "population": "1297281",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3514674",
    "name": "Gustavo Adolfo Madero",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1185772",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3522307",
    "name": "Orizaba",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "120844",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3533462",
    "name": "Acapulco de Juárez",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "673479",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3827414",
    "name": "Huixquilucan",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "124846",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3981254",
    "name": "Torreón",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "735340",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3985241",
    "name": "San Nicolás de los Garza",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "443273",
    "admin1_code": "19"
  },
  {
    "geoname_id": "3988214",
    "name": "Salamanca",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "273417",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1737486",
    "name": "Bintulu",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "151617",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1052373",
    "name": "Beira",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "533825",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2334802",
    "name": "Katsina",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "432149",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1253367",
    "name": "Vasco da Gama",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "100485",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1253952",
    "name": "Udupi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "165000",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1258178",
    "name": "Rewāri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "112079",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1263814",
    "name": "Mandya",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "134845",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1264115",
    "name": "Mālegaon",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "435362",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1269065",
    "name": "Jetpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "118068",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1269395",
    "name": "Jālna",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "262034",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1273313",
    "name": "Dehra Dūn",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "522081",
    "admin1_code": "39"
  },
  {
    "geoname_id": "1275817",
    "name": "Bhubaneswar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "837000",
    "admin1_code": "21"
  },
  {
    "geoname_id": "99347",
    "name": "Al Ḩillah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "455700",
    "admin1_code": "06"
  },
  {
    "geoname_id": "144448",
    "name": "Ahvaz",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "841145",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2523083",
    "name": "Siracusa",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "121605",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3172189",
    "name": "Novara",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "101916",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2995469",
    "name": "Marseille",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "870731",
    "admin1_code": "93"
  },
  {
    "geoname_id": "2996944",
    "name": "Lyon",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "522969",
    "admin1_code": "84"
  },
  {
    "geoname_id": "3031137",
    "name": "Boulogne-Billancourt",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "108782",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3378644",
    "name": "Georgetown",
    "country_code": "GY",
    "cou_name_en": "Guyana",
    "population": "235017",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1818209",
    "name": "Tsuen Wan",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "299400",
    "admin1_code": "NTW"
  },
  {
    "geoname_id": "1633070",
    "name": "Palembang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1668848",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1647866",
    "name": "Bukittinggi",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "121028",
    "admin1_code": "24"
  },
  {
    "geoname_id": "2648404",
    "name": "Gloucester",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "132416",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2655524",
    "name": "Blackburn",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "146521",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "612287",
    "name": "Rustavi",
    "country_code": "GE",
    "cou_name_en": "Georgia",
    "population": "130100",
    "admin1_code": "68"
  },
  {
    "geoname_id": "2298890",
    "name": "Kumasi",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "1468609",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2638703",
    "name": "Saint Peters",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "125370",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "3906791",
    "name": "Quillacollo",
    "country_code": "BO",
    "cou_name_en": "Bolivia",
    "population": "172405",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3392998",
    "name": "Parnamirim",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "267036",
    "admin1_code": "22"
  },
  {
    "geoname_id": "3395503",
    "name": "Marabá",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "145860",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3450554",
    "name": "Salvador",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "2711840",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3450909",
    "name": "Rondonópolis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "152912",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3451055",
    "name": "Rio Verde",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "229651",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3458266",
    "name": "Macaé",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "143029",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3460005",
    "name": "Jaú",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "119206",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3464460",
    "name": "Dourados",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "162202",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3467747",
    "name": "Campo Grande",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "906092",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3469968",
    "name": "Blumenau",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "361855",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3662762",
    "name": "Porto Velho",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "548952",
    "admin1_code": "24"
  },
  {
    "geoname_id": "6318696",
    "name": "Sinop",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "116013",
    "admin1_code": "14"
  },
  {
    "geoname_id": "620127",
    "name": "Vitebsk",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "342700",
    "admin1_code": "07"
  },
  {
    "geoname_id": "629634",
    "name": "Brest",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "362641",
    "admin1_code": "01"
  },
  {
    "geoname_id": "5992500",
    "name": "Kingston",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "114195",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6163012",
    "name": "Terrebonne",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "111575",
    "admin1_code": "10"
  },
  {
    "geoname_id": "204953",
    "name": "Tshikapa",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "267462",
    "admin1_code": "18"
  },
  {
    "geoname_id": "922741",
    "name": "Likasi",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "422414",
    "admin1_code": "14"
  },
  {
    "geoname_id": "922773",
    "name": "Kolwezi",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "418000",
    "admin1_code": "22"
  },
  {
    "geoname_id": "2593460",
    "name": "Masina",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "485167",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2659994",
    "name": "Lausanne",
    "country_code": "CH",
    "cou_name_en": "Switzerland",
    "population": "139111",
    "admin1_code": "VD"
  },
  {
    "geoname_id": "2661552",
    "name": "Bern",
    "country_code": "CH",
    "cou_name_en": "Switzerland",
    "population": "121631",
    "admin1_code": "BE"
  },
  {
    "geoname_id": "2945024",
    "name": "Braunschweig",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "244715",
    "admin1_code": "06"
  },
  {
    "geoname_id": "8593863",
    "name": "Rodenkirchen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "110158",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3493240",
    "name": "Salvaleón de Higüey",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "123787",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3500957",
    "name": "La Romana",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "208437",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2500017",
    "name": "Djelfa",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "154265",
    "admin1_code": "22"
  },
  {
    "geoname_id": "2505653",
    "name": "Baraki",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "105402",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3655673",
    "name": "Ibarra",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "221149",
    "admin1_code": "11"
  },
  {
    "geoname_id": "347634",
    "name": "Ţahţā",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "134314",
    "admin1_code": "24"
  },
  {
    "geoname_id": "353229",
    "name": "Al ‘Āshir min Ramaḑān",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "246148",
    "admin1_code": "14"
  },
  {
    "geoname_id": "358048",
    "name": "Damietta",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "305920",
    "admin1_code": "20"
  },
  {
    "geoname_id": "359796",
    "name": "Suez",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "699541",
    "admin1_code": "15"
  },
  {
    "geoname_id": "360716",
    "name": "Al Maţarīyah",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "162045",
    "admin1_code": "01"
  },
  {
    "geoname_id": "360995",
    "name": "Giza",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "4367343",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2516326",
    "name": "Jerez de la Frontera",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "207532",
    "admin1_code": "51"
  },
  {
    "geoname_id": "2520058",
    "name": "Cartagena",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "211996",
    "admin1_code": "31"
  },
  {
    "geoname_id": "3104748",
    "name": "Villaverde",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "126802",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3109718",
    "name": "Santander",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "172044",
    "admin1_code": "39"
  },
  {
    "geoname_id": "3120635",
    "name": "Hortaleza",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "161661",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6544492",
    "name": "Chamberí",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "145934",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6544495",
    "name": "Retiro",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "126058",
    "admin1_code": "29"
  },
  {
    "geoname_id": "8417607",
    "name": "Nanjin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "143766",
    "admin1_code": "33"
  },
  {
    "geoname_id": "10020191",
    "name": "Liuzhi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "138826",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3667849",
    "name": "Soledad",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "342556",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3671116",
    "name": "Quibdó",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "129237",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3672110",
    "name": "Pitalito",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "135711",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3688256",
    "name": "Guadalajara de Buga",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "114316",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2806654",
    "name": "Wolfsburg",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "123064",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2832495",
    "name": "Siegen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "107242",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2291136",
    "name": "Bondoukou",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "141568",
    "admin1_code": "92"
  },
  {
    "geoname_id": "3872348",
    "name": "San Bernardo",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "249858",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1280570",
    "name": "Mengmao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "112578",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1529401",
    "name": "Karamay",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "261445",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1784642",
    "name": "Zhenjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "950516",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1784841",
    "name": "Zhaotong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "787845",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1787093",
    "name": "Yantai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2227733",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1787828",
    "name": "Xuyong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "108352",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1791681",
    "name": "Weifang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2044028",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1792947",
    "name": "Tianjin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "11090314",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1793743",
    "name": "Suzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1647642",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1793899",
    "name": "Suicheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "256665",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1795055",
    "name": "Shiqiao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "135308",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1795855",
    "name": "Shaoxing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2300000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1802238",
    "name": "Loudi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "497171",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1805741",
    "name": "Jincheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "476945",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1806696",
    "name": "Humen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "191891",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1808926",
    "name": "Hangzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "9236032",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1810724",
    "name": "Gangu Chengguanzhen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "103589",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1818116",
    "name": "Anbu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "162964",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2034638",
    "name": "Sujiatun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "148113",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2035715",
    "name": "Mudanjiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "665915",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2037799",
    "name": "Datong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1850000",
    "admin1_code": "24"
  },
  {
    "geoname_id": "2038632",
    "name": "Anshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1450000",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2921232",
    "name": "Gera",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "104659",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1337248",
    "name": "Sherpur",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "107419",
    "admin1_code": "H"
  },
  {
    "geoname_id": "2847736",
    "name": "Reutlingen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "112627",
    "admin1_code": "01"
  },
  {
    "geoname_id": "5304391",
    "name": "Mesa",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "471825",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5391295",
    "name": "Salinas",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "157380",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5391811",
    "name": "San Diego",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "1394928",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5393049",
    "name": "Santa Clarita",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "182371",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5505411",
    "name": "Henderson",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "285667",
    "admin1_code": "NV"
  },
  {
    "geoname_id": "5516233",
    "name": "Amarillo",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "198645",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "5879400",
    "name": "Anchorage",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "291247",
    "admin1_code": "AK"
  },
  {
    "geoname_id": "3633677",
    "name": "Los Rastrojos",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "100497",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3639898",
    "name": "Guatire",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "227666",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1587976",
    "name": "Bến Tre",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "124449",
    "admin1_code": "03"
  },
  {
    "geoname_id": "712165",
    "name": "Bila Tserkva",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "207273",
    "admin1_code": "13"
  },
  {
    "geoname_id": "4180439",
    "name": "Atlanta",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "463878",
    "admin1_code": "GA"
  },
  {
    "geoname_id": "4459467",
    "name": "Cary",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "159769",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "4791259",
    "name": "Virginia Beach",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "452745",
    "admin1_code": "VA"
  },
  {
    "geoname_id": "789225",
    "name": "Mitrovicë",
    "country_code": "XK",
    "cou_name_en": "None",
    "population": "107045",
    "admin1_code": "10097358"
  },
  {
    "geoname_id": "74477",
    "name": "Ibb",
    "country_code": "YE",
    "cou_name_en": "Yemen",
    "population": "234837",
    "admin1_code": "23"
  },
  {
    "geoname_id": "905395",
    "name": "Mufulira",
    "country_code": "ZM",
    "cou_name_en": "Zambia",
    "population": "120500",
    "admin1_code": "08"
  },
  {
    "geoname_id": "889453",
    "name": "Kadoma",
    "country_code": "ZW",
    "cou_name_en": "Zimbabwe",
    "population": "116300",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2759794",
    "name": "Amsterdam",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "741636",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3696183",
    "name": "Iquitos",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "377609",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3696378",
    "name": "Huaraz",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "118836",
    "admin1_code": "02"
  },
  {
    "geoname_id": "12157008",
    "name": "San Martin",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "130000",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1701668",
    "name": "Manila",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "1600000",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1720681",
    "name": "Calamba",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "539671",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1729085",
    "name": "Bago City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "191210",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1172451",
    "name": "Lahore",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "6310888",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3086800",
    "name": "Ruda Śląska",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "146189",
    "admin1_code": "83"
  },
  {
    "geoname_id": "2735943",
    "name": "Porto",
    "country_code": "PT",
    "cou_name_en": "Portugal",
    "population": "249633",
    "admin1_code": "17"
  },
  {
    "geoname_id": "463355",
    "name": "Zheleznodorozhnyy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "141648",
    "admin1_code": "47"
  },
  {
    "geoname_id": "473247",
    "name": "Vladimir",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "357024",
    "admin1_code": "83"
  },
  {
    "geoname_id": "496285",
    "name": "Severodvinsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "194292",
    "admin1_code": "06"
  },
  {
    "geoname_id": "542634",
    "name": "Presnenskiy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "122000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "1489530",
    "name": "Tobolsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "113800",
    "admin1_code": "78"
  },
  {
    "geoname_id": "1496990",
    "name": "Novokuznetsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "539616",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2027667",
    "name": "Angarsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "243158",
    "admin1_code": "20"
  },
  {
    "geoname_id": "6418220",
    "name": "Orekhovo-Borisovo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "144000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "109223",
    "name": "Medina",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "1300000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "379555",
    "name": "El Fasher",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "252609",
    "admin1_code": "55"
  },
  {
    "geoname_id": "54225",
    "name": "Marka",
    "country_code": "SO",
    "cou_name_en": "Somalia",
    "population": "230100",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1151933",
    "name": "Nakhon Si Thammarat",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "102152",
    "admin1_code": "64"
  },
  {
    "geoname_id": "311046",
    "name": "İzmir",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "2500603",
    "admin1_code": "35"
  },
  {
    "geoname_id": "322165",
    "name": "Balıkesir",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "238151",
    "admin1_code": "10"
  },
  {
    "geoname_id": "152451",
    "name": "Musoma",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "121119",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1180281",
    "name": "Dera Ismail Khan",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "101616",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1180289",
    "name": "Dera Ghazi Khan",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "236093",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1180436",
    "name": "Daska Kalan",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "126924",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2339937",
    "name": "Gusau",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "226857",
    "admin1_code": "57"
  },
  {
    "geoname_id": "2347209",
    "name": "Bida",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "171656",
    "admin1_code": "31"
  },
  {
    "geoname_id": "2348773",
    "name": "Awka",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "167738",
    "admin1_code": "25"
  },
  {
    "geoname_id": "2350249",
    "name": "Amaigbo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "127300",
    "admin1_code": "45"
  },
  {
    "geoname_id": "8406214",
    "name": "Sanhe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "140954",
    "admin1_code": "33"
  },
  {
    "geoname_id": "3665688",
    "name": "Yopal",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "168433",
    "admin1_code": "32"
  },
  {
    "geoname_id": "3670502",
    "name": "Sabanalarga",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "102334",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2809346",
    "name": "Wiesbaden",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "278609",
    "admin1_code": "05"
  },
  {
    "geoname_id": "293918",
    "name": "Petaẖ Tiqva",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "253529",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1256409",
    "name": "Shyamnagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "441956",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1256639",
    "name": "Shāntipur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "149983",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1256922",
    "name": "Secunderabad",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "204182",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1258126",
    "name": "Rishra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "117014",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1259166",
    "name": "Purnia",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "198453",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1261012",
    "name": "Dharashiv",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "112085",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1261473",
    "name": "Neyveli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "179150",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1268295",
    "name": "Kalyān",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1262255",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1269515",
    "name": "Jaipur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "2711758",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1270079",
    "name": "Hindupur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "133298",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1270668",
    "name": "Guntur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "530577",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1271717",
    "name": "Gāndhīdhām",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "166388",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1271976",
    "name": "Fyzābād",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "153047",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1273368",
    "name": "Davangere",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "435128",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1274337",
    "name": "Chhatarpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "111594",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1275960",
    "name": "Bhīlwāra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "326431",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1275971",
    "name": "Bhilai",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "625138",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1276032",
    "name": "Bhavnagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "605882",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1276300",
    "name": "Bhāgalpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "361548",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1276320",
    "name": "Bhadreswar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "121662",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1276533",
    "name": "Belagavi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "428720",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1278083",
    "name": "Azamgarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "116644",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1278718",
    "name": "Amrāvati",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "603837",
    "admin1_code": "16"
  },
  {
    "geoname_id": "7279754",
    "name": "Singrauli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "185580",
    "admin1_code": "35"
  },
  {
    "geoname_id": "115019",
    "name": "Shiraz",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "1249942",
    "admin1_code": "07"
  },
  {
    "geoname_id": "135423",
    "name": "Shahrud",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "131889",
    "admin1_code": "25"
  },
  {
    "geoname_id": "418710",
    "name": "Khomeynī Shahr",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "277334",
    "admin1_code": "28"
  },
  {
    "geoname_id": "2524170",
    "name": "Messina",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "219948",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2525068",
    "name": "Catania",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "311584",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3172629",
    "name": "Monza",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "124398",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3595237",
    "name": "Jalapa",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "159840",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3728338",
    "name": "Carrefour",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "442156",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3044774",
    "name": "Székesfehérvár",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "101600",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1215102",
    "name": "Gunungsitoli",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "136707",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1621884",
    "name": "Watampone",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "149336",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1622636",
    "name": "Ungaran",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "171378",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1626560",
    "name": "Soreang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "116780",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1629001",
    "name": "Samarinda",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "831460",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2082600",
    "name": "Jayapura",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "404004",
    "admin1_code": "36"
  },
  {
    "geoname_id": "2541479",
    "name": "Nador",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "129260",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2542715",
    "name": "Meknès",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "545705",
    "admin1_code": "03"
  },
  {
    "geoname_id": "617239",
    "name": "Tiraspol",
    "country_code": "MD",
    "cou_name_en": "Moldova, Republic of",
    "population": "157000",
    "admin1_code": "58"
  },
  {
    "geoname_id": "1070940",
    "name": "Antananarivo",
    "country_code": "MG",
    "cou_name_en": "Madagascar",
    "population": "1391433",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3515001",
    "name": "Tuxtla",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "604147",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2641673",
    "name": "Newcastle upon Tyne",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "300125",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2654264",
    "name": "Burnley",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "149422",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "261414",
    "name": "Kallithéa",
    "country_code": "GR",
    "cou_name_en": "Greece",
    "population": "100641",
    "admin1_code": "ESYE31"
  },
  {
    "geoname_id": "658225",
    "name": "Helsinki",
    "country_code": "FI",
    "cou_name_en": "Finland",
    "population": "658864",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2992166",
    "name": "Montpellier",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "248252",
    "admin1_code": "76"
  },
  {
    "geoname_id": "3595803",
    "name": "Escuintla",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "156313",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1279390",
    "name": "Achalpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "111278",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2475687",
    "name": "Tlemcen",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "132341",
    "admin1_code": "15"
  },
  {
    "geoname_id": "12326384",
    "name": "District of Taher",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "147612",
    "admin1_code": "24"
  },
  {
    "geoname_id": "3658501",
    "name": "Daule",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "173684",
    "admin1_code": "10"
  },
  {
    "geoname_id": "352951",
    "name": "Mallawī",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "212628",
    "admin1_code": "10"
  },
  {
    "geoname_id": "3014728",
    "name": "Grenoble",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "158552",
    "admin1_code": "84"
  },
  {
    "geoname_id": "2635608",
    "name": "Tottenham",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "130000",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "726050",
    "name": "Varna",
    "country_code": "BG",
    "cou_name_en": "Bulgaria",
    "population": "312770",
    "admin1_code": "61"
  },
  {
    "geoname_id": "2392087",
    "name": "Porto-Novo",
    "country_code": "BJ",
    "cou_name_en": "Benin",
    "population": "234168",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3393536",
    "name": "Olinda",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "366754",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3407357",
    "name": "Araguaína",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "105019",
    "admin1_code": "31"
  },
  {
    "geoname_id": "3449701",
    "name": "Santo André",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "662373",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3453837",
    "name": "Pindamonhangaba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "132218",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3458575",
    "name": "Limeira",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "289665",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3461879",
    "name": "Guarapuava",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "150850",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3465196",
    "name": "Criciúma",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "161954",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3466296",
    "name": "Chapecó",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "160157",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3466537",
    "name": "Caxias do Sul",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "381270",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3470279",
    "name": "Bauru",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "379297",
    "admin1_code": "27"
  },
  {
    "geoname_id": "630468",
    "name": "Babruysk",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "209675",
    "admin1_code": "06"
  },
  {
    "geoname_id": "5913695",
    "name": "Cambridge",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "129920",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3893629",
    "name": "Coquimbo",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "161317",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2226275",
    "name": "Mokolo",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "275239",
    "admin1_code": "12"
  },
  {
    "geoname_id": "2234974",
    "name": "Bamenda",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "393835",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1784185",
    "name": "Yuxi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "103829",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1784712",
    "name": "Zhengding",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "193524",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1785545",
    "name": "Yuyao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "114177",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1786778",
    "name": "Yezhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "104839",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1788268",
    "name": "Xiulin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "122411",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1790920",
    "name": "Wushan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "117873",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1791536",
    "name": "Tianfu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "115370",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1794903",
    "name": "Shiyan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3460000",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1797264",
    "name": "Quzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "902767",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1798760",
    "name": "Pingliang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "504848",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1802940",
    "name": "Puning",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "874954",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1805518",
    "name": "Jining",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1241012",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1805543",
    "name": "Jingzhi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "126703",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1805798",
    "name": "Jijiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "196787",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1806535",
    "name": "Huzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1015937",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1807301",
    "name": "Dasha",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "116307",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1814934",
    "name": "Chizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "615274",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1815286",
    "name": "Chengdu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "13568357",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1816080",
    "name": "Cangzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "527681",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1816265",
    "name": "Boshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "153596",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1816790",
    "name": "Beibei",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "247702",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1817848",
    "name": "Bachuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "208520",
    "admin1_code": "33"
  },
  {
    "geoname_id": "2037534",
    "name": "Dunhua",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "148844",
    "admin1_code": "05"
  },
  {
    "geoname_id": "616530",
    "name": "Vanadzor",
    "country_code": "AM",
    "cou_name_en": "Armenia",
    "population": "101098",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3429652",
    "name": "Quilmes",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "262379",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3836669",
    "name": "San Rafael",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "118009",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3843123",
    "name": "Neuquén",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "231198",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3860443",
    "name": "Comodoro Rivadavia",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "140850",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2769359",
    "name": "Ottakring",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "104627",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2779469",
    "name": "Floridsdorf",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "162779",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2857807",
    "name": "Offenbach",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "119192",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2911287",
    "name": "Marienthal",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "287101",
    "admin1_code": "04"
  },
  {
    "geoname_id": "546230",
    "name": "Kolomna",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "147690",
    "admin1_code": "47"
  },
  {
    "geoname_id": "558418",
    "name": "Groznyy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "297137",
    "admin1_code": "12"
  },
  {
    "geoname_id": "578072",
    "name": "Belgorod",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "345289",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1502026",
    "name": "Krasnoyarsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1090811",
    "admin1_code": "91"
  },
  {
    "geoname_id": "109323",
    "name": "Khobar",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "165799",
    "admin1_code": "06"
  },
  {
    "geoname_id": "8504621",
    "name": "Gereida",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "120000",
    "admin1_code": "49"
  },
  {
    "geoname_id": "64435",
    "name": "Berbera",
    "country_code": "SO",
    "cou_name_en": "Somalia",
    "population": "242344",
    "admin1_code": "20"
  },
  {
    "geoname_id": "373303",
    "name": "Juba",
    "country_code": "SS",
    "cou_name_en": "South Sudan, The Republic of",
    "population": "450000",
    "admin1_code": "01"
  },
  {
    "geoname_id": "173811",
    "name": "Al Ḩasakah",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "422445",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2365267",
    "name": "Lomé",
    "country_code": "TG",
    "cou_name_en": "Togo",
    "population": "749700",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1608529",
    "name": "Nakhon Ratchasima",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "126391",
    "admin1_code": "27"
  },
  {
    "geoname_id": "307515",
    "name": "Kırşehir",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "150700",
    "admin1_code": "40"
  },
  {
    "geoname_id": "315368",
    "name": "Erzurum",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "767848",
    "admin1_code": "25"
  },
  {
    "geoname_id": "321082",
    "name": "Bingöl",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "128935",
    "admin1_code": "12"
  },
  {
    "geoname_id": "747764",
    "name": "Düzce",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "194097",
    "admin1_code": "93"
  },
  {
    "geoname_id": "748879",
    "name": "Çorum",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "269595",
    "admin1_code": "19"
  },
  {
    "geoname_id": "748893",
    "name": "Çorlu",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "202578",
    "admin1_code": "59"
  },
  {
    "geoname_id": "3099759",
    "name": "Elbląg",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "127558",
    "admin1_code": "85"
  },
  {
    "geoname_id": "3100946",
    "name": "Częstochowa",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "248125",
    "admin1_code": "83"
  },
  {
    "geoname_id": "289888",
    "name": "Ar Rayyān",
    "country_code": "QA",
    "cou_name_en": "Qatar",
    "population": "272465",
    "admin1_code": "06"
  },
  {
    "geoname_id": "783920",
    "name": "Zemun",
    "country_code": "RS",
    "cou_name_en": "Serbia",
    "population": "155591",
    "admin1_code": "SE"
  },
  {
    "geoname_id": "3515715",
    "name": "Texcoco de Mora",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "105165",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3530569",
    "name": "Coacalco",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "277959",
    "admin1_code": "15"
  },
  {
    "geoname_id": "6957079",
    "name": "Benito Juárez",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "385439",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2330028",
    "name": "Modakeke",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "119529",
    "admin1_code": "42"
  },
  {
    "geoname_id": "2332504",
    "name": "Lafiagi",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "102779",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2337765",
    "name": "Ila Orangun",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "179192",
    "admin1_code": "42"
  },
  {
    "geoname_id": "701822",
    "name": "Mariupol",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "431859",
    "admin1_code": "05"
  },
  {
    "geoname_id": "703845",
    "name": "Kryvyy Rih",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "603904",
    "admin1_code": "04"
  },
  {
    "geoname_id": "4487042",
    "name": "Raleigh",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "451066",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "4699066",
    "name": "Houston",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "2304580",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4739526",
    "name": "Waco",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "132356",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "250441",
    "name": "Amman",
    "country_code": "JO",
    "cou_name_en": "Jordan",
    "population": "1275857",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1858910",
    "name": "Komatsu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "108509",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1860437",
    "name": "Kamirenjaku",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "178739",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1862636",
    "name": "Hikone",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "110925",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1863440",
    "name": "Hachiōji",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "561344",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1863967",
    "name": "Fukuoka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "1603543",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2111220",
    "name": "Sakura",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "173740",
    "admin1_code": "04"
  },
  {
    "geoname_id": "11611632",
    "name": "Fuchū",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "260508",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1877030",
    "name": "Hŭngnam",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "346082",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1841246",
    "name": "Masan",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "434371",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1842485",
    "name": "Goyang-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "1073069",
    "admin1_code": "13"
  },
  {
    "geoname_id": "610529",
    "name": "Atyrau",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "290700",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1518542",
    "name": "Taldykorgan",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "116558",
    "admin1_code": "12510144"
  },
  {
    "geoname_id": "1519422",
    "name": "Semey",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "292780",
    "admin1_code": "12510143"
  },
  {
    "geoname_id": "2274895",
    "name": "Monrovia",
    "country_code": "LR",
    "cou_name_en": "Liberia",
    "population": "939524",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1178231",
    "name": "Gojra",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "139726",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1182092",
    "name": "Burewala",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "183915",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1184845",
    "name": "Ahmadpur East",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "116579",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2352947",
    "name": "Abeokuta",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "593100",
    "admin1_code": "16"
  },
  {
    "geoname_id": "2754394",
    "name": "Hengelo",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "102773",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2759706",
    "name": "Apeldoorn",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "136670",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1702540",
    "name": "Malolos",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "198748",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1162456",
    "name": "Wazirabad",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "102444",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1170395",
    "name": "Mingora",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "279914",
    "admin1_code": "03"
  },
  {
    "geoname_id": "5145215",
    "name": "Yonkers",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "201116",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5324200",
    "name": "Antioch",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110542",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5339840",
    "name": "Costa Mesa",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "113204",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5347335",
    "name": "Fairfield",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "112970",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5357527",
    "name": "Hollywood",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "167664",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5378771",
    "name": "Oceanside",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "175691",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5380698",
    "name": "Palmdale",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "158351",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5441492",
    "name": "Thornton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "133451",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "5577592",
    "name": "Greeley",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "100883",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "5809844",
    "name": "Seattle",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "737015",
    "admin1_code": "WA"
  },
  {
    "geoname_id": "5811696",
    "name": "Spokane",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "213272",
    "admin1_code": "WA"
  },
  {
    "geoname_id": "3648522",
    "name": "Barquisimeto",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "1240714",
    "admin1_code": "13"
  },
  {
    "geoname_id": "940316",
    "name": "Westonaria",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "156831",
    "admin1_code": "06"
  },
  {
    "geoname_id": "940909",
    "name": "Welkom",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "431944",
    "admin1_code": "03"
  },
  {
    "geoname_id": "958724",
    "name": "Rustenburg",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "124064",
    "admin1_code": "10"
  },
  {
    "geoname_id": "963516",
    "name": "Queenstown",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "105309",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1023441",
    "name": "Alberton",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "121536",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1105777",
    "name": "Centurion",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "236580",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1571951",
    "name": "Ninh Hòa",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "240750",
    "admin1_code": "54"
  },
  {
    "geoname_id": "3529982",
    "name": "Cuautla",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "157336",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1028079",
    "name": "Ressano Garcia",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "110000",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2320831",
    "name": "Ugep",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "200276",
    "admin1_code": "22"
  },
  {
    "geoname_id": "2322794",
    "name": "Suleja",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "162135",
    "admin1_code": "31"
  },
  {
    "geoname_id": "2326899",
    "name": "Okrika",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "133271",
    "admin1_code": "50"
  },
  {
    "geoname_id": "2332515",
    "name": "Lafia",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "127236",
    "admin1_code": "56"
  },
  {
    "geoname_id": "2336589",
    "name": "Jalingo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "117757",
    "admin1_code": "43"
  },
  {
    "geoname_id": "2338385",
    "name": "Ijero-Ekiti",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "167632",
    "admin1_code": "54"
  },
  {
    "geoname_id": "1850910",
    "name": "Takatsuki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "354468",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1855612",
    "name": "Nara-shi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "367353",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1860735",
    "name": "Kakamigahara",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "132241",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1862033",
    "name": "Ibaraki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "280562",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1862462",
    "name": "Hiratsuka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "257316",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1863917",
    "name": "Fukuyama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "468812",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1894616",
    "name": "Okinawa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "125483",
    "admin1_code": "47"
  },
  {
    "geoname_id": "2113164",
    "name": "Abiko",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "131771",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1843137",
    "name": "Gangneung",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "180611",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1897118",
    "name": "Hwado",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "106358",
    "admin1_code": "13"
  },
  {
    "geoname_id": "610611",
    "name": "Aktobe",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "500757",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2216885",
    "name": "Zawiya",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "186123",
    "admin1_code": "68"
  },
  {
    "geoname_id": "2537406",
    "name": "Settat",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "119082",
    "admin1_code": "06"
  },
  {
    "geoname_id": "618426",
    "name": "Chisinau",
    "country_code": "MD",
    "cou_name_en": "Moldova, Republic of",
    "population": "635994",
    "admin1_code": "57"
  },
  {
    "geoname_id": "1328421",
    "name": "Pathein",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "237089",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1254348",
    "name": "Tiruppur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "963173",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1257845",
    "name": "Saugor",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "247333",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1263012",
    "name": "Miriālgūda",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "101234",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1265873",
    "name": "Kozhikode",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "550440",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1268773",
    "name": "Jūnāgadh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "184447",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1269834",
    "name": "Ichalkaranji",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "274383",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1269939",
    "name": "Narmadapuram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "109358",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1275198",
    "name": "Brahmapur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "324726",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1275738",
    "name": "Bīdar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "204071",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1277939",
    "name": "Bagaha",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "103855",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1278314",
    "name": "Āsansol",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "504271",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1430991",
    "name": "Soyībug",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "104000",
    "admin1_code": "12"
  },
  {
    "geoname_id": "119115",
    "name": "Qūchān",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "111752",
    "admin1_code": "42"
  },
  {
    "geoname_id": "127319",
    "name": "Khorramshahr",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "330606",
    "admin1_code": "15"
  },
  {
    "geoname_id": "128234",
    "name": "Kerman",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "577514",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2643123",
    "name": "Manchester",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "395515",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2646458",
    "name": "Huddersfield",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "149017",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "255683",
    "name": "Pátra",
    "country_code": "GR",
    "cou_name_en": "Greece",
    "population": "168034",
    "admin1_code": "ESYE23"
  },
  {
    "geoname_id": "1626916",
    "name": "Singkawang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "235064",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1630341",
    "name": "Purwakarta",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "179233",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1635283",
    "name": "Metro",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "168575",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3591062",
    "name": "Puerto Barrios",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "100593",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3592519",
    "name": "Mixco",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "465773",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3598529",
    "name": "Chinautla",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "104972",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1279403",
    "name": "Abohar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "130603",
    "admin1_code": "23"
  },
  {
    "geoname_id": "2636841",
    "name": "Stoke-on-Trent",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "258366",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "3680450",
    "name": "Itagüí",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "281853",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3557846",
    "name": "Guanabacoa",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "112964",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2805753",
    "name": "Wuppertal",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "360797",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2807363",
    "name": "Witten",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "101247",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3447399",
    "name": "Sorocaba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "687357",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3456290",
    "name": "Nilópolis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "147281",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3459712",
    "name": "Joinville",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "461304",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3460845",
    "name": "Itajaí",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "155716",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3461408",
    "name": "Ilhéus",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "155499",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3461859",
    "name": "Guaratinguetá",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "105880",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3464688",
    "name": "Divinópolis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "193832",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3465059",
    "name": "Cubatão",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "118410",
    "admin1_code": "27"
  },
  {
    "geoname_id": "6317953",
    "name": "Pinhais",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "117000",
    "admin1_code": "18"
  },
  {
    "geoname_id": "207570",
    "name": "Mwene-Ditu",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "189177",
    "admin1_code": "21"
  },
  {
    "geoname_id": "2255414",
    "name": "Pointe-Noire",
    "country_code": "CG",
    "cou_name_en": "Congo",
    "population": "659084",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2260535",
    "name": "Brazzaville",
    "country_code": "CG",
    "cou_name_en": "Congo",
    "population": "1284609",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3509382",
    "name": "Concepción de La Vega",
    "country_code": "DO",
    "cou_name_en": "Dominican Republic",
    "population": "102426",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2482572",
    "name": "Saïda",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "127497",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2492913",
    "name": "Jijel",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "148000",
    "admin1_code": "24"
  },
  {
    "geoname_id": "2503661",
    "name": "Bordj el Kiffan",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "123246",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2505854",
    "name": "Bab Ezzouar",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "275630",
    "admin1_code": "01"
  },
  {
    "geoname_id": "362485",
    "name": "Abū Kabīr",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "154466",
    "admin1_code": "14"
  },
  {
    "geoname_id": "2510253",
    "name": "Torrevieja",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "101792",
    "admin1_code": "60"
  },
  {
    "geoname_id": "2519240",
    "name": "Córdoba",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "325708",
    "admin1_code": "51"
  },
  {
    "geoname_id": "6544104",
    "name": "Sants-Montjuïc",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "183120",
    "admin1_code": "56"
  },
  {
    "geoname_id": "6544487",
    "name": "Arganzuela",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "148797",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2855745",
    "name": "Paderborn",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "142161",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1803936",
    "name": "Wuwei",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1010295",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1805680",
    "name": "Jingdezhen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "473561",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1808722",
    "name": "Hefei",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "5050000",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1808963",
    "name": "Handan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1358318",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1814786",
    "name": "Yangchun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "153547",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1815251",
    "name": "Jiangyin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1779515",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2033574",
    "name": "Xuanhua",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "373422",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2034834",
    "name": "Shuangcheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "130710",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2290582",
    "name": "Dabou",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "138083",
    "admin1_code": "82"
  },
  {
    "geoname_id": "3870294",
    "name": "Talca",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "197479",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3892870",
    "name": "Curicó",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "102438",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3893656",
    "name": "Copiapó",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "129280",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1281673",
    "name": "Baoshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "935618",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1786112",
    "name": "Heyuan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "463907",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1786760",
    "name": "Yixing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1285785",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1788492",
    "name": "Xinzhai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "100168",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1789496",
    "name": "Xigang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "112061",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1790251",
    "name": "Xiaogang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "127076",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1790840",
    "name": "Wuzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "761948",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1791748",
    "name": "Wanxian",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "859662",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1797551",
    "name": "Qinzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1296300",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1135689",
    "name": "Kunduz",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "161902",
    "admin1_code": "24"
  },
  {
    "geoname_id": "3435261",
    "name": "Concordia",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "145210",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3837213",
    "name": "San Juan",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "109123",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3837702",
    "name": "Catamarca",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "159139",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3860259",
    "name": "Córdoba",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "1317298",
    "admin1_code": "05"
  },
  {
    "geoname_id": "11903636",
    "name": "Donaustadt",
    "country_code": "AT",
    "cou_name_en": "Austria",
    "population": "187007",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2146268",
    "name": "Toowoomba",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "140303",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2163355",
    "name": "Hobart",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "247086",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1336140",
    "name": "Jessore",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "243987",
    "admin1_code": "82"
  },
  {
    "geoname_id": "9827976",
    "name": "Paltan",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "184492",
    "admin1_code": "81"
  },
  {
    "geoname_id": "3143244",
    "name": "Oslo",
    "country_code": "NO",
    "cou_name_en": "Norway",
    "population": "580000",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1283582",
    "name": "Biratnagar",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "244750",
    "admin1_code": "1"
  },
  {
    "geoname_id": "6941099",
    "name": "Nepalgunj",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "166258",
    "admin1_code": "5"
  },
  {
    "geoname_id": "286282",
    "name": "Sohar",
    "country_code": "OM",
    "cou_name_en": "Oman",
    "population": "108274",
    "admin1_code": "11"
  },
  {
    "geoname_id": "287830",
    "name": "‘Ibrī",
    "country_code": "OM",
    "cou_name_en": "Oman",
    "population": "163473",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1680197",
    "name": "Urdaneta",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "101037",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1687801",
    "name": "Santiago",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "108414",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1687894",
    "name": "Santa Rosa",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "216650",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1699054",
    "name": "Muricay",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "132094",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1717641",
    "name": "Cavite City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "115932",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1720151",
    "name": "Caloocan City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "1500000",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1721906",
    "name": "Cabanatuan City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "327325",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1164909",
    "name": "Sialkot",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "477396",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1171305",
    "name": "Malir Cantonment",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "300000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1174625",
    "name": "Kasur",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "290643",
    "admin1_code": "04"
  },
  {
    "geoname_id": "776029",
    "name": "Bielany",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "134854",
    "admin1_code": "78"
  },
  {
    "geoname_id": "3081368",
    "name": "Wrocław",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "634893",
    "admin1_code": "72"
  },
  {
    "geoname_id": "3081741",
    "name": "Włocławek",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "120339",
    "admin1_code": "73"
  },
  {
    "geoname_id": "3083829",
    "name": "Szczecin",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "407811",
    "admin1_code": "87"
  },
  {
    "geoname_id": "3101950",
    "name": "Bytom",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "189186",
    "admin1_code": "83"
  },
  {
    "geoname_id": "667873",
    "name": "Satu Mare",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "112490",
    "admin1_code": "32"
  },
  {
    "geoname_id": "461740",
    "name": "Zyuzino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "121000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "462745",
    "name": "Zhulebino",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "150000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "472231",
    "name": "Volzhsky",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "323293",
    "admin1_code": "84"
  },
  {
    "geoname_id": "500096",
    "name": "Ryazan’",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "538962",
    "admin1_code": "62"
  },
  {
    "geoname_id": "550478",
    "name": "Khasavyurt",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "126829",
    "admin1_code": "17"
  },
  {
    "geoname_id": "553287",
    "name": "Kamyshin",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "128626",
    "admin1_code": "84"
  },
  {
    "geoname_id": "554234",
    "name": "Kaliningrad",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "475056",
    "admin1_code": "23"
  },
  {
    "geoname_id": "563708",
    "name": "Dzerzhinsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "233126",
    "admin1_code": "51"
  },
  {
    "geoname_id": "1497337",
    "name": "Norilsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "140800",
    "admin1_code": "91"
  },
  {
    "geoname_id": "2056752",
    "name": "Khabarovsk Vtoroy",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "578303",
    "admin1_code": "30"
  },
  {
    "geoname_id": "109101",
    "name": "Al Mubarraz",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "290802",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3583361",
    "name": "San Salvador",
    "country_code": "SV",
    "cou_name_en": "El Salvador",
    "population": "525990",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1220747",
    "name": "Bokhtar",
    "country_code": "TJ",
    "cou_name_en": "Tajikistan",
    "population": "110800",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3617763",
    "name": "Managua",
    "country_code": "NI",
    "cou_name_en": "Nicaragua",
    "population": "973087",
    "admin1_code": "10"
  },
  {
    "geoname_id": "325330",
    "name": "Adıyaman",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "267131",
    "admin1_code": "02"
  },
  {
    "geoname_id": "747014",
    "name": "Gebze",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "281436",
    "admin1_code": "41"
  },
  {
    "geoname_id": "877401",
    "name": "Songea",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "126449",
    "admin1_code": "14"
  },
  {
    "geoname_id": "484907",
    "name": "Taganrog",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "279056",
    "admin1_code": "61"
  },
  {
    "geoname_id": "2340451",
    "name": "Gombe",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "250258",
    "admin1_code": "55"
  },
  {
    "geoname_id": "1283613",
    "name": "Bharatpur",
    "country_code": "NP",
    "cou_name_en": "Nepal",
    "population": "369377",
    "admin1_code": "3"
  },
  {
    "geoname_id": "286621",
    "name": "Şalālah",
    "country_code": "OM",
    "cou_name_en": "Oman",
    "population": "163140",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3696417",
    "name": "Huánuco",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "196627",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1682812",
    "name": "Tarlac City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "183930",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1697846",
    "name": "Navotas",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "249463",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1706090",
    "name": "Lipa City",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "212287",
    "admin1_code": "40"
  },
  {
    "geoname_id": "700051",
    "name": "Nikopol",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "105160",
    "admin1_code": "04"
  },
  {
    "geoname_id": "701404",
    "name": "Melitopol",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "148851",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1721168",
    "name": "Cadiz",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "129053",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1722186",
    "name": "Butuan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "309709",
    "admin1_code": "13"
  },
  {
    "geoname_id": "4148757",
    "name": "Brandon",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "103483",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4151909",
    "name": "Coral Springs",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "129485",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "7090987",
    "name": "Bagong Silangan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "106886",
    "admin1_code": "NCR"
  },
  {
    "geoname_id": "1166993",
    "name": "Rawalpindi",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "1743101",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1169027",
    "name": "New Mirpur",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "124352",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1173687",
    "name": "Khushāb",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "102793",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1174872",
    "name": "Karachi",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "11624219",
    "admin1_code": "05"
  },
  {
    "geoname_id": "4619947",
    "name": "East Chattanooga",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "154024",
    "admin1_code": "TN"
  },
  {
    "geoname_id": "3981609",
    "name": "Tijuana",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "1922523",
    "admin1_code": "02"
  },
  {
    "geoname_id": "5349755",
    "name": "Fontana",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "208393",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5503766",
    "name": "Enterprise",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "108481",
    "admin1_code": "NV"
  },
  {
    "geoname_id": "1732721",
    "name": "Kampung Pasir Gudang Baru",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "145639",
    "admin1_code": "01"
  },
  {
    "geoname_id": "5786882",
    "name": "Bellevue",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "139820",
    "admin1_code": "WA"
  },
  {
    "geoname_id": "5856195",
    "name": "Honolulu",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "371657",
    "admin1_code": "HI"
  },
  {
    "geoname_id": "2335953",
    "name": "Jos",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "816824",
    "admin1_code": "49"
  },
  {
    "geoname_id": "502971",
    "name": "Ramenki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "130000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "516264",
    "name": "Ochakovo-Matveyevskoye",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "114000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "3645528",
    "name": "Ciudad Guayana",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "950000",
    "admin1_code": "06"
  },
  {
    "geoname_id": "3648559",
    "name": "Barcelona",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "815141",
    "admin1_code": "02"
  },
  {
    "geoname_id": "566199",
    "name": "Dimitrovgrad",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "132226",
    "admin1_code": "81"
  },
  {
    "geoname_id": "569223",
    "name": "Cherepovets",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "315738",
    "admin1_code": "85"
  },
  {
    "geoname_id": "5045360",
    "name": "Saint Paul",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "285068",
    "admin1_code": "MN"
  },
  {
    "geoname_id": "1500665",
    "name": "Leninsk-Kuznetsky",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "109023",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2051523",
    "name": "Bratsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "256600",
    "admin1_code": "20"
  },
  {
    "geoname_id": "202905",
    "name": "Gisenyi",
    "country_code": "RW",
    "cou_name_en": "Rwanda",
    "population": "136830",
    "admin1_code": "14"
  },
  {
    "geoname_id": "104515",
    "name": "Mecca",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "1578722",
    "admin1_code": "14"
  },
  {
    "geoname_id": "371760",
    "name": "Kosti",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "345068",
    "admin1_code": "41"
  },
  {
    "geoname_id": "5139568",
    "name": "Staten Island",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "468730",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "2409306",
    "name": "Freetown",
    "country_code": "SL",
    "cou_name_en": "Sierra Leone",
    "population": "802639",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3096472",
    "name": "Katowice",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "317316",
    "admin1_code": "83"
  },
  {
    "geoname_id": "281124",
    "name": "Khān Yūnis",
    "country_code": "PS",
    "cou_name_en": "West Bank and Gaza Strip",
    "population": "173183",
    "admin1_code": "GZ"
  },
  {
    "geoname_id": "12166273",
    "name": "Quận Đức Thịnh",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "132000",
    "admin1_code": "09"
  },
  {
    "geoname_id": "79415",
    "name": "Al Ḩudaydah",
    "country_code": "YE",
    "cou_name_en": "Yemen",
    "population": "617871",
    "admin1_code": "08"
  },
  {
    "geoname_id": "953781",
    "name": "Soweto",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "1695047",
    "admin1_code": "06"
  },
  {
    "geoname_id": "964315",
    "name": "Mokopane",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "101090",
    "admin1_code": "09"
  },
  {
    "geoname_id": "971534",
    "name": "Nelspruit",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "110159",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1002145",
    "name": "George",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "157394",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1020098",
    "name": "Benoni",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "605344",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1085510",
    "name": "Epworth",
    "country_code": "ZW",
    "cou_name_en": "Zimbabwe",
    "population": "123250",
    "admin1_code": "10"
  },
  {
    "geoname_id": "4724129",
    "name": "Round Rock",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "115997",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4738214",
    "name": "Tyler",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "103700",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "1565157",
    "name": "Thới Lai",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "109684",
    "admin1_code": "87"
  },
  {
    "geoname_id": "1566083",
    "name": "Ho Chi Minh City",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "8993082",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1582173",
    "name": "Đưc Trọng",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "161232",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1582886",
    "name": "Đồng Hới",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "169000",
    "admin1_code": "62"
  },
  {
    "geoname_id": "1586896",
    "name": "Buôn Ma Thuột",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "146975",
    "admin1_code": "88"
  },
  {
    "geoname_id": "670474",
    "name": "Ploieşti",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "228851",
    "admin1_code": "30"
  },
  {
    "geoname_id": "764484",
    "name": "Mokotów",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "217683",
    "admin1_code": "78"
  },
  {
    "geoname_id": "463829",
    "name": "Zelenograd",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "215727",
    "admin1_code": "48"
  },
  {
    "geoname_id": "472459",
    "name": "Vologda",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "312420",
    "admin1_code": "85"
  },
  {
    "geoname_id": "479561",
    "name": "Ufa",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1120547",
    "admin1_code": "08"
  },
  {
    "geoname_id": "601734",
    "name": "Daşoguz",
    "country_code": "TM",
    "cou_name_en": "Turkmenistan",
    "population": "166500",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2472706",
    "name": "Bizerte",
    "country_code": "TN",
    "cou_name_en": "Tunisia",
    "population": "115268",
    "admin1_code": "18"
  },
  {
    "geoname_id": "323786",
    "name": "Ankara",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "3517182",
    "admin1_code": "68"
  },
  {
    "geoname_id": "741385",
    "name": "Mustafakemalpaşa",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "101412",
    "admin1_code": "16"
  },
  {
    "geoname_id": "747340",
    "name": "Esenler",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "520235",
    "admin1_code": "34"
  },
  {
    "geoname_id": "6955677",
    "name": "Çankaya",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "792189",
    "admin1_code": "68"
  },
  {
    "geoname_id": "2339354",
    "name": "Ibadan",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "3649000",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1133616",
    "name": "Mazār-e Sharīf",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "523300",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3430863",
    "name": "Mar del Plata",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "593337",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3838233",
    "name": "Salta",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "520683",
    "admin1_code": "17"
  },
  {
    "geoname_id": "2172797",
    "name": "Cairns",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "153075",
    "admin1_code": "04"
  },
  {
    "geoname_id": "712451",
    "name": "Berdyansk",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "106311",
    "admin1_code": "26"
  },
  {
    "geoname_id": "4161438",
    "name": "Lakeland",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "104401",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4391812",
    "name": "Independence",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "117255",
    "admin1_code": "MO"
  },
  {
    "geoname_id": "4589387",
    "name": "North Charleston",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "108304",
    "admin1_code": "SC"
  },
  {
    "geoname_id": "4756955",
    "name": "East Hampton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "147993",
    "admin1_code": "VA"
  },
  {
    "geoname_id": "4839366",
    "name": "New Haven",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "130322",
    "admin1_code": "CT"
  },
  {
    "geoname_id": "4853423",
    "name": "Davenport",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "102582",
    "admin1_code": "IA"
  },
  {
    "geoname_id": "4920423",
    "name": "Fort Wayne",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "260326",
    "admin1_code": "IN"
  },
  {
    "geoname_id": "5261457",
    "name": "Madison",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "248951",
    "admin1_code": "WI"
  },
  {
    "geoname_id": "5316428",
    "name": "Surprise",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "143148",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5350937",
    "name": "Fresno",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "520052",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5352423",
    "name": "Glendale",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "201020",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5359488",
    "name": "Inglewood",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "111666",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5403022",
    "name": "Torrance",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "143592",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5406567",
    "name": "Visalia",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "130104",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5417598",
    "name": "Colorado Springs",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "456568",
    "admin1_code": "CO"
  },
  {
    "geoname_id": "5780993",
    "name": "Salt Lake City",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "192672",
    "admin1_code": "UT"
  },
  {
    "geoname_id": "5814616",
    "name": "Vancouver",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "172860",
    "admin1_code": "WA"
  },
  {
    "geoname_id": "6332428",
    "name": "East Harlem",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "115921",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "1216187",
    "name": "Shahrisabz",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "142700",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3629706",
    "name": "Puerto Cabello",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "174000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3645532",
    "name": "Ciudad Bolívar",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "412619",
    "admin1_code": "06"
  },
  {
    "geoname_id": "4930956",
    "name": "Boston",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "675647",
    "admin1_code": "MA"
  },
  {
    "geoname_id": "5115843",
    "name": "East Flatbush",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "178464",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "1016670",
    "name": "Botshabelo",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "309714",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3363094",
    "name": "Paarl",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "190000",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1586350",
    "name": "Cam Ranh",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "146771",
    "admin1_code": "54"
  },
  {
    "geoname_id": "1586360",
    "name": "Cẩm Phả",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "135477",
    "admin1_code": "30"
  },
  {
    "geoname_id": "7304020",
    "name": "Fenghuang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "370000",
    "admin1_code": "11"
  },
  {
    "geoname_id": "8533133",
    "name": "Liupanshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1320825",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3674453",
    "name": "Montería",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "490935",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3553478",
    "name": "Havana",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "2163824",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3564178",
    "name": "Ciego de Ávila",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "142027",
    "admin1_code": "07"
  },
  {
    "geoname_id": "385038",
    "name": "Ar Rifā‘",
    "country_code": "BH",
    "cou_name_en": "Bahrain",
    "population": "195606",
    "admin1_code": "17"
  },
  {
    "geoname_id": "425378",
    "name": "Bujumbura",
    "country_code": "BI",
    "cou_name_en": "Burundi",
    "population": "1000000",
    "admin1_code": "24"
  },
  {
    "geoname_id": "3388368",
    "name": "São Luís",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "917237",
    "admin1_code": "13"
  },
  {
    "geoname_id": "3444914",
    "name": "Vitória da Conquista",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "253137",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3445451",
    "name": "Várzea Grande",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "249752",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3449319",
    "name": "São Carlos",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "205035",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3452640",
    "name": "Porto Seguro",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "123173",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3457000",
    "name": "Mogi Guaçu",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "128865",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3462315",
    "name": "Governador Valadares",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "250878",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3463011",
    "name": "Franca",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "358539",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3465644",
    "name": "Conselheiro Lafaiete",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "111596",
    "admin1_code": "15"
  },
  {
    "geoname_id": "625625",
    "name": "Maladziečna",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "101300",
    "admin1_code": "05"
  },
  {
    "geoname_id": "630376",
    "name": "Barysaw",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "144945",
    "admin1_code": "05"
  },
  {
    "geoname_id": "5935277",
    "name": "Dartmouth",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "101343",
    "admin1_code": "07"
  },
  {
    "geoname_id": "6325494",
    "name": "Québec",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "531902",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2258261",
    "name": "Dolisie",
    "country_code": "CG",
    "cou_name_en": "Congo",
    "population": "103894",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2476897",
    "name": "Tiaret",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "178915",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2481007",
    "name": "Sidi Bel Abbès",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "191769",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3652350",
    "name": "Riobamba",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "264048",
    "admin1_code": "06"
  },
  {
    "geoname_id": "588409",
    "name": "Tallinn",
    "country_code": "EE",
    "cou_name_en": "Estonia",
    "population": "394024",
    "admin1_code": "01"
  },
  {
    "geoname_id": "353183",
    "name": "Maghāghah",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "118223",
    "admin1_code": "10"
  },
  {
    "geoname_id": "7910079",
    "name": "Sodo",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "194977",
    "admin1_code": "54"
  },
  {
    "geoname_id": "2281606",
    "name": "Sinfra",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "245226",
    "admin1_code": "92"
  },
  {
    "geoname_id": "2595323",
    "name": "Marcory",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "214061",
    "admin1_code": "93"
  },
  {
    "geoname_id": "3877949",
    "name": "Osorno",
    "country_code": "CL",
    "cou_name_en": "Chile",
    "population": "135773",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1529641",
    "name": "Aral",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "260000",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1784820",
    "name": "Xinghua",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "105918",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1787227",
    "name": "Yangzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1584237",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1787858",
    "name": "Shangrao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1116486",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1788450",
    "name": "Xinzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "544683",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1788927",
    "name": "Xingtai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "798770",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1790587",
    "name": "Xiangyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1294733",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1795842",
    "name": "Shaping",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "107589",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1797318",
    "name": "Qujing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1408500",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1798821",
    "name": "Pingdu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "542234",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1799869",
    "name": "Nanning",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3839800",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1806988",
    "name": "Huayin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "242488",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1807681",
    "name": "Huainan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1666826",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1813253",
    "name": "Lijiang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "211151",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1815669",
    "name": "Changle",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "259161",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1816336",
    "name": "Binzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "682717",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1922014",
    "name": "Wuyishan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "137133",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1927639",
    "name": "Yueyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "991465",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2035610",
    "name": "Nehe",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "108253",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2035644",
    "name": "Nanpiao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "157044",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2037346",
    "name": "Fuxin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "689050",
    "admin1_code": "19"
  },
  {
    "geoname_id": "584821",
    "name": "Tovuz",
    "country_code": "AZ",
    "cou_name_en": "Azerbaijan",
    "population": "177200",
    "admin1_code": "58"
  },
  {
    "geoname_id": "1185241",
    "name": "Dhaka",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "10356500",
    "admin1_code": "81"
  },
  {
    "geoname_id": "1185263",
    "name": "Bhairab Bāzār",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "105457",
    "admin1_code": "81"
  },
  {
    "geoname_id": "1203891",
    "name": "Dinājpur",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "206234",
    "admin1_code": "87"
  },
  {
    "geoname_id": "1336134",
    "name": "Cox’s Bāzār",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "253788",
    "admin1_code": "84"
  },
  {
    "geoname_id": "7483743",
    "name": "Puthia",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "159406",
    "admin1_code": "83"
  },
  {
    "geoname_id": "3181554",
    "name": "Brescia",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "200423",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1848254",
    "name": "Yono",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "102364",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1850311",
    "name": "Tochigi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "159056",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1859730",
    "name": "Kawaguchi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "607373",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1838716",
    "name": "Bucheon-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "850731",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1843702",
    "name": "Icheon-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "196230",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1884138",
    "name": "Yeosu",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "295538",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1230089",
    "name": "Pita Kotte",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "118179",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1253894",
    "name": "Ulhasnagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "516584",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1256728",
    "name": "Shāhjānpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "320434",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1258109",
    "name": "Robertsonpet",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "135218",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1267031",
    "name": "Khandwa",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "182841",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1267076",
    "name": "Khammam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "170503",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1267480",
    "name": "Katihar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "192555",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1268257",
    "name": "Kāmārhāti",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "332965",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1269135",
    "name": "Jaunpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "169572",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1269934",
    "name": "Hosūr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "229528",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1270164",
    "name": "Hazāribāgh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "153595",
    "admin1_code": "38"
  },
  {
    "geoname_id": "1270576",
    "name": "Gyānpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "200000",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1271951",
    "name": "Faridabad",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1220229",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1273581",
    "name": "Dinapore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "152940",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1275004",
    "name": "Kolkata",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "4631392",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1279064",
    "name": "Alandur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "153775",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1279186",
    "name": "Aizawl",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "265331",
    "admin1_code": "31"
  },
  {
    "geoname_id": "7302856",
    "name": "Serilingampalle",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "150525",
    "admin1_code": "40"
  },
  {
    "geoname_id": "94824",
    "name": "Karbala",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "1218732",
    "admin1_code": "12"
  },
  {
    "geoname_id": "111822",
    "name": "Yazd",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "477905",
    "admin1_code": "40"
  },
  {
    "geoname_id": "141679",
    "name": "Bandar-e Anzalī",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "110826",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3173435",
    "name": "Milan",
    "country_code": "IT",
    "cou_name_en": "Italy",
    "population": "1371498",
    "admin1_code": "09"
  },
  {
    "geoname_id": "264371",
    "name": "Athens",
    "country_code": "GR",
    "cou_name_en": "Greece",
    "population": "664046",
    "admin1_code": "ESYE31"
  },
  {
    "geoname_id": "1215355",
    "name": "Binjai",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "279302",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1642911",
    "name": "Jakarta",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "8540121",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1645528",
    "name": "Denpasar",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "725314",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1646494",
    "name": "Cileungsir",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "288347",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1650319",
    "name": "Bangil",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "120551",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1985663",
    "name": "Cikupa",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "174041",
    "admin1_code": "30"
  },
  {
    "geoname_id": "6295587",
    "name": "Batam",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "1164352",
    "admin1_code": "37"
  },
  {
    "geoname_id": "2219905",
    "name": "Al Khums",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "201943",
    "admin1_code": "82"
  },
  {
    "geoname_id": "2530335",
    "name": "Tangier",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "688356",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1308465",
    "name": "Mawlamyine",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "438861",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1319364",
    "name": "Kēng Tung",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "171620",
    "admin1_code": "11"
  },
  {
    "geoname_id": "6611854",
    "name": "Nay Pyi Taw",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "925000",
    "admin1_code": "18"
  },
  {
    "geoname_id": "11810635",
    "name": "Kyain Seikgyi Township",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "246065",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1282027",
    "name": "Male",
    "country_code": "MV",
    "cou_name_en": "Maldives",
    "population": "103693",
    "admin1_code": "38"
  },
  {
    "geoname_id": "10942359",
    "name": "Baoji",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1437802",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3666645",
    "name": "Tuluá",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "221684",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3670730",
    "name": "Rionegro",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "128153",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3682426",
    "name": "Florencia",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "168346",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3689560",
    "name": "Armenia",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "304314",
    "admin1_code": "23"
  },
  {
    "geoname_id": "2831580",
    "name": "Solingen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "164359",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2990969",
    "name": "Nantes",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "318808",
    "admin1_code": "52"
  },
  {
    "geoname_id": "2633709",
    "name": "Woking",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "103932",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "3907584",
    "name": "Potosí",
    "country_code": "BO",
    "cou_name_en": "Bolivia",
    "population": "141251",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3909234",
    "name": "Oruro",
    "country_code": "BO",
    "cou_name_en": "Bolivia",
    "population": "208684",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3447259",
    "name": "Sumaré",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "286211",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3451329",
    "name": "Ribeirão Pires",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "111888",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3452073",
    "name": "Queimados",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "135741",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3460535",
    "name": "Itu",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "137586",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3460644",
    "name": "Itaquaquecetuba",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "336679",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3460718",
    "name": "Itapevi",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "240961",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3465927",
    "name": "Colombo",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "246540",
    "admin1_code": "18"
  },
  {
    "geoname_id": "3471758",
    "name": "Araras",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "107463",
    "admin1_code": "27"
  },
  {
    "geoname_id": "6317464",
    "name": "Lauro de Freitas",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "141280",
    "admin1_code": "05"
  },
  {
    "geoname_id": "6058560",
    "name": "London",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "346765",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6059891",
    "name": "Longueuil",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "229330",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2940132",
    "name": "Chemnitz",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "247220",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2484620",
    "name": "Oum el Bouaghi",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "100821",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2505530",
    "name": "Béchar",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "143382",
    "admin1_code": "38"
  },
  {
    "geoname_id": "3651297",
    "name": "Santo Domingo de los Colorados",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "458580",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3654870",
    "name": "Latacunga",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "205624",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3658666",
    "name": "Cuenca",
    "country_code": "EC",
    "cou_name_en": "Ecuador",
    "population": "636996",
    "admin1_code": "02"
  },
  {
    "geoname_id": "353492",
    "name": "Kirdāsah",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "137588",
    "admin1_code": "08"
  },
  {
    "geoname_id": "356989",
    "name": "Fāqūs",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "116945",
    "admin1_code": "14"
  },
  {
    "geoname_id": "358840",
    "name": "Bilbays",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "185237",
    "admin1_code": "14"
  },
  {
    "geoname_id": "12451089",
    "name": "Al-'Ubūr",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "138987",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3121960",
    "name": "Fuenlabrada",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "197836",
    "admin1_code": "29"
  },
  {
    "geoname_id": "6615440",
    "name": "Delicias",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "110520",
    "admin1_code": "52"
  },
  {
    "geoname_id": "333373",
    "name": "Kombolcha",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "125654",
    "admin1_code": "46"
  },
  {
    "geoname_id": "339708",
    "name": "Debre Mark’os",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "133810",
    "admin1_code": "46"
  },
  {
    "geoname_id": "344979",
    "name": "Addis Ababa",
    "country_code": "ET",
    "cou_name_en": "Ethiopia",
    "population": "2757729",
    "admin1_code": "44"
  },
  {
    "geoname_id": "2290412",
    "name": "Daoukro",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "101136",
    "admin1_code": "81"
  },
  {
    "geoname_id": "2293538",
    "name": "Abidjan",
    "country_code": "CI",
    "cou_name_en": "Côte d'Ivoire",
    "population": "6321017",
    "admin1_code": "93"
  },
  {
    "geoname_id": "1280957",
    "name": "Jiayuguan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "231853",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1786217",
    "name": "Yongzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1020715",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1789273",
    "name": "Sanshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "153714",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1790442",
    "name": "Xiangcheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "121959",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1797353",
    "name": "Quanzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1469157",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1797632",
    "name": "Yizhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "155872",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1800146",
    "name": "Nanchong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1858875",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1801582",
    "name": "Macheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "126366",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1802206",
    "name": "Lu’an",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1644344",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1805953",
    "name": "Jiaxing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1180000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1807689",
    "name": "Huaihua",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "552622",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1809077",
    "name": "Haikou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "112644",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1810845",
    "name": "Fuyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1768947",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1815463",
    "name": "Changzhi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "699514",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1817993",
    "name": "Anqing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "804493",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1919014",
    "name": "Lianghu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "155000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2033370",
    "name": "Yingkou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "591159",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2035513",
    "name": "Panshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "625040",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2036403",
    "name": "Jiupu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "123843",
    "admin1_code": "19"
  },
  {
    "geoname_id": "2923544",
    "name": "Fürth",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "112025",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2929670",
    "name": "Erfurt",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "213692",
    "admin1_code": "15"
  },
  {
    "geoname_id": "2652221",
    "name": "Coventry",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "345324",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2653822",
    "name": "Cardiff",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "447287",
    "admin1_code": "WLS"
  },
  {
    "geoname_id": "2655613",
    "name": "Birkenhead",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "325264",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2298330",
    "name": "Medina Estates",
    "country_code": "GH",
    "cou_name_en": "Ghana",
    "population": "101207",
    "admin1_code": "01"
  },
  {
    "geoname_id": "2803201",
    "name": "Anderlecht",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "160553",
    "admin1_code": "BRU"
  },
  {
    "geoname_id": "542420",
    "name": "Krasnodar",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "899541",
    "admin1_code": "38"
  },
  {
    "geoname_id": "548408",
    "name": "Kirov",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "507155",
    "admin1_code": "33"
  },
  {
    "geoname_id": "579464",
    "name": "Balashikha",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "150103",
    "admin1_code": "47"
  },
  {
    "geoname_id": "2025339",
    "name": "Chita",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "349005",
    "admin1_code": "93"
  },
  {
    "geoname_id": "63400",
    "name": "Cabudwaaq",
    "country_code": "SO",
    "cou_name_en": "Somalia",
    "population": "120000",
    "admin1_code": "05"
  },
  {
    "geoname_id": "163345",
    "name": "Ţarţūs",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "458327",
    "admin1_code": "14"
  },
  {
    "geoname_id": "298299",
    "name": "Uşak",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "369433",
    "admin1_code": "64"
  },
  {
    "geoname_id": "299817",
    "name": "Tarsus",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "346715",
    "admin1_code": "32"
  },
  {
    "geoname_id": "738377",
    "name": "Umraniye",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "573265",
    "admin1_code": "34"
  },
  {
    "geoname_id": "740264",
    "name": "Samsun",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "394050",
    "admin1_code": "55"
  },
  {
    "geoname_id": "740483",
    "name": "Rize",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "119828",
    "admin1_code": "53"
  },
  {
    "geoname_id": "1671566",
    "name": "Nantou",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "105682",
    "admin1_code": "04"
  },
  {
    "geoname_id": "149658",
    "name": "Tabora",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "145292",
    "admin1_code": "17"
  },
  {
    "geoname_id": "150006",
    "name": "Shinyanga",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "107362",
    "admin1_code": "15"
  },
  {
    "geoname_id": "4984247",
    "name": "Ann Arbor",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "117070",
    "admin1_code": "MI"
  },
  {
    "geoname_id": "5101798",
    "name": "Newark",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "281944",
    "admin1_code": "NJ"
  },
  {
    "geoname_id": "5113779",
    "name": "Corona",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "109698",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "5224151",
    "name": "Providence",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "190934",
    "admin1_code": "RI"
  },
  {
    "geoname_id": "5317058",
    "name": "Tempe",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "175826",
    "admin1_code": "AZ"
  },
  {
    "geoname_id": "5374732",
    "name": "Moreno Valley",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "204198",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5402405",
    "name": "Thousand Oaks",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "129339",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "3632998",
    "name": "Maracay",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "1754256",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3646190",
    "name": "Catia La Mar",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "106822",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3649833",
    "name": "Acarigua",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "188278",
    "admin1_code": "18"
  },
  {
    "geoname_id": "700569",
    "name": "Mykolayiv",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "470011",
    "admin1_code": "16"
  },
  {
    "geoname_id": "4509177",
    "name": "Columbus",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "905748",
    "admin1_code": "OH"
  },
  {
    "geoname_id": "4531405",
    "name": "Broken Arrow",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "106563",
    "admin1_code": "OK"
  },
  {
    "geoname_id": "4682464",
    "name": "College Station",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "107889",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4700168",
    "name": "Irving",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "236607",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4744091",
    "name": "Alexandria",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "159467",
    "admin1_code": "VA"
  },
  {
    "geoname_id": "4744709",
    "name": "Arlington",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "207627",
    "admin1_code": "VA"
  },
  {
    "geoname_id": "4762894",
    "name": "Hampton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "136454",
    "admin1_code": "VA"
  },
  {
    "geoname_id": "4903279",
    "name": "Naperville",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "147100",
    "admin1_code": "IL"
  },
  {
    "geoname_id": "943882",
    "name": "Virginia",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "122502",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1005646",
    "name": "eMbalenhle",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "141741",
    "admin1_code": "07"
  },
  {
    "geoname_id": "6693228",
    "name": "Balvanera",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "152198",
    "admin1_code": "07"
  },
  {
    "geoname_id": "587084",
    "name": "Baku",
    "country_code": "AZ",
    "cou_name_en": "Azerbaijan",
    "population": "1116513",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3617723",
    "name": "Masaya",
    "country_code": "NI",
    "cou_name_en": "Nicaragua",
    "population": "130113",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3618030",
    "name": "León",
    "country_code": "NI",
    "cou_name_en": "Nicaragua",
    "population": "144538",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2745641",
    "name": "Venlo",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "101603",
    "admin1_code": "05"
  },
  {
    "geoname_id": "3161732",
    "name": "Bergen",
    "country_code": "NO",
    "cou_name_en": "Norway",
    "population": "285911",
    "admin1_code": "46"
  },
  {
    "geoname_id": "1689395",
    "name": "San Jose del Monte",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "357828",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1689510",
    "name": "San Jose",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "118807",
    "admin1_code": "41"
  },
  {
    "geoname_id": "1692520",
    "name": "Pulong Santa Cruz",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "101914",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1711084",
    "name": "Iligan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "342618",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1723510",
    "name": "Budta",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "1273715",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1175088",
    "name": "Kamoke",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "199531",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3093133",
    "name": "Łódź",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "768755",
    "admin1_code": "74"
  },
  {
    "geoname_id": "2742032",
    "name": "Braga",
    "country_code": "PT",
    "cou_name_en": "Portugal",
    "population": "121394",
    "admin1_code": "04"
  },
  {
    "geoname_id": "675810",
    "name": "Iaşi",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "378954",
    "admin1_code": "23"
  },
  {
    "geoname_id": "683123",
    "name": "Buzău",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "130954",
    "admin1_code": "11"
  },
  {
    "geoname_id": "473972",
    "name": "Veshnyaki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "122000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "1848354",
    "name": "Yokohama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "3761630",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1850147",
    "name": "Tokyo",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "8336599",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1858088",
    "name": "Kurume",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "303579",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1863985",
    "name": "Fukui-shi",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "248707",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1864132",
    "name": "Fujieda",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "145032",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1864134",
    "name": "Fuji",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "245015",
    "admin1_code": "37"
  },
  {
    "geoname_id": "2110683",
    "name": "Tsukuba",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "175589",
    "admin1_code": "14"
  },
  {
    "geoname_id": "186301",
    "name": "Mombasa",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "1208333",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1833747",
    "name": "Ulsan",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "962865",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1833788",
    "name": "Uijeongbu-si",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "479141",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1837706",
    "name": "Sangju",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "101267",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1948005",
    "name": "Gwangmyeong",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "357545",
    "admin1_code": "13"
  },
  {
    "geoname_id": "268743",
    "name": "Ra’s Bayrūt",
    "country_code": "LB",
    "cou_name_en": "Lebanon",
    "population": "1251739",
    "admin1_code": "04"
  },
  {
    "geoname_id": "89113",
    "name": "Ajdabiya",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "416000",
    "admin1_code": "83"
  },
  {
    "geoname_id": "2528910",
    "name": "Tétouan",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "326261",
    "admin1_code": "01"
  },
  {
    "geoname_id": "3516109",
    "name": "Tehuacán",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "248716",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3980760",
    "name": "Uruapan",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "356786",
    "admin1_code": "16"
  },
  {
    "geoname_id": "3985604",
    "name": "San Luis Río Colorado",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "176685",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3996663",
    "name": "Manzanillo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "159853",
    "admin1_code": "08"
  },
  {
    "geoname_id": "4005775",
    "name": "Gómez Palacio",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "257352",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1024552",
    "name": "Xai-Xai",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "127366",
    "admin1_code": "02"
  },
  {
    "geoname_id": "2326171",
    "name": "Ondo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "257005",
    "admin1_code": "48"
  },
  {
    "geoname_id": "1252948",
    "name": "Warangal",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "557802",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1254388",
    "name": "Tiruchirappalli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1022518",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1255349",
    "name": "Surendranagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "179628",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1261162",
    "name": "Nowrangapur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1220946",
    "admin1_code": "21"
  },
  {
    "geoname_id": "1267579",
    "name": "Kashipur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "103138",
    "admin1_code": "39"
  },
  {
    "geoname_id": "1267648",
    "name": "Karur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "234191",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1267885",
    "name": "Kāraikkudi",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "181851",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1269771",
    "name": "Imphāl",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "223523",
    "admin1_code": "17"
  },
  {
    "geoname_id": "1270926",
    "name": "Gorakhpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1324570",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1270996",
    "name": "Gondā City",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "133583",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1271675",
    "name": "Gangāpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "120115",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1273491",
    "name": "Darbhanga",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "287150",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1278149",
    "name": "Sambhaji Nagar",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1016441",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1279159",
    "name": "Ajmer",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "517911",
    "admin1_code": "24"
  },
  {
    "geoname_id": "12069922",
    "name": "Rohini",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "860000",
    "admin1_code": "07"
  },
  {
    "geoname_id": "96961",
    "name": "Soran",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "125000",
    "admin1_code": "11"
  },
  {
    "geoname_id": "118994",
    "name": "Rafsanjān",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "147680",
    "admin1_code": "29"
  },
  {
    "geoname_id": "132938",
    "name": "Gonbad-e Kāvūs",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "131416",
    "admin1_code": "37"
  },
  {
    "geoname_id": "3591415",
    "name": "Petapa",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "135447",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3598132",
    "name": "Guatemala City",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "994938",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3598655",
    "name": "Chichicastenango",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "141567",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3190261",
    "name": "Split",
    "country_code": "HR",
    "cou_name_en": "Croatia",
    "population": "149830",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3727135",
    "name": "Croix-des-Bouquets",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "229127",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1214191",
    "name": "Perbaungan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "157174",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1214658",
    "name": "Lhokseumawe",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "188713",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1627549",
    "name": "Serang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "692101",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1627610",
    "name": "Sepatan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "118439",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1637510",
    "name": "Loa Janan",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "212816",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1638063",
    "name": "Lembang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "183130",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2347470",
    "name": "Bauchi",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "693700",
    "admin1_code": "46"
  },
  {
    "geoname_id": "1567788",
    "name": "Sóc Trăng",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "114453",
    "admin1_code": "65"
  },
  {
    "geoname_id": "1578500",
    "name": "Kon Tum",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "172712",
    "admin1_code": "55"
  },
  {
    "geoname_id": "3518135",
    "name": "San Pablo de las Salinas",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "156191",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3531200",
    "name": "Chalco",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "168720",
    "admin1_code": "15"
  },
  {
    "geoname_id": "4006163",
    "name": "Fresnillo",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "120944",
    "admin1_code": "32"
  },
  {
    "geoname_id": "4013516",
    "name": "Colima",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "146965",
    "admin1_code": "08"
  },
  {
    "geoname_id": "4013704",
    "name": "Ciudad Obregón",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "436484",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1734821",
    "name": "Sepang",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "212050",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1735634",
    "name": "Kuching",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "402738",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1043893",
    "name": "Lichinga",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "213361",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2319480",
    "name": "Uyo",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "436606",
    "admin1_code": "21"
  },
  {
    "geoname_id": "2337490",
    "name": "Inisa",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "164161",
    "admin1_code": "42"
  },
  {
    "geoname_id": "1856035",
    "name": "Naha",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "317405",
    "admin1_code": "47"
  },
  {
    "geoname_id": "1857519",
    "name": "Matsumoto",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "239466",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1858428",
    "name": "Kumagaya",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "195277",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1859642",
    "name": "Kawasaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "1531646",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1861212",
    "name": "Iwakuni",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "104004",
    "admin1_code": "45"
  },
  {
    "geoname_id": "2111149",
    "name": "Sendai",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "1096704",
    "admin1_code": "24"
  },
  {
    "geoname_id": "2111901",
    "name": "Mito",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "246538",
    "admin1_code": "14"
  },
  {
    "geoname_id": "6822096",
    "name": "Hitachi-Naka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "154631",
    "admin1_code": "14"
  },
  {
    "geoname_id": "1845457",
    "name": "Jeonju",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "652392",
    "admin1_code": "03"
  },
  {
    "geoname_id": "6621166",
    "name": "Seogwipo",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "178552",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1526384",
    "name": "Almaty",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "1977011",
    "admin1_code": "02"
  },
  {
    "geoname_id": "266826",
    "name": "Tripoli",
    "country_code": "LB",
    "cou_name_en": "Lebanon",
    "population": "229398",
    "admin1_code": "09"
  },
  {
    "geoname_id": "81302",
    "name": "Tobruk",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "121052",
    "admin1_code": "79"
  },
  {
    "geoname_id": "2219701",
    "name": "Al Ajaylat",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "130546",
    "admin1_code": "67"
  },
  {
    "geoname_id": "2219960",
    "name": "Al Jadīd",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "126386",
    "admin1_code": "75"
  },
  {
    "geoname_id": "1253986",
    "name": "Udaipur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "422784",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1254089",
    "name": "Tumkūr",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "307359",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1255969",
    "name": "Sītāpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "164435",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1259005",
    "name": "Raigarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "121278",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1259652",
    "name": "Pimpri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1284606",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1260476",
    "name": "Pānīpat",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "292808",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1263364",
    "name": "Mathura",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "330511",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1265242",
    "name": "Lakhīmpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "140223",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1269605",
    "name": "Jagādhri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "101300",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1270370",
    "name": "Hardoī",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "122635",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1270396",
    "name": "Hāora",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1027672",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1270568",
    "name": "Hābra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "139297",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1273309",
    "name": "Dehri",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "129938",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1273467",
    "name": "Dārjiling",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "123797",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1275163",
    "name": "Budaun",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "161555",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1276070",
    "name": "Bathinda",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "242800",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1276393",
    "name": "Bettiah",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "127008",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1276720",
    "name": "Batāla",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "145468",
    "admin1_code": "23"
  },
  {
    "geoname_id": "6619347",
    "name": "Navi Mumbai",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "2600000",
    "admin1_code": "16"
  },
  {
    "geoname_id": "7302861",
    "name": "Ashoknagar Kalyangarh",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "111475",
    "admin1_code": "28"
  },
  {
    "geoname_id": "8347656",
    "name": "Ramagundam",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "235000",
    "admin1_code": "40"
  },
  {
    "geoname_id": "97990",
    "name": "Baqubah",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "152550",
    "admin1_code": "10"
  },
  {
    "geoname_id": "99135",
    "name": "Kufa",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "110000",
    "admin1_code": "17"
  },
  {
    "geoname_id": "32900",
    "name": "Golestān",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "240000",
    "admin1_code": "26"
  },
  {
    "geoname_id": "139817",
    "name": "Bushehr",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "165377",
    "admin1_code": "22"
  },
  {
    "geoname_id": "721472",
    "name": "Debrecen",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "202402",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1214189",
    "name": "Percut",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "311063",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1215502",
    "name": "Banda Aceh",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "255029",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1629131",
    "name": "Salatiga",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "192322",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1637158",
    "name": "Lubuklinggau",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "234166",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1642588",
    "name": "Jember",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "298585",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1648637",
    "name": "Bitung",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "225134",
    "admin1_code": "31"
  },
  {
    "geoname_id": "2057087",
    "name": "Kupang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "442758",
    "admin1_code": "18"
  },
  {
    "geoname_id": "2639093",
    "name": "Rotherham",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "117618",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2640101",
    "name": "Poole",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "150092",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2641598",
    "name": "Newport",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "306844",
    "admin1_code": "WLS"
  },
  {
    "geoname_id": "2646057",
    "name": "Ipswich",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "178835",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2649808",
    "name": "Exeter",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "130709",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2654200",
    "name": "Burton upon Trent",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "122199",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2656192",
    "name": "Basingstoke",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "107642",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2419992",
    "name": "Kankan",
    "country_code": "GN",
    "cou_name_en": "Guinea",
    "population": "114009",
    "admin1_code": "K"
  },
  {
    "geoname_id": "2338711",
    "name": "Igboho",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "136764",
    "admin1_code": "32"
  },
  {
    "geoname_id": "2343983",
    "name": "Efon-Alaaye",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "279319",
    "admin1_code": "54"
  },
  {
    "geoname_id": "5178127",
    "name": "Allentown",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "120207",
    "admin1_code": "PA"
  },
  {
    "geoname_id": "5206379",
    "name": "Pittsburgh",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "304391",
    "admin1_code": "PA"
  },
  {
    "geoname_id": "5367929",
    "name": "Long Beach",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "474140",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5454711",
    "name": "Albuquerque",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "559121",
    "admin1_code": "NM"
  },
  {
    "geoname_id": "12541728",
    "name": "South Fulton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "107436",
    "admin1_code": "GA"
  },
  {
    "geoname_id": "1514581",
    "name": "Angren",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "191300",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3628053",
    "name": "San Juan de los Morros",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "160868",
    "admin1_code": "12"
  },
  {
    "geoname_id": "3628503",
    "name": "San Carlos",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "120375",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3645527",
    "name": "Ciudad Ojeda",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "156957",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3646382",
    "name": "Carúpano",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "167187",
    "admin1_code": "19"
  },
  {
    "geoname_id": "919009",
    "name": "Chingola",
    "country_code": "ZM",
    "cou_name_en": "Zambia",
    "population": "148564",
    "admin1_code": "08"
  },
  {
    "geoname_id": "1568510",
    "name": "Rạch Giá",
    "country_code": "VN",
    "cou_name_en": "Viet Nam",
    "population": "228356",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3667983",
    "name": "Sincelejo",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "277773",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3673662",
    "name": "Ocaña",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "101158",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3567597",
    "name": "Bayamo",
    "country_code": "CU",
    "cou_name_en": "Cuba",
    "population": "192632",
    "admin1_code": "09"
  },
  {
    "geoname_id": "353802",
    "name": "Kawm Umbū",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "116293",
    "admin1_code": "16"
  },
  {
    "geoname_id": "362004",
    "name": "Abū Tīj",
    "country_code": "EG",
    "cou_name_en": "Egypt",
    "population": "105418",
    "admin1_code": "17"
  },
  {
    "geoname_id": "2512989",
    "name": "Palma",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "409661",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2516395",
    "name": "Jaén",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "113457",
    "admin1_code": "51"
  },
  {
    "geoname_id": "3105976",
    "name": "Vigo",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "297332",
    "admin1_code": "58"
  },
  {
    "geoname_id": "3108286",
    "name": "Terrassa",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "218535",
    "admin1_code": "56"
  },
  {
    "geoname_id": "2362344",
    "name": "Bobo-Dioulasso",
    "country_code": "BF",
    "cou_name_en": "Burkina Faso",
    "population": "904920",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2362909",
    "name": "Banfora",
    "country_code": "BF",
    "cou_name_en": "Burkina Faso",
    "population": "117452",
    "admin1_code": "02"
  },
  {
    "geoname_id": "3911925",
    "name": "La Paz",
    "country_code": "BO",
    "cou_name_en": "Bolivia",
    "population": "2004652",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3448636",
    "name": "São José dos Campos",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "729737",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3454690",
    "name": "Paulínia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "112003",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3461563",
    "name": "Ibirité",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "141374",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3463237",
    "name": "Florianópolis",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "508826",
    "admin1_code": "26"
  },
  {
    "geoname_id": "3465038",
    "name": "Cuiabá",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "618124",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3465944",
    "name": "Colatina",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "101190",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3472343",
    "name": "Americana",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "196022",
    "admin1_code": "27"
  },
  {
    "geoname_id": "5913490",
    "name": "Calgary",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "1019942",
    "admin1_code": "01"
  },
  {
    "geoname_id": "5927690",
    "name": "Coquitlam",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "140000",
    "admin1_code": "02"
  },
  {
    "geoname_id": "6094817",
    "name": "Ottawa",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "812129",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6167865",
    "name": "Toronto",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "2600000",
    "admin1_code": "08"
  },
  {
    "geoname_id": "212730",
    "name": "Kisangani",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "539158",
    "admin1_code": "30"
  },
  {
    "geoname_id": "214974",
    "name": "Kalemie",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "146974",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2661604",
    "name": "Basel",
    "country_code": "CH",
    "cou_name_en": "Switzerland",
    "population": "164488",
    "admin1_code": "BS"
  },
  {
    "geoname_id": "1529167",
    "name": "Tacheng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "161037",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1785781",
    "name": "Yulin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1056743",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1795060",
    "name": "Shiqi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "342306",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1798422",
    "name": "Puyang Chengguanzhen",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "104994",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1799962",
    "name": "Nanjing",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "9314685",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1804879",
    "name": "Kaifeng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1451741",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1808198",
    "name": "Heze",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1346717",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1809467",
    "name": "Guixi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "188980",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1812749",
    "name": "Dingxi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "420614",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1816329",
    "name": "Bishan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "204702",
    "admin1_code": "33"
  },
  {
    "geoname_id": "2036876",
    "name": "Honggang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "147977",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2037222",
    "name": "Gongzhuling",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "140909",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2038650",
    "name": "Anda",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "181271",
    "admin1_code": "08"
  },
  {
    "geoname_id": "6986104",
    "name": "Zhongshan",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3841873",
    "admin1_code": "30"
  },
  {
    "geoname_id": "2878234",
    "name": "Leverkusen",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "162738",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2904789",
    "name": "Hildesheim",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "103052",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2634853",
    "name": "Walsall",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "172141",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "1205733",
    "name": "Chattogram",
    "country_code": "BD",
    "cou_name_en": "Bangladesh",
    "population": "3920222",
    "admin1_code": "84"
  },
  {
    "geoname_id": "2792482",
    "name": "Leuven",
    "country_code": "BE",
    "cou_name_en": "Belgium",
    "population": "101032",
    "admin1_code": "VLG"
  },
  {
    "geoname_id": "2078025",
    "name": "Adelaide",
    "country_code": "AU",
    "cou_name_en": "Australia",
    "population": "1387290",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2750053",
    "name": "Nijmegen",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "158732",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2759821",
    "name": "Amersfoort",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "139914",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1706684",
    "name": "Libertad",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "250353",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1716198",
    "name": "Dagupan",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "171271",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1978681",
    "name": "Malingao",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "1121974",
    "admin1_code": "12"
  },
  {
    "geoname_id": "1165569",
    "name": "Shahkot",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "200000",
    "admin1_code": "04"
  },
  {
    "geoname_id": "496527",
    "name": "Serpukhov",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "128158",
    "admin1_code": "47"
  },
  {
    "geoname_id": "523064",
    "name": "Nazran’",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "164131",
    "admin1_code": "19"
  },
  {
    "geoname_id": "554787",
    "name": "Izmaylovo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "104000",
    "admin1_code": "47"
  },
  {
    "geoname_id": "1496747",
    "name": "Novosibirsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "1612833",
    "admin1_code": "53"
  },
  {
    "geoname_id": "2119441",
    "name": "Yuzhno-Sakhalinsk",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "198973",
    "admin1_code": "64"
  },
  {
    "geoname_id": "2711537",
    "name": "Göteborg",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "587549",
    "admin1_code": "28"
  },
  {
    "geoname_id": "170592",
    "name": "Dūmā",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "111864",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2364104",
    "name": "Sokodé",
    "country_code": "TG",
    "cou_name_en": "Togo",
    "population": "117811",
    "admin1_code": "22"
  },
  {
    "geoname_id": "2467454",
    "name": "Sfax",
    "country_code": "TN",
    "cou_name_en": "Tunisia",
    "population": "277278",
    "admin1_code": "32"
  },
  {
    "geoname_id": "298117",
    "name": "Van",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "525016",
    "admin1_code": "65"
  },
  {
    "geoname_id": "746881",
    "name": "Giresun",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "125682",
    "admin1_code": "28"
  },
  {
    "geoname_id": "750269",
    "name": "Bursa",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "3101833",
    "admin1_code": "16"
  },
  {
    "geoname_id": "752015",
    "name": "Amasya",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "114921",
    "admin1_code": "05"
  },
  {
    "geoname_id": "6696918",
    "name": "Taoyuan City",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "402014",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2262963",
    "name": "Setúbal",
    "country_code": "PT",
    "cou_name_en": "Portugal",
    "population": "117110",
    "admin1_code": "19"
  },
  {
    "geoname_id": "671768",
    "name": "Oradea",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "206614",
    "admin1_code": "05"
  },
  {
    "geoname_id": "4049979",
    "name": "Birmingham",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "212461",
    "admin1_code": "AL"
  },
  {
    "geoname_id": "4164138",
    "name": "Miami",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "441003",
    "admin1_code": "FL"
  },
  {
    "geoname_id": "4499612",
    "name": "Winston-Salem",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "241218",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "4560349",
    "name": "Philadelphia",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "1576251",
    "admin1_code": "PA"
  },
  {
    "geoname_id": "4645421",
    "name": "New South Memphis",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "641608",
    "admin1_code": "TN"
  },
  {
    "geoname_id": "160263",
    "name": "Dar es Salaam",
    "country_code": "TZ",
    "cou_name_en": "Tanzania, United Republic of",
    "population": "5383728",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1176734",
    "name": "Hyderabad",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "1386330",
    "admin1_code": "05"
  },
  {
    "geoname_id": "756135",
    "name": "Warsaw",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "1702139",
    "admin1_code": "78"
  },
  {
    "geoname_id": "2751773",
    "name": "Leiden",
    "country_code": "NL",
    "cou_name_en": "Netherlands",
    "population": "119713",
    "admin1_code": "11"
  },
  {
    "geoname_id": "3708306",
    "name": "Juan Díaz",
    "country_code": "PA",
    "cou_name_en": "Panama",
    "population": "100636",
    "admin1_code": "08"
  },
  {
    "geoname_id": "3691674",
    "name": "Sullana",
    "country_code": "PE",
    "cou_name_en": "Peru",
    "population": "160789",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1692685",
    "name": "Puerto Princesa",
    "country_code": "PH",
    "cou_name_en": "Philippines",
    "population": "222673",
    "admin1_code": "41"
  },
  {
    "geoname_id": "3827598",
    "name": "Ojo de Agua",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "242272",
    "admin1_code": "15"
  },
  {
    "geoname_id": "3997479",
    "name": "Los Mochis",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "256613",
    "admin1_code": "25"
  },
  {
    "geoname_id": "4012406",
    "name": "Cuauhtémoc",
    "country_code": "MX",
    "cou_name_en": "Mexico",
    "population": "114007",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1734052",
    "name": "Sandakan",
    "country_code": "MY",
    "cou_name_en": "Malaysia",
    "population": "439050",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1028918",
    "name": "Pemba",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "201846",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1039854",
    "name": "Matola",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "1032197",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1041190",
    "name": "Mandimba",
    "country_code": "MZ",
    "cou_name_en": "Mozambique",
    "population": "118922",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2437798",
    "name": "Zinder",
    "country_code": "NE",
    "cou_name_en": "Niger",
    "population": "191424",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2323390",
    "name": "Saki",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "178677",
    "admin1_code": "32"
  },
  {
    "geoname_id": "2324857",
    "name": "Pindiga",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "106322",
    "admin1_code": "55"
  },
  {
    "geoname_id": "776251",
    "name": "Bemowo",
    "country_code": "PL",
    "cou_name_en": "Poland",
    "population": "102393",
    "admin1_code": "78"
  },
  {
    "geoname_id": "281102",
    "name": "Rafaḩ",
    "country_code": "PS",
    "cou_name_en": "West Bank and Gaza Strip",
    "population": "126305",
    "admin1_code": "GZ"
  },
  {
    "geoname_id": "2267827",
    "name": "Funchal",
    "country_code": "PT",
    "cou_name_en": "Portugal",
    "population": "100847",
    "admin1_code": "10"
  },
  {
    "geoname_id": "677697",
    "name": "Galaţi",
    "country_code": "RO",
    "cou_name_en": "Romania",
    "population": "294087",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1848004",
    "name": "Zama",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "130667",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1848277",
    "name": "Yonago",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "148720",
    "admin1_code": "41"
  },
  {
    "geoname_id": "1851348",
    "name": "Suzuka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "191477",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1851717",
    "name": "Shizuoka",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "690881",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1860728",
    "name": "Kakegawa",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "117925",
    "admin1_code": "37"
  },
  {
    "geoname_id": "1861436",
    "name": "Isesaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "130692",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1862302",
    "name": "Hōfu",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "116925",
    "admin1_code": "45"
  },
  {
    "geoname_id": "1862627",
    "name": "Himeji",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "525682",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1865387",
    "name": "Amagasaki",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "442173",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2130188",
    "name": "Hakodate",
    "country_code": "JP",
    "cou_name_en": "Japan",
    "population": "275730",
    "admin1_code": "12"
  },
  {
    "geoname_id": "191245",
    "name": "Kisumu",
    "country_code": "KE",
    "cou_name_en": "Kenya",
    "population": "344487",
    "admin1_code": "26"
  },
  {
    "geoname_id": "1877449",
    "name": "Hamhŭng",
    "country_code": "KP",
    "cou_name_en": "Korea, Dem. People's Rep. of",
    "population": "559056",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1835848",
    "name": "Seoul",
    "country_code": "KR",
    "cou_name_en": "Korea, Republic of",
    "population": "10349312",
    "admin1_code": "11"
  },
  {
    "geoname_id": "610612",
    "name": "Shevchenko",
    "country_code": "KZ",
    "cou_name_en": "Kazakhstan",
    "population": "147443",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1653316",
    "name": "Savannakhet",
    "country_code": "LA",
    "cou_name_en": "Lao People's Dem. Rep.",
    "population": "125760",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1233369",
    "name": "Negombo",
    "country_code": "LK",
    "cou_name_en": "Sri Lanka",
    "population": "137223",
    "admin1_code": "36"
  },
  {
    "geoname_id": "88319",
    "name": "Benghazi",
    "country_code": "LY",
    "cou_name_en": "Libyan Arab Jamahiriya",
    "population": "807250",
    "admin1_code": "69"
  },
  {
    "geoname_id": "2529317",
    "name": "Taza",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "141890",
    "admin1_code": "03"
  },
  {
    "geoname_id": "2537881",
    "name": "Safi",
    "country_code": "MA",
    "cou_name_en": "Morocco",
    "population": "288163",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1295765",
    "name": "Sittwe",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "177743",
    "admin1_code": "01"
  },
  {
    "geoname_id": "1299154",
    "name": "Pyay",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "135308",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1300466",
    "name": "Bago",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "244376",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1308522",
    "name": "Monywa",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "182011",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1309793",
    "name": "Meiktila",
    "country_code": "MM",
    "cou_name_en": "Myanmar",
    "population": "177442",
    "admin1_code": "08"
  },
  {
    "geoname_id": "467978",
    "name": "Yelets",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "115688",
    "admin1_code": "43"
  },
  {
    "geoname_id": "468809",
    "name": "Yasenevo",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "180000",
    "admin1_code": "48"
  },
  {
    "geoname_id": "1177654",
    "name": "Gujrat",
    "country_code": "PK",
    "cou_name_en": "Pakistan",
    "population": "301506",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2343279",
    "name": "Enugu",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "688862",
    "admin1_code": "47"
  },
  {
    "geoname_id": "2353099",
    "name": "Abakaliki",
    "country_code": "NG",
    "cou_name_en": "Nigeria",
    "population": "134102",
    "admin1_code": "53"
  },
  {
    "geoname_id": "499292",
    "name": "Salavat",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "159893",
    "admin1_code": "08"
  },
  {
    "geoname_id": "511565",
    "name": "Penza",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "523553",
    "admin1_code": "57"
  },
  {
    "geoname_id": "569273",
    "name": "Cherëmushki",
    "country_code": "RU",
    "cou_name_en": "Russian Federation",
    "population": "106587",
    "admin1_code": "48"
  },
  {
    "geoname_id": "101628",
    "name": "Tabuk",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "667000",
    "admin1_code": "19"
  },
  {
    "geoname_id": "105072",
    "name": "Khamis Mushait",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "387553",
    "admin1_code": "11"
  },
  {
    "geoname_id": "108410",
    "name": "Riyadh",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "4205961",
    "admin1_code": "10"
  },
  {
    "geoname_id": "109571",
    "name": "Al Hufūf",
    "country_code": "SA",
    "cou_name_en": "Saudi Arabia",
    "population": "293179",
    "admin1_code": "06"
  },
  {
    "geoname_id": "372753",
    "name": "Kassala",
    "country_code": "SD",
    "cou_name_en": "Sudan, The Republic of",
    "population": "401477",
    "admin1_code": "52"
  },
  {
    "geoname_id": "2706767",
    "name": "Helsingborg",
    "country_code": "SE",
    "cou_name_en": "Sweden",
    "population": "104250",
    "admin1_code": "27"
  },
  {
    "geoname_id": "170017",
    "name": "Ḩamāh",
    "country_code": "SY",
    "cou_name_en": "Syrian Arab Republic",
    "population": "460602",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1150515",
    "name": "Surat Thani",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "132040",
    "admin1_code": "60"
  },
  {
    "geoname_id": "1608534",
    "name": "Nakhon Pathom",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "117927",
    "admin1_code": "53"
  },
  {
    "geoname_id": "1609776",
    "name": "Khon Kaen",
    "country_code": "TH",
    "cou_name_en": "Thailand",
    "population": "114459",
    "admin1_code": "22"
  },
  {
    "geoname_id": "304797",
    "name": "Mardin",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "129864",
    "admin1_code": "72"
  },
  {
    "geoname_id": "304827",
    "name": "Manisa",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "243971",
    "admin1_code": "45"
  },
  {
    "geoname_id": "305268",
    "name": "Kütahya",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "185008",
    "admin1_code": "43"
  },
  {
    "geoname_id": "738927",
    "name": "Tekirdağ",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "122287",
    "admin1_code": "59"
  },
  {
    "geoname_id": "739549",
    "name": "Şişli",
    "country_code": "TR",
    "cou_name_en": "Turkey",
    "population": "314684",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1665196",
    "name": "Douliu",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "104723",
    "admin1_code": "04"
  },
  {
    "geoname_id": "1670106",
    "name": "Sanxia",
    "country_code": "TW",
    "cou_name_en": "Taiwan, China",
    "population": "115185",
    "admin1_code": "03"
  },
  {
    "geoname_id": "692194",
    "name": "Sumy",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "259660",
    "admin1_code": "21"
  },
  {
    "geoname_id": "705812",
    "name": "Kropyvnytskyy",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "219676",
    "admin1_code": "10"
  },
  {
    "geoname_id": "709932",
    "name": "Kamyanske",
    "country_code": "UA",
    "cou_name_en": "Ukraine",
    "population": "226845",
    "admin1_code": "04"
  },
  {
    "geoname_id": "4280539",
    "name": "Topeka",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "127265",
    "admin1_code": "KS"
  },
  {
    "geoname_id": "4281730",
    "name": "Wichita",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "389965",
    "admin1_code": "KS"
  },
  {
    "geoname_id": "4341513",
    "name": "Shreveport",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "197204",
    "admin1_code": "LA"
  },
  {
    "geoname_id": "4471025",
    "name": "High Point",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "110268",
    "admin1_code": "NC"
  },
  {
    "geoname_id": "4684888",
    "name": "Dallas",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "1300092",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "4717782",
    "name": "Pasadena",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "153784",
    "admin1_code": "TX"
  },
  {
    "geoname_id": "5351247",
    "name": "Fullerton",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "140847",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5351515",
    "name": "Garden Grove",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "175393",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5391959",
    "name": "San Francisco",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "864816",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "5393287",
    "name": "Santa Rosa",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "174972",
    "admin1_code": "CA"
  },
  {
    "geoname_id": "1512979",
    "name": "Qo‘qon",
    "country_code": "UZ",
    "cou_name_en": "Uzbekistan",
    "population": "259700",
    "admin1_code": "03"
  },
  {
    "geoname_id": "3640465",
    "name": "Guacara",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "198883",
    "admin1_code": "07"
  },
  {
    "geoname_id": "3644417",
    "name": "Ejido",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "120978",
    "admin1_code": "14"
  },
  {
    "geoname_id": "3645213",
    "name": "Coro",
    "country_code": "VE",
    "cou_name_en": "Venezuela, Bolivarian Rep. of",
    "population": "246657",
    "admin1_code": "11"
  },
  {
    "geoname_id": "4951305",
    "name": "South Boston",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "571281",
    "admin1_code": "MA"
  },
  {
    "geoname_id": "5097529",
    "name": "Edison",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "102548",
    "admin1_code": "NJ"
  },
  {
    "geoname_id": "5143307",
    "name": "Washington Heights",
    "country_code": "US",
    "cou_name_en": "United States",
    "population": "152613",
    "admin1_code": "NY"
  },
  {
    "geoname_id": "973111",
    "name": "Mpumalanga",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "140121",
    "admin1_code": "02"
  },
  {
    "geoname_id": "989921",
    "name": "Klerksdorp",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "178921",
    "admin1_code": "10"
  },
  {
    "geoname_id": "1015621",
    "name": "Brits",
    "country_code": "ZA",
    "cou_name_en": "South Africa",
    "population": "122497",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2972328",
    "name": "Toulon",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "168701",
    "admin1_code": "93"
  },
  {
    "geoname_id": "2980291",
    "name": "Saint-Étienne",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "176280",
    "admin1_code": "84"
  },
  {
    "geoname_id": "2992090",
    "name": "Montreuil",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "111240",
    "admin1_code": "11"
  },
  {
    "geoname_id": "2998286",
    "name": "Limoges",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "141176",
    "admin1_code": "75"
  },
  {
    "geoname_id": "3037656",
    "name": "Angers",
    "country_code": "FR",
    "cou_name_en": "France",
    "population": "168279",
    "admin1_code": "52"
  },
  {
    "geoname_id": "2634677",
    "name": "Watford",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "125707",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "10942183",
    "name": "Rugao",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "257400",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3667873",
    "name": "Sogamoso",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "111336",
    "admin1_code": "36"
  },
  {
    "geoname_id": "3687230",
    "name": "Cartago",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "134972",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3687925",
    "name": "Cali",
    "country_code": "CO",
    "cou_name_en": "Colombia",
    "population": "2392877",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2615876",
    "name": "Odense",
    "country_code": "DK",
    "cou_name_en": "Denmark",
    "population": "180863",
    "admin1_code": "21"
  },
  {
    "geoname_id": "2503701",
    "name": "Bordj Bou Arréridj",
    "country_code": "DZ",
    "cou_name_en": "Algeria",
    "population": "168346",
    "admin1_code": "39"
  },
  {
    "geoname_id": "3118594",
    "name": "Leganés",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "186066",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3121437",
    "name": "Getafe",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "167164",
    "admin1_code": "29"
  },
  {
    "geoname_id": "3128026",
    "name": "Bilbao",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "345821",
    "admin1_code": "59"
  },
  {
    "geoname_id": "3130616",
    "name": "Alcalá de Henares",
    "country_code": "ES",
    "cou_name_en": "Spain",
    "population": "204574",
    "admin1_code": "29"
  },
  {
    "geoname_id": "2358946",
    "name": "Koudougou",
    "country_code": "BF",
    "cou_name_en": "Burkina Faso",
    "population": "160239",
    "admin1_code": "06"
  },
  {
    "geoname_id": "728203",
    "name": "Pleven",
    "country_code": "BG",
    "cou_name_en": "Bulgaria",
    "population": "100952",
    "admin1_code": "50"
  },
  {
    "geoname_id": "732770",
    "name": "Burgas",
    "country_code": "BG",
    "cou_name_en": "Bulgaria",
    "population": "195966",
    "admin1_code": "39"
  },
  {
    "geoname_id": "2394560",
    "name": "Djougou",
    "country_code": "BJ",
    "cou_name_en": "Benin",
    "population": "237040",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2395914",
    "name": "Abomey-Calavi",
    "country_code": "BJ",
    "cou_name_en": "Benin",
    "population": "385755",
    "admin1_code": "09"
  },
  {
    "geoname_id": "3384987",
    "name": "Vitória de Santo Antão",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "107383",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3386496",
    "name": "Teresina",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "871126",
    "admin1_code": "20"
  },
  {
    "geoname_id": "3450083",
    "name": "Santa Maria",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "283677",
    "admin1_code": "23"
  },
  {
    "geoname_id": "3453406",
    "name": "Poá",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "107432",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3465284",
    "name": "Cotia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "253608",
    "admin1_code": "27"
  },
  {
    "geoname_id": "3471335",
    "name": "Atibaia",
    "country_code": "BR",
    "cou_name_en": "Brazil",
    "population": "144088",
    "admin1_code": "27"
  },
  {
    "geoname_id": "933773",
    "name": "Gaborone",
    "country_code": "BW",
    "cou_name_en": "Botswana",
    "population": "208411",
    "admin1_code": "14"
  },
  {
    "geoname_id": "625324",
    "name": "Mazyr",
    "country_code": "BY",
    "cou_name_en": "Belarus",
    "population": "112348",
    "admin1_code": "02"
  },
  {
    "geoname_id": "5881791",
    "name": "Abbotsford",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "141397",
    "admin1_code": "02"
  },
  {
    "geoname_id": "6166142",
    "name": "Thunder Bay",
    "country_code": "CA",
    "cou_name_en": "Canada",
    "population": "107909",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2313002",
    "name": "Matadi",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "180109",
    "admin1_code": "08"
  },
  {
    "geoname_id": "2314705",
    "name": "Kikwit",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "186991",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2315728",
    "name": "Gemena",
    "country_code": "CD",
    "cou_name_en": "Congo, Democratic Republic of the",
    "population": "117639",
    "admin1_code": "28"
  },
  {
    "geoname_id": "293725",
    "name": "Reẖovot",
    "country_code": "IL",
    "cou_name_en": "Israel",
    "population": "149392",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1253993",
    "name": "Ooty",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "233426",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1255264",
    "name": "Tādepallegūdem",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "108167",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1256237",
    "name": "Shimla",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "173503",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1258342",
    "name": "Ratlām",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "236843",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1258470",
    "name": "Rānīganj",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "131261",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1260107",
    "name": "Patiāla",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "329224",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1260716",
    "name": "Pāli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "210103",
    "admin1_code": "24"
  },
  {
    "geoname_id": "1260777",
    "name": "Pālanpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "123294",
    "admin1_code": "09"
  },
  {
    "geoname_id": "1262067",
    "name": "Nalgonda",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "121826",
    "admin1_code": "40"
  },
  {
    "geoname_id": "1262330",
    "name": "Muzaffarpur",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "333200",
    "admin1_code": "34"
  },
  {
    "geoname_id": "1262951",
    "name": "Moga",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "130549",
    "admin1_code": "23"
  },
  {
    "geoname_id": "1263214",
    "name": "Meerut",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "1223184",
    "admin1_code": "36"
  },
  {
    "geoname_id": "1268159",
    "name": "Kanchipuram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "221715",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1269920",
    "name": "Hubli",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "840214",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1272051",
    "name": "Ellore",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "183387",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1272842",
    "name": "Dharmavaram",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "114050",
    "admin1_code": "02"
  },
  {
    "geoname_id": "1275926",
    "name": "Bhind",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "174035",
    "admin1_code": "35"
  },
  {
    "geoname_id": "1276058",
    "name": "Bhātpāra",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "483129",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1276509",
    "name": "Bellary",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "336681",
    "admin1_code": "19"
  },
  {
    "geoname_id": "1277264",
    "name": "Bānkura",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "133966",
    "admin1_code": "28"
  },
  {
    "geoname_id": "1278483",
    "name": "Arrah",
    "country_code": "IN",
    "cou_name_en": "India",
    "population": "223676",
    "admin1_code": "34"
  },
  {
    "geoname_id": "98245",
    "name": "Az Zubayr",
    "country_code": "IQ",
    "cou_name_en": "Iraq",
    "population": "122676",
    "admin1_code": "02"
  },
  {
    "geoname_id": "14256",
    "name": "Āzādshahr",
    "country_code": "IR",
    "cou_name_en": "Iran, Islamic Rep. of",
    "population": "514102",
    "admin1_code": "09"
  },
  {
    "geoname_id": "2848273",
    "name": "Remscheid",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "117118",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2879139",
    "name": "Leipzig",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "504971",
    "admin1_code": "13"
  },
  {
    "geoname_id": "2884509",
    "name": "Krefeld",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "237984",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2910831",
    "name": "Hannover",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "515140",
    "admin1_code": "06"
  },
  {
    "geoname_id": "2934246",
    "name": "Düsseldorf",
    "country_code": "DE",
    "cou_name_en": "Germany",
    "population": "620523",
    "admin1_code": "07"
  },
  {
    "geoname_id": "2638077",
    "name": "Sheffield",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "556500",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2639996",
    "name": "Portsmouth",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "population": "208100",
    "admin1_code": "ENG"
  },
  {
    "geoname_id": "2422488",
    "name": "Camayenne",
    "country_code": "GN",
    "cou_name_en": "Guinea",
    "population": "1871242",
    "admin1_code": "04"
  },
  {
    "geoname_id": "2309527",
    "name": "Malabo",
    "country_code": "GQ",
    "cou_name_en": "Equatorial Guinea",
    "population": "155963",
    "admin1_code": "04"
  },
  {
    "geoname_id": "3589885",
    "name": "San Juan Sacatepéquez",
    "country_code": "GT",
    "cou_name_en": "Guatemala",
    "population": "136886",
    "admin1_code": "07"
  },
  {
    "geoname_id": "1819595",
    "name": "Kwai Chung",
    "country_code": "HK",
    "cou_name_en": "Hong Kong, China",
    "population": "331600",
    "admin1_code": "NTW"
  },
  {
    "geoname_id": "3186886",
    "name": "Zagreb",
    "country_code": "HR",
    "cou_name_en": "Croatia",
    "population": "663592",
    "admin1_code": "21"
  },
  {
    "geoname_id": "3728474",
    "name": "Cap-Haïtien",
    "country_code": "HT",
    "cou_name_en": "Haiti",
    "population": "134815",
    "admin1_code": "09"
  },
  {
    "geoname_id": "715429",
    "name": "Szeged",
    "country_code": "HU",
    "cou_name_en": "Hungary",
    "population": "160766",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1630058",
    "name": "Rangkasbitung",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "137041",
    "admin1_code": "33"
  },
  {
    "geoname_id": "1632654",
    "name": "Pangkalpinang",
    "country_code": "ID",
    "cou_name_en": "Indonesia",
    "population": "216893",
    "admin1_code": "35"
  },
  {
    "geoname_id": "2229152",
    "name": "Loum",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "177429",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2232593",
    "name": "Douala",
    "country_code": "CM",
    "cou_name_en": "Cameroon",
    "population": "1338082",
    "admin1_code": "05"
  },
  {
    "geoname_id": "1280849",
    "name": "Kashgar",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "506640",
    "admin1_code": "13"
  },
  {
    "geoname_id": "1785286",
    "name": "Zibo",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "3129228",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1785710",
    "name": "Jinghong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "205523",
    "admin1_code": "29"
  },
  {
    "geoname_id": "1787031",
    "name": "Yanzhou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "254788",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1788618",
    "name": "Xintai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "222459",
    "admin1_code": "25"
  },
  {
    "geoname_id": "1791249",
    "name": "Wuhai",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "218427",
    "admin1_code": "20"
  },
  {
    "geoname_id": "1792892",
    "name": "Tianshui",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "1212791",
    "admin1_code": "15"
  },
  {
    "geoname_id": "1795184",
    "name": "Shilong",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "109733",
    "admin1_code": "30"
  },
  {
    "geoname_id": "1798131",
    "name": "Qiaotou",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "114712",
    "admin1_code": "06"
  },
  {
    "geoname_id": "1804609",
    "name": "Laibin",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "910282",
    "admin1_code": "16"
  },
  {
    "geoname_id": "1806439",
    "name": "Jianchang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "109108",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1811764",
    "name": "Duyun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "198516",
    "admin1_code": "18"
  },
  {
    "geoname_id": "1812961",
    "name": "Deyang",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "735070",
    "admin1_code": "32"
  },
  {
    "geoname_id": "1813171",
    "name": "Zhangjiajie",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "441804",
    "admin1_code": "11"
  },
  {
    "geoname_id": "1816971",
    "name": "Baoding",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "2739887",
    "admin1_code": "10"
  },
  {
    "geoname_id": "2033225",
    "name": "Zhalantun",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "132224",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2033242",
    "name": "Yushu",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "124736",
    "admin1_code": "05"
  },
  {
    "geoname_id": "2033536",
    "name": "Yakeshi",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "116284",
    "admin1_code": "20"
  },
  {
    "geoname_id": "2038067",
    "name": "Chifeng",
    "country_code": "CN",
    "cou_name_en": "China",
    "population": "346654",
    "admin1_code": "20"
  },
  {
    "geoname_id": "292223",
    "name": "Dubai",
    "country_code": "AE",
    "cou_name_en": "United Arab Emirates",
    "population": "3478300",
    "admin1_code": "03"
  },
  {
    "geoname_id": "1147290",
    "name": "Balkh",
    "country_code": "AF",
    "cou_name_en": "Afghanistan",
    "population": "114883",
    "admin1_code": "30"
  },
  {
    "geoname_id": "3435217",
    "name": "Corrientes",
    "country_code": "AR",
    "cou_name_en": "Argentina",
    "population": "346334",
    "admin1_code": "06"
  }
]

export default cities;