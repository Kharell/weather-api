async function loadData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    let output = '';
    let id = 1;
    data.forEach(element => {
      output += `
        <tr>
          <td>${id++}</td>
          <td>${element.name}</td>
          <td>${element.username}</td>
          <td>${element.email}</td>
          <td>${element.address.street}, ${element.address.suite}, ${element.address.city}, ${element.address.zipcode}</td>
          <td>${element.phone}</td>
          <td>${element.website}</td>
          <td>${element.company.name} - ${element.company.catchPhrase} - ${element.company.bs}</td>
        </tr>
      `;
    });

    document.getElementById('userData').innerHTML = output;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to load and populate the table
loadData();
