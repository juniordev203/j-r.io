<template>
  <div class="flex justify-center pb-48">
    <main class="">
      <!-- introduce -->
      <div class="introduction mb-11">
        <h3 class="text-4xl font-extrabold mb-3 text-gray-900 dark:text-white">@Junior203</h3>
        <p class="mb-6">Fullstack Developer & Crypto Holding</p>
        <p class="mb-6 dark:text-customLightText">I am a software engineer who builds for the web with a
          design-oriented approach. In addition to coding, I make YouTube videos, where I focus on tech,
          and productivity. <span class="italic">I am a coder, holding crypto and a student of NEU!</span>
        </p>
        <div class="flex gap-6">
          <div class="" v-for="(data) in media" :key="index">
            <a :href="data.link"
              class="flex px-4 py-2 rounded-md bg-gray-200 text-lg text-gray-900 font-semibold dark:bg-gray-500 dark:text-white hover:scale-105 hover:bg-gray-300 shadow-lg">{{
                data.text }}
              <ArrowUpRight class="w-4 h-5 dark:text-white" />
            </a>
          </div>
        </div>
      </div>
      <!-- project -->
      <div class="mb-11">
        <div class="flex text-lg text-gray-900 dark:text-white mb-3">
          <h3>Project</h3>
          <ArrowUpRight class="dark:text-white" />
        </div>
        <div class="grid grid-cols-2 gap-6">
          <div class="">
            <NuxtLink to="https://www.testbank.vn/">
              <div class="w-[320px] h-[180px] overflow-hidden rounded-md mb-2 hover:scale-105">
                <img class="w-full h-full object-fit" src="/assets/images/testbank.vn.png" alt="">
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.testbank.vn/">
              <h3 class="text-lg font-semibold italic dark:text-white ">Testbank.vn</h3>
            </NuxtLink>
            <p class="">Leading educational products for training from grade 6 to grade 12</p>
          </div>
          <div class="">
            <NuxtLink to="https://www.testbank.vn/">
              <div class="w-[320px] h-[180px] overflow-hidden rounded-md mb-2 hover:scale-105">
                <img class="w-full h-full object-fit" src="/assets/images/netflix.png" alt="">
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.testbank.vn/">
              <h3 class="text-lg font-semibold italic dark:text-white ">Netflix.com</h3>
            </NuxtLink>
            <p class="">Leading educational products for training from grade 6 to grade 12</p>
          </div>
          <div class="">
            <NuxtLink to="https://www.testbank.vn/">
              <div class="w-[320px] h-[180px] overflow-hidden rounded-md mb-2 hover:scale-105">
                <img class="w-full h-full object-fit" src="/assets/images/nike.png" alt="">
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.testbank.vn/">
              <h3 class="text-lg font-semibold italic dark:text-white ">Nike Website</h3>
            </NuxtLink>
            <p class="">Nike shoe sales system is developed by flask python</p>
          </div>
        </div>
      </div>
      <!-- blog -->
      <div class="">
        <div class="flex text-lg text-gray-900 dark:text-white mb-2">
          <h3>Blog</h3>
          <ArrowUpRight class="dark:text-white" />
        </div>
        <p class="dark:text-customLightText">I occasionally write about programming, productivity, and more.
          Check me out and follow to stay up to date.</p>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ArrowUpRight } from "lucide-vue-next";

const media = [
  {
    link: 'https://github.com/juniordev203',
    text: 'Github'
  },
  {
    link: 'https://www.facebook.com/huyhoang203.phh/',
    text: 'Facebook'
  },
  {
    link: 'https://www.instagram.com/huyhoang_p03/',
    text: 'Instagram'
  },
  {
    link: 'https://x.com/_junior203_',
    text: 'Twitter'
  },
]

</script>