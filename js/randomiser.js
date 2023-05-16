// ON PAGE LOAD
var content = document.getElementById("content");
var modal = document.getElementById("modal");
var btn = document.getElementById("settings");
var span = document.getElementById("close");
var spinner = document.getElementById("start");
var wheelContainer = document.getElementById("wheel_container");
var maximum = 8;
var minimum = 0;
var repeats = [];
var repeatsToggle = 0;
var testToggle = 0;

// OPEN SETTINGS
btn.onclick = function () {
    modal.style.display = "block";
    content.style.display = "none";
}

// CLOSE SETTINGS
span.onclick = function () {
    modal.style.display = "none";
    content.style.display = "block";
}

// REVEAL TEST YOURSELF
wheelContainer.onclick = function () {
   document.getElementById("wheel_moves_span").style.backgroundColor = "#1f1f1f";
   document.getElementById("wheel_meaning_span").style.backgroundColor = "#1f1f1f";
   document.getElementById("wheel_moves_span").style.color = "#ffffff";
   document.getElementById("wheel_meaning_span").style.color = "#ffffff";
}

// DROPDOWN LISTENER
var dropdown = document.getElementById("grades");
dropdown.addEventListener("change", function(){
    maximum = dropdown.value;
});

// COLOUR CHECKBOX
var colourBox = document.getElementById("colourBox");
var blackOptions = document.getElementsByClassName('black');
colourBox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("repeatsBox").checked = false;
        repeats = [];
        document.getElementById("blackBox").checked = false;
        for (var i=0;i<blackOptions.length;i+=1){
            blackOptions[i].style.display = 'none';
        }
        for (var i=0;i<colourOptions.length;i+=1){
            colourOptions[i].style.display = 'block';
        }
        dropdown.selectedIndex = 0;
        maximum = 8;
        minimum = 0;
    } else {
        for (var i=0;i<blackOptions.length;i+=1){
            blackOptions[i].style.display = 'block';
        }
        for (var i=0;i<colourOptions.length;i+=1){
            colourOptions[i].style.display = 'block';
        }
        dropdown.selectedIndex = 0;
        maximum = 0;
        minimum = 0;
    }
  });

// BLACK CHECKBOX
var blackBox = document.getElementById("blackBox");
var colourOptions = document.getElementsByClassName('colour');
blackBox.addEventListener('change', function() {
    if (this.checked) {
         document.getElementById("repeatsBox").checked = false;
         repeats = [];
        document.getElementById("colourBox").checked = false;
        for (var i=0;i<colourOptions.length;i+=1){
            colourOptions[i].style.display = 'none';
        }
        for (var i=0;i<blackOptions.length;i+=1){
            blackOptions[i].style.display = 'block';
        }
        dropdown.selectedIndex = 0;
        maximum = 23;
        minimum = 9;
    } else {
        for (var i=0;i<colourOptions.length;i+=1){
            colourOptions[i].style.display = 'block';
        }
        for (var i=0;i<blackOptions.length;i+=1){
            blackOptions[i].style.display = 'block';
        }
        dropdown.selectedIndex = 0;
        maximum = 0;
        minimum = 0;
    }
  });

   // REPEATS CHECKBOX
   var repeatsBox = document.getElementById("repeatsBox");
   repeatsBox.addEventListener('change', function() {
   if (this.checked) {
      repeatsToggle = 1;
   } else {
      repeatsToggle = 0;
   }});

   // TEST YOURSELF CHECKBOX
   var repeatsBox = document.getElementById("testBox");
   repeatsBox.addEventListener('change', function() {
   if (this.checked) {
      testToggle = 1;
   } else {
      testToggle = 0;
   }});

// NEW PATTERN
spinner.onclick = function () {
    var data = {
        0: {
           "grade_num": 1,
           "grade": "yellowtag",
           "tul": "Chon-ji",
           "moves": 19,
           "meaning": "Chonji literally means 'the Heaven and the Earth'. In the Orient it is interpreted as the creation of the world or the beginning of human history, therefore, it is the initial pattern played by the beginner. This pattern consists of two similar parts, one to represent the Heaven and the other the Earth.",
           "primary": "#ffffff",
           "secondary": "#e0ab25",
           "dan": "",
        },
        1: {
           "grade_num": 2,
           "grade": "yellow",
           "tul": "Dan-Gun",
           "moves": 21,
           "meaning": "Dan-Gun is named after the holy Dan-Gun, the legendary founder of Korea in the year 2333 B.C.",
           "primary": "#e0ab25",
           "secondary": "#e0ab25",
           "dan": "",
        },
        2: {
           "grade_num": 3,
           "grade": "greentag",
           "tul": "Do-San",
           "moves": 24,
           "meaning": "Do-San is the pseudonym of the patriot Ahn Chang-Ho (1876 - 1938). The 24 movements represent his entire life, which he devoted to furthering the education of Korea and its independence movement.",
           "primary": "#e0ab25",
           "secondary": "#11a84c",
           "dan": "",
        },
        3: {
           "grade_num": 4,
           "grade": "green",
           "tul": "Won-Hyo",
           "moves": 28,
           "meaning": "Won-Hyo was the noted monk who introduced Buddhism to the Silla Dynasty in the year 686 A.D.",
           "primary": "#11a84c",
           "secondary": "#11a84c",
           "dan": "",
        },
        4: {
           "grade_num": 5,
           "grade": "bluetag",
           "tul": "Yul-Gok",
           "moves": 38,
           "meaning": "Yul-Gok is the pseudonym of the great philosopher and scholar Yi I (1536-1584) nicknamed the 'Confucius of Korea'. The 38 movements of this pattern refer to his birthplace on 38 degrees latitude and the diagram represents scholar.",
           "primary": "#11a84c",
           "secondary": "#0a30ff",
           "dan": "",
        },
        5: {
           "grade_num": 6,
           "grade": "blue",
           "tul": "Joong-Gun",
           "moves": 32,
           "meaning": "Joong-Gun is named after the patriot Ahn Joong-Gun who assassinated Hiro Bumi Ito, the first Japanese governor-general of Korea, known as the man who played the leading part in the Korea-Japan merger. There are 32 movements in this pattern to represent Mr Ahn's age when he was executed at Lui-Shung prison (1910).",
           "primary": "#0a30ff",
           "secondary": "#0a30ff",
           "dan": "",
        },
        6: {
           "grade_num": 7,
           "grade": "redtag",
           "tul": "Toi-Gye",
           "moves": 37,
           "meaning": "Toi-Gye is the pen name of the noted scholar Yi Hwang (16th Century), an authority on Neo-Confucianism. The 37 movements of the pattern refer to his birthplace on 37 degrees latitude, and the diagram represents scholar.",
           "primary": "#0a30ff",
           "secondary": "#ff0500",
           "dan": "",
        },
        7: {
           "grade_num": 8,
           "grade": "red",
           "tul": "Hwa-Rang",
           "moves": 29,
           "meaning": "Hwa-Rang is named after the Hwa-Rang Youth Group, which originated in the Silla Dynasty in the early 7th century. The 29 movements refer to the 29th infantry division where Taekwon-Do developed into maturity.",
           "primary": "#ff0500",
           "secondary": "#ff0500",
           "dan": "",
        },
        8: {
           "grade_num": 9,
           "grade": "blacktag",
           "tul": "Choong-Moo",
           "moves": 30,
           "meaning": "Choong-Moo was the name given to the great Admiral Yi Soon-Sin of the Lee Dynasty. He was reputed to have invented the first armoured battleship (Kobukson) in 1592, which is said to be the precursor of the modern day submarine. The reason why this pattern ends in a left- hand attack is to symbolise his regrettable death, having no chance to show his unrestrained potentiality checked by the forced reservation of his loyalty to the King.",
           "primary": "#ff0500",
           "secondary": "#000000",
           "dan": "",
        },
        9: {
           "grade_num": 10,
           "grade": "dan1",
           "tul": "Kwang-Gae",
           "moves": 39,
           "meaning": "Kwang-Gae is named after the famous Gwang-Gae-Toh-Wang, the 19th King of the Koguryo Dynasty, who regained all the lost territories including the greater part of Manchuria. The diagram represents the expansion and recovery of lost territory. The 39 movements refer to the first two figures of 391 A.D., the year he came to the throne.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "I",
        },
        10: {
           "grade_num": 10,
           "grade": "dan1",
           "tul": "Po-Eun",
           "moves": 36,
           "meaning": "Po-Eun is the pseudonym of a loyal subject Chong Mong-Chu (1400) who was a famous poet, and whose poem \"I would not serve a second master though I might be crucified a hundred times\" is known to every Korean. He was also a pioneer in the field of physics. The diagram represents his unerring loyalty to the king and country towards the end of the Koryo Dynasty.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "I",
        },
        11: {
           "grade_num": 10,
           "grade": "dan1",
           "tul": "Ge-Baek",
           "moves": 44,
           "meaning": "Ge-Baek is named after Ge-Baek, a great general in the Baek-Je Dynasty (660 A.D.). The diagram represents his severe and strict military discipline.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "I",
        },
        12: {
           "grade_num": 11,
           "grade": "dan2",
           "tul": "Eui-Am",
           "moves": 45,
           "meaning": "Eui-Am is the pseudonym of Son Byong Hi, leader of the Korean independence movement on March 1, 1919. The 45 movements refer to his age when he changed the name of Dong Hak (Oriental Culture) to Chondo Kyo (Heavenly Way Religion) in 1905. The diagram represents his indomitable spirit, displayed while dedicating himself to the prosperity of his nation.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "II",
        },
        13: {
           "grade_num": 11,
           "grade": "dan2",
           "tul": "Choong-Jang",
           "moves": 52,
           "meaning": "Choong-Jang is the pseudonym given to General Kim Duk Ryang who lived during the Yi Dynasty, 14th century. This pattern ends with a lefthanded attack to symbolize the tragedy of his death at 27 in prison before he was able to reach full maturity.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "II",
        },
        14: {
           "grade_num": 11,
           "grade": "dan2",
           "tul": "Juche",
           "moves": 45,
           "meaning": "Juche is a philosophical idea that man is the master of everything and decides everything, in other words, the idea that man is the master of the world and his own destiny. It is said that this idea was rooted in Baekdu Mountain which symbolises the spirit of the Korean people. The diagram represents Baekdu Mountain.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "II",
        },
        15: {
           "grade_num": 12,
           "grade": "dan3",
           "tul": "Sam-Il",
           "moves": 33,
           "meaning": "Sam-Il denotes the historical date of the independence movement of Korea which began throughout the country on March 1, 1919. The 33 movements in the pattern stand for the 33 patriots who planned the movement.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "III",
        },
        16: {
           "grade_num": 12,
           "grade": "dan3",
           "tul": "Yoo-Sin",
           "moves": 68,
           "meaning": "Yoo-Sin is named after General Kim Yoo Sin, a commanding general during the Silla Dynasty. The 68 movements refer to the last two figures of 668 A.D., the year Korea was united. The ready posture signifies a sword drawn on the right rather than the left side, symbolising Yoo Sin's mistake of following his king's orders to fight with foreign forces against his own nation.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "III",
        },
        17: {
           "grade_num": 12,
           "grade": "dan3",
           "tul": "Choi-Yong",
           "moves": 46,
           "meaning": "Choi-Yong is named after General Choi Yong, Premier and Commanderin-Chief of the Armed forces during the 14th century Koryo Dynasty. Choi Yong was greatly respected for his loyalty, patriotism, and humility. He was executed by his subordinate commanders headed by General Yi Sung Gae, who later became the first king of the Yi Dynasty.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "III",
        },
        18: {
           "grade_num": 13,
           "grade": "dan4",
           "tul": "Yon-Gae",
           "moves": 49,
           "meaning": "Yon-Gae is named after a famous general during the Koguryo Dynasty, Yon Gae Somoon. The 49 movements refer to the last two figures of 649 A.D., the year he forced the Tang Dynasty to quit Korea after destroying nearly 300,000 of their troops at Ansi Sung.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "IV",
        },
        19: {
           "grade_num": 13,
           "grade": "dan4",
           "tul": "Ul-Ji",
           "moves": 42,
           "meaning": "Ul-Ji is named after the general Ul-Ji Moon Dok who successfully defended Korea against a Tang's invasion force of nearly one million soldiers led by Yang Je in 612 A.D., Ul-Ji employing hit and run guerilla tactics, was able to decimate a large percentage of the force. The diagram represents his surname. The 42 movements represent the author's age when he designed the pattern.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "IV",
        },
        20: {
           "grade_num": 13,
           "grade": "dan4",
           "tul": "Moon-Moo",
           "moves": 61,
           "meaning": "Moon-Moo honours the 30th king of the Silla Dynasty. His body was buried near Dae Wang Am (Great King's Rock). According to his will, the body was placed near the sea, \"Where my soul shall forever defend my land against the Japanese.\" It is said that the Sok Gul Am (Stone Cave) was built to guard his tomb. The Sok Gul Am is a fine example of the culture of the Silla Dynasty. The 61 movements in this pattern symbolise the last two figures of 661 A.D. when Moon Moo came to the throne.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "IV",
        },
        21: {
           "grade_num": 14,
           "grade": "dan5",
           "tul": "So-San",
           "moves": 72,
           "meaning": "So-San is the pseudonym of the great monk Choi Hyong Ung (1520- 1604) during the Yi Dynasty. The 72 movements refer to his age when he organised a corps of monk soldiers with the assistance of his pupil Sa Myung Dang. The monk soldiers helped repulse the Japanese pirates who overran most of the Korean peninsula in 1592.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "V",
        },
        22: {
           "grade_num": 14,
           "grade": "dan5",
           "tul": "Se-Jong",
           "moves": 24,
           "meaning": "Se-Jong is named after the greatest Korean king, Se-Jong, who invented the Korean alphabet in 1443, and was also a noted meteorologist. The diagram represents the king, while the 24 movements refer to the 24 letters of the Korean alphabet.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "V",
        },
        23: {
           "grade_num": 15,
           "grade": "dan6",
           "tul": "Tong-Il",
           "moves": 56,
           "meaning": "Tong-Il denotes the resolution of the unification of Korea which has been divided since 1945. The diagram symbolises the homogenous race.",
           "primary": "#000000",
           "secondary": "#e0ab25",
           "dan": "VI",
        }
    };

    var numberList = [];
    for (var i = minimum; i <= maximum; i++) {
      numberList.push(i);
    };

   var numberListFiltered = numberList.filter(item => !repeats.includes(item));

   document.getElementById("wheel_content").style.opacity = 0;

  setTimeout(function(){ 

   // IF THERE ARE PATTERNS LEFT...
   if (numberListFiltered.length > 0) {

      var randomNumber = numberListFiltered[Math.floor(Math.random()*numberListFiltered.length)];
      var dataFiltered = data[randomNumber]

      document.getElementById("wheel_tul_span").innerHTML = dataFiltered.tul
      document.getElementById("wheel_moves_span").innerHTML = dataFiltered.moves
      document.getElementById("wheel_belt_one").style.background = dataFiltered.primary
      document.getElementById("wheel_belt_two").style.background = dataFiltered.secondary
      document.getElementById("wheel_belt_two_span").innerHTML = dataFiltered.dan
      document.getElementById("wheel_belt_three").style.background = dataFiltered.primary
      document.getElementById("wheel_meaning_span").innerHTML = dataFiltered.meaning

      if (testToggle === 1) {
       document.getElementById("wheel_moves_span").style.backgroundColor = "#666666";
       document.getElementById("wheel_meaning_span").style.backgroundColor = "#666666";
       document.getElementById("wheel_moves_span").style.color = "#666666";
       document.getElementById("wheel_meaning_span").style.color = "#666666";
      }

      if (repeatsToggle === 1) {
       repeats.push(randomNumber);
      }

  // IF THERE ARE NO MORE PATTERNS LEFT...
  } else {
      document.getElementById("wheel_content").style.display = "none";
      document.getElementById("end_card").style.display = "block";
  }

      document.getElementById("wheel_content").style.opacity = 1;
   },300);

}
