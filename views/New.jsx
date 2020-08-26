const React = require('react')
const Default = require('./components/Default')

class New extends React.Component {
    render() {
        return (
            <Default>
                <body className="pageBody">


                    <div>
                        <title>Add Sneaker</title>
                        <div>
                            <nav class="navbar fixed-top navbar-light bg-light">
                                <span class="navbar-brand mb-0 h1" id="navFont">Grail Collect</span>
                            </nav>
                        </div>
                        <h1 className="pageFont">Add to Collection</h1>
                        <div className="genBody">
                        <form action="/collection" method="POST">
                            Name: <input type="text" name="name" /><br />
                            Size: <input type="text" name="size" /><br />
                            Resell: <input type="text" name="resell" /><br />
                            Retail: <input type="text" name="retail" /><br />
                            Deadstock: <input type="checkbox" name="deadstock" /><br />
                            {/* Worn: <input type="checkbox" name="worn" /><br /> */}
                            Description: <input className="des" type="text" name="description" /><br />
                            Image: <input type="text" name="image" /><br />
                            {/* <input type="file" id="img" name="image" accept="image/*" /><br /> */}
                            {/* <label htmlFor="image">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"/><br /> */}
                            <input class="btn btn-success btn-sm" type="submit" name="" value="Create Sneaker" />
                        </form>
                        </div>
                    </div>

                </body>
            </Default>
        )
    }
}

module.exports = New