<script setup lang="ts">
    import { ref, onMounted } from  'vue';

    import Header from '@/components/Header.vue';
</script>

<template>
    <Header/>

		<main class="main-support">
            <!-- Limited General Content -->
            <div class="support-container">
                <!-- Presentation -->
                <div class="support-presentation">
                    <div class="presentation-content">
                        <h1 class="description-title">Bienvenidos a nuestra sección de soporte</h1>
                        <h2 class="description-subtitle">Aquí podrás conseguir información detallada y asistencia personal<br><span>Aprovecha nuestra comunidad para obtener ayuda!</span></h2>
                    </div>
                </div>
                <!-- Description -->
                <div class="support-description">
                    <div class="description-content limited">
                        <div class="description-links">
                            <span class="description-links-assist">Asistencia Personal</span>
                            <input type="search" placeholder="¿Con qué podemos ayudarte?" class="description-search">
                            <span class="description-links-assist">Asistencia de Cuenta</span>
                        </div>
                        <div class="description-paragraph">
                            <span class="span">Breve descripción:</span>
                            <span class="span"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, totam harum neque doloremque sequi consequatur eius ratione saepe reprehenderit, repellendus soluta quod vitae corporis maxime, quaerat est! Officia illum quo nihil labore similique, soluta obcaecati aliquam ad atque! Id odio rem, temporibus nostrum laborum corrupti. Quibusdam sapiente unde deleniti neque! </span>
                        </div>
                    </div>
                </div>
                <!-- Minslide -->
                <div class="support-minslide">
                    <div class="minslide-box">

                    </div>
                    <div class="minslide-box">

                    </div>
                    <div class="minslide-box">

                    </div>
                    <div class="minslide-box">

                    </div>
                </div>
                <!-- Minslide -->
                
                <!-- View and Description -->
                <div class="support-preview">
                    <div class="support-view-paragraph">

                    </div>
                    <div class="support-view-toggle">
                        <div class="support-toggle-descrpition">

                        </div>
                    </div>
                </div>
                <!-- View and Description -->
            </div>
        </main>

        <!--Footer Content-->
        <footer class="footer-support">
            <!-- Limited General Content -->
            <div class="footer-support-container limited">
            
            </div>
        </footer>
</template>

<style lang="scss">

    .main-support{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding-top: 80px;
        padding-bottom: 20px;
        position: relative;
        background-color: #3332;
    }
    .support-container{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .support-presentation{
        width: 100%;
        height: 242px;
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
        font-weight: 500;
        text-shadow: 1px 1px 3px #000;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .description-subtitle{
        font-size: 28px;
        letter-spacing: 1.25px;
        font-weight: 500;
        text-shadow: 1px 1px 3px #000;
        text-transform: uppercase;
        color: var(--color-primary); 
        span{
            font-size: 22px;
            color: #DDDDDD; 
        }
    }
    .support-description{
        width: 100%;
        min-height: 400px;
        background: linear-gradient(0deg, rgba(29,30,32,1) 0%, rgba(34,34,34,1) 100%);
        padding-top: 1rem;
    }
    .description-content{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        padding: 0.5rem 1rem;
    }
    .description-links{
        display: flex;
        align-items: center;
        gap: 1.25rem;
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
        min-width: max-content;
    }
    .description-search{
        background-color: rgba(40, 40, 40, 1);
        border-bottom: 3px solid var(--color-primary);
        padding: 0.55rem 1rem;
        border-radius: 6px;
        color: #DDDDDD;
        width: 100%;
        outline: none;
        font-size: 16px;
        text-shadow: 1px 1px 3px #000;
        text-align: center;
    }
    .description-paragraph{
        background-color: rgba(40, 40, 40, 1);
        padding: 1rem;
        border-radius: 6px;
        text-align: justify;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        .span{
            color: #ddd;
            font-size: 18px;
            font-weight: 500;
            line-height: 22px;
            width: 100%;
            
        }
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

