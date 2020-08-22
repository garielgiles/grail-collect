const React = require('react')

class New extends React.Component {
    render() {
        return(
            <div>
            <title>Add Sneaker</title>
            <h1>Add to Collection</h1>
            <form action="/collection" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Size: <input type="text" name="size" /><br/>
                  Resell: <input type="text" name="resell" /><br/>
                  Retail: <input type="text" name="retail" /><br/>
                  Worn: <input type="checkbox" name="worn" /><br/>
                  Description: <input type="text" name="description" /><br/>
                  <input type="submit" name="" value="Create Sneaker"/>
               </form>
            </div>
        )
    }
}

module.exports = New