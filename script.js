//your code here
// Function to remove articles from a band name
function removeArticles(bandName) {
    return bandName.replace(/^(a|an|the) /i, '').trim();
}

// Array of band names
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Remove articles and sort the band names
let sortedBandNames = bandNames.map(removeArticles).sort();

// Generate HTML code for the sorted band names
let ulElement = document.createElement('ul');
ulElement.id = 'band';

sortedBandNames.forEach(function (bandName) {
    let liElement = document.createElement('li');
    liElement.textContent = bandName;
    ulElement.appendChild(liElement);
});

// Append the ul element to the body or any desired container
document.body.appendChild(ulElement);

