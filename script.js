function filterNGO(category){

    const cards =
    document.querySelectorAll(".ngo-card");

    cards.forEach(card => {

        if(
            category === "all" ||
            card.dataset.category === category
        ){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }
    });
}

function searchNGO(){

    const input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    const cards =
    document.querySelectorAll(".ngo-card");

    cards.forEach(card => {

        const title =
        card.querySelector("h3")
        .innerText
        .toLowerCase();

        if(title.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }
    });
}

function openPopup(){

    document.getElementById("popup")
    .style.display = "flex";
}

function closePopup(){

    document.getElementById("popup")
    .style.display = "none";
}

function submitDonation(){

    alert(
        "Thank you for supporting the NGO!"
    );

    closePopup();
}