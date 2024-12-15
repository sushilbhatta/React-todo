import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

// eslint-disable-next-line react/prop-types
export default function NewTodo({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    // validation
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='Close'>
        <h2 className='modal__title'>Invalid Input</h2>
        <p className='modal__description'>Oops .... Something went wrong</p>
        <p className='modal__description'>
          Please make sure you Provide value for title and description
        </p>
      </Modal>
      <div className='new-project'>
        <menu className='new-project-menu'>
          <li>
            <button onClick={onCancel} className='new-project_menu--cancel'>
              Cancle
            </button>
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
    </>
  );
}
