<script setup lang="ts"> //vue 3 js compisition setup api...
  import { ref,onMounted } from 'vue';
  
</script>
<template lang="">
   <footer class="end-page-footer">
          <div class="end-page-footer-container">
            <div class="footer-side footer-side-1">
              <div class="footer-logo-container">
                <img src="@/assets/logo.png" alt="">
              </div>
              <div class="footer-spacer"></div>
              <div class="footer-description">
                <p class="footer-description-p"><i class="footer-icon ri-chat-smile-2-line"></i> soporte@kirdor-company.com</p>
                <p class="footer-description-p"><i class="footer-icon ri-corner-down-right-line"></i> Seguridad y Protección</p>
                <p class="footer-description-p"><i class="footer-icon ri-question-answer-line"></i> Asistencia en Tiempo Real</p>
              </div>
              <div class="footer-spacer"></div>
              <div class="footer-menu">
                <li class="nav-li" @click="this.$router.push('/')"><p>Inicio</p></li>
                <li class="nav-li"><p>Comunidad</p></li>
                <li class="nav-li"><p>Torneos</p></li>
                <li class="nav-li"><p>Acerca de</p></li>
                <li class="nav-li"><p>Soporte</p></li>
              </div>
            </div>
            <div class="footer-side footer-side-2">Todos los derechos reservados kirdor esports 2023-2030</div>
          </div>
        </footer>
</template>
<style lang="scss">
  
</style>