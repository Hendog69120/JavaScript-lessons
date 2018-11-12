let aElt = qs(".nav-item");
let lexicalsElt = document.getElementById("lexicals")

aElt.addEventListener('click', function(e) {
    
    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/A", (response) => {
        let lexical = JSON.parse(response);
        console.log(lexical);

        for (let i = 0; i < lexical.length; i++) {

            let wordElt = document.createElement("h2");
            wordElt.textContent = lexical[i].term;

            console.log(lexical[i].term);
            
            let definitionElt = document.createElement("p");
            definitionElt.textContent = lexical[i].definition ;
        
            console.log(lexical[i].definition);
            
        }   
           

            e.preventDefault(); 
    });  
    
});
    




