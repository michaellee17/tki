<template>
  <h5 v-if="!$store.state.appView.view" class="fs-18 text-secondary mb-3">選擇位置</h5>
  <div ref="seatTable" class="seat-table">
    <div class="zoom-in">
      <div class="text-center text-white bg-primary fs-5 stage">舞台面向</div>
      <div class="p-4 d-flex flex-column gap-2 justify-content-center align-items-center">
        <div v-for="rows in seatData" :key="rows.row">
          <div :id="rows.row">
            <img
              v-for="(seat, i) in rows.status" :key="i + seat"
              src="../../../../assets/images/icons/seat.svg" alt="seat" :data-status="seat" 
              @click.prevent="changeStatus(i, seat, $event)">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!$store.state.appView.view" class="d-flex justify-content-between mt-3">
    <button type="button" class="btn btn-info" @click="zoomIn">放大</button>
    <router-link to="type">
      <button type="button" class="btn btn-outline-primaryA">上一步</button>
    </router-link>
    <router-link to="">
      <button type="button" class="btn btn-outline-primaryA">下一步</button>
    </router-link>
  </div>
  <img src="../../../../assets/images/activity/seat-table.png" class="img-fluid" alt="">
</template>
<script>
export default {
    data() {
        return {
            seatData: [
                { 
                    row: 'a',
                    status: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                { 
                    row: 'b',
                    status: [ 1, 1, 1, 1, 1, 1 ]
                },
                { 
                    row: 'c',
                    status: [ 2, 2, 2, 2, 2, 2 ]
                },
            ]
        }
    },
    methods: {
        changeStatus(i, status, event) {
            const rowId = event.target.parentElement.id;
            this.seatData.forEach( item => {
                if(item.row === rowId) {
                    item.status[i] = (status === 0)? 1: 0
                }
            }
            )
        },
        zoomIn() {

        }
    }
}
</script>

<style scoped lang="scss">
.stage {
    width: 100%;
    padding: 5px;
    clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%, 0 0%)
}
.seat-table {
    height: 500px;
    background-color: var(--bs-gray-300);
    overflow: scroll;
    white-space: nowrap;
    & img {
        padding: 0 3px;
    }
    // 可選但未選
    & img[data-status="0"] {
        filter: var(--white-filter)
    }
    & img[data-status="0"]:hover {
        filter: var(--primary-filter);
        cursor: pointer;
    }
    // 已選
    & img[data-status="1"] {
        filter: var(--primary-filter)
    }
    & img[data-status="1"]:hover {
        cursor: pointer;
    }
    // 不可選
    & img[data-status="2"] {
        filter: var(--grey-filter)
    }
    & img[data-status="2"]:hover {
        cursor: not-allowed;
    }
}
.zoom-in {
    transform:scale(2)
}
</style>