<template>
    <div class="clip">
        <p class="clip-text">{{ text }}</p>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Clip',
    props: ['title'],
    data(){
        return {
            text: this.title
        }
    }
}
</script>
<style lang="scss" scoped>
    .clip{
        padding: 8px 15px;
        border-radius: 20px;
        border:1px solid #fff9;
        width: fit-content;
        min-width: 100px;
        text-align: center;
        color:#fff;
        transition: all .3s;
        cursor: pointer;
        &:hover{
            transform: scale(1.02);
        }
    }
</style>