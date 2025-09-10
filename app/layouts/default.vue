<template>
    <div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Nav />
        <main class="p-8 sm:pt-14 md:pt-16">
            <div class="max-w-4xl mx-auto">
                <slot />
            </div>
        </main>
        <Footer />
    </div>
</template>

<style scoped>
</style>
