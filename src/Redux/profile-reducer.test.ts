import profileReducer, { addPostCreator, deletePostCreator } from "./profile-reducer";
let state = {
  posts: [
    { id: "1", message: "Hello", likeCount: 17 },
    { id: "2", message: "How are you", likeCount: 45 },
    {
      id: "3",
      message: "What are you doing",
      likeCount: 67,
    },
  ],
  profile: null,
  status: "",
};

test("length should be added", () => {
  let action = addPostCreator("Hello matros");

  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});

test("new post should be added", () => {
  let action = addPostCreator("Hello matros");

  let newState = profileReducer(state, action);
  expect(newState.posts[3]).toStrictEqual({ id: "5", message: "Hello matros", likeCount: 0 });
});

test("lehgth posts should be increment", () => {
  let action = deletePostCreator("3");

  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});
