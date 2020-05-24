const React = require('react');
const Default = require('./Default')

class Index extends React.Component {
    render() {
        // const { springs } = this.props;
        return (
            <Default>
                <h1>{this.props.springs}</h1>
            </Default>
        )
    }
}

module.exports = Index;