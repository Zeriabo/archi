import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";
import Video4 from "../Video4";

import * as React from "react";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { ViewColumn, ViewColumnSharp } from "@mui/icons-material";

const Interior = () => {
  const uiElements = [
    {
      name: "custom-button",
      ariaLabel: "Custom button",
      order: 9,
      isButton: true,
      html: {
        isCustomSVG: true,
        inner: '<path d="<ICON_PATH>" id="pswp__icn-cstm-btn"/>',
        outlineID: "pswp__icn-cstm-btn",
      },
      appendTo: "bar",
      onInit: (el, pswpInstance) => {},
      onClick: (e, el, pswpInstance) => {},
    },
  ];

  return (
    <div style={{ padding: 100 }}>
      <Gallery uiElements={uiElements}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 300px 300px",
            gridTemplateRows: "300px 300px 300px",
            gridGap: 50,
            justifyContent: "center",
            columnGap: 50,
            rowGap: 50,
            MozColumnGap: 50,
          }}
        >
          {interior.map((image, i) => {
            return (
              <Item
                key={i}
                caption="Interior1"
                alt="Interior1"
                cropped={true}
                original={image.img}
                thumbnail={image.img}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={image.img} />
                )}
              </Item>
            );
          })}
        </div>
      </Gallery>
    </div>
  );
};

const interior = [
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_modern_room_sized_bathroom_with_dark_marble_and_g_2b588235-3b32-4229-bd66-25deecbd19d6.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_modern_room_sized_bathroom_with_dark_marble_and_g_34dc0b2e-d2a0-4382-85ef-44a7732482ad.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_a_big_modern_room_sized_bathroom_with_dark_marble_and_g_8863af5a-6171-4ea3-a959-1583ea614a96.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_modern_room_sized_bathroom_with_dark_marble_and_g_dd98318e-c16b-4e68-99c3-aeeeac88f0fc.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_dark_theme_glass_doors_hidden_warm_4d58bab6-9cf5-495e-a070-55d33bca5bdf.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_dark_theme_glass_doors_hidden_warm_4d58bab6-9cf5-495e-a070-55d33bca5bdf.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_dark_theme_glass_doors_hidden_warm_8ea54716-bac4-4a6a-9fa1-b78b75e9646d.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_dark_theme_glass_doors_hidden_warm_844f01ce-ed04-4bd9-86b6-61abca034354.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_dark_theme_glass_doors_hidden_warm_6811c0ae-d322-4c26-a409-0ea4b028b5af (1).png",
    title: "interior1",
  },
];

export default Interior;
