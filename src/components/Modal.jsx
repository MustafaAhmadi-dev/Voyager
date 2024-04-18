import { IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import CarInfo from "./CarInfo";
import PersonalInfo from "./PersonalInfo";

function Modal({ toggleModal, order }) {
  return (
    <>
      <div className="modal-overlay">
        <div className="booking-modal">
          {/* title */}
          <div className="booking-modal__title">
            <h2>Complete Reservation</h2>
            <IconX width={20} height={20} onClick={toggleModal} />
          </div>

          {/* message */}
          <div className="booking-modal__message">
            <h4>
              <IconInfoCircleFilled /> Upon completing this reservation enquiry,
              you will receive:
            </h4>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>

          <CarInfo order={order} />

          <PersonalInfo toggleModal={toggleModal} />
        </div>
      </div>
    </>
  );
}

export default Modal;
