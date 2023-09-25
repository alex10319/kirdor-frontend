<script setup lang="ts">
    import { ref, onMounted } from  'vue';

    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import router from '@/router';

    const descriptionActive = ref<Boolean>(true);
    const name = ref<string | null>(null); // <-- String para texto, number para numeros, object para objetos array para arrays...
    // puede ser string | <- esto significa o. entonces: puede ser string | null (puede ser string o null);
    const lastname = ref<string | null>(null);

    const toggleDescription = () => {
        descriptionActive.value = !descriptionActive.value;
    };

    const enviarForm = () => {
      const form = {
        name: name.value,
        lastname: lastname.value
      }

      console.log(form);
    };

</script>

<template>
    <Header/>

		<main class="main-support">
            <!-- Limited General Content -->
            <div class="support-container">
<<<<<<< HEAD
                <!-- Presentation 
                <div class="support-presentation">
=======
                <!-- Presentation -->
                <!-- <div class="support-presentation">
>>>>>>> db87b320302856b1d20f7067250187a08bc2d59d
                    <div class="presentation-content">
                        <h1 class="description-title">Bienvenidos a nuestra sección de soporte</h1>
                        <h2 class="description-subtitle">Aquí podrás conseguir información detallada y asistencia personal<br><span>Aprovecha nuestra comunidad para obtener ayuda</span></h2>
                    </div>
                </div> -->

                <!-- Minslide -->
                <div class="support-search">
                    <div class="search-container limited">
                        <svg style="width: 26px; height: 26px; fill: #bdbdbd;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                        <input type="search" placeholder="Buscador del Soporte" class="search-support-input">
                    </div>
                </div>
                <!-- Minslide -->

                <!-- Description -->
                <div class="support-description">
                    <div class="description-content limited">
                        <div class="description-links">
                            <span class="description-links-assist">Asistencia Personal</span>
                            <span class="description-links-assist-center">Control de Asistencia Completa</span>
                            <span class="description-links-assist-right">Asistencias Rápidas</span>
                        </div>
                        <div class="description-toggle">
                            <div class="description-toggle-side-left">
                                <span class="toggle-item">Nuestras Noticias</span>
                                <span class="toggle-item">Nuevos Torneos</span>
                                <span class="toggle-item">Nuevas Publicaciones</span>
                                <span class="toggle-item">Participar de Torneos</span>
                                <span class="toggle-item">Agregar Amigos</span>
                                <span class="toggle-item">Problemas Varios</span>
                                <span class="toggle-item">Confirmar Torneos</span>
                            </div>
                            <div class="description-toggle-side">
                                <div class="description-toggle-subtitle">
                                    <span class="span">Nuestras Noticias Actualizadas</span>
                                    <span class="span">Información actual del Soporte de Kirdor</span>
                                </div>
                                <div class="description-toggle-info" :class="{ 'active': !descriptionActive }">
                                    <span class="span">Los saluda el soporte técnico de Kirdor, primero que nada queremos decirles que estamos disponibles y dispuestos para ayudarlos en cualquier situación o problema que se les presente a todos los usuarios y/o navegadores de nuestro sitio web. Aclaramos que nuestra ayuda se presenta en forma escrita y en caso de que los problemas persistan y necesiten una asistencia personalizada para solucionar estos mismos también contamos con un servicio de atención manejado por los administradores del Soporte de Kirdor.</span>
                                </div>
                                <div class="description-toggle-info-2">
                                    <span class="span" @click="toggleDescription">
                                    {{ (descriptionActive)?'Ver más':'Ver menos' }}
                                    </span>
                                    <span class="hr"></span>
                                </div>

                                <div class="description-toggle-info-3">
                                    <span class="span span-1">Ayuda</span>
                                    <span class="span span-2">Comentar</span>
                                    <span class="span span-3">Información</span>
                                    <span class="span span-4" @click="router.push('/')">Volver al Inicio</span>
                                </div>
                            </div>
                            <div class="description-toggle-side-right">
                                <span class="toggle-item">Registrar Usuario</span>
                                <span class="toggle-item">Confirmar Correo</span>
                                <span class="toggle-item">Problemas de Perfil</span>
                                <span class="toggle-item">Contraseña Incorrecta</span>
                                <span class="toggle-item">Recuperar Cuenta</span>
                                <span class="toggle-item">Publicación Privada</span>
                                <span class="toggle-item">Corregir Correo</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mincontainer -->
                <div class="separator-container"></div>
                <!-- Mincontainer -->

                <div class="support-cards">
                    <div class="cards-container limited">
                        <h3 class="support-cards-title">Tarjetas Informativas</h3>
                        <h4 class="support-cards-subtitle">Obten información un poco más rápida con comentarios de la comunidad y ayuda de los administradores</h4>
                        <div class="cards-box">
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M14.45 19L12 22.5L9.55 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H14.45ZM13.409 17H20V5H4V17H10.591L12 19.012L13.409 17Z"></path></svg>
                                <h4 class="cards-text">Información</h4>
                                <div class="cards-description-box">Información descriptiva sobre el soporte</div>
                                <ul class="cards-list-ul">
                                    <li class="cards-list">Ayuda</li>
                                    <li class="cards-list">Información</li>
                                    <li class="cards-list">Ver más</li>
                                </ul>
                            </div>
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M16.9337 8.96494C16.426 5.03562 13.0675 2 9 2 4.58172 2 1 5.58172 1 10 1 11.8924 1.65707 13.6313 2.7555 15.0011 3.56351 16.0087 4.00033 17.1252 4.00025 18.3061L4 22H13L13.001 19H15C16.1046 19 17 18.1046 17 17V14.071L18.9593 13.2317C19.3025 13.0847 19.3324 12.7367 19.1842 12.5037L16.9337 8.96494ZM3 10C3 6.68629 5.68629 4 9 4 12.0243 4 14.5665 6.25141 14.9501 9.22118L15.0072 9.66262 16.5497 12.0881 15 12.7519V17H11.0017L11.0007 20H6.00013L6.00025 18.3063C6.00036 16.6672 5.40965 15.114 4.31578 13.7499 3.46818 12.6929 3 11.3849 3 10ZM21.1535 18.1024 19.4893 16.9929C20.4436 15.5642 21 13.8471 21 12.0001 21 10.153 20.4436 8.4359 19.4893 7.00722L21.1535 5.89771C22.32 7.64386 23 9.74254 23 12.0001 23 14.2576 22.32 16.3562 21.1535 18.1024Z"></path></svg>
                                <h4 class="cards-text">Detalles</h4>
                                <div class="cards-description-box">Ver más detalles acerca de posibles problemas</div>
                                <ul class="cards-list-ul">
                                    <li class="cards-list">Ayuda</li>
                                    <li class="cards-list">Detalles</li>
                                    <li class="cards-list">Ver más</li>
                                </ul>
                            </div>
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"></path></svg>
                                    <h4 class="cards-text">Asistencia</h4>
                                    <div class="cards-description-box">Asistencia virtual del soporte de Kirdor</div>
                                    <ul class="cards-list-ul">
                                        <li class="cards-list">Ayuda</li>
                                        <li class="cards-list">Asistencia</li>
                                        <li class="cards-list">Ver más</li>
                                    </ul>
                            </div>
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>
                                <h4 class="cards-text">Soporte</h4>
                                <div class="cards-description-box">Consigue atención personalizada sobre lo que necesitas</div>
                                <ul class="cards-list-ul">
                                    <li class="cards-list">Ayuda</li>
                                    <li class="cards-list">Atención Virtual</li>
                                    <li class="cards-list">Ver más</li>
                                </ul>
                            </div>
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M11.8611 2.39057C12.8495 1.73163 14.1336 1.71797 15.1358 2.35573L19.291 4.99994H20.9998C21.5521 4.99994 21.9998 5.44766 21.9998 5.99994V14.9999C21.9998 15.5522 21.5521 15.9999 20.9998 15.9999H19.4801C19.5396 16.9472 19.0933 17.9102 18.1955 18.4489L13.1021 21.505C12.4591 21.8907 11.6609 21.8817 11.0314 21.4974C10.3311 22.1167 9.2531 22.1849 8.47104 21.5704L3.33028 17.5312C2.56387 16.9291 2.37006 15.9003 2.76579 15.0847C2.28248 14.7057 2 14.1254 2 13.5109V6C2 5.44772 2.44772 5 3 5H7.94693L11.8611 2.39057ZM4.17264 13.6452L4.86467 13.0397C6.09488 11.9632 7.96042 12.0698 9.06001 13.2794L11.7622 16.2518C12.6317 17.2083 12.7903 18.6135 12.1579 19.739L17.1665 16.7339C17.4479 16.5651 17.5497 16.2276 17.4448 15.9433L13.0177 9.74551C12.769 9.39736 12.3264 9.24598 11.9166 9.36892L9.43135 10.1145C8.37425 10.4316 7.22838 10.1427 6.44799 9.36235L6.15522 9.06958C5.58721 8.50157 5.44032 7.69318 5.67935 7H4V13.5109L4.17264 13.6452ZM14.0621 4.04306C13.728 3.83047 13.3 3.83502 12.9705 4.05467L7.56943 7.65537L7.8622 7.94814C8.12233 8.20827 8.50429 8.30456 8.85666 8.19885L11.3419 7.45327C12.5713 7.08445 13.8992 7.53859 14.6452 8.58303L18.5144 13.9999H19.9998V6.99994H19.291C18.9106 6.99994 18.5381 6.89148 18.2172 6.68727L14.0621 4.04306ZM6.18168 14.5448L4.56593 15.9586L9.70669 19.9978L10.4106 18.7659C10.6256 18.3897 10.5738 17.9178 10.2823 17.5971L7.58013 14.6247C7.2136 14.2215 6.59175 14.186 6.18168 14.5448Z"></path></svg>
                                <h4 class="cards-text">Amistades</h4>
                                <div class="cards-description-box">Atención virtual y ayuda de otros usuarios</div>
                                <ul class="cards-list-ul">
                                    <li class="cards-list">Ayuda</li>
                                    <li class="cards-list">Amigos</li>
                                    <li class="cards-list">Ver más</li>
                                </ul>
                            </div>
                            <!-- Parte Dos -->
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z"></path></svg>
                                <h4 class="cards-text">Tratamientos</h4>
                                <div class="cards-description-box">Métodos para resolver posibles problemas</div>
                                <ul class="cards-list-ul">
                                    <li class="cards-list">Ayuda</li>
                                    <li class="cards-list">Tratar</li>
                                    <li class="cards-list">Ver más</li>
                                </ul>
                            </div>
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M18 2C18.5523 2 19 2.44772 19 3V11H17V4H7V20H11V22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM15 12C17.2091 12 19 13.7909 19 16C19 16.7419 18.798 17.4366 18.446 18.0322L20.6569 20.2426L19.2426 21.6569L17.0313 19.4466C16.4359 19.7982 15.7415 20 15 20C12.7909 20 11 18.2091 11 16C11 13.7909 12.7909 12 15 12ZM15 14C13.8954 14 13 14.8954 13 16C13 17.1046 13.8954 18 15 18C16.1046 18 17 17.1046 17 16C17 14.8954 16.1046 14 15 14Z"></path></svg>
                                <h4 class="cards-text">Descripciones</h4>
                                <div class="cards-description-box">Existen errores básicos que son normales, ya tenemos explicación</div>
                                <ul class="cards-list-ul">
                                    <li class="cards-list">Ayuda</li>
                                    <li class="cards-list">Leer</li>
                                    <li class="cards-list">Ver más</li>
                                </ul>
                            </div>
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM8 13H16C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13ZM8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11ZM16 11C15.1716 11 14.5 10.3284 14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5C17.5 10.3284 16.8284 11 16 11Z"></path></svg>
                                <h4 class="cards-text">Comunidad</h4>
                                <div class="cards-description-box">Nuestra comunidad se dedica a ayudarse entre todos y crecer</div>
                                <ul class="cards-list-ul">
                                    <li class="cards-list">Ayuda</li>
                                    <li class="cards-list">Comunidad</li>
                                    <li class="cards-list">Ver más</li>
                                </ul>
                            </div>
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M6 10V20H19V10H6ZM18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM7 11H9V13H7V11ZM7 14H9V16H7V14ZM7 17H9V19H7V17Z"></path></svg>
                                <h4 class="cards-text">Privacidad</h4>
                                <div class="cards-description-box">Problemas con tu cuenta o la comunidad</div>
                                <ul class="cards-list-ul">
                                    <li class="cards-list">Ayuda</li>
                                    <li class="cards-list">Privado</li>
                                    <li class="cards-list">Ver más</li>
                                </ul>
                            </div>
                            <div class="cards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3ZM12 17H14C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17Z"></path></svg>
                                <h4 class="cards-text">Mensajes</h4>
                                <div class="cards-description-box">Comunicación personalizada con usuarios y administradores</div>
                                <ul class="cards-list-ul">
                                    <li class="cards-list">Ayuda</li>
                                    <li class="cards-list">Charlar</li>
                                    <li class="cards-list">Ver más</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mincontainer -->
                <div class="separator-container"></div>
                <!-- Mincontainer -->
                <div class="support__form--container">
                    <div class="support__form--content limited">
                        <v-form @submit.prevent="enviarForm" class="support__content--form">
                            <div class="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                                <div class="-mx-3 md:flex">
                                  <div class="md:w-1/2 px-3 md:mb-0">
                                    <v-text-field 
                                    v-model="name"
                                    label="Ingresa tu nombre.." class="text-white" color="warning" />
                                    <!-- <textarea></textarea>
                                    <v-textarea></v-textarea> -->
                                  <div>
                                </div>
                                </div>
                                <div class="md:w-1/2 px-3">
                                  <v-text-field label="Apellido..."
                                  v-model="lastname"
                                  class="text-white" color="warning"/>
                                </div>
                                </div>
                                <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-full px-3">
                                    <v-textarea label="Mensaje..." class="text-white" color="warning"/>
                                </div>
                                </div>
                                <div class="-mx-3 md:flex mb-2">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                  <v-select color="warning" class="text-white" label="Selecciona un elemento..."
                                  :items="[
                                    {title: 'Ayuda random',value: 1}, 
                                    {title: 'Ayuda random 2',value: 2},
                                    {title: 'Ayuda random 3',value: 3}, 
                                    {title: 'Ayuda random 4',value: 4}
                                  ]"
                                  />
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label class="uppercase tracking-wide text-white text-xs font-bold mb-2" for="job-type">
                                    Job Type*
                                    </label>
                                    <div>
                                    <select class="w-full bg-gray-200 border border-gray-200 text-white text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                        <option>Internship</option>
                                    </select>
                                    </div>
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label class="uppercase tracking-wide text-white text-xs font-bold mb-2" for="department">
                                    Department*
                                    </label>
                                    <div>
                                    <select class="w-full bg-gray-200 border border-gray-200 text-white text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                                        <option>Engineering</option>
                                        <option>Design</option>
                                        <option>Customer Support</option>
                                    </select>
                                    </div>
                                </div>
                                </div>
                                <div class="-mx-3 md:flex mt-2">
                                <div class="md:w-full px-3">
                                    <v-btn class="w-full" type="submit" color="warning">
                                      Solicitar Soporte
                                    </v-btn>
                                </div>
                                </div>
                            </div>
                        </v-form>
                    </div>
                </div>
                
            </div>
        </main>

        <!--Footer Content-->
        <Footer />
</template>

<style lang="scss">
    .support__form--container{
        width: 100%;
        height: 100%;

        .support__form--content{
            padding: 10px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 6px;

            .support__content--form{
                width: 100%;
                padding: 10px;
                // border:1px solid #222;
                background:rgba(42,42,42,1.0);
            }
        }
    }
    .main-support{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding-top: 80px;
        padding-bottom: 16px;
        position: relative;
        background-color: rgba(24, 24, 24, 1.0);
    }
    .support-container{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .support-presentation{
        width: 100%;
        height: 200px;
        background: rgba(40, 40, 40, 1);
    }
    .presentation-content{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;
        text-align: center;
        height: 100%;
        position: relative;
        z-index: 300;
        box-shadow: 0px 0px 12px rgb(0 0 0 / 30%);
    }
    .description-title{
        font-size: 36px;
        letter-spacing: 1.25px;
        font-weight: 600;
        text-shadow: 1px 1px 3px #000;
        text-transform: uppercase;
        color: var(--color-primary); 
    }
    .description-subtitle{
        font-size: 28px;
        letter-spacing: 1.25px;
        font-weight: 500;
        text-shadow: 1px 1px 3px #000;
        text-transform: uppercase;
        color: #FFFFFF;
        span{
            font-size: 22px;
            color: #DDDDDD; 
        }
    }
    .support-description{
        width: 100%;
        margin-top: 1rem;
        padding: 0rem 0.5rem;
    }
    .description-content{
        width: 100%;
        min-height: 100px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-top: 1rem;
    }
    .description-links{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }
	.description-links-assist{
        color: #bdbdbd;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        text-shadow: 1px 1px 3px #000;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        background-color: rgba(42, 42, 42, 1);
        border-bottom: 3px solid var(--color-primary);
        cursor: pointer;
        min-width: 195px;
        text-align: center;
        transition: all 0.25s ease-in-out;
    }
    .description-links-assist:hover{
         color: #dddddd;
    }
    .description-links-assist-center{
        color: #bdbdbd;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        text-shadow: 1px 1px 3px #000;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        background-color: rgba(42, 42, 42, 1);
        border-bottom: 3px solid var(--color-primary);
        cursor: pointer;
        text-align: center;
        width: 100%;
        transition: all 0.25s ease-in-out;
    }
    .description-links-assist-center:hover{
         color: #dddddd;
    }
    .description-links-assist-right{
        color: #bdbdbd;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        text-shadow: 1px 1px 3px #000;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        background-color: rgba(42, 42, 42, 1);
        border-bottom: 3px solid var(--color-primary);
        cursor: pointer;
        min-width: 205px;
        text-align: center;
        transition: all 0.25s ease-in-out;
    }
    .description-links-assist-right:hover{
        color: #dddddd;
    }
    .description-toggle{
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        .description-toggle-side-left{
            border-top: 3px solid var(--color-primary);
            min-width: 195px;
            width: 195px;
            max-width: 195px;
            padding: 1rem 0rem;
            background-color: rgba(42, 42, 42, 1);
            border-radius: 6px;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            max-height: 300px;
        }
        .description-toggle-side-right{
            min-width: 205px;
            width: 205px;
            max-width: 205px;
            padding: 1rem 0rem;
            background-color: rgba(42, 42, 42, 1);
            border-top: 3px solid var(--color-primary);
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            align-items: center;
            justify-content: center;
            max-height: 300px;
        }
    }
    .description-toggle-side-left{
        .toggle-item{
            min-width: 180px;
            padding: 0.25rem 0rem;
            border-radius: 6px;
            color: #bdbdbd;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 1px;
            text-shadow: 1px 1px 3px #000;
            cursor: pointer;
            text-align: left;
            transition: all 0.25s ease-in-out;
        }
        .toggle-item:hover{
            color: #F9F9F9;
        }
    }
    .description-toggle-side-right{
        .toggle-item{
            min-width: 150px;
            padding: 0.25rem 0rem;
            border-radius: 6px;
            color: #bdbdbd;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 1px;
            text-shadow: 1px 1px 3px #000;
            cursor: pointer;
            text-align: right;
            transition: all 0.25s ease-in-out;
            min-width: 190px;
        }
        .toggle-item:hover{
            color: #F9F9F9;
        }
    }

    .description-toggle-side{
        padding: 0.5rem 0rem;
        background-color: rgba(42, 42, 42, 1);
        width: 100%;
        border-top: 3px solid var(--color-primary);
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 300px;
    }
    .description-toggle-side{
        .description-toggle-subtitle{
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0rem 1rem;
            gap: 1rem;
        }
    }
    .description-toggle-subtitle{
        .span:first-child{
            width: 100%;
            text-align: center;
            font-size: 20px;
            font-weight: 500;
            color: #DDDDDD;
            text-transform: uppercase;
            margin-top: 0.5rem;
            text-shadow: 0px 0px 3px #000;
        }
        .span:last-child{
            font-size: 18px;
            font-weight: 500;
            color: #BDBDBD;
            text-transform: uppercase;
            text-shadow: 0px 0px 3px #000;
        }
    }
    .description-toggle-info{
        height: max-content;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        width: 98%;
        gap: 0.5rem;
        margin: auto;
        max-height: 126px;
        overflow: hidden;
        padding: 0.5rem 0.5rem;
        transition: all 0.25s ease-in-out;
    }
    .description-toggle-info.active{
        overflow: visible;
        max-height: max-content;
    }
    .description-toggle-info{
        .span{
            font-size: 16px;
            font-weight: 500;
            color: #BDBDBD;
            text-shadow: 0px 0px 3px #000;
            text-align: justify;
            padding-bottom: 10px;
        }
    }


    .description-toggle-info-2{
        height: max-content;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        width: 98%;
        gap: 0.5rem;
        margin: auto;
        padding: 0.5rem 0.5rem;
        position: relative;
        transition: all 0.25s ease-in-out;
    }
    .description-toggle-info-2{
        .span{
            font-size: 16px;
            font-weight: 500;
            color: #BDBDBD;
            text-transform: uppercase;
            text-shadow: 0px 0px 3px #000;
            color: var(--color-primary);
            cursor: pointer;
            transition: all 0.25s ease-in-out;
            width: max-content;
        }
        .span:hover{
            color: #DDDDDD;
        }
        .hr{
            position: absolute;
            width: 120px;
            height: 3px;
            border-radius: 50%;
        }
    }
    .description-toggle-info-3{
        height: max-content;
        display: flex;
        align-items: center;
        border-radius: 6px;
        width: 98%;
        gap: 0.75rem;
        margin: auto;
        margin-top: 1rem;
        padding: 0.5rem 0.5rem;
        position: relative;
    }
    .description-toggle-info-3{
        .span{
            font-size: 14px;
            color: var(--color-primary);
            text-shadow: 0px 0px 3px #000;
            text-decoration: underline;
            padding-bottom: 10px;
            cursor: pointer;
        }
    }
    .support-search{
        width: 100%;
        height: 64px;
        padding: 0rem 0.5rem;
        margin-top: 2rem;
    }
    .search-container{
        width: 100%;
        height: 100%;
        margin: 0rem 0.5rem;
        padding: 0.5rem;
        padding-left: 1rem;
        background-color: rgba(42, 42, 42, 1);
        border-radius: 6px;
        box-shadow: 0px 0px 6px rgb(0 0 0 / 30%);
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .search-support-input{
        width: 320px;
        height: 90%;
        padding: 0.5rem 1rem;
        padding-top: 0.7rem;
        border-radius: 6px;
        outline: none;
        background-color: rgb(50, 50, 50);
        color: #f0f0f0;
        font-weight: 500;
        transition: all 0.25s ease-in-out;
        text-shadow: 0px 0px 3px #000;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        box-shadow: 0px 0px 12px rgb(0 0 0 / 10%);
    }
    .search-support-input[placeholder]{
        text-shadow: 0px 0px 3px #000;
        color: #f0f0f0;
        font-weight: 500;
    }
    .search-support-input:hover{
        border-bottom: 2px solid #888888;
    }

    .separator-container{
        width: 100%;
        height: 64px;
        margin: 1rem 0rem;
        background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(51,51,51,0.5) 50%, rgba(24,24,24,1) 100%);
    }

    .support-cards{
        width: 100%;
        min-height: 300px;
        padding: 0rem 0.5rem;
    }
    .cards-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: rgba(42, 42, 42, 1);
        border-radius: 6px;
        box-shadow: 0px 0px 6px rgb(0 0 0 / 30%);
        padding: 1rem;
        gap: 0.5rem;

        .support-cards-title{
            font-size: 20px;
            color: #bdbdbd;
            font-weight: 600;
            text-shadow: 0px 0px 3px #000;
            text-transform: uppercase;
        }
        .support-cards-subtitle{
            font-size: 16px;
            color: #999999;
            font-weight: 600;
            text-shadow: 0px 0px 3px #000;
            text-transform: uppercase;
        }
    }

    .cards-container{
        .cards-box{
            width: 100%;
            height: 100%;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
    .cards{
        width: 260px;
        min-height: 200px;
        height: auto;
        border-radius: 6px;
        background-color: rgba(28, 28, 28, 1.0);
        box-shadow: 0px 0px 3px rgb(0 0 0 / 60%);
        transition: all 0.25s ease-in-out;
        margin: 0.5rem 0rem;
        display: flex;
        padding: 0.5rem 0.75rem;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        svg{
            fill: var(--color-primary);
        }
        .cards-text{
            font-size: 20px;
            color: #bdbdbd;
            font-weight: 500;
            text-transform: uppercase;
        }
        .cards-description-box{
            color: #bdbdbd;
            text-shadow: 0px 0px 3px #000;
            font-size: 13px;
            overflow: hidden;
            text-align: center;
            min-height: 30px;
        }
        .cards-list-ul{
            width: 100%;
            max-height: 100px;
            overflow: hidden;
            min-height:50px;
            gap: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            justify-content: center;
        }
        .cards-list-ul .cards-list{
            font-size: 13px;
            text-decoration: underline;
            cursor: pointer;
            min-width: max-content;
            // text-shadow: 0px 0px 3px #000;
            transition: all 0.25s ease-in-out;
            padding: 5px;
            border-radius: 6px;
            background-color: #9995;
<<<<<<< HEAD
            color: #bdbdbd;
=======
            text-decoration: none;
            color: #fff;
>>>>>>> db87b320302856b1d20f7067250187a08bc2d59d
        }
        .cards-list-ul .cards-list:hover{
            color: #bdbdbd;
        }
    }
    .cards:hover{
        background-color: rgba(32, 32, 32, 1.0);
        transform: scale(1.03);
    }


























    .footer-support{
        width: 100%;
        height: 320px;
        display: grid;
        place-items: center;
        position: relative;
        padding: 0rem 0.5rem;
    }

    .footer-support-container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding-top: 1rem;
        margin-top: 1rem;
    }

</style>

