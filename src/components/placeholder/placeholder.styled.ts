import styled, { keyframes } from "styled-components";
import { Card } from "../card";

const placeHolderShimmer = keyframes`
{
  0%{
      background-position: -468px 0
  }
  100%{
      background-position: 468px 0
  }
}
`;

const LoadingBackground = styled.div`
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 338px;
  position: relative;
  overflow: hidden;
`;

export const Container = styled(Card)`
  padding: 1rem;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;
export const Avatar = styled(LoadingBackground)<{ small?: boolean }>`
  margin-right: 8px;
  border-radius: 50%;
  ${(_) => ({
    width: _.small ? "32px" : "40px",
    height: _.small ? "32px" : "40px",
  })}
`;

export const TextPlaceholder = styled(LoadingBackground)<{ width: string }>`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  height: 0.875rem;
  border-radius: 3px;
  ${(_) => ({
    width: _.width,
  })}
`;

export const ImagePlaceholder = styled(Card)`
  height: 190px;
  margin: 24px 0;
  ${(_) => ({
    borderColor: _.theme.colors.lightBorder,
  })}
`;

export const Footer = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
`;

export const CommentInput = styled(LoadingBackground)`
  margin-bottom: 4px;
  height: 2rem;
  flex: 1;
  border-radius: 3px;
`;
