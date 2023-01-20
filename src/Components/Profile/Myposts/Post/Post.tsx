import s from "./Post.module.css";
import React from "react";

type PostProp = {
  message: string;
  likeCount: number;
  id: string
};

export function Post(props: PostProp) {
  return (
    <div className={s.item}>
      <img src="https://shop-cdn1.vigbo.tech/shops/19661/products/21612973/images/3-2e7445062f6dbcbde00cb3deee691548.jpg"></img>
      {props.message}
      <div>
        <button>Like</button>
        <span>{props.likeCount}</span>
      </div>
    </div>
  );
}
