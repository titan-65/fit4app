<template>
  <div class="app">
    <!-- Hero Start -->
    <HeroHeader
      title="Fit4App"
      subtitle="Enter the name of the girl below and see her characteristics. Dont see a girls name"
    />
    <!-- Hero End -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <input
              class="input is-link is-medium is-loading"
              type="text"
              placeholder="e.g. Alice in Wonderland"
              v-model="girlName"
              @keydown="filterGirlItems(girlName)"
            />
          </div>
        </div>
        <button class="button black" @click="addNewGirl(girlName)">Find Girl</button>
      </div>
    </section>
    <GirlPostList :girls="girlList" />
    <NewsSection />
    <BlogPost :post="post" v-for="(post, index) in blogPosts" :key="index" />
    <section class="section">
      <div id="" class="container">
        <div class="updates">
          <h1>Never miss an updates. Register for you free account today</h1>
          <router-link class="router-button button" to="#">Register For Fit4</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import { ref, reactive, computed } from 'vue'
import HeroHeader from '../components/HeroHeader.vue'
import BlogPost from '../components/BlogPost.vue'
import NewsSection from '../components/NewsSection.vue'
import GirlPostList from '../components/GirlPostList.vue'
export default {
  name: 'Home',
  components: {
    BlogPost,
    NewsSection,
    HeroHeader,
    GirlPostList,
  },
  data() {
    return {
      girlName: '',
      girlList: [
        {
          name: 'Britney',
          description:
            'Sometimes hot, sometimes not. Depends on where you meet this one.',
          image:
            'https://images.unsplash.com/photo-1574539602047-548bf9557352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80',
          rank: 34,
          likes: 125,
          rating: 3.4,
        },
        {
          name: 'Michelle',
          description:
            'Sometimes hot, sometimes not. Depends on where you meet this one.',
          image:
            'https://images.unsplash.com/photo-1515161318750-781d6122e367?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
          rank: 44,
          likes: 125,
          rating: 3.4,
        },
        {
          name: 'Brand',
          description:
            'Ghetto to the letter, stay away from the girls that you meet a bar',
          image:
            'https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80',
          rank: 24,
          likes: 125,
          rating: 3.4,
        },
      ],
      blogPosts: [
        {
          id: 1,
          title: 'How to Make Your Girl Like You!',
          description: 'This is a test of the description ',
          url: 'https://images.unsplash.com/photo-1575553940260-631fe4817fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          id: 2,
          title: 'Girls Who thinks there bosses',
          description: 'This is a test of the description',
          url: 'https://images.unsplash.com/photo-1615873279789-a50fece0adf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        },
      ],
    }
  },
}
</script>
<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.updates {
}

.router-button {
  color: white;
  background-color: #000000;
  margin-top: 3.4375rem;
}
.black {
  background-color: #000000;
  color: #ffffff;
}
</style>
