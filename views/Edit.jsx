const React = require('react');
const Default = require('./components/Default')

class Edit extends React.Component {
    render() {
        const {spring} = this.props;
        // console.log(spring)
        return (
            <Default title="EDIT PAGE: SPRINGS">
                <h1>Edit {spring.name}</h1>
                <form action={`/springs/${spring._id}?_method=PUT`} method="POST">
                Have you been here?
                <input type="checkbox" name="visited" />
                <br />
                What did you do there? <input type="text" name="activities" value={spring.activities.join(', ')}/>
                <br />
                {/* Have a link to a pic? <input type="text" name="newImg"/> */}
                <input type="submit" name="" value="Update"/>
                </form>
            </Default>
            
        )
    }
}

module.exports = Edit;