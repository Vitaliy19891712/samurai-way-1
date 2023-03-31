import { ActionDialogReduserTypes, sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state: AppStateType) => {
  return {
    messagePage: state.messagePage,
  };
};

let mapDispatchToProps = (dispatch: (action: ActionDialogReduserTypes) => void) => {
  return {
    onSendMessageClick: () => dispatch(sendMessageCreator()),
    onNewMessageChange: (body: string) => dispatch(updateNewMessageBodyCreator(body)),
  };
};
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
