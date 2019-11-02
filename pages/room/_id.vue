<template>
  <div>
    <PageHeader title="Sender">
      <div slot="left">Sender Page</div>
      <div slot="right">
        <b-upload v-model="dropFiles" multiple drag-drop style="margin:auto">
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Drop your files here or click to upload</p>
            </div>
          </section>
        </b-upload>
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
  created() {
    let roomID = this.$route.params.id;

    socket.emit("odayaGir", roomID, socket.id);
    socket.emit("girisKontrol", roomID);

    socket.on("sayac", deger => {
      $("#sayac").text(deger);
    });

    $("form").submit(function(e) {
      e.preventDefault();

      socket.emit("mesaj", roomID, $("#m").val());
      $("#m").val("");

      return false;
    });

    socket.on("mesaj", msj => {
      $("#messages").append($("<li>").text(msj));
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
  }
};
</script>