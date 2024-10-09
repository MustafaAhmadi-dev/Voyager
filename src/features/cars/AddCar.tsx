import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCarForm from "./CreateCarForm";

function AddCar() {
    return (
      <div>
        <Modal>
          <Modal.Open opens="car-form">
            <Button>Add new car</Button>
          </Modal.Open>
          <Modal.Window name="car-form" scroll>
            <CreateCarForm />
          </Modal.Window>
        </Modal>
      </div>
    );
  }
  
  export default AddCar;