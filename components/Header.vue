<template>
    <div class="mb-11 text-sm">
        <nav class="flex mx-auto max-w-[720px] items-center justify-between gap-3 py-12" aria-label="Global">
            <div class="p-1 hover:bg-gray-100 dark:hover:bg-black rounded-md">
                <NuxtLink to="/">
                    <Home class="w-5 h-5 font-light text-gray-900 dark:text-white"/>
                </NuxtLink>
            </div>
            <div class="flex gap-3 font-light leading-6 dark:text-white">
                <NuxtLink 
                v-for="(data) in navMenu" 
                :key="data.router" 
                :to="{name: data.router}" 
                active-class="!boder-black bg-gray-100 dark:bg-gray-800" 
                class="px-3 py-1 rounded-md">
                        <span>{{ data.text }}</span>
                </NuxtLink>
            </div>
            <div class="p-1 hover:bg-gray-100 dark:hover:bg-black rounded-md cursor-pointer" @click="toggleDarkMode">
                <MoonStar class="w-5 h-5 font-light text-gray-900 dark:text-white"/>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { Home, MoonStar } from "lucide-vue-next"
const router = useRouter();

const navMenu = ref([
    {
        router: "index",
        text: "Home"
    },
    {
        router: "cv",
        text: "CV"
    },
    {
        router: "blog",
        text: "Blog"
    },
    {
        router: "tech",
        text: "Tech"
    },

])
const isDarkMode = ref(false);

function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}
</script>

<style></style>