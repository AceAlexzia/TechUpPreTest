// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
var endpoint = "https://jsonplaceholder.typicode.com/users";

fetch(endpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const newUsers = data.map(user => user.name);
        console.log("All user names:", newUsers);

        const longName = newUsers.filter(name => name.length > 17);
        console.log("Names longer than 17 characters:", longName);
    })
    .catch(error => console.error("Error fetching data:", error));
