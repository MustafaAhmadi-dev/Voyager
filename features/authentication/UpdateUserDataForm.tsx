import { FormEvent, useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import useUser from "./useUser";
import { useUpdateData } from "./useAuth";

function UpdateUserDataForm() {
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const { updateUser, isUpdating } = useUpdateData();

  const { user } = useUser();
  const currentFullName = user?.user_metadata.fullName;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!fullName) return;

    if (avatar) {
      updateUser(
        { fullName, avatar },
        {
          onSuccess: () => {
            setAvatar(null);
            e.currentTarget.reset();
          },
        }
      );
    }
  }

  function handleCancel() {
    setFullName(currentFullName as string);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={user?.email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files![0])}
          disabled={isUpdating}
        />
      </FormRow>

      <div className="flex w-full">
        <Button
          type="reset"
          variant="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
          className="mr-8 px-12"
        >
          Cancel
        </Button>
        <Button disabled={isUpdating} className="ml-8 px-12">
          Update account
        </Button>
      </div>
    </Form>
  );
}

export default UpdateUserDataForm;
