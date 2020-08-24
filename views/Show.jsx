const React = require('react')
const Default = require('./components/Default.jsx')

class Show extends React.Component {
    render() {
        const { name, image, size, resell, retail, deadstock, description, _id } = this.props.kicks;
        return (
            <Default>
                <div>               
                    <h1 className="pageFont">Grail Details</h1>
                    <nav>
                    <a href="/collection/add">Add to Collection</a>
                    </nav>
                    <h1>{name}</h1>
                    <img className="showDisplay" src={`${image}`} />
                    <h4>{size}</h4>
                    <h4>${resell}</h4>
                    <h4>${retail}</h4>
                    <h4>{deadstock}</h4>
                    <p>{description}</p><br />
                    <a href={`/collection/${_id}/edit`}>Edit</a>
                    <form action={`/collection/${_id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>
                    
                </div>
            </Default>
        )
    }
}

module.exports = Show