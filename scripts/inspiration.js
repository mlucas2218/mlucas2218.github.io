/**
 * index.js
 */

/* Global variable: Twitter hashtags */
var twitterHashtagsEn = "inspiration";
var twitterHashtagsEs = "inspiración";
var twitterHashtagsFr = "inspiration";
var twitterHashtags = twitterHashtagsEn;

/* Global variable: arrays of quotes */
var quoteArrayEn = [{id: 0, message: "To keep the body in good health is a duty; otherwise, we shall not be able to keep our mind strong and clean.", author: "Buddha"},
                    {id: 1, message: "I don't measure a man's success by how high he climbs but how he bounces when he hits bottom.", author: "George S. Patton"},
                    {id: 2, message: "Good things come to those who wait, but better things come to those who go out and get them.", author: "Anonymous"},
                    {id: 3, message: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle"},
                    {id: 4, message: "We must be willing to get rid of the life we have planned so as to have the life that is waiting for us.", author: "Joseph Campbell"},
                    {id: 5, message: "You cannot solve a problem from the same consciousness that created it. You must learn to see the world anew.", author: "Albert Einstein"},
                    {id: 6, message: "Challenges are what make life interesting, and overcoming them is what makes life meaningful.", author: "Joshua J. Marine"},
                    {id: 7, message: "Life is either a great adventure or nothing.", author: "Helen Keller"},
                    {id: 8, message: "And at the end of the day, your feet should be dirty, your hair messy, and your eyes sparkling.", author: "Shanti"},
                    {id: 9, message: "It is only in adventure that some people succeed in knowing themselves, in finding themselves.", author: "Andre Gide"},
                    {id: 10, message: "A man travels the world over in search of what he needs, and returns home to find it.", author: "George Moore"},
                    {id: 11, message: "The most important things in life aren't things.", author: "Anonymous"},
                    {id: 12, message: "Remember that the happiest people are not those getting more, but those giving more.", author: "H. Jackson Brown, Jr."},
                    {id: 13, message: "Difficulties strengthen the mind, as labor does the body.", author: "Lucius Annaeus Seneca"},
                    {id: 14, message: "Be the change you wish to see in the world.", author: "Mahatma Gandhi"}];
var quoteArrayEs = [{id: 0, message: "Mantener el cuerpo en buena salud es un deber; si no, no seremos capaces de mantener la mente fuerte y clara.", author: "Buddha"},
                    {id: 1, message: "No mido el éxito de un hombre por lo alto que llega, sino por lo alto que rebota cuando toca fondo.", author: "George S. Patton"},
                    {id: 2, message: "Las cosas buenas les llegan a quienes las esperan, pero las mejores cosas a quienes van por ellas.", author: "Anónimo"},
                    {id: 3, message: "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto sino un hábito.", author: "Aristotle"},
                    {id: 4, message: "Debemos estar dispuestos a renunciar a la vida que hemos planeado para poder vivir la vida que nos espera.", author: "Joseph Campbell"},
                    {id: 5, message: "No podemos resolver problemas pensando con la misma consciencia con la cual los creamos.  Hay que aprender a ver al mundo como nuevo.", author: "Albert Einstein"},
                    {id: 6, message: "Los desafíos son lo que hace que la vida sea interesante y superarlos es lo que la hace significativa.", author: "Joshua J. Marine"},
                    {id: 7, message: "La vida es o una gran aventura o nada.", author: "Helen Keller"},
                    {id: 8, message: "Al final del día, deberías de tener los pies sucios, el pelo desordenado y los ojos brillantes.", author: "Shanti"},
                    {id: 9, message: "Es sólo en la aventura que algunas personas consiguen conocerse a sí mismas, encontrarse a sí mismas.", author: "Andre Gide"},
                    {id: 10, message: "Un hombre viaja por el mundo en busca de lo que necesita y vuelve a casa para encontrarlo.", author: "George Moore"},
                    {id: 11, message: "Las cosas más importantes en la vida no son cosas.", author: "Anónimo"},
                    {id: 12, message: "Recuerda que las personas más felices no son las que reciben más, sino las que dan más.", author: "H. Jackson Brown, Jr."},
                    {id: 13, message: "Las dificultades fortalecen la mente, como el trabajo lo hace con el cuerpo.", author: "Lucius Annaeus Seneca"},
                    {id: 14, message: "Sé el cambio que quieres ver en el mundo.", author: "Mahatma Gandhi"}];
var quoteArrayFr = [{id: 0, message: "Garder le corps en bonne santé est un devoir; sinon, nous ne pourrions pas garder notre esprit fort et clair.", author: "Bouddha"},
                    {id: 1, message: "Je ne mesure pas le succès d'un Homme à la hauture à laquelle il grimpe, mais à celle à laquelle il rebondit après avoir touché le fond.", author: "George S. Patton"},
                    {id: 2, message: "Les bonnes choses viennent à ceux qui savent attendre, mais les grandes choses viennent à ceux qui se lèvent et qui font tout pour y arriver.", author: "Anonyme"},
                    {id: 3, message: "Nous sommes ce qui nous faisons de manière répétée. L'excellence n'est donc pas une action, mais une habitude.", author: "Aristotle"},
                    {id: 4, message: "Tu dois abandonner la vie que tu as planifiée pour pouvoir vivre la vie qui t'attend.", author: "Joseph Campbell"}];
var quoteArray = quoteArrayEn;

/* Function: Display Random Quote */
function displayRandomQuote() {
  
  /* Randomly select and display a new quote */
  var rand = Math.floor(Math.random() * quoteArray.length);
  while ((quoteArray.length > 1) && (document.getElementById("quote").innerHTML.indexOf(quoteArray[rand].message) > -1)) {
    rand = Math.floor(Math.random() * quoteArray.length);
  }
  var randQuote = '<p class="quote-message">"' + quoteArray[rand].message + '"</p><p class="quote-author">– ' + quoteArray[rand].author + '</p>';
  document.getElementById("quote").innerHTML = randQuote;
  
  /* Update share button links */
  var twitterQuoteMessage = quoteArray[rand].message.replace(/ /g, '+').replace(/;/g, '%3B');
  if (quoteArray[rand].message.length + quoteArray[rand].author.length + 17 >= 142) {
    twitterQuoteMessage = twitterQuoteMessage.substr(0, 120 - quoteArray[rand].author.length) + "...";
  } else if (quoteArray[rand].message.length + quoteArray[rand].author.length + 17 == 141) {
    twitterQuoteMessage = twitterQuoteMessage.substr(0, quoteArray[rand].message.length - 1);
  }
  var twitterLinkQuote = '"' + twitterQuoteMessage + '" -' + quoteArray[rand].author;
  var twitterLink = document.getElementById("share-twitter");
  twitterLink.setAttribute("href", "https://twitter.com/intent/tweet?text=" + twitterLinkQuote + "&hashtags=" + twitterHashtags);
};

/* Function: Translate Page to English */
function translatePageToEnglish() {
  $("#title").html("Bite-Size Inspiration");
  $("#subtitle").html("Fill up on your daily inspiration, right here and now.")
  $("#get-quote").html("Tell me another");
  $("#translate-english").hide();
  $("#translate-spanish").show();
  $("#translate-french").show();
  quoteArray = quoteArrayEn;
  twitterHashtags = twitterHashtagsEn;
  displayRandomQuote();
};

/* Function: Translate Page to Spanish */
function translatePageToSpanish() {
  $("#title").html("Bocaditos de inspiración");
  $("#subtitle").html("Llenáte con inspiración al día, aquí y ahora mismo.")
  $("#get-quote").html("Decíme otra");
  $("#translate-english").show();
  $("#translate-spanish").hide();
  $("#translate-french").show();
  quoteArray = quoteArrayEs;
  twitterHashtags = twitterHashtagsEs;
  displayRandomQuote();
};

/* Function: Translate Page to French */
function translatePageToFrench() {
  $("#title").html("Les petits motifs d'inspiration");
  $("#subtitle").html("Remplis-toi avec l'inspiration du jour, ici même et maintenant.")
  $("#get-quote").html("Dis-moi un autre");
  $("#translate-english").show();
  $("#translate-spanish").show();
  $("#translate-french").hide();
  quoteArray = quoteArrayFr;
  twitterHashtags = twitterHashtagsFr;
  displayRandomQuote();
};

/* On document load... */
$(document).ready(function() {
  
  /* Set page to English and display random quote */
  translatePageToEnglish();
  
  /* On quote button click, display a quote at random */
  $("#get-quote").on("click", function() { displayRandomQuote(); });
  
  /* On translation button click, translate all text and buttons and set quote */
  $("#translate-english").on("click", function() { translatePageToEnglish(); });
  $("#translate-spanish").on("click", function() { translatePageToSpanish(); });
  $("#translate-french").on("click", function() { translatePageToFrench(); });
});
