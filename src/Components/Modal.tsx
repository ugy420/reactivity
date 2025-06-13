import { useEffect, useRef, useState } from "react";

interface ModalProps {
    open: boolean;
    close: () => void;
}

function Modal({open, close}: ModalProps){
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
        <dialog ref={dialogRef} className="modal-diag" onClose={close} >
            <div className="spc-div">

                <label>Enter the name of the subreddit:</label>
            </div>
            <div className="spc-div">
                <input type="text" value={subreddit} onChange={ e => setSubreddit(e.target.value)}/>
            </div>
            <div className="spc-div">
                <input type="button" className="btn" value="Add subreddit"/>
            </div>
        </dialog>  
    )
}

export default Modal;