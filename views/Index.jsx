const React = require('react')
const Default = require('./components/Default.jsx')


class Index extends React.Component {
    render() {

        return (
            <Default>
                <div className="header">
                    <h1>Collection</h1>
                    <nav>
                        <a href="/collection/add">Add to Collection</a>
                    </nav>
                    <ul>
                        {this.props.kicks.map((kick, index) => {
                            // const image = new Image()
                            // image.src = `${kick.image}`
                            return (
                                <li key={kick._id}>
                                    {kick.name}<br/>
                                    <img src={`${kick.image}`}/><br/>
                                    Size {kick.size}<br/>
                                    Resell: ${kick.resell}<br/>
                                    Retail: ${kick.retail}<br/>
                                    <a href={`/collection/${kick._id}/edit`}>Edit</a>
                                    {/* <form action={`/collection/${kick._id}/?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete Sneaker" />
                                    </form> */}
                                    
                                </li>
                            )
                        })
                        }
                    </ul>
                    
                </div>
            </Default>
        )
    }
}

module.exports = Index