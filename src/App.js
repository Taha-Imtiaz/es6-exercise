import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import { getUsers } from "./Redux/user/userActions";

const App = ({ getUsers, users }) => {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (e) => {
    let { value } = e.target;
    // 1 sec delay if searched characters are less than 3
    value.length < 3 ? setSearchText(value) : setTimeout(() => {
      setSearchText(value);
    }, 1000);
    
    console.log(value);
    if (value.length >= 3) {
      setTimeout(() => {}, 1000);
    }
  };

  console.log(searchText);

  var userShownArr = users;
  var filteredUsers = null;
  if (searchText === "" || searchText.length < 3) {
    filteredUsers = userShownArr;
  } else if (searchText.length >= 3) {
      filteredUsers =
      userShownArr &&
      userShownArr.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
  }
  console.log(filteredUsers);

  return (
    <div className="App">
      <div className="appInput">
        <Input handleSearch={handleSearch} searchText={searchText} />
      </div>
      <div className="userList">
        <List filteredUsers={filteredUsers} />
      </div>
    </div>
  );
};
var mapStateToProps = (state) => ({
  users: state.users && state.users.users && state.users.users.data,
});
var actions = {
  getUsers,
};
export default connect(mapStateToProps, actions)(App);
