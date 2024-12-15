import { useRef } from "react";
import Input from "./Input";

export default function NewTodo({ onAdd }) {
  const title = useRef();
  const description = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    // validation

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
    });
  }

  return (
    <div className='new-project'>
      <menu className='new-project-menu'>
        <li>
          <button className='new-project_menu--cancel'>Cancle</button>
        </li>
        <li>
          <button onClick={handleSave} className='new-project_menu--save'>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label='Title'></Input>
        <Input ref={description} label='Description' textarea></Input>
      </div>
    </div>
  );
}
