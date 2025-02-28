<template>
  <div class="text-gray-600 dark:bg-customDark dark:text-white background-main text-sm font-light">
    <div class="mx-auto max-w-[700px] min-h-screen overflow-hidden">
      <Header />
      <div class="page-container">
        <NuxtPage v-slot="{ Component, route }">
        </NuxtPage>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';

</script>

<style>
/* Hiệu ứng chuyển trang */
.page-container {
  transition: all 0.6s ease-in-out;
}

/* Khi vào trang mới (xuất hiện từ dưới lên) */
.page-enter-active, .page-leave-active {
  transition: all 0.6s ease-in-out;
}
.page-enter-from {
  transform: translateY(100px);
  opacity: 0;
}
.page-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

</style>