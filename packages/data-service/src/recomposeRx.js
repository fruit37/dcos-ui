import "symbol-observable";
import { from, to } from "rxjs";
import {
  componentFromStreamWithConfig,
  createEventHandlerWithConfig
} from "recompose";

const rxjsConfig = {
  fromESObservable: from,
  toESObservable: to
};

export const createEventHandler = createEventHandlerWithConfig(rxjsConfig);
export const componentFromStream = componentFromStreamWithConfig(rxjsConfig);
