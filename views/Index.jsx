const React = require('react');
const Default = require('./components/Default')

class Index extends React.Component {
    render() {
        const { springs } = this.props;
        console.log(springs)
        return (
            <Default title="INDEX SPRINGS">
                <h1>Index Page</h1>
                <a className="add" href="/springs/new">Add a new Spring</a>
                <div>
                    {springs.map((spring, id) => {
                        console.log(spring.img)
                        return (
                            <div key={id}>
                            <div>
                                <p>{spring.name}</p>
                                <div>{spring.visited ? <h2>Wow you've been here!<input type="checkbox" name="visited" defaultChecked /></h2> : <h2>Check it out soon!</h2>}
                                </div>
                                {/* {spring.newImg ? <img src={`${spring.newImg}`}/> : null }
                                {spring.img.length > 0 ? <img src={`/img/Springs-Images/${spring.name}/1.jpg`} alt="image of springs"/> : <img src={`/img/Springs-Images/No_Springs/1.jpg`}/>} */}
                                {spring.newImg || spring.img.length > 0 ? <img src={`${spring.newImg}`}/> : <img src={`/img/Springs-Images/No_Springs/1.jpg`}/> }
                                {spring.img.length > 0 ? <img src={`/img/Springs-Images/${spring.name}/1.jpg`} alt="image of springs"/> : null }
                                <p className="spring-act-index">{spring.activities.join(', ')}</p>
                            </div>
                            <a className="see-more" href={`/springs/${spring._id}`}>See More</a>
                            <form action={`/springs/edit/${spring._id}`} method="GET">
                                <input type="submit" value="Seen it?" />
                            </form>
                            <form action={`/springs/${spring._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="Won't go back."/>
                            </form>
                            </div>
                        )
                    })}
                </div>
            </Default>
        )
    }
}

module.exports = Index;