 // Fonction pour créer un dépliant couleur
function createColorDropdown() {
    // Création d'un élément select
    const select = document.createElement('select');
    select.name = 'couleur';

    // Ajout de l'option par défaut
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "--Choix--";
    select.appendChild(defaultOption);
    
    // Options à ajouter au select
    const options = [
        { value: "*", text: "\u{1F7E5}" }, // Vert
        { value: "*", text: "\u{1F7E7}" }, // Orange
        { value: "*", text: "\u{1F7E9}" }  // Rouge
    ];
    
    // Ajout d'options au select
    options.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        select.appendChild(option);
    });

    // Appliquer des styles au select
    select.style.backgroundColor = 'white'; // Fond blanc
    select.style.color = 'black'; // Couleur du texte
    select.style.border = '1px solid #ccc'; // Bordure
    select.style.padding = '5px'; // Padding
  
    return select;
}

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.getElementsByClassName('forms-container');
    Array.from(containers).forEach(container => {
        // Vérifiez si le dropdown existe déjà
        if (container.children.length === 0) {
            const newDropdown = createColorDropdown();
            container.appendChild(newDropdown);
        }
    });
});
