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
                     <img src="/vivian_intro.jpg" alt="vivian소개"> 
                  </div>
                </section>
              </swiper-slide>
              <swiper-slide>
                <section>
                  <div class="inner2">
                    <div class="music">
                      <span class="material-symbols-outlined">
                           
                      </span>
                      <p>2023.06.02</p>
                      <div class="line"></div>
                      <p>YOU</p>
                      <img src="https://cdn.v-topia.co.kr/V-Topia/Image/vivian-album.webp" alt="Thumbnail">
                      <p><a href="https://www.youtube.com/watch?v=FlemtiZsQeA
                        ">more</a></p>
                    </div> 
                    <div class="music">
                        <span class="material-symbols-outlined">
                             
                        </span>
                        <p>2023.06.02</p>
                        <div class="line"></div>
                        <p>WHAT I WANT</p>
                        <img src="https://cdn.v-topia.co.kr/V-Topia/Image/vivian-album.webp" alt="Thumbnail">
                        <p><a href="https://www.youtube.com/watch?v=I5bsHM8HC6o
                        ">more</a></p>
                    </div>
                    <div class="music">
                        <span class="material-symbols-outlined">
                             
                        </span>
                        <p>2023.06.02</p>
                        <div class="line"></div>
                        <p>HELLO MY FRIENDS</p>
                        <img src="https://cdn.v-topia.co.kr/V-Topia/Image/vivian-album.webp" alt="Thumbnail">
                        <p><a href=" https://www.youtube.com/watch?v=wcq7m82ZOXk
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
