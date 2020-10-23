export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Sex',
      align: 'start',
      sortable: false,
      value: 'sex',
    },
    { text: 'Age', value: 'age' },
    { text: 'Money', value: 'money' },
    { text: 'Frequency', value: 'fqc' },
    { text: 'Cost', value: 'cost' },
    { text: 'Times', value: 'times' },
    { text: 'Time period', value: 'tp' },
    { text: 'Who', value: 'who' },
  ],
})
export const mutations = {
  input(state, { sex, age, money, fqc, cost, times, tp, who }) {
    state.data.push({ sex, age, money, fqc, cost, times, tp, who })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
