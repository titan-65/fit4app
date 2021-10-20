<template>
  <div class="column">
    <div class="card">
      <div class="card-header">
        <h1 class="card-header-title black">
          {{ item.name }}
        </h1>
      </div>
      <div class="card-image">
        <figure class="image">
          <img :src="girl.image" :alt="girl.name" />
        </figure>
      </div>

      <div class="card-content">
        <p>{{ item.description }}</p>
      </div>
      <div class="card-footer girl-stats">
        <div id="" class="columns">
          <div class="column">
            <p class="has-text-centered">Ranks: #{{ item.rank }}</p>
            <div>
              <p class="has-text-centered">
                Likes:
                <span><img :src="heartIcon" class="likes-heart" @click="addLikes" /></span
                >{{ item.likes }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heartIcon from '../assets/icons/heart.svg'
export default {
  name: 'girl-post-list-item',
  props: {
    girl: {
      type: Object,
    },
  },
  data() {
    return {
      likes: null,
      heartIcon: heartIcon,
      item: this.girl,
    }
  },
  computed: {
    addLikes: {
      get() {
        return this.item.likes
      },
      set(newValue) {
        const newCount = newValue++
        this.likes = newCount
      },
    },
  },
  methods: {},
}
</script>

<style scoped>
.black {
  background-color: #000000;
  color: #ffffff;
}
.girl-stats {
  height: auto;
  border: solid black 1px;
}
.likes-heart {
  fill: white;
  height: 1.5625rem;
  width: 1.5625rem;
}
</style>
