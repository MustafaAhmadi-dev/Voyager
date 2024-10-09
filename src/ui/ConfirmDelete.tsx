import Button from "./Button";

type ConfirmDeleteProps = {
  resourceName: string;
  onConfirm?: () => void;
  disabled?: boolean;
  onCloseModal?: () => void;
};
function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}: ConfirmDeleteProps) {
  return (
    <div className="w-[40rem] flex flex-col gap-5">
      <h3>Delete {resourceName}</h3>
      <p className="text-gray-500 mb-5">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-5">
        <Button variant="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variant="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
