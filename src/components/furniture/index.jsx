import * as React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const Furniture = () => {
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
                caption="furniture"
                alt="furniture"
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
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_simple_design_with_w_5f19ed66-190b-43c4-82e9-ca6741a8e69d.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_simple_design_with_w_021a3558-5e37-4653-a950-db1c2c18ddce.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_simple_design_with_w_392f7bde-076f-4d66-988b-b378593c4203.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_simple_design_with_w_1665bc4e-12b0-41be-83de-808558bf9157.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_simple_design_with_w_3410c349-6218-41c2-82ae-d820dde806b2.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_simple_design_with_w_2831088c-85f4-42ea-b439-0515866c5663.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_simple_design_with_w_ba0234f5-fe2d-4fa6-b747-7173be0ad617.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_simple_design_with_w_f622c3df-cb15-43b8-b020-44e684bde85d.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_with_double_height_c_34c40172-7dfd-4fd2-9985-11e1e40fee2f.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_with_double_height_c_069be436-263d-4989-955e-f9637aa596d7.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_with_double_height_c_111e26df-27b7-49d7-8419-e4b3c8c267ff.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_with_double_height_c_52833d73-3a1b-4aa6-9b2e-542b8d418300.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_with_double_height_c_7030010e-62ea-4ddb-b663-d24c01a5c9f3.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_Realistic_white_living_room_with_double_height_c_f80147f2-7e95-4ebd-81c4-cc0f437bb44b.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_white_Bedroom_with_realistic_view_with_indirect__0d1fe987-56db-4c96-b20e-f533eb50b403.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_white_Bedroom_with_realistic_view_with_indirect__33995662-e8cd-4020-81d6-de8bcdf1ce2a.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_white_Bedroom_with_realistic_view_with_indirect__b4839423-cc19-45e1-b699-f0716df60a88.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_white_Bedroom_with_realistic_view_with_indirect__eeca2235-913b-433f-8a74-5ad75322cd2c.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_White_Bedroom_with_soft_red_color_and_detailed_f_2abf7267-69d6-473d-9d9f-6c2e8cd52ba6.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_White_Bedroom_with_soft_red_color_and_detailed_f_02d608f5-c67c-4926-b95c-9e565b32f066.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_White_Bedroom_with_soft_red_color_and_detailed_f_5fafeb97-d894-4b11-8c4e-6f19e916c8c4.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_Modern_White_Bedroom_with_soft_red_color_and_detailed_f_7da7de08-130a-4505-82ea-55277dec65ff.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_black_with_double_height_n_0ba2e00f-ddc2-4f7d-9ef9-07e9d1e34851.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_black_with_double_height_n_1282655f-aac0-4322-be3e-a24c04d8de22.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_black_with_double_height_n_07020006-82cc-4c89-a26c-7540f6644fa9.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_black_with_double_height_n_c126c012-c171-4ed8-b68e-544f87133145.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_gray_with_double_height_nd_6eff4ec9-019c-4622-8389-b8382596e2ae.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_gray_with_double_height_nd_86f7a09d-7e9a-4e56-98e8-9544cf890383.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_gray_with_double_height_nd_a73f025c-f444-44da-b4d0-659bf00674aa.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_sandy_with_double_height_n_2ece18b9-ac7d-4e12-b32b-021f0cad9851.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_sandy_with_double_height_n_38eb187e-4e14-40b0-bafb-94ba2abef32f.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_sandy_with_double_height_n_94d0a5f8-c16a-4824-afcf-767cc420c5c2.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_sandy_with_double_height_n_d7f188e7-7501-40a7-b079-80f609aae38d.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_and_soft_green_color_84bdd434-9ae9-4305-9501-251ed9be029d.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_and_soft_green_color_0605409d-8970-423c-abf9-9c71d9f6e453.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_and_soft_green_color_ca93f101-403f-4bd3-95f3-4f244514fbbe.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_with_double_height_n_2ca4c7ec-89ed-4197-a2ad-67ff7ad5fb81.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_with_double_height_n_3b5e5646-ee9c-473e-8e2c-c6e65c8a494f.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_with_double_height_n_292e9871-85db-4086-89b9-bac66371aa33.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_with_double_height_n_a62bc4ac-7025-45ad-8a16-9f90de87c566.png",
    title: "project1",
  },

  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_with_soft_red_color__bc7c4862-2a1a-419e-ac25-e7e8d650d0eb.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_with_soft_red_color__d7dcbbf4-f00f-4c89-ad8a-6689ef647bfc.png",
    title: "project1",
  },
  {
    img: "/assets/images/furniture/MoChiah_realistic_dining_modern_room_white_with_soft_yellow_col_364fae96-645b-45c0-bd90-18cff4949fa2.png",
    title: "project1",
  },
];

export default Furniture;
