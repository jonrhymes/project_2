const React = require('react');
const Default = require('./components/Default')

class Index extends React.Component {
    render() {
        const { springs } = this.props;
        return (
            <Default title="INDEX SPRINGS">
                <h1>Index Page</h1>
                <a href="/springs/new">Add a new Spring</a>
                <div>
                    {springs.map((spring, index) => {
                        return (
                            <div>
                            <div>
                                <p>{spring.name}</p>
                                <img src={`/img/Springs-Images/${spring.name}/1.jpg`} alt="image of springs"/>
                                <p className="spring-act-index">{spring.activities.join(', ')}</p>
                            </div>
                            <a className="see-more" href={`/springs/${index}`}>See More</a>
                            <form action={`/springs/${index}?_method=DELETE`} method="POST">
                                <input type="submit" value="delete"/>
                            </form>
                            <form action={`/springs/${index}/edit`} method="GET">
                                <input type="submit" value="edit" />
                            </form>
                            </div>
                        )
                    })}
                </div>
            </Default>
        )
    }
}

module.exports = Index;