const React = require('react')
const Default = require('./components/Default.jsx')

class Show extends React.Component {
    render() {
        const { name, image, size, resell, retail, description, _id } = this.props.kicks;
        return (
            <Default>
                <div>
                    <h1>Sneaker Details</h1>
                    <h2>{name}</h2>
                    <img className="showDisplay" src={`${image}`} />
                    <h4>{size}</h4>
                    <h4>${resell}</h4>
                    <h4>${retail}</h4>
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