<template>
    <ScrollView>
        <StackLayout width="100%">
            <Label class="drawer-header" text="Drawer"></Label>

            <Label v-for="(page, i) in pages"
                   @tap="goToPage(page.component)"
                   class="drawer-item"
                   :text="page.name"
                   :key="i"></Label>

            <Button class="drawer-close-button" @tap="closeDrawer()">Close</Button>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import SideDrawer from '../mixins/SideDrawer'

    export default {
        name: "DrawerContent",
        mixins: [SideDrawer],
        data() {
            return {
                // define our pages, making sure the component matches that defined in /app/routes/index.js
                pages: [
                    {name: 'Inicio', component: this.$routes.Dashboard},
                    {name: 'Login', component: this.$routes.LoginRegister},
                    {name: 'Perfil', component: this.$routes.UserProfile}
                ]
            }
        },
        methods: {
            goToPage(pageComponent) {
                // use the manual navigation method
                this.$navigateTo(pageComponent)
                // and we probably want to close the drawer when changing pages
                this.closeDrawer()
            }
        }
    }
</script>

<style scoped>

</style>