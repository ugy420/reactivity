interface LaneProps{
    text:string
}

function Lane({text}:LaneProps){
    return(
        <>
            <div className="subreddit-div">
                <input type="text" value={text}></input>
            </div>
            <div className="content-div">
                <input type="text"></input>
            </div>
        </>
    );
}

export default Lane;