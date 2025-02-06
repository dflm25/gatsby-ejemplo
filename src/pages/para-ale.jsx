import * as React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
      <Header showBio={false} />
      <section id="projects" class="project-container container">
        <div class="division"></div>
        <div class="content-text">
          <h2>Historia no contada</h2>
          <p>Que tal vez ya finalizo!</p>
        </div>

        <article class="blog-content">
          <p>
            Esta historia inicia con un chico y una chica cualquiera. Para dar
            algo de contexto, él se llamará Alejandro y ella, Daniela. Se
            conocieron una noche en un restaurante, al cual él la invitó.
            Alejandro ajustaba nerviosamente el reloj mientras el sonido del
            restaurante parecía opacarse. Entonces la vio. Con cada paso que
            Daniela daba hacia él, su mente no pudo evitar tararear aquella
            melodía:
          </p>
          <pre class="code">
            Pretty woman walkin' down the street Pretty woman, the kind I'd like
            to meet Pretty woman, I don't believe you, you're not the truth No
            one could look as good as you
          </pre>
          <p>
            Hablaron de todo: de sus relaciones pasadas y del estado en el que
            estaban en ese momento. Esa noche fue increíble, y le hizo recordar
            a Alejandro que aún hay mujeres que valen mucho la pena. Nació en él
            esa curiosidad de saber más de ella. Fue una noche en la cual él
            supo que sería el inicio de algo profundo, ya que Daniela era
            perfecta para él.
          </p>
          <br />
          <p>
            Cita tras cita, fueron conociéndose poco a poco. Aunque siempre
            hablaban de lo diferentes que eran, ambos compartían la convicción
            de que querían un amor de verdad. Es aquí donde Alejandro no se
            había dado cuenta de lo que debía aceptar y mejorar para hacer esa
            relación realidad.
          </p>
          <br />
          <p>
            Alejandro no se considera el más expresivo, pero sabe que cuando
            quiere de verdad, se preocupa por esa persona. Su forma de demostrar
            amor se basa en ser un equipo. Esto se refleja en trabajar duro
            entre semana para que los fines de semana pueda ofrecer tiempo de
            calidad: ir por una cerveza, comer algo delicioso o prepararle el
            desayuno a Daniela. Estas son las cosas que él anhela para vivir
            momentos de tranquilidad, siempre con la convicción de que si se
            trabaja duro, eso dejará de ser solo los fines de semana para ser su
            vida soñada, con la persona que le gusta.
          </p>
          <br />
          <p>
            Como en toda gran historia de amor, siempre hay problemas.
            Alejandro, en el fondo, sabía que Daniela quería pasar más tiempo
            con él, porque es lo lógico cuando dos personas se quieren. Siempre
            pensaba en decirle: "sé mi novia", pero sus miedos lo frenaban,
            aunque en su corazón todo era claro. Con el tiempo, esto cambiaría,
            y una sola frase le daría la claridad que necesitaba. Lo que no
            sabemos es si será demasiado tarde para cuando lo haga.
          </p>
          <br />
          <p>
            Alejandro y Daniela no sabían cómo manejar esta situación: ella
            tenía algo en mente y él otra cosa. Y una tarde, todo terminó.
            Daniela decidió no seguir más con la relación y sacar a Alejandro de
            su corazón. Esto para Alejandro fue una dura caída, sobre todo
            porque sentía impotencia, sabiendo que cuando Daniela decía "no",
            era un no definitivo.
          </p>
          <br />
          <p>
            Los días sin ella fueron muy tristes. En cada momento, Alejandro
            pensaba en Daniela, siempre imaginando cómo sería estar con ella en
            cada lugar que visitaba, cada plato nuevo que pedía, cada trago que
            tomaba. Una tarde, Alejandro se sentó a tomar una cerveza, y en el
            fondo, una canción nuevamente le recordó uno de esos momentos
            perfectos con Daniela.
          </p>
          <pre class="code">
            Feel the rain on your skin No one else can feel it for you Only you
            can let it in No one else, no one else Can speak the words on your
            lips Drench yourself in words unspoken Live your life with arms wide
            open Today is where your book begins The rest is still unwritten
          </pre>
          <p>
            Sabía que las cosas no eran perfectas, pero también sabía que, por
            primera vez, estaba dispuesto a intentarlo de verdad. Había algo en
            él que le decía que merecían otra oportunidad.
          </p>
          <br />
          <p>
            En su viaje, Alejandro experimentó un momento único en la laguna de
            Humantay. Se sentó a admirar el paisaje, y un guardabosques se
            acercó para preguntarle cómo se sentía por la altura. Alejandro
            respondió que bien, aunque un poco cansado, pero que la vista valía
            la pena.
          </p>
          <p>
            En ese momento, el guardabosques le hizo una pregunta acompañada de
            un consejo: "¿Te cuesta ser feliz? Permítete ser feliz, se nota que
            te cuesta recibir y mostrar amor, o aceptar las cosas buenas y el
            amor que llega a tu vida."
          </p>
          <br />
          <p>
            Alejandro regresó decidido a recuperar a Daniela, pero ella ya había
            tomado una decisión, y él tendría que vivir con eso: perder a
            alguien que valía la pena por sus miedos. Solo espera que Daniela lo
            recuerde por los mejores momentos que pasaron juntos. Alejandro
            siempre tendrá en su mente: <strong>TE QUIERO, FLACA</strong>.
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Daniel Lucumi | Software Engineer</title>;
