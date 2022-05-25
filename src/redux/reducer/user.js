import { createSlice } from '@reduxjs/toolkit';

// initialState 따로 빼주기
const initialStateValue = { name: '', age: 0, email: '' };

//사용할 리듀서의 이름을 정하고 createSlice로 지정
export const userSlice = createSlice({
  //리듀서의 이름을 뭘로 할지
  name: 'user',
  // 들어갈 데이터 초기값 설정
  initialState: { value: initialStateValue },
  //상태가 변하면 어떻게 실행될지
  reducers: {
    login: (state, action) => {
      // state는 잡아놓은 initialState의 value를 가져오는 역할, actions는 바꾸고 싶은 데이터를 원하는 곳에 넘겨주는 역할
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
