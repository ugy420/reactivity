import React, { useEffect, useRef, useState } from "react";

function Modal({open, close}){
    const dialogRef = useRef<HTMLDialogElement|null>(null);

    const [subreddit, setSubreddit] = useState("");

    useEffect(() => {
        if(!dialogRef.current) return;
        if(open){
            dialogRef.current.showModal();
        }else{
            dialogRef.current.close();
        }
    }, [open])

    

    return(
        <dialog ref={dialogRef} className="modal-div" onClose={close} >
                <label>Enter subreddit:</label>
                <input type="text" value={subreddit} onChange={ e => setSubreddit(e.target.value)}/>
                <input type="button" value="Add subreddit"/>
        </dialog>  
    )
}

export default Modal;