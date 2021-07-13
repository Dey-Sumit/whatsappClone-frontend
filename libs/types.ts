export interface User {
  chats: Chat[];
  createdAt: string;
  profilePicture: string;
  updatedAt: string;
  username: string;
  _id: string;
}

export interface Chat {
  chatName: string;
  _id: string;
  description?: string;
  groupIcon?: string;
  isGroupChat: boolean;
  normalUsers?: User[];
  adminUsers: User[];
  messages?: Message[];
  latestMessage?: Message;
  createdBy: User;
  medias?: string[];
  createdAt: Date;
}

export interface Message {
  _id: string;
  sender: User;
  text: string;
  chat: Chat;
  media: string;
  createdAt: Date;
}
