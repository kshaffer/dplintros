// Lists of English words that rhyme with line-ending words in Green Eggs and Ham
// These are JavaScript arrays

//var names = ['Ravi', 'Annicka', 'Alaina', 'Robert', 'Mitchell', 'Erica', 'Kimberly', 'Alfonso', 'Krissy', 'Kris', 'Susan', 'Ben', 'Brenda', 'Kristin', 'Florence', 'Neil', 'Scott'];
var names = ['Lee', 'Ravi', 'Laurie', 'Wendy', 'Jessica', 'Mitchell', 'Rachel', 'Sarah', 'Autumm', 'Angel', 'Andrew', 'Alphonso', 'Nancy', 'Kris', 'Clelia', 'Ben', 'Kristin', 'Florence', 'Neil', 'Scott']

var instructions_text = ['if nominative have adjective own domain on the web.', 'where nominative are from.', 'what social network(s) nominative inhabit (if any).', 'if nominative have experience writing code.', 'if nominative have experience working with statistics or "big data".', 'why nominative decided to come to D3.', 'who (if anyone) nominative already know at D3.', 'what nominative hope to get out of adjective experience at D3.', 'what adjective favorite brand of toothpaste is.', 'who adjective hero is.', 'whose work nominative admire most in the world of education (technology).', 'what is the most valuable skill or knowledge nominative can share with this group.', 'who has most influenced adjective work as an educator/technologist.', 'how secure adjective digital identity is.'];
// , 'how scary learning to code sounds to dative on a scale of 1 to 10 (10 being the scariest).', 'if nominative read any of the suggested readings before coming to DPLI. :)', 'how fun learning to code sounds to dative on a scale of 1 to 10 (10 being the funnest).'

// The text of Green Eggs and Ham, in HTML code

var original_text = '<p><em>Wait for it...</em></p>';

// This variable makes the recycleInstructions() function repeat by default.

var keep_going = true;

// This function puts the GE&S text into the web page wherever it finds an element with ID 'shakespeare'

function insertText () {
  document.getElementById('instructions').innerHTML = original_text;
}

// The main function, which finds a random word in the text and if it finds it in one of the lists above,
// replaces it with a different word from that list

function recycleInstructions() {

  // Construct an HTML text block with instructions for each person in set of names

  var instructions_text_box = ''

  // Construct an instruction for each person in the set of names

  for (name in names) {
    var random_index = Math.floor(Math.random() * instructions_text.length);
    var random_instruction = instructions_text[random_index]

    var random_index = Math.floor(Math.random() * names.length);
    var random_name = names[random_index]

    while (names[name] == random_name) {
      var random_index = Math.floor(Math.random() * names.length);
      var random_name = names[random_index]
    }

    var sentence_pre = '<p><strong>' + names[name] + ',</strong> ask ' + random_name + ' ' + random_instruction + '</p>'
/*    if (random_name == 'Bob' || random_name == 'Cartland' || random_name == 'Kris' || random_name == 'Mark' || random_name == 'Timothy' || random_name == 'Zachary') {
      pronouns = ['he', 'his', 'him']
    } else if (random_name == 'Adrienne' || random_name == 'Angie' || random_name == 'Anqi' || random_name == 'Evelyn' || random_name == 'Hiroyo' || random_name == 'Kim' || random_name == 'Lee') {
      pronouns = ['she', 'her', 'her']
    } else {
      pronouns = ['Deb', 'Deb\'s', 'Deb']
    }
    */
    pronouns = ['they', 'their', 'them']
    var sentence = sentence_pre.replace(/nominative/g, pronouns[0]).replace(/adjective/g, pronouns[1]).replace(/dative/g, pronouns[2])
    var instructions_text_box = instructions_text_box + sentence
  }

  // Replace the whole text block on the web page with the new text block (without reloading the page)

  document.getElementById('instructions').innerHTML = instructions_text_box;

  // Repeat the proess until keep_going = false.

  if (keep_going == true) {
    setTimeout('recycleInstructions()', 30000);
  }

}

// A function to stop the replace_random_word() function from looping.

function stop () {
  keep_going = false;
}
