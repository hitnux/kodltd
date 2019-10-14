<template>
    <b-navbar fixed-top>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Pre-Alpha"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <slot></slot>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button 
                        type="is-info"
                        icon-left="google">
                        Sing up with Google
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>