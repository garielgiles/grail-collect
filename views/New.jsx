const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>
                <title>Add Sneaker</title>
                <h1>Add to Collection</h1>
                <form action="/collection" method="POST">
                    Name: <input type="text" name="name" /><br />
                    Size: <input type="text" name="size" /><br />
                    Resell: <input type="text" name="resell" /><br />
                    Retail: <input type="text" name="retail" /><br />
                    Deadstock: <input type="checkbox" name="deadstock"/><br />
                    {/* Worn: <input type="checkbox" name="worn" /><br /> */}
                    Description: <input type="text" name="description" /><br />
                    Image: <input type="text" name="image" /><br />
                    {/* <input type="file" id="img" name="image" accept="image/*" /><br /> */}
                    {/* <label htmlFor="image">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"/><br /> */}
                    <input type="submit" name="" value="Create Sneaker" />
                </form>
            </div>
        )
    }
}

module.exports = New