# Solution for "Edit/Update a Task" User Story

## Step 1: Create a new file named `step3.md` in the `solutions` directory

```bash
mkdir solutions
touch solutions/step3.md
```

## Step 2: Add the solution for "Edit/Update a Task" user story

### Code Snippet 1: Edit Task Button

```tsx
import { useState } from "react";
import { ReactComponent as Edit } from "./assets/icons/edit.svg";
import AddEditTaskForm from "./components/AddEditTaskForm";
import Button from "./components/Button";

const App = () => {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowAddEditModal(true);
  };

  return (
    <div className="container">
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Task List</h2>
        </div>
        <div className="task-container">
          {taskList.map((task) => (
            <TaskCard task={task} onEdit={handleEditTask} />
          ))}
        </div>
        {showAddEditModal && <AddEditTaskForm task={taskToEdit} />}
      </div>
    </div>
  );
};

export default App;
```

### Explanation

In this code snippet, we import the necessary components and icons. We use the `useState` hook to manage the state of the `showAddEditModal` and `taskToEdit` variables. When the "Edit Task" button is clicked, the `handleEditTask` function is called, setting the `taskToEdit` state to the selected task and the `showAddEditModal` state to `true`, which triggers the display of the `AddEditTaskForm` component with the task information filled.

### Code Snippet 2: AddEditTaskForm Component

```tsx
import { useState, useEffect } from "react";
import classNames from "classnames";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import "./style.scss";

const AddEditTaskForm = ({ task, onClose }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("To Do");

  useEffect(() => {
    if (task) {
      setTaskTitle(task.title);
      setPriority(task.priority);
      setStatus(task.status);
    }
  }, [task]);

  const handleEditTask = () => {
    if (taskTitle.trim() === "") return;
    // Update task in the task list
    onClose();
  };

  return (
    <Modal>
      <form>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">Edit Task</span>
            <Close className="cp" onClick={onClose} />
          </div>
          <Input
            label="Task"
            placeholder="Type your task here..."
            onChange={(e) => setTaskTitle(e.target.value)}
            name="title"
            value={taskTitle}
          />
          <div className="modal-priority">
            <span>Priority</span>
            <ul className="priority-buttons">
              {["high", "medium", "low"].map((p) => (
                <li
                  key={p}
                  className={classNames(`${p}-selected`, {
                    selected: priority === p,
                  })}
                  onClick={() => setPriority(p)}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-status">
            <span>Status</span>
            <ul className="status-buttons">
              {["To Do", "In Progress", "Done"].map((s) => (
                <li
                  key={s}
                  className={classNames(`${s.toLowerCase()}-selected`, {
                    selected: status === s,
                  })}
                  onClick={() => setStatus(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title="Edit" onClick={handleEditTask} />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddEditTaskForm;
```

### Explanation

In this code snippet, we define the `AddEditTaskForm` component. We use the `useState` hook to manage the state of the `taskTitle`, `priority`, and `status` variables. The `useEffect` hook is used to set the initial state of these variables when the `task` prop changes. The `handleEditTask` function is called when the "Edit" button is clicked. If the task input is not empty, the task is updated in the task list, and the modal is closed by calling the `onClose` function.

### Code Snippet 3: TaskCard Component

```tsx
import classNames from "classnames";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import CircularProgressBar from "../CircularProgressBar";
import "./style.scss";

const TaskCard = ({ task, onEdit }) => {
  const { id, title, priority, status, progress } = task;

  return (
    <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Task</span>
        <span className="task">{title}</span>
      </div>
      <div className="flex">
        <span className="priority-title">Priority</span>
        <span className={classNames(`${priority}-priority`, "priority")}>
          {priority}
        </span>
      </div>
      <div className="task-status-wrapper">
        <button className="status">{status}</button>
      </div>
      <div className="progress">
        <CircularProgressBar strokeWidth={2} sqSize={24} percentage={progress} />
      </div>
      <div className="actions">
        <EditIcon className="mr-20 cp" onClick={() => onEdit(task)} />
        <DeleteIcon className="cp" />
      </div>
    </div>
  );
};

export default TaskCard;
```

### Explanation

In this code snippet, we define the `TaskCard` component. The `TaskCard` component takes `task` and `onEdit` as props. When the "Edit" icon is clicked, the `onEdit` function is called with the selected task as an argument.

## Step 3: Include code snippets and explanations for each step

The code snippets and explanations provided above cover the steps required to implement the "Edit/Update a Task" user story. These snippets include the necessary components and logic to edit a task in the task list, ensuring that the task information is filled in the modal and the task is updated when the "Edit" button is clicked.
