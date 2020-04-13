import styled from "styled-components";
import { AvatarSize } from ".";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.img<{ size: AvatarSize }>`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 0.5rem;
  ${_ => ({
    width: _.size === "small" ? "32px" : "40px",
    height: _.size === "small" ? "32px" : "40px"
  })}
`;

export const TextsContainer = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-weight: bold;
  ${_ => ({
    color: _.theme.colors.text
  })}
`;

export const Subtitle = styled.div`
  font-size: 0.875rem;
  ${_ => ({
    color: _.theme.colors.inputText
  })}
`;
