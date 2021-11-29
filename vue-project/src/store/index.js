import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const localBD = {
  page1: [
    { 'id': 1, 'date': "20.03.2020", 'category': "Food", 'value': 169 },
    { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
    { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }]
  ,
  page2: [
    { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
    { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
    { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }]
  ,
  page3: [
    { "id": 7, "date": "26.03.2020", "category": "Entertaiment", "value": 969 },
    { "id": 8, "date": "27.03.2020", "category": "Education", "value": 1500 },
    { "id": 9, "date": "28.03.2020", "category": "Food", "value": 200 }]
  ,
  page4: [
    { "id": 10, "date": "29.03.2020", "category": "Entertaiment", "value": 969 },
    { "id": 11, "date": "30.03.2020", "category": "Education", "value": 1500 },
    { "id": 12, "date": "31.03.2020", "category": "Food", "value": 200 }]

}

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: [],

    paymentListIDS: []
  },
  mutations: {
    setPaymentsListData(state, payload) {
      const newUniqIdObj = payload.filter((item) => {
        return state.paymentListIDS.indexOf(item.id) < 0
      })
      const uniqIds = newUniqIdObj.map(obj => obj.id)
      state.paymentListIDS.push(...uniqIds)
      state.paymentList.push(...newUniqIdObj)
      // state.paymentList = payload
    },
    addPaymentsListData(state, data) {
      state.paymentList.push(data)
    },
    setCategories(state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList.push(...payload)
    },
  },
  getters: {
    getPaymentsList: state => state.paymentList,

    getCategoryList: state => state.categoryList,

  },
  actions: {
    // Получение данных списка покупок
    fetchData({ commit }, page = '1') {
      return new Promise((resolve) => {
        setInterval(() => {
          const items = localBD[`page${page}`]
          resolve(items)
        }, 1000)
      })
        .then(res => {
          console.log(Object.keys(localBD).length)
          console.log(page)
          console.log(res);
          commit('setPaymentsListData', res)
        })
    },

    // Получение списка возможных категорий при заполнении формы
    loadCategories({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Сlothes'])
        }, 1000)
      })
        .then(res => {
          // запускаем изменение состояния через commit
          commit('setCategories', res)
        })
    },


  },
  modules: {
  }
})
