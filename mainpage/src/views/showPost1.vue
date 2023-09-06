<template>
  <!--헤더부분-->
  <div class="navBar">
  
  <div class="ham"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="19" viewBox="0 0 38 28" fill="none">
    <line x1="36.2418" y1="1" x2="1.66666" y2="0.999998" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/>
    <line x1="36.2418" y1="13.6606" x2="1.66666" y2="13.6606" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/>
    <line x1="36.2418" y1="26.3213" x2="1.66666" y2="26.3213" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  
  <div class="logoDiv">
    <div class="logoPic"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 35" fill="none">
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
    <div class="lock">
      <svg xmlns="http://www.w3.org/2000/svg" style="padding-right: 5px;" width="16" height="19" viewBox="0 0 16 19" fill="none">
        <path d="M12.1667 7.61621H3.83333C2.68274 7.61621 1.75 8.54895 1.75 9.69954V15.9495C1.75 17.1001 2.68274 18.0329 3.83333 18.0329H12.1667C13.3173 18.0329 14.25 17.1001 14.25 15.9495V9.69954C14.25 8.54895 13.3173 7.61621 12.1667 7.61621Z" stroke="#5D5A88" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.99998 1.36621C6.89491 1.36621 5.8351 1.8052 5.0537 2.5866C4.2723 3.368 3.83331 4.42781 3.83331 5.53288V7.61621H12.1666V5.53288C12.1666 4.42781 11.7277 3.368 10.9463 2.5866C10.1649 1.8052 9.10505 1.36621 7.99998 1.36621V1.36621Z" stroke="#5D5A88" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <a>Logout</a>
    </div>
    <button class="SignInBtn">Home</button>
  </div>
</div>



  <!--윗쪽 소개/이미지란-->
  <div class="MainHead">

    <div class="Text">
      <div class="Bold">[부산] 프로젝트 팀 매칭 서비스</div> 
      <div class="HeadName"> 닉네임 </div>
    </div>

    <div>
      <img class="Img" src="https://s3-alpha-sig.figma.com/img/9fce/4822/3800db887d708bbd45d70cc5e514fc90?Expires=1692576000&Signature=gd5gDwt0FqR92YbRAonbMA2tdXCsLXj1k31cvQ93pd-IQRSuzPPTBo31slR52IZCWFJGgXNv7JgcMbHQUzOxpP-JOZGE1wX5Axfy30NHHnB4XAkAuKQFqemnY~kgVtEo8AGiIeapf357T3FG1Ktr1b48yW5wyusf~F8gSWQghXR5Cwh6d79y2Zn7rE7ot7CMpboMPmNFxeE9EBLV7h~R20XoRqdGoOpYb~eKvraiz2XDukAKHwyqGiI1JsH4ffUgGmNiyxXbEaEMbmV29fy9bfqP6eVrLCYmonqTEiFPxzqItnBrOcijzk0BcZYOkvEN95D7nDjBpJKC5rDP7QIg6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="이미지">
    </div>

  </div>


<!--중앙 전체-->
  <div class="Center">
<!--왼쪽 전체-->
    <div class="Left">
<!--왼쪽 박스 중 윗부분-->
      <div class="Top">
        <div class="Status">모집현황</div>
        <div class="Info">
          <div class="Exclamation">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28" fill="none">
              <path d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z" fill="#F24E1E"/>
            </svg>
          </div>
          <div class="One">한가지만 선택해주세요</div>
        </div>

        <div class="Choice">
          <div class="choice-1">
            <span class="ChoiceText">웹프론트엔드</span>
            <span class="ChoiceNumber">0/2</span>
            <span>
              <button class="ChoiceButton">선택</button>
            </span>
          </div>

          <div class="choice-2">
            <span class="ChoiceText">웹 서버</span>
            <span class="ChoiceNumber">0/2</span>
            <span>
              <button class="ChoiceButton">선택</button>
            </span>
          </div>
          <div class="choice-3">
            <span class="ChoiceText">UI/UX기획</span>
            <span class="ChoiceNumber">0/1</span>
            <span>
              <button class="ChoiceButton">선택</button>
            </span>
          </div>
        </div>
      </div>

<!--왼쪽 박스 중 아랫 부분-->
      <div class="Bottom">
        <div class="Status">프로젝트 소개</div>
      </div>

    </div>


<!--오른쪽 전체-->
    <div class="Right">
      <div class="BigBox">
        <div class="Box">

          <div class="LeaderBoxText">리더정보</div>

          <div class="LeaderProfile">
            
            <div>
              <svg class="HumanIcon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none">
                <g clip-path="url(#clip0_39_1357)">
                  <path d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z" fill="#5D5A88"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z" fill="#5D5A88"/>
                </g>
                <defs>
                  <clipPath id="clip0_39_1357">
                    <rect width="70" height="70" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            <div class="Name">닉네임</div>

            <div><button class="LeaderButton">프로필보기</button></div>

          </div>

        </div>
        
        <div class="Box">
          <div class="BoldText">프로젝트 기간</div>
          <div class="OriginText">프로젝트 팀 매칭 후 약 4개월</div>
        </div>

        <div class="Box">
          <div class="BoldText">프로젝트 분야</div>
          <div class="OriginText">소셜 네트워크</div>
        </div>
        
        <div class="Box">
          <div class="BoldText">기술/언어</div>
          <div class="OriginText">java, spring, MongoDB</div>
        </div>
      </div>
    </div>
  </div>


<!--아래 버튼-->
  <div class="Button">
    <div><button @click="지원하기모달창=true" class="JoinButton">지원하기</button></div>
    <div><button class="LookButton">더 둘러보기</button></div>
  </div>


<!--하단 바-->
<div class="footer">
  <div class="logoDiv">
    <div class="logoPic"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="25" viewBox="0 0 46 35" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3638 9.65376C42.9182 9.65376 45.7997 7.49269 45.7997 4.82688C45.7997 2.16107 42.9182 0 39.3638 0C35.8094 0 32.928 2.16107 32.928 4.82688C32.928 7.49269 35.8094 9.65376 39.3638 9.65376Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3635 21.7766C42.9179 21.7766 45.7993 19.6156 45.7993 16.9499C45.7993 14.2842 42.9179 12.1232 39.3635 12.1232C35.8091 12.1232 32.9277 14.2842 32.9277 16.9499C32.9277 19.6156 35.8091 21.7766 39.3635 21.7766Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3635 34.3493C42.9179 34.3493 45.7993 32.1882 45.7993 29.5224C45.7993 26.8566 42.9179 24.6956 39.3635 24.6956C35.8091 24.6956 32.9277 26.8566 32.9277 29.5224C32.9277 32.1882 35.8091 34.3493 39.3635 34.3493Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6008 21.7768C26.1551 21.7768 29.0364 19.6158 29.0364 16.95C29.0364 14.2843 26.1551 12.1233 22.6008 12.1233C19.0465 12.1233 16.1652 14.2843 16.1652 16.95C16.1652 19.6158 19.0465 21.7768 22.6008 21.7768Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6006 34.3493C26.1549 34.3493 29.0362 32.1882 29.0362 29.5224C29.0362 26.8566 26.1549 24.6956 22.6006 24.6956C19.0463 24.6956 16.1649 26.8566 16.1649 29.5224C16.1649 32.1882 19.0463 34.3493 22.6006 34.3493Z" fill="#8D8BA7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.43578 34.3493C9.99019 34.3493 12.8716 32.1882 12.8716 29.5224C12.8716 26.8566 9.99019 24.6956 6.43578 24.6956C2.88136 24.6956 -6.10352e-05 26.8566 -6.10352e-05 29.5224C-6.10352e-05 32.1882 2.88136 34.3493 6.43578 34.3493Z" fill="#8D8BA7"/></svg>
    </div>
    <a href="" style="text-decoration-line: none;">
      <span class="logo" style="font-size: 17px;">PROJECT</span>
      <span class="logo-1" style="font-size: 17px;">-NT</span>
    </a>
  </div>
  <div class="footerText">Copyright © 2023 PROJECT-NT | All Rights Reserved </div>
</div>
<!--지원하기 눌렸을 때 생기는 모달창-->
<div class="selectModal" v-if="지원하기모달창==true">
        <span class="">지원하시겠습니까?</span>
        <div class="selectModalBtn">
            <button class="selectModalBtn1" @click="지원하기모달창=false">예</button>
            <button class="selectModalBtn2" @click="지원하기모달창=false">아니요</button>
        </div>
    </div>

</template>


<script>

export default{ 
components:{},
data(){
  return{
    지원하기모달창:false,
  };
},
setup(){},
created(){},
mounted(){},
unmounted(){},
methods:{}
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

body{
margin:0;
}

.navBar{
display: flex;
align-items: center;
justify-content: space-between;
padding: 8px 12px;
border-bottom: 1px solid #D6DBE5;
}
.ham{
margin: 10px;
cursor: pointer;  
}
.logoDiv {
display: flex;
align-items: center;
}
.logoPic{
margin-right: 10px;
margin-left: 100px;
}
.logoPic1{
margin-right: 10px;
margin-left: 40px;
}
.logo {
color: #443E92;
font-size: 22px;
font-weight: 800;
}
.logo-1{
color: #5D5A88;
font-size: 22px;
font-weight: 800;
}

.lockDiv {
display: flex;
}
.lock{
display: flex;
cursor: pointer;
align-items: center;
margin-right: 20px;
color: #5D5A88;
font-weight: 600;
}
.SignInBtn {
display: flex;
padding: 10px 20px;
align-items: center;
border-radius: 30px;
border:none;
background:#5D5A88;
color:#FFFFFF;
font-size: 16px;
font-weight: 700;
cursor: pointer;
}



.MainHead{
  display: flex;
  justify-content:center;
  align-items: center;
  padding: 30px 30px 30px 30px;
}
.Img{
  width: 350px;
  height: 280px;
  margin-left: 40px;
}
.HeadName{
  margin-left:145px;
  margin-top: 30px;
  white-space: nowrap;
}
.LeaderProfile{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.HumanIcon{
  margin-top:15px;
  margin-bottom: 10px;
  margin-left: 75px;
}
.Name{
  margin-left: 70px;
}
.LeaderButton{
  color: #5D5A88;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  border-radius: 8px;
  border: 1px solid #BABABA;
  background: #FFF;
  margin-top:10px;
  margin-left: 57px;
}
.Center{
  display: flex;
  justify-content: center;
}
.Button{
  display:flex;
  justify-content: center;
}
.Bottom{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
/*
.BottomInfo{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 140px 5px 140px;
}*/
.Exclamation{
  padding-top: 5px;
}
.Info{
  display:flex;
  align-items: center;
}
.LogoBox{
  display: flex;
}
.LogoText{
  color: #5D5A88;
  font-size: 18px;
  font-weight: 500;
  margin-left: 5px;
}
.LeaderBoxText{
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}
.Bold{
  color: #000;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  white-space: nowrap;
}
.Status{
  color: #000;
  font-size: 18px;
  font-weight: 400;
}
.One{
  color: #B1B1B1;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
}
.choice-1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.choice-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.choice-3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ChoiceText{
  color: #4A4A4A;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
}
.ChoiceNumber{
  color: #FB5660;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}
.ChoiceButton{
  border-radius: 8px;
  border: 1px solid #BABABA;
  background: #FFF;
  width: 60px;
  height: 25px;
  cursor: pointer;
}
.Left{
  border-top: 2px solid #ECEAEA;
  border-bottom: 2px solid #ECEAEA;
  margin-right:50px;
}
.Top{
  border-bottom: 2px solid #ECEAEA;
}
.BoldText{
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  }

.OriginText{
  color: #000;
  font-size: 15px;
  font-weight: 500;
  margin-top: 35px;
  margin-bottom: 20px;
  white-space: nowrap;
}
.Box{
  border-bottom: 2px solid #ECEAEA;
  padding: 35px 10px 15px 1px;
  display: flex;
  flex-direction: column;
}
.Right{
  border: 1px solid #ECEAEA;
  border-radius: 6px;
}
.BigBox{
  padding: 15px 15px 100px 15px;
}
.Top{
  padding: 10px 380px 25px 1px;
}
/*프로젝트 소개란 추가 후 아래 패딩 수정 필요*/
.Bottom{
  padding: 10px 300px 25px 1px;
}
.Choice{
  margin-top: 10px;
  white-space: nowrap;
}
.ChoiceText, .ChoiceNumber ,.ChoiceButton{
  margin: 10px 20px 5px 0px;
}
.Button{
  margin-top:70px;
  margin-Bottom: 150px;
}
.JoinButton{
  border-radius: 5px;
  border: 1px solid #BABABA;
  background: #5D5A88;
  color: #FFF;
  width: 120px;
  height: 33px;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  cursor: pointer;
}
.LookButton{
  margin-left:20px;
  border-radius: 5px;
  border: 1px solid #BABABA;
  background: #FFF;
  color: #5D5A88;
  width: 120px;
  height: 33px;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  }

  .ChoiceButton:focus{
    background:#5D5A88;
    color: #ececec;
  }
  .footer{
display: flex;
align-items: center;
justify-content: space-between;
padding: 25px 45px;
margin-top:150px;
border-top: 1px solid #D6DBE5;
}
  .footerText {
color: #9795B5;
font-size: 14px;
font-weight: 400;
margin-right :80px;
}

/*지원하기 버튼을 눌렸을 때의 모달창 css */
.selectModal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fcfcff;
    padding: 30px 20px 20px 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    color: #2c2c2c;
    font-weight: 600;
    text-align: center;
}

.selectModalBtn {
    display: flex;
    justify-content: center;
}
.selectModalBtn1 {
    color:rgb(255, 255, 255);
    font-size:14px;
    font-weight:600;
    margin-top:15px;
    margin-right: 10px;
    width:70px;
    height:30px;
    background:#2b64ff;
    border-radius: 5px;
    border:none;
    cursor: pointer;
}

.selectModalBtn2 {
    color:rgb(255, 255, 255);
    font-size:14px;
    font-weight:600;
    margin-top:15px;
    margin-left: 10px;
    width:70px;
    height:30px;
    background:#2b64ff;
    border-radius: 5px;
    border:none;
    cursor: pointer;
}

</style>

