document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");
    const menuLinks = document.querySelectorAll(".menu-list a");
    const languageLinks = document.querySelectorAll(".language-box a");

    menuBtn.addEventListener("click", () => {
        modal.style.display = "flex"; // Ustawiamy display na flex
        setTimeout(() => {
            modal.classList.add("modal-visible");
        }, 10); // Krótkie opóźnienie, aby animacja działała poprawnie
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("modal-visible");
        setTimeout(() => {
            modal.style.display = "none";
        }, 500); // Dopasuj czas do czasu trwania animacji
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("modal-visible");
            setTimeout(() => {
                modal.style.display = "none";
            }, 500); // Dopasuj czas do czasu trwania animacji
        }
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            modal.classList.remove("modal-visible");
            setTimeout(() => {
                modal.style.display = "none";
            }, 500); // Dopasuj czas do czasu trwania animacji
        });
    });

    languageLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Zapobiega domyślnemu zachowaniu linków
            modal.classList.remove("modal-visible");
            setTimeout(() => {
                modal.style.display = "none";
                // Możesz dodać tu logikę do zmiany języka
            }, 500); // Dopasuj czas do czasu trwania animacji
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const degustations = [
        {
            id: 1,

            img: "img/degustations/runcata.jpeg",
            title: "Degustacja pionowa Runcata Superiore od rocznika 2016",
            shortDescription:
                "Zapraszamy na degustację pionową 5 win Runcata Soave Superiore (z winnicy Dal Cero) od rocznika 2016. Wspólnie prześledzimy ewolucję tego niesamowitego wina, które od lat otrzymuje najwyższą notę trzech kieliszków przez Gambero Rosso oraz ponad 90 punktów od Jamesa Sucklinga. Odpowiemy również m.in. na pytania: Czy jest optymalny moment picia tego beczkowanego wina? Lepsze jest 3 letnie czy 8 letnie?",
            description: `Dal Cero Runcata Soave Superiore to wino ze szczepu garganega, które dojrzewa w beczkach przez 12 miesięcy – dość długo, ale są to duże, dość neutralne beczki (nawet o pojemności 20 hl), do tego wino pozostaje w kontakcie z osadem drożdżowym, co pozwala wyewoluować jego aromatom w niesamowitą stronę. <br>
            <br>Miejsce pochodzenia wina jest również ciekawe. Winnicę Corte Giacobbe sami winiarze zwą ziemią o tysiącletnim smaku –  leży on wszak u podnóży dwóch wygasłych wulkanów – Calvarina i Crocetta. Gleby pochodzenia wulkanicznego dają winogronom tendencję do tworzenia win o charakterystycznych, nieco tajemniczych nutach mineralnych – z łatwością znajdziecie je w winach z tej części winnic rodziny Dal Cero.`,
            leaders: "",
            ticket: "129 PLN za 5 kieliszków",
            place: `Wine Bar Republiki Wina <br>ul. Ks Skorupki 5<br>Warszawa`,
            wineList: [],
            link: "rejestracja-na-kurs-winiarski,p20.html?use_service_category_id=4625&use_service_id=56872",
            date: "20/06/piątek | godzina 19:00",
        },
        {
            id: 2,
            img: "img/degustations/korsyka.jpeg",
            title: "Korsyka z Anią Fotowicz. Degustacja win.",
            shortDescription:
                "Zaczynamy serię degustacji o ciekawych regionach winiarskich Francji. I to zaczynamy z wysokiego C, bo od Corse, czyli Korsyki.",
            description:
                "Poznacie apelacje takie jak Partimonio, Cap Corse czy Ajaccio, spróbujecie lokalnych szczepów o tak ciekawych nazwach jak biancu gentile, niellucciu, sciaccarellu, posmakujecie korsykańskich specjałów.",
            leaders: `Degustację poprowadzi Ania Fotowicz – doradca do spraw eksportu i wykładowca z 9-letnim doświadczeniem w branży winiarskiej. Od 2014 roku pracuje we francuskiej agencji rządowej Business France, wspierającej rozwój francuskich regionów winiarskich. Z Korsyka związana od 4 lat. Doradza zrzeszeniu producentów CIV Corse w budowaniu strategii rozwoju eksportu oraz koordynuje akcje marketingowe promujace winiarzy korsykańskich w USA i Kanadzie. W maju 2022 roku uzyskała certyfikat Wine and Spirit Education Trust (WSET) na poziomie 4 (diploma). Jest wykładowcą WSET 3 oraz French Wine Scholar. <br> Jako członkini Stowarzyszenia Kobiety i Wino oraz członkini wspierająca Stowarzyszenia Sommelierów Polskich, prowadzi degustacje, szkolenia winiarskie oraz doradza restauracjom w doborze win, promując kulturę picia wina w Polsce. Pisała dla „Czasu Wina”, sędziowała w konkursach winiarskich: International Rosé Championship oraz Cool Climate Wines.`,
            ticket: "139 PLN 6 win i przystawki",
            place: `Wine Bar Republiki Wina <br>ul. Ks Skorupki 5<br>Warszawa`,
            wineList: [],
            link: "rejestracja-na-kurs-winiarski,p20.html?use_service_category_id=4625&use_service_id=56872",
            date: "21/06/sobota | godzina 19:00",
        },
        {
            id: 3,
            img: "img/degustations/korsyka.jpeg",
            title: "Korsyka z Anią Fotowicz. Degustacja win.",
            shortDescription:
                "Zaczynamy serię degustacji o ciekawych regionach winiarskich Francji. I to zaczynamy z wysokiego C, bo od Corse, czyli Korsyki.",
            description:
                "Poznacie apelacje takie jak Partimonio, Cap Corse czy Ajaccio, spróbujecie lokalnych szczepów o tak ciekawych nazwach jak biancu gentile, niellucciu, sciaccarellu, posmakujecie korsykańskich specjałów.",
            leaders: `Degustację poprowadzi Ania Fotowicz – doradca do spraw eksportu i wykładowca z 9-letnim doświadczeniem w branży winiarskiej. Od 2014 roku pracuje we francuskiej agencji rządowej Business France, wspierającej rozwój francuskich regionów winiarskich. Z Korsyka związana od 4 lat. Doradza zrzeszeniu producentów CIV Corse w budowaniu strategii rozwoju eksportu oraz koordynuje akcje marketingowe promujace winiarzy korsykańskich w USA i Kanadzie. W maju 2022 roku uzyskała certyfikat Wine and Spirit Education Trust (WSET) na poziomie 4 (diploma). Jest wykładowcą WSET 3 oraz French Wine Scholar. <br> Jako członkini Stowarzyszenia Kobiety i Wino oraz członkini wspierająca Stowarzyszenia Sommelierów Polskich, prowadzi degustacje, szkolenia winiarskie oraz doradza restauracjom w doborze win, promując kulturę picia wina w Polsce. Pisała dla „Czasu Wina”, sędziowała w konkursach winiarskich: International Rosé Championship oraz Cool Climate Wines.`,
            ticket: "139 PLN 6 win i przystawki",
            place: `Wine Bar Republiki Wina <br>ul. Ks Skorupki 5<br>Warszawa`,
            wineList: [],
            link: "rejestracja-na-kurs-winiarski,p20.html?use_service_category_id=4625&use_service_id=56872",
            date: "21/06/sobota | godzina 19:00",
        },
        {
            id: 4,
            img: "img/degustations/korsyka.jpeg",
            title: "Korsyka z Anią Fotowicz. Degustacja win.",
            shortDescription:
                "Zaczynamy serię degustacji o ciekawych regionach winiarskich Francji. I to zaczynamy z wysokiego C, bo od Corse, czyli Korsyki.",
            description:
                "Poznacie apelacje takie jak Partimonio, Cap Corse czy Ajaccio, spróbujecie lokalnych szczepów o tak ciekawych nazwach jak biancu gentile, niellucciu, sciaccarellu, posmakujecie korsykańskich specjałów.",
            leaders: `Degustację poprowadzi Ania Fotowicz – doradca do spraw eksportu i wykładowca z 9-letnim doświadczeniem w branży winiarskiej. Od 2014 roku pracuje we francuskiej agencji rządowej Business France, wspierającej rozwój francuskich regionów winiarskich. Z Korsyka związana od 4 lat. Doradza zrzeszeniu producentów CIV Corse w budowaniu strategii rozwoju eksportu oraz koordynuje akcje marketingowe promujace winiarzy korsykańskich w USA i Kanadzie. W maju 2022 roku uzyskała certyfikat Wine and Spirit Education Trust (WSET) na poziomie 4 (diploma). Jest wykładowcą WSET 3 oraz French Wine Scholar. <br> Jako członkini Stowarzyszenia Kobiety i Wino oraz członkini wspierająca Stowarzyszenia Sommelierów Polskich, prowadzi degustacje, szkolenia winiarskie oraz doradza restauracjom w doborze win, promując kulturę picia wina w Polsce. Pisała dla „Czasu Wina”, sędziowała w konkursach winiarskich: International Rosé Championship oraz Cool Climate Wines.`,
            ticket: "139 PLN 6 win i przystawki",
            place: `Wine Bar Republiki Wina <br>ul. Ks Skorupki 5<br>Warszawa`,
            wineList: [],
            link: "rejestracja-na-kurs-winiarski,p20.html?use_service_category_id=4625&use_service_id=56872",
            date: "21/06/sobota | godzina 19:00",
        },
        // Możesz dodać więcej obiektów degustacji w ten sam sposób
    ];
    const container = document.querySelector(".container_for_degustations");

    function createDegustationElement(degustation) {
        const div = document.createElement("div");
        div.classList.add("degustation");
        div.id = `degustation-${degustation.id}`;

        const img = document.createElement("img");
        img.src = degustation.img;
        div.appendChild(img);

        const title = document.createElement("h2");
        title.textContent = degustation.title;
        div.appendChild(title);

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date-container");

        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = degustation.date;
        dateDiv.appendChild(date);

        div.appendChild(dateDiv);

        const hr = document.createElement("hr");
        div.appendChild(hr);

        const shortDescription = document.createElement("p");
        shortDescription.classList.add("shortDescription");
        shortDescription.textContent = degustation.shortDescription;
        div.appendChild(shortDescription);

        const moreInfo = document.createElement("div");
        moreInfo.classList.add("more-info");

        const description = document.createElement("p");
        description.classList.add("description");
        description.innerHTML = degustation.description;
        moreInfo.appendChild(description);

        const leaders = document.createElement("p");
        leaders.classList.add("leaders");
        leaders.innerHTML = degustation.leaders;
        moreInfo.appendChild(leaders);

        const ticket = document.createElement("p");
        ticket.textContent = `Cena: ${degustation.ticket}`;
        moreInfo.appendChild(ticket);

        const wineList = document.createElement("ul");
        degustation.wineList.forEach((wine) => {
            const li = document.createElement("li");
            li.textContent = wine;
            wineList.appendChild(li);
        });
        moreInfo.appendChild(wineList);

        const place = document.createElement("p");
        place.classList.add("place");
        place.innerHTML = `${degustation.place}`;
        moreInfo.appendChild(place);

        div.appendChild(moreInfo);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const moreButton = document.createElement("button");
        moreButton.classList.add("more-button");
        moreButton.textContent = "WIĘCEJ ↓";
        moreButton.addEventListener("click", () => {
            div.classList.toggle("expanded");
            moreInfo.classList.toggle("visible");
            moreButton.textContent = moreInfo.classList.contains("visible")
                ? "MNIEJ ↑"
                : "WIĘCEJ ↓";
        });
        buttonContainer.appendChild(moreButton);

        const buyButton = document.createElement("a");
        const urlParams = new URLSearchParams(degustation.link.split("?")[1]);
        const serviceCategoryId = urlParams.get("use_service_category_id");
        const serviceId = urlParams.get("use_service_id");

        buyButton.href = `form.html?use_service_category_id=${serviceCategoryId}&use_service_id=${serviceId}`;
        buyButton.textContent = "Kup bilet";
        buttonContainer.appendChild(buyButton);

        div.appendChild(buttonContainer);

        return div;
    }

    degustations.forEach((degustation) => {
        const degustationElement = createDegustationElement(degustation);
        container.appendChild(degustationElement);
    });
});


var bookero_config = {
    id: "d8p2gugoEpXN",
    container: "bookero",
    type: "standard",
    position: "",
    plugin_css: false,
    lang: "pl",
};

(function () {
    var d = document,
        s = d.createElement("script");
    s.src = "https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js";
    d.body.appendChild(s);
})();

document.addEventListener("DOMContentLoaded", function () {
    // Pobierz parametry z URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceCategoryId = urlParams.get("use_service_category_id");
    const serviceId = urlParams.get("use_service_id");

    // Sprawdź, czy oba parametry są obecne
    if (serviceCategoryId && serviceId) {
        // Ustaw konfigurację Bookero z pobranymi parametrami
        var bookero_config = {
            id: "d8p2gugoEpXN",
            container: "bookero",
            type: "standard",
            position: "",
            plugin_css: false,
            lang: "pl",
            use_service_category_id: serviceCategoryId, // Przekaż ID kategorii usługi
            use_service_id: serviceId, // Przekaż ID usługi
        };

        // Załaduj skrypt Bookero
        (function () {
            var d = document,
                s = d.createElement("script");
            s.src = "https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js";
            d.body.appendChild(s);
        })();
    }
});
