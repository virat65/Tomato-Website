
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  if (!user) return <div className="user-details">No user data available.</div>;
  return (
    <div className="user-details-card">
      <div className="user-photo-section">
        <img
          src={user.photo }
          alt={user.name }
          className="user-photo"
        />
      </div>
      <div className="user-info-section">
        <h2 className="user-name">{user.name }</h2>
        <p className="user-email">Email: {user.email}</p>
        <p className="user-phone">Phone: {user.phone }</p>
      </div>
    </div>
  );
};

export default UserDetails;
