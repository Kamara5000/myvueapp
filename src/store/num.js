import actions from './actions';
import mutations from './mutation'

const state = {
    num:1,
    name: "taiwo"
};

const getters = {
    getNum(){
        return  state.num;
    },
    getName(){
        return state.name;
    }
}

// const actions={
//     increment({commit},val){
//         commit('increaseByOne',val);
//     },

//     minus({commit}, n){
//         commit('reduceNum', n);
//     }
// };

// const mutations = {
//     increaseByOne(state, val){
        
//         state.num = state.num +val;
//     },

//     reduceNum(state, n){
//         state.num= state.num-n;
//     }
// };

export default {state, getters, actions, mutations}