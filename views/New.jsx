const React = require('react');
const Default = require('./components/Default');

class New extends React.Component {
    render() {
        const { springs } = this.props;
        // console.log(springs)
        return (
            <Default title="NEW PAGE: SPRINGS">
                <h1>Found a new spring?</h1>
                <h2>Tell us about it!</h2>
                <form action="/springs" method="POST">
                    Visited? <input type="checkbox" name="visited" defaultChecked/>
                    <br />
                    Spring name: <input type="text" name="name"/>
                    <br />
                    What did you do there? <input type="text" name="activities"/>
                    <br />
                    Have a link to a pic? <input type="text" name="newImg"/>
                    <br />
                    <input type="submit" name="" value="Submit Spring"/>
                </form>
            </Default>
        )
    }
}

module.exports = New;