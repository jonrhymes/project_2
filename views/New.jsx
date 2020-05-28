const React = require('react');
const Default = require('./components/Default');

class New extends React.Component {
    render() {
        const { springs } = this.props;
        // console.log(springs)
        return (
            <Default title="NEW PAGE: SPRINGS">
                <div className="new-container">
                <h1>Found a new spring?</h1>
                <h2>Tell us about it!</h2>
                <form action="/springs" method="POST" className="edit-form">
                    Visited? <input type="checkbox" name="visited" defaultChecked/>
                    <br />
                    Spring name: <input type="text" name="name"/>
                    <br />
                    What did you do there? <input type="text" className="edit-activities" name="activities"/>
                    <br />
                    Have a link to a pic? <input type="text" className="edit-activities" name="newImg"/>
                    <br />
                    <input type="submit" name="" value="Submit Spring"/>
                </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;