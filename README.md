# p14-oc-npm-modal-react

Install this package :
```
npm install modal-p14-oc-react
```

## Example:
```js
import React, { useState } from 'react';
import { Modal } from "modal-p14-oc-react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal text="Example Text" isOpen={isModalOpen} onClose={closeModal} textColor="#fff" backgroundColor="#157846" iconColor="red"/>
    </div>
  );
}

export default App;
```

##  Props

| Prop              | Description                                   | Default     |     
|-------------------|-----------------------------------------------|-------------|
| text              | The text that will be displayed in the modal |             |
| isOpen            | true ? open the modal         |
| onClose           | close the modal       |             |
| textColor         | color text          | #fff (white)|
| backgroundColor   | color background             | #157846 (green) |
| iconColor   | color icon           | red |