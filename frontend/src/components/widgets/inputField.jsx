function InputField(props) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input input-bordered w-44 h-8 rounded-full"
      />
    </>
  );
}

export default InputField;
