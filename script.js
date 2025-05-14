
const monumentsData = {
    'tour-eiffel': {
        title: "Tour Eiffel",
        description: "La Tour Eiffel est un monument emblématique de Paris, construit en 1889 pour l'Exposition universelle. Elle mesure 330 mètres de haut et a été conçue par l’ingénieur Gustave Eiffel. D’abord critiquée pour son apparence, elle est aujourd’hui l’un des sites touristiques les plus visités au monde et un symbole de la France.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.983252221891!2d2.291906376340541!3d48.85837007133219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1746519513173!5m2!1sfr!2sfr"
    },
    'arc-de-triomphe': {
        title: "Arc de Triomphe",
        description: "L'Arc de Triomphe est un monument emblématique situé sur la Place Charles de Gaulle, à Paris, au bout des Champs-Élysées. Il a été commandé par Napoléon Bonaparte en 1806 pour célébrer ses victoires militaires. L'arc, conçu par l'architecte Jean Chalgrin, a été achevé en 1836, bien après la mort de Napoléon.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.182799754998!2d2.292452576465301!3d48.87379167133424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8f%3A0xd9b5676e112e643d!2sArc%20de%20Triomphe!5e0!3m2!1sfr!2sfr!4v1746519815774!5m2!1sfr!2sfr"
    },
    'mont-saint-michel': {
        title: "Mont-Saint-Michel",
        description: "Le Mont-Saint-Michel est une île rocheuse située en Normandie, au nord-ouest de la France, célèbre pour son abbaye médiévale perchée au sommet. Ce site unique est entouré de vastes marées qui, selon les saisons, isolent l'île du continent. L'abbaye, dédiée à l'archange Saint Michel, a été fondée au 8e siècle et est un chef-d'œuvre de l'architecture gothique et romane.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10548.939293873109!2d-1.538107822412267!3d48.624488324207086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ea8d67c9ceeb3%3A0xc5834ce47e0dc3fe!2s50170%20Le%20Mont-Saint-Michel!5e0!3m2!1sfr!2sfr!4v1746520250818!5m2!1sfr!2sfr"
    },
    'notre-dame': {
        title: "Notre-Dame de Paris",
        description: "Notre-Dame de Paris est une célèbre cathédrale située sur l'Île de la Cité, au cœur de Paris. Construite entre 1163 et 1345, c'est un chef-d'œuvre de l'architecture gothique. La cathédrale est célèbre pour ses voutes en ogives, ses grandes rosaces, et ses sculptures qui décorent l'extérieur, notamment sur le portail principal.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10501.2261696867!2d2.3475100487772087!3d48.85236469492929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e39dd448af%3A0xe95d8ec82cfaf643!2sNotre%20Dame%2C%20Paris!5e0!3m2!1sfr!2sfr!4v1746520220826!5m2!1sfr!2sfr"
    },
    'versailles': {
        title: "Château de Versailles",
        description: "Le Château de Versailles est l’un des monuments les plus célèbres de France, situé à une vingtaine de kilomètres de Paris. Ancienne résidence royale, il a été transformé et agrandi par Louis XIV, le Roi Soleil, au XVIIe siècle pour en faire un symbole de la puissance absolue de la monarchie française.Il est célèbre pour ses jardins magnifiques, la Galerie des Glaces, ses fontaines et son architecture grandiose. Le château a été un centre du pouvoir politique français jusqu’à la Révolution de 1789.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21022.77651489771!2d2.0985952262353145!3d48.80389743066994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67db475f420bd%3A0x869e00ad0d844aba!2s78000%20Versailles!5e0!3m2!1sfr!2sfr!4v1746520415555!5m2!1sfr!2sfr"
    }
};

// Fonction qui affiche les informations du monument
function showMonumentInfo(id) {
    const monument = monumentsData[id];
    if (!monument) return;

    document.getElementById("monument-description").innerHTML = `
        <h2>${monument.title}</h2>
        <p>${monument.description}</p>
    `;

    // Insertion de l'iframe pour afficher la carte du monument
    document.getElementById("map-container").innerHTML = `
        <iframe src="${monument.mapUrl}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    // la section d'information
    document.getElementById("monument-info").classList.add("visible");
}

// Fonction pour la sélection des images en grisé
function updateImageSelection(selectedId) {
    document.querySelectorAll('.monument').forEach(element => {
        const img = element.querySelector('img');
        const id = element.getAttribute('data-id');

        if (id === selectedId) {
            img.classList.remove('grayscale');
            showMonumentInfo(id);
        } else {
            img.classList.add('grayscale');
        }
    });
}


// Ajouter des événements pour afficher les informations et la carte
document.querySelectorAll('.monument').forEach(element => {
    element.querySelector('img').addEventListener('click', () => {
        const id = element.getAttribute('data-id');
        updateImageSelection(id); // Appelle la fonction pour gérer la sélection
    });

    element.querySelector('.info-btn').addEventListener('click', () => {
        const id = element.getAttribute('data-id');
        updateImageSelection(id);
    });
});
