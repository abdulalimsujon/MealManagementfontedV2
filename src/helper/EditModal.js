import React from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

const EditModal = (props) => {

  console.log(props.id)
    return (
      <Modal
      size="md"
      
      // aria-labelledby="contained-modal-title-vcenter"
      centered
  
     
    >
      <Modal.Header closeButton>
        <Modal.Title >
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default EditModal;