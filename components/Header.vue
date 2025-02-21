<template>
    <div class="mb-11">
        <nav class="flex mx-auto max-w-[700px] items-center justify-between gap-3 py-12" aria-label="Global">
            <div class="p-2 hover:bg-gray-200 dark:hover:bg-black rounded-md">
                <NuxtLink to="/">
                    <Home />
                </NuxtLink>
            </div>
            <div class="flex gap-6 text-lg font-light leading-6 dark:text-white">
                <NuxtLink v-for="(data) in navMenu" :key="data.router" :to="{name: data.router}" active-class="!boder-black" class="p-2 hover:bg-gray-200 dark:hover:bg-black rounded-md">
                        <span>{{ data.text }}</span>
                </NuxtLink>
            </div>
            <div class="p-2 hover:bg-gray-200 dark:hover:bg-black rounded-md cursor-pointer" @click="toggleDarkMode">
                <MoonStar />
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
        router: "about",
        text: "About"
    },
    {
        router: "blog",
        text: "Blog"
    },
    {
        router: "contact",
        text: "Contact"
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