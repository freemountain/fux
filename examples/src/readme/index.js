import { element, cycle, views, scopes, decorators } from './../vulp';

const { component, controller, dispatchChangeSets } = decorators;
const App = component(
  dispatchChangeSets(),
  controller({
    inc: ['/count', count => count + 1]
  }),
)(function({ context }) {
  return (<div>
    <input type='button' onClick='inc'/>
    {context.get('/count')}
  </div>);
});

const view = views.dom(document.body, App);
const scope = scopes.value({ count: 0 });

export default () => cycle(view, scope);
