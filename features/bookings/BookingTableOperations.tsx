import SortBy from "../../ui/SortBy";

function BookingTableOperations() {
  return (
    <div className="flex items-center gap-6">
      <SortBy
        options={[
          { value: "pickUpDate-desc", label: "Sort by date (recent first)" },
          { value: "pickUpDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </div>
  );
}

export default BookingTableOperations;
