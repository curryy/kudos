type PresonType = {
  id: number;
  name: string;
  avatar: string;
};

export type Kudos = {
  description: string;
  person: PresonType;
  kudosType: number;
  group: number;
  id: number;
  likes: number;
  comments: number;
  created: string;
  author: PresonType;
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
