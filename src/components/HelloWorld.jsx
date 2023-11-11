function HelloWorld(props) {  
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <h1>Email: {props.email}</h1>
    </>
  );
}

export default HelloWorld;