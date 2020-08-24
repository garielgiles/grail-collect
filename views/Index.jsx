const React = require('react')
const Default = require('./components/Default.jsx');
const { func } = require('prop-types');


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
        // const { name, image, size, resell, retail, deadstock, description, _id } = this.props.kicks;
        // let i =0
        // let total = [{resell}]
        
        // function worth() {
        //     for(let i=0; i < total.length; i++){
        //         sum += parseInt(total[i])
        //     }
            
        // }
            
        
        
        return (
            <Default>

                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Collection</title>
                    </head>
                    <body className="body">
                        <div>
                            {/* {`${worth()}`} */}
                            <h1 className="pageFont">Collection</h1>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="/gallery" className="navLink">Gallery</a>
                                        <a href="/collection/add">Add to Collection</a>
                                    </li>
                                </ul>
                            </nav>
                            <ul>
                                {this.props.kicks.map((kick, index) => {

                                    return (

                                        <li key={kick._id}>
                                            {kick.name}<br />
                                            <a href={`/collection/${kick._id}`}><img className="display" src={`${kick.image}`} /></a><br />
                                            <p>Size: {kick.size}</p>
                                            <p>Resell: ${kick.resell}</p>
                                            <p>Retail: ${kick.retail}</p>
                                            <p>{kick.deadstock ? `Deadstock` : `Used`}</p>
                                            <a href={`/collection/${kick._id}/edit`}>Edit</a>
                                            <form action={`/collection/${kick._id}?_method=DELETE`} method="POST">
                                                <input type="submit" value="Delete" />
                                            </form>
                                        </li>
                                    )

                                })
                                }
                            </ul>

                        </div>
                    </body>
                </html>
            </Default>
        )
    }
}

module.exports = Index