import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';

function ItemsListTasks(props) {

  return{
    props.tasks.map(tasks =>
      <tr key ={task.id} data-testid="task">
        <td width="75%"
          data-testid = "name-task">
          {task.name}
        </td>
      </tr>
    );
  }

}

ItemsListTasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    reloadTasks: PropTypes.func.isRequired
};

export default ItemsListTasks;
