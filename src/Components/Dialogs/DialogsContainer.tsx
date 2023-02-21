import { StoreType } from "../../Redux/store";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../Redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { StoreContext } from "../../StoreContext";

export type DialogsContainerPropsType = {
  store: StoreType;
};

export function DialogsContainer() {
  // let messagePage = props.store.getState().messagePage;

  // let onSendMessageClick = () => {
  //   props.store.dispatch(sendMessageCreator());
  // };

  // let onNewMessageChange = (body: string) => {
  //   props.store.dispatch(updateNewMessageBodyCreator(body));
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let messagePage = store.getState().messagePage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body: string) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            onNewMessageChange={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
            messagePage={messagePage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
