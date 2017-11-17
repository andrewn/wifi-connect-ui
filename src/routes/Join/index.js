import { Component } from 'preact';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Pane from '../../components/Pane';
import TextInput from '../../components/TextInput';
import Wave from '../../components/Wave';

import style from './style';

export default class Join extends Component {
  state = {
    passphrase: null,
  };

  updatePassword = evt => this.setState({ passphrase: evt.target.value });
  savePassword = () => {
    this.props.onNext({ passphrase: this.state.password });
  };

  render() {
    const { step, ssid, onBack } = this.props;
    const { passphrase } = this.state;

    return (
      <div class={style.container}>
        <div class={`${style.flex} ${style.header}`}>
          <Header
            images={<Wave level={2} />}
            step={step}
            title={`${ssid} password`}
            body={`Enter password or leave blank for no password`}
          />
        </div>
        <Pane class={style.body} padding>
          <TextInput
            label="Password"
            onInput={this.updatePassword}
            value={passphrase}
          />
          <div class={style.actions}>
            <Button onClick={onBack}>Back</Button>
            <Button primary onClick={this.savePassword}>
              Save
            </Button>
          </div>
        </Pane>
      </div>
    );
  }
}
