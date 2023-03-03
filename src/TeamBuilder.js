function teamHTML(data) {
    var teamCards = "";
    for(i = 0; i < data.length; i++) {
        if(data[i].getRole() === 'Manager') {
            // teamCards+= -> teamCards = teamCards + ""
            teamCards+= `<div class="p-3 m-2 card shadow bg-secondary bg-opacity-25 border border-primary" style="width: 18rem;">
        <div class="card p-3 mb-2 bg-primary bg-opacity-75 text-white border border-primary">
        <h2>${data[i].getName()}</h2>
        <h3>☕${data[i].getRole()}</h3>
        </div>
        <div class="card-body">
        <p class="p-2 m-1 bg-light border rounded border-primary">ID: ${data[i].getId()}</p>
        <p class="p-2 m-1 bg-light border rounded border-primary">Email: <a href="${data[i].getEmail()}">${data[i].getEmail()}</a></p>
        <p class="p-2 m-1 bg-light border rounded border-primary">Office Number: ${data[i].getOfficeNumber()}</p>
        </div>
        </div>`
        }

        if(data[i].getRole() === 'Engineer') {
            teamCards+= `<div class="p-3 m-2 card shadow bg-secondary bg-opacity-25 border border-primary" style="width: 18rem;">
        <div class="card p-3 mb-2 bg-primary bg-opacity-75 text-white border border-primary">
        <h2>${data[i].getName()}</h2>
        <h3>🕶${data[i].getRole()}</h3>
        </div>
        <div class="card-body">
        <p class="p-2 m-1 bg-light border rounded border-primary">ID: ${data[i].getId()}</p>
        <p class="p-2 m-1 bg-light border rounded border-primary">Email: <a href="${data[i].getEmail()}">${data[i].getEmail()}</a></p>
        <p class="p-2 m-1 bg-light border rounded border-primary">GitHub: <a href="https://github.com/${data[i].getGithub()}">${data[i].getGithub()}</a></p>
        </div>
        </div>`
        }
        
        if(data[i].getRole() === 'Intern') {
            teamCards+= `<div class="p-3 m-2 card shadow bg-secondary bg-opacity-25 border border-primary" style="width: 18rem;">
        <div class="card p-3 mb-2 bg-primary bg-opacity-75 text-white border border-primary">
        <h2>${data[i].getName()}</h2>
        <h3>👨‍🎓${data[i].getRole()}</h3>
        </div>
        <div class="card-body">
        <p class="p-2 m-1 bg-light border rounded border-primary">ID: ${data[i].getId()}</p>
        <p class="p-2 m-1 bg-light border rounded border-primary">Email: <a href="${data[i].getEmail()}">${data[i].getEmail()}</a></p>
        <p class="p-2 m-1 bg-light border rounded border-primary">School: ${data[i].getSchool()}</p>
        </div>
        </div>`
        }
    }
    return teamCards;
}


function renderTeam(team) {
    console.log(team)
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <header class="p-5 mb-5 header bg-danger text-white text-center">
        <div class="container">
          <h1>My Team</h1>
        </div>
      </header>

      <main class="d-flex flex-wrap justify-content-center">
        ${teamHTML(team)}
      </main>
    </body>
    </html>`
}


module.exports = renderTeam;