<script setup>
useHead({ title: 'Projects' });
</script>

<template>
    <section>
        <h1 class="text-2xl font-medium mb-3">Projects</h1>
        <p class="text-gray-600">A showcase of my recent work.</p>

        <div class="mt-6 max-w-xl space-y-4">
            <NuxtLink
                to="https://zapsecret.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="block rounded-lg border border-gray-200 bg-white p-4 hover:bg-gray-50 transition-colors relative"
            >
                <div class="flex gap-4 items-start">
                    <div class="size-12 rounded-full shrink-0">
                        <img
                            src="~/assets/img/zaplogo.png"
                            alt="Project icon"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="flex-1">
                        <h2 class="text-lg font-medium">ZapSecret</h2>
                        <p class="text-gray-600 mt-1">
                            ZapSecret lets you share sensitive information with
                            confidence. Just paste your message, set an expiry,
                            and we'll generate a one-time, self-destructing link
                            that can be shared securely.
                        </p>
                    </div>
                    <!-- Mobile-only click indicator -->
                    <div class="lg:hidden flex items-center text-gray-400 ml-2">
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </div>
                </div>
            </NuxtLink>

            <div class="rounded-lg border border-gray-200 bg-white p-4">
                <div class="flex gap-4 items-start">
                    <div class="size-10 rounded-full overflow-hidden shrink-0">
                        <img
                            src="~/assets/img/simple-view.png"
                            alt="Project icon"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="flex-1">
                        <h2 class="text-lg font-medium">YouTube Simple View</h2>
                        <p class="text-gray-600 mt-1">
                            A browser extension hides distracting YouTube
                            elements for a cleaner viewing experience.
                        </p>

                        <div
                            class="w-full text-sm md:w-3/4 mt-4 min-[375px]:grid min-[375px]:grid-cols-2 divide-y min-[375px]:divide-x divide-gray-200 border border-gray-200 rounded-md"
                        >
                            <a
                                href="https://chromewebstore.google.com/detail/youtube-simple-view-hide/gppllamhaciichleihemgilcpledblpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center gap-1 sm:gap-3 p-3 hover:bg-gray-50 group"
                            >
                                <img
                                    src="~/assets/img/chrome.png"
                                    alt="Chrome"
                                    class="size-6"
                                />
                                <span
                                    class="text-blue-600 font-semibold group-hover:underline"
                                    >Chrome</span
                                >
                            </a>
                            <a
                                href="https://addons.mozilla.org/en-US/firefox/addon/youtube-simple-view/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center gap-1 sm:gap-3 p-3 hover:bg-gray-50 group"
                            >
                                <img
                                    src="~/assets/img/firefox.png"
                                    alt="Firefox"
                                    class="size-6"
                                />
                                <span
                                    class="text-blue-600 font-semibold group-hover:underline"
                                    >Firefox</span
                                >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
