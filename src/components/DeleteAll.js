import { Button } from "react-bootstrap";
const DeleteAll = ({ onDeleteAll }) => {

    return (

        <Button variant="warning" onClick = {onDeleteAll}>Delete All</Button>
    )
}

export default DeleteAll;