<template>
  <div>
    <PageHeader title="Sender">
      <div slot="left">Sender Page</div>
      <div slot="right">
        <ul>
          <li v-for="(msg,ind) in oldMessages" :key="ind">{{msg}}</li>
        </ul>
        <b-field>
            <b-input placeholder="Mesaj" v-model="message"></b-input>
        </b-field>
        <b-button tag="input"
                native-type="submit"
                value="Submit input"
                @click="submitMessage" />
      </div>
    </PageHeader>
    <Container>
      <h1>{{ $route.params.id }}</h1>
    </Container>
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import Container from "~/components/Container";
import socket from "~/plugins/socket.io";
import $ from "jquery";
import Swal from "sweetalert2";

export default {
  components: {
    PageHeader,
    Container
  },
  data() {
    return {
      roomID: this.$route.params.id,
      message: "",
      oldMessages: [],
    };
  },
  created() {

    socket.emit("odayaGir", this.roomID, socket.id);
    socket.emit("girisKontrol", this.roomID);

    socket.on("sayac", deger => {
      $("#sayac").text(deger);
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
    }
  }
};
</script>