import React, { useRef, useEffect } from 'react';

function MyForm() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('Input ref assigned:', inputRef.current);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input ref on submit:', inputRef.current);
    // Check if the input element is not null before calling focus
    if (inputRef.current) {
      inputRef.current.focus();
    } else {
      console.error('Input ref is null');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;