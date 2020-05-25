const React = require('react');
const Default = require('./Default')

class Show extends React.Component {
    render() {
        const { springs } = this.props;
        return (
            <Default>
                
                <h1>Show Page</h1>

                {/* <iframe src={map}></iframe> */}
                
            </Default>
        )
    }
}

module.exports = Show;