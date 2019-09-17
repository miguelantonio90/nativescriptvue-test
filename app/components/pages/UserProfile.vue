<template xmlns:android="">
    <Page>
        <ActionBar android:flat="true">
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="openDrawer" col="0"/>
                <Label class="title" :text="title" col="1"/>
            </GridLayout>
            <ActionItem @tap="$navigateBack"
                        ios.systemIcon="9" ios.position="left"
                        android.systemIcon="ic_menu_back" android.position="actionBar"/>
        </ActionBar>
        <GridLayout ~mainContent columns="*" rows="auto,auto">
            <ScrollView orientation="vertical">
                <StackLayout orientation="vertical">
                    <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                        <Label width="80%" text="Full name"/>
                        <Label width="80%" :text="persona.fullName"/>
                    </FlexboxLayout>
                    <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                        <Label width="80%" text="Username"/>
                        <Label width="80%" :text="persona.username"/>
                    </FlexboxLayout>
                    <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                        <Label width="80%" text="Age"/>
                        <Label width="80%" :text="persona.age"/>
                    </FlexboxLayout>
                </StackLayout>
            </ScrollView>
        </GridLayout>
    </Page>
</template>

<script>
    import SideDrawer from '../../mixins/SideDrawer'
    import {mapState} from 'vuex'

    export default {
        name: "UserProfile",
        mixins: [SideDrawer],
        computed: mapState(['persona']),
        data() {
            return {
                title: 'User Profile',
                text: 'Hello User Page!'
            }
        },
        methods: {}

    }
</script>

<style scoped>

</style>