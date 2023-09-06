import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setIsLoggedIn(state, value) {
      console.log("Current state:", state.isLoggedIn); // Log the current state before mutation
      state.isLoggedIn = value;
      console.log("Updated state:", state.isLoggedIn); // Log the updated state after mutation
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        // 서버로 로그인 요청 보내기
        await axios.post("http://localhost:3000/auth/login", credentials, {
          withCredentials: true,
        });

        // 로그인 성공 시 상태를 변경하고, 서버에서 설정한 accessToken을 쿠키에서 읽을 수 있음
        commit("setIsLoggedIn", true);
        return "로그인 성공"; // 예: "로그인 성공" 문자열을 반환
      } catch (error) {
        console.error("로그인 실패:", error);
        throw error; // 실패 시 예외 처리
      }
    },

    async logout({ commit }) {
      try {
        // 서버로 로그아웃 요청 보내기 (클라이언트에서 처리할 필요 없음)
        await axios.post("http://localhost:3000/auth/logout", null, {
          withCredentials: true,
        });

        // 로그아웃 성공 시 클라이언트 상태를 업데이트합니다.
        commit("setIsLoggedIn", false);
      } catch (error) {
        console.error("로그아웃 실패:", error);
        throw error;
      }
    },
  },
  getters: {
    // 게터(계산된 상태 값) 정의
  },
  modules: {
    // 필요한 경우 모듈 추가
  },
});
