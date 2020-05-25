const React = require('react');
const Default = require('./components/Default')

class Show extends React.Component {
    render() {
        const spring = this.props.spring;
        console.log(spring.temp)
        return (
            <Default title="SHOW SPRING">
                <div className="card-container">
                <h1 className="spring-name">{spring.name}</h1>
                <p className="spring-act">{spring.activities.join(', ')}</p>
                </div>
                <div>
                    <div>{spring.visited ? `√` : ''}</div>
                    <p>{spring.visited ? `I've been here!` : `I haven't been! :(`}</p>
                </div>
                <div>
                <img src={`/img/Springs-Images/${spring.name}/1.jpg`} alt="image of springs"/>
                <img src={`/img/Springs-Images/${spring.name}/2.jpg`} alt="image of springs"/>
                <img src={`/img/Springs-Images/${spring.name}/3.jpg`} alt="image of springs"/>
                Temp: {spring.temp}
                <br />
                Weather: {spring.weather}
                <br />
                Fun Facts: {spring.info[0]}
                <br />
                {spring.info[1]}
                </div>
                <iframe className="map" src={spring.map}></iframe>
            </Default>
        )
    }
}

module.exports = Show;