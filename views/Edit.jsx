const React = require('react');
const Default = require('./components/Default')

class Edit extends React.Component {
    render() {
        const { spring } = this.props;
        console.log(spring)
        return (
            <Default title="EDIT PAGE">
                <h1>{spring.name}</h1>
                <h2>Tell us your thoughts!</h2>
                <div>
                    {spring.visited ? `√` : ''}</div>
                    <p>{spring.visited ? `I've been here!` : `I haven't been! :(`}</p>
                <div>
                <form action={`/springs/${this.props.id}?_method=PUT`} method="POST">
                    <h2>Update Activities</h2>
                    <p className="spring-act-edit">{spring.activities.join(', ')}</p>
                    <input type="text" name="activities"/>
                    <h2>Other Comments:</h2>
                    <input type="text" name="comments" value={spring.comments} placeholder="Cool place to swim!"/>
                    <br />
                    <input type="submit" value="Update"/>
                </form>
                </div>
            </Default>
            
        )
    }
}

module.exports = Edit;