const actions={
    increment({commit},val){
        commit('increaseByOne',val);
    },

    minus({commit}, n){
        commit('reduceNum', n);
    }
};

export default actions;