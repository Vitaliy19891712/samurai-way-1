import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";
import { MessagesDataType } from "../../Redux/dialogs-reducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { TextArea } from "../common/FormsControls/FormsControls";
import { maxLength100, required } from "../../utils/validators/validators";

export type DialogsPropsType = {
  onNewMessageChange: (body: string) => void;
  onSendMessageClick: (message: string) => void;
  messagePage: MessagesDataType;
  isAuth: boolean;
};
type AddMessageFormDataType = {
  message: string;
};

function Dialogs(props: DialogsPropsType) {
  let dialogies = props.messagePage.dialogsData.map((d) => <DialogItem key={d.id} name={d.name} id={d.id} foto={d.foto} />);

  let messagies = props.messagePage.messagesData.map((m) => <Message key={m.id} messages={m.messages} id={m.id} sender={m.sender} />);

  const addNewMessage = (formData: AddMessageFormDataType) => {
    console.log(formData.message);
    props.onSendMessageClick(formData.message);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogs_items}>{dialogies}</div>
        <div className={s.messages}>{messagies}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

const AddMessage = (props: InjectedFormProps<AddMessageFormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"message"} component={TextArea} placeholder={"Inter Message"} validate={[required, maxLength100]} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({ form: "sendmessage" })(AddMessage);

export default Dialogs;
