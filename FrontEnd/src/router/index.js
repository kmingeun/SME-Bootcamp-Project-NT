import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; //vuex
import mainPage from '../views/mainPage.vue';
import mainpageLogin from '../views/mainpageLogin.vue';
import signupPage from '../views/signupPage.vue';
import LoginPage from '../views/LoginPage.vue';
import idSearch from '../views/idSearch.vue';
import passwordSearch from '../views/passwordSearch.vue';
import profilePage from '../views/profilePage.vue'; 
import showPost1 from '../views/showPost1.vue';
import showPost2 from '../views/showPost2.vue';
import showPost3 from '../views/showPost3.vue';
import showPost4 from '../views/showPost4.vue'; 
import recruitmentPage from '../views/recruitmentPage.vue';
import passwordChange from '../views/passwordChange.vue';
import showPostAll from '../views/showPostAll.vue';




const routes = [
    // 라우트 정의
    {
      path: '/',
      name: 'mainPage',
      component: () => {
        return store.state.isLoggedIn ? mainpageLogin : mainPage;
      },
    },
    { path: '/LoginPage', name:'LoginPage', component: LoginPage },
    { path: '/signupPage', name:'signupPage', component: signupPage },
    { path: '/idSearch', name:'idSearch', component: idSearch },
    { path: '/passwordSearch', name:'passwordSearch', component: passwordSearch },
    { path: '/mainpageLogin', name:'mainpageLogin', component: mainpageLogin },
    { path: '/profilePage', name:'profilePage', component: profilePage },
    { path: '/showPost1', name:'showPost1', component: showPost1 },
    { path: '/showPost2', name:'showPost2', component: showPost2 },
    { path: '/showPost3', name:'showPost3', component: showPost3 },
    { path: '/showPost4', name:'showPost4', component: showPost4 },
    { path: '/recruitmentPage', name:'recruitmentPage', component: recruitmentPage },
    { path: '/passwordChange/:token', name:'passwordChange', component: passwordChange },
    { path: '/post/:id', name:'showPostAll', component: showPostAll },
  ];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // 이 부분에서 사용자의 로그인 상태를 확인하고 조건에 따라 홈 페이지를 설정합니다.
    if (store.state.isLoggedIn) {
      // 로그인한 경우 mainpageLogin 페이지로 이동
      next({ name: 'mainpageLogin' });
    } else {
      // 로그인하지 않은 경우 mainPage 페이지로 이동
      next({ name: 'mainPage' });
    }
  } else {
    // 인증이 필요하지 않은 경우 계속 진행
    next();
  }
});

export default router;
