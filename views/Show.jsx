const React = require('react');
const Default = require('./components/Default')

class Show extends React.Component {
    render() {
        const spring = this.props.spring;
        // console.log(spring.newImg)

        return (
            <Default title="SHOW PAGE: SPRINGS">
                <a className="add" href="/springs">Return Home</a>
                <div className="card-container">
                <div className="card-header">
                <h1 className="spring-name">{spring.name}</h1>
                <br />
                <p className="spring-act">{spring.activities.join(', ')}</p>
                </div>
                </div>
                <div className="show-info-container">
                <div className="show-images">
            
                {spring.newImg ? <img src={`${spring.newImg}`}/> : null }
                {spring.img.length > 0 ? <img src={`/img/Springs-Images/${spring.name}/1.jpg`} alt="image of springs"/> : null }
                {spring.img.length > 0 ? <img src={`/img/Springs-Images/${spring.name}/2.jpg`} alt="image of springs"/> : null }
                {spring.img.length > 0 ? <img src={`/img/Springs-Images/${spring.name}/3.jpg`} alt="image of springs"/> : null }

                </div>
                <br />
                <div className="show-info">
                {spring.temp ? <h3>Temp: {spring.temp}</h3> : null }
                <br />
                {spring.weather ? <h3>Weather: {spring.weather}</h3> : null }
                <br />
                {spring.info.length > 0 ? <h3>Fun Facts:<br />{spring.info[0]}</h3> : null }
                <br />
                {spring.info.length > 0 ? <h3>{spring.info[1]}</h3> : null }
                </div>
                <div className="show-map">
                {spring.map ? <iframe className="map" src={spring.map}></iframe> : null }
                </div>
                </div>
            </Default>
        )
    }
}

module.exports = Show;