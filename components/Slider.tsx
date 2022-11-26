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
          'url(https://st2.depositphotos.com/1741969/7586/i/600/depositphotos_75866931-stock-photo-glitter-vintage-lights-background-light.jpg)',
      }}
      data-swiper-parallax="-23%"
    ></div>
    <SwiperSlide>
      <div className="title fw-bold" data-swiper-parallax="-300">
        Mon Portfolio
      </div>
      <hr className="border border-5" />
      <div className="subtitle fw-bolder" data-swiper-parallax="-200">
        En savoir plus
      </div>
      <hr className="border border-5" />
      <div className="text fs-5" data-swiper-parallax="-100">
        <p>
          Le contenu vient avant  le design. Un design sans contenu n’est pas un
          design, c’est une décoration ». Prenez donc le temps d’identifier le
          contenu qui s’inscrira dans votre création, vous éviterez de faire les
          choses à l’envers.
        </p>
      </div>
      <a
        className="btn btn-outline-success text-info fw-bold"
        href="/Portfolio"
      >
        Visite mon portfolio
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <div className="title fw-bold" data-swiper-parallax="-300">
        Mon Blog
      </div>
      <hr className="border border-5" />
      <div className="subtitle fw-bolder" data-swiper-parallax="-200">
        A la découverte du Web Developer
      </div>
      <hr className="border border-5" />
      <div className="text fs-5" data-swiper-parallax="-100">
        <p>
          C’est sur les épaules du développeur web que repose la responsabilité
          du bon fonctionnement d’un site internet (nouveau service, maintenance
          du site, rapidi­té…). Pour s’en assurer, il effectue de nombreux tests
          pour vérifier le bon fonctionne­ment des différentes fonctionnalités
          mises en place. Le développeur web peut aussi apporter des solutions
          aux problèmes présents dans un site déjà en ligne et détectés par le
          client ou par les internautes. Dans ce cas, le développeur procède au
          diagnostic et à la mise en ligne des corrections, sans interruption du
          fonctionnement du site. Il assure le suivi et la correction des
          problèmes rencontrés dans le temps. Le développeur effectue parfois la
          formation du client à la réception du site.
        </p>
      </div>
      <a className="btn btn-outline-success text-info fw-bold" href="/Blog">
        Visite mon blog
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <div className="title fw-bold" data-swiper-parallax="-300">
        Clone Netflix
      </div>
      <hr className="border border-5" />
      <div className="subtitle fw-bolder" data-swiper-parallax="-200">
        Mon projet
      </div>
      <hr className="border border-5" />
      <div className="text fs-5" data-swiper-parallax="-100">
        <p>
          L'enseignement de l'informatique ne peut faire de personne un
          programmeur expert plus que l'étude des pinceaux et du pigment peut
          faire de quelqu'un un peintre expert. Attention il ne faut pas mal
          interpréter cette citation, bien sûr que l'enseignement théorique est
          indispensable pour devenir développeur, mais cela ne suffit pas à
          devenir expert, il faut de l'expérience, essayer, tester, s'entrainer
          et mettre les mains dans le code pendant plusieurs années !
        </p>
      </div>
      <a className="btn btn-outline-success text-info fw-bold" href="/Netflix">
        Le clone de netflix
      </a>
    </SwiperSlide>
  </Swiper>
);

export default Slider;
