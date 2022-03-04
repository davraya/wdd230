const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);

  });

  function displayProphets(prophet) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name - 
    let image = document.createElement('img')
    let birthDate = document.createElement('p')
    let birthPlace = document.createElement('p')
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `${prophet.name} ${prophet.lastname}` )
    birthDate.innerHTML = prophet.birthdate
    birthPlace.innerHTML = prophet.birthplace
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(image) 
    card.append(birthDate)
    card.append(birthPlace)
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  