function Greet({name}) {
    function apple() {
        alert('Hello, from apple');
    }

    return (
        <>
            Hello, {name}
            <button onClick={() => alert('Hello, this is me')}>Click Me</button>
        </>
    );
}

export default Greet;