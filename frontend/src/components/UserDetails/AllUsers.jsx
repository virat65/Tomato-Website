import UserDetails from "./UserDetails";

const users = [
  {
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-234-567-8901",
  },
    {
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-234-567-8901",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1-987-654-3210",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    phone: "+1-555-123-4567",
  },
];

const AllUsers = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "32px",
        minHeight: "80vh",
      }}
    >
      {users.map((user, idx) => (
        <UserDetails user={user} key={idx} />
      ))}
    </div>
  );
};

export default AllUsers;
