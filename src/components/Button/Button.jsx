function Button({ title, className }) {
  return (
    <>
      <button className={`rounded-full p-2 text-base ${className}`}>
        {title}
      </button>
    </>
  );
}

export default Button;
