import { ActionDialogReduserTypes, sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
  return {
    messagePage: state.messagePage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch: (action: ActionDialogReduserTypes) => void) => {
  return {
    onSendMessageClick: () => dispatch(sendMessageCreator()),
    onNewMessageChange: (body: string) => dispatch(updateNewMessageBodyCreator(body)),
  };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
