<!-- 메인화면 --> 
<template>
  <!-- 맨 위 헤더부분 -->
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
      <div @click="navigateTomainPage()" class="lock">
        <svg xmlns="http://www.w3.org/2000/svg" style="padding-right: 5px;" width="16" height="19" viewBox="0 0 16 19" fill="none">
          <path d="M12.1667 7.61621H3.83333C2.68274 7.61621 1.75 8.54895 1.75 9.69954V15.9495C1.75 17.1001 2.68274 18.0329 3.83333 18.0329H12.1667C13.3173 18.0329 14.25 17.1001 14.25 15.9495V9.69954C14.25 8.54895 13.3173 7.61621 12.1667 7.61621Z" stroke="#5D5A88" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.99998 1.36621C6.89491 1.36621 5.8351 1.8052 5.0537 2.5866C4.2723 3.368 3.83331 4.42781 3.83331 5.53288V7.61621H12.1666V5.53288C12.1666 4.42781 11.7277 3.368 10.9463 2.5866C10.1649 1.8052 9.10505 1.36621 7.99998 1.36621V1.36621Z" stroke="#5D5A88" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a>Logout</a>
      </div>
      <button class="SignInBtn">Profile</button>
    </div>
  </div>

  <div class="section1">
    <div class="section1Left">
      <!-- 이미지 -->
      <img src="/images/MainScreen.jpg" style="width:100%; height:100%;">
    </div>
    <div class="section1Right">
      <!-- 멘트와 버튼들 -->
      <div class="section1RightTextTop" style="font-size: 26px; font-style: normal; font-weight: 700; line-height: 46px; color: #5D5A88;">
        내가 원하는 팀을 만들고 싶다면, <br>PROJECT-NT와 함께
      </div>
      
      <div class="section1RightTextBottom" style="font-size: 18px; font-style: normal; font-weight: 400; line-height: 30px; color:#9795B5;">
        저희 PROJECT-NT는 효율적인 프로젝트 수행을 위해, <br>편리하고 만족감이 높은 Team Matching 서비스를 제공합니다.
      </div>
    </div>
  </div>

  <!--본문들어갈 곳-->
  <div class="section2">
    <div class="projectCreate-div">
      <div class="projectCreateText-1">프로젝트 생성</div>
      <div class="projectCreateText-2">만들고 싶은 프로젝트가 있다면 함께 할 Team members 을(를)  모집 해봐요!</div>
    </div>

    <div class="projectName-div">
      <div class="projectName">프로젝트명</div>
      <div class="projectName-advice">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z" fill="#F24E1E"/>
        </svg>
        <span class="projectNameText">직관적이고 이해하기 쉬운 프로젝트명을 사용해주세요.</span>
      </div>

      <input type="text" v-model="projectName" class="projectNameText-input" placeholder="3 ~ 20글자로 작성해주세요. 예)프로젝트 팀 매칭 서비스">
      
    </div>

    <div class="projectCate-div">
      <div class="projectCate">프로젝트 분야</div>
      <div class="projectCate-advice">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z" fill="#F24E1E"/>
        </svg>
        <span class="projectCateText">아래 분야 중 한가지 선택해주세요.</span>
      </div>
    </div>

      <!--체크박스 grid-->
      <div class="checkbox-grid">
        <div class="checkbox-item" v-for="(item, index) in items" :key="index">
          <input type="radio" :id="item" v-model="selectedField" :value="item" style="width: 20px; height: 20px;" @change="showImageConfirmation" />
          <label :for="item">{{ item }}</label>
        </div>
      </div>
  
  <div class="projectImg">대표 이미지</div>
  <div class="projectCate-advice">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z" fill="#F24E1E"/>
        </svg>
        <span class="projectCateText">선택한 분야에 맞는 기본 이미지가 저장됩니다. (프로젝트 분야를 선택해주세요.)</span>
      </div>

  <div class="image-container">
    <i class="bi bi-camera" v-if="카메라==true"></i>
    <img :src="getImageForItem(selectedField)" :alt="selectedField" v-if="selectedField !== ''" class="image"/>
  </div>

  <div class="projectRegion-div">
      <div class="projectRegion">지역</div>
      <div class="projectRegion-advice">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z" fill="#F24E1E"/>
        </svg>
        <span class="projectRegionText"> 온/오프라인 여부와 장소를 선택해주세요.</span>
      </div>

      <!--온오프라인 지역 드롭다운-->
      <div class="projectRegion-dropdown">
        <div class="onoffline-div">
          <label for="onlineOffline"  style="color: #3b3b3b; font-size: 18px; ">온라인/오프라인</label>
          <select id="onlineOffline" v-model="selectedOnlineOffline">
          <option value="online">온라인만 가능</option>
          <option value="offline">오프라인만 가능</option>
          <option value="both">온/오프라인 둘 다 가능</option>
        </select>
        </div> 
        
        <div class="location-div">
          <label for="locations" style="color: #3b3b3b; font-size: 18px;">지역</label>
          <select id="locations" v-model="selectedArea">
            <option v-for="(location, index) in locations" :key="index" :value="location">{{ location }}</option>
          </select>
        </div>
      </div>
    </div>


      <!--모집인원 드롭다운-->
        <div class="projectRecruitment-div">
      <div class="projectRecruitment">모집인원</div>
      <div class="projectRecruitment-advice">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z" fill="#F24E1E"/>
        </svg>
        <span class="projectRecruitmentText"> 3 ~ 4명을 추천합니다. (최대 8명)</span>
      </div>
      
      <div class="projectRecruitmentDropdown-div">
        <div v-for="(dropdown, index) in dropdowns" :key="index" class="dropdown-container">
          <div class="RecruitmentDropdown-1">
            <label for="category" class="recruitmentText-1">직무</label>
            <select id="category" v-model="dropdown.majorField">
              <option value="">선택</option>
              <option value="design">디자인</option>
              <option value="backend">백엔드</option>
              <option value="frontend">프론트엔드</option>
            </select>
          </div>

          <div class="RecruitmentDropdown-2">
            <label for="subcategory" class="recruitmentText-2">세부 직무</label>
            <select id="subcategory" v-model="dropdown.subField" :disabled="dropdown.majorField === ''">
              <option v-for="(subcat, subIndex) in subcategories[dropdown.majorField]" :key="subIndex" :value="subcat">{{ subcat }}</option>
            </select>
          </div>

          <span class="button-container">
            <button class="minusBtn" @click="decreaseCount(index)" :disabled="dropdown.count === 0">-</button>
            <span>{{ dropdown.count }}</span>
            <button class="plusBtn" @click="increaseCount(index)" :disabled="dropdown.count === 8 || !dropdown.majorField || !dropdown.subField">+</button>
            <button class="addBtn" @click="addDropdown(index)" :disabled="dropdown.count === 0">추가</button>
            <button class="deleteBtn" @click="removeDropdown(index)" :disabled="index < 1">삭제</button>
          </span>
        </div>
      </div>

      </div>

      <!--프로젝트 설명 부분-->
      <div class="projectexplain-div">
        <div class="projectexplain">프로젝트 설명</div>
        <div class="projectexplain-advice">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z" fill="#F24E1E"/>
          </svg>
          <span class="projectexplainText">설명은 되도록 구체적으로 써주세요. </span>
        </div>
        <textarea class="explainMemo" cols="100" rows="23" v-model="description"></textarea>
      </div>
      
      <!--기술/언어 부분-->
      <div class="projectTec-div">
        <div class="projectTec">기술/언어 (최대 8개)</div>
        <div class="projectTec-advice">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z" fill="#F24E1E"/>
          </svg>
          <span class="projectTecText">프로젝트에 적용하고자 하는 기술/언어를 적어주세요. </span>
        </div>
        <input type="" v-model="techs" class="projectTec-input" placeholder="예) java, react, figma, mysql">
      </div>

      <!--프로젝트 기간 부분-->
      <div class="projectDate-div">
        <div class="projectDate">프로젝트 기간</div>
        <div class="projectDate-advice">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z" fill="#F24E1E"/>
          </svg>
          <span class="projectDateText">대략적인 기간을 선택해주세요. </span>
        </div>

        <div class="dateDiv">
          <label for="startDate" class="dateText-1">시작 날짜:</label>
          <input type="date" id="startDate" v-model="startDate" @change="checkStartDate">

          <label for="endDate" class="dateText-2">종료 날짜:</label>
          <input type="date" id="endDate" v-model="endDate"  @change="checkEndDate">
          <p class="dateText">선택된 기간: {{ formattedStartDate }} ~ {{ formattedEndDate }}</p>
        </div>
      </div>

      <div class="recruitmentButton">
        <div>
          <button type="submit" @click=" submitProjectForm($event)" class="completeButton">작성 완료</button>
        </div>
        <div><button class="escButton">작성 취소</button></div>
      </div>


  </div>




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

</template>

<script>
import axios from "axios";

export default{ 

  components:{},
  data(){
    return{
      projectName:'',
      items: [
        "공유서비스", "데이팅서비스", "여행", "소셜네트워크", "뷰티",
        "정보", "부동산", "육아", "게임", "이커머스",
        "교육", "의료", "모빌리티", "헬스", "엔터테인먼트", "기타"
      ],
      selectedItems: [],
      selectedField: "",
      카메라:true, 
      /*지역 드롭다운 */
      selectedOnlineOffline: '',
      selectedArea: '',
      locations: [
        '서울특별시', '인천광역시', '경기도', '부산광역시', '대전광역시', '광주광역시', '대구광역시',
        '울산광역시', '강원도','경상북도', '경상남도', '충청북도', '충청남도', '전라북도', '전라남도',
        '제주특별자치도', '세종특별자치시'
      ],
      dropdowns: [],
      majorField: '',
      subField: '',
      count: 0,
      subcategories: {
        design: ['3D디자인', 'UX/UI디자인', '그래픽 디자인', '하드웨어 디자인', '기타 디자인'],
        backend: ['웹서버', '블록체인', 'AI', '데이터베이스', '빅데이터', '프롬프트 엔지니어'],
        frontend: ['iOS', '안드로이드', '웹', '웹퍼블리셔', '임베디드'],
      },
      description: '', 
      techs: '',
      startDate: '', // 시작 날짜
      endDate: '',    // 종료 날짜
    };
  },
  setup(){
  },
  created(){
    this.addDropdown();
  },
  mounted(){},
  unmounted(){},
  computed: {
    formattedStartDate() {
      return this.startDate ? this.formatDate(this.startDate) : "날짜를 선택하세요";
    },
    formattedEndDate() {
      return this.endDate ? this.formatDate(this.endDate) : "날짜를 선택하세요";
    }
  },
  methods:{
    getImageForItem(item) {
      // 이미지 파일 경로를 반환하는 로직을 작성합니다.
      return (`/images/${item}.jpg`); // 이미지 파일 경로 반환
    },
    showImageConfirmation() {
      alert('기본 이미지가 저장되었습니다!');
      this.카메라=false;
    },
    increaseCount(index) {
      if (this.dropdowns[index].count < 9) {
        this.dropdowns[index].count++;
      }
    },
    decreaseCount(index) {
      if (this.dropdowns[index].count > 0) {
        this.dropdowns[index].count--;
      }
    },
    addDropdown() {
      if (this.dropdowns.length < 9) {
        this.dropdowns.push({
          majorField: '',
          subField: '',
          count: 0
        });
      }
    },
    removeDropdown(index) {
      this.dropdowns.splice(index, 1);
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    checkStartDate() {
      if (this.startDate && new Date(this.startDate) < new Date()) {
        alert("현재 시간보다 이전 날짜는 선택할 수 없습니다.");
        this.startDate = ""; // 선택한 날짜를 초기화
      }
    },
    checkEndDate() {
      if (this.endDate && new Date(this.endDate) < new Date()) {
        alert("현재 시간보다 이전 날짜는 선택할 수 없습니다.");
        this.endDate = ""; // 선택한 날짜를 초기화
      }
      if (this.startDate && this.endDate && new Date(this.endDate) < new Date(this.startDate)) {
        alert("시작 날짜보다 이전인 종료 날짜는 선택할 수 없습니다.");
        this.endDate = ""; // 선택한 날짜를 초기화
      }
    },
    navigateTomainPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push('/'); // '/LoginPage'는 이동하고자 하는 라우터 경로로 변경해야 합니다
    },

    submitProjectForm(event)  { 

    event.preventDefault();

    const projectData = {
    Name: this.projectName,
    selectedField: this.selectedField,
    selectedArea: this.selectedArea,
    recruit: this.dropdowns,
    description: this.description,
    techs: this.techs, //기술스택
    startDate: this.startDate, //완료
    endDate: this.endDate,//완료
  };

    axios.post('http://localhost:3000/project/createProjects', projectData)
        .then(response => {
          console.log('등록 성공!', response.data);
      alert("등록 완료!")
      this.$router.push('/mainpageLogin'); // 가입 성공 시 페이지 이동
    })
        .catch(error => {
          console.error('등록 실패:', error);
      // 실패 시 처리, 예: 사용자에게 에러 메시지 보여주기
      });
    },
  }
}
</script>


<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");


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


body, div, span, button, a, select, option {
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

.section1RightTextTop, .section1RightTextBottom {
  margin: 10px 50px;
}

.logoDiv {
  display: flex;
  align-items: center;
}

.logoPic{
  margin-right: 10px;
  margin-left: 100px;
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
.section1 {
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top: 50px;
}
/*본문내용 css */
.section2 {
  width: 80%;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  border-top: 2px solid  #acacac;
}

.projectCreateText-1{
  color: #3b3b3b;
  font-size: 34px;
  font-weight: 400;
  margin-top: 60px;
  margin-bottom: 10px;
  text-align: center;
}

.projectCreateText-2{
  color: #5D5A88;
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  text-align: center;
}

.projectName-div {
  margin-top: 80px;
}

.projectName {
  color: #3b3b3b;
  font-size: 28px;
  font-weight: 400;
  margin-top: 50px;
  margin-bottom: 10px;
}

.projectName-advice {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.projectNameText {
  color: #5D5A88;
  font-size: 18px;
  font-weight: 400;
}

.projectNameText-input {
  width: 50%;
  padding:15px 10px;
  border-radius: 5px;
  border: 2px solid #E3E3E3;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 700;
}
.projectNameText-input::placeholder,.projectTec-input::placeholder {
  font-size: 16px;
  font-weight: 500;
}


/* css정리 해야됨 */
.projectCate-div {
  margin-top: 80px;
}
.projectCate {
  color: #3b3b3b;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 10px;
}
.projectCate-advice {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.projectCateText {
  color: #5D5A88;
  font-size: 18px;
  font-weight: 400;
}


.projectRegion-div , .projectRecruitment-div, .projectexplain-div, .projectTec-div,.projectDate-div  {
  margin-top: 80px;
}
.projectRegion , .projectRecruitment, .projectexplain, .projectTec, .projectDate{
  color: #3b3b3b;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 10px;
}
.projectRegion-advice , .projectRecruitment-advice, .projectexplain-advice, .projectTec-advice, .projectDate-advice{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.projectRegionText , .projectRecruitmentText, .projectexplainText, .projectTecText, .projectDateText{
  color: #5D5A88;
  font-size: 18px;
  font-weight: 400;
}

.projectRegion-dropdown {
  display: flex;
  margin-top: 30px;
}

.onoffline-div{
  display: flex;
  flex-direction: column;
} 

.onoffline-div select,.location-div select, .RecruitmentDropdown-1 select,.RecruitmentDropdown-2 select {
  width: 350px;
  margin-top: 15px;
  padding: 12px 0px 12px 0px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  color: #383838;
}

.onoffline-div select:focus, .location-div select:focus, .projectNameText-input:focus,.RecruitmentDropdown-1:focus, .RecruitmentDropdown-2:focus, .explainMemo:focus, .RecruitmentDropdown-1 select:focus, .RecruitmentDropdown-2 select:focus,.projectTec-input:focus, #startDate:focus, #endDate:focus {
  outline: 2px solid #a0d1ff;
  border: none;
}

.onoffline-div option {
  text-align: center;
  font-size: 14px;
}

.location-div option{
  text-align: center;
  font-size: 14px;
}


.location-div {
  display: flex;
  flex-direction: column;
  margin-left: 200px;
}



/*모집인원 css */
.projectRecruitmentDropdown-div {
  margin-top:30px;
}

.dropdown-container {
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;
}

.button-container {
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.button-container button {
  cursor: pointer; 
}


.recruitmentText-1, .recruitmentText-2{
  color: rgb(59, 59, 59);
  font-size: 18px;
}
.RecruitmentDropdown-1 {
  display: flex;
  flex-direction: column;
  
}
.RecruitmentDropdown-2 {
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  
}
.minusBtn {
  border: none;
  width: 40px;
  height: 40px;
  background: #8fbcda;
  color: #383838;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 5px;
}
.plusBtn {
  border: none;
  width: 40px;
  height: 40px;
  background: #8fbcda;
  color: #383838;
  font-size: 20px;
  border-radius: 5px;
  margin-left: 10px;
}

.minusBtn:disabled, .plusBtn:disabled {
  background-color: #e9e9e9; /* 비활성화된 버튼의 배경색 */
  cursor: not-allowed; /* 비활성화된 버튼에는 커서를 바꿔서 표시 */
}

.addBtn {
  border: none;
  width: 60px;
  height: 35px;
  margin: 0px 10px 0px 15px;
  border-radius: 5px;
  background: rgb(89, 205, 209);
  color: #fff;
} 
.deleteBtn {
  border: none;
  width: 60px;
  height: 35px;
  margin: 0px 0px 0px 10px;
  border-radius: 5px;
  background: rgb(241, 122, 148);
  color: #fff;
}

.addBtn:disabled, .deleteBtn:disabled {
  background-color: #e9e9e9;/* 비활성화된 버튼의 배경색 */
  color:#383838 ;
  cursor: not-allowed; /* 비활성화된 버튼에는 커서를 바꿔서 표시 */
}

/* 프로젝트 설명 css */
.explainMemo {
  font-size: 16px;
  font-weight: 600;
  padding: 10px 10px 10px 15px;
  margin-top: 30px;
  overflow-y: auto;
  resize: none;
}
 /*스크롤바 css */
.explainMemo::-webkit-scrollbar{
      width: 10px;   
}

.explainMemo::-webkit-scrollbar-thumb {
      background: #5D5A88; /* 스크롤바 색상 */
      border-radius: 10px; /* 스크롤바 둥근 테두리 */
}

.explainMemo::-webkit-scrollbar-track  {
      background: rgba(220, 20, 60, .1);  /*스크롤바 뒷 배경 색상*/
}

.projectTec-input {
  width: 50%;
    padding: 15px 10px;
    border-radius: 5px;
    border: 2px solid #E3E3E3;
    margin-top: 15px;
    font-size: 18px;
    font-weight: 700;
}

/* 프로젝트 기간 css */
.dateDiv {
  margin-top: 30px;
}
.dateText-1, .dateText-2 {
  color: rgb(59, 59, 59);
  font-size: 18px;
}
#startDate, #endDate {
  padding: 10px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 8px;
  border: none;
  background: #f5f5f5;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  text-align: center;
}
input[type='date']::-webkit-calendar-picker-indicator {
  position: absolute; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent; 
  color: transparent;
  cursor: pointer;
}

.dateText {
  color: rgb(245, 128, 96);
  letter-spacing: 2px;
  margin-top: 15px;
}

.recruitmentButton {
  display:flex;
  justify-content: center;
  margin-top:260px;
}

  .completeButton{
    border-radius: 5px;
    border: none;
    background: #5D5A88;
    color: #FFF;
    width: 120px;
    height: 45px;
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;
    cursor: pointer;
    margin-right:40px;
  }
  .escButton{
    margin-left:40px;
    border-radius: 5px;
    border: none;
    background: #fca0a0;
    color: #fdfdfd;
    width: 120px;
    height: 45px;
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;
    cursor: pointer;
    }



/*footer css */
.footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 45px;
  margin-top:250px;
  border-top: 1px solid #D6DBE5;
}
.footerText {
  color: #9795B5;
  font-size: 14px;
  font-weight: 400;
  margin-right :80px;
}

/*grid css */ 

.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 5px;
  color:#646464;
}

.projectImg {
  color: #3b3b3b;
  font-size: 28px;
  font-weight: 400;
  margin-top: 50px;

}
.image-container {
  margin-top: 30px;
  border: 3px solid #E3E3E3;
  width: 350px;
  height: 250px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 100%;
  height: 100%;
}
.bi-camera {
  font-size: 40px;
  color: #656565;
}

@media (max-width: 768px) {
  .checkbox-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 576px) {
  .checkbox-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
