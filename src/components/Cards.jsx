import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

function Card({ lang, setCurrentLang}) {
    return(
        <>
            <ListGroupItem onClick={() => setCurrentLang(lang)}>{lang.name}</ListGroupItem>    
        </>
    );
};

export default Card;
