import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { browserHistory } from 'react-router';

// TODO: ceva este dubios cu setatul paddingului la genul asta de butoane
const buttonStyle = {
  backgroundColor: '#5F288D',
  color: 'white',
};

export class Title extends React.PureComponent {
  browseToSesizari() {
    browserHistory.push('/sesizari');
  }
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-xs-12 col-md-offset-2 col-md-8 page-hero">
            <h1>
              Sesizeaza orice incident
            </h1>
            <p>
              Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective.
            </p>
            <RaisedButton
              label="Vezi toate sesizarile"
              labelPosition="before"
              backgroundColor="#5F288D"
              primary
              icon={<ChevronRight />}
              buttonStyle={buttonStyle}
              onClick={this.browseToSesizari}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Title;