import React, { useCallback, useState } from 'react';
import { MyButton } from 'ashutosh-package-testing-1';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = useCallback(() => {
    setShowModal(true)
  }, [])

  return (
      <div>
          <h1>Project B</h1>
          <MyButton onClick={handleClick}/> 
          {showModal && <div>Hello buttton clciked</div>}
      </div>
  );
};

export default App;