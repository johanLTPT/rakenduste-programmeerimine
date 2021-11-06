import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Layout} from "antd";
const {Content } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout>
  <Route path="/" component={Header}/>
  <Content><Switch>
  <Route exact path="/" component={Home} />
    <Route exact path="/fun" component={ShowMagic} />
    <Route exact path="/posts" component={Posts} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
  </Content>
  </Layout>
</BrowserRouter>
  );
}

export default App;
