const React = require('react');
const Default = require('./components/Default')

class Index extends React.Component {
    render() {
        const { springs } = this.props;
        // console.log(springs)
        return (
            <Default title="INDEX PAGE: SPRINGS">
                <a className="add" href="/springs/new">Add a new Spring</a>
                    {springs.map((spring, id) => {
                        // console.log(spring.img)
                        return (
                            <div className="main-index" key={id}>
                                <p className="name-index">{spring.name}</p>
                                <div className="visited-index">{spring.visited ? <h2>Wow you've been here!<label className="checkbox-container"><input type="checkbox" name="visited" defaultChecked className="checkbox-index"/><span className="checkmark"></span></label></h2> : <h2>Check it out soon!</h2>}
                                </div>
                                {/* TERNARY: If a new link is provided, show the pic. If no link is provided, show the broken image link. */}
                                {spring.newImg || spring.img.length > 0 ? 
                                <div className="img-div"><img src={`${spring.newImg}`}/></div> : <div className="img-div"><img src={`/img/Springs-Images/No_Springs/1.jpg`}/></div> }
                                {spring.img.length > 0 ? <div className="img-div"><img src={`/img/Springs-Images/${spring.name}/1.jpg`} alt="image of springs"/></div> : null }
                                {/* Join items from an array with a comma and space */}
                                <p className="spring-act-index">{spring.activities.join(', ')}</p>
                            <a className="see-more" href={`/springs/${spring._id}`}>See More</a>
                            <br />
                            <div className="buttons">
                            <form action={`/springs/edit/${spring._id}`} method="GET">
                                <input className="edit-link" type="submit" value="Seen it?" />
                            </form>
                            <form action={`/springs/${spring._id}?_method=DELETE`} method="POST">
                                <input className="delete-link" type="submit" value="Won't go back."/>
                            </form>
                            </div>
                            </div>
                        )
                    })}
            </Default>
        )
    }
}

module.exports = Index;