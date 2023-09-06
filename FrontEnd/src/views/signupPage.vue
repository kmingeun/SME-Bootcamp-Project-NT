<template>
  <!--협업유형검사 모달창-->
  <div class="black-bg" v-if="협업유형검사모달창==true">
      <div class="white-bg1" >
      <div class="main1" >
          <div class="qnaText">협업유형검사</div>
          <div class="qnaTextDiv">
              <div class="line1">
                  <span class="Qtext">Q1. 팀 회의에서 당신의 행동은?</span>
              </div>
              <div class="line2">
                  <div class="abox1">
                      <button @click="setAnswer('q1', 'L')" :class="{ 'boxText': true, 'selected': answers.q1 === 'L' }">나의 주장을 우선적으로 제시 후 팀원 설득하기</button>
                  </div>
                  <div class="abox2">
                      <button @click="setAnswer('q1', 'T')" :class="{ 'boxText2': true, 'selected': answers.q1 === 'T' }">팀원의 의견을 중점으로 나의 역할 생각하기</button>
                  </div>
              </div>
          </div>
      
      
          <div class="qnaTextDiv">
              <div class="line1">
                  <span class="Qtext">Q2. 새로운 모임에서 팀장을 뽑아야할 경우에서 당신의 행동은?</span>
              </div>
              <div class="line2">
                  <div class="abox1">
                      <button @click="setAnswer('q2', 'L') " :class="{ 'boxText': true, 'selected': answers.q2 === 'L' }">팀장을 자원한다.</button>
                  </div>
                  <div class="abox2">
                      <button @click="setAnswer('q2', 'T')" :class="{ 'boxText2': true, 'selected': answers.q2 === 'T' }">팀장역할을 잘 수행할 것 같은 사람을 찾는다.</button>
                  </div>
              </div>
          </div>
      
      
          <div class="qnaTextDiv">
              <div class="line1">
                  <span class="Qtext">Q3. 나는 적당한 노력과 적당한 보상보다 큰 노력과 큰 보상이 좋다.</span>  
              </div>
              <div class="line2">
                  <div class="abox1">
                      <button @click="setAnswer('q3', 'L')" :class="{ 'boxText': true, 'selected': answers.q3 === 'L' }">O</button>
                  </div>
      
                  <div class="abox2">
                      <button @click="setAnswer('q3', 'T')" :class="{ 'boxText2': true, 'selected': answers.q3 === 'T' }">X</button>
                  </div>
              </div>
          </div>
      
  
          <div class="qnaTextDiv">
              <div class="line1">
                  <span class="Qtext">Q4. 프로젝트를 진행한다면 당신의 생각에 더 가까운 문장은?</span>
              </div>
              <div class="line2">
                  <div class="abox1">
                      <button @click="setAnswer('q4', 'V')" :class="{ 'boxText': true, 'selected': answers.q4 === 'V' }">팀장의 존재는 프로젝트를 진행함에 있어 필수적이다.</button>
                  </div>
                  <div class="abox2">
                      <button @click="setAnswer('q4', 'H')" :class="{ 'boxText2': true, 'selected': answers.q4 === 'H' }">소통이 원활하게만 잘 된다면 팀장은 필수적이지않다.</button>
                  </div>
              </div>
          </div>
  
  
          <div class="qnaTextDiv">
              <div class="line1">
                  <span class="Qtext">Q5. 당신이 생각할 때 더 좋은 성과를 만들 수 있을 것 같은 팀은?</span>
              </div>
              <div class="line2">
                  <div class="abox1">
                      <button @click="setAnswer('q5', 'V')" :class="{ 'boxText': true, 'selected': answers.q5 === 'V' }">능력에 따라 적절한 권한의 분배 하에 진행되는 팀</button>
                  </div>
                  <div class="abox2">
                      <button @click="setAnswer('q5', 'H')" :class="{ 'boxText2': true, 'selected': answers.q5 === 'H' }">모두 동등한 권한을 가지고 진행되는 팀</button>
                  </div>
              </div>
          </div>
      
  
          <div class="qnaTextDiv">
              <div class="line1">
                  <span class="Qtext">Q6. 당신이 생각할 때 바람직하다고 생각하는 팀은?</span>
              </div>
              <div class="line2">
                  <div class="abox1">
                      <button @click="setAnswer('q6', 'V')" :class="{ 'boxText': true, 'selected': answers.q6 === 'V' }">결과에 대해서 직책에 따라 책임이 주어지는 팀</button>
                  </div>
                  <div class="abox2">
                      <button @click="setAnswer('q6', 'H')" :class="{ 'boxText2': true, 'selected': answers.q6 === 'H' }">결과에 대해서 책임이 균등하게 나누어지는 팀</button>
                  </div>
              </div>
          </div>
      
  
          <div class="qnaTextDiv">
              <div class="line1">
                  <span class="Qtext">Q7. 프로젝트를 통해 나에게 오는 더 큰 성취감은?</span>
              </div>
              <div class="line2">
                  <div class="abox1">
                      <button @click="setAnswer('q7', 'G')" :class="{ 'boxText': true, 'selected': answers.q7 === 'G' }">프로젝트가 이끌어낸 결과와 그에 따른 성취감</button>
                  </div>
                  <div class="abox2">
                      <button @click="setAnswer('q7', 'P')" :class="{ 'boxText2': true, 'selected': answers.q7 === 'P' }">프로젝트 과정에서 얻은 지식과 그에 따른 성취감</button>
                  </div>
              </div>
          </div>
      
  
          <div class="qnaTextDiv">
              <div class="line1">
                  <span class="Qtext">Q8. 어떤 문장이 당신과 더 어울리나요?</span>
              </div>
              <div class="line2">
                  <div class="abox1">
                      <button @click="setAnswer('q8', 'G')" :class="{ 'boxText': true, 'selected': answers.q8 === 'G' }">업무 결과로 과정을 입증하는 사람</button>
                  </div>
                  <div class="abox2">
                      <button @click="setAnswer('q8', 'P')" :class="{ 'boxText2': true, 'selected': answers.q8 === 'P' }">업무 과정으로 결과를 입증하는 사람</button>
                  </div>
              </div>
          </div>
          
      
          <div class="qnaTextDiv">
              <div class="line1">
                  <span class="Qtext">Q9. 어떤 문장이 당신을 더 정확하게 설명하나요?</span>
              </div>
              <div class="line2">
                  <div class="abox1">
                      <button @click="setAnswer('q9', 'G')" :class="{ 'boxText': true, 'selected': answers.q9 === 'G' }">나의 심리적 만족감, 성취감 보다 결과와 물질적 보상이 더 중요하다.</button> 
                  </div>
                  <div class="abox2">
                      <button @click="setAnswer('q9', 'P')" :class="{ 'boxText2': true, 'selected': answers.q9 === 'P' }">결과와 물질적 보상보다 나의 심리적 만족감, 성취감이 더 중요하다.</button>
                  </div>
              </div>
          </div>
          
          
          <div class="line3">
              <div class="fbox1">
                  <button @click="calculateResult()" class="fText1">검사완료</button>
              </div>
              <div class="fbox2">
                  <button @click="closeModal()" class="fText2">검사취소</button>
              </div>
          </div>
      </div>
      </div>

  </div>
  
  
      <!--기술스택 모달창html-->
  <div class="black-bgsignup" v-if="기술스택모달창==true">
      <div class="white-bgsignup">
          <div class="modalText-signup">기술스택 선택창</div>
          <div class="modalText1-signup">'선택완료' 버튼을 누르신 후, 저장버튼을 눌러주세요</div>
          <div class="grid-signup">
              <label v-for="item in items" :key="item.id">
                  <input
                      type="checkbox"
                      :value="item.id"
                      v-model="selectedItems"
                      :disabled="selectedItems.length >= 5 && !selectedItems.includes(item.id)"
                  />
                  {{ item.label }}
              </label>
          </div>
          <div class="modalBtn-signup">
              <button class="selectBtn-signup" @click="showSelectedLabels">선택완료</button>
              <button class="saveBtn-signup" @click="saveAndClose">저장</button>
          </div>
      </div>
  </div>

  <div class="selectModal-signup" v-if="선택완료모달창==true">
      <span class="">선택완료 되었습니다.😆</span>
      <div class="selectModalBtn-signup">
          <button class="selectModalBtn1-signup" @click="선택완료모달창=false">확인</button>
      </div>
  </div>

  <div class="selectModal-signup" v-if="저장완료모달창==true">
      <span class="">저장 되었습니다.😜</span>
      <div class="selectModalBtn-signup">
          <button class="selectModalBtn1-signup" @click="close()">확인</button>
      </div>
  </div>

  <div class="navBar">
      <div class="ham">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="19" viewBox="0 0 38 28" fill="none">
              <line x1="36.2418" y1="1" x2="1.66666" y2="0.999998" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/>
              <line x1="36.2418" y1="13.6606" x2="1.66666" y2="13.6606" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/>
              <line x1="36.2418" y1="26.3213" x2="1.66666" y2="26.3213" stroke="#5D5A88" stroke-width="2" stroke-linecap="round"/>
          </svg>
      </div>

      <div class="logoDiv">
        <div class="logoPic-signup"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 35" fill="none">
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


  <form style="margin-bottom: 30px;">
      <div class="main">
          <div id="join">회원가입</div>
          
          <div class="line">
              <div class="namecont">
                  <div id="name">이름</div>
                  <div class="namebox">
                    <label for="nameinput"></label>
                    <input type="text" id="nameinput" placeholder="실명을 입력해주세요."  v-model="signupName" >
                  </div>
              </div>
              <div class="emailcont">
                  <div id="email">이메일(아이디)</div>
                  <div class="emailbox">
                    <label for="emailinput"></label>
                    <input type="email" id="emailinput" placeholder="example@email.com" v-model="signupEmail">
                  </div>
              </div>
          </div>

          <div class="line">
              <div style="display: flex; flex-direction: column;">
                  <label for="password" style="color:#5D5A88;font-size:16px;font-weight:700;line-height:18px; margin-top:30px;">비밀번호</label>

                  <div class="passwordbox">
                    <label for="password"></label>
                    <input type="password" id="password" v-model="password" @input="validatePassword" @blur="validatePassword" placeholder="********" >
                  </div>

                  <div class="passwordText">
                      <p v-if="passwordError" class="error-message">
                          {{ passwordError }}
                      </p>
                      <p v-else-if="passwordIsValid" class="success-message">
                          <i style="margin-right: 5px;" class="bi bi-check-circle"></i> 올바른 비밀번호입니다.
                      </p>
                  </div>
              </div>

              <div style="display: flex; flex-direction: column;">
                  <label for="confirmPassword" style="color:#5D5A88; font-size:16px; font-weight:700; line-height:18px; margin-left:20px; bottom:20px; margin-top:30px;"> 비밀번호 확인</label>

                  <div class="checkPasswordbox">
                      <input type="password" id="confirmPassword" v-model="confirmPassword" @input="validatePassword" @blur="validatePassword" placeholder="********">
                  </div>

                  <div class="confirmpasswordText">
                      <p v-if="confirmPasswordError" class="error-message">
                          {{ confirmPasswordError }}
                      </p>
                      <p v-else-if="confirmPasswordIsValid" class="success-message">
                          <i style="margin-right: 5px;" class="bi bi-check-circle"></i> 비밀번호가 일치합니다.
                      </p>
                  </div>
              </div>
          </div>

          <div class="line">
              <div class="testcont">
                  <div id="test">협업유형검사</div>
                  <div id="testbox">
                      <div @click="openModal()" class="testboxtext">검사 실시하기(클릭)</div>
                  </div>
              </div>
              <div class="phonecont">
                  <div id="phonenumber">휴대전화</div>
                  <div class="phonenumberbox">
                    <label for="phonenumberinput"></label>
                    <input type="tel" id="phonenumberinput" placeholder="010-1234-5678" v-model="signupPhone">
                  </div>
              </div>
          </div>

          <div class="teccont">
              <div class="tec" style="text-align: center;">기술스택(최대 5개만 선택 가능합니다.)<br>아래 클릭! </div>
              <div class="tecbox">
                  <label for="tecInput"></label>
                  <input @click="openModalTec()" id="tecInput" type="text" v-model="signupTechs" placeholder=""/>
              </div>
          </div>

          <div class="onOfflineDiv-signup">
              <div class="onOfflineText-signup">온/오프라인 여부</div>
              <label for="onOffline-signup"></label>
              <select id="onOffline-signup" class="onOfflineselect" v-model="signupOnOff">
                  <option value="" disabled selected>선택해주세요</option>
                  <option value="on">온라인만 가능</option>
                  <option value="off">오프라인만 가능</option>
                  <option value="both">온/오프라인 둘 다 가능</option>
              </select>
          </div>

          <div class="line">
              <div class="mainbutton-signup">
                  <div class="finjoinbutton-signup">
                      <button type="submit"  @click="submitForm($event)" id="finjoinbuttontext-signup">가입하기</button>
                  </div>
                  <div class="backbutton">
                      <button type="reset" id="backbuttontext-signup">취소하기</button>
                  </div>
              </div>
          </div>
      </div>
  </form>

</template>

<script>
import axios from "axios";

export default {
  components: {
  },

data() {
  return {
  items: [
      //기술스택모달창
      { id: '1', label: 'HTML/CSS' },
      { id: '2', label: 'JavaScript' },
      { id: '3', label: 'C/C++' },
      { id: '4', label: 'Python' },
      { id: '5', label: 'C#' },
      { id: '6', label: 'Java' },
      { id: '7', label: 'SQL' },
      { id: '8', label: 'TypeScript' },
      { id: '9', label: 'PHP' },
      { id: '10', label: 'Go' },
      { id: '11', label: 'Rust' },
      { id: '12', label: 'Kotlin' },
      { id: '13', label: 'Dart' },
      { id: '14', label: 'Swift' },
      { id: '15', label: 'R' },
      { id: '16', label: 'MATLAB' },
      { id: '17', label: 'Flutter' },
      { id: '18', label: 'React' },
      { id: '19', label: 'Next.js' },
      { id: '20', label: 'Vue.js' },
      { id: '21', label: 'Spring' },
      { id: '22', label: 'Jquery' },
      { id: '23', label: 'Django' },
      { id: '24', label: 'Express.js' },
      { id: '25', label: 'ASP.NET' },
      { id: '26', label: 'PyTorch' },
      { id: '27', label: 'TensorFlow' },
      { id: '28', label: 'Linux' },
      { id: '29', label: 'Unity' },
      { id: '30', label: 'Unreal' }
  ],
    //비밀번호
      password: '',
      confirmPassword: '',
      passwordError: '',
      confirmPasswordError: '',
      passwordTouched: false,
      confirmPasswordTouched: false,
  
    //모달창들 
      기술스택모달창:false,
      협업유형검사모달창: false,
      선택완료모달창:false,
      저장완료모달창:false,
      selectedItems: [],
      techs: "",
          /*selectedOption: '선택 안함' // 기본 값 설정 */

      answers: {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null,
        q8: null,
        q9: null,
      },
      modalVisible: true,
      result1: '', // 결과 유형 저장

      //axios 하는거 
      signupName: "",
      signupEmail: "",
      signupPassword: "",
      signupPhone:"",
      signupTechs:"",
      signupOnOff:"",
      signupCooperationType:"",
    };
  },

methods: {
  /* 협업유형검사 JS */
  setAnswer(question, answer) {
      this.answers[question] = answer;
    },
  openModal() {
      this.협업유형검사모달창 = true;
      document.body.style.overflow = 'hidden';
  },
  closeModal() {
      this.협업유형검사모달창 = false;
      document.body.style.overflow = 'auto';
  },
  openModalTec() {
      this.기술스택모달창 = true;
      document.body.style.overflow = 'hidden';
  },
  calculateResult() {
    const allQuestionsAnswered = Object.values(this.answers).every(answer => answer !== null);

    if (!allQuestionsAnswered) {
      alert("모든 질문에 답해주세요!");
    return; // 함수 종료
    }

      
    const counts = { L: 0, T: 0, V: 0, H: 0, G: 0, P: 0 };

      for (const answer of Object.values(this.answers)) {
        if (answer) {
          counts[answer]++;
        }
      }
      

      if (counts.L > counts.T && counts.V > counts.H && counts.G > counts.P) {
        this.result1 ='LVG: 팀을 이끄는 리더형입니다. \n당신은 상하관계가 짜여지고 조직적으로 움직이는 팀에 잘 어울려요!\n또한 일을 수행함에 있어 과정보다는 결과를 중요시하는 스타일입니다.\n다시 한번 검사결과를 확인하고 싶으시다면, 프로필에서 확인하실 수 있습니다.';
        this.result2 ='LVG'; //LVG
      } else if (counts.L > counts.T && counts.V > counts.H && counts.P > counts.G ) {
        this.result1 = 'LVP: 팀을 이끄는 리더형입니다. \n당신은 상하관계가 짜여지고 조직적으로 움직이는 팀에 잘 어울려요!\n또한 일을 수행함에 있어 결과보다는 과정을 중요시하는 스타일입니다.\n다시 한번 검사결과를 확인하고 싶으시다면, 프로필에서 확인하실 수 있습니다.'; //LVP
        this.result2 ='LVP'; 
      }
      else if (counts.L > counts.T && counts.H > counts.V && counts.G > counts.P ) {
        this.result1 = 'LHG: 팀을 이끄는 리더형입니다.\n당신은 자유로운 수평적인 조직에 잘 어울려요!\n또한 일을 수행함에 있어 과정보다는 결과를 중요시하는 스타일입니다.\n다시 한번 검사결과를 확인하고 싶으시다면, 프로필에서 확인하실 수 있습니다.'; //LHG
        this.result2 ='LHG'; 
      }
      else if (counts.L > counts.T && counts.H > counts.V && counts.P > counts.G ) {
        this.result1 = 'LHP: 팀을 이끄는 리더형입니다.\n당신은 자유로운 수평적인 조직에 잘 어울려요!\n또한 일을 수행함에 있어 결과보다는 과정을 중요시하는 스타일입니다.\n다시 한번 검사결과를 확인하고 싶으시다면, 프로필에서 확인하실 수 있습니다.';//LHP
        this.result2 ='LHP'; 
      }
      else if (counts.T > counts.L && counts.V > counts.H && counts.G > counts.P ) {
        this.result1 = 'TVG: 팀의 추진력인 팀원형입니다.\n 당신은 상하관계가 짜여지고 조직적으로 움직이는 팀에 잘 어울려요!\n또한 일을 수행함에 있어 과정보다는 결과를 중요시하는 스타일입니다.\n다시 한번 검사결과를 확인하고 싶으시다면, 프로필에서 확인하실 수 있습니다.';//TVG
        this.result2 ='TVG'; 
      }
      else if (counts.T > counts.L && counts.V > counts.H && counts.P > counts.G ) {
        this.result1 = 'TVP: 팀의 추진력인 팀원형입니다.\n 당신은 상하관계가 짜여지고 조직적으로 움직이는 팀에 잘 어울려요!\n또한 일을 수행함에 있어 결과보다는 과정을 중요시하는 스타일입니다.\n다시 한번 검사결과를 확인하고 싶으시다면, 프로필에서 확인하실 수 있습니다.';//TVP
        this.result2 ='TVP'; 
      }
      else if (counts.T > counts.L && counts.H > counts.V && counts.G > counts.P ) {
        this.result1 = 'THG: 팀의 추진력인 팀원형입니다.\n 당신은 자유로운 수평적인 조직에 잘 어울려요!\n또한 일을 수행함에 있어 과정보다 결과를 중요시하는 스타일입니다.\n다시 한번 검사결과를 확인하고 싶으시다면, 프로필에서 확인하실 수 있습니다.'; //THG
        this.result2 ='THG'; 
      }
      else if (counts.T > counts.L && counts.H > counts.V && counts.P > counts.G ) {
        this.result1 = 'THP: 팀의 추진력인 팀원형입니다.\n 당신은 자유로운 수평적인 조직에 잘 어울려요!\n또한 일을 수행함에 있어 결과보다 과정을 중요시하는 스타일입니다.\n다시 한번 검사결과를 확인하고 싶으시다면, 프로필에서 확인하실 수 있습니다.';//THP
        this.result2 ='THP'; 
      }
      this.협업유형검사모달창 = false;
      document.body.style.overflow = 'auto';
      alert(this.result1);
  },


  

  /*기술스택 JS */
  showSelectedLabels() {
      if (this.selectedItems.length === 0) {
      alert('최소 하나 이상 선택해주세요.🙏');
      } 
      else {
      this.선택완료모달창=true;
      const selectedLabels = this.selectedItems.map(id => {
      const selectedItem = this.items.find(item => item.id === id);
      return selectedItem ? selectedItem.label : "";

      
      });
      this.signupTechs = selectedLabels.join(', ');
      }
  },
  saveAndClose() {
      if (this.selectedItems.length === 0) {
      this.기술스택모달창 = false;
      document.body.style.overflow = 'auto';
      }    
      else {
      this.저장완료모달창 = true; //저장완료모달창 닫기.
      document.body.style.overflow = 'auto';
      }
  },
  
  
  close () {
      this.저장완료모달창=false;
      this.기술스택모달창=false;
  },

  validatePassword() {
      if (this.password.length < 8) {
      this.passwordError = '비밀번호는 최소 8자 이상이어야 합니다.';
      } else if (!/[A-Za-z]/.test(this.password) || !/[0-9]/.test(this.password) || !/[!@#$%^&*()_+{}:;<>,.?~/-]/.test(this.password)) {
      this.passwordError = '영문자, 숫자, 특수기호를 모두 포함해주세요.';
      } else {
      this.passwordError = '';
      }

      if (this.confirmPassword !== this.password) {
      this.confirmPasswordError = '비밀번호가 일치하지 않습니다.';
      } else {
      this.confirmPasswordError = '';
      }
  },
  navigateToLoginPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push('/LoginPage'); // '/LoginPage'는 이동하고자 하는 라우터 경로로 변경해야 합니다
    },

  //axios 
  
  submitForm(event) {
  event.preventDefault(); // 폼 제출 기본 동작 막기

  // 폼 데이터를 담을 객체 생성
  const formData = {
    Name: this.signupName,
    Email: this.signupEmail,
    Password: this.password,
    Phone: this.signupPhone,
    Techs: this.signupTechs,
    OnOff: this.signupOnOff,
    CooperationType: this.result2,
    // ... 기타 폼 필드
  };

  console.log(formData);

  axios.post('http://localhost:3000/auth/register', formData)
    .then(response => {
      console.log('가입 성공!', response.data);
      alert("회원가입 완료!")
      this.$router.push('/LoginPage'); // 가입 성공 시 페이지 이동
      // 성공 시 처리, 예: 사용자에게 성공 메시지 보여주기
    })
    .catch(error => {
      console.error('가입 실패:', error);
      // 실패 시 처리, 예: 사용자에게 에러 메시지 보여주기
    });
  },
},

computed: {
  passwordMismatch() {
  return this.password !== this.confirmPassword;
  },
  hasRequiredCharacters() {
  return /[A-Za-z]/.test(this.password) && /[0-9]/.test(this.password) && /[!@#$%^&*()_+{}:;<>,.?~/-]/.test(this.password);
  },
  passwordIsValid() {
  return this.password.length >= 8 && /[A-Za-z]/.test(this.password) && /[0-9]/.test(this.password) && /[!@#$%^&*()_+{}:;<>,.?~/-]/.test(this.password);
  },
  confirmPasswordIsValid() {
  return this.confirmPassword === this.password && this.confirmPassword;
  },
},
}

</script>


<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

body {
  margin:0;
}

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
.logoPic-signup {
  margin-right:10px;
}
.logo {
  color:#443E92;
  font-size:22px;
  font-style:normal;
  font-weight:800;
}
.logo-1 {
  color:#5D5A88;
  font-size:22px;
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
#join {
  text-align:center;
  margin-top: 100px;
  margin-bottom: 50px;
  color:#5D5A88;
  font-size:28px;
  font-weight:700;
  line-height:66px;
}
.main {
  display:flex;
  flex-direction:column;

}
.tec,.onoff {
  display:flex;
  justify-content:center;
}

.line {
  display:flex;
  justify-content:center;
  align-items:center;
}

.tecbox,.onoffbox {
  margin-right:auto;
  margin-bottom:auto;
  margin-left:auto;
}
#name {
  color:#5D5A88;
  font-size:16px;
  font-weight:700;
}
.namebox {
  display:flex;
  align-items:center;
  width:245px;
  height:40px;
  border-radius:50px;
  background:#f4f4fc;
  margin-top:20px;
}
#nameinput {
  border:none;
  height:100%;
  width:220px;
  background:transparent;
  outline:none;
  margin-left:15px;
  font-weight: 600;
  font-family: 'Nanum Gothic', sans-serif;
}
#nameinput::placeholder {
  font-weight: 500;
font-size: 15px;
font-family: 'Nanum Gothic', sans-serif;
}

#email {
  color:#5D5A88;
  font-size:16px;
  font-weight:700;
  line-height:18px;
  margin-left:20px;
}
.emailbox {
  display:flex;
  align-items:center;
  width:245px;
  height:40px;
  border-radius:50px;
  background:#f4f4fc;
  margin-left:20px;
  margin-top:20px;
}
#emailinput {
  border:none;
  height:100%;
  width:220px;
  background:transparent;
  outline:none;
  margin-left:15px;
  font-weight: 600;
  font-family: 'Nanum Gothic', sans-serif;
}
#emailinput::placeholder {
  font-weight: 500;
font-size: 15px;
font-family: 'Nanum Gothic', sans-serif;
}

/*비밀번호 섹션 css */
.passwordbox {
  display:flex;
  align-items:center;
  width:245px;
  height:40px;
  border-radius:50px;
  background:#f4f4fc;
  margin-top:20px;
}
#password {
  border:none;
  height:100%;
  width:220px;
  background:transparent;
  outline:none;
  margin-left:10px;
}

.checkPasswordbox {
  display:flex;
  align-items:center;
  width:245px;
  height:40px;
  border-radius:50px;
  background:#f4f4fc;
  margin-left:20px;
  margin-top:20px;
}

#confirmPassword {
  border:none;
  height:100%;
  width:220px;
  background:transparent;
  outline:none;
  margin-left:10px;
}

.passwordText {
  height: 1.5em;
}

.confirmpasswordText {
  margin-left: 20px;
  height: 1.5em;
}

.error-message {
  color: red;
  font-size: 12px;
  display: flex;
}

.success-message {
  color: green;
  font-size: 12px;
  display: flex;
}

#test {
  color:#5D5A88;
  font-size:16px;
  font-weight:700;
  line-height:18px;
  margin-top:20px;
}
#testbox {
  margin-top:20px;
}
.testboxtext {
  display:flex;
  align-items:center;
  justify-content:center;
  color:#636363;
  font-size:14px;
  font-weight:700;
  width:245px;
  height:40px;
  border-radius:50px;
  background:#f4f4fc;
  border: none;
  transition: 0.4s;
  cursor: pointer;
}
.testboxtext:hover{
  box-shadow: inset 0 0 0 32px #807cbb;
  color:#FFFFFF;
}


#phonenumber {
  color:#5D5A88;
  font-size:16px;
  font-weight:700;
  line-height:18px;
  margin-top:20px;
  margin-left:20px;
}
.phonenumberbox {
  display:flex;
  align-items:center;
  margin-top:20px;
  margin-left:20px;
  width:245px;
  height:40px;
  border-radius:50px;
  background:#f4f4fc;
}
#phonenumberinput {
  border:none;
  height:100%;
  width:220px;
  background:transparent;
  outline:none;
  margin-left:15px;
  font-weight: 600;
  font-family: 'Nanum Gothic', sans-serif;
}
#phonenumberinput::placeholder {
  font-weight: 500;
font-size: 15px;
font-family: 'Nanum Gothic', sans-serif;
}
.tec {
  color:#5D5A88;
  font-size:16px;
  font-weight:700;
  margin-top:25px;
}
.tecbox {
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom: 20px;
}

#tecInput {
color:rgb(69, 69, 69);
font-size:14px;
font-weight:600;
display:flex;
width:520px;
height:40px;
border-radius:50px;
background:#f4f4fc;
align-items:center;
justify-content:center;
margin-top:20px;
padding-left: 15px;
outline: none;
border: none;
cursor: pointer;
text-align: center;
transition: 0.4s;
font-family: 'Nanum Gothic', sans-serif;
}
#tecInput:hover, #tecInput:focus{
  box-shadow: inset 0 0 0 32px #807cbb; 
  color:#FFFFFF;
}

.onOfflineDiv-signup {
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  margin-bottom: 50px;
}

.onOfflineText-signup {
  color:#5D5A88;
  font-size:16px;
  font-weight:700;
  margin-bottom: 20px;
}

.onOfflineselect {
  width:520px;
  height:40px;
  border-radius:50px;
  background:#f4f4fc;
  margin-bottom:60px;
  text-align: center;
  border: none;
  appearance: none;
  font-size: 16px;
  color:#636363;
  font-weight: 600;
}

select option[value=""][disabled] {
  display: none;
}

.onOfflineselect:focus, .onOfflineselect:hover{
  border-color: #aaa;
  box-shadow: 0 0 1px 3px #5D5A88;
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  outline: none;
}
option {
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  color: #444;
}

.finjoinbutton-signup {
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:20px;
}

#finjoinbuttontext-signup {
  color:rgb(236, 236, 236);
  font-size:15px;
  font-weight:700;
  width:100px;
  height:40px;
  background:#5D5A88;
  border-radius:40px;
  border:none;
}
.backbutton-signup {
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:20px;
}
#backbuttontext-signup {
  color:rgb(255, 255, 255);
  font-size:15px;
  font-weight:700;
  width:100px;
  height:40px;
  background:#ff8989;
  border-radius:40px;
  border:none;
}
.mainbutton-signup {
  display: flex;
}


/* 기술스택 모달창 css */
.black-bgsignup { 
width: 100%; 
height:100%;
background: rgba(0,0,0,0.5);
top: 0;
left: 0;
position:fixed;
padding: 20px;
}

.white-bgsignup {
width: 40%; 
height: 60%;
background:rgb(196, 231, 250);
border-radius: 8px;
padding: 30px 25px 30px 55px;
font-size: 17px;
margin-top:150px;
margin-left: auto;
margin-right: auto;
}
input[type="checkbox"] {
  width: 17px;
  height: 17px;
}
.modalText-signup {
  text-align: center;
  margin-bottom: 10px;
  margin-right: 23px;
  font-weight: 700;
  font-size: 20px;
  color: rgb(61, 61, 61);
}
.modalText1-signup {
  text-align: center;
  margin-bottom: 25px;
  margin-right: 23px;
  font-weight: 700;
  font-size: 16px;
  color: rgb(245, 20, 20);
}
.grid-signup {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-row-gap: 25px;
  margin-bottom: 25px;
  font-size: 14px;
  color: rgb(61, 61, 61);
}
.modalBtn-signup {
  display: flex;
  justify-content: center;
}
.selectBtn-signup {
  background:#c4c5ff;
  border-radius:40px;
  border:none;
  font-weight: 600;
  width:100px;
  height:40px;
  color: rgb(59, 59, 59);
  margin-right: 50px;
  cursor: pointer;
}
.selectBtn-signup:hover {
  background: #5c5a85;
  color: #f4f4fc;
}
.saveBtn-signup {
  margin-right: 30px;
  background:#fcb9eb;
  border-radius:40px;
  border:none;
  font-weight: 600;
  width:100px;
  height:40px;
  color: rgb(59, 59, 59);
  cursor: pointer;
}
.saveBtn-signup:hover {
  background:#ee7bd1 ;
  color: #f4f4fc;
}
.selectModal-signup {
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
}

.selectModalBtn-signup {
  display: flex;
  justify-content: center;
}
.selectModalBtn1-signup {
  color:rgb(255, 255, 255);
  font-size:14px;
  font-weight:600;
  margin-top:15px;
  width:70px;
  height:30px;
  background:#2b64ff;
  border-radius: 5px;
  border:none;
}



@media screen and (max-width: 1550px) {
  /* 기술스택모달창 css */

.black-bgsignup { 
width: 100%; 
height:100%;
background: rgba(0,0,0,0.5);
position:absolute; 
top: 0;
left: 0;
position:fixed;
padding: 20px;
}

.white-bgsignup {
width: 40%; 
height: 60%;
background:rgb(196, 231, 250);
border-radius: 8px;
padding: 30px 25px 30px 55px;
font-size: 17px;
margin-top:150px;
margin-left: auto;
margin-right: auto;
overflow-y: auto;
}
.white-bg1 {
max-height: 60%; /* 원하는 높이로 조정 */
overflow-y: auto;
width: 50%; 
height: 60%;
background:rgb(196, 231, 250);
border-radius: 8px;
padding: 30px 25px 30px 55px;
font-size: 17px;
margin-top:150px;
margin-left: auto;
margin-right: auto;
}
.modalText-signup {
  text-align: center;
  margin-bottom: 40px;
  margin-right: 23px;
  font-weight: 700;
  color: rgb(61, 61, 61);
}
input[type="checkbox"] {
  width: 14px;
  height: 15px;
}
.grid-signup {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-row-gap: 25px;
  margin-bottom: 30px;
  font-size: 13px;
  color: rgb(61, 61, 61);
}

.modalBtn-signup {
  display: flex;
  justify-content: center;
}
.selectBtn-signup {
  background:#c4c5ff;
  border-radius:40px;
  border:none;
  font-weight: 600;
  width:100px;
  height:40px;
  color: rgb(59, 59, 59);
  margin-right: 50px;
}
.saveBtn-signup {
  margin-right: 30px;
  background:#fcb9eb;
  border-radius:40px;
  border:none;
  font-weight: 600;
  width:100px;
  height:40px;
  color: rgb(59, 59, 59);
}
}
@media screen and (min-width: 1900px) {
.black-bgsignup { 
width: 100%; 
height:100%;
background: rgba(0,0,0,0.5);
top: 0;
left: 0;
position:fixed;
padding: 20px;
}

.white-bgsignup {
width: 40%; 
height: 60%;
background:rgb(196, 231, 250);
border-radius: 8px;
padding: 30px 25px 30px 55px;
font-size: 17px;
margin-top:150px;
margin-left: auto;
margin-right: auto;
}

.modalText-signup {
  text-align: center;
  margin-top:15px;	
  margin-bottom: 25px;
  margin-right: 23px;
  font-weight: 700;
  font-size: 20px;
  color: rgb(61, 61, 61);
}
.grid-signup {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-row-gap: 25px;
  margin-bottom: 50px;
  font-size: 14px;
  color: rgb(61, 61, 61);
}
.modalBtn-signup {
  display: flex;
  justify-content: center;
}
.selectBtn-signup {
  background:#c4c5ff;
  border-radius:40px;
  border:none;
  font-weight: 600;
  width:100px;
  height:40px;
  color: rgb(59, 59, 59);
  margin-right: 50px;
}

.saveBtn-signup {
  margin-right: 30px;
  background:#fcb9eb;
  border-radius:40px;
  border:none;
  font-weight: 600;
  width:100px;
  height:40px;
  color: rgb(59, 59, 59);
}

/*협업유형검사 모달창 css */
}

.boxText.selected,
.boxText2.selected {
  background-color: #3498db; /* 선택된 버튼 배경색 */
  color: white; /* 선택된 버튼 텍스트 색상 */
  border: 2px solid #3498db; /* 선택된 버튼 테두리 스타일 */
}

/* 선택된 버튼에 마우스 호버 시 스타일 */
.boxText.selected:hover,
.boxText2.selected:hover {
  background-color: #2980b9; /* 선택된 버튼에 마우스 호버 시 배경색 */
  border: 2px solid #2980b9; /* 선택된 버튼에 마우스 호버 시 테두리 스타일 */
}

.main1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qnaText{
  margin-top:60px;
  margin-bottom: 50px;
  display: flex;
  color: #5D5A88;
  font-size: 35px;
  font-weight: 700;
}
.qnaTextDiv {
  display:flex;
  flex-direction: column;
}
.line1{
  display: flex;
}
.line2{
  display: flex;
  margin-top:35px;
  margin-bottom: 35px;
}
.Qtext{
  color: #5D5A88;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
}
.line3{
  margin-top: 60px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
}
.abox1{
  display: flex;
  align-items: center;
  justify-content: center;
}
.abox2{
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;     
}
.boxText{
  color: #FFF;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  width: 320px;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  background:  #5D5A88;
  border: none;
  cursor: pointer;
}
.boxText2{
  color:  #5D5A88;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  width: 320px;
height: 60px;
padding-left: 20px;
padding-right: 20px;
border-radius: 30px;
background: #f6f5ff;
border: none;
cursor: pointer;
}

.fbox1{
display: flex;
align-items: center;
justify-content: center;
}
.fbox2{
margin-left: 70px;
  display: flex;
  align-items: center;
  justify-content: center;     
}
.fText1{
  color:  #FFFFFF;
  text-align: center;
  width: 130px;
  height: 60px;
  font-size: 15px;
  font-weight: 700;
  background:  #9b96e2;
  border-radius: 30px;
  border:none;
  cursor: pointer;
}
.fText2{
  color:  #FFFFFF;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  background:  #FF9494;
  width: 130px;
  height: 60px;
  border-radius: 30px;
  border:none;
  cursor: pointer;
}

.white-bg1 {
  max-height: 60%; /* 원하는 높이로 조정 */
  overflow-y: auto;
  width: 50%; 
  height: 60%;
  background:rgb(196, 231, 250);
  border-radius: 8px;
  padding: 30px 25px 30px 55px;
  font-size: 17px;
  margin-top:150px;
  margin-left: auto;
  margin-right: auto;
}

.white-bgsignup::-webkit-scrollbar, .white-bg1::-webkit-scrollbar {
  width: 10px;  
}

.white-bg1::-webkit-scrollbar-thumb, .white-bgsignup::-webkit-scrollbar-thumb {
  background: #5D5A88; /* 스크롤바 색상 */
  border-radius: 10px; /* 스크롤바 둥근 테두리 */
}

.white-bg1::-webkit-scrollbar-track ,.white-bgsignup::-webkit-scrollbar-track {
  background: rgba(220, 20, 60, .1);  /*스크롤바 뒷 배경 색상*/
}

@media screen and (min-width: 1921px) {
  .navBar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  width: 520px;
  margin-left:auto;
  margin-right: auto;
  border:none;
  border-bottom:1px solid #D6DBE5;

}
.loginBtn {
  display:flex;
  padding:13px 19px;
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
}
</style>