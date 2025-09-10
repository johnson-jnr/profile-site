<script setup>
useHead({ title: 'Home' });
</script>

<template>
    <div class="lg:mt-24">
        <section class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <!-- Speech Bubble Section -->
            <div class="relative w-full lg:max-w-xl order-2 lg:order-1">
                <div
                    class="speech-bubble bg-gradient-to-br from-slate-50 to-slate-200 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-300"
                >
                    <div
                        class="text-sm md:text-base text-slate-700 leading-relaxed"
                    >
                        <p class="mb-3 md:mb-4">
                            <span class="text-xl md:text-2xl">👋</span> Hello
                            there! My name is
                            <span class="font-bold text-blue-600"
                                >Johnson Towoju</span
                            >. I'm a Web Engineer with expertise in the
                            JavaScript/TypeScript ecosystem.
                        </p>
                        <p class="mb-3 md:mb-4">
                            I have worked with diverse teams building complex
                            and user-friendly web applications, including
                            insurance claim systems, user portals, and business
                            dashboards.
                        </p>
                        <p class="mb-3 md:mb-4">
                            I architect software with patience and an
                            inquisitive drive, and go beyond to understand how
                            every piece of a system connects.
                        </p>
                        <p>
                            Recently, I have worked on open source projects
                            including
                            <a
                                class="underline text-blue-500 hover:text-blue-700 transition-colors font-semibold"
                                href="https://zapsecret.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >ZapSecrets</a
                            >
                            and
                            <a
                                class="underline text-blue-500 hover:text-blue-700 transition-colors font-semibold"
                                href="https://chromewebstore.google.com/detail/youtube-simple-view-hide/gppllamhaciichleihemgilcpledblpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Youtube Simple View</a
                            >.
                        </p>
                    </div>
                </div>
                <!-- Speech bubble tail - hidden on mobile, visible on desktop -->
                <div
                    class="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2"
                >
                    <div
                        class="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[20px] border-t-transparent border-b-transparent border-l-slate-200"
                    ></div>
                </div>
            </div>

            <!-- Image Section -->
            <div
                class="flex justify-center lg:justify-start order-1 lg:order-2"
            >
                <div
                    class="relative size-48 md:size-56 lg:size-72 rounded-full border-2 border-gray-200 overflow-hidden shadow-lg"
                >
                    <img
                        src="~/assets/img/headshot.jpg"
                        alt="Johnson Towoju"
                        class="scale-140 translate-y-[45px] object-cover"
                    />
                    <!-- Subtle glow effect -->
                    <div
                        class="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-blue-100/20"
                    ></div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.speech-bubble {
    position: relative;
    animation: fadeInUp 0.6s ease-out;
}

.speech-bubble::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 100%
    );
    border-radius: 1rem;
    pointer-events: none;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Hover effect for the speech bubble */
.speech-bubble:hover {
    transform: translateY(-2px);
    box-shadow:
        0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
}

</style>
