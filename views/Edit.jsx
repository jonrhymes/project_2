const React = require('react');
const Default = require('./components/Default')

class Edit extends React.Component {
    render() {
        const {spring} = this.props;
        return (
            <Default title="EDIT PAGE">
                <h1>Edit {spring.name}</h1>
                <h2>Give the spring a nickname!</h2>
                <form action={`/springs/${this.props.id}?_method=PUT`} method="POST">
                    <input type="text" name="name"/>
                    <br />
                    <input type="submit" value="update"/>
                </form>
            </Default>
            
        )
    }
}

module.exports = Edit;