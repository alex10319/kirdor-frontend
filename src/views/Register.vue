<script setup lang="ts">
    import Header from '@/components/Header.vue';
    import { ref,onMounted } from 'vue';
		import { useStore } from 'vuex';
		import { useRouter } from 'vue-router';
		import config from '@/config';

		const router = useRouter();
		const store = useStore();
    const name = ref<string | null>(null);
    const lastname = ref<string | null>(null);
    const email = ref<string | null>(null);
    const username = ref<string | null>(null);
    const password = ref<string | null>(null);
    const repassword = ref<string | null>(null);
		const loader = ref<boolean>(false);
		const mensaje = ref<string>('');

    const verifyInput = (value:string) => {
        if(value) return true;

        return 'El campo es obligatorio.';
    }
    const verifyEmail = (value:any) => {
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(emailRegex.test(value)) return true;

        return 'Debes ingresar un email válido.';
    }
		const checkPassword = (value:string) => {
			if(!value){
				return 'El campo es obligatorio.';
			}

			if(value === password.value){
				return true;
			}

			return 'Las contraseñas no coínciden.';
		}

		async function registerNow() {
			const data = {
				name: name.value,
				lastname: lastname.value,
				email: email.value,
				username: username.value,
				password: password.value,
				repassword: repassword.value
			}
			if(data.name && data.lastname && data.email && data.username && data.password && data.repassword){
				if(data.repassword == data.password){
					try {
						loader.value = true;
						await store.dispatch("register",data);
						config.Toast.fire({
							icon: 'success',
							title: 'Te has registrado correctamente. ¡Ya puedes iniciar sesión!',
							color:'#fff',
							background: '#222',
							timer: 2000
						}).then(()=>{
							router.push('/login');
						});
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
		}


		onMounted(()=>{
		});

</script>
<template>
    <Header/>
    <div id="loginMain" class="login-main">
            <div class="login-main-item-bg">
                <img src="@/assets/background-register.png">
            </div>
        <div class="login-main-item">
            <img class="login-main-item-picture" src="@/assets/img/gamer/gamingzone.webp"><br>
            <h3 class="text-center" style="line-height: 30px;font-weight: 600;font-size: 1.5em;">Registrate y comienza tu aventura<br>Participa de esta hermosa comunidad y sus torneos</h3>
            <br>
            <p class="text-center">¿Ya eres un usuario registrado? <a href="javascript:;" @click="$router.push('/login')">Entrar</a></p>
        </div>
        <div class="login-main-item item-with-bg">
            <img src="@/assets/logo.png" class="login-item-logo" alt="Kirdor Logo Png">
            <h1 class="login-title mt-5">Registrarte</h1>
            <v-form class="w-full login-form mt-5" @submit.prevent="registerNow">
                <v-row class="w-full relative">
									<template v-if="loader">
										<div v-html="config.loader" class="loader__container"></div>
									</template>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Nombre" v-model="name" :rules="[verifyInput]" prepend-inner-icon="mdi mdi-account" color="purple" />
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Apellido" v-model="lastname" :rules="[verifyInput]" prepend-inner-icon="mdi mdi-arch" color="purple" />
                    </v-col>
                    <v-col cols="12" sm="12">
                        <v-text-field label="Correo Electrónico" v-model="email" :rules="[verifyInput,verifyEmail]" prepend-inner-icon="mdi mdi-gmail" color="purple" />
                    </v-col>
                    <v-col cols="12" sm="12">
                        <v-text-field label="Nombre de Usuario" v-model="username" :rules="[verifyInput]" prepend-inner-icon="mdi mdi-account-circle-outline" color="purple" />
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Contraseña" v-model="password" :rules="[verifyInput]" prepend-inner-icon="mdi mdi-eye" color="purple" />
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Repetir Contraseña" v-model="repassword" :rules="[verifyInput,checkPassword]" prepend-inner-icon="mdi mdi-eye" color="purple" />
                    </v-col>
                    <v-col cols="12" sm="12">
                        <v-btn type="submit" class="btn btn-primary text-white w-full">Registrarse</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </div>
    </div>
</template>
<style scoped>

#loginMain{
        display: flex;
        justify-content: space-between;
        height: 100vh;
        width: 100%;
    }
    .login-main-item{
        flex:.8;
        height: 100%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        color:#fff;
    }
    .login-main-item-bg{
        line-height: 0;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-main-item-bg img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(.4);
    }
    .item-with-bg{
        background-color: #0009;
        backdrop-filter: blur(10px);
    }
    .login-main-item:first-child{
        flex:1;
        width:fit-content;
        gap:15px;
        height: fit-content;
        margin: auto;
        padding: 20px;
    }
    .login-main-item-picture{
        max-width: 550px;
        border-radius: 20px;
        box-shadow: 0 0 25px #fff5;
    }
    .login-item-logo{
        width:15%;
        object-fit: contain;
    }
    .login-title{
        text-transform: uppercase;
    }
    .login-form{
        padding: 0 20px;
        max-width: 650px;
    }

    .text-center{
      text-transform: uppercase;
    }

    .text-center a{
      background-image: var(--bg-primary);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 500;
      filter: brightness(1.5);
    }

</style>