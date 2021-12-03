import { useState } from "react";
import styles from "./ToDo.module.css";

function ToDo({ title, id, deleteTodo = (f) => f }) {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked((checked) => !checked);
  return (
    <div className={styles.todowrapper}>
      <input type="checkbox" onClick={toggle} value={checked} />
      <p>{title}</p>
      {checked ? <button onClick={() => deleteTodo(id)}>Delete</button> : null}
    </div>
  );
}

export default ToDo;
