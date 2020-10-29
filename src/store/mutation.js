const mutations = {
    increaseByOne(state, val){
        
        state.num = state.num +val;
    },

    reduceNum(state, n){
        state.num= state.num-n;
    }
};
export default mutations;