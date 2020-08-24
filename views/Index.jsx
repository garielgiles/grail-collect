const React = require('react')
const Default = require('./components/Default.jsx')


class Index extends React.Component {
    render() {
        const { name, image, size, resell, retail, description, _id } = this.props.kicks;
        // let priceSum= resell.reduce(function(a, b){
        //     return a+b;
        //     },0);
        //     console.log(priceSum)
        // $(document).ready(function(e) {
        //     $("input").change(function() {
        //         let toplam=0;
        //         $("input[name=resell]").each(function() {
        //             toplam = toplam + parseInt($(this).val());
        //         })
        //         $("input[name=toplam_resell").val(toplam);
        //     })
        // })
        let collection = [
            {
                resellCost: {resell}
            }
        ]
        collection = (collection)
        let total = (collection.reduce((a, c) => (a+c.resell), 0))
        return (
            <Default>
                <div>
                    <title>Collection</title>
                    <h1>Collection</h1>
                    <nav>
                        <a href="/collection/add">Add to Collection</a>
                    </nav>
                    <ul>
                        {this.props.kicks.map((kick, index) => {
                            
                            return (
                                
                                <li key={kick._id}>
                                    {kick.name}<br />
                                    <a href={`/collection/${kick._id}`}><img className="display" src={`${kick.image}`} /></a><br />
                                    <p>Size: {kick.size}</p>
                                    <p>Resell: ${kick.resell}</p>
                                    <p>Retail: ${kick.retail}</p>
                                    <a href={`/collection/${kick._id}/edit`}>Edit</a>
                                    <form action={`/collection/${kick._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete" />
                                    </form>
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