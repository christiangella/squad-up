const fs = require('fs')

// function to generate html page
// data is passed in from index.js
const generateSquad = (data) => {
    // establishing blank array to hold card data
    const sumCards = [];
    // running through the loop
    for (let i=0; i < data.length; i++) {
        // referencing the dataset through i
        const currEmployee = data[i];
        // matches role to specific card
        const currRole = currEmployee.getRole();
            if (currRole === 'Manager') {
                // when a match is found, pulls data
                sumCards.push(`
                <!-- MANAGER CARD -->
                <div class="col-5 mt-3">
                    <div class="card">
                        <div class="card-header">
                            <h2>${currEmployee.name} (${currEmployee.pronouns})</h4>
                            <h3>🪴 Manager</h3>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <tbody>
                                  <tr>
                                    <td scope="row">
                                        <strong>🌱 Employee ID</strong>: ${currEmployee.id}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td scope="row">
                                        <strong>🌿 Email</strong>: <a href="mailto:${currEmployee.email}">${currEmployee.email}</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td scope="row">
                                        <strong>🌻 Office</strong>: ${currEmployee.officeNumber}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>
                </div>
                `)
            }
        if (currRole === 'Engineer') {
            sumCards.push(`
            <!-- ENGINEER CARD -->
            <div class="col-5 mt-3">
                <div class="card">
                    <div class="card-header">
                        <h2>${currEmployee.name} (${currEmployee.pronouns})</h4>
                        <h3>🪴 Engineer</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped ">
                            <tbody>
                              <tr>
                                <td scope="row">
                                    <strong>🌱 Employee ID</strong>: ${currEmployee.id}
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">
                                    <strong>🌿 Email</strong>: <a href="mailto:${currEmployee.email}">${currEmployee.email}</a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">
                                    <strong>🌻 GitHub</strong>: <a href="https://github.com/${currEmployee.github}">${currEmployee.github}</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
            `)
        }
        if (currRole === 'Intern') {
            sumCards.push(`
            <!-- MANAGER CARD -->
            <div class="col-5 mt-3">
                <div class="card">
                    <div class="card-header">
                        <h2>${currEmployee.name} (${currEmployee.pronouns})</h4>
                        <h3>🪴 Intern</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped ">
                            <tbody>
                              <tr>
                                <td scope="row">
                                    <strong>🌱 Employee ID</strong>: ${currEmployee.id}
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">
                                    <strong>🌿 Email</strong>: <a href="mailto:${currEmployee.email}">${currEmployee.email}</a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">
                                    <strong>🌻 School</strong>: ${currEmployee.school}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
            `)
        }
    }
    // cards are then put into html document
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- 4.5.0 BOOTSTRAP INSTALLATION -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <!-- TITLE ELEMENT -->
        <title>...meet the team</title>
    </head>
    <body>
        <!-- JUMBOTRON -->
        <div class="jumbotron ">
            <div class="ml-4 mr-4">
            <!-- H1 TITLE -->
            <h1 class="display-4">meet the squad</h1>
            <hr class="my-3">
            <!-- H2 SUBTITLE -->
            <p class="lead">let's meet the engineering team behind the product</p>
            </div>
        </div>
    
        <!-- CONTAINER TO HOLD CARDS -->
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${sumCards}
                </div>
            </div>
        </main>
    </body>
    </html>`
}

module.exports = generateSquad