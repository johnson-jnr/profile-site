<script lang="ts" setup>
useHead({ title: 'Contact' });

const config = useRuntimeConfig();

const form = reactive({
    email: '',
    message: '',
    name: '',
    subject: 'Submission from johnsontowoju.dev',
    access_key: config.public.web3AccessKey,

});

const submitted = ref<boolean>(false);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);

async function handleSubmit() {
    loading.value = true;
    error.value = false;

    try {
    const response: any = await $fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: form,
    });
    if (response.success) {
        submitted.value = true;
        resetFormFields();
    }
    else {
        console.error('Error submitting form:', response);
        error.value = true;
    }
    } catch(err) {
        error.value = true;
        console.error('Error submitting form:', err);
    }
    finally {
        loading.value = false;
    }
}

function resetFormFields() {
    form.name = '';
    form.email = '';
    form.message = '';
    form.subject = '';
}
</script>

<template>
    <section>
        <h1 class="text-2xl font-medium mb-3">Contact</h1>
        <p class="text-gray-600">
            Feel free to drop a message or get in touch with me via the social links.
        </p>

        <div class="mt-2 flex items-center gap-4">
            <a
                href="https://www.linkedin.com/in/johnson-towoju/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm inline-flex items-center gap-1 text-blue-600 hover:underline"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4"
                >
                    <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.602 0 4.268 2.371 4.268 5.455v6.286zM5.337 7.433a2.065 2.065 0 11.001-4.13 2.065 2.065 0 010 4.13zM6.991 20.452H3.678V9h3.313v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                </svg>
                <span>LinkedIn</span>
            </a>
            <a
                href="https://github.com/johnson-jnr"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm inline-flex items-center gap-1 text-gray-800 hover:underline"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.39 7.862 10.907.575.104.786-.25.786-.557 0-.275-.01-1.003-.016-1.97-3.197.695-3.872-1.54-3.872-1.54-.523-1.327-1.277-1.68-1.277-1.68-1.043-.712.079-.698.079-.698 1.153.081 1.76 1.184 1.76 1.184 1.026 1.758 2.692 1.25 3.346.956.104-.744.402-1.25.731-1.538-2.553-.291-5.236-1.277-5.236-5.683 0-1.255.448-2.283 1.183-3.089-.119-.29-.513-1.46.112-3.044 0 0 .967-.31 3.17 1.18a10.99 10.99 0 0 1 2.886-.388c.98.004 1.967.132 2.89.388 2.201-1.49 3.166-1.18 3.166-1.18.627 1.584.233 2.754.114 3.044.737.806 1.182 1.834 1.182 3.089 0 4.418-2.688 5.389-5.252 5.676.41.353.777 1.05.777 2.117 0 1.527-.014 2.758-.014 3.133 0 .31.208.667.792.553C20.213 21.386 23.5 17.084 23.5 12 23.5 5.648 18.352.5 12 .5Z"
                        clip-rule="evenodd"
                    />
                </svg>
                <span>GitHub</span>
            </a>
        </div>

        <form
            v-if="!submitted"
            class="mt-8 max-w-xl space-y-4"
            @submit.prevent="handleSubmit"
        >
            <input type="hidden" v-model="form.subject" name="subject" />
            <!-- Honeypot Spam Protection -->
            <input
                type="checkbox"
                name="botcheck"
                class="hidden"
                style="display: none"
            />

            <div>
                <label for="name" class="block text-sm font-medium mb-1"
                    >Name<span class="text-red-500">*</span></label
                >
                <input
                    id="name"
                    name="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
            </div>

            <div>
                <label for="email" class="block text-sm font-medium mb-1"
                    >Email<span class="text-red-500">*</span></label
                >
                <input
                    id="email"
                    name="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label for="message" class="block text-sm font-medium mb-1"
                    >Message<span class="text-red-500">*</span></label
                >
                <textarea
                    id="message"
                    name="message"
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
            </div>

            <button
                type="submit"
                :disabled="loading"
                class="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                <svg
                    v-if="loading"
                    aria-hidden="true"
                    class="size-5 text-white/25 animate-spin fill-white/75"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span>{{ loading ? 'Sending…' : 'Submit' }}</span>
            </button>
            <p v-if="error" class="text-sm text-red-500"> Oops! Something went wrong. Please try again later. </p>
        </form>

        <section v-else class="mt-8 max-w-xl">
            <div
                class="flex items-center gap-3 rounded-md border border-green-200 bg-green-50 p-3 text-green-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-3"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.69a.75.75 0 1 0-1.22-.86l-3.26 4.64-1.62-1.62a.75.75 0 1 0-1.06 1.06l2.25 2.25c.32.32.84.27 1.09-.11l3.88-5.36Z"
                        clip-rule="evenodd"
                    />
                </svg>
                <p class="text-sm">Your message has been sent successfully.</p>
            </div>
        </section>
    </section>
</template>
