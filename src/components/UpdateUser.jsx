import { ThemeButton } from "./ThemeToggle";

const UserUpdate = ({ user, handleUpdate, handleChange, setEditable, handleDelete }) => {
    return (
      <div>
        <h3 className="card-title">
            <input type="text" name="name" value={user.name} onChange={handleChange} />
        </h3>
        <p className="card-text">
            Email: <input type="email" name="email" value={user.email} onChange={handleChange} />
        </p>
        <p className="card-text">
            Username: <input type="text" name="username" value={user.username} onChange={handleChange} />
        </p>
        <p className="card-text">
            Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </p>
        <p className="card-text">
            Phone: <input type="text" name="phone" value={user.phone} onChange={handleChange} />
        </p>
        <p className="card-text">
            Website: <input type="text" name="website" value={user.website} onChange={handleChange} />
        </p>
        <p className="card-text">
            Company: <input type="text" name="company" value={user.company.name} onChange={handleChange} /> -  
            <input type="text" name="catchPhrase" value={user.company.catchPhrase} onChange={handleChange} />
        </p>
        <div className="d-flex justify-content-between">
            <div>
                <ThemeButton onClick={handleUpdate}>
                Update
                </ThemeButton>
                <button className="btn btn-secondary mr-2" onClick={() => setEditable(false)}>
                Cancel
                </button>
            </div>
            <button className="btn btn-danger" onClick={handleDelete}>
                Delete
            </button>
        </div>
      </div>
    );
};

export default UserUpdate