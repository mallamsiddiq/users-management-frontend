import { ThemeButton } from "./ThemeToggle";

const UserDetails = ({ user, handleEditToggle }) => {
    return (
      <div>
          <h3 className="card-title">{user.name}</h3>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Username: {user.username}</p>
          <p className="card-text">
          Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </p>
          <p className="card-text">Phone: {user.phone}</p>
          <p className="card-text">Website: {user.website}</p>
          <p className="card-text">
          Company: {user.company.name} - "{user.company.catchPhrase}"
          </p>
          <ThemeButton onClick={handleEditToggle}>
              Edit
          </ThemeButton>
      </div>
    );
};


export default UserDetails