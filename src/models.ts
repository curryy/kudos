export type Kudos = {
  description: string;
  person: number;
  kudosType: number;
  group: number;
  id: number;
  likes: number;
  comments: number;
  created: string;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
};

export type Tag = {
  id: number;
  name: string;
};

export type Person = {
  id: number;
  name: string;
  avatar: string;
};
