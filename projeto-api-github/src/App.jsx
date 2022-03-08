import { BsGithub } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import "./App.scss";

function App() {
  return (
    <>
      <div className="box">
        <div className="head">
          <i class="github-icon">
            <BsGithub />
          </i>
          <p class="title is-1">Perfil do Github</p>
          <div className="search">
            <Input placeholder="Procure seu perfil" />
            <Button icon={<AiOutlineSearch />} />
          </div>
        </div>
      </div>
      <div className="results box"></div>
    </>
  );
}

export default App;
