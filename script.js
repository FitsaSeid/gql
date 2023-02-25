
fetch("http://localhost:4000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        query: `
            query {
                positions {
                  position_name
                  students {
                    f_name
                    department
                  }
                }
              }
            `
    })
}).then(res => res.json())
    .then(data => console.log(data.data))