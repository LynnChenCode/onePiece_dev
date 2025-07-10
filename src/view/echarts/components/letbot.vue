<template>
  <div class="number">
          <div class="number__text">总收益</div>
          <div class="digital-number">
            <div v-for="(item, index) in numbers1" :key="'number' + index" class="digital-number-item">{{ item }}</div>
          </div>
          <div class="number__text">万元</div>
        </div>
      <div
        class="data-loading-container"
         :data="list"
         >
          <div class="spinning-ball mt-20">
            <div class="spinning-ball__bottom"></div>
            <div class="spinning-ball__wrapper">
              <div class="spinning-ball__content">
                <div
                  v-for="(item, index) in list"
                  :key="'' + index"
                  :class="[`ball ball${index + 1}`, isHover && 'stop-move']"
                  @mouseenter="isHover = true"
                  @mouseleave="isHover = false"
                >
                  <div class="spinning-ball__title">{{ item.name }}</div>
                </div>
              </div>
            </div>
          </div>
  
      </div>
</template>

<script setup>
import { ref } from "vue";
const isHover = ref(false);
const props=defineProps({msg2:[],msg21:[]})

const list =props.msg2
let numbers1 = props.msg21
</script>

<style lang="scss" scoped>
@import "@/style/screen-mixin.scss";

.data-loading-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.data-loading-container) {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: inherit;
}

.spinning-ball {
  width: 100%;
  height: 100%;
  position: relative;

  &__wrapper {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
  }

  &__content {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    color: #1f6f9b;
    transform-style: preserve-3d;
    transform: rotateZ(90deg) rotateY(70deg);
    transform-origin: center;
  }

  &__bottom {
    height: 38%;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: url("../assets/spinning-ball-bottom.png")
      center center no-repeat;
    background-size: 100% auto;
    opacity: 0.75;
  }

  &__title {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    width: 60%;
  }
}

.ball {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  top: 0;
  left: -15%;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  background: url("../assets/ball.png") center center no-repeat;
  background-size: auto 75%;
  animation: move 30s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    .spinning-ball__title {
      color: color(blue);
    }
  }

  &.stop-move {
    animation-play-state: paused !important;
  }

  &.ball2 {
    animation: move2 30s linear infinite;
  }

  &.ball3 {
    animation: move3 30s linear infinite;
  }

  &.ball4 {
    animation: move4 30s linear infinite;
  }

  &.ball5 {
    animation: move5 30s linear infinite;
  }

  &.ball6 {
    animation: move6 30s linear infinite;
  }
}


@keyframes move {
  from {
    transform: rotateZ(0) translateX(110px) rotateZ(0) rotateY(-70deg)
      rotate(-90deg);
  }

  to {
    transform: rotateZ(360deg) translateX(110px) rotateZ(-360deg)
      rotateY(-70deg) rotate(-90deg);
  }
}

@keyframes move2 {
  from {
    transform: rotateZ(-60deg) translateX(110px) rotateZ(60deg)
      rotateY(-70deg) rotate(-90deg);
  }

  to {
    transform: rotateZ(300deg) translateX(110px) rotateZ(-300deg)
      rotateY(-70deg) rotate(-90deg);
  }
}

@keyframes move3 {
  from {
    transform: rotateZ(-120deg) translateX(110px) rotateZ(120deg)
      rotateY(-70deg) rotate(-90deg);
  }

  to {
    transform: rotateZ(240deg) translateX(110px) rotateZ(-240deg)
      rotateY(-70deg) rotate(-90deg);
  }
}

@keyframes move4 {
  from {
    transform: rotateZ(-180deg) translateX(110px) rotateZ(180deg)
      rotateY(-70deg) rotate(-90deg);
  }

  to {
    transform: rotateZ(180deg) translateX(110px) rotateZ(-180deg)
      rotateY(-70deg) rotate(-90deg);
  }
}

@keyframes move5 {
  from {
    transform: rotateZ(-240deg) translateX(110px) rotateZ(240deg)
      rotateY(-70deg) rotate(-90deg);
  }

  to {
    transform: rotateZ(120deg) translateX(110px) rotateZ(-120deg)
      rotateY(-70deg) rotate(-90deg);
  }
}

@keyframes move6 {
  from {
    transform: rotateZ(60deg) translateX(110px) rotateZ(-60deg)
      rotateY(-70deg) rotate(-90deg);
  }

  to {
    transform: rotateZ(420deg) translateX(110px) rotateZ(-420deg)
      rotateY(-70deg) rotate(-90deg);
  }
}


.number {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: .625rem;
  left: 1.1875rem;

  &__text {
    font-size: .25rem;
    margin: 0 .0625rem;
    color: #fff;
  }

  .digital-number {
    display: flex;
    justify-content: center;

    &-item {
      font-family: "Shizishijian";
      font-size: .5rem;
      width: .5rem;
      height: .625rem;
      background: #0a498f;
      border: 1px solid #54bcbc;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #00ffff;
      margin-left: .15rem;
    }
  }
}
</style>
