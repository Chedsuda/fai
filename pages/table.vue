<template>
  <v-data-table
    :headers="this.$store.state.headers"
    :items="(this.data = data)"
    :items-per-page="5"
    class="elevation-1"
  />
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      data: [],
      headers: [],
    }
  },
  mounted() {
    this.data = this.$store.state.data
    this.header = this.$store.state.headers
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('เพิ่มแบบสอบถาม')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.data = data
        })
    },
  },
}
</script>
