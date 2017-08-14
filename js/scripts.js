$(document).ready(function(){
  $('.btn').click(function(e){
    var counter = 0;
    e.preventDefault();
    var inputText = document.getElementById('one').value;
    var sentence = inputText.split(' ')
      .reduce(function(wordCount, currentWord){
        if(typeof wordCount[currentWord] !== "undefined") {
          wordCount[currentWord]++;
          return wordCount;
        } else {
          wordCount[currentWord]=1;
          return wordCount;
        }
      }, {});

    var wordArray = [];
    for(var x in sentence){
      $('.output ul').html('<li>' + x  +  ' ' + sentence[x] + '</li>');
      wordArray.push(x + ": ", + sentence[x]);
    }
    console.log(wordArray);
  });
});
