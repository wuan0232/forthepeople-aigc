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
  title: 'Medical Visits & Follow-Up | For The People Clinic Blog',
  meta: [
    {
      name: 'description',
      content:
        'Prepare for appointments, organize your records, and discuss follow-up with your doctor.',
    },
  ],
})
</script>
