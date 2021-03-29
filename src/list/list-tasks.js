import React from 'react';
import { A } from 'hookrouter';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ListTasks() {
  return (
    <div className="text-center">
      <h3> Task to do </h3>
      <Table striped bordered hover responsive data-testid="table" >
        <thead>
          <tr>
            <th> Task </th>
            <th>
              <A href="/register"
                className="btn btn-success btn-sm"
                data-testid="btn-newTask">
                <FontAwesomeIcon icon={faPlus}/>
                &nbsp;
                New Task
                </A>
            </th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </Table>
    </div>
  );
}

export default ListTasks;
