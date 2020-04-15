import React from "react";
import { IconBox } from "../components";
import {
  faBullhorn,
  faDesktop,
  faBuilding,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import ThanksIcon from "../assets/images/undraw_true_love_cy8x.svg";
import CongratsIcon from "../assets/images/undraw_super_thank_you_obwk.svg";
import TeamPlayerIcon from "../assets/images/undraw_team_spirit_hrr4.svg";
import PositiveIcon from "../assets/images/undraw_positive_attitude_xaae.svg";
import CollaborationIcon from "../assets/images/undraw_real_time_collaboration_c62i.svg";
import AwesomePersonIcon from "../assets/images/undraw_teacher_35j2.svg";

export const kudosTypes = [
  { id: 1, title: "Dziękuję Ci", icon: <ThanksIcon /> },
  { id: 2, title: "Gratulacje!", icon: <CongratsIcon /> },
  { id: 3, title: "Gracz zespołowy", icon: <TeamPlayerIcon /> },
  { id: 4, title: "Pozytywny wpływ", icon: <PositiveIcon /> },
  { id: 5, title: "Świetny współpracownik", icon: <CollaborationIcon /> },
  {
    id: 6,
    title: "Przechodzisz samoego (samą) siebie",
    icon: <AwesomePersonIcon />,
  },
];

export const groups = [
  { id: 1, name: "Marketing", icon: faBullhorn },
  { id: 2, name: "IT", icon: faDesktop },
  { id: 3, name: "Biuro", icon: faBuilding },
  { id: 4, name: "UI/UX", icon: faPalette },
];
