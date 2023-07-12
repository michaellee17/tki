<template>
  <h5 v-if="!$store.state.appView.view" class="fs-18 text-secondary mb-3">選擇位置</h5>
  <div ref="seatTable" class="seat-table position-relative">
    <div class="zoom-widget position-absolute">
      <div>
        <img
          src="../../../../assets/images/icons/zoom_in_default.svg" alt="zoom-in"
          @click="zoomIn">
      </div>
      <div class="mt-3">
        <img
          src="../../../../assets/images/icons/zoom_out_default.svg" alt="zoom-out"
          @click="zoomOut">
      </div>
    </div>
    <div class="stage-wrap position-absolute">
      <div class="stage  text-center text-white bg-primary fs-5">舞台面向</div>
      <div class="seat-intro d-flex justify-content-center gap-4 mt-3">
        <div class="d-flex align-items-center gap-1">
          <img src="../../../../assets/images/icons/seat.svg" :data-status="1" alt="seat-selected">
          <p class="mb-0 fs-5">已選</p>
        </div>
        <div class="d-flex align-items-center gap-1">
          <img src="../../../../assets/images/icons/seat.svg" :data-status="0" alt="seat-optional">
          <p class="mb-0 fs-5">可選</p>
        </div>
        <div class="d-flex align-items-center gap-1">
          <img src="../../../../assets/images/icons/seat.svg" :data-status="2" alt="seat-not-optional">
          <p class="mb-0 fs-5">不可選</p>
        </div>
      </div>
    </div>
    <div ref="contentWrap" class="content-wrap">
      <div ref="content" class="content ">
        <div class=" py-5 d-flex flex-column gap-2 justify-content-center align-items-center">
          <div v-for="rows in seatData" :id="rows.row" :key="rows.row" class="mx-auto">
            <img
              v-for="(seat, i) in rows.status" :id="rows.row + (i+1)"
              :key="i + seat" ref="seatIcon" src="../../../../assets/images/icons/seat.svg"
              alt="seat" draggable="false"
              class="seat-icon" :style="{ width: currentWidth + 'px' }"
              :data-status="seat" @click="updateStatus(i, seat, $event)">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!$store.state.appView.view" class="d-flex justify-content-between mt-3">
    <router-link to="type">
      <button type="button" class="btn btn-outline-primaryA">上一步</button>
    </router-link>
    <router-link to="cart">
      <button type="button" class="btn btn-outline-primaryA">下一步</button>
    </router-link>
  </div>
</template>
  <script>
  export default {
      data() {
          return {
              seatData: [
                  { 
                      row: 'a',
                      status: [ 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2 ]
                  },
                  { 
                      row: 'b',
                      status: [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2 ]
                  },
                  { 
                      row: 'c',
                      status: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                  },
                  { 
                      row: 'e',
                      status: [ 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2 ]
                  },
                  { 
                      row: 'f',
                      status: [ 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2 ]
                  },
                  { 
                      row: 'g',
                      status: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
                  },
                  { 
                      row: 'h',
                      status: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
                  },
                  { 
                      row: 'i',
                      status: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
                  },
                  { 
                      row: 'j',
                      status: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
                  },
                  { 
                      row: 'k',
                      status: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
                  },
                  { 
                      row: 'l',
                      status: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
                  },
              ],
              // 座位圖拖曳
              isDown: false, 
              startX: null, 
              startY: null,
              scrollLeft: null, 
              scrollTop: null,
              // 縮小放大
              zoomMax: 53,
              zoomMin: 25,
              currentWidth: 36
          }
      },
      mounted() {
          this.$refs.contentWrap.addEventListener('mousedown', this.handleMouseDown);
          this.$refs.contentWrap.addEventListener('mouseup', this.handleMouseUp);
          this.$refs.contentWrap.addEventListener('mousemove', this.handleMouseMove);
      },
      methods: {
          updateStatus(i, status, event) {
              const rowId = event.target.parentElement.id;
              this.seatData.forEach( item => {
                  if(item.row === rowId && status === 0) {
                      item.status[i] = 1;
                  } else if(item.row === rowId && status === 1) {
                      item.status[i] = 0;
                  }
                })
          },
          zoomIn() {
              this.$refs.seatIcon.forEach( item => {
                if (item.clientWidth < this.zoomMax) {
                this.currentWidth = Math.round(item.clientWidth * 1.2);
                  item.style.width = `${this.currentWidth}px`;
                }
              })
          },
          zoomOut() {
            this.$refs.seatIcon.forEach( item => {
              if (item.clientWidth > this.zoomMin) {
              this.currentWidth = Math.round(item.clientWidth / 1.2);
                item.style.width = `${this.currentWidth}px`;
              }
            })
          },
          handleMouseDown (e) {
              this.isDown = true;
              this.$refs.contentWrap.classList.add('active');
              this.startX = e.pageX - this.$refs.contentWrap.offsetLeft; 
              this.startY = e.pageY - this.$refs.contentWrap.offsetTop;
              this.scrollLeft = this.$refs.contentWrap.scrollLeft;
              this.scrollTop = this.$refs.contentWrap.scrollTop;
          },
          handleMouseUp () {
              this.isDown = false;
              this.$refs.contentWrap.classList.remove('active');
          },
          handleMouseMove (e) {
              if (!this.isDown) return
              e.preventDefault();
              // 按住滑鼠的終止點
              let x = e.pageX - this.$refs.contentWrap.offsetLeft;
              let y = e.pageY - this.$refs.contentWrap.offsetTop;
              // 按住滑鼠移動的距離，倍率讓滾動效果更明顯
              let walkX = (x - this.startX) * 1.5;
              let walkY = (y - this.startY) * 1.5;
              this.$refs.contentWrap.scrollLeft = this.scrollLeft - walkX;
              this.$refs.contentWrap.scrollTop = this.scrollTop - walkY;
          }
      }
  }
  </script>
  
  <style scoped lang="scss">
  .seat-table {
      background-color: var(--bs-gray-300);
      border: 1px solid transparent;
      & .content-wrap {
          height: 500px;
          overflow: auto;
          // overflow: hidden;
          @media(max-width: 768px) {
              overflow: auto;
          }
          margin-top: 6rem;
          margin-left: 5rem;
          white-space: nowrap;
          &.active {
              cursor: grabbing;
              cursor: -webkit-grabbing;
          }
      }
      & .stage-wrap {
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
      }
      & .stage {
      padding: 5px;
      clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%, 0 0%)
  }
      & .seat-intro {
          pointer-events: none;
      }
      & .zoom-widget {
          top: 50%;
          transform: translateY(-50%);
          left: 1rem;
          & img {
              filter: var(--grey-filter);
          }
          & img:hover, img:focus, img:active {
              cursor: pointer;
              filter: var(--primary-filter);
              opacity: 1;
          }
      }
      & .seat-icon {
        -webkit-user-select: none;
        user-select: none;
      }
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
  </style>