import React from "react";
import Col from "react-bootstrap/Col";
import * as S from "./kudos-list.styled";
import {
  Card,
  Avatar,
  PostPlaceholder,
  ErrorMessage,
  KudosImage,
  PostFooter,
  Textarea,
} from "../../components";
import HandIcon from "../../assets/images/agreement-brown.svg";
import { useGetKudos, useGetPeople, useGetTags } from "../../services";
import dayjs from "dayjs";
import { kudosTypes, groups } from "../data";

const avatarUrl = "https://api.adorable.io/avatars/200";
const Error = () => (
  <ErrorMessage>Wystąpił błąd w czasie pobierania kudosów.</ErrorMessage>
);
const Loading = () => (
  <>
    <Col sm={12}>
      <PostPlaceholder />
    </Col>
    <Col sm={12}>
      <PostPlaceholder />
    </Col>
  </>
);

const KudosList = () => {
  const [{ data, loading, error }] = useGetKudos();
  const [likedKudos, setLikedKudos] = React.useState<number[]>([]);
  const [commentText, setCommentText] = React.useState("");
  const { data: peopleData } = useGetPeople();
  const { data: tagsData } = useGetTags();

  const calculateDate = (date: string) => {
    const dateObj = dayjs(date);
    const daysDiff = dateObj.diff(dayjs(), "day");
    if (daysDiff === 0) {
      const hourDiff = dateObj.diff(dayjs(), "hour");
      if (hourDiff === 0) {
        return `${-dateObj.diff(dayjs(), "minute")} minut temu`;
      }
      return `${-hourDiff} godzin temu`;
    }
    if (daysDiff < 6) {
      return daysDiff === 1 ? "wczoraj" : `${-daysDiff} dni temu`;
    }
    return dateObj.format("DD.MM.YYYY");
  };

  const getKudosData = (kudosId: number) => {
    return kudosTypes.find(({ id }) => id === kudosId) || kudosTypes[0];
  };

  const getGroupData = (groupId: number) => {
    return groups.find(({ id }) => id === groupId) || groups[0];
  };

  return (
    <S.ContainerRow noGutters>
      <Col sm={12}>
        <S.CreateButton to="/create">
          <Card noPadding>
            <Avatar imageSrc={avatarUrl} subtitle="Kliknij, aby dodać post" />
            <HandIcon />
          </Card>
        </S.CreateButton>
      </Col>
      {error && <Error />}
      {loading && <Loading />}

      {data &&
        data.map((kudos) => (
          <Col key={kudos.id} sm={12}>
            <Card noPadding>
              <S.KudosContent>
                <S.KudosHeading>
                  <Avatar
                    imageSrc={kudos.author.avatar}
                    title={kudos.author.name}
                    subtitle={calculateDate(kudos.created)}
                  />
                  <HandIcon />
                </S.KudosHeading>
                <p>{kudos.description}</p>
                <KudosImage
                  icon={getKudosData(kudos.id).icon}
                  title={getKudosData(kudos.id).title}
                  subtitle={kudos.person.name}
                />
              </S.KudosContent>
              <PostFooter
                componentKey={kudos.id.toString()}
                icon={getGroupData(kudos.group).icon}
                groupName={getGroupData(kudos.group).name}
                likesCount={kudos.likes}
                commentsCount={kudos.comments}
                onLikeClick={() =>
                  likedKudos.includes(kudos.id)
                    ? setLikedKudos(
                        likedKudos.filter((elem) => elem !== kudos.id)
                      )
                    : setLikedKudos([...likedKudos, kudos.id])
                }
                likeActive={likedKudos.includes(kudos.id)}
                options={[
                  { label: "Usuń", action: () => {} },
                  {
                    label: "Edytuj",
                    action: () => {},
                  },
                ]}
              />
              <S.CommentContainer>
                <Avatar size="small" imageSrc={avatarUrl} />
                <Textarea
                  placeholder="Napisz komentarz..."
                  expandable
                  value={commentText}
                  onChange={setCommentText}
                  people={peopleData}
                  tags={tagsData}
                />
              </S.CommentContainer>
            </Card>
          </Col>
        ))}
    </S.ContainerRow>
  );
};

export default KudosList;
