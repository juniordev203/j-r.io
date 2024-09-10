<script setup>
import { SunMoon, ArrowUpRight, Facebook, Instagram, Github, Twitter } from "lucide-vue-next";
</script>
<style>
  a {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
</style>
<template>
  <div class="min-h-screen overflow-hidden font-mono">
    <div class="">
      <header class="md:mt-6">
        <nav class="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
            </a>
          </div>
          <div class="">
            <a href="#" class="text-base font-semibold leading-6 text-gray-900">Home</a>
            <a href="#" class="text-base font-semibold leading-6 text-gray-900 mx-6">Blog</a>
            <a href="#" class="text-base font-semibold leading-6 text-gray-900 mr-6">Contact</a>
            <a href="#" class="text-base font-semibold leading-6 text-gray-900">Skills</a>
          </div>
          <div class="lg:flex lg:flex-1 lg:justify-end">
            <SunMoon />
          </div>
        </nav>
        
      </header>
    </div>
    <div class="flex justify-center">
      <main class="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
        <div class="introduction ">
          <h3 class="font-bold mb-3">@Junior | Coder & Holding</h3>
          <p class="mt-6">I am a coder, holding crypto and a student of NEU!</p>
          <div class="flex mt-3">
              <a href="https://github.com/juniordev203" class="mr-5 pl-2 pr-1 py-0 rounded-3xl bg-gray-400 flex">Github<ArrowUpRight class="w-4 h-5" /></a>
              <a href="https://www.facebook.com/huyhoang203.phh/" class="mr-5 pl-2 pr-1 py-0 rounded-3xl bg-gray-400 flex">Facebook<ArrowUpRight class="w-4 h-5" /></a>
              <a href="https://www.instagram.com/huyhoang_p03/" class="mr-5 pl-2 pr-1 py-0 rounded-3xl bg-gray-400 flex">Instagram<ArrowUpRight class="w-4 h-5" /></a>
              <a href="https://x.com/_junior203_" class="mr-5 pl-2 pr-1 py-0 rounded-3xl bg-gray-400 flex">Twitter<ArrowUpRight class="w-4 h-5" /></a>
          </div>
        </div>
        <div>
          <h3 class="mt-10 mb-3">Pinned Project</h3>
          <div class="columns-3">
            <div>
              <img class="rounded-xl w-64 h-32 object-cover" src="./assets/images/netflix.png" alt="">
              <h3>Netflix</h3>
              <div class="flex items-end">
                <p>Link:</p>
                <a class="ml-1 underline" href="https://www.instagram.com/huyhoang_p03/">junior.com</a>
              </div>
            </div>
            <div>
              <img class="rounded-xl w-64 h-32" src="./assets/images/angular.jpg" alt="">
              <h3>Profile Management</h3>
              <div class="flex items-end">
                <p>Link: </p>
                <a class="ml-1 underline" href="https://www.instagram.com/huyhoang_p03/">junior.com</a>
              </div>
            </div>
            <div>
              <img class="rounded-xl w-64 h-32" src="./assets/images/nike.png" alt="">
              <h3>Nike</h3>
              <div class="flex items-end">
                <p>Link: </p>
                <a class="ml-1 underline" href="https://www.instagram.com/huyhoang_p03/">junior.com</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <div class="flex">
            <h3>Blog</h3>
            <ArrowUpRight/>
          </div>
          <p>I occasionally write about programming, productivity, and more.
            Check me out and follow to stay up to date.</p>
        </div>
      </main>
    </div>

  </div>
</template>
