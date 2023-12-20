import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firestore_config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  addUserLocalStorage,
  getUserFromLocalStorage,
  removeLocalStorage,
} from "../../localStorage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromLocalStorage(),
    isLoading: false,
  },
  reducers: {
    logUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logOut: (state) => {
      removeLocalStorage();
      state.user = null;
      state.isLoading = false;
    },
  },
});

// LOGINUSER

export const signIn = (email, password) => async (dispatch) => {
  const trimmedEmail = email.trim();

  signInWithEmailAndPassword(auth, trimmedEmail, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch(logUser(user));
      addUserLocalStorage(user);
      dispatch(setLoading(true));
    })
    .then(() => {
      alert("Logged In");
    })
    .catch((error) => {
      alert(error.message);
    });
};

// SIGNUP USER

export const signUp = (email, password, name) => async (dispatch) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      addUserLocalStorage(user);
      return updateProfile(user, { displayName: name });
    })
    .then(() => {
      const user = getAuth().currentUser;
      dispatch(logUser(user));
      dispatch(setLoading(true));
    })
    .then(() => {
      alert("Profile Created");
    })
    .catch((error) => {
      alert(error.message);
      dispatch(setLoading(false));
    });
};

export const { logOut, logUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
