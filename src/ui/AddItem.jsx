import { IoMdAddCircleOutline } from "react-icons/io";

import Button from "./Button";
import AddClothesForm from "../features/picker/AddClothesForm";
import Modal from "./Modal";

function AddItem({ type }) {
  return (
    <Modal>
      <Modal.Open opens="add-item-form">
        <Button type="add">
          <IoMdAddCircleOutline className="mr-0.5" /> <span>Add Item</span>
        </Button>
      </Modal.Open>
      <Modal.Window name="add-item-form">
        <AddClothesForm type={type} />
      </Modal.Window>
    </Modal>
  );
}

export default AddItem;

// function AddItem({ type }) {
//   const [showAddModal, setShowAddModal] = useState(false);

//   return (
//     <div className="mt-2 sm:mt-0">
//       <Button type="add" onClick={() => setShowAddModal(true)}>
//         <IoMdAddCircleOutline className="mr-0.5" /> <span>Add Item</span>
//       </Button>
//       {showAddModal && (
//         <Modal onClose={() => setShowAddModal(false)}>
//           <AddClothesForm
//             type={type}
//             onCloseModal={() => setShowAddModal(false)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddItem;
