import styled from "@emotion/styled";
import React from "react";

const Image = styled.img``;

function UserCard(img, name, time) {
  return (
    <div>
      <div>
        <Image></Image>
        <div>
          <div>Report for</div>
          <div>Robert Downey Jr</div>
        </div>
      </div>
      <div>
        <button>a</button>
        <button>s</button>
        <button>b</button>
      </div>
    </div>
  );
}

export default UserCard;
