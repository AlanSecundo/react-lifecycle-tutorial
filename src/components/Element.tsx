import React from 'react';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

type State = {
  count: number;
}

type Props = {
  updated: Function;
}

export default class Element extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    }
    alert('Perfeito! Entremos na primeira função executada pelo ciclo de vida Mounting, a constructor(), esse alert está sendo disparado diretamente dela!')
  }

  componentDidMount() {
    alert('E por fim, estamos na terceira função executada no ciclo de vida mouting, a componentDidMount().')
  }

  updateCounter = () => {
    this.setState({ count: this.state.count + 1 });
    if (this.state.count === 0) {
      this.props.updated();
    }
  }

  componentDidUpdate() {
    alert('Agora estamos atualizando o componente e passando pelo bloco da função componentDidUpdate().')
  }

  componentWillUnmount() {
    alert('É hora de dar tchau, o componente está sendo destruído, chegando enfim ao ciclo de vida Unmouting e ativando o bloco da função componentWillUnmount(), que é onde estamos.')
  }

  render() {

    alert('Neste momento, nosso componente está passando pela função render()')
    let { count } = this.state;

    return (
      <div className="element">
        <span>{count}</span><br/>
        <Button
          variant="contained"
          color="primary"
          endIcon={<AddOutlinedIcon />}
          onClick={this.updateCounter}>Incrementar contador</Button>
          <br/><br/>
      </div>
    )
  }

}