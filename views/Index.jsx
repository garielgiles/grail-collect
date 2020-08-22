const React = require('react')
const Default = require('./components/Default.jsx')


class Index extends React.Component {
    render() {
        return(
            <Default>
            <div className="header">
            <h1>Collection</h1>
            </div>
           </Default>
        )
    }
}

module.exports = Index