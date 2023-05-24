import { contactSelectors } from "../../redux/contactsSlice"
import { useSelector } from "react-redux"
import Item from './item'
function List() {
    const contact = useSelector(contactSelectors.selectAll)

  return (
    <ul className="list">
      {contact.map((contact)=>(
        <Item key={contact.id} item={contact} />
      ))}
    </ul>
  )
}

export default List
