import React from 'react';
import { A } from 'hookrouter';

function ListTasks() {
  return (
    <A href="/cadastrar"
      className="btn btn-success btn-sm">
      New task
    </A>
  );
}

export default ListTasks;
