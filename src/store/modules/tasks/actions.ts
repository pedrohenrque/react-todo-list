export function addTaskToList(title: string) {
  return {
    type: 'ADD_TASK_TO_LIST',
    payload: {
      title: title
    }
  };
}

export function removeTaskFromList(id: number) {
  return {
    type: 'REMOVE_TASK_FROM_LIST',
    payload: {
      id: id
    }
  };
}
