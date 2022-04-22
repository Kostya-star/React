import { rerenderEntireTree } from './../render';
let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hey bro!', likesCount: 12},
      {id: 2, message: 'It is my first post! How are you?', likesCount: 21},
      {id: 3, message: 'It is my first post! How are you?', likesCount: 21},
    ],
    newPostText: 'write smth in here you fucker!'
  },
  dialogsPage: {
    messageData: [
      {id: 1, message: 'hi'},
      {id: 2, message: 'how r u'},
      {id: 3, message: 'bye'},
    ],
    dialogsData: [
      {id: 1, name: 'Costya'},
      {id: 2, name: 'Nadya'},
      {id: 3, name: 'Petr'},
      {id: 4, name: 'Julia'},
      {id: 5, name: 'Ivan'},
    ]
  },
  sidebar: {
    sidebarData: [
      {id: 1, name: 'Danil'},
      {id: 2, name: 'Evgeniy'},
    ]
  }
  
}

window.state = state;

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText, 
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}

export default state;