function teamHTML(data) {
    for(i = 0; i < data.length; i++) {
        if(data[i].getRole() === 'Manager') {
            return `<div class="card">
        <h2>${data[i].getName()}</h2>
        <h3>${data[i].getRole()}</h3>
        <div>
        </div>
        <p>${data[i].getId()}</p>
        <p>${data[i].getEmail()}</p>
        <p>${data[i].getOfficeNumber()}</p>
        </div>`
        }
        if(data[i].getRole() === 'Engineer') {
            return `<div class="card">
        <h2>${data[i].getName()}</h2>
        <h3>${data[i].getRole()}</h3>
        <div>
        </div>
        <p>${data[i].getId()}</p>
        <p>${data[i].getEmail()}</p>
        <p>${data[i].getGithub()}</p>
        </div>`
        }
        if(data[i].getRole() === 'Intern') {
            return `<div class="card">
        <h2>${data[i].getName()}</h2>
        <h3>${data[i].getRole()}</h3>
        <div>
        </div>
        <p>${data[i].getId()}</p>
        <p>${data[i].getEmail()}</p>
        <p>${data[i].getSchool()}</p>
        </div>`
        }
    }
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
      <header class="p-5 mb-4 header bg-light">
        <div class="container">
          <h1>My Team</h1>
        </div>
      </header>

      <main>
        ${teamHTML(team)}
      </main>
    </body>
    </html>`
}


module.exports = renderTeam;