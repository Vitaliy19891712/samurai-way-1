import { SidebarType } from "../App";
import { ActionTypes } from "./store";

let initialState: SidebarType = {
  dialogsData: [
    {
      id: "1",
      name: "Сергей",
      foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg",
    },
    {
      id: "2",
      name: "Андрей",
      foto: "https://bipbap.ru/wp-content/uploads/2022/11/innocence-en-danger-emoticon-wink-8350944a80bcacb6b76082b877cca174-730x586-1.jpeg",
    },
    {
      id: "3",
      name: "Воробей",
      foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235755_36-kartinkin-net-p-prikolnie-kartinki-dlya-stima-38.jpg",
    },
    {
      id: "4",
      name: "Алена",
      foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235729_35-kartinkin-net-p-prikolnie-kartinki-dlya-stima-37.jpg",
    },
    {
      id: "5",
      name: "Настя",
      foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235782_34-kartinkin-net-p-prikolnie-kartinki-dlya-stima-36-730x709.png",
    },
    {
      id: "6",
      name: "Женя",
      foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235736_31-kartinkin-net-p-prikolnie-kartinki-dlya-stima-33.jpg",
    },
  ],
};

const sidebarReduser = (
  state: SidebarType = initialState,
  action: ActionTypes
): SidebarType => {
  return state;
};
export default sidebarReduser;
