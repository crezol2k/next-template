import { fork, take } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { login, logout, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  console.log('handle login', payload);
}

function* handleLogout() {
  console.log('handle logout');
}

function* handleOpenModal() {
  console.log('handle open modal');
}

function* watchLoginFlow() {
  const action: PayloadAction<LoginPayload> = yield take(login.type);
  yield fork(handleLogin, action.payload);

  yield take(logout.type);
  yield fork(handleLogout);

}
export default function* authSaga() {
  yield fork(watchLoginFlow);
}
