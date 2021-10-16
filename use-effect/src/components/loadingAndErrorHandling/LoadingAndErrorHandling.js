import React , {useState, useEffect} from "react";

function LoadingAndErrorHandling() {
  let [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const usersList =
    users &&
    users.map((user) => {
      return (
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
          }}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              margin: "15px",
            }}
            src={user.avatar_url}
          />
          <div className="info">
            <h4 style={{ marginBottom: "8px" }}>{user.login}</h4>
            <span>Profile</span>
          </div>
        </li>
      );
    });

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "No user found";
  }

  return (
    <React.Fragment>
      <h3 style={{textAlign: 'center'}}>Github Users</h3>
      <ul>{usersList}</ul>
    </React.Fragment>
  );
}

export default LoadingAndErrorHandling;
