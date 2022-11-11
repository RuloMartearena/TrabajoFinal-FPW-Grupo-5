import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';

import Developers from './components/developers/Developers.jsx';
import DevConteiner from './components/developers/DevConteiner.jsx';
import DevJson from './components/developers/json/Developers.json';

import Guide from './components/guide/Guide.jsx';
import GuideConteiner from './components/guide/GuideConteiner.jsx';
import GuideJson from './components/guide/json/Guide.json';

import Rules from './components/rules/Rules.jsx';
import RulesJson from './components/rules/json/Rules.json';
import RulesConteiner from './components/rules/RulesConteiner.jsx';

import Games from './components/games/Games.jsx';
import GamesConteiner from './components/games/GamesConteiner.jsx';
import GamesJson from './components/games/json/Games.json';

import Ahorcadito from './ahorcadito/components/Juego';
import Ppt from './ppt/components/Juego';
import Dude from './dude/Dude';
import Arkanoid from './arkanoid/Juego';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=
            {<Home>
              <NavBar />
            </Home>
            } />
          <Route path="/Developers" element=
            {<DevConteiner>
              {DevJson.map(dev =>
                <Developers
                  lastName={dev.lastName}
                  srcImg={dev.srcImg}
                  name={dev.name}
                  description={dev.description}
                  group={dev.group}
                  gitHub={dev.gitHub}
                />
              )}
            </DevConteiner>}
          />
          <Route path="/Guide" element=
            {<GuideConteiner>
              {GuideJson.map(guide =>
                <Guide
                  instruction={guide.instruction}
                />)}
            </GuideConteiner>
            }
          />
          <Route path="/Rules" element=
            {<RulesConteiner>
              {RulesJson.map(rule =>
                <Rules
                  ruleTitle={rule.ruleTitle}
                  ruleOne={rule.ruleOne}
                  ruleTwo={rule.ruleTwo}
                  ruleThree={rule.ruleThree}
                  ruleFour={rule.ruleFour}
                  ruleFive={rule.ruleFive}
                />)}
            </RulesConteiner>}
          />
          <Route path="/Games" element=
            {<GamesConteiner>
              {GamesJson.map(game =>
                <Games
                  gameHref={game.gameHref}
                  gameImg={game.gameImg}
                />)}
            </GamesConteiner>}
          />
          <Route path="/Ahorcadito" element={<Ahorcadito />} />
          <Route path="/PPyT" element={<Ppt />} />
          <Route path="/Dude" element={<Dude />} />
          <Route path="/Arkanoid" element={<Arkanoid />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}