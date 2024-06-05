import styled from "styled-components";
import { IoMdMailOpen } from "react-icons/io";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 1rem;

      b {
        color: var(--color-orange-100);
      }
    }

    input {
      background-color: var(--color-grey-100);
      padding: 19px 30px 19px 30px;
      font-size: 1.6rem;
      border: none;
      outline: none;
      margin-bottom: 2.3rem;
    }

    textarea {
      background-color: var(--color-grey-100);
      height: 18rem;
      padding: 19px 30px 19px 30px;
      font-size: 1.6rem;
      border: none;
      outline: none;
      margin-bottom: 2.5rem;
    }

    button {
      background-color: var(--color-orange-200);
      padding: 1.8rem 3rem;
      border-radius: 0.3rem;
      box-shadow: 0 10px 15px 0 rgb(255 83 48 / 35%);
      transition: all 0.3s;
      border: var(--border-theme);
      color: var(--color-white);
      font-size: 1.8rem;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        box-shadow: 0 10px 15px 0 rgb(255 83 48 / 60%);
        background-color: var(--color-orange-400);
      }
    }
  }
`;

function ContactForm() {
  return (
    <StyledForm>
      <form>
        <label>
          Full Name <b>*</b>
        </label>
        <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

        <label>
          Email <b>*</b>
        </label>
        <input type="email" placeholder="youremail@example.com"></input>

        <label>
          Tell us about it <b>*</b>
        </label>
        <textarea placeholder="Write Here.."></textarea>

        <button type="submit">
          <IoMdMailOpen />
          &nbsp; Send Message
        </button>
      </form>
    </StyledForm>
  );
}

export default ContactForm;
