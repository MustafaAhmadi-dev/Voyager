import { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";
import BookCarForm from "./BookCarForm";
import Modal from "./Modal";
import { CAR_DATA } from "../../data/CarData";

function BookCar() {
  const cars = CAR_DATA;
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState({});
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  function toggleModal() {
    setModal((modal) => !modal);
  }

  function handleOrder(e) {
    const name = e.target.name;
    const value = e.target.value;
    setOrder((order) => ({ ...order, [name]: value }));
  }

  return (
    <>
      {!modal && (
        <section className="booking-section">
          <div className="container">
            <div className="book-content">
              <div className="book-content__box">
                <h2>Book a car</h2>

                {error && (
                  <p className="error-message">
                    All fields required! <XIcon setValue={setError} />
                  </p>
                )}

                {message && (
                  <p className="booking-done">
                    Check your email to confirm the order.
                    <XIcon setValue={setMessage} />
                  </p>
                )}

                <BookCarForm
                  cars={cars}
                  toggleModal={toggleModal}
                  order={order}
                  handleOrder={handleOrder}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {modal && <Modal toggleModal={toggleModal} order={order} />}
    </>
  );
}

export default BookCar;

function XIcon({ setValue }) {
  return (
    <IconX
      width={20}
      height={20}
      style={{ cursor: "pointer" }}
      onClick={() => setValue(false)}
    />
  );
}
