<template>
  <div class="min-h-screen">
    <div class="p-2 max-w-4xl flex flex-col gap-12 overflow-hidden mb-16">
      <!-- introduce -->
      <div class="flex flex-col gap-2">
        <h1 class="text-4xl text-black dark:text-gray-100 font-bold">Technologies & Tools</h1>
        <p class="text-lg text-gray-700 dark:text-gray-300">Here are some of the technologies and tools I use</p>
      </div>
      <!-- technologies -->
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl text-black dark:text-gray-100 font-semibold">Technologies</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="" v-for="(data) in Techs" :key="index">
            <div class="w-full h-full flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div class="">
                <p class="text-xl text-gray-800 dark:text-gray-200 font-medium">{{ data.name }}</p>
                <p class="text-gray-600 dark:text-gray-400">{{ data.description }}</p>
              </div>
              <a :href="data.link" class="flex items-center gap-2 text-gray-500 dark:text-gray-300">
                <span>Learn more</span>
                <ArrowUpRight class="w-4 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- tools -->
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl text-black dark:text-gray-100 font-semibold">Tools</h2>
        <div class="grid grid-cols-2 gap-6">
          <div class="" v-for="(data) in Tools" :key="index">
            <div class="w-full h-full flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div class="">
                <p class="text-xl text-gray-800 dark:text-gray-200 font-medium">{{ data.name }}</p>
                <p class="text-gray-600 dark:text-gray-400">{{ data.description }}</p>
              </div>
              <a :href="data.link" class="flex items-center gap-2 text-gray-500 dark:text-gray-300">
                <span>Learn more</span>
                <ArrowUpRight class="w-4 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script setup>
import { ArrowUpRight } from "lucide-vue-next";
const Techs = [
  {
    name: "React Native",
    description: "A framework for building native apps using React.",
    link: "https://reactnative.dev/",
  },
  {
    name: "Nuxt.js",
    description: "A framework for creating Vue.js applications.",
    link: "https://nuxtjs.org/",
  },
  {
    name: ".NET Core",
    description: "A cross-platform framework for building modern, cloud-based, internet-connected applications.",
    link: "https://dotnet.microsoft.com/",
  },
  {
    name: "Git",
    description: "A distributed version control system.",
    link: "https://git-scm.com/",
  },

];
const Tools = [
  {
    name: "Visual Studio Code",
    description: "A source-code editor made by Microsoft.",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "MySQL Workbench",
    description: "A unified visual tool for database architects, developers, and DBAs.",
    link: "https://www.mysql.com/products/workbench/",
  },
  {
    name: "Rider",
    description: "A cross-platform .NET IDE by JetBrains.",
    link: "https://www.jetbrains.com/rider/",
  },
];
</script>