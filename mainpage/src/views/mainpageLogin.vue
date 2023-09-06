<!-- 메인화면 -->
<template>
  <!-- 맨 위 헤더부분 -->
  <div class="navBar">
    <div class="ham">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="19"
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
      <div class="logoPic">
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
      <div class="lock" @click="submitLogout($event)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style="padding-right: 5px"
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
        >
          <path
            d="M12.1667 7.61621H3.83333C2.68274 7.61621 1.75 8.54895 1.75 9.69954V15.9495C1.75 17.1001 2.68274 18.0329 3.83333 18.0329H12.1667C13.3173 18.0329 14.25 17.1001 14.25 15.9495V9.69954C14.25 8.54895 13.3173 7.61621 12.1667 7.61621Z"
            stroke="#5D5A88"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.99998 1.36621C6.89491 1.36621 5.8351 1.8052 5.0537 2.5866C4.2723 3.368 3.83331 4.42781 3.83331 5.53288V7.61621H12.1666V5.53288C12.1666 4.42781 11.7277 3.368 10.9463 2.5866C10.1649 1.8052 9.10505 1.36621 7.99998 1.36621V1.36621Z"
            stroke="#5D5A88"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <a>Logout</a>
      </div>
      <button class="profileBtn" @click="navigateToProfilePage()">
        Profile
      </button>
    </div>
  </div>

  <div class="section1">
    <div class="section1Left">
      <!-- 이미지 -->
      <img src="/images/MainScreen.jpg" style="width: 100%; height: 100%" />
    </div>
    <div class="section1Right">
      <!-- 멘트와 버튼들 -->
      <div
        class="section1RightTextTop"
        style="
          font-size: 26px;
          font-style: normal;
          font-weight: 700;
          line-height: 46px;
          color: #5d5a88;
        "
      >
        내가 원하는 팀을 만들고 싶다면, <br />PROJECT-NT와 함께
      </div>

      <div
        class="section1RightTextBottom"
        style="
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
          color: #9795b5;
        "
      >
        저희 PROJECT-NT는 효율적인 프로젝트 수행을 위해, <br />편리하고 만족감이
        높은 Team Matching 서비스를 제공합니다.
      </div>

      <span class="btns">
        <button
          @click="navigateTorecruitmentPage()"
          class="SignInBtn"
          style="margin-right: 30px"
        >
          팀원 모집
        </button>
        <button @click="scrollToTarget" class="lookOverBtn">Look over</button>
      </span>
    </div>
  </div>
  <!-- 카드 들어가는 부분 -->
  <div ref="targetElement" class="section2">
    <div class="section2TextDiv">
      <div class="section2Text1">모든 프로그램/모임</div>
      <div class="section2Text2">
        관심있는 프로젝트가 있다면 ‘가입하기’ 를 클릭하여,
        <br />프로젝트에 대한 세부정보를 확인해보세요.
      </div>
    </div>

    <div class="section2Grid">
      <div
        class="card"
        v-for="post in posts"
        :key="post.id"
        style="width: 18rem"
      >
        <img
          :src="`/images/${post.Field}.jpg`"
          class="card-img-top"
          alt="사진"
        />
        <div class="card-body" style="font-size: 17px">
          <p class="grid-field">{{ post.Field }}</p>
          <h4 class="card-title">{{ post.ProjectName }}</h4>
          <p class="grid-tech">{{ post.Tech }}</p>
          <p class="grid-date">
            {{ formatDate(post.StartDate) }} ~ {{ formatDate(post.EndDate) }}
          </p>
          <a
            :href="`/post/?id=${post.ProjectId}`"
            class="btn btn-primary"
            style="
              background: rgb(156, 156, 236);
              position: relative;
              border: none;
            "
            >지원하기</a
          >
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="logoDiv">
      <div class="logoPic">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="25"
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
        <span class="logo" style="font-size: 17px">PROJECT</span>
        <span class="logo-1" style="font-size: 17px">-NT</span>
      </a>
    </div>
    <div class="footerText">
      Copyright © 2023 PROJECT-NT | All Rights Reserved
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  unmounted() {},
  methods: {
    scrollToTarget() {
      const targetElement = this.$refs.targetElement;

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center", // 중앙으로 스크롤 정렬
      });
    },
    navigateTorecruitmentPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push("/recruitmentPage"); // '/LoginPage'는 이동하고자 하는 라우터 경로로 변경해야 합니다
    },
    ...mapActions(["logout"]),
    async submitLogout(event) {
      event.preventDefault();

      try {
        // Vuex의 logout 액션을 호출하여 로그아웃 처리
        await this.logout();

        // 로그아웃 성공 시 홈페이지 또는 로그인 페이지로 이동
        alert("로그아웃되었습니다.");
        this.$router.push("/");
      } catch (error) {
        console.error("로그아웃 실패:", error);
        // 로그아웃 실패 시 사용자에게 오류 메시지 표시
        alert("로그아웃에 실패하였습니다.");
      }
    },

    formatDate(date) {
      // 날짜 포맷팅 함수 작성 (예: YYYY-MM-DD)
      const formattedDate = new Date(date).toISOString().split("T")[0];
      return formattedDate;
    },

    fetchData() {
      axios
        .get("http://localhost:3000/project/getAllPosts") // 실제 API 엔드포인트에 맞게 수정

        .then((response) => {
          console.log(response.data);
          this.posts = response.data.posts;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    navigateToProfilePage() {
      // 지정한 라우터로 이동합니다
      this.$router.push("/profilePage"); // '/signupPage'는 이동하고자 하는 라우터 경로로 변경해야 합니다
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

.logoPic {
  margin-right: 10px;
  margin-left: 100px;
}
.logo {
  color: #443e92;
  font-size: 22px;
  font-weight: 800;
  position: relative;
}
.logo-1 {
  color: #5d5a88;
  font-size: 22px;
  font-weight: 800;
  position: relative;
}
.lockDiv {
  display: flex;
}
.lock {
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-right: 20px;
  color: #5d5a88;
  font-weight: 600;
}
.SignInBtn {
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 30px;
  border: none;
  background: #ff9494;
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
}
.profileBtn {
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

.section1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.lookOverBtn {
  display: flex;
  padding: 18px 24px;
  align-items: center;
  border-radius: 30px;
  border: none;
  background: #ffffff;
  color: #5d5a88;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid #d4d2e3;
}

.section1Right {
  display: flex;
  flex-direction: column;
}

.section1RightTextTop,
.section1RightTextBottom {
  margin: 10px 50px;
}

.btns {
  margin: 20px 50px;
  display: flex;
}

.section2 {
  width: 80%;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  border-top: 2px solid #acacac;
}

.section2TextDiv {
  margin-top: 110px;
}

.section2Text1 {
  color: #5d5a88;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
}

.section2Text2 {
  color: #9795b5;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-top: 25px;
  margin-bottom: 70px;
}

.section2Grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  grid-row-gap: 30px;
}
.footer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 25px 45px;
  margin-top: 150px;
  border-top: 1px solid #d6dbe5;
}
.footerText {
  color: #9795b5;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-right: 80px;
}

@media screen and (min-width: 1921px) {
  .section2Grid {
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    place-items: center;
    grid-row-gap: 10px;
  }

  .section2 {
    width: 1200px;
    margin-top: 90px;
    margin-left: auto;
    margin-right: auto;
    border-top: 2px solid #2917b3;
  }

  .navBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    border: none;
  }
  .footer {
    display: flex;
    width: 1200px;
    align-items: center;
    justify-content: space-between;
    padding: 30px 12px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
  }
}

/*모달창 css */
.black-bg {
  width: 100%;
  height: 100%;
  background: rgab(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.grid-field {
  font-size: 19px;
}
.card-title {
  color: #54517a;
  margin-top: 15px;
}

.grid-tech {
  font-size: 17px;
  margin-top: 50px;
}

.grid-date {
  font-size: 15px;
}

/*
@media screen and (max-width: 780px) {
.section2Grid {
    grid-template-columns: repeat(2,1fr);
    display: grid;
    place-items: center;
    grid-row-gap: 10px;
  }
}
@media screen and (max-width: 420px) {
.section2Grid {
    grid-template-columns: repeat(1,1fr);
    display: grid;
    place-items: center;
    grid-row-gap: 10px;
  }
}
*/
</style>
