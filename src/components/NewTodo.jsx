import Input from "./Input";

export default function NewTodo() {
  return (
    <div className='new-project'>
      <menu className='new-project-menu'>
        <li>
          <button className='new-project_menu--cancel'>Cancle</button>
        </li>
        <li>
          <button className='new-project_menu--save'>Save</button>
        </li>
      </menu>
      <div>
        <Input label='Title'></Input>
        <Input label='Description' textarea></Input>
        <Input label='Due Date'></Input>
      </div>
    </div>
  );
}
