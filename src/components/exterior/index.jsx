import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";
import Video4 from "../Video4";

import * as React from "react";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { ViewColumn, ViewColumnSharp } from "@mui/icons-material";

const Exterior = () => {
  const uiElements = [
    {
      name: "custom-button",
      ariaLabel: "Custom button",
      order: 10,
      isButton: true,
      html: {
        isCustomSVG: true,
        inner: '<path d="<ICON_PATH>" id="pswp__icn-cstm-btn"/>',
        outlineID: "pswp__icn-cstm-btn",
      },
      appendTo: "bar",
      onInit: (el, pswpInstance) => {
        // do something on UI element's init event
      },
      onClick: (e, el, pswpInstance) => {
        // do something on UI element's click event
      },
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
          {itemData.map((image, i) => {
            return (
              <Item
                key={i}
                caption={image.title}
                alt={image.title}
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

const itemData = [
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__9baf87dd-d216-41ee-b3d1-56b7f6f78019.png",
    title: "project1",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__32d2e92d-3423-4402-8de0-7ff72fe43283.png",
    title: "project1",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__340ecae7-8b33-44c5-ae86-fa3263f29f0f.png",
    title: "project2",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__059150db-ca67-4d3c-8534-1cf17c93fca5.png",
    title: "project3",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__a0cdbd34-a7ac-440c-a4b9-b20ea2ab0792.png",
    title: "project3",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__bba6abe1-a12f-4ff5-96e8-ac4e75e81dc2.png",
    title: "project4",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__ccec7b2c-0d47-479b-af0d-54eb98df72ed.png",
    title: "project4",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__cd987bdf-3663-4e34-ac4b-413e38e97f41.png",
    title: "project4",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__d3ce411c-d7b5-4468-a2c2-cd0cc4643f09.png",
    title: "project4",
  },

  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__e2a156d3-a207-4d2d-946c-854fd8c671a8.png",
    title: "project4",
  },

  {
    img: "/assets/images/exterior/MoChiah_A_stunning_Modern_white_House_only_one_floor_designed_b_76dc206f-d65d-4f4d-a2a1-d8b12a98df6e.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_Modern_white_House_only_one_floor_designed_b_98f40b14-b9a5-42ad-a1ac-6c7aaeccdd7e.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_Modern_white_House_only_one_floor_designed_b_1755a463-1c0a-430c-be0f-619be90b16db.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_Modern_white_House_only_one_floor_designed_b_a756b63e-b11c-44ec-bee1-eab47ead7abf.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_A_stunning_Modern_white_House_only_one_floor_designed_b_c073ba74-809e-4b2c-a5cb-b051604d1d3a.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_Modern_white_House_only_one_floor_designed_b_caf7fc43-9474-4bd8-b29c-1158afb32fe0.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_Modern_white_House_only_one_floor_designed_b_d8dba70f-01f2-4dd3-9104-a17096808f7f.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_Modern_white_House_only_one_floor_designed_b_fc4cda98-069f-4888-96ce-84746946bbdb.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_stunning_residential_building_all_penthouses_by_le_cu_2d1f94ac-2e2c-473e-957a-cec8686745ba.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_stunning_residential_building_all_penthouses_by_le_cu_64e19d42-0415-40eb-b22e-240ac28457ab.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_stunning_residential_building_all_penthouses_by_le_cu_89e37ebc-6c91-4ab0-9ed0-e9e614149d10.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_stunning_residential_building_all_penthouses_by_le_cu_fcfa23e8-b1c5-40c4-bb4e-866df1bddd7f.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_in_the_city_view_on_the_6c1c8ca5-4ee5-4553-b00e-c99ad5da650b.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_in_the_city_view_on_the_f08e263a-d8a7-4caf-aa64-b7263c6e5039.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_in_the_city_with_soft_c_6dc489eb-78d0-49fa-a0a7-434174bfcade.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_in_the_city_with_soft_c_9a20150d-c445-4678-9c00-9061ee75cf1b.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_in_the_city_with_soft_c_20f982eb-2932-4db2-9915-b63cff8925e9.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_in_the_city_with_soft_c_44bdd5cb-67c7-4f90-b6b5-c3f1893e3b9c.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_in_the_city_with_soft_c_c5ac1b18-0767-4540-808c-57e86bc5bdc7.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_in_the_city_with_soft_c_d8b50db3-c216-443d-88f4-829961978686.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_in_the_city_with_soft_c_e49db498-17d1-41f3-898f-7188c6df6174.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__0b286ec1-9a3b-4c71-bdcd-9e869c529ab6.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_A_stunning_residential_Building_only_penthouses_in_the__3fdcc5bc-9ee5-4f00-b484-a2c79eb2cc32.png",
    title: "project5",
  },
];

export default Exterior;
