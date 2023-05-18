import './style.scss';

class VivianPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <main class="vivianPage">
          <swiper-container direction="vertical" pagination="true" pagination-clickable="true" space-between="30" mousewheel="true">
              <swiper-slide>
                <section>
                  <div class="inner">
                    <ul>
                          <li>V</li>
                          <li>I</li>
                          <li>V</li>
                          <li>I</li>
                          <li>A</li>
                          <li>N</li>

                      <span class="material-icons">
                              arrow_downward
                      </span>
                    </ul>
                  </div>
                </section>
              </swiper-slide>
              <swiper-slide>
                <section>
                  <div class="profile">
                    <img src="/vivian_ex.jpg" alt="vivian"> 
                    <p>예시. 태연은 목소리다. 청순하지만 충분히 유려하며, 농후하지만 느끼하지 않은, 쥐어짜지 않아도 움직일 수 있는 그런 목소리. 혹은 '팝'이라는 포괄적이며 관용적인 단어 하나면 더없이 직관적으로 설명될 것만 같은 그런 목소리. 태연의 보컬은 장르를 특별히 타지도 않고, 곡의 온도나 정서에 크게 좌우되지도 않는다. 하지만 예외 없이 그는 곡을 장악할 수 있다. ··· ···태연은 어느덧 아이돌 음악 신을 대표하는 '디바'라는 규정을 넘어 이제는 그 어떤 수식으로 가두기에는 아쉬운, 하지만 그 어떤 방식으로도 설명 가능한, 진정한 의미의 전방위 보컬리스트로 진화하고 있다. 그리고 이 같은 그의 성장만으로 한국 대중음악은 또하나의 신뢰할 수 있는 귀한 목소리를 얻게 되었다.</p>
                  </div>
                </section>
              </swiper-slide>
              <swiper-slide>
                <section>
                  <div class="inner2">
                    <div class="music">
                      <span class="material-symbols-outlined">
                          music_note
                      </span>
                      <p>2023.05.30</p>
                      <div class="line"></div>
                      <p>DEBUT</p>
                      <img src="/artist_album_ex.png" alt="image">
                      <p>MORE</p>
                    </div> 
                    <div class="music">
                        <span class="material-symbols-outlined">
                            music_note
                        </span>
                        <p>2023.05.30</p>
                        <div class="line"></div>
                        <p>TITLE</p>
                        <img src="/artist_album_ex.png" alt="image">
                        <p>MORE</p>
                    </div>
                    <div class="music">
                        <span class="material-symbols-outlined">
                            music_note
                        </span>
                        <p>2023.05.30</p>
                        <div class="line"></div>
                        <p>TITLE</p>
                        <img src="/artist_album_ex.png" alt="image">
                        <p>MORE</p>
                    </div>
                  </div>
                </section>
              </swiper-slide>
          </swiper-container>            
        </main>
      `;
    };

    this.render();
  }
}

export default VivianPage;

//  <swiper-slide>
//                 <content>

//                 </content>
//               </swiper-slide>
//               <swiper-slide>
//                 <content>
//                   <div class="inner2">
//                     <div class="music">
//                         <span class="material-symbols-outlined">
//                             music_note
//                         </span>
//                         <p>2023.05.30</p>
//                         <div class="line"></div>
//                         <p>DEBUT</p>
//                         <img src="/artist_album_ex.png" alt="image">
//                         <p>MORE</p>
//                     </div>
//                     <div class="music">
//                         <span class="material-symbols-outlined">
//                             music_note
//                         </span>
//                         <p>2023.05.30</p>
//                         <div class="line"></div>
//                         <p>TITLE</p>
//                         <img src="/artist_album_ex.png" alt="image">
//                         <p>MORE</p>
//                     </div>
//                     <div class="music">
//                         <span class="material-symbols-outlined">
//                             music_note
//                         </span>
//                         <p>2023.05.30</p>
//                         <div class="line"></div>
//                         <p>TITLE</p>
//                         <img src="/artist_album_ex.png" alt="image">
//                         <p>MORE</p>
//                     </div>
//                   </div>
//                 </content>
//               </swiper-slide>
