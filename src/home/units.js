export const Row = function (props) {
    return (
        <div className="article-item">
            <div className="left">
                <img className="icon" src={props.img}/>
            </div>
            <div className="right"> 
                <p>{props.content}</p>
            </div>
        </div>
    )
}

