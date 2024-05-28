<!-- src/views/ErrorPage.vue -->
<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="flex flex-col items-center gap-2 font-urbanist">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <template v-if="error.status === 404">
        <span class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] font-urbanist text-[10rem] text-emerald-700">
          {{ error.status }}
        </span>
        <p>
          <i class="text-xl">{{ error.message }}</i>
        </p>
        <router-link
          to="/"
          class="border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-500 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm"
        >
          Go Back Home
        </router-link>
      </template>
      <template v-else>
        <span class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] font-urbanist text-[10rem] text-emerald-700">
          {{ error.status }}
        </span>
        <p>
          <i class="text-xl">{{ error.message }}</i>
        </p>
        <router-link
          to="/"
          class="border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-500 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm"
        >
          Go Back Home
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  data() {
    return {
      error: {
        status: 404,
        message: 'Not Found'
      }
    };
  },
  created() {
    // For demonstration, replace this with actual error handling logic
    if (this.$route.meta.error) {
      this.error = this.$route.meta.error;
      console.error(this.error);
    }
  }
};
</script>
