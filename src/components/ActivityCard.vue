<template>
    <div class="activity-card d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 text-center p-3">
        <router-link to="/activity/detail/blackpink">
            <div class="card">
                <img src="../assets/images/activity/blackpink.jpg" alt="">
            </div>
        </router-link>
        <router-link to="/activity/detail/blackpink">
            <h5 class="fs-18 title">BLACKPINK高雄站演唱會 2023｜BORN PINK</h5>
        </router-link>
    </div>
</template>
<style scoped>
.activity-card {
    box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}
.card {
    width: 165px;
    height: 165px;
}
@media(max-width: 768px) {
    .title {
        font-size: 14px;
    }
}
@media (max-width: 1024px) {
  .card {
    width: 105px;
    height: 105px;
  }
}

img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
}
</style>