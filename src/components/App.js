import { Route, Router, Switch } from "react-router-dom";
import Header from "./Header";

import History from "../History";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamUpdate from "./streams/StreamUpdate";
const App = () => {
  return (
    <div className=" bg-zinc-900">
      <Router history={History}>
        <Header />
        <section className="container mx-auto bg-zinc-900">
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/edit/:id" exact component={StreamUpdate} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/create" exact component={StreamCreate} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </section>
      </Router>
    </div>
  );
};

export default App;
