$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    var counter = 0;
    var inputText = document.getElementById('one').value;
    var sentence = inputText.split(' ')
      .reduce(function(wordCount, currentWord){
        if(typeof wordCount[currentWord] !== "undefined") {
          wordCount[currentWord]++;
          return wordCount;
        } else {
          wordCount[currentWord] = 1;
          return wordCount;
        }
      }, {});
      
    var wordArray = [];
    for(var x in sentence){
      wordArray.push('<li>' + x + ": " + sentence[x] + '</li>');
    }
    wordArray.forEach(function(word){
      var check = $('.output ul').html(wordArray.join(''));
    });
  });
});
