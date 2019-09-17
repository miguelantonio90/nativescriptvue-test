<template xmlns:android="">
    <Page>
        <ActionBar android:flat="true">
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="openDrawer" col="0"></Label>
                <Label class="title" :text="text" col="1"></Label>
            </GridLayout>
            <ActionItem @tap="$navigateBack"
                        ios.systemIcon="9" ios.position="left"
                        android.systemIcon="ic_menu_back" android.position="actionBar"/>
        </ActionBar>
        <GridLayout ~mainContent columns="*" rows="*">
            <TabView android:tabBackgroundColor="#53ba82"
                     android:tabTextColor="#c4ffdf"
                     android:selectedTabTextColor="#ffffff"
                     androidSelectedTabHighlightColor="#ffffff"
                     iosIconRenderingMode="alwaysOriginal">
                <TabViewItem title="Login" iconSource="~/assets/images/icon_user@3x.png">
                    <StackLayout>
                        <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                            <Label width="80%" text="Username"/>
                            <TextField width="80%" v-model="login.email"/>
                        </FlexboxLayout>
                        <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                            <Label width="80%" text="Password"/>
                            <TextField width="80%" v-model="login.password" secure="true"/>
                        </FlexboxLayout>
                        <Button width="80%" @tap="onLogin(login)" text="Login" class="btn btn-primary my-button"/>
                    </StackLayout>
                </TabViewItem>
                <TabViewItem title="Register" iconSource="~/assets/images/icon_lock@3x.png">
                    <ScrollView orientation="vertical">
                        <StackLayout orientation="vertical">
                            <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                                <Label width="80%" text="Full Name"/>
                                <TextField width="80%" v-model="persona.fullName"/>
                            </FlexboxLayout>
                            <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                                <Label width="80%" text="Username"/>
                                <TextField width="80%" v-model="persona.username"/>
                            </FlexboxLayout>
                            <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                                <Label width="80%" text="Password"/>
                                <TextField width="80%" v-model="persona.password" secure="true"/>
                            </FlexboxLayout>
                            <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                                <Label width="80%" text="Age"/>
                                <TextField width="80%" v-model="persona.age"/>
                            </FlexboxLayout>
                            <Button width="80%" @tap="onRegister" text="Create" class="btn btn-primary my-button"/>
                        </StackLayout>
                    </ScrollView>
                </TabViewItem>
            </TabView>
        </GridLayout>
    </Page>
</template>

<script>
    import SideDrawer from '../../mixins/SideDrawer'
    import {mapState} from 'vuex'

    export default {
        name: "LogsCall",
        mixins: [SideDrawer],
        computed: mapState(['persona']),
        data() {
            return {
                text: 'Login / Register',
                login: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            onLogin() {
                alert({
                    title: 'Success',
                    message: 'Your are login with Username: ' + this.login.email + ' and Password: ' + this.login.password,
                    okButtonText: 'OK'
                }).then(() => {
                    console.log('Alert dialog closed');
                    this.$navigateTo(this.$routes.Dashboard)
                });
            },
            onRegister() {
                this.$store.dispatch('addPerson', {persona: this.persona})
                alert({
                    title: 'Success',
                    message: 'Your are register by: ' + this.persona.fullName,
                    okButtonText: 'OK'
                }).then(() => {
                    console.log('Alert dialog closed');
                    this.$navigateTo(this.$routes.UserProfile)
                });
            }
        }
    }
</script>

<style scoped>
    .my-button {
        border-radius: 24;
        text-transform: uppercase;
    }
</style>