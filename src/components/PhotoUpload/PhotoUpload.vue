<template>
	<div class="photo-upload" @click="triggerInput">
		<input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file" style="display: none;">
		<input v-if="isSuccess" type="hidden" name="fields[image]" :value="uploadedFiles[0].url">
		<img v-if="isSuccess" :src="uploadedFiles[0].url" class="photo-upload__image" :alt="uploadedFiles[0].originalName">
		<p v-else>Upload image here</p>
	</div>
</template>

<script src="./PhotoUpload.js"></script>

<style lang="scss" src="./PhotoUpload.scss" scoped></style>