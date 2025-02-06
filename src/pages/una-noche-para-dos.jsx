import * as React from "react";
import ConfettiExplosion from "react-confetti-explosion";

import Header from "../components/header";
import Footer from "../components/footer";
import Logo from "../assets/avlogo.webp";
import Sandwich from "../assets/sandwich.webp";
import Hamburguer from "../assets/hamburguer.webp";
import Ellos from "../assets/ellos.png";

const IndexPage = () => {
  const [isExploding, setIsExploding] = React.useState(false);
  const [showPhoto, setShowPhoto] = React.useState(false);

  const handleExplode = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
      setShowPhoto(true);
    }, 1000);
  };

  React.useEffect(() => {
    if (showPhoto) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [showPhoto]);

  return (
    <>
      <Header showBio={false} />
      <section id="projects" class="project-container container">
        <div class="division"></div>
        <div class="content-text">
          <h2>Historia no contada</h2>
          <p>Una noche para dos!</p>
        </div>
        <iframe
          src="https://open.spotify.com/embed/track/59dLtGBS26x7kc0rHbaPrq?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <br />
        <article class="blog-content">
          <p>
            Alejandro no recordaba la última vez que había estado tan nervioso.
            En su mente solo tenia el hacerla sentir especial esa noche repasaba
            cada detalle mientras esperaba a Daniela. Ella paso por el, habían
            acordado salir juntos después de otros encuentros, y aunque parecía
            seguro de sí mismo, la verdad es que estaba super nervioso por que
            para el siempre ella fue algo precioso un tesoro hecho persona.
          </p>
          <p>
            Cuando Daniela llegó, Alejandro penso wow,
            <strong>
              "que hermosa!, es quiero que el tiempo se detenga para tener este
              recuerdo por siempre"{" "}
            </strong>
            Alejandro siempre trata de asociar los momentos especiales de su
            vida con peliculas o canciones y para esta ocasion quien mejor que
            B.O.B y Bruno Mars con su cancion <strong>Nothing on you</strong>
            <pre class="code">
              Beautiful girls all over the world I could be chasing but my time
              would be wasted They got nothing on you, baby Nothing on you, baby
            </pre>
          </p>
          <p className="text-flex">
            Alejandro se sintió afortunado de estar allí con ella. Luego de
            saludarse, fueron a un Bar muy famoso en la avenida novena, sentados
            al lado de una ventana de pasillo, fue una noche de rock comida y
            conocer un poco mas de esa persona casi perfecta para el. LLego la
            mesera y creo que noto que era una de sus primeras primeras citas.
            fue super amable, Daniela pidió un sándwich, y Alejandro optó por
            una hamburguesa.
            <img src={Logo} alt="" className="logo-9" />
          </p>
          <p className="text-flex mb-2">
            <img src={Sandwich} alt="" className="logo-9" />
            <img src={Hamburguer} alt="" className="logo-9" />
          </p>
          <p>
            No era incómodo, pero tampoco fluido. Había algo, una sensación de
            expectativa, como si ambos supieran que esa noche marcaría el inicio
            de algo importante. Las palabras no fluían con facilidad, no porque
            no tuvieran temas de conversación, sino porque la energía entre
            ellos hablaba más fuerte que cualquier frase. Las miradas se
            encontraban y esquivaban. Cada sorbo de cerveza, cada pequeño gesto,
            era un intento de aliviar la ansiedad.
          </p>
          <br />
          <p>
            Despues de esa deliciosa cena, Alejandro pago la cuenta se
            dirigieron al carro de Daniela y el manejo hasta la casa de ella, en
            el camino escucharon algo de musica pero hubo muy pocas palabras, al
            llegar a la casa de Daniela, Alejandro se bajo en su mente estaba
            tengo que despedirme aqui o ella quiere que suba no era tan facil de
            decifrar, pero el solo siguio su instinto y subio con ella a su
            apartamento.
          </p>
          <p>
            Todo era oscuro en aquel lugar pero era el ambiente perfecto para
            estar con esa preciosura de mujer, Daniela se acerco el se acerco y
            en la mente de Alejandro solo estaba la escena de los suplentes
            cuando la multitud anima a Falco a besar a Annabelle, el se acerco y
            la beso, fue un beso corto pero intenso. la miro a los ojos pidiendo
            el permiso de ella para continuar y ella con su mirada dijo si, fue
            un beso largo y apasionado, fue un beso que marco el inicio de una
            historia.
          </p>
          <br />
          <iframe
            width="100%"
            height="640"
            src="https://www.youtube.com/embed/FHE_ZJvj4bo?si=XjjpYXEZB-rZinqI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <br />
          <br />
          <p>
            El le quito la blusa y empezo a besar su pecho, wow que hermosos
            penso por un momento sientiendo una sensacion de placer. Ella de
            detuvo un momento y le dijo vamos a mi cuarto y el sin dudarlo
            acepto y se dirigieron a la habitacion.
          </p>
          <p>
            Esa pequeña habitación era el lugar perfecto para que Alejandro se
            entregaron en un sentimiento que al momento era ternura y pasion
            pero este al final se convertiria en amor. Alejandro esa noche solo
            sentia esos gemidos de placer que Daniela le daba. Lo hizo entrar en
            confianza y querer mas de ella.
          </p>
          <br />
          <p>
            Cuando terminaron de hacer el amor, Alejandro se quedo dormido y
            Daniela se acosto en su pecho dandole a entender a Alejandro que eso
            no era solo de una noche, que ella queria algo mas con el.
          </p>
          <br />

          <div className="content-center">
            <>{isExploding && <ConfettiExplosion particleCount={280} />}</>
            <button onClick={handleExplode} className="button">
              Conoce nuestros Personajes
            </button>
          </div>

          <div className="text-center">
            {showPhoto && <img src={Ellos} alt="" className="foto mb-2" />}
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Daniel Lucumi | Software Engineer</title>;
