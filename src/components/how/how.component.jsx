import React from "react";

import {
  HowCircle1,
  HowCircle2,
  HowCircle3,
  HowCircle4,
  HowContainer,
  HowContent,
  HowItem,
  HowItemDescr,
  HowItemSubtitle,
  HowList,
  HowSubItem,
  HowTitle,
  HowWrapper,
} from "./how.styles";

const How = ({ data }) => {
  const { title, list } = data;

  return (
    <HowWrapper>
      <HowContainer>
        <HowTitle>{title}</HowTitle>

        <HowContent>
          <HowList>
            {list.map((listItem, index) => (
              <HowItem listItemId={listItem.id} key={index}>
                <HowItemSubtitle>{listItem.subtitle}</HowItemSubtitle>

                {listItem.descr.split("LINK").length > 1 ? (
                  <HowItemDescr>
                    {listItem.descr.split("LINK")[0]}{" "}
                    <a href={listItem.url} target="_blank" rel="noreferrer">
                      Tutaj
                    </a>
                    {listItem.descr.split("LINK")[1]}
                  </HowItemDescr>
                ) : (
                  <HowItemDescr>{listItem.descr}</HowItemDescr>
                )}

                {listItem.subList.length > 0 &&
                  listItem.subList.map((descrItem, index) => {
                    const firstWord = descrItem.split(" ")[0];
                    const rest = descrItem.substring(firstWord.length + 1);

                    return (
                      <HowSubItem key={index}>
                        <span>{firstWord}</span> {rest}
                      </HowSubItem>
                    );
                  })}
              </HowItem>
            ))}
          </HowList>
        </HowContent>
        <HowCircle1 />
        <HowCircle3 />
      </HowContainer>
    </HowWrapper>
  );
};

export default How;
