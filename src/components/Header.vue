<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from 'vue';
import { useStore } from 'vuex';
import { User } from '@/store/types/state';
import config from '@/config';
import router from '@/router';

const store = useStore();
const isScrolled = ref<boolean>(false);
const user = ref<User | null>(null);
const mensaje = ref<string | any>(null);

const onScroll = () => {
  // Verificar si el scroll es mayor a cero y actualizar la variable isScrolled
  isScrolled.value = window.scrollY > 0;
};

const closeSesion = async () => {
    try{
		await store.dispatch("logout");
		router.push('/login');
    }catch(e:any){
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
    }
};

// Agregar el evento 'scroll' cuando el componente se monta
onMounted(() => {
  window.addEventListener('scroll', onScroll);
  user.value = store.getters.user;
});

// Eliminar el evento 'scroll' antes de destruir el componente
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
<template>
    <header id="header" :class="{ 'scrolled': isScrolled }">
        <div class="header-container">
            <div class="header-logo-cont">
                <img alt="Kirdor Main Logo" src="@/assets/logo.png" class="header-logo">
                <div class="header-menu">
                    <nav class="navbar">
                        <ul class="nav-ul">
                            <li class="nav-li" @click="router.push('/')"><p>Inicio</p></li>
                            <li class="nav-li" @click="router.push('/comunidad')"><p>Comunidad</p></li>
                            <li class="nav-li" @click="router.push('/torneos')"><p>Torneos</p></li>
                            <li class="nav-li" @click="router.push('/soporte')"><p>Soporte</p></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <template v-if="!user">
                <div class="nav-ul">
                    <li class="nav-li li-special" @click="router.push('/login')"><p>Iniciar Sesión</p></li>
                    <li class="nav-li" @click="router.push('/register')"><p>Registro</p></li>
                </div>
            </template>
            <template v-else>
                <div class="nav-ul">
                    <li class="nav-li li-special" @click="router.push('/usuario')"><p>{{ user.username }}</p></li>
                    <li class="nav-li" @click="closeSesion"><p>Cerrar Sesión</p></li>
                </div>
            </template>
        </div>

        <div class="header-container-responsive">
            <div class="header-logo-cont">
                <img alt="Kirdor Main Logo" src="@/assets/logo.png" class="header-logo">
            </div>
            <div class="header-menu">
                <nav class="navbar">
                    <ul class="nav-ul">
                        <li class="nav-li" @click="router.push('/')"><p>Inicio</p></li>
                        <li class="nav-li"><p>Comunidad</p></li>
                        <li class="nav-li"><p>Torneos</p></li>
                        <li class="nav-li"><p>Soporte</p></li>
                    </ul>
                </nav>
            </div>
            <template v-if="!user">
                <div class="nav-ul">
                    <li class="nav-li li-special" @click="router.push('/login')"><p>Iniciar Sesión</p></li>
                    <li class="nav-li" @click="router.push('/register')"><p>Registro</p></li>
                </div>
            </template>
            <template v-else>
                <div class="nav-ul">
                    <li class="nav-li li-special" @click="router.push('/usuario')"><p>{{ user.username }}</p></li>
                    <li class="nav-li" @click="closeSesion"><p>Cerrar Sesión</p></li>
                </div>
            </template>
        </div>
  </header>
</template>