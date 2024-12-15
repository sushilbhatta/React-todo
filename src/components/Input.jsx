// eslint-disable-next-line react/prop-types
export default function Input({ label, textarea, ...props }) {
  console.log(textarea);
  return (
    <p className='input-container'>
      <label className=''>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
