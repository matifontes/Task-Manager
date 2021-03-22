import React, { useState } from 'react';
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap';
import { navigate, A } from 'hookrouter';
import Task from '../models/task.model';


function RegisterTask() {
  const [task, setTask] = useState('');
  const [formValidate, setFormValidate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function register(event) {
      event.preventDefault();
      setFormValidate(true);
      if (event.currentTarget.checkValidity() === true) {
        //get the tasks
        const tasksDb = localStorage['tasks'];
        const tasks = tasksDb ? JSON.parse(tasksDb) : [];
        //
        tasks.push(new Task(new Date().getTime(), task, false));
        localStorage['tasks'] = JSON.stringify(tasks);
        setShowModal(true);
      }
  }

  function handleTxtTask(event) {
    setTask(event.target.value);
  }

  function handleCloseModal() {
    navigate('/');
  }

  return (
    <div>
      <h3 className="text-center"> Register </h3>
      <Jumbotron>
        <Form
          validated = {formValidate}
          noValidate
          onSubmit = {register}>
          <Form.Group>
            <Form.Label> Task </Form.Label>
            <Form.Control
              type="text"
              placeholder = "Enter the task"
              minLength ="5"
              maxLength = "100"
              required
              value = {task}
              onChange = {handleTxtTask}
              data-testid="txt-task" />
            <Form.Control.Feedback type="invalid">
              Task need min 5 characters and max 100.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit"
              data-testid="btn-register">
              Register
            </Button>
            &nbsp;
            <A href="/" className = "btn btn-light"> Back </A>
          </Form.Group>
        </Form>
        <Modal show={showModal} onHide={handleCloseModal} data-testid="modal">
          <Modal.Header closeButton>
            <Modal.Title> Success </Modal.Title>
          </Modal.Header>
            <Modal.Body>
              Task add with success
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant = "success"
                onClick={handleCloseModal}>
                Continue
              </Button>
            </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
}

export default RegisterTask;
