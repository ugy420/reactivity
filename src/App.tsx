import React, { useState } from 'react';
import Lane from './Components/Lane.tsx';
import Modal from "./Components/Modal.tsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  }

  return (
    <div className='main-div'>
      <div className='btn-div'>
        <input type="button" className='btn btn-add' value="+" onClick={handleClick} />
      </div>
      <div className='lane-div'>
        <Lane text="r/lanetitle" />
      </div>
      {showModal && <Modal open={showModal} close={() => setShowModal(false)} />}

    </div>
  )
}

export default App
