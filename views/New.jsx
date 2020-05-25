const React = require('react');
const Default = require('./components/Default');

class New extends React.Component {
    render() {
        return (
            <Default title="NEW PAGE">
                <h1>Found a new spring?</h1>
                <h2>Tell us about it!</h2>
                <form action="/springs" method="POST">
                    Name: <input type="text" name="name"/>
                    <br />
                    Activities: <input type="text" name="activities" />
                    <br />
                    Info: <input type="text" name="info"/>
                    <br />
                    <input type="submit" name="" value="Submit Spring"/>
                </form>
            </Default>
        )
    }
}

module.exports = New;