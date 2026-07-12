//============================
// Load Footer
//============================

const footer = document.getElementById("footer");

if (footer) {

    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        });

}

//============================
// Copy IEEE Citation
//============================

document.querySelectorAll(".copy-citation").forEach(button => {

    button.addEventListener("click", () => {

        navigator.clipboard.writeText(button.dataset.citation);

        const originalText = button.innerHTML;

        button.innerHTML = "<i class='fas fa-check'></i> Citation Copied!";

        button.classList.remove("btn-outline-secondary");
        button.classList.add("btn-success");

        setTimeout(() => {

            button.innerHTML = originalText;
            button.classList.remove("btn-success");
            button.classList.add("btn-outline-secondary");

        }, 2000);

    });

});

//============================
// Publication Search
//============================

const search=document.getElementById("publicationSearch");
const filter=document.getElementById("publicationFilter");

function filterPublications(){

const searchValue=search.value.toLowerCase();
const filterValue=filter.value;

document.querySelectorAll(".publication-card").forEach(card=>{

const text=card.innerText.toLowerCase();

const year=card.dataset.year;

const type=card.dataset.type;

const searchMatch=text.includes(searchValue);

const filterMatch=

filterValue==="all"

||

filterValue===year

||

filterValue===type;

card.style.display=

(searchMatch && filterMatch)

?

"block"

:

"none";

});

}

if(search){

search.addEventListener("keyup",filterPublications);

}

if(filter){

filter.addEventListener("change",filterPublications);

}