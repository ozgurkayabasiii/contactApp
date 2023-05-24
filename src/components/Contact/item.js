import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
function Item({ item }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteContact(id));
    }
  };
  return (
    <li>
      <span>{item.name}</span>

      <span>{item.phone_number}</span>
      <span onClick={()=>handleDelete(item.id)} className="deleteBtn">
        x
      </span>
    </li>
  );
}

export default Item;
