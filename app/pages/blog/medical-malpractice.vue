<template>
  <div class="blog">
    <BlogCategoryArchive
      :category="blogMedicalMalpracticeCategory"
      :posts="blogMedicalMalpracticeArchive"
    />
    <SiteLeadFeeSection />
  </div>
</template>

<script setup lang="ts">
import {
  blogMedicalMalpracticeArchive,
  blogMedicalMalpracticeCategory,
} from '~/constants/blog'

import '~/assets/css/blog.css'

useHead({
  title: 'Medical Malpractice | For The People Clinic Blog',
  meta: [
    {
      name: 'description',
      content:
        'Patient-focused articles on medical malpractice, second opinions, informed consent, and practical medical next steps.',
    },
  ],
})
</script>
