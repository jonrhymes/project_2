const React = require('react');
const Default = require('./components/Default')

class Edit extends React.Component {
    render() {
        const {spring} = this.props;
        // console.log(spring)
        return (
            <Default title="EDIT PAGE: SPRINGS">
                <a className="add" href="/springs">Return Home</a>
                <div className="edit-container">
                <h1 className="spring-name">Edit {spring.name}</h1>
                <form action={`/springs/${spring._id}?_method=PUT`} method="POST">
                <div className="edit-form">
                <h3>Have you been here?
                <input type="checkbox" name="visited" className="checkbox"/></h3>
                <h3>What did you do there?</h3><input type="textarea" className="edit-activities" name="activities" value={spring.activities.join(', ')}/>
                <br />
                <input className="submit" type="submit" name="" value="Update"/>
                </div>
                </form>
                </div>
            </Default>
            
        )
    }
}

module.exports = Edit;