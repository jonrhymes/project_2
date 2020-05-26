const React = require('react');
const Default = require('./components/Default')

class Show extends React.Component {
    render() {
        const spring = this.props.spring;
        console.log(spring.newImg)

        return (
            <Default title="SHOW SPRING">
                <div className="card-container">
                <h1 className="spring-name">{spring.name}</h1>
                <p className="spring-act">{spring.activities.join(', ')}</p>
                </div>
                <div>
                {spring.newImg ? <img src={`${spring.newImg}`}/> : null }
                </div>
                <div>
                {spring.img.length > 0 ? <img src={`/img/Springs-Images/${spring.name}/1.jpg`} alt="image of springs"/> : null }
                {spring.img.length > 0 ? <img src={`/img/Springs-Images/${spring.name}/2.jpg`} alt="image of springs"/> : null }
                {spring.img.length > 0 ? <img src={`/img/Springs-Images/${spring.name}/3.jpg`} alt="image of springs"/> : null }
                <br />
                {spring.temp ? <h3>Temp: {spring.temp}</h3> : null }
                <br />
                {spring.weather ? <h3>Weather: {spring.weather}</h3> : null }
                <br />
                {spring.info.length > 0 ? <h3>Fun Facts: {spring.info[0]}</h3> : null }
                <br />
                {spring.info.length > 0 ? <h3>{spring.info[1]}</h3> : null }
                </div>
                {spring.map ? <iframe className="map" src={spring.map}></iframe> : null }
            </Default>
        )
    }
}

module.exports = Show;