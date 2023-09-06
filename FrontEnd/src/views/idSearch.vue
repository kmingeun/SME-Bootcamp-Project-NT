<template>
  <div class="navBar">
  
  <div class="ham"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 38 28" fill="none">
    <line x1="36.2418" y1="1" x2="1.66666" y2="0.999998" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/>
    <line x1="36.2418" y1="13.6606" x2="1.66666" y2="13.6606" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/>
    <line x1="36.2418" y1="26.3213" x2="1.66666" y2="26.3213" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  
  <div class="logoDiv">
    <div class="logoPic-idSearch"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 35" fill="none">
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
    <button class="loginBtn">Login</button>
  </div>
</div>


    <form class="main">
        <div id="findid">아이디 찾기</div>
        <div class="nameDiv-idSearch">
        <div id="name-idSearch">이름(닉네임)</div>
        <div class="namebox-idSearch">
          <input type="text" id="nameinput-idSearch" placeholder="실명을 입력해주세요."  v-model="userName">
        </div>
        </div>

        <div class="phonenumberDiv-idSearch">
        <div id="phonenumber-idSearch">휴대전화</div>
        <div class="phonenumberbox-idSearch">
          <input type="tel" id="phonenumberinput-idSearch" placeholder="010-1234-5678" v-model="userPhone">
        </div>
        </div>


    <div class="mainbutton-idSearch">
        <div class="findidbutton-idSearch">
            <button @click="findUserId()" type="button" class="findidbuttontext-idSearch">아이디 찾기</button>
        </div>
        <div class="side-buttonDiv-idSearch">
        <a @click="navigateTopasswordsignupPage" href="" class="side-button1">비밀번호 찾기 </a> <span class="line-idSearch">ㅣ</span>
        <a @click="navigateToLoginPage" href="" class="side-button1">로그인 화면 </a>
      </div>
    </div>
  </form>






  <!--아이디 알려주는 모달창-->
  <div class="black-bg-idSearch" v-if="아이디모달창==true"> 
    <div class="white-bg-idSearch">
      <form class="main-idSearch">
        <div id="findid1-idSearch">
          회원님의 아이디는 아래와 같습니다.
        </div>

        <div class="emailDiv-idSearch">
          <div id="email-idSearch">
            이메일(아이디)
          </div>
          <div class="emailbox-idSearch">
            <input type="email" id="emailinput-idSearch" :value="foundUserId" readonly>
          </div>
        </div>

        <div class="mainbutton-idSearch">
          <div class="modalLogin-idSearch">
            <button @click="closeModal()" type="button" class="modalLoginbutton-idSearch">로그인</button>
          </div>
          <div class="side-buttonDiv1-idSearch">
            <a class="side-buttonModal1-idSearch">비밀번호가 기억이 안난다면? </a>
            <a @click="navigateTopasswordsignupPage" href="" class="side-buttonModal2-idSearch">비밀번호 찾기 </a>  
          </div>
        </div>
      </form>
    </div>
  </div>


</template>


<script>

export default{ 
components:{},
data(){
  return{
    아이디모달창: false,
    foundUserId: "",
  };
},
setup(){},
created(){},
mounted(){},
unmounted(){},
methods:{
  
  navigateTopasswordsignupPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push('/passwordSearch'); // '/passwordSearch'는 이동하고자 하는 라우터 경로로 변경해야 합니다
  },

  navigateToLoginPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push('/LoginPage'); // '/LoginPage'는 이동하고자 하는 라우터 경로로 변경해야 합니다
    },

  closeModal() {
    this.아이디모달창= false;
    this.$router.push('/LoginPage'); 
  },


  findUserId() {
  // 사용자가 입력한 이름과 전화번호
  const name = this.userName;   
  const phone = this.userPhone;
  this.아이디모달창= true;

  // 서버로 아이디 찾기 요청 보내기
  this.$axios
    .post("http://localhost:3000/auth/searchId", {
      name: name,
      phone: phone,
    })
    .then((response) => {
      // 서버에서 반환한 결과 처리
      if (response.data.email) {
        // 아이디를 찾은 경우
        this.foundUserId = response.data.email;
      } else {
        // 아이디를 찾지 못한 경우
        this.foundUserId = "해당 정보로 등록된 아이디가 없습니다.";
      }
    })
    .catch((error) => {
      console.error("아이디 찾기 실패:", error);
      this.foundUserId = "아이디 찾기에 실패하였습니다.";
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
.logoPic-idSearch {
margin-right:10px;
}
.logo {
color:#443E92;
font-size:22px;
font-weight:800;
}
.logo-1 {
color:#5D5A88;
font-size:22px;
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
.main-idSearch {
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

#findid{
  margin-top: 100px;
  margin-bottom: 50px;
  color:#5D5A88;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
}
.nameDiv-idSearch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left:  auto;
  margin-right: auto;
}
#name-idSearch{
  color: #5D5A88;
  font-size: 16px;
  font-weight: 700;
}
.namebox-idSearch{
  display:flex;
align-items:center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 340px;
  height: 45px;
  border-radius: 50px;
  background: #f4f4fc;
}
#nameinput-idSearch{
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
#nameinput-idSearch::placeholder {
  font-weight: 500;
  font-size: 15px;
  font-family: 'Nanum Gothic', sans-serif;
}

.phonenumberDiv-idSearch {
  display: flex;
  flex-direction: column;
}
#phonenumber-idSearch{
  color: #5D5A88;
  font-size: 16px;
  font-weight: 700;
}
.phonenumberbox-idSearch{
  display:flex;
  align-items:center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 340px;
  height: 45px;
  border-radius: 50px;
  background: #f4f4fc;
}
#phonenumberinput-idSearch{
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
#phonenumberinput-idSearch::placeholder {
  font-weight: 500;
  font-size: 15px;
  font-family: 'Nanum Gothic', sans-serif;
}

.findidbutton-idSearch{
    margin-top: 15px;
    display: flex;
    align-items: center;
    border-radius: 40px;
    background: #5D5A88;
}


.findidbuttontext-idSearch{
  color:  #FFF;
  font-size: 16px;
  width: 340px;
  height: 40px;
  background: #5D5A88;
  border-radius: 40px;
  font-style: normal;
  font-weight: 700;
  border: none;
  cursor: pointer;
}

.side-buttonDiv-idSearch {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.side-button1 {
  color: #5D5A88;
  font-size: 14px;
  font-weight: 800;
  text-decoration-line: none;
}

.side-button1:focus {
  color: rgb(0, 60, 255);
}


.line-idSearch {
  color: #5D5A88;
  font-size: 14px;
  font-weight: 700;
}






/*모달창 css*/
.side-buttonDiv1-idSearch {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.side-button-idSearch {
  color: #5D5A88;
  font-size: 14px;
  font-weight: 800;
  text-decoration-line: none;
}

.side-buttonModal1-idSearch {
color: #5D5A88;
font-size: 14px;
font-weight: 800;
text-decoration-line: none;
}

.side-buttonModal2-idSearch {
color: #5D5A88;
font-size: 14px;
font-weight: 800;
text-decoration-line:#5D5A88;
}

.side-buttonModal2-idSearch:focus {
color: rgb(0, 60, 255);
}

.emailDiv-idSearch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left:  auto;
  margin-right: auto;
}
#email-idSearch{
  color: #5D5A88;
  font-size: 15px;
  font-weight: 700;
}
.emailbox-idSearch{
  display:flex;
align-items:center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 340px;
  height: 45px;
  border-radius: 50px;
  background: #f4f4fc;
}
#emailinput-idSearch{
  margin-left: 15px;
  border: none;
  height: 100%;
  width: 308px;
  background: transparent;
  outline: none;
  color: rgb(72, 72, 72);
  font-weight: 600;
}

.black-bg-idSearch { 
  width: 100%; 
  height:100%;
  background: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  position:fixed;
  padding: 20px;
}

.white-bg-idSearch {
width: 40%; 
height: 50%;
background:rgb(196, 231, 250);
font-size: 17px;
margin-top:100px;
margin-left: auto;
margin-right: auto;
position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 20px 20px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  color: #2c2c2c;
  font-weight: 600;
}

#findid1-idSearch{
  margin-top: 20px;
  margin-bottom: 30px;
  color:#5D5A88;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
}

.modalLogin-idSearch{
    margin-top: 15px;
    display: flex;
    align-items: center;
    border-radius: 40px;
    background: #5D5A88;
}


.modalLoginbutton-idSearch{
  color:  #FFF;
  font-size: 16px;
  width: 340px;
  height: 40px;
  background: #5D5A88;
  border-radius: 40px;
  font-style: normal;
  font-weight: 700;
  border: none;
  cursor: pointer;

}
</style>
