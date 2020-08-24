const React = require('react')
const Default = require('../components/Default.jsx')


class Homepage extends React.Component {
    render() {

        return (
            <Default>
                <div>
                    <title>Grail Collect</title>
                    <h1 className="brandFont">Grail Collect</h1>
                   <a href="/collection" className="btn btn-primary">Enter Collection</a>
                </div>
            </Default>
        )
    }
}

module.exports = Homepage