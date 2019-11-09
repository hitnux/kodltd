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
      <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage" />
    </Container>
  </div>
</template>
<script>
import Container from "~/components/Container";
import socket from "~/plugins/socket.io";
import Swal from "sweetalert2";
import MessageBox from "~/components/MessageBox";
import MessageCard from "~/components/MessageCard";

import CloseIcon from 'vue-beautiful-chat/src/assets/close-icon.png'
import OpenIcon from 'vue-beautiful-chat/src/assets/logo-no-bg.svg'
import FileIcon from 'vue-beautiful-chat/src/assets/file.svg'
import CloseIconSvg from 'vue-beautiful-chat/src/assets/close.svg'



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

      icons:{
        open:{
          img: OpenIcon,
          name: 'default',
        },
        close:{
          img: CloseIcon,
          name: 'default',
        },
        file:{
          img: FileIcon,
          name: 'default',
        },
        closeSvg:{
          img: CloseIconSvg,
          name: 'default',
        },
      },
      participants: [
        {
          id: 'user1',
          name: 'Matteo',
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        },
        {
          id: 'user2',
          name: 'Support',
          imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user1`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)

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
    },


    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
  	},
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }



  }
};
</script>
<style >
#cont{
  margin: 50px auto;
}
</style>