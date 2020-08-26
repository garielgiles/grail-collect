const React = require('react')
const Default = require('./components/Default.jsx');

class Index extends React.Component {
    render() {
        // const agg = [
        //     {
        //       '$group': {
        //         '_id': null, 
        //         'total': {
        //           '$sum': '$resell'
        //         }
        //       }
        //     }
        //   ];

        return (

            <Default>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Collection</title>
                    </head>
                    <body className="pageBody">
                        <div>
                            <div>
                                <nav class="navbar fixed-top navbar-light bg-light">
                                    <span class="navbar-brand mb-0 h1" id="navFont">Grail Collect</span>
                                </nav>

                            </div>
                            <h1 className="pageFont">Collection</h1>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="/collection/add" className="add">Add to Collection</a>
                                    </li>
                                </ul>
                            </nav>

                            {this.props.kicks.map((kick, index) => {

                                return (
                                    <div className="genBody" key={kick._id}>
                                        <div class="card">
                                            <a href={`/collection/${kick._id}`}><img src={`${kick.image}`} class="card-img-top" alt="..."></img></a>
                                            <div class="card-body">
                                                <a href={`/collection/${kick._id}`} className="link"><h5 class="card-title">{kick.name}</h5></a>
                                                    Size: {kick.size}<br />
                                                    Resell: ${kick.resell}<br />
                                                    Retail: ${kick.retail}<br />
                                                {kick.deadstock ? `Deadstock` : `Used`}<br />
                                                <a href={`/collection/${kick._id}/edit`} class="btn btn-outline-success btn-sm" id>Edit</a>
                                                <form action={`/collection/${kick._id}?_method=DELETE`} method="POST">
                                                    <input class="btn btn-outline-danger btn-sm" id type="submit" value="Delete" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    
                                )

                            })
                            }

                        </div>
                    </body>
                </html>
            </Default>
        )
    }
}

module.exports = Index
