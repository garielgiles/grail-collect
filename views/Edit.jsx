const React = require("react");
const Default = require("./components/Default");

class Edit extends React.Component {
  render() {
    const { _id } = this.props.kicks;
    return (
      <Default>
        <body className="pageBody">
        <nav class="navbar fixed-top navbar-light bg-light">
                                <span class="navbar-brand mb-0 h1" id="navFont">Grail Collect</span>
                            </nav>
          <div>
            <h1 className="pageFont">Edit Kicks</h1>
            <div className="genBody">
            <form action={`/collection/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" /><br />
                    Size: <input type="text" name="size" /><br />
                    Resell: <input type="text" name="resell" /><br />
                    Retail: <input type="text" name="retail" /><br />
                    Deadstock: <input type="checkbox" name="deadstock" /><br />
              {/* Worn: <input type="checkbox" name="worn" /><br /> */}
                    Description: <input className="des" type="text" name="description" /><br />
                    Image: <input type="text" name="image" /><br />
                <input className="btn btn-success btn-sm" type="submit" name="" value="Create Sneaker" />
            </form>
            </div>
          </div>
        </body>
      </Default>
    );
  }
}

module.exports = Edit;