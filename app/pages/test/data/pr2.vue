<script setup lang="ts">
    // Lógicaque controla el padre 
    const count : Ref<number> = ref(0); //Variable principal


    const plus = () => {
        count.value++;
    }

    const rest = ()  => {
        count.value--
    }

    const reboot = () => {
        count.value = 0
    }

</script>

<template>
    <div>
        <Count 
        :count="count"
        @plus="plus"
        @rest="rest"
        @reboot="reboot"
        ></Count>
    </div>
</template>



<style lang="scss" scoped>

</style>