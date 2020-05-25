const React = require('react');
const Default = require('./components/Default');

class New extends React.Component {
    render() {
        return (
            <Default title="NEW PAGE">
                <h1>Found a new spring?</h1>
                <h2>Tell us about it!</h2>
                <form action="/springs" method="POST">
                    Visited: <input type="checkbox" checked value="visited"/>
                    <br />
                    Spring name: <input type="text" name="name"/>
                    <br />
                    What did you do there? <input type="text" name="comments"/>
                    <br />
                    <input type="submit" name="" value="Submit Spring"/>
                </form>
            </Default>
        )
    }
}

module.exports = New;