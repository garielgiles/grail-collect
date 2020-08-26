const React = require('react')
const Default = require('./components/Default.jsx')

class Show extends React.Component {
    render() {
        const { name, image, size, resell, retail, deadstock, description, _id } = this.props.kicks;
        return (
            <Default>
                <body className="pageBody">


                    <nav class="navbar fixed-top navbar-light bg-light">
                        <span class="navbar-brand mb-0 h1" id="navFont">Grail Collect</span>
                    </nav>
                    
                        <h1 className="pageFont">Grail Details</h1>
                        <nav>
                            <a href="/collection/add" className="add">Add to Collection</a>
                        </nav>
                        <div className="genBody">
                        <div class="card">
                        <div class="card-body">
                        <h1 class="card-title">{name}</h1>
                        <img className="card-img-top" src={`${image}`} />
                        <h5>Size: {size}</h5>
                        <h5>Resell: ${resell}</h5>
                        <h5>Retail: ${retail}</h5>
                        <h5>{deadstock}</h5>
                        <p>{description}</p><br />
                        <a href={`/collection/${_id}/edit`} class="btn btn-outline-success btn-sm">Edit</a>
                        <form action={`/collection/${_id}?_method=DELETE`} method="POST">
                            <input class="btn btn-outline-danger btn-sm" type="submit" value="Delete" />
                        </form>
</div></div>
                    </div>
                </body>
            </Default>
        )
    }
}

module.exports = Show