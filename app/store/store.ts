import Vue from 'vue';
import Vuex from 'vuex';
import SideDrawer from './modules/SideDrawer'
import Mutations from "@/store/mutation-types";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        personas: [],
        persona: {
            _id: '',
            fullName: '',
            username: '',
            password: '',
            age: ''
        }
    },
    mutations: {
        [Mutations.ADD_PERSON]: (state, {persona}) => {
            state.personas.push(persona)
        },
    },
    getters: {
        getPerson: state => {
            return state.persona;
        },
    },
    actions: {
        addPerson: function ({commit, state}, {persona}) {
            Promise.resolve(persona)
        },
    },
    modules: {
        SideDrawer
    }
});
