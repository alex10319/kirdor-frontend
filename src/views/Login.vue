<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Header from '@/components/Header.vue';
import config from '@/config';
import router from '@/router';
const store = useStore();

const username = ref<string | null>(null);
const password = ref<string | null>(null);
const mensaje = ref<string | any>(null);
const myPasswordType = ref<boolean>(true);
const loader = ref<boolean>(false);

onMounted(() => {
});

const verifyUsername = (value: any) => {
  if (value) return true;

  return 'El nombre de usuario es obligatorio.';
}

const verifyPassword = (value: any) => {
  if (value) return true;

  return 'La contraseña es obligatoria.';
}

async function login() {
  const data = {
    username: username.value,
    password: password.value
  }

  if (data.username && data.password) {
    try {
      loader.value = true;
      await store.dispatch("login",data);
      router.push('/comunidad');
    } catch (e: any) {
      if(e.response && e.response.data && e.response.data.message){
        mensaje.value = e.response.data.message;
      }else{
        mensaje.value = e;
      }
      config.Toast.fire({
        icon: 'error',
        title: mensaje.value,
        color:'#fff',
        background: '#222'
      })
    } finally {
      loader.value = false;
    }
  }
}

</script>
<template>
  <Header />

  <div id="loginMain" class="login-main">
    <div class="login-main-item-bg">
      <img src="@/assets/img/drake2.webp">
    </div>
    <div class="login-main-item item-with-bg">
      <img src="@/assets/logo.png" class="login-item-logo" alt="Kirdor Logo Png">
      <h1 class="login-title mt-5">Iniciar Sesión</h1>
      <v-form class="w-full login-form mt-5" @submit.prevent="login">
        <v-row class="w-full relative">
          <template v-if="loader">
            <div v-html="config.loader" class="loader__container"></div>
          </template>
          <v-col cols="12" sm="12">
            <v-text-field color="warning" label="Nombre de usuario o correo electrónico" :rules="[verifyUsername]"
              v-model="username" prepend-inner-icon="mdi mdi-account" />
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field color="warning" label="Contraseña" v-model="password" :rules="[verifyPassword]"
              append-inner-icon="mdi mdi-eye" :type="(myPasswordType)?'password':'text'" 
              @click:append-inner="myPasswordType = !myPasswordType"
              />
          </v-col>
          <v-col class="flex flex-wrap wrap w-full justify-between items-center" cols="12" sm="12">
            <div class="cursor-pointer"><input type="checkbox"> <span>Recordarme</span></div>
            <p>¿Olvidaste tu Contraseña?</p>
          </v-col>
          <v-col cols="12" sm="12">
            <v-btn class="btn btn-primary text-white w-full" type="submit">Iniciar Sesión</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div class="login-main-item"></div>
  </div>
</template>
<style scoped>
#loginMain {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
}

.login-main-item {
  flex: .8;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.login-main-item-bg {
  line-height: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-main-item-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(.4);
}

.item-with-bg {
  background-color: #0009;
  backdrop-filter: blur(10px);
}

.login-main-item:last-child {
  flex: 1;
  width: fit-content;
  gap: 15px;
  height: fit-content;
  margin: auto;
  padding: 20px;
}

.login-main-item:last-child img {
  width: 55%;
  max-width: 600px;
  border-radius: 20px;
  box-shadow: 0 0 25px #fa15;
}

.login-item-logo {
  width: 15%;
  object-fit: contain;
}

.login-title {
  text-transform: uppercase;
}

.login-form {
  padding: 0 20px;
  max-width: 650px;
}

.gif-title {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 25px;
  text-shadow: 0 5px 10px #000;
}</style>