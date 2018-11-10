import axios from "axios";
export const LOAD_FRIENDS = "LOAD_FRIENDS";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

// GET
export const loadFriends = () => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        dispatch({ type: LOAD_FRIENDS, friends: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          errorMessage:
            "I'm having a spot of trouble loading your friends, please give me another go, mate!",
        });
      });
  };
};

// POST
export const createFriend = (newFriend) => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        dispatch({ type: LOAD_FRIENDS, friends: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          errorMessage:
            "I'm having a problem adding your new friend, shall I try again?"});
      });
  };
};

// DELETE

export const deleteFriend = id => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        dispatch({ type: LOAD_FRIENDS, friends: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          errorMessage:
            "Dude, your friend won't delete.  Do you really want to 86 them?",
        });
      });
  };
};

// PUT
export const updateFriend = updatedFriend => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`)
      .then(response => {
        dispatch({ type: LOAD_FRIENDS, friends: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          errorMessage:
            "Wow, I can't believe your friend didn't update!  Should I take another shot?",
        });
      });
  };
};
