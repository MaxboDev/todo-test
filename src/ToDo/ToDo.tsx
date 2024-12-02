import './ToDo.css';

export default function ToDo() {
  return (
    <>
      <div className="input-wrapper">
        <input className="add-task-textbox" type="text" placeholder="Enter a new task name..." />
        <button className="add-task-button">Add</button>
      </div>
    </>
  )
}
