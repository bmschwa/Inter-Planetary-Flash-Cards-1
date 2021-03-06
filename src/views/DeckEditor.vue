<template>
  <b-container class="deck-editor-main">
    <alert-failed-sync />
    <alert-offline />
    <alert-update-pwa @updatePWA="PWAUpdate(bool)" />
    <alert-browser-rec :alert-browser-rec="alertBrowserRec" />
    <b-row id="main-row">
      <b-col id="main-col">
        <b-row id="title-row">
          <b-col
            id="icon-col"
            cols="2"
            class="align-self-center"
          >
            <div
              id="icon"
              :style="{ backgroundColor: deck.icon_color }"
            >
              <p id="deck-abrev">
                <strong>{{ getTitleAbrev(deck.title) }}</strong>
              </p>
            </div>
          </b-col>
          <b-col id="text-col">
            <p
              v-if="!editingDeckTitle"
              class="text title"
              @click="toggleEditDeckTitle()"
            >
              {{ deck.title }}
            </p>
            <b-form-input
              v-if="editingDeckTitle"
              v-model="newDeckTitle"
              @keyup.enter="commitDeckTitle()"
            />
            <p class="text card-count">
              {{ deck.cards.length }} card{{ cardOrCards(deck.cards.length) }}
            </p>
            <div id="underline" />
          </b-col>
        </b-row>
        <b-row id="cards-row">
          <b-col
            id="cards-col"
            cols="12"
            style="padding: 0;"
          >
            <b-card
              v-for="card in deck.cards"
              id="card"
              :key="card.card_id"
            >
              <b-container style="padding: 0;">
                <b-row>
                  <b-col
                    v-if="card.front_image"
                    cols="5"
                  >
                    <b-img-lazy
                      v-if="card.front_image"
                      :src="card.front_image"
                    />
                  </b-col>
                  <b-col>
                    <b-card-text class="font-weight-bold">
                      {{ card.front_text }}
                    </b-card-text>
                  </b-col>
                  <b-col cols="1">
                    <font-awesome-icon
                      icon="edit"
                      class="edit"
                      @click="
                        editCard(card);
                        $emit('edit-clicked');
                      "
                    />
                  </b-col>
                </b-row>
                <hr class="divider">
                <b-row>
                  <b-col v-if="card.back_image">
                    <b-img-lazy :src="card.back_image" />
                  </b-col>
                  <b-col>
                    <b-card-text> {{ card.back_text }} </b-card-text>
                  </b-col>
                </b-row>
              </b-container>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BCard, BImgLazy, BFormInput, BCardText } from 'bootstrap-vue'
export default {
  name: 'DeckEditor',
  components: { BCard, BImgLazy, BFormInput, BCardText },
  props: { alertBrowserRec: { type: Boolean } },
  data () {
    return {
      editingDeckTitle: false,
      newDeckTitle: ''
    }
  },

  computed: {
    deck () {
      return this.$store.getters.currentDeck
    }
  },
  mounted () {
    this.$emit('homeLoad')
  },
  methods: {
    toggleEditDeckTitle () {
      this.newDeckTitle = this.deck.title
      this.editingDeckTitle = !this.editingDeckTitle
    },
    commitDeckTitle () {
      // check to make sure it was changed
      this.deck.title = this.newDeckTitle
      this.$store.commit('updateDeck', this.deck)
      this.toggleEditDeckTitle()
    },
    editCard (card) {
      this.$store.commit('updateCardToEditIndex', this.deck.cards.indexOf(card))
      this.$router.push('/card-editor')
    },
    cardOrCards (deckLength) {
      if (deckLength === 1) {
        return ''
      } else {
        return 's'
      }
    },
    getTitleAbrev (title) {
      // There shouldn't be any empty title decks, but we can leave this validation here just in case
      if (title === '') {
        return ''
      } else {
        const split = title.split(' ')[0]
        let abrev
        if (split.length === 1) {
          abrev = split[0].charAt(0) + split[0].charAt(1)
        } else {
          abrev = split[0].charAt(0) + split[1].charAt(0)
        }
        return abrev
      }
    },
    PWAUpdate (bool) {
      this.$emit('updatePWA', bool)
    }
  }
}
</script>

<style scoped>
#card {
  margin: 10px 10px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
}
.edit {
  color: gray;
}
.edit:hover {
  cursor: pointer;
  color: black;
}
.deck-editor-main {
  overflow-y: auto;
}
.deck-editor-main::-webkit-scrollbar {
  width: 0em;
}
#main-row {
  margin: 15px 15px 0px 10px;
  margin-top: 15px;
}
#main-col {
  margin: auto;
  max-width: 600px;
  padding: 15;
}
#title-row {
  width: 100%;
}
#text-col {
  padding: 0px 0px 10px 20px;
}
#underline {
  position: absolute;
  bottom: 0px;
  left: 20px;
  height: 1px;
  width: 75%;
  background-color: rgba(0, 0, 0, 0.5);
}
#edit-col {
  padding: 0;
  margin: auto;
  width: 10px;
}
#icon-col {
  width: 50px;
  height: 50px;
}
#icon:hover {
  cursor: pointer;
}
#icon {
  width: 46px;
  height: 46px;
  border-radius: 23px;
  text-align: center;
  font-size: 28px;
  color: white;
  margin: auto;
}
#deck-abrev {
  margin: 0;
}
.text {
  padding: 0px 0px 0px 10px;
  margin: 0px;
}
.text:hover {
  cursor: pointer;
}
.card-count {
  font-size: 0.8em;
  color: dimgray;
}
.title {
  font-size: 1.2em;
}
img {
  width: 100%;
}
</style>
