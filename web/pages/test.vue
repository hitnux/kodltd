<template>
<div>
    <b-upload v-model="dropFiles"
                multiple
                drag-drop
                style="margin:auto">
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </b-upload>
</div>
</template>
