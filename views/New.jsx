const React = require('react');
const Default = require('./components/Default');

class New extends React.Component {
    render() {
        const { springs } = this.props;
        // console.log(springs)
        return (
            <Default title="NEW PAGE: SPRINGS">
                <a className="add" href="/springs">Return Home</a>
                <div className="new-container">
                <h1 className="found-text">Found a new spring?</h1>
                <h2>Tell us about it!</h2>
                <form action="/springs" method="POST" className="edit-form">
                    Visited? <input type="checkbox" name="visited" defaultChecked/>
                    <br />
                    Spring name: <input type="text" name="name" className="edit-activities"/>
                    <br />
                    What did you do there? <input type="text" className="edit-activities" name="activities"/>
                    <br />
                    Have a link to a pic? <input type="text" className="edit-activities" name="newImg"/>
                    <br />
                    <input type="submit" name="" value="Submit Spring" className="submit"/>
                </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;