<template>
  <div class="navBar">
  
  <div class="ham"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 38 28" fill="none">
    <line x1="36.2418" y1="1" x2="1.66666" y2="0.999998" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/>
    <line x1="36.2418" y1="13.6606" x2="1.66666" y2="13.6606" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/>
    <line x1="36.2418" y1="26.3213" x2="1.66666" y2="26.3213" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  
  <div class="logoDiv">
    <div class="logoPic-passwordSearch"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 35" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3638 9.65376C42.9182 9.65376 45.7997 7.49269 45.7997 4.82688C45.7997 2.16107 42.9182 0 39.3638 0C35.8094 0 32.928 2.16107 32.928 4.82688C32.928 7.49269 35.8094 9.65376 39.3638 9.65376Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3635 21.7766C42.9179 21.7766 45.7993 19.6156 45.7993 16.9499C45.7993 14.2842 42.9179 12.1232 39.3635 12.1232C35.8091 12.1232 32.9277 14.2842 32.9277 16.9499C32.9277 19.6156 35.8091 21.7766 39.3635 21.7766Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3635 34.3493C42.9179 34.3493 45.7993 32.1882 45.7993 29.5224C45.7993 26.8566 42.9179 24.6956 39.3635 24.6956C35.8091 24.6956 32.9277 26.8566 32.9277 29.5224C32.9277 32.1882 35.8091 34.3493 39.3635 34.3493Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6008 21.7768C26.1551 21.7768 29.0364 19.6158 29.0364 16.95C29.0364 14.2843 26.1551 12.1233 22.6008 12.1233C19.0465 12.1233 16.1652 14.2843 16.1652 16.95C16.1652 19.6158 19.0465 21.7768 22.6008 21.7768Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6006 34.3493C26.1549 34.3493 29.0362 32.1882 29.0362 29.5224C29.0362 26.8566 26.1549 24.6956 22.6006 24.6956C19.0463 24.6956 16.1649 26.8566 16.1649 29.5224C16.1649 32.1882 19.0463 34.3493 22.6006 34.3493Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.43578 34.3493C9.99019 34.3493 12.8716 32.1882 12.8716 29.5224C12.8716 26.8566 9.99019 24.6956 6.43578 24.6956C2.88136 24.6956 -6.10352e-05 26.8566 -6.10352e-05 29.5224C-6.10352e-05 32.1882 2.88136 34.3493 6.43578 34.3493Z" fill="#8D8BA7"/></svg>
    </div>
    <a href="" style="text-decoration-line: none;">
      <span class="logo">PROJECT</span>
      <span class="logo-1">-NT</span>
    </a>
  </div>
  
  <div class="lockDiv">
    <button @click="navigateToLoginPage()" class="loginBtn">Login</button>
  </div>
</div>


    <form class="main-passwordSearch">
        <div id="findPassword-passwordSearch">비밀번호 찾기</div>
        <div class="emailDiv-passwordSearch">
        <div id="email-passwordSearch">이메일(아이디)</div>
        <div class="emailbox-passwordSearch"><input type="email" id="emailinput-passwordSearch" placeholder="example@email.com" v-model="email"></div>
        </div>

        <div class="phonenumberDiv-passwordSearch">
        <div id="phonenumber-passwordSearch">휴대전화</div>
        <div class="phonenumberbox-passwordSearch"><input type="tel" id="phonenumberinput-passwordSearch" placeholder="010-1234-5678" v-model="phone"></div>
        </div>


    <div class="mainbutton-passwordSearch">
        <div class="findPasswordbutton-passwordSearch">
            <button @click="resetPassword()" type="submit" class="findPasswordtext-passwordSearch">비밀번호 찾기</button>
        </div>
        <div class="side-buttonDiv-passwordSearch">
        <a href="" @click="navigateToidSearchPage()" class="side-button-passwordSearch">아이디 찾기 </a> <span class="line">ㅣ</span>
        <a href="" @click="navigateToLoginPage()" class="side-button-passwordSearch">로그인 화면 </a>
      </div>
    </div>
  </form>
</template>



<script>

export default{ 
  components:{},
  data(){
    return{
      email:"",
      phone:"",
    };
  },
  setup(){},
  created(){},
  mounted(){},
  unmounted(){},
  methods:{
    navigateToidSearchPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push('/idSearch'); // '/idSearch'는 이동하고자 하는 라우터 경로로 변경해야 합니다
    },
    navigateToLoginPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push('/LoginPage'); // '/LoginPage'는 이동하고자 하는 라우터 경로로 변경해야 합니다
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
}
  }
}
</script>

<style>
@font-face {
  font-family: 'yg-jalnan';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'establishRetrosansOTF';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/establishRetrosansOTF.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body, div, span, button, a {
  font-family: 'yg-jalnan', sans-serif;
}

.logo, .logo-1{
  font-family: 'establishRetrosansOTF', sans-serif;
}



body {
margin:0;
}
.navBar {
display:flex;
align-items:center;
justify-content:space-between;
padding:8px 12px;
border-bottom:1px solid #D6DBE5;
}
.ham {
margin:10px;
cursor:pointer;
}
.logoDiv {
display:flex;
align-items: center;

}
.logoPic-passwordSearch {
margin-right:10px;
}
.logo {
color:#443E92;
font-size:24px;
font-style:normal;
font-weight:800;

}
.logo-1 {
color:#5D5A88;
font-size:24px;
font-style:normal;
font-weight:800;

}
.lockDiv {
display:flex;
}
.loginBtn {
display:flex;
padding:10px 20px;
align-items:center;
border-radius:30px;
border:none;
background:#5D5A88;
color:#FFFFFF;
font-size:16px;
font-style:normal;
font-weight:700;
cursor:pointer;
}
.main-passwordSearch {
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

#findPassword-passwordSearch{
  margin-top: 100px;
  margin-bottom: 50px;
  color:#5D5A88;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
}
.emailDiv-passwordSearch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left:  auto;
  margin-right: auto;
}
#email-passwordSearch{
  color: #5D5A88;
  font-size: 16px;
  font-weight: 700;
}
.emailbox-passwordSearch{
  display:flex;
align-items:center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 340px;
  height: 45px;
  border-radius: 50px;
  background: #f4f4fc;
}
#emailinput-passwordSearch{
  margin-left: 15px;
  border: none;
  height: 100%;
  width: 308px;
  background: transparent;
  outline: none;
  color: rgb(72, 72, 72);
  font-weight: 600;
  font-family: 'Nanum Gothic', sans-serif;
}
#emailinput-passwordSearch::placeholder {
  font-weight: 500;
  font-size: 15px;
  font-family: 'Nanum Gothic', sans-serif;
}

.phonenumberDiv-passwordSearch {
  display: flex;
  flex-direction: column;
}
#phonenumber-passwordSearch{
  color: #5D5A88;
  font-size: 16px;
  font-weight: 700;
}
.phonenumberbox-passwordSearch{
  display:flex;
align-items:center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 340px;
  height: 45px;
  border-radius: 50px;
  background: #f4f4fc;
}
#phonenumberinput-passwordSearch{
    margin-left: 15px;
    border: none;
    height: 100%;
    width: 308px;
    background: transparent;
    outline: none;
    color: rgb(72, 72, 72);
    font-weight: 600;
    font-family: 'Nanum Gothic', sans-serif;
}
#phonenumberinput-passwordSearch::placeholder {
  font-weight: 500;
  font-size: 15px;
  font-family: 'Nanum Gothic', sans-serif;
}

.findPasswordbutton-passwordSearch{
    margin-top: 15px;
    display: flex;
    align-items: center;
    border-radius: 40px;
    background: #5D5A88;
}

/*텍스트 위치 조정 필요*/
.findPasswordtext-passwordSearch{
  color:  #FFF;
  font-size: 16px;
  width: 340px;
  height: 40px;
  background: #5D5A88;
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
  color: #5D5A88;
  font-size: 14px;
  font-weight: 800;
  text-decoration-line: none;
}

.side-button-passwordSearch:focus {
  color: rgb(0, 60, 255);
}

.line {
  color: #5D5A88;
  font-size: 14px;
  font-weight: 700;
}
</style>
