import { Button } from "react-bootstrap";

function ListStateUp(props) {
    return (
        <>
            <Button 
                onClick={() => props.alert({
                name: "Suraj Kashyap",
                age: 18
            })}
            >
                Click Me
            </Button>
        </>
    );
}

export default ListStateUp;