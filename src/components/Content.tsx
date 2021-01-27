import React from "react";
import { Fade } from '@material-ui/core';
import Element from './Element';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SlowMotionVideoOutlinedIcon from '@material-ui/icons/SlowMotionVideoOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

type State = {
  phase: number;
  canDestroyComponent: boolean;
}

export class Content extends React.Component<any, State> {

  state = {
    phase: 1,
    canDestroyComponent: false
  }

  goToNextPhase = () => {
    this.setState({ phase: this.state.phase + 1 });
  }

  changeStateComponentDestroyButton = () => {
    this.setState({ canDestroyComponent: !this.state.canDestroyComponent });
  }

  goToPhase = (param: number) => {
    this.setState({ phase: param });
    this.changeStateComponentDestroyButton();
  }


  render() {

    let { phase, canDestroyComponent } = this.state;

    return (
      <div className="content">
        <div className="section">
          <Fade in={phase === 1} timeout={2000}>
            <div>
              {
                phase === 1 &&
                <div className="start">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<PlayArrowIcon />}
                    onClick={this.goToNextPhase}>Press Start</Button>
                </div>
              }
            </div>
          </Fade>
          <Fade in={phase === 2} timeout={2000} >
            <div>
              {
                phase === 2 &&
                <div>
                  <p>Neste tutorial, você será responsável por iniciar cada bloco do ciclo de vida de um componente React,
                  quando você fizer isso, o seu browser irá apresentar por meio de alerts() cada função que o ciclo de vida do React naturalmente executa.
                  Espero que isso lhe ajude em seus aprendizados, bora começar?
                  </p>
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.goToNextPhase}>Vamos lá!</Button>
                </div>
              }
            </div>
          </Fade>
          <Fade in={phase === 3} timeout={2000} >
            <div>
              {
                phase === 3 &&
                <div>
                  <h2>Fase 1 - Mounting (Criação) </h2>
                  <p>Você deve cliar no botão abaixo para ativar a criação de um elemento em React e dar ínicio ao processo</p>
                  <p><b>Preste muita atenção nas caixas de diálogo que aparecerão logo acima.</b></p>
                  <br/>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SlowMotionVideoOutlinedIcon />}
                    onClick={this.goToNextPhase}>Criar elemento</Button>
                </div>
              }
            </div>
          </Fade>
          <Fade in={phase === 4} timeout={2000}>
            <div>
              {
                phase === 4 &&
                <div>
                  <h2>Fase 2 - Updating (Criação) </h2>
                  <p>Agora, vamos ver na prática como o ciclo de vida Updating se comporta, atualize nosso componente clicando no botão</p>
                  <Element updated={this.changeStateComponentDestroyButton} />
                  {
                    canDestroyComponent &&
                    <Fade in={canDestroyComponent} timeout={2000}>
                      <div>
                        <p>Legal né? Você pode repetir a atualização da fase 2 quantas vezes quiser. Quando decidir ir para o próximo e último ciclo de vida, clique no botão abaixo</p>
                        <Button
                          variant="contained"
                          color="primary"
                          endIcon={<DeleteOutlineIcon />}
                          onClick={this.goToNextPhase}>Destruir o componente</Button>
                      </div>
                    </Fade>
                  }
                </div>
              }
            </div>
          </Fade>
          <Fade in={phase === 5} timeout={2000}>
            <div>
              {phase === 5 &&
                <div>
                  <h2>Fase 3 - Unmounting (Desmontagem)</h2>
                  <p>Essa fase acabou de ocorrer, ao clicar no botão, acionamos uma função que destruia nosso componente, você percebeu o alert apresentado?</p>
                  <Button
                    className="buttons"
                    variant="contained"
                    color="primary"
                    endIcon={<RotateLeftOutlinedIcon />}
                    onClick={() => this.goToPhase(3)}>Não</Button>
                  <Button
                    className="buttons"
                    variant="contained"
                    color="primary"
                    endIcon={<ThumbUpOutlinedIcon />}
                    onClick={this.goToNextPhase}>Sim</Button>
                </div>
              }
            </div>
          </Fade>
          <Fade in={phase === 6} timeout={2000}>
            <div>
              {phase === 6 &&
                <div>
                  <h2>Conclusão</h2>
                  <p>Chegamos ao fim, passamos pelos principais blocos de função executados pelos ciclos de vida de componentes no React, eles são executados na exata ordem que você acabou de observar.
                  Espero que esse pequeno projeto tenha lhe ajudado a entender um pouco melhor todo esse funcionamento. O código desta aplicação você encontra no meu github e o artigo sobre ciclos de
                  vida do React você encontra no meu blog, até a próxima o/
                </p>
                  <Button
                    className="buttons"
                    variant="contained"
                    color="primary"
                    endIcon={<RotateLeftOutlinedIcon />}
                    onClick={() => this.goToPhase(1)}>Reiniciar</Button>
                  <a href="https://github.com/alanSecundo/" target="blank">
                    <Button
                      variant="contained"
                      className="github-button buttons"
                      endIcon={<GitHubIcon />}>
                      Github
                      </Button>
                  </a>
                  <a href="https://www.alansecundo.com/br/" target="blank">
                    <Button
                      variant="contained"
                      className="blog-button buttons"
                      endIcon={<WebIcon />}>Blog</Button>
                  </a>
                </div>
              }
            </div>
          </Fade>
        </div>
      </div>
    )
  }

}