import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CarTableOperations() {
  return (
    <div className="flex items-center gap-6">
      <Filter
        field="type"
        options={[
          { value: "all", label: "All" },
          { value: "luxury", label: "Luxury" },
          { value: "medium-cars", label: "Medium Cars" },
          { value: "people-carrier", label: "People Carrier" },
        ]}
      />

      <SortBy
        options={[
          { value: "regular_price-asc", label: "Sort by price (low first)" },
          { value: "regular_price-desc", label: "Sort by price (high first)" },
          {
            value: "num_seats-asc",
            label: "Sort by number of seats (low first)",
          },
          {
            value: "num_seats-desc",
            label: "Sort by number of seats (high first)",
          },
        ]}
      />
    </div>
  );
}

export default CarTableOperations;
