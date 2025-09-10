<script lang="ts" setup>
const route = useRoute();
const isHome = computed(() => route.path === '/');
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

// Close menu when route changes
watch(
    () => route.path,
    () => {
        closeMenu();
    },
);
</script>

<template>
    <nav class="relative border-b border-gray-200">
        <!-- Desktop Navigation -->
        <div class="flex items-center justify-between p-4 px-4 md:px-8">
            <NuxtLink
                to="/"
                class="font-medium text-lg text-gray-800 hover:text-gray-900 transition-colors"
            >
                Johnson Towoju
                <span
                    v-if="isHome"
                    class="hidden sm:inline font-normal text-gray-600"
                >
                    | Web Engineer</span
                >
            </NuxtLink>

            <!-- Desktop Menu -->
            <ul class="hidden md:flex gap-6">
                <li>
                    <NuxtLink
                        to="/projects"
                        class="hover:underline transition-colors"
                        >Projects</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        to="/contact"
                        class="hover:underline transition-colors"
                        >Contact</NuxtLink
                    >
                </li>
            </ul>

            <!-- Mobile Menu Button -->
            <button
                @click="toggleMenu"
                class="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
            >
                <svg
                    class="w-6 h-6"
                    :class="{ 'rotate-90': isMenuOpen }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        v-if="!isMenuOpen"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                        v-else
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div
            v-show="isMenuOpen"
            class="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
        >
            <ul class="flex flex-col">
                <li>
                    <NuxtLink
                        to="/projects"
                        class="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                        @click="closeMenu"
                    >
                        Projects
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="/contact"
                        class="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        @click="closeMenu"
                    >
                        Contact
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
