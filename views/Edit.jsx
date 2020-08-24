const React = require("react");
const Default = require("./components/Default");

class Edit extends React.Component {
  render() {
    const { _id } = this.props.kicks;
    return (
        <Default>
      <div>
        <h1>Edit Kicks</h1>
     
        <form action={`/collection/${_id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" /><br />
                    Size: <input type="text" name="size" /><br />
                    Resell: <input type="text" name="resell" /><br />
                    Retail: <input type="text" name="retail" /><br />
                    Worn: <input type="checkbox" name="worn" /><br />
                    Description: <input type="text" name="description" /><br />
                    Image: <input type="text" name="image" /><br />
                    <input type="submit" name="" value="Create Sneaker" />
        </form>
      </div>
      </Default>
    );
  }
}

module.exports = Edit;