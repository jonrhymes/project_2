const React = require('react');
const Default = require('./Default')

class Index extends React.Component {
    render() {
        const { springs } = this.props;
        return (
            <Default>
                <h1>Index Page</h1>
                <a href="/springs/new">Add a new Spring</a>
                <div>
                    {springs.map((spring, index) => {
                        return (
                            <div>
                                <p>{spring.name}</p>
                            </div>
                        )
                    })}
                </div>
            </Default>
        )
    }
}

module.exports = Index;