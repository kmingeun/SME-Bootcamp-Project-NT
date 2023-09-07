<template>
  <!--showpost1-->
  <div v-if="showpost === 1" class="showpostAll">
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
        <div class="lock">
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
        <button @click="navigateTomainpageLoginPage()" class="SignInBtn">
          Home
        </button>
      </div>
    </div>

    <!--윗쪽 소개/이미지란-->
    <div class="MainHead">
      <div class="Text">
        <div class="Bold">[{{ Area }}] - {{ ProjectName }}</div>
        <div class="HeadName">{{ Name }}</div>
      </div>

      <div>
        <img class="Img" src="/images/MainScreen.jpg" alt="이미지" />
      </div>
    </div>

    <!--중앙 전체-->
    <div class="Center">
      <!--왼쪽 전체-->
      <div class="Left">
        <!--왼쪽 박스 중 윗부분-->
        <div class="Top">
          <div class="Status">모집현황</div>
          <div class="Info-showpost1">
            <div class="Exclamation-showpost1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z"
                  fill="#F24E1E"
                />
              </svg>
            </div>
            <div class="One">한가지만 선택해주세요</div>
          </div>

          <div class="Choice">
            <div
              v-for="(recruit, index) in recruits"
              :key="index"
              :class="'choice-' + (index + 1)"
            >
              <span class="ChoiceText">{{ recruit.Subfield }}</span>
              <span class="ChoiceNumber"
                >{{ recruit.AcceptedMembers }}/{{ recruit.NumofRole }}</span
              >
              <span>
                <button
                  class="ChoiceButton"
                  @click="selectRecruit(recruit.Subfield)"
                >
                  선택
                </button>
              </span>
            </div>
          </div>
        </div>

        <!--왼쪽 박스 중 아랫 부분-->
        <div class="Bottom">
          <div class="Status">프로젝트 소개</div>
          <div>{{ Description }}</div>
        </div>
      </div>

      <!--오른쪽 전체-->
      <div class="Right">
        <div class="BigBox">
          <div class="Box">
            <div class="LeaderBoxText">리더정보</div>

            <div class="LeaderProfile-showpost1">
              <div>
                <svg
                  class="HumanIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="Name-showpost1">{{ Name }}</div>

              <div>
                <button class="LeaderButton-showpost1">프로필보기</button>
              </div>
            </div>
          </div>

          <div class="Box">
            <div class="BoldText">프로젝트 기간</div>
            <div class="OriginText">
              {{ formatDate(StartDate) }} ~ {{ formatDate(EndDate) }}
            </div>
          </div>

          <div class="Box">
            <div class="BoldText">프로젝트 분야</div>
            <div class="OriginText">{{ Field }}</div>
          </div>

          <div class="Box">
            <div class="BoldText">기술/언어</div>
            <div class="OriginText">{{ Tech }}</div>
          </div>
        </div>
      </div>
    </div>

    <!--아래 버튼-->
    <div class="Buttonshow-showpost1">
      <div>
        <button @click="지원하기모달창 = true" class="JoinButton-showpost1">
          지원하기
        </button>
      </div>
      <div><button class="LookButton-showpost1">더 둘러보기</button></div>
    </div>

    <!--하단 바-->
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
    <!--지원하기 눌렸을 때 생기는 모달창-->
    <div class="selectModal" v-if="지원하기모달창 == true">
      <span class="">지원하시겠습니까?</span>
      <div class="selectModalBtn">
        <button
          class="selectModalBtn1"
          @click="sendSelection(selectedSubfield)"
        >
          예
        </button>
        <button class="selectModalBtn2" @click="지원하기모달창 = false">
          아니요
        </button>
      </div>
    </div>
  </div>

  <!--showpost2-->
  <div v-if="showpost === 2" class="showpost2All">
    <!--헤더부분-->
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
        <div class="lock">
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
        <button @click="navigateTomainpageLoginPage()" class="SignInBtn">
          Home
        </button>
      </div>
    </div>

    <!--윗쪽 소개/이미지란-->
    <div class="MainHead">
      <div class="Text">
        <div class="Bold">[{{ Area }}] - {{ ProjectName }}</div>
        <div class="HeadName">{{ Name }}</div>
      </div>

      <div>
        <img class="Img" src="/images/MainScreen.jpg" alt="이미지" />
      </div>
    </div>

    <!--중앙 전체-->
    <div class="Center">
      <!--왼쪽 전체-->
      <div class="Left">
        <!--왼쪽 박스 중 윗부분-->
        <div class="Top">
          <div class="Status">모집현황</div>
          <div class="Info-showpost2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z"
                  fill="#F24E1E"
                />
              </svg>
            </div>
            <div class="One-showpost2">한가지만 선택해주세요</div>
          </div>

          <div class="Choice">
            <div
              v-for="(recruit, index) in recruits"
              :key="index"
              :class="'choice-' + (index + 1)"
            >
              <span class="ChoiceText">{{ recruit.Subfield }}</span>
              <span class="ChoiceNumber"
                >{{ recruit.AcceptedMembers }}/{{ recruit.NumofRole }}</span
              >
              <span>
                <button
                  class="ChoiceButton"
                  @click="selectRecruit(recruit.Subfield)"
                >
                  선택
                </button>
              </span>
            </div>
          </div>
        </div>

        <!--왼쪽 박스 중 아랫 부분-->
        <div class="Bottom">
          <div class="Status">프로젝트 소개</div>
          <div>{{ Description }}</div>
        </div>
      </div>

      <!--오른쪽 전체-->
      <div class="Right">
        <div class="BigBox">
          <div class="Box">
            <div class="LeaderBoxText">리더정보</div>

            <div class="LeaderProfile-showpost2">
              <div>
                <svg
                  class="HumanIcon-showpost2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="Name-showpost2">{{ Name }}</div>

              <div>
                <button class="LeaderButton-showpost2">프로필보기</button>
              </div>
            </div>
          </div>

          <div class="Box">
            <div class="BoldText">프로젝트 기간</div>
            <div class="OriginText">
              {{ formatDate(StartDate) }} ~ {{ formatDate(EndDate) }}
            </div>
          </div>

          <div class="Box">
            <div class="BoldText">프로젝트 분야</div>
            <div class="OriginText">{{ Field }}</div>
          </div>

          <div class="Box">
            <div class="BoldText">기술/언어</div>
            <div class="OriginText">{{ Tech }}</div>
          </div>
        </div>
      </div>
    </div>

    <!--아래 버튼-->
    <div class="Button-showpost2">
      <div>
        <button class="JoinButton-showpost2" @click="cancelApply()">
          취소하기
        </button>
      </div>
      <div><button class="LookButton-showpost2">더 둘러보기</button></div>
    </div>

    <!--하단 바-->
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
  </div>

  <!--showpost3-->
  <div v-if="showpost === 3" class="showpost3All">
    <!--헤더부분-->
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
        <a href="" style="text-decoration-line: none" class="logoText">
          <span class="logo">PROJECT</span>
          <span class="logo-1">-NT</span>
        </a>
      </div>

      <div class="lockDiv">
        <div class="lock">
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
        <button @click="navigateTomainpageLoginPage()" class="SignInBtn">
          Home
        </button>
      </div>
    </div>

    <!--윗쪽 소개/이미지란-->
    <div class="MainHead">
      <div class="Text">
        <div class="Bold">[{{ Area }}] - {{ ProjectName }}</div>
        <div class="HeadName">{{ Name }}</div>
      </div>

      <div>
        <img class="Img" src="/images/MainScreen.jpg" alt="이미지" />
      </div>
    </div>

    <!--중앙 전체-->
    <div class="Center">
      <!--왼쪽 전체-->
      <div class="Left">
        <!--왼쪽 박스 중 윗부분-->
        <div class="Top">
          <div class="Status">모집현황</div>
          <div class="Info-showpost3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z"
                  fill="#F24E1E"
                />
              </svg>
            </div>
            <div class="One-showpost3">한가지만 선택해주세요</div>
          </div>

          <div class="Choice">
            <div
              v-for="(recruit, index) in recruits"
              :key="index"
              :class="'choice-' + (index + 1)"
            >
              <span class="ChoiceText">{{ recruit.Subfield }}</span>
              <span class="ChoiceNumber"
                >{{ recruit.AcceptedMembers }}/{{ recruit.NumofRole }}</span
              >
              <span>
                <button
                  @click="selectRecruit(recruit.Subfield)"
                  class="ChoiceButton"
                >
                  선택
                </button>
              </span>
            </div>
          </div>
        </div>

        <!--왼쪽 박스 중 아랫 부분-->
        <div class="Bottom">
          <div class="Status">프로젝트 소개</div>
          <div>{{ Description }}</div>
        </div>
      </div>

      <!--오른쪽 전체-->
      <div class="Right">
        <div class="BigBox">
          <div class="Box">
            <div class="LeaderBoxText">리더정보</div>

            <div class="LeaderProfile-showpost3">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="Name">{{ Name }}</div>
              <button class="LeaderButton">프로필보기</button>
            </div>
          </div>

          <div class="Box">
            <div class="BoldText">프로젝트 기간</div>
            <div class="OriginText">
              {{ formatDate(StartDate) }} ~ {{ formatDate(EndDate) }}
            </div>
          </div>

          <div class="Box">
            <div class="BoldText">프로젝트 분야</div>
            <div class="OriginText">{{ Field }}</div>
          </div>

          <div class="Box">
            <div class="BoldText">기술/언어</div>
            <div class="OriginText">{{ Tech }}</div>
          </div>

          <div class="memberBtn-div">
            <button class="memberBtn1" @click="openModal()">멤버 현황</button>
            <button class="memberBtn2" @click="openModal1()">지원 현황</button>
          </div>
        </div>
      </div>
    </div>

    <!--아래 버튼-->
    <div class="Button">
      <span class="advice"
        >프로젝트를 시작할 준비가 되었다면<br />‘프로젝트 시작하기’ 버튼을
        눌러주세요.</span
      >
      <button class="startButton">프로젝트 시작하기</button>
    </div>

    <!--하단 바-->
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

    <!--멤버현황, 지원현황 모달창-->
    <div class="black-bg" v-if="멤버현황모달창 == true">
      <div class="white-bg1">
        <i @click="closeModal()" class="bi bi-x-lg"></i>
        <div class="main1">
          <div class="memberText">멤버현황</div>
          <div class="modalGrid">
            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">{{ Name }}</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="black-bg" v-if="지원현황모달창 == true">
      <div class="white-bg1">
        <i @click="closeModal1()" class="bi bi-x-lg"></i>
        <div class="main1">
          <div class="memberText">지원현황</div>
          <div class="modalGrid">
            <div class="LeaderProfileModal" v-for="(apply, index) in applies" :key="index">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">{{ apply.Name }}</div>
              <div class="Subfield">{{ apply.Subfield }}</div>
              <button class="LeaderButton">프로필보기</button>
              <div class="acceptBtnDiv-showpost3">
                <button class="acceptBtn-showpost3">수락</button>
                <button class="opposeBtn-showpost3">거절</button>
              </div>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--showpost4-->
  <div v-if="showpost === 4" class="showpost4All">
    <!--헤더부분-->
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
        <a href="" style="text-decoration-line: none" class="logoText">
          <span class="logo">PROJECT</span>
          <span class="logo-1">-NT</span>
        </a>
      </div>

      <div class="lockDiv">
        <div class="lock">
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
        <button @click="navigateTomainpageLoginPage()" class="SignInBtn">
          Home
        </button>
      </div>
    </div>

    <!--윗쪽 소개/이미지란-->
    <div class="MainHead">
      <div class="Text">
        <div class="Bold">[{{ Area }}] - {{ ProjectName }}</div>
        <div class="HeadName">{{ Name }}</div>
      </div>

      <div>
        <img class="Img" src="/images/MainScreen.jpg" alt="이미지" />
      </div>
    </div>

    <!--중앙 전체-->
    <div class="Center">
      <!--왼쪽 전체-->
      <div class="Left">
        <!--왼쪽 박스 중 윗부분-->
        <div class="Top">
          <div class="Status">모집현황</div>
          <div class="Info-showpost4">
            <div class="Exclamation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M12.2588 5.42502C12.2343 5.18169 12.2612 4.93595 12.3376 4.70363C12.4139 4.47131 12.5382 4.25758 12.7022 4.07623C12.8663 3.89487 13.0666 3.74992 13.2901 3.65071C13.5136 3.5515 13.7554 3.50024 14 3.50024C14.2446 3.50024 14.4864 3.5515 14.7099 3.65071C14.9334 3.74992 15.1337 3.89487 15.2978 4.07623C15.4618 4.25758 15.5861 4.47131 15.6624 4.70363C15.7388 4.93595 15.7657 5.18169 15.7412 5.42502L15.0623 16.5375C15.036 16.801 14.9128 17.0454 14.7165 17.2231C14.5202 17.4009 14.2648 17.4993 14 17.4993C13.7352 17.4993 13.4798 17.4009 13.2835 17.2231C13.0872 17.0454 12.964 16.801 12.9378 16.5375L12.2588 5.42502ZM12.25 21C12.25 20.5359 12.4344 20.0908 12.7626 19.7626C13.0908 19.4344 13.5359 19.25 14 19.25C14.4641 19.25 14.9092 19.4344 15.2374 19.7626C15.5656 20.0908 15.75 20.5359 15.75 21C15.75 21.4642 15.5656 21.9093 15.2374 22.2375C14.9092 22.5656 14.4641 22.75 14 22.75C13.5359 22.75 13.0908 22.5656 12.7626 22.2375C12.4344 21.9093 12.25 21.4642 12.25 21Z"
                  fill="#F24E1E"
                />
              </svg>
            </div>
            <div class="One-showpost4">한가지만 선택해주세요</div>
          </div>

          <div class="Choice">
            <div
              v-for="(recruit, index) in recruits"
              :key="index"
              :class="'choice-' + (index + 1)"
            >
              <span class="ChoiceText">{{ recruit.Subfield }}</span>
              <span class="ChoiceNumber"
                >{{ recruit.AcceptedMembers }}/{{ recruit.NumofRole }}</span
              >
              <span>
                <button
                  @click="selectRecruit(recruit.Subfield)"
                  class="ChoiceButton"
                >
                  선택
                </button>
              </span>
            </div>
          </div>
        </div>

        <!--왼쪽 박스 중 아랫 부분-->
        <div class="Bottom">
          <div class="Status">프로젝트 소개</div>
          <div>{{ Description }}</div>
        </div>
      </div>

      <!--오른쪽 전체-->
      <div class="Right">
        <div class="BigBox">
          <div class="Box">
            <div class="LeaderBoxText">리더정보</div>

            <div class="LeaderProfile">
              <div>
                <svg
                  class="HumanIcon-showpost4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>
          </div>

          <div class="Box">
            <div class="BoldText">프로젝트 기간</div>
            <div class="OriginText">
              {{ formatDate(StartDate) }} ~ {{ formatDate(EndDate) }}
            </div>
          </div>

          <div class="Box">
            <div class="BoldText">프로젝트 분야</div>
            <div class="OriginText">{{ Field }}</div>
          </div>

          <div class="Box">
            <div class="BoldText">기술/언어</div>
            <div class="OriginText">{{ Tech }}</div>
          </div>

          <div class="memberBtn-div">
            <button class="memberBtn1" @click="openModal()">멤버 현황</button>
          </div>
        </div>
      </div>
    </div>

    <!--아래 버튼-->
    <div class="Button">
      <span class="advice"
        >프로젝트가 마무리 되었다면<br />‘프로젝트 종료’ 버튼을
        눌러주세요.</span
      >
      <button class="endButton">프로젝트 종료하기</button>
    </div>

    <!--하단 바-->
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

    <!--멤버현황, 지원현황 모달창-->
    <div class="black-bg" v-if="멤버현황모달창 == true">
      <div class="white-bg1">
        <i @click="closeModal()" class="bi bi-x-lg"></i>
        <div class="main1">
          <div class="memberText">멤버현황</div>
          <div class="modalGrid">
            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>

            <div class="LeaderProfileModal">
              <div>
                <svg
                  class="HumanIcon-showpost4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clip-path="url(#clip0_39_1357)">
                    <path
                      d="M48.125 26.25C48.125 29.731 46.7422 33.0694 44.2808 35.5308C41.8194 37.9922 38.481 39.375 35 39.375C31.519 39.375 28.1806 37.9922 25.7192 35.5308C23.2578 33.0694 21.875 29.731 21.875 26.25C21.875 22.769 23.2578 19.4306 25.7192 16.9692C28.1806 14.5078 31.519 13.125 35 13.125C38.481 13.125 41.8194 14.5078 44.2808 16.9692C46.7422 19.4306 48.125 22.769 48.125 26.25Z"
                      fill="#5D5A88"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35ZM35 4.375C29.2328 4.37531 23.5829 6.00409 18.7005 9.07387C13.8182 12.1437 9.90186 16.5297 7.40234 21.7271C4.90282 26.9245 3.92169 32.7221 4.57187 38.4526C5.22205 44.183 7.47711 49.6134 11.0775 54.1187C14.1838 49.1138 21.0219 43.75 35 43.75C48.9781 43.75 55.8119 49.1094 58.9225 54.1187C62.5229 49.6134 64.778 44.183 65.4281 38.4526C66.0783 32.7221 65.0972 26.9245 62.5977 21.7271C60.0981 16.5297 56.1818 12.1437 51.2995 9.07387C46.4171 6.00409 40.7672 4.37531 35 4.375Z"
                      fill="#5D5A88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_1357">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="Name">닉네임</div>

              <button class="LeaderButton">프로필보기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      지원하기모달창: false, //showpost1
      choiceNumber: 0, //showpost3
      maxChoiceNumber: 3, //showpost3
      멤버현황모달창: false, //showpost3
      지원현황모달창: false, //showpost3
      showpost: 1,
      Name: "",
      Area: "",
      Description: "",
      Field: "",
      Leader: "",
      ProjectName: "",
      StartDate: "",
      EndDate: "",
      Tech: "",
      recruits: [],
      selectedSubfield: null,
      applies: [],
    };
  },
  setup() {},
  created() {
    axios
      .get("http://localhost:3000/project/showPost", {
        withCredentials: true, // 쿠키 정보를 요청에 포함합니다.
        params: {
          id: this.$route.query.id,
        },
      })
      .then((response) => {
        // 요청이 성공하면 받아온 데이터의 showpost 값을 변수에 설정합니다.
        console.log(response.data);
        this.showpost = response.data.postType;
      })
      .catch((error) => {
        console.error("GET 요청 오류:", error);
      });
  },

  mounted() {
    this.fetchData();
  },
  unmounted() {},
  methods: {
    //showpost3 start
    incrementChoiceNumber() {
      if (this.choiceNumber < this.maxChoiceNumber) {
        this.choiceNumber++;
      } else {
        alert("인원이 초과하였습니다.");
      }
    },
    openModal() {
      this.멤버현황모달창 = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.멤버현황모달창 = false;
      document.body.style.overflow = "auto";
    },
    openModal1() {
      this.지원현황모달창 = true;
      document.body.style.overflow = "hidden";
    },
    closeModal1() {
      this.지원현황모달창 = false;
      document.body.style.overflow = "auto";
    },
    //showpost3 end

    navigateTomainpageLoginPage() {
      // 지정한 라우터로 이동합니다
      this.$router.push("/mainpageLogin"); // '/LoginPage'는 이동하고자 하는 라우터 경로로 변경해야 합니다
    },
    formatDate(date) {
      // 날짜 포맷팅 함수 작성 (예: YYYY-MM-DD)
      const formattedDate = date.split("T")[0];
      return formattedDate;
    },
    fetchData() {
      // 서버로 GET 요청을 보냅니다. '/api/userProfile'는 실제 API 엔드포인트에 맞게 변경하세요.
      axios.defaults.withCredentials = true;
      axios
        .get("http://localhost:3000/project/getProjectInfo", {
          // 쿠키 정보를 요청에 포함합니다.
          params: {
            id: this.$route.query.id,
          },
        })
        .then((response) => {
          // 서버에서 받은 데이터를 데이터 변수에 할당합니다.
          const post = response.data;
          this.Area = post.Area;
          this.Description = post.Description;
          this.EndDate = post.EndDate;
          this.Field = post.Field;
          this.Leader = post.Leader;
          this.ProjectName = post.ProjectName;
          this.StartDate = post.StartDate;
          this.Tech = post.Tech;
        })

        .catch((error) => {
          console.error("Error fetching user profile:", error);
          // 에러 처리를 수행하세요.
        });

      axios
        .get("http://localhost:3000/user/getLeaderInfo", {
          // 쿠키 정보를 요청에 포함합니다.
          params: {
            id: this.$route.query.id,
          },
        })
        .then((response) => {
          // 서버에서 받은 데이터를 데이터 변수에 할당합니다.
          const post = response.data;
          this.Name = post.leaderName;
        })

        .catch((error) => {
          console.error("Error fetching user profile:", error);
          // 에러 처리를 수행하세요.
        });

      axios
        .get("http://localhost:3000/recruit/getRecruitInfo", {
          withCredentials: true, // 쿠키 정보를 요청에 포함합니다.
          params: {
            id: this.$route.query.id,
          },
        })
        .then((response) => {
          // 서버에서 받은 데이터를 데이터 변수에 할당합니다.
          const post = response.data;
          this.recruits = post.results;
        })

        .catch((error) => {
          console.error("Error fetching user profile:", error);
          // 에러 처리를 수행하세요.
        });
      axios
        .get("http://localhost:3000/recruit/currentApply", {
          withCredentials: true, // 쿠키 정보를 요청에 포함합니다.
          params: {
            id: this.$route.query.id,
          },
        })
        .then((response) => {
          // 서버에서 받은 데이터를 데이터 변수에 할당합니다.
          const post = response.data;
          this.applies = post.results;
          console.log(this.applies[0]);
        })

        .catch((error) => {
          console.error("Error fetching user profile:", error);
          // 에러 처리를 수행하세요.
        });
    },
    selectRecruit(subfield) {
      this.selectedSubfield = subfield; // 선택한 subfield 값을 저장
    },

    sendSelection(subfield) {
      axios.defaults.withCredentials = true;
      axios
        .post("http://localhost:3000/recruit/apply", {
          projectId: this.$route.query.id,
          appliedSubfield: subfield,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("지원이 완료되었습니다.");
            // 지원이 성공한 경우 알림창 또는 다른 액션을 추가로 수행할 수 있습니다.
            alert("지원이 완료되었습니다.");
            this.지원하기모달창 = false;
            location.reload();
          }
        })
        .catch((error) => {
          // 오류 처리
          console.error("POST 요청 중 오류 발생:", error);
        });
    },
    cancelApply() {
      axios.defaults.withCredentials = true;
      axios
        .post("http://localhost:3000/recruit/cancleApply", {
          projectId: this.$route.query.id,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("지원이 취소되었습니다.");
            // 지원이 성공한 경우 알림창 또는 다른 액션을 추가로 수행할 수 있습니다.
            alert("지원이 취소되었습니다.");
            this.지원하기모달창 = false;
            location.reload();
          }
        })
        .catch((error) => {
          // 오류 처리
          console.error("POST 요청 중 오류 발생:", error);
        });
    },

    //showpost4 start

    //showpost4 end
  },
};
</script>

<style>
/*showpost1 */
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
.logoPic1 {
  margin-right: 10px;
  margin-left: 40px;
}
.logo {
  color: #443e92;
  font-size: 22px;
  font-weight: 800;
}
.logo-1 {
  color: #5d5a88;
  font-size: 22px;
  font-weight: 800;
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
  background: #5d5a88;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.MainHead {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 30px 30px 30px;
}
.Img {
  width: 350px;
  height: 280px;
  margin-left: 40px;
}
.HeadName {
  margin-left: 145px;
  margin-top: 30px;
  white-space: nowrap;
}
.LeaderProfile-showpost1 {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.HumanIcon {
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 75px;
}
.Name-showpost1 {
  margin-left: 70px;
}
.LeaderButton-showpost1 {
  color: #5d5a88;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  border-radius: 8px;
  border: 1px solid #bababa;
  background: #fff;
  margin-top: 10px;
  margin-left: 57px;
}
.Center-showpost1 {
  display: flex;
  justify-content: center;
}
.Button {
  display: flex;
  justify-content: center;
}
.Bottom {
  display: flex;
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

.Info-showpost1 {
  display: flex;
  align-items: center;
}
.LogoBox {
  display: flex;
}
.LogoText {
  color: #5d5a88;
  font-size: 18px;
  font-weight: 500;
  margin-left: 5px;
}
.LeaderBoxText {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}
.Bold {
  color: #000;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  white-space: nowrap;
}
.Status {
  color: #000;
  font-size: 18px;
  font-weight: 400;
}
.One {
  color: #b1b1b1;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
}
.Choice {
  display: flex;
  align-items: start;
  flex-direction: column;
}

.ChoiceText {
  color: #4a4a4a;
  font-size: 13px;
  font-weight: 400;
}

.ChoiceNumber {
  color: #fb5660;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}

.ChoiceButton {
  border-radius: 8px;
  border: 1px solid #bababa;
  background: #fff;
  width: 60px;
  height: 25px;
  cursor: pointer;
}
.Left {
  border-top: 2px solid #eceaea;
  border-bottom: 2px solid #eceaea;
  margin-right: 50px;
}
.Top {
  border-bottom: 2px solid #eceaea;
}
.BoldText {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}

.OriginText {
  color: #000;
  font-size: 15px;
  font-weight: 500;
  margin-top: 35px;
  margin-bottom: 20px;
  white-space: nowrap;
}
.Box {
  border-bottom: 2px solid #eceaea;
  padding: 35px 10px 15px 1px;
  display: flex;
  flex-direction: column;
}
.Right {
  border: 1px solid #eceaea;
  border-radius: 6px;
}
.BigBox {
  padding: 15px 15px 100px 15px;
}
.Top {
  padding: 10px 380px 25px 1px;
}
/*프로젝트 소개란 추가 후 아래 패딩 수정 필요*/
.Bottom {
  padding: 10px 300px 25px 1px;
}
.Choice {
  margin-top: 10px;
  white-space: nowrap;
}
.ChoiceText,
.ChoiceNumber,
.ChoiceButton {
  margin: 10px 20px 5px 0px;
}
.Buttonshow-showpost1 {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 150px;
}
.JoinButton-showpost1 {
  border-radius: 5px;
  border: 1px solid #bababa;
  background: #5d5a88;
  color: #fff;
  width: 120px;
  height: 33px;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  cursor: pointer;
}
.LookButton-showpost1 {
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid #bababa;
  background: #fff;
  color: #5d5a88;
  width: 120px;
  height: 33px;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
}

.ChoiceButton:focus {
  background: #5d5a88;
  color: #ececec;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 45px;
  margin-top: 150px;
  border-top: 1px solid #d6dbe5;
}
.footerText {
  color: #9795b5;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80px;
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
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  margin-top: 15px;
  margin-right: 10px;
  width: 70px;
  height: 30px;
  background: #2b64ff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.selectModalBtn2 {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  margin-top: 15px;
  margin-left: 10px;
  width: 70px;
  height: 30px;
  background: #2b64ff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
/*showpost1 */

/*showpost2 */
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
.logoPic1 {
  margin-right: 10px;
  margin-left: 40px;
}
.logo {
  color: #443e92;
  font-size: 22px;
  font-weight: 800;
}
.logo-1 {
  color: #5d5a88;
  font-size: 22px;
  font-weight: 800;
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
  background: #5d5a88;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.MainHead {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 30px 30px 30px;
}
.Img {
  width: 350px;
  height: 280px;
  margin-left: 40px;
}
.HeadName {
  margin-left: 145px;
  margin-top: 30px;
  white-space: nowrap;
}
.LeaderProfile-showpost2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.HumanIcon-showpost2 {
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 75px;
}
.Name-showpost2 {
  margin-left: 70px;
}
.LeaderButton-showpost2 {
  color: #5d5a88;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  border-radius: 8px;
  border: 1px solid #bababa;
  background: #fff;
  margin-top: 10px;
  margin-left: 57px;
}
.Center {
  display: flex;
  justify-content: center;
}
.Button-showpost2 {
  display: flex;
  justify-content: center;
}
.Bottom {
  display: flex;
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

.Info-showpost2 {
  display: flex;
  align-items: center;
}
.LogoBox {
  display: flex;
}
.LogoText {
  color: #5d5a88;
  font-size: 18px;
  font-weight: 500;
  margin-left: 5px;
}
.LeaderBoxText {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}
.Bold {
  color: #000;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  white-space: nowrap;
}
.Status {
  color: #000;
  font-size: 18px;
  font-weight: 400;
}
.One-showpost2 {
  color: #b1b1b1;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
}
.choice-1 {
  display: flex;
  align-items: center;
}
.choice-2 {
  display: flex;
  align-items: center;
}
.choice-3 {
  display: flex;
  align-items: center;
}

.ChoiceText {
  color: #4a4a4a;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
}
.ChoiceNumber {
  color: #fb5660;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}
.ChoiceButton {
  border-radius: 8px;
  border: 1px solid #bababa;
  background: #fff;
  width: 60px;
  height: 25px;
  cursor: pointer;
}
.Left {
  border-top: 2px solid #eceaea;
  border-bottom: 2px solid #eceaea;
  margin-right: 50px;
}
.Top {
  border-bottom: 2px solid #eceaea;
}
.BoldText {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}

.OriginText {
  color: #000;
  font-size: 15px;
  font-weight: 500;
  margin-top: 35px;
  margin-bottom: 20px;
  white-space: nowrap;
}
.Box {
  border-bottom: 2px solid #eceaea;
  padding: 35px 10px 15px 1px;
  display: flex;
  flex-direction: column;
}
.Right {
  border: 1px solid #eceaea;
  border-radius: 6px;
}
.BigBox {
  padding: 15px 15px 100px 15px;
}
.Top {
  padding: 10px 380px 25px 1px;
}
/*프로젝트 소개란 추가 후 아래 패딩 수정 필요*/
.Bottom {
  padding: 10px 300px 25px 1px;
}
.Choice {
  margin-top: 10px;
  white-space: nowrap;
}
.ChoiceText,
.ChoiceNumber,
.ChoiceButton {
  margin: 10px 20px 5px 0px;
}
.Button-showpost2 {
  margin-top: 70px;
  margin-bottom: 150px;
}
.JoinButton-showpost2 {
  border-radius: 5px;
  border: 1px solid #bababa;
  background: #ff9494;
  color: #fff;
  width: 120px;
  height: 33px;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
}
.LookButton-showpost2 {
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid #bababa;
  background: #fff;
  color: #5d5a88;
  width: 120px;
  height: 33px;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
}

.ChoiceButton:focus {
  background: #5d5a88;
  color: #ececec;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 45px;
  margin-top: 150px;
  border-top: 1px solid #d6dbe5;
}
.footerText {
  color: #9795b5;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80px;
}

/* showpost2 */

/* showpost3 */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

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
}

.logo-1 {
  color: #5d5a88;
  font-size: 22px;
  font-weight: 800;
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
  background: #5d5a88;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.MainHead {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.Img {
  width: 350px;
  height: 280px;
  margin-left: 40px;
}
.HeadName {
  margin-left: 145px;
  margin-top: 30px;
}
.LeaderProfile-showpost3 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.HumanIcon-showpost3 {
  margin-top: 15px;
  margin-bottom: 10px;
}
.LeaderButton {
  color: #5d5a88;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  border-radius: 8px;
  border: 1px solid #bababa;
  background: #fff;
  margin-top: 10px;
  cursor: pointer;
}
.Center {
  display: flex;
  justify-content: center;
}
.Bottom {
  display: flex;
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

.Info-showpost3 {
  display: flex;
  align-items: center;
}
.LogoBox {
  display: flex;
}
.LogoText {
  color: #5d5a88;
  font-size: 18px;
  font-weight: 500;
  margin-left: 5px;
}
.LeaderBoxText {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}
.Bold {
  color: #000;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  white-space: nowrap;
}
.Status {
  color: #000;
  font-size: 18px;
  font-weight: 400;
}
.One-showpost3 {
  color: #b1b1b1;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}
.choice-1 {
  display: flex;
  align-items: center;
}
.choice-2 {
  display: flex;
  align-items: center;
}
.choice-3 {
  display: flex;
  align-items: center;
}

.ChoiceText {
  color: #4a4a4a;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
}
.ChoiceNumber {
  color: #fb5660;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}
.ChoiceButton {
  border-radius: 8px;
  border: 1px solid #bababa;
  background: #fff;
  width: 60px;
  height: 25px;
  cursor: pointer;
}
.Left {
  border-top: 2px solid #eceaea;
  border-bottom: 2px solid #eceaea;
  margin-right: 50px;
}
.Top {
  border-bottom: 2px solid #eceaea;
}
.BoldText {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}

.OriginText {
  color: #000;
  font-size: 15px;
  font-weight: 500;
  margin-top: 35px;
  margin-bottom: 20px;
  white-space: nowrap;
}
.Box {
  border-bottom: 2px solid #eceaea;
  padding: 35px 10px 15px 1px;
  display: flex;
  flex-direction: column;
}
.Right {
  border: 1px solid #eceaea;
  border-radius: 6px;
}
.BigBox {
  padding: 15px 15px 100px 15px;
}
.Top {
  padding: 10px 380px 25px 1px;
}
/*프로젝트 소개란 추가 후 아래 패딩 수정 필요*/
.Bottom {
  padding: 10px 300px 25px 1px;
}
.Choice {
  margin-top: 10px;
  white-space: nowrap;
}
.ChoiceText,
.ChoiceNumber,
.ChoiceButton {
  margin: 10px 20px 5px 0px;
}
.Button {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 150px;
}
.advice {
  font-size: 13px;
  line-height: 20px;
  color: #9795b5;
}
.startButton {
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background: #5d5a88;
  color: #fff;
  width: 130px;
  height: 40px;
  font-size: 13px;
}

.ChoiceButton:focus {
  background: #5d5a88;
  color: #ececec;
}
.memberBtn-div {
  display: flex;
  justify-content: center;
  position: relative;
  top: 45px;
}
.memberBtn1,
.memberBtn2 {
  border-radius: 5px;
  border: none;
  background: #f24e1e;
  color: #fff;
  width: 80px;
  height: 40px;
  font-size: 13px;
  margin-right: 10px;
  cursor: pointer;
}
.memberBtn2 {
  border-radius: 5px;
  border: none;
  background: #f24e1e;
  color: #fff;
  width: 80px;
  height: 40px;
  font-size: 13px;
  margin-left: 10px;
  cursor: pointer;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 45px;
  margin-top: 150px;
  border-top: 1px solid #d6dbe5;
}
.footerText {
  color: #9795b5;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80px;
}

/*멤버현황과 지원현황 모달창 css */
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  padding: 20px;
}

.white-bg1 {
  max-height: 60%; /* 원하는 높이로 조정 */
  overflow-y: auto;
  width: 50%;
  height: 60%;
  background: rgb(196, 231, 250);
  border-radius: 8px;
  padding: 25px;
  font-size: 17px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
.main1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.bi-x-lg {
  font-size: 25px;
  color: #5d5a88;
  cursor: pointer;
}
.memberText {
  font-size: 25px;
  color: #505050;
}
.modalGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 25px;
  margin-top: 30px;
}
.LeaderProfileModal {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #7975af;
}

.acceptBtnDiv-showpost3 {
  margin-top: 10px;
  display: flex;
}
.acceptBtn-showpost3 {
  background: #5d5a88;
  color: #fff;
  border-radius: 5px;
  border: none;
  width: 60px;
  height: 30px;
  font-size: 13px;
  margin-right: 5px;
  cursor: pointer;
}
.opposeBtn-showpost3 {
  background: #fff;
  color: #5d5a88;
  border-radius: 5px;
  border: none;
  width: 60px;
  height: 30px;
  font-size: 13px;
  margin-left: 5px;
  cursor: pointer;
}

/* showpost4 */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

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
}

.logo-1 {
  color: #5d5a88;
  font-size: 22px;
  font-weight: 800;
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
  background: #5d5a88;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.MainHead {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.Img {
  width: 350px;
  height: 280px;
  margin-left: 40px;
}
.HeadName {
  margin-left: 145px;
  margin-top: 30px;
}
.LeaderProfile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.HumanIcon-showpost4 {
  margin-top: 15px;
  margin-bottom: 10px;
}
.LeaderButton {
  color: #5d5a88;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  border-radius: 8px;
  border: 1px solid #bababa;
  background: #fff;
  margin-top: 10px;
  cursor: pointer;
}
.Center {
  display: flex;
  justify-content: center;
}
.Bottom {
  display: flex;
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

.Info-showpost4 {
  display: flex;
  align-items: center;
}
.LogoBox {
  display: flex;
}
.LogoText {
  color: #5d5a88;
  font-size: 18px;
  font-weight: 500;
  margin-left: 5px;
}
.LeaderBoxText {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}
.Bold {
  color: #000;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  white-space: nowrap;
}
.Status {
  color: #000;
  font-size: 22px;
  font-weight: 400;
  margin: 10px 0px 10px 0px;
}
.One-showpost4 {
  color: #b1b1b1;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
}

.ChoiceText {
  color: #4a4a4a;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin-right: 60px;
}
.ChoiceNumber {
  color: #fb5660;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 60px;
}
.ChoiceButton {
  border-radius: 8px;
  border: 1px solid #bababa;
  background: #fff;
  width: 60px;
  height: 25px;
  cursor: pointer;
}
.Left {
  border-top: 2px solid #eceaea;
  border-bottom: 2px solid #eceaea;
  margin-right: 50px;
}
.Top {
  border-bottom: 2px solid #eceaea;
}
.BoldText {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}

.OriginText {
  color: #000;
  font-size: 15px;
  font-weight: 500;
  margin-top: 35px;
  margin-bottom: 20px;
  white-space: nowrap;
}
.Box {
  border-bottom: 2px solid #eceaea;
  padding: 35px 10px 15px 1px;
  display: flex;
  flex-direction: column;
}
.Right {
  border: 1px solid #eceaea;
  border-radius: 6px;
}
.BigBox {
  padding: 15px 15px 100px 15px;
}
.Top {
  padding: 10px 380px 25px 1px;
}
/*프로젝트 소개란 추가 후 아래 패딩 수정 필요*/
.Bottom {
  padding: 10px 300px 25px 1px;
  display: flex;
  align-items: start;
  flex-direction: column;
}
.Choice {
  margin-top: 10px;
  white-space: nowrap;
}
.Button {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 150px;
}
.advice {
  font-size: 13px;
  line-height: 20px;
  color: #9795b5;
}
.endButton {
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background: #ff8f8f;
  color: #fff;
  width: 130px;
  height: 40px;
  font-size: 13px;
  cursor: pointer;
}

.ChoiceButton:focus {
  background: #5d5a88;
  color: #ececec;
}
.memberBtn-div {
  display: flex;
  justify-content: center;
  position: relative;
  top: 45px;
}
.memberBtn1,
.memberBtn2 {
  border-radius: 5px;
  border: none;
  background: #f24e1e;
  color: #fff;
  width: 80px;
  height: 40px;
  font-size: 13px;
  margin-right: 10px;
  cursor: pointer;
}
.memberBtn2 {
  border-radius: 5px;
  border: none;
  background: #f24e1e;
  color: #fff;
  width: 80px;
  height: 40px;
  font-size: 13px;
  margin-left: 10px;
  cursor: pointer;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 45px;
  margin-top: 150px;
  border-top: 1px solid #d6dbe5;
}
.footerText {
  color: #9795b5;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80px;
}

/*멤버현황과 지원현황 모달창 css */
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  padding: 20px;
}

.white-bg1 {
  max-height: 60%; /* 원하는 높이로 조정 */
  overflow-y: auto;
  width: 50%;
  height: 60%;
  background: rgb(196, 231, 250);
  border-radius: 8px;
  padding: 25px;
  font-size: 17px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
.main1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.bi-x-lg {
  font-size: 25px;
  color: #5d5a88;
  cursor: pointer;
}
.memberText {
  font-size: 25px;
  color: #505050;
}
.modalGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 25px;
  margin-top: 30px;
}
.LeaderProfileModal {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #7975af;
}

.acceptBtnDiv {
  margin-top: 10px;
}
.acceptBtn {
  background: #5d5a88;
  color: #fff;
  border-radius: 5px;
  border: none;
  width: 60px;
  height: 30px;
  font-size: 13px;
  margin-right: 5px;
  cursor: pointer;
}
.opposeBtn {
  background: #fff;
  color: #5d5a88;
  border-radius: 5px;
  border: none;
  width: 60px;
  height: 30px;
  font-size: 13px;
  margin-left: 5px;
  cursor: pointer;
}
</style>
