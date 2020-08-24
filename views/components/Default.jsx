const React = require('react')

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                {this.props.children}
                    <link rel="stylesheet"  href="/css/main.css"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"></link>
                    <div></div>
                    <body>
                    
                    </body>
                </head>

            </html>
        )
    }
}

module.exports = Default