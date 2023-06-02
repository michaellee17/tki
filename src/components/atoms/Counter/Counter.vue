<template>
  <div class="d-flex w-100">
    <div
      class="row Counter d-inline-flex h-50  bg-white"
      :class="counterInnerClass"
    >
      <div
        class="counter-col col-3 border-end col-time text-center"
        v-if="fullLength"
      >
        <div class="time-counter">
          <span class="time fw-light text-primary fs-6 ">{{
            dateDiff.months
          }}</span>
        </div>
        <div class="time-type-counter">
          <span class="time-type text-secondary">Months</span>
        </div>
      </div>

      <div class="counter-col col-3 border-end col-time text-center">
        <div class="time-counter d-flex flex-column">
          <span class="time  text-primary fs-6 ">{{ dateDiff.days }}</span>
          <span class="time-type text-secondary">Days</span>
        </div>
      </div>

      <div class="counter-col col-3 border-end col-time text-center ">
        <div class="time-counter d-flex flex-column">
          <span class="time  text-primary fs-6">{{ dateDiff.hours }}</span>
          <span class="time-type text-secondary">Hours</span>
        </div>
      </div>
      <div class="counter-col col-3 border-end col-time text-center ">
        <div class="time-counter d-flex flex-column d-flex flex-column">
          <span class="time  text-primary fs-6">{{ dateDiff.minutes }}</span>
          <span class="time-type text-secondary">Minutes</span>
        </div>
      </div>
      <div class="counter-col col-3  col-time text-center ">
        <div class="time-counter d-flex flex-column d-flex flex-column">
          <span class="time text-primary fs-6 mr-2 p-0 m-0">{{
            dateDiff.seconds
          }}</span>
          <span class="time-type text-secondary ">Seconds</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(() => {
      this.dateDiffc();
    }, 1000);
  },
  props: {
    endDate: {
      type: Date,
    },
    fullLength: {
      type: Boolean,
    },
    counterInnerClass: {
      type: String,
    },
  },
  data() {
    return {
      dateDiff: { days: 0, hours: 0, minutes: 0, seconds: 0, months: 0 },
    };
  },
  methods: {
    dateDiffc() {
      var delta = Math.abs(this.endDate - new Date()) / 1000;

      var months = Math.floor(delta / 86400) % 30;
      delta -= months * 86400;

      var days = Math.floor(delta / 86400);
      delta -= days * 86400;

      // calculate (and subtract) whole hours
      var hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      // calculate (and subtract) whole minutes
      var minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;

      // what's left is seconds
      var seconds = Math.ceil(delta % 60);

      this.dateDiff = { days, hours, minutes, seconds, months };
    },
  },
};
</script>
<style scoped="scoped">
.time-type {
  font-size: 10px;
}
.time {
  font-weight: 400;
  font-size: 20px !important;
  color: var(--primary-color) !important;
}

.Counter {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  height: 80px;
}
@media (max-width: 1024px) {
  .time-type {
    font-size: 8px;
  }
  .Counter .col-3 {
    padding: 7px 0 !important;
  }
  .time {
    font-size: 15px !important;
  }
}
@media (max-width: 767.98px) {
  .time-type {
    font-size: 8px;
  }
  .Counter .col-3 {
    padding: 7px 0 !important;
  }
  .time {
    font-size: 15px !important;
  }
  .col-time {
    padding: 0 !important;
  }

  .Counter {
    margin: 0px !important;
    width: 100%;
  }
}
</style>
