<template>
  <div>
    <div class="card columns is-centered mt-20p">
      <div class="card column is-6">
        <div class="content">
          <form  @submit.prevent="login">
            <label for="">Email </label>
            <input
              class="input mb-10p mt-10p"
              type="text"
              placeholder="Email input"
            />
            <label for="">Password</label>
            <input
              class="input mb-10p mt-10p"
              type="password"
              placeholder="password input"
            />
            <button type="submit" class="button is-success">
                {{isLogin ? 'login' : 'signup'}}
            </button>
            <button @click="isLogin = !isLogin" type="button" class="button is-warning ">
                {{isLogin ? 'signup' : 'login'}}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  

</template>

<script>
export default {
    data() {
        return {
            isLogin:true
        }
    },
    methods: {
        login(){
            console.log('login....');
        }
    },
}
</script>

<style lang="scss" scoped></style>
