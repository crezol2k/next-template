import { User } from '@/declares/models/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
  modalSignIn: {
    isOpen?: boolean;
  };
  modalSignUp: {
    isOpen?: boolean;
  };
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  modalSignIn: {
    isOpen: false,
  },
  modalSignUp: {
    isOpen: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
    // modal
    openSignInModal(state) {
      state.modalSignIn.isOpen = true;
      state.modalSignUp.isOpen = false;
    },
    closeSignInModal(state) {
      state.modalSignIn.isOpen = false;
    },
    openSignUpModal(state) {
      state.modalSignUp.isOpen = true;
      state.modalSignIn.isOpen = false;
    },
    closeSignUpModal(state) {
      state.modalSignUp.isOpen = false;
    },
  },
});

// Actions
export const {
  openSignInModal,
  closeSignInModal,
  openSignUpModal,
  closeSignUpModal,
  login,
  loginFailed,
  loginSuccess,
  logout,
} = authSlice.actions;

// Selectors

// Reducer
export const authReducer = authSlice.reducer;
