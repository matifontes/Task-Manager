import React from 'react';
import './task-manager.css';
import { useRoutes } from 'hookrouter';
import ListTasks from './list/list-tasks';
import RegisterTask from './register/register-task';
import UpdateTask from './update/update-task';


const routes = {
  '/': () => <ListTasks />,
  '/cadastrar': () => <RegisterTask />,
  '/update/:id': ({id}) => <UpdateTask id={id} />
};

function TaskManager() {
  return useRoutes(routes);
}

export default TaskManager;
