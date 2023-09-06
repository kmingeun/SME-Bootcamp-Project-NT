<template v-if="isValidToken">
  <div class="navBar">
    <div class="ham">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="29"
        viewBox="0 0 38 28"
        fill="none"
      >
        <line
          x1="36.2418"
          y1="1"
          x2="1.66666"
          y2="0.999998"
          stroke="#5D5A88"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="36.2418"
          y1="13.6606"
          x2="1.66666"
          y2="13.6606"
          stroke="#5D5A88"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="36.2418"
          y1="26.3213"
          x2="1.66666"
          y2="26.3213"
          stroke="#5D5A88"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <div class="logoDiv">
      <div class="logoPic-passwordSearch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="34"
          viewBox="0 0 46 35"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.3638 9.65376C42.9182 9.65376 45.7997 7.49269 45.7997 4.82688C45.7997 2.16107 42.9182 0 39.3638 0C35.8094 0 32.928 2.16107 32.928 4.82688C32.928 7.49269 35.8094 9.65376 39.3638 9.65376Z"
            fill="#8D8BA7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.3635 21.7766C42.9179 21.7766 45.7993 19.6156 45.7993 16.9499C45.7993 14.2842 42.9179 12.1232 39.3635 12.1232C35.8091 12.1232 32.9277 14.2842 32.9277 16.9499C32.9277 19.6156 35.8091 21.7766 39.3635 21.7766Z"
            fill="#8D8BA7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.3635 34.3493C42.9179 34.3493 45.7993 32.1882 45.7993 29.5224C45.7993 26.8566 42.9179 24.6956 39.3635 24.6956C35.8091 24.6956 32.9277 26.8566 32.9277 29.5224C32.9277 32.1882 35.8091 34.3493 39.3635 34.3493Z"
            fill="#8D8BA7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.6008 21.7768C26.1551 21.7768 29.0364 19.6158 29.0364 16.95C29.0364 14.2843 26.1551 12.1233 22.6008 12.1233C19.0465 12.1233 16.1652 14.2843 16.1652 16.95C16.1652 19.6158 19.0465 21.7768 22.6008 21.7768Z"
            fill="#8D8BA7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.6006 34.3493C26.1549 34.3493 29.0362 32.1882 29.0362 29.5224C29.0362 26.8566 26.1549 24.6956 22.6006 24.6956C19.0463 24.6956 16.1649 26.8566 16.1649 29.5224C16.1649 32.1882 19.0463 34.3493 22.6006 34.3493Z"
            fill="#8D8BA7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.43578 34.3493C9.99019 34.3493 12.8716 32.1882 12.8716 29.5224C12.8716 26.8566 9.99019 24.6956 6.43578 24.6956C2.88136 24.6956 -6.10352e-05 26.8566 -6.10352e-05 29.5224C-6.10352e-05 32.1882 2.88136 34.3493 6.43578 34.3493Z"
            fill="#8D8BA7"
          />
        </svg>
      </div>
      <a href="" style="text-decoration-line: none">
        <span class="logo">PROJECT</span>
        <span class="logo-1">-NT</span>
      </a>
    </div>

    <div class="lockDiv">
      <button @click="navigateToLoginPage()" class="loginBtn">Login</button>
    </div>
  </div>

  <form class="main-passwordSearch">
    <div id="findPassword-passwordSearch">비밀번호 변경</div>
    <div class="emailDiv-passwordSearch1">
      <div id="email-passwordSearch">새 비밀번호</div>
      <div class="emailbox-passwordSearch">
        <input
          type="password"
          id="emailinput-passwordSearch"
          placeholder="********"
          v-model="password"
          @input="validatePassword"
          @blur="validatePassword"
        />
      </div>
      <!--비밀번호 조건 -->
      <div class="passwordText1">
        <p v-if="passwordError" class="error-message">
          {{ passwordError }}
        </p>
        <p v-else-if="passwordIsValid" class="success-message">
          <i style="margin-right: 5px" class="bi bi-check-circle"></i> 올바른
          비밀번호입니다.
        </p>
      </div>
    </div>

    <div class="phonenumberDiv-passwordSearch1">
      <div id="phonenumber-passwordSearch">새 비밀번호 확인</div>
      <div class="phonenumberbox-passwordSearch">
        <input
          type="password"
          id="phonenumberinput-passwordSearch"
          placeholder="********"
          v-model="confirmPassword"
          @input="validatePassword"
          @blur="validatePassword"
        />
      </div>
      <div class="confirmpasswordText1">
        <p v-if="confirmPasswordError" class="error-message">
          {{ confirmPasswordError }}
        </p>
        <p v-else-if="confirmPasswordIsValid" class="success-message">
          <i style="margin-right: 5px" class="bi bi-check-circle"></i>
          비밀번호가 일치합니다.
        </p>
      </div>
    </div>

    <div class="mainbutton-passwordSearch">
      <div class="findPasswordbutton-passwordSearch">
        <button @click="updatePassword()" type="button" class="findPasswordtext-passwordSearch">
          비밀번호 변경
        </button>
        <!--비밀번호 변경 버튼 누른 다음에-->
      </div>
      <div class="side-buttonDiv-passwordSearch">
        <a
          href=""
          @click="navigateToLoginPage()"
          class="side-button-passwordSearch"
          >로그인 화면
        </a>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      passwordError: "",
      confirmPasswordError: "",
      isValidToken: false,
      tokenExpired: false,
    };
  },
  setup() {},
  created() {
    this.verifyToken();
  },
  mounted() {},
  unmounted() {},
  methods: {
    navigateToidSearchPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push("/idSearch"); // '/idSearch'는 이동하고자 하는 라우터 경로로 변경해야 합니다
    },
    navigateToLoginPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push("/LoginPage"); // '/LoginPage'는 이동하고자 하는 라우터 경로로 변경해야 합니다
    },

    resetPassword() {
      const resetData = {
        email: this.email, // 사용자가 입력한 이메일
        phone: this.phone, // 사용자가 입력한 전화번호
      };

      // 서버로 비밀번호 찾기 요청 보내기
      this.$axios
        .post("http://localhost:3000/auth/searchPassword", resetData)
        .then((response) => {
          if (response.data.email) {
            // 이메일이 존재하면 비밀번호 재설정 링크를 보냈다는 메시지를 사용자에게 표시
            alert("비밀번호 재설정 링크를 이메일로 보냈습니다.");
          } else {
            // 이메일이 존재하지 않으면 사용자에게 메시지 표시
            alert("일치하는 이메일이 없습니다.");
          }
        })
        .catch((error) => {
          console.error("비밀번호 재설정 오류:", error);
          // 오류 발생 시 사용자에게 오류 메시지 표시
          alert("비밀번호 재설정 중 오류가 발생했습니다.");
        });
    },
    validatePassword() {
      if (this.password.length < 8) {
        this.passwordError = "비밀번호는 최소 8자 이상이어야 합니다.";
      } else if (
        !/[A-Za-z]/.test(this.password) ||
        !/[0-9]/.test(this.password) ||
        !/[!@#$%^&*()_+{}:;<>,.?~/-]/.test(this.password)
      ) {
        this.passwordError = "영문자, 숫자, 특수기호를 모두 포함해주세요.";
      } else {
        this.passwordError = "";
      }

      if (this.confirmPassword !== this.password) {
        this.confirmPasswordError = "비밀번호가 일치하지 않습니다.";
      } else {
        this.confirmPasswordError = "";
      }
    },

    //토큰 메소드
    async verifyToken() {
      console.log('verifyToken 호출')
      try {
        const token = this.$route.params.token;

        // Axios를 사용하여 서버의 verifyToken 엔드포인트에 토큰을 전달하여 검증합니다.
        const response = await this.$axios.get(
          `http://localhost:3000/auth/verifyToken/${token}`
        );

        // 서버에서 받은 응답에 따라 토큰의 유효성을 결정합니다.
        if (response.data.valid) {
          alert("비밀번호 변경 페이지로 이동합니다.");
          this.isValidToken = true;
          // 토큰이 유효한 경우, 원하는 동작을 수행하거나 페이지 내용을 표시합니다.
          // 예를 들어, 페이지 이동 로직을 추가하세요.
        } else {
          this.isValidToken = false;
          // 토큰이 유효하지 않은 경우, 다른 동작을 수행하거나 오류 메시지를 표시합니다.
          if (response.data.expired) {
            alert("만료된 토큰입니다. 다시 한 번 시도해주세요.");
          } else {
            alert("유효하1 않는 접근입니다. 다시 한 번 시도해주세요.");
          }
          // 유효하지 않은 토큰일 경우 다른 라우터로 리다이렉션합니다.
          this.$router.replace("/passwordSearch"); // 이동하고자 하는 라우터 경로로 변경해야 합니다.
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        // 토큰 검증 중 오류가 발생한 경우에 대한 처리를 수행할 수 있습니다.
        // 오류 처리 후 리다이렉션 로직도 추가하세요.
        alert("유효하2 않는 접근입니다. 다시 한 번 시도해주세요.");
        this.$router.replace("/passwordSearch"); // 이동하고자 하는 라우터 경로로 변경해야 합니다.
      }
    },
  
  async updatePassword() {
    
    try {
      const token = this.$route.params.token;
      const password = this.password; // 새로운 비밀번호

      // Axios를 사용하여 서버의 updatePassword 엔드포인트에 요청을 보냅니다.
      const response = await this.$axios.post(
        "http://localhost:3000/auth/updatePassword",
        {
          token,
          password,
        },
      );
      console.log(response);

      if (response.status === 200) {
        alert("비밀번호가 성공적으로 변경되었습니다. 로그인 페이지로 이동합니다.");
        this.$router.push("/LoginPage"); // 이동하고자 하는 경로로 변경
      } else {
        // 서버에서 에러 응답이 오면 사용자에게 에러 메시지를 표시합니다.
        alert("비밀번호 변경 중 오류가 발생했습니다.");
      }
    } 
    catch (error) {
      console.error("Error updating password:", error);
      // 클라이언트 측에서 에러가 발생한 경우 처리할 내용을 여기에 추가합니다.
      alert("비밀번호 변경 중 오류가 발생했습니다.");
    }
  },
},

  computed: {
    passwordMismatch() {
      return this.password !== this.confirmPassword;
    },
    hasRequiredCharacters() {
      return (
        /[A-Za-z]/.test(this.password) &&
        /[0-9]/.test(this.password) &&
        /[!@#$%^&*()_+{}:;<>,.?~/-]/.test(this.password)
      );
    },
    passwordIsValid() {
      return (
        this.password.length >= 8 &&
        /[A-Za-z]/.test(this.password) &&
        /[0-9]/.test(this.password) &&
        /[!@#$%^&*()_+{}:;<>,.?~/-]/.test(this.password)
      );
    },
    confirmPasswordIsValid() {
      return this.confirmPassword === this.password && this.confirmPassword;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "yg-jalnan";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "establishRetrosansOTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/establishRetrosansOTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

body,
div,
span,
button,
a {
  font-family: "yg-jalnan", sans-serif;
}

.logo,
.logo-1 {
  font-family: "establishRetrosansOTF", sans-serif;
}

body {
  margin: 0;
}
.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid #d6dbe5;
}
.ham {
  margin: 10px;
  cursor: pointer;
}
.logoDiv {
  display: flex;
  align-items: center;
}
.logoPic-passwordSearch {
  margin-right: 10px;
}
.logo {
  color: #443e92;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
}
.logo-1 {
  color: #5d5a88;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
}
.lockDiv {
  display: flex;
}
.loginBtn {
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 30px;
  border: none;
  background: #5d5a88;
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
}
.main-passwordSearch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#findPassword-passwordSearch {
  margin-top: 100px;
  margin-bottom: 50px;
  color: #5d5a88;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
}
.emailDiv-passwordSearch1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
#email-passwordSearch {
  color: #5d5a88;
  font-size: 16px;
  font-weight: 700;
}
.emailbox-passwordSearch {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 340px;
  height: 45px;
  border-radius: 50px;
  background: #f4f4fc;
}
#emailinput-passwordSearch {
  margin-left: 15px;
  border: none;
  height: 100%;
  width: 308px;
  background: transparent;
  outline: none;
  color: rgb(72, 72, 72);
  font-weight: 600;
  font-family: "Nanum Gothic", sans-serif;
}
#emailinput-passwordSearch::placeholder {
  font-weight: 500;
  font-size: 15px;
  font-family: "Nanum Gothic", sans-serif;
}

.phonenumberDiv-passwordSearch1 {
  display: flex;
  flex-direction: column;
}
#phonenumber-passwordSearch {
  color: #5d5a88;
  font-size: 16px;

  font-weight: 700;
}
.phonenumberbox-passwordSearch {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 340px;
  height: 45px;
  border-radius: 50px;
  background: #f4f4fc;
}
#phonenumberinput-passwordSearch {
  margin-left: 15px;
  border: none;
  height: 100%;
  width: 308px;
  background: transparent;
  outline: none;
  color: rgb(72, 72, 72);
  font-weight: 600;
  font-family: "Nanum Gothic", sans-serif;
}
#phonenumberinput-passwordSearch::placeholder {
  font-weight: 500;
  font-size: 15px;
  font-family: "Nanum Gothic", sans-serif;
}

.findPasswordbutton-passwordSearch {
  margin-top: 15px;
  display: flex;
  align-items: center;
  border-radius: 40px;
  background: #5d5a88;
}

/*텍스트 위치 조정 필요*/
.findPasswordtext-passwordSearch {
  color: #fff;
  font-size: 16px;
  width: 340px;
  height: 40px;
  background: #5d5a88;
  border-radius: 40px;
  font-style: normal;
  font-weight: 700;
  border: none;
}

.side-buttonDiv-passwordSearch {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.side-button-passwordSearch {
  color: #5d5a88;
  font-size: 14px;
  font-weight: 800;
  text-decoration-line: none;
}

.side-button-passwordSearch:focus {
  color: rgb(0, 60, 255);
}

.line {
  color: #5d5a88;
  font-size: 14px;
  font-weight: 700;
}
</style>
