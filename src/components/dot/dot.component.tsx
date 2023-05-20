import React from "react";
import styled from "@emotion/styled";

export enum DotStateEnum {
    Blank,
    Red ,
    Yellow
}

interface IDotProps {
    state: DotStateEnum
}

type Colors = 'red' | 'yellow' | 'black'

const stateToColor = (state: DotStateEnum): Colors => {
    switch (state) {
        case DotStateEnum.Blank:
            return "black"
        case DotStateEnum.Red:
            return  "red"
        case DotStateEnum.Yellow:
            return "yellow"
    }
}

export const Dot = styled('div')<{ state: DotStateEnum}>`
  background: ${({ state }) => stateToColor(state)};
  width: 64px;
  height: 64px;
  
  border-radius: 50%;
`

