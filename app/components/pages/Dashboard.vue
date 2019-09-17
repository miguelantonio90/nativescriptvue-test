<template xmlns:android="">
    <Page>
        <ActionBar android:flat="true">
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="openDrawer" col="0"/>
                <Label class="title" :text="title" col="1"/>
            </GridLayout>
        </ActionBar>
        <GridLayout ~mainContent columns="*" rows="*">
            <TabView android:tabBackgroundColor="#53ba82"
                     android:tabTextColor="#c4ffdf"
                     android:selectedTabTextColor="#ffffff"
                     androidSelectedTabHighlightColor="#ffffff"
                     androidTabsPosition="bootom">
                <TabViewItem title="Tab 1">
                    <GridLayout columns="*" rows="*">
                        <Label class="message" :text="text" col="0" row="0"></Label>
                    </GridLayout>
                </TabViewItem>
                <TabViewItem title="Tab 2">
                    <GridLayout columns="*" rows="*">
                        <Label class="message" text="Tab 2 Content" col="0" row="0"></Label>
                    </GridLayout>
                </TabViewItem>
                <TabViewItem title="Tab 3">
                    <GridLayout columns="*" rows="*">
                        <Label class="message" text="Tab 3 Content" col="0" row="0"></Label>
                    </GridLayout>
                </TabViewItem>
            </TabView>
        </GridLayout>
    </Page>
</template>

<script>
    import SideDrawer from '../../mixins/SideDrawer'
    import {mapState} from 'vuex'

    export default {
        name: "Dashboard",
        mixins: [SideDrawer],
        computed: mapState(['persona']),
        data() {
            return {
                title: 'Home',
                text: 'Hello to Home Page and more!',
            }
        }
    }
</script>

<style scoped>

</style>