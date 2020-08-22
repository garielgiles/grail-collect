const React = require('react')
const Default = require('./components/Default.jsx')


class Index extends React.Component {
    render() {
        
        return (
            <Default>
                <div className="header">
                    <h1>Collection</h1>
                    <nav>
                        <a href="/collection/add">Add to Collection</a>
                    </nav>
                    <ul>
                        {this.props.kicks.map((kick, index) => {
                                return (
                                    <li key={index}>
                                        {kick.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Default>
        )
    }
}

module.exports = Index