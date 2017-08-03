// Lists of English words that rhyme with line-ending words in Green Eggs and Ham
// These are JavaScript arrays

var names = ['Adrienne', 'Asako', 'Sharon', 'Ivonne', 'Amanda', 'Lyra', 'Daniel', 'Theresa', 'Tim', 'Dan'];

var instructions_text = ['if nominative has adjective own domain on the web.', 'where nominative is from.', 'what social network(s) nominative inhabits (if any).', 'if nominative has experience writing code.', 'if nominative has experience working with statistics or "big data".', 'why nominative decided to come to DPLI.', 'who (if anyone) nominative already knows at DPLI.', 'what nominative hopes to get out of adjective experience at DPLI/Data Literacies.', 'what adjective favorite brand of toothpaste is.', 'who adjective hero is.', 'whose work nominative admires most in the world of education (technology).', 'what is the most valuable skill or knowledge nominative can share with the Data Literacies track this week.', 'who has most influenced adjective work as an educator/technologist.', 'how scary learning to code sounds to dative on a scale of 1 to 10 (10 being the scariest).', 'how fun learning to code sounds to dative on a scale of 1 to 10 (10 being the funnest).'];


// The text of Green Eggs and Ham, in HTML code

var original_text = '<p><em>Wait for it...</em></p>';

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

    if (names[name] == random_name) {
      var random_index = Math.floor(Math.random() * names.length);
      var random_name = names[random_index]
    }

    var sentence_pre = '<p><strong>' + names[name] + ',</strong> ask ' + random_name + ' ' + random_instruction + '</p>'
    if (random_name == 'Dan' || random_name == 'Daniel' || random_name == 'Tim') {
      pronouns = ['he', 'his', 'him']
    } else {
      pronouns = ['she', 'her', 'her']
    }
    console.log(random_name)
    console.log(pronouns[0])
    var sentence = sentence_pre.replace(/nominative/g, pronouns[0]).replace(/adjective/g, pronouns[1]).replace(/dative/g, pronouns[2])
    var instructions_text_box = instructions_text_box + sentence
  }

  // Replace the whole text block on the web page with the new text block (without reloading the page)

  document.getElementById('instructions').innerHTML = instructions_text_box;

}
