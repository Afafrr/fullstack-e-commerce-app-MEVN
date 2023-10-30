<script setup>
import phones from "../json.json";
import router from "../router";

const goToPhonePage = (id) => {
  router.push({ name: "PhonePage", params: { id } });
};
</script>

<template>
  <div class="container">
    <div class="phone" v-for="phone in phones" :key="phone._id">
      <div class="image" @click="goToPhonePage(phone._id.$oid)">
        <img
          v-if="phone.image"
          :src="phone.image"
          :alt="phone.name + ' image'"
        />
        <img v-else src="../../assets/no-image-icon.jpg" alt="No image" />
      </div>
      <div class="info">
        <p class="price">{{ phone.price.$numberDouble }}</p>
        <p class="title">{{ phone.name }}</p>
        <button>Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.phone {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 350px;
  text-align: center;
  border-radius: 10px;
}
.phone:hover {
  box-shadow: 0px 3px 16px -10px rgb(0, 0, 0);
}
.image {
  height: 50%;
  padding: 15px;
  cursor: pointer;
}
.phone img {
  height: 100%;
  object-fit: contain;
}

.info {
  position: relative;
  width: 200px;
  height: 150px;
}

.info button {
  width: 90%;
  position: absolute;
  bottom: 10px;
  transform: translateX(-50%);
  color: blueviolet;
}
.price {
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title {
  overflow: hidden;
}

@media (max-width: 768px) {
  .phone {
    width: 160px;
    height: 310px;
  }
  .info {
    position: relative;
    width: 160px;
    height: 150px;
  }
}
@media (max-width: 576px) {
  .phone {
    width: 130px;
    height: 280px;
  }
  .info {
    position: relative;
    width: 130px;
    height: 150px;
  }
}
</style>
