const requestURL = 'https://davraya.github.io/wdd230/final-website/json/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);

  });

  function displayTemples(temple) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name - 
    let image = document.createElement('img')
    let address = document.createElement('p')
    let phone = document.createElement('p')
    h2.textContent = temple.name;
    image.setAttribute('src', temple.image);
    image.setAttribute('alt', temple.name)
    address.innerHTML = `Address: ${temple.address}`
    phone.innerHTML = `Phone: ${temple.phone}`
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(image) 
    card.append(address)
    card.append(phone)
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  