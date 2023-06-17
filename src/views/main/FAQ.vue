<template>
  <layout-default>
    <div class="container faq mt-5">
      <div class="d-flex gap-3 justify-content-start align-items-center mb-5">
        <h2>常見問題</h2>
        <h4 class="text-primary">FAQ</h4>
      </div>
      <div class="row justify-content-between mb-5">
        <div class="col-md-3">
          <ul class="faq-category">
            <li class="active">基本操作</li>
            <li>用戶</li>
            <li>主辦方</li>
            <li>平台服務</li>
          </ul>
        </div>
        <div class="col-md-8">
          <div class="accordion">
            <div class="accordion-item">
              <h2 id="headingOne" class="accordion-header">
                <button
                  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                  aria-expanded="true" aria-controls="collapseOne">
                  怎麼用手機 APP 買票？
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  成為 T-KI 會員並登入後，就能開始買票。<br>
                  如果還沒註冊，請參考「會員帳戶問題」&gt;「怎麼成為 T-KI 會員？」<br>
                  <br>
                  <ul class="step_box">
                    <li>
                      <span>第 1 步</span>
                      <div>
                        在 iOS 的 <a href="https://apps.apple.com/tw/app/T-KI-ticket/id1562083170?ign-mpt=uo%3D2" target="_blank">App Store</a> 或 Android 的 <a href="https://play.google.com/store/apps/details?id=com.userstar.T-KI.app.android.ticket" target="_blank">Google Play</a> 商店內，搜尋「T-KI」並下載 APP吧！<br>
                      </div>
                    </li>
                    <li>
                      <span>第 2 步</span>
                      <div>
                        開啟 APP後，點選您想要參加的活動。<br>
                      </div>
                    </li>
                    <li>
                      <span>第 3 步</span>
                      <div>
                        點選桃紅色的「前往購票」按鈕。<br>
                      </div>
                    </li>
                    <li>
                      <span>第 4 步</span>
                      <div>
                        選擇場次、票種及張數。<br>
                      </div>
                    </li>
                    <li>
                      <span>第 5 步</span>
                      <div>
                        確認訂單資料，並選擇取票方式後，點選「確認訂購」。<br>
                      </div>
                    </li>
                    <li>
                      <span>第 6 步</span>
                      <div>
                        依您選擇的方式進行付款，看到付款成功後，就表示您已成功買到票囉！<br>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingTwo" class="accordion-header">
                <button
                  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                  aria-expanded="false" aria-controls="collapseTwo">
                  有哪些付款方式？
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  依各活動不同。<br>
                  本平台提供「信用卡」、「超商代碼繳費」、「網路ATM轉帳」共3種付款方式；但因應各活動需求不同，實際可使用的付款方式依各活動而定，請見活動說明頁介紹。<br>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingThree" class="accordion-header">
                <button
                  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                  aria-expanded="false" aria-controls="collapseThree">
                  怎麼成為 T-KI Ticket 會員？（有哪些註冊／登入方式？）
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  我們提供以下5種會員註冊及登入方式：<br><br>
                  <span class="hightlight">電子信箱</span>：用電子信箱+手機號碼註冊 T-KI Ticket 會員帳號，註冊時，電子信箱和手機號碼都須經過驗證。<br>
                  <br>
                  <span class="hightlight">Google帳號</span>：直接綁定 Google 帳號，作為登入 T-KI Ticket 的會員帳號，並進行手機號碼驗證。<br>
                  <br>
                  <span class="hightlight">Facebook帳號</span>：直接綁定 Facebook 帳號，作為登入 T-KI Ticket 的會員帳號，並進行手機號碼驗證。<br>
                  <br>
                  <span class="hightlight">LINE帳號</span>：直接綁定 LINE 帳號，作為登入 T-KI Ticket 的會員帳號，並進行手機號碼驗證。<br>
                  <br>
                  <span class="hightlight">Apple ID</span>：直接綁定 Apple ID，作為登入 T-KI Ticket 的會員帳號，並進行手機號碼驗證。<br><br>
                  請您選擇其中一種方式來註冊，並作為往後登入使用；一旦註冊、綁定成功之後，就無法更換登入方式囉！
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingFour" class="accordion-header">
                <button
                  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                  aria-expanded="false" aria-controls="collapseFour">
                  用網站買票後，要怎麼取票？
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  為保護您的票券安全，本平台目前只能使用手機 APP 取票。<br>
                  網站上的訂單記錄，不能作為正式票券，也無法用來入場唷！<br>
                  <br>
                  只要下載「T-KI Ticket」APP 並登入後，進入「我的活動」分頁，只要看到您的票券已經在手機APP中，就完成取票了。<br>
                  <br>
                  在 iOS 的 <a href="https://apps.apple.com/tw/app/T-KI-ticket/id1562083170?ign-mpt=uo%3D2" target="_blank">App Store</a> 或 Android 的 <a href="https://play.google.com/store/apps/details?id=com.userstar.T-KI.app.android.ticket" target="_blank">Google Play</a> 商店內，搜尋「T-KI Ticket」並下載 APP吧！<br>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingFive" class="accordion-header">
                <button
                  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"
                  aria-expanded="false" aria-controls="collapseFive">
                  為什麼我沒收到手機簡訊驗證碼？
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul class="step_box">
                    <li>
                      <span>(1)</span>
                      <div>
                        可能是您填寫的手機號碼輸入錯誤，或選擇的國碼（例如：台灣為+886）有誤，請確認並修改為正確的手機號碼後，再次收取驗證碼。
                      </div>
                    </li>
                    <li>
                      <span>(2)</span>
                      <div>
                        可能因訊號不佳或網路壅塞導致無法收取驗證碼，建議您到訊號良好的地方再次收取驗證碼。
                      </div>
                    </li>
                    <li>
                      <span>(3)</span>
                      <div>
                        簡訊驗證碼屬系統大量發送的訊息，容易被判定為廣告，請確認您的手機是否有安裝攔截APP（例如：whoscall），導致簡訊接收失敗。
                      </div>
                    </li>
                    <li>
                      <span>(4)</span>
                      <div>
                        請確認您的手機是否開啟「手機勿擾模式」，導致簡訊接收失敗。
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>
  
  <script>
  import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
  import "bootstrap/dist/js/bootstrap.bundle";
  export default {
    components: {
      LayoutDefault
    },
    beforeCreate() {
      document.title = "常見問題 - T-KI";
    },
  };
  </script>
  <style scoped lang="scss">
  .faq-category {
    padding-left: 0;
  }
 .faq-category li {
  list-style-type: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  font-size: 1.25rem;
  font-weight: 500;
  &:hover, &.active {
    cursor: pointer;
    color: #fff;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color); 
  }
 }
 .accordion-button {
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1.5rem 1.25rem;
}
@media (max-width: 768px) {
  .faq-category {
    margin-bottom: 3rem;
  }
}
  </style>
  