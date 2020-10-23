<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h1>แบบสอบถาม เรื่องพฤติกรรมผู้บริโภคที่เข้าใช้ร้าน Coffee Shop</h1>
    <v-container fluid>
      <p>{{ radios || '1.) เพศ' }}</p>
      <v-radio-group v-model="sex" :mandatory="false">
        <v-radio label="หญิง" value="หญิง"></v-radio>
        <v-radio label="ชาย" value="ชาย"></v-radio>
      </v-radio-group>
      <p>{{ radios || '2.) อายุ' }}</p>
      <v-radio-group v-model="age" :mandatory="false">
        <v-radio label="ต่ำกว่า 20 ปี" value="ต่ำกว่า 20 ปี"></v-radio>
        <v-radio label="20 - 30 ปี" value="20 - 30 ปี"></v-radio>
        <v-radio label="31 - 40 ปี" value="31 - 40 ปี"></v-radio>
        <v-radio label="41 - 60 ปี" value="41 - 60 ปี"></v-radio>
        <v-radio label="60 ปีขึ้นไป" value="60 ปีขึ้นไป"></v-radio>
      </v-radio-group>
      <p>{{ radios || '3.) รายได้/เดือน' }}</p>
      <v-radio-group v-model="money" :mandatory="false">
        <v-radio
          label="ต่ำกว่า 15,000 บาท"
          value="ต่ำกว่า 15,000 บาท"
        ></v-radio>
        <v-radio
          label="15,001 – 20,000 บาท"
          value="15,001 – 20,000 บาท"
        ></v-radio>
        <v-radio
          label="20,001 - 30,000 บาท"
          value="20,001 - 30,000 บาท"
        ></v-radio>
        <v-radio label="30,001 บาทขึ้นไป" value="30,001 บาทขึ้นไป"></v-radio>
      </v-radio-group>
      <p>{{ radios || '4.) ความถี่ในการใช้บริการ Coffee Shop ของท่าน ' }}</p>
      <v-radio-group v-model="fqc" :mandatory="false">
        <v-radio
          label="1 - 2 ครั้งต่อสัปดาห์"
          value="1 - 2 ครั้งต่อสัปดาห์"
        ></v-radio>
        <v-radio
          label="3 - 4 ครั้งต่อสัปดาห์"
          value="3 - 4 ครั้งต่อสัปดาห์"
        ></v-radio>
        <v-radio
          label="5 - 6 ครั้งต่อสัปดาห์"
          value="5 - 6 ครั้งต่อสัปดาห์"
        ></v-radio>
        <v-radio
          label="มากกว่า 6 ครั้งต่อสัปดาห์"
          value="มากกว่า 6 ครั้งต่อสัปดาห์"
        ></v-radio>
      </v-radio-group>
      <p>
        {{
          radios || '5.) ค่าใช้จ่ายโดยเฉลี่ยในการใช้บริการ Coffee Shop ของท่าน '
        }}
      </p>
      <v-radio-group v-model="cost" :mandatory="false">
        <v-radio label="น้อยกว่า 80 บาท" value="น้อยกว่า 80 บาท"></v-radio>
        <v-radio label="81 - 160 บาท" value="81 - 160 บาท"></v-radio>
        <v-radio label="161 - 200 บาท" value="161 - 200 บาท"></v-radio>
        <v-radio
          label="มากกว่า 201 บาทขึ้นไป"
          value="มากกว่า 201 บาทขึ้นไป"
        ></v-radio>
      </v-radio-group>
      <p>{{ radios || '6.) ช่วงเวลาใดที่ท่านมาใช้บริการบ่อยที่สุด' }}</p>
      <v-radio-group v-model="times" :mandatory="false">
        <v-radio label="10.00 – 12.00 น." value="10.00 – 12.00 น."></v-radio>
        <v-radio label="12.01 – 14.00 น." value="12.01 – 14.00 น."></v-radio>
        <v-radio label="14.01 – 16.00 น." value="14.01 – 16.00 น."></v-radio>
        <v-radio label="16.01 – 18.00 น." value="16.01 – 18.00 น."></v-radio>
        <v-radio label="18.01 – 20.00 น." value="18.01 – 20.00 น."></v-radio>
      </v-radio-group>
      <p>{{ radios || '7.) ระยะเวลาที่ใช้บริการในแต่ละครั้ง' }}</p>
      <v-radio-group v-model="tp" :mandatory="false">
        <v-radio label="น้อยกว่า 30 นาที" value="น้อยกว่า 30 นาที"></v-radio>
        <v-radio
          label="30 นาที - 1 ชั่วโมง"
          value="30 นาที - 1 ชั่วโมง"
        ></v-radio>
        <v-radio
          label="1 ชั่วโมง – 2 ชั่วโมง"
          value="1 ชั่วโมง – 2 ชั่วโมง."
        ></v-radio>
        <v-radio
          label="ตั้งแต่ 2 ชั่วโมงขึ้นไป"
          value="ตั้งแต่ 2 ชั่วโมงขึ้นไป"
        ></v-radio>
      </v-radio-group>
      <p>{{ radios || '8.) ส่วนใหญ่ท่านมาใช้บริการกับใคร ' }}</p>
      <v-radio-group v-model="who" :mandatory="false">
        <v-radio label="คนเดียว" value="คนเดียว"></v-radio>
        <v-radio label="แฟน" value="แฟน"></v-radio>
        <v-radio label="เพื่อน" value="เพื่อน"></v-radio>
        <v-radio
          label="ครอบครัว (พ่อ, แม่, พี่, น้อง)"
          value="ครอบครัว (พ่อ, แม่, พี่, น้อง)"
        ></v-radio>
      </v-radio-group>
    </v-container>

    <v-btn color="success" class="mr-4" @click="addData"> submit </v-btn>
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      sex: 'null',
      age: 'null',
      money: 'null',
      fqc: 'null',
      cost: 'null',
      times: 'null',
      tp: 'null',
      who: 'null',
    }
  },
  methods: {
    addData() {
      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        sex: this.sex,
        age: this.age,
        money: this.money,
        fqc: this.fqc,
        cost: this.cost,
        times: this.times,
        tp: this.tp,
        who: this.who,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('เพิ่มแบบสอบถาม')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
        .then(function () {
          alert('เพิ่มข้อมูลสำเร็จ')
        })
    },
    reset() {},
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url('https://cdn.pixabay.com/photo/2020/03/08/15/49/coffee-4912804_960_720.jpg');
  background-size: 1700px;
}
</style>
