import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { Car, useCreateCars, useDeleteCar } from "./useCars";
import { formatCurrency } from "../../utils/helper";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateCarForm from "./CreateCarForm";

function CarRow({ car }: { car: Car }) {
  const {
    id: carId,
    name,
    image,
    num_seats: numSeats,
    regular_price: price,
    car_type: type,
  } = car;
  const { createCar, isCreating } = useCreateCars();
  const { deleteCar, isDeleting } = useDeleteCar();

  function handleDuplicate() {
    createCar({
      name: `Copy of ${name}`,
      image,
      num_seats: numSeats,
      regular_price: price,
      car_type: type,
    });
  }

  return (
    <>
      <Table.Row>
        <img
          src={image}
          className="block w-24 object-cover object-center"
          style={{
            transform: "scale(1.5) translateX(-7px)",
            aspectRatio: "3 / 2",
          }}
        />
        <div className="text-2xl font-semibold font-[Sono]">
          {name}
        </div>
        <div>Fits up to {numSeats} passengers</div>
        <div> {type} </div>
        <div className="font-[Sono] font-semibold">{formatCurrency(price)}</div>

        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={carId.toString()} />

              <Menus.List id={carId.toString()}>
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={handleDuplicate}
                  disabled={isCreating}
                >
                  Duplicate
                </Menus.Button>

                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit" scroll>
                <CreateCarForm carToEdit={car} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="cabins"
                  disabled={isDeleting}
                  onConfirm={() => deleteCar(carId)}
                />
              </Modal.Window> 
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default CarRow;
