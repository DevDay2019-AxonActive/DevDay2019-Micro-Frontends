import { ReactWebComponent } from "create-react-web-component";
import {
  componentAttributes,
  componentProperties
} from "./componentProperties";
import App from "./App";

ReactWebComponent.setAttributes(componentProperties);
ReactWebComponent.setProperties(componentAttributes);
ReactWebComponent.render(App, "react-book-summary-tile");
