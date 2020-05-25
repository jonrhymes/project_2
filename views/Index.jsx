const React = require('react');
const Default = require('./components/Default')

class Index extends React.Component {
    render() {
        const { springs } = this.props;
        console.log(springs)
        return (
            <Default title="INDEX SPRINGS">
                <h1>Index Page</h1>
                <a className="add" href="/springs/new">Add a new Spring</a>
                <div>
                    {springs.map((spring, id) => {
                        return (
                            <div key={id}>
                            <div>
                                <p>{spring.name}</p>
                            <div>
                    <input type="checkbox" value="visited"/>
                            <div>{spring.visited ? 'on' : ''}</div>
                    <p>{spring.visited ? `I've been here!` : `I haven't been! :(`}</p>
                            </div>
                                <img src={`/img/Springs-Images/${spring.name}/1.jpg`} alt="image of springs"/>
                                <input type="checkbox" value="visited"/>
                                <p className="spring-act-index">{spring.activities}</p>
                            </div>
                            <a className="see-more" href={`/springs/${spring._id}`}>See More</a>
                            <form action={`/springs/${spring._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="delete"/>
                            </form>
                            <form action={`/springs/${spring._id}/edit`} method="GET">
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