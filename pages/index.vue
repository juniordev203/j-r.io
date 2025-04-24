<template>
  <div class="min-h-screen">
    <div class="p-2 max-w-5xl mx-auto flex flex-col gap-16 overflow-hidden mb-20">
      <!-- Introduce -->
      <div class="flex flex-col gap-8" data-aos="fade-up">
        <div class="flex flex-col gap-3">
          <h1 class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
            Hi, Juniordev here!
          </h1>
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-semibold">Frontend Developer</p>
        </div>
        <p class="text-gray-700 dark:text-gray-400 leading-relaxed">
          I am a software engineer building web applications with a design-oriented approach. Besides coding, I create setup videos on TikTok, focusing on technology and productivity.
          I am a programmer and a student at <a class="text-blue-600" href="https://www.neu.edu.vn/" target="_blank">National Economics University!</a>
        </p>
        <div class="flex flex-wrap gap-4">
          <a v-for="(data, index) in media" :key="index" :href="data.link" target="_blank" rel="noopener noreferrer"
             class="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transform hover:scale-105 hover:shadow-lg transition-all duration-300">
            {{ data.text }}
            <ArrowUpRight class="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      <!-- Project -->
      <div data-aos="fade-up" data-aos-delay="100" class="flex flex-col gap-2">
        <div class="flex items-center">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Projects</h2>
          <ArrowUpRight class="w-6 h-6 ml-2 text-gray-500" />
        </div>
        <div class="flex flex-col gap-1">
          <a v-for="(data, index) in project" :key="index" :href="data.link" target="_blank" rel="noopener noreferrer"
             class="flex gap-2 p-2 rounded-xl bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
             <component :is="data.icon" class="w-5 h-5 text-blue-600 dark:text-gray-300" />
             <div class="flex gap-2 items-center">
              <p class="text-md font-bold text-gray-800 dark:text-gray-200">{{ data.title }}</p>
              <p class="text-xs text-gray-600 dark:text-gray-400">{{ data.description }}</p>
            </div>
          </a>
        </div>
      </div>

      <!-- Blog -->
      <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="200">
        <div class="flex flex-col gap-3">
          <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Blog</h1>
          <p class="text-gray-600 dark:text-gray-400">Stay tuned for my posts!</p>
        </div>
        <div class="flex flex-col gap-2">
          <div v-for="n in 3" :key="n" class="flex gap-2 justify-between items-end rounded-lg bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transform hover:-translate-y-1 transition-all duration-300">
            <div class="flex flex-col justify-center gap-2">
              <p class="text-gray-600 dark:text-gray-400">Apr 27, 2024</p>
              <p class="font-semibold text-gray-800 dark:text-gray-200">Add beautiful maps to your React app with MapBox GL</p>
            </div>
            <SquarePen class="w-5 h-5 text-blue-600 dark:text-gray-300"/>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="flex items-center">
            <p class="text-2xl font-semibold text-gray-800 dark:text-gray-100">New post</p>
            <ArrowUpRight class="w-5 h-5 ml-2 text-gray-500" />
          </div>
          <p class="text-gray-700 dark:text-gray-400">
            Please send good ideas including an article about technology, design, program, work, and your life for me!
          </p>
        </div>
      </div>

      <!-- Technologies & Tools -->
      <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="300">
        <div class="flex flex-col gap-3">
          <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Technologies & Tools</h1>
          <p class="text-lg text-gray-700 dark:text-gray-400">Here are some of the technologies and tools I use</p>
        </div>
        <!-- Technologies -->
        <div class="flex flex-col gap-6">
          <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-100">Technologies</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(data, index) in Techs" :key="index"
                 class="p-6 rounded-xl bg-slate-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <p class="text-xl font-semibold text-gray-800 dark:text-gray-200">{{ data.name }}</p>
              <p class="text-gray-600 dark:text-gray-400 mt-2">{{ data.description }}</p>
              <a :href="data.link" class="flex items-center gap-2 mt-4 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
                <span>Learn more</span>
                <ArrowUpRight class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <!-- Tools -->
        <div class="flex flex-col gap-6">
          <h2 class="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Tools</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(data, index) in Tools" :key="index"
                 class="p-6 rounded-xl bg-slate-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <p class="text-xl font-semibold text-gray-800 dark:text-gray-200">{{ data.name }}</p>
              <p class="text-gray-600 dark:text-gray-400 mt-2">{{ data.description }}</p>
              <a :href="data.link" class="flex items-center gap-2 mt-4 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
                <span>Learn more</span>
                <ArrowUpRight class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DarkMode />
  </div>
</template>

<script setup>
import { ArrowUpRight, Send, Globe, Smartphone, SquarePen, Phone, Mail } from 'lucide-vue-next';
import DarkMode from '~/components/DarkMode.vue';

const media = [
  { link: 'https://github.com/juniordev203', text: 'Github' },
  // { link: 'https://www.tiktok.com/@jrsetup?lang=vi-VN', text: 'Tiktok'},
  { link: 'https://www.facebook.com/huyhoang203.phh/', text: 'Facebook' },
];

const project = [
  {
    link: 'https://www.testbank.vn/',
    title: 'Testbank.vn',
    description: 'Leading educational technology platform for training from grade 6 to 12th grade',
    icon: Globe
  },
  {
    link: 'https://github.com/juniordev203/flashduo_app',
    title: 'FlashDuo',
    description: 'Application of vocabulary and TOEIC exam preparation',
    icon: Smartphone
  },

];

const Techs = [
  { name: "React Native", description: "A framework for building native apps using React.", link: "https://reactnative.dev/" },
  { name: "Nuxt.js", description: "A framework for creating Vue.js applications.", link: "https://nuxtjs.org/" },
  { name: ".NET Core", description: "A cross-platform framework for building modern, cloud-based, internet-connected applications.", link: "https://dotnet.microsoft.com/" },
  { name: "Git", description: "A distributed version control system.", link: "https://git-scm.com/" },
];

const Tools = [
  { name: "Visual Studio Code", description: "A source-code editor made by Microsoft.", link: "https://code.visualstudio.com/" },
  { name: "MySQL Workbench", description: "A unified visual tool for database architects, developers, and DBAs.", link: "https://www.mysql.com/products/workbench/" },
  { name: "Rider", description: "A cross-platform .NET IDE by JetBrains.", link: "https://www.jetbrains.com/rider/" },
];
</script>

<style>
@import 'aos/dist/aos.css';
</style>