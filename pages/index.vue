<template>
  <div class="min-h-screen">
    <div class="p-2 max-w-4xl flex flex-col gap-12 overflow-hidden mb-16">
      <!-- introduce -->
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl text-black dark:text-gray-100 font-medium  ">Hi, Juniordev here!</h1>
          <p class="">Fullstack Developer & Crypto Holding</p>
        </div>
        <p class="dark:text-customLightText">I am a software engineer who builds for the web with a
          design-oriented approach. In addition to coding, I make YouTube videos, where I focus on tech,
          and productivity. <span class="">I am a coder, holding crypto and a student of NEU!</span>
        </p>
        <div class="flex gap-6">
          <div class="" v-for="(data) in media" :key="index">
            <a :href="data.link"
              class="flex px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800  hover:scale-110 hover:bg-gray-300 shadow">{{
                data.text }}
              <ArrowUpRight class="w-4 h-5  text-gray-500" />
            </a>
          </div>
        </div>
      </div>
      <!-- project -->
      <div class="">
        <div class="flex  mb-3">
          <p>Project</p>
          <ArrowUpRight class="w-4 h-5  text-gray-500" />
        </div>
        <div class="grid grid-cols-2 gap-6">
          <div class="flex flex-col gap-2" v-for="(data) in project" :key="index">
            <a :href="data.link">
              <div class="p-2 w-full h-48 rounded-md overflow-hidden">
                <img class="w-full h-full object-cover" :src="data.image" alt="" />
              </div>
              <div class="flex flex-col gap-1">
                <p class="  font-medium">{{ data.title }}</p>
                <p class="text-gray-700 dark:text-gray-300">{{ data.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- blog -->
      <div class="">
        <div class="flex  mb-2">
          <p>Blog</p>
          <ArrowUpRight class="w-4 h-5  text-gray-500" />
        </div>
        <p class="dark:text-customLightText">I occasionally write about programming, productivity, and more.
          Check me out and follow to stay up to date.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowUpRight } from "lucide-vue-next";
import testbankImg from '../assets/images/testbank.vn.png'
import netflixImg from '../assets/images/netflix.png'
import nikeImg from '../assets/images/nike.png'

const media = [
  {
    link: 'https://github.com/juniordev203',
    text: 'Git'
  },
  {
    link: 'https://www.facebook.com/huyhoang203.phh/',
    text: 'Meta'
  },
  {
    link: 'https://www.instagram.com/huyhoang_p03/',
    text: 'IG'
  },
  {
    link: 'https://x.com/_junior203_',
    text: 'X'
  },
]
const project = [
  {
    link: 'https://www.testbank.vn/',
    title: 'Testbank.vn',
    description: 'Leading educational tech for training from grade 6 to grade 12',
    image: testbankImg
  },
  {
    link: 'https://github.com/juniordev203/netflix-project.io',
    title: 'Netflix.com',
    description: 'Remake Netflix interface with HTML and CSS',
    image: netflixImg
  },
  {
    link: 'https://github.com/juniordev203/nike.io',
    title: 'Nike Website',
    description: 'Nike shoe sales system is developed by flask python',
    image: nikeImg
  },
]

</script>