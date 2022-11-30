import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../src/stylesHome.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper';

const Slider = () => (
  <Swiper
    style={{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }}
    speed={600}
    parallax={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Parallax, Pagination, Navigation]}
    className="mySwiper"
  >
    <div
      slot="container-start"
      className="parallax-bg"
      style={{
        'background-image':
          'url(https://www.catlante-catamarans.com/lib/data/destinations_fr/polynesie-tahiti-raiatea-11jours/photos/05_polynesie-tahiti-coucher-soleil.jpg)',
      }}
      data-swiper-parallax="-23%"
    >
      <video autoPlay loop style={{ transform: 'scaleX(2)' }}>
        <source src="https://cdn.discordapp.com/attachments/1041796094948016151/1047294689029664888/production_ID_4782483_1.mp4"></source>
      </video>
    </div>

    <SwiperSlide>
      <div className="title fw-bold text-center" data-swiper-parallax="-300">
        <hr className="border border-5" />
        MOOZ SUNSET HOUSE
      </div>
      <hr className="border border-5" />
      <div className="subtitle fw-bolder" data-swiper-parallax="-200">
        Son cadre
      </div>
      <div className="text fs-5" data-swiper-parallax="-100">
        <p>
          Situé sur l'île de Moorea, l’établissement MOOZ SUNSET HOUSE bénéficie
          d'un emplacement idéal pour pratiquer la plongée sous-marine ou avec
          tuba, entre une plage privée et un récif de corail. Les hébergements
          possèdent une terrasse ou un balcon privés offrant une vue magnifique
          sur le lagon. Vous aurez la possibilité de pêcher depuis le ponton
          privé ou de vous détendre dans un hamac sur la plage.
        </p>
      </div>
      <a className="btn btn-outline-success text-info fw-bold" href="/Services">
        Nos Services
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <div className="title fw-bold text-center" data-swiper-parallax="-300">
        <hr className="border border-5" />
        'Ia Ora Na, Maeva i 'Aimeho'
      </div>
      <hr className="border border-5" />
      <div className="subtitle fw-bolder" data-swiper-parallax="-200">
        Découvre nos chambres
      </div>
      <div className="text fs-5" data-swiper-parallax="-100">
        <p>
          Les chambres sont équipées d’une télévision. Certaines comprennent un
          coin salon propice à la détente après une journée bien remplie.
          Plusieurs offrent une vue sur la mer ou le jardin. Leur salle de bains
          privative est pourvue d’un sèche-cheveux et d’articles de toilette
          gratuits. Notre établissement compte également un bureau d’excursions.
          Vous aurez accès à une plage privée et le bureau d'excursions assure
          la location de kayaks, paddle, jet-ski et la location de voitures.
          Vous pourrez pratiquer diverses activités dans les environs, comme le
          golf et la randonnée. L’aéroport de Temae, le plus proche, se trouve à
          1 km du MOOZ SUNSET HOUSE.
        </p>
      </div>
      <a className="btn btn-outline-success text-info fw-bold" href="/Chambres">
        Nos chambres
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <div className="title fw-bold" data-swiper-parallax="-300">
        <hr className="border border-5" />
        L'histoire de 'Aimeho
      </div>
      <hr className="border border-5" />
      <div className="subtitle fw-bolder" data-swiper-parallax="-200">
        Légende
      </div>
      <div className="text fs-5" data-swiper-parallax="-100">
        <div>
          <p>
            Autrefois, Temaiatea et son épouse demeuraient à Tupuai-Manu qui
            s’appelle désormais Maiao. La femme tomba enceinte et accoucha d’un
            œuf. L’époux prit l’œuf et le porta dans une petite grotte du rivage
            nommée Vaionini où il le déposa. Une nuit, la femme eut une vision
            dans son sommeil. Elle vit qu’elle avait mis au monde un garçon tout
            jaune. Elle se réveilla et raconta ce songe à son époux. Quand vint
            le jour, l’homme partit observer l’œuf qu’il avait laissé dans la
            grotte. Les lieux atteints, il constata que l’œuf avait éclos :
            c’était un bébé lézard. Temaiatea donna à ce lézard le nom de
            Moo-rea*.
          </p>

          <p>
            Lui et sa femme nourrirent Moo-rea dans cette petite grotte jusqu’à
            ce qu’il soit grand. Il devint un lézard énorme. C’est pourquoi la
            femme prit peur et qu’elle dit à son époux : « Il nous faut
            abandonner Moo-rea , sinon, bientôt, il nous mangera. »Le mari
            n’accepta pas, disant : « C’est tout de même notre fils aîné ! »
            Mais comme le femme insistait, l’homme construisit une pirogue pour
            eux deux, ils montèrent à bord de cette pirogue, ramèrent en
            direction du levant jusqu’à Tahiti.
          </p>
        </div>
      </div>
      <a className="btn btn-outline-success text-info fw-bold" href="/Contacts">
        Nous Contacter
      </a>
    </SwiperSlide>
  </Swiper>
);

export default Slider;
