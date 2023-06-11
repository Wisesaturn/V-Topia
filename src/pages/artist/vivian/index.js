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
                    <p>#표정부자 #페르소나 #눈물찔찔이 #프로공감러 #ENFP
메타버스 세계 'V-Topia'에 혜성처럼 나타난 버추얼 아티스트 비비안! 밝고 명랑한 성격의 소유자. 
'역경을 이겨내고 핀 꽃이 가장 아름다운 법이다.'라는 좌우명을 가지고 대중들에게 희망과 행복의 메세지를 전달하는 아티스트이다.
최근 발매한 데뷔 앨범 'Who am I'를 통해 밝은 노래는 물론 감성충만한 노래까지 다양한 장르의 스펙트럼을 소화하는 모습을 보여준다.</p>
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
