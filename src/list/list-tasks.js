import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ListTasks() {

  const [tasks, setTasks] = useState([]);
  const [loadTasks, setLoadTasks] = useState(true);


  useEffect(() => {
    function getTasks(){
      const tasksDb = localStorage['tasks'];
      let listTasks = tasksDb ? JSON.parse(tasksDb) : [];
      setTasks(listTasks);
    }
    if (loadTasks) {
      getTasks();
      setLoadTasks(false);
    }
  }, [loadTasks]);

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
          <ItemsListTasks
            tasks = {tasks}
            reloadTasks = {setLoadTasks} />
        </tbody>
      </Table>
    </div>
  );
}

export default ListTasks;
