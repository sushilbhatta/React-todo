// eslint-disable-next-line react/prop-types
export default function Button({ children, ...props }) {
  return (
    <button className='button' {...props}>
      {children}
    </button>
  );
}
