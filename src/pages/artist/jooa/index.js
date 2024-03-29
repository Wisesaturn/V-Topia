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
        <main class="JooaPage">
          <swiper-container direction="vertical" pagination="true" pagination-clickable="true" space-between="30" mousewheel="true">
              <swiper-slide>
                <section>
                  <div class="inner">
                    <ul>
                          <li>J</li>
                          <li>O</li>
                          <li>O</li>
                          <li>A</li>
                          <li>H</li>
                  

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
                    <img src="/jooa_ex.jpg" alt="jooa"> 
                     <img src="/jooa_intro.jpg" alt="jooa소개"> 
                  </div>
                </section>
              </swiper-slide>
              <swiper-slide>
                <section>
                    <div class="inner2">
                      <div class="music">
                        <span class="material-symbols-outlined">
                            
                        </span>
                        <p>2023.06.09</p>
                        <div class="line"></div>
                        <p>Sunrise</p>
                        <img src="https://cdn.v-topia.co.kr/V-Topia/Image/jooa-album.webp" alt="Thumbnail">
                        <p><a href="https://www.youtube.com/watch?v=fgMQsp0Svsk
                          ">more</a></p>
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
