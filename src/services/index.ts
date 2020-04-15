import Axios from "axios";
import useAxios, { configure } from "axios-hooks";
import { Kudos, Person, Tag } from "../models";

const axios = Axios.create({
  baseURL: process.env.API_URL,
});
configure({ axios });

export const useGetKudos = () => {
  return useAxios<Kudos[]>({
    method: "GET",
    url: "kudos/",
  });
};

export const useGetPeople = () => {
  const [{ data, loading, error }] = useAxios<Person[]>({
    method: "GET",
    url: "people/",
  });
  // backend data mapping
  return {
    loading,
    error,
    data: (data || []).map((person) => ({
      id: person.id,
      display: person.name,
    })),
  };
};

export const useGetTags = () => {
  const [{ data, loading, error }] = useAxios<Tag[]>({
    method: "GET",
    url: "tags/",
  });
  // backend data mapping
  return {
    loading,
    error,
    data: (data || []).map((tag) => ({
      id: tag.id,
      display: tag.name,
    })),
  };
};

export const useCreateKudos = () => {
  const [{ error, loading }, execute] = useAxios<null>(
    {
      method: "POST",
      url: "kudos/",
    },
    { manual: true }
  );
  return {
    error,
    loading,
    execute: (data: {
      description: string;
      person: number;
      kudosType: number;
      group: number;
    }) => {
      return execute({
        data,
      });
    },
  };
};
