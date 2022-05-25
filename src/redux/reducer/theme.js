import { createSlice } from '@reduxjs/toolkit';

// initialState 따로 빼주기
const initialStateValue = '';

//사용할 리듀서의 이름을 정하고 createSlice로 지정
export const themeSlice = createSlice({
  //리듀서의 이름을 뭘로 할지
  name: 'theme',
  // 들어갈 데이터 초기값 설정
  initialState: { value: initialStateValue },
  //상태가 변하면 어떻게 실행될지
  reducers: {
    changeTextColor: (state, action) => {
      // state는 잡아놓은 initialState의 value를 가져오는 역할, actions는 바꾸고 싶은 데이터를 원하는 곳에 넘겨주는 역할
      state.value = action.payload;
    },
  },
});

export const { changeTextColor } = themeSlice.actions;
export default themeSlice.reducer;
