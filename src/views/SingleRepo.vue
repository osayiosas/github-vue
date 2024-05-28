<!-- src/views/SingleRepo.vue -->
<template>
  <div>
    <Helmet>
      <title>{{ `Github API | ${singleRepo?.name}` }}</title>
      <meta
        name="description"
        content="This is the detail page for the repository"
      />
      <link :href="`/repo-list/${singleRepo?.name}`" rel="canonical" />
    </Helmet>
    <transition name="slide">
      <div
        v-if="singleRepo"
        class="absolute top-0 h-full w-full mx-auto my-auto p-6 rounded-lg shadow-md shadow-blue-100 bg-red-50"
      >
        <div
          class="font-urbanist border-2 w-fit border-emerald-100 rounded-lg py-1 px-4 text-black bg-coral-blue shadow-lg ring-2 ring-violet-200 ring-offset-2 cursor-pointer transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1"
          @click="navigateBack"
        >
          Close
        </div>

        <div class="mt-7">
          <div class="flex gap-4 sm:flex-col">
            <div class="font-urbanist font-normal">
              <h1 class="text-2xl xs:text-xl">
                <span class="text-lg font-light font-worksans">Name</span>
                : {{ singleRepo.name }}
              </h1>
              <div class="text-xl xs:text-base">
                <span class="text-lg font-light font-worksans">Full Name</span>
                : {{ singleRepo.full_name }}
              </div>
              <div class="text-xl xs:text-base">
                <span class="text-lg font-light font-worksans">Description</span>
                : {{ singleRepo.description || "No description for this project" }}
              </div>
              <div class="text-xl xs:text-base">
                <span class="text-lg font-light font-worksans">Created at</span>
                : {{ formatDate(singleRepo.created_at) }}
              </div>
              <div class="text-xl xs:text-base">
                <span class="text-lg font-light font-worksans">Updated at</span>
                : {{ formatDate(singleRepo.updated_at) }}
              </div>
              <div class="text-xl xs:text-base">
                <span class="text-lg font-light font-worksans">Language</span>
                : {{ singleRepo.language }}
              </div>
              <div class="text-xl xs:text-base">
                <span class="text-lg font-light font-worksans">Forks</span>
                : {{ singleRepo.forks_count }}
              </div>
              <div class="text-xl xs:text-base">
                <span class="text-lg font-light font-worksans">Watchers</span>
                : {{ singleRepo.watchers_count }}
              </div>
              <div class="text-xl xs:text-base">
                <span class="text-lg font-light font-worksans">Stars</span>
                : {{ singleRepo.stargazers_count }}
              </div>
              <div class="text-sm border-2 border-gray-300 rounded-xl w-fit px-2.5 py-0.8">
                {{ singleRepo.visibility }}
              </div>
              <div class="mt-2 text-sm flex items-center gap-1 border-2 border-gray-300 rounded-xl w-fit px-2.5 py-0.8 transition-all hover:border-blue-100">
                <BiLinkExternal />
                <a :href="singleRepo.html_url" target="_blank">See the code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { useRouter, useRoute } from 'vue-router';
import { Helmet } from "@jnields/vue-helmet";
import moment from 'moment';
import { BiLinkExternal } from 'vue-icons/bi';

const fetchSingleRepo = async (repoId) => {
  const res = await fetch(`https://api.github.com/repos/osayiosas/${repoId}`);
  return res.json();
};

export default defineComponent({
  name: 'SingleRepo',
  components: {
    HelmetProvider, Helmet,
    BiLinkExternal
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const repoId = route.params.repoId;

    const { data: singleRepo, status } = useQuery(['repo', repoId], () => fetchSingleRepo(repoId));

    const navigateBack = () => {
      router.back();
    };

    const formatDate = (date) => {
      return moment(date).format('lll');
    };

    return {
      singleRepo,
      status,
      navigateBack,
      formatDate
    };
  }
});
</script>
