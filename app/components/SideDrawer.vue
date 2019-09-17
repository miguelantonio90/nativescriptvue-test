<template>
    <RadSideDrawer ref="drawer" drawerLocation="Left" :gesturesEnabled="gesturesEnabled">
        <StackLayout ~drawerContent backgroundColor="#ffffff">
            <slot name="drawerContent"></slot>
        </StackLayout>
        <Frame ~mainContent>
            <slot name="mainContent"></slot>
        </Frame>
    </RadSideDrawer>
</template>

<script>
    import SideDrawer from '../mixins/SideDrawer'
    export default {
        name: "SideDrawer",
        mixins: [SideDrawer]
    }
</script>

<style scoped>

</style>


