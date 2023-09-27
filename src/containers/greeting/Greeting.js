import { Fade } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles/greeting.scss';
const Greeting = () => {
  const [show, setShow] = useState(true);
  const props = useSpring({
    opacity: show ? 1 : 0,
    config: {
      duration: 200,
    },
  });
  return (
    <Fade in={true} timeout={1000}>
      <div className="g-container">
        <div>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aut atque pariatur exercitationem provident dolore ab, commodi
            adipisci praesentium harum nemo deserunt quam incidunt nostrum
            aliquam vero eligendi consequuntur neque! Iusto molestiae adipisci
            accusamus dolorum ratione tenetur tempore ut corrupti, nam maxime
            minus culpa deleniti totam neque distinctio optio veniam libero
            esse, sunt rerum dolore voluptates excepturi? Ea, tempore impedit?
            Suscipit sequi labore, iure deserunt quo officia quasi, eum,
            consequatur et sunt accusantium error aperiam qui itaque corrupti
            cum deleniti facere libero nostrum! Adipisci dicta rerum nobis vitae
            ex at!
          </h4>
        </div>
        <animated.div style={props}>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odit
            quas. Temporibus, ullam odio sit sed qui doloribus. Id maxime aut
            magni? Dolor magni qui nihil dolore illum aut! Quaerat. Adipisci
            mollitia dolor optio, quasi, amet quas totam nesciunt voluptatum
            repudiandae quaerat expedita deserunt repellat natus ullam aperiam,
            at velit tempore! Quam explicabo sint tempora magni, aperiam
            accusamus quod pariatur? Modi saepe consectetur impedit quae soluta
            incidunt ex aperiam ipsa similique? Harum explicabo qui veritatis
            labore numquam, unde ea dolores assumenda? Molestias officia
            consectetur nobis! Laudantium iste eum harum voluptas? Nulla
            pariatur dolore unde perferendis! Illum consequuntur optio, dicta
            accusamus excepturi cupiditate, illo perferendis at, libero dolorem
            nihil. Facere tenetur non quia animi earum voluptates quisquam
            aperiam nulla cupiditate fugit.
          </h6>
        </animated.div>
      </div>
    </Fade>
  );
};

export default Greeting;
