import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';

function ItemsListTasks(props) {

  function isConclude(task) {
    return task.conclude ? 'line-through' : 'none';
  }

  return (
    props.tasks.map(task =>
      <tr key ={task.id} data-testid="task">
        <td width="75%"
          data-testid = "name-task"
          style={{ textDecoration: isConclude(task) }}>
          {task.name}
        </td>
        <td className="text-right">
          <A href={"/update/" + task.id}
            className={task.conclude ? 'hidden' : 'btn btn-warning btn-sm '}>
            <FontAwesomeIcon icon={faEdit}/>
          </A>
        </td>
      </tr>
    )
  );

}

ItemsListTasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    reloadTasks: PropTypes.func.isRequired
};

export default ItemsListTasks;
