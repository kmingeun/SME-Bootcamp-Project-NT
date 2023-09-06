<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>











<template>
  <header>
    <a href="" class="logo">ProJect-NT</a>
    <span> 
      <button class="headerBtn">MY</button>
    </span>
    <span> 
      <button class="headerBtn">Login</button>
    </span>
    <span> 
      <button class="headerBtn">Sign In</button>
    </span>
  </header>
  <div class="container">
		<form @submit.prevent="submitForm">
			<div>
        <p>이메일</p>
				<label for="email"></label>
				<input type="email" id="email" v-model="email" placeholder="이메일 주소" required="required" autocomplete="none"><button>중복확인</button>
			</div>			
			<div>
        <p>비밀번호</p>
				<label for="password"></label>
				<input type="password" id="password" v-model="password"  placeholder="비밀번호" required="required">
			</div>
			<div>
        <p>비밀번호 확인</p>
				<label for="passwordConfirm"></label>
				<input type="password" id="passwordConfirm" v-model="passwordConfirm"  placeholder="비밀번호 확인" required="required">
			</div>
      <div>
        <p>이름(닉네임)</p>
				<label for="name"></label>
				<input type="text" id="name" v-model="name"  placeholder="실명 또는 닉네임을 (를) 입력하세요"   required="required" autocomplete="none">
			</div>
      <div class="tech">
        <p>기술 스택</p>
        <select>
          <option value="" selected>선택 없음</option>
          <option value="" selected>선택 없음</option>
          <option value="" selected>선택 없음</option>
          <option value="" selected>선택 없음</option>
          <option value="" selected>선택 없음</option>
          <option value="" selected>선택 없음</option>
        </select>
      </div>
			<div>
        <button class="submitBtn" type="submit">가입하기</button>
      </div>
		</form>
	</div>
</template>
<script>


export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap');
.logo {
  font-family: 'DM Serif Display', serif;
  font-size: 30px;
}
.headerBtn {
  float: right;
}
#email{
  padding: 12px 0px 12px 0px;
  width: 85%;
  background: #fff;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  box-sizing: border-box;
  outline: none;
  border-radius: 4px;
}
#password,#passwordConfirm, #name {
  padding: 12px 0px 12px 0px;
  width: 100%;
  background: #fff;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  box-sizing: border-box;
  outline: none;
  border-radius: 4px;
}

.container {
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 170px;
}
.submitBtn{
  padding: 12px 25px;
  width: 100%;
  margin-top: 20px;
  border-width: 0px;
  cursor: pointer;
  border: 1px solid #27397d;
  background-color: #ffffff;
  color: #27397d;
  border-radius: 3px;
}
.submitBtn:hover {
  background-color: #27397d;
  color:#ffffff;
}
.tech {
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 12px;
  border-radius: 4px;
}

</style>
