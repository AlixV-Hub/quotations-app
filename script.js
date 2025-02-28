let quote = document.getElementById("citation");
let author = document.getElementById("name");
let bouton = document.getElementById("boutonAjout");
let nombreCitation = document.getElementById("nombreCitation");
let quoteCount = 0;


function addQuote() { 
    // Créer un élément de citation
    const newQuote = document.createElement("div");
    newQuote.classList.add("quote");
    // Ajouter la citation à l'élément de citation
    newQuote.innerText = quote;
    // Créer un élément d'auteur
    const newAuthor = document.createElement("div");
    newAuthor.classList.add("author");
    // Ajouter l'auteur à l'élément d'auteur
    newAuthor.innerText = author;
    // Ajouter la citation et l'auteur à l'élément de citation
    newQuote.appendChild(newAuthor);
    // Ajouter la citation à la liste de citations
    quote.appendChild(newQuote);
    }

 console.log("coucou")
bouton.addEventListener("click", () => {
    quoteCount+=1;
    addQuote();
  });
  console.log("prout")
  nombreCitation.innerHtml = `Aujourd'hui il y a : ${quoteCount} citations`;


console.log(addQuote())





