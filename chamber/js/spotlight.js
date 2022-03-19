const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    console.log(business)
    for (let i = 0; i < 3; i++) {
        displayBuisiness(business[i], i)
    }

  });
  
  function displayBuisiness(business, count){
    let card = document.createElement('section');
    card.setAttribute('class', `spotlight${count + 1}`)
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name - 
    let image = document.createElement('img')
    let address = document.createElement('p')
    let phone = document.createElement('p')
    let url = document.createElement('a')
    h2.textContent = business.name;
    image.setAttribute('src', business.image);
    image.setAttribute('alt', business.name )
    image.setAttribute('class', "dir_image")
    address.innerHTML = business.address
    phone.innerHTML = business.phone
    url.innerHTML = business.url
    url.setAttribute('href', business.url)
    image.width = "50"
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(image) 
    card.append(address)
    card.append(phone)
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.spotlight').appendChild(card);
  }