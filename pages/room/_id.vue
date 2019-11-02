<template>
  <div>
    <Container id="cont">
      <MessageBox @change="scrollBox">
        <MessageCard v-for="(msg,ind) in oldMessages" :key="ind">{{msg}}</MessageCard>
      </MessageBox>
      <div style="display:flex;">
        <b-field style="width:100%">
            <b-input placeholder="Mesaj" v-model="message" @keyup.native.enter="submitMessage"></b-input>
        </b-field>
        <b-button tag="input"
          native-type="submit"
          value="Submit input"
          @click="submitMessage" />
      </div>
    </Container>
  </div>
</template>
<script>
import Container from "~/components/Container";
import socket from "~/plugins/socket.io";
import Swal from "sweetalert2";
import MessageBox from "~/components/MessageBox";
import MessageCard from "~/components/MessageCard";

export default {
  components: {
    Container,
    MessageBox,
    MessageCard
  },
  data() {
    return {
      roomID: this.$route.params.id,
      message: "",
      oldMessages: [],
      sayac: 0,
    };
  },
  created() {

    socket.emit("odayaGir", this.roomID, socket.id);
    socket.emit("girisKontrol", this.roomID);

    socket.on("sayac", deger => {
      this.sayac=deger;
      console.log(this.sayac);
    });

    socket.on("mesaj", msj => {
      this.oldMessages.push(msj);
      console.log(msj);
    });

    socket.on("odaDolu", () => {
      Swal.fire({
        type: "error",
        title: "HATA",
        text: "Oda dolu. Odada 2 kişi olabilir.",
        confirmButtonText: "Ana Sayfaya Git"
      }).then(result => {
        if (result.value) {
          this.$router.push("/");
        } else {
          this.$router.push("/");
        }
      });
    });

    socket.on("sureDoldu", () => {
      Swal.fire({
        type: "warning",
        title: "Zaman Doldu",
        text: "Odanın süresi bitti.",
        confirmButtonText: "Ana Sayfaya Git"
      }).then(result => {
        if (result.value) {
          this.$router.push("/");
        } else {
          this.$router.push("/");
        }
      });
    });
  },
  methods: {
    submitMessage: function (event) {
      socket.emit("mesaj", this.roomID, this.message);
      this.message="";
      return false;
    },
    scrollBox: function(e){
      let elmnt = document.getElementsByClassName("MessageBox")[0];
      elmnt.scrollTop = 9999999;
    }
  }
};
</script>
<style >
#cont{
  margin: 50px auto;
}
</style>