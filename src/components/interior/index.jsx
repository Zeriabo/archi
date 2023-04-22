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
    img: "/assets/images/interior/interior/MoChiah_a_shinny_room_with_one_plant_white_sofa_soft_theme_past_dad6a4ec-eae9-440f-9213-caa683143398.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_mall_with_soft_colors_with_big_0eef8436-e5ca-4e44-86a4-1610863888b6.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_7d1cef9a-a76b-4d26-b5f9-71829419fbe0.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_7d48335a-cef3-4453-a14d-02c54ec66da2.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_8ff81aac-a03d-43ce-ae54-6fa83966a96f.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_9ebb983a-ee34-4476-b6fd-d2f429a3c760.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_mall_with_soft_colors_with_big_40ae8ea4-811f-49f6-9467-3b655617c876.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_57d81169-bec9-4c35-b664-c9fcec1b3cde.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_98b99b51-9c47-4ce7-934f-1518e33b567c.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_874d5b6d-fdf8-438f-8246-46240ea650de.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_mall_with_soft_colors_with_big_81908596-2d08-4a98-bbca-b9f4ad78cee8.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_ab1e3644-a0e6-47f8-917e-b1f8e1c99796.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_mall_with_soft_colors_with_big_b45fcff2-e78d-4702-aa77-91398dab34cb.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_b671ba06-ea0c-4078-a23d-3b7c4fe5f3b3.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_de562e83-4b99-4b03-8ced-f672269e8dda.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_e9b91ad4-e5bb-4727-865c-7ba9bdb95059.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_inside_a_Mall_with_soft_colors_with_big_f2ce3378-064e-4c2e-8cd1-0530540cbd9a.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_soft_colors_with_big_height_and_lights__2de0da31-b9b3-40d8-b813-c5d1ebccbf46.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_soft_colors_with_big_height_and_lights__03bcaf16-d9d0-4c89-ab2a-18d4a74f21c8.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_soft_colors_with_big_height_and_lights__7d998e56-2425-4b25-8df7-a50eaa9ab51d.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_CAFE_soft_colors_with_big_height_and_lights__32f5cfaa-c3f5-4f1f-b567-a20ebf8410ac.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_GYM_soft_colors_with_double_height_and_light_480dc552-ad5c-4368-8331-76066ad988e7.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_GYM_soft_colors_with_double_height_and_light_862f7efc-3310-4c35-ae7d-7a435f340766.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_GYM_soft_colors_with_double_height_and_light_67482974-1d08-43d9-89f3-a335bce3d87b.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_GYM_soft_colors_with_double_height_and_light_ef2299fa-d04e-45d2-a65a-786515165fef.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_8bee7171-d39d-4a18-9354-7b87b899426e.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_71a25812-aa37-4aa8-86e8-3b908c2fb682.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_71dc2fcb-122e-4c61-90f6-70f80354f95b.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_197cbcf3-3a56-40c2-88ef-bd026cbcce2b.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_305b5d71-5828-4f4b-b4e7-ca30d0d8a30c.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_758afe78-8230-4625-9f3d-53c8179629b3.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_992bc0b6-5343-4849-8ccf-9bd4b2611c99.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_539235f3-8b98-4883-9bd5-5d9366ddc4a5.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_893025fa-c51f-4f2e-a3e3-d98f7a76ef01.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_a82a0771-661a-4176-984c-889ef4108103.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_ab0398ce-a32a-41e2-9d25-7d923b2e1583.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_ae83b3f2-072c-46e8-ae75-c13331d6bc8a.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_ce8998e7-b9e5-45fe-a61e-ac233297a8cc.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_de7c582a-702a-4b28-8c5e-97221ebd8fb1.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_df7be7e4-3254-410d-9d11-fc475f10390b.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_dfa7f2af-05ae-4559-8f8a-0c58bc2f583c.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_eddc9557-bed8-4c4a-a664-f34d75a32609.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_ee5daa4f-db6b-4f9c-a7cc-5f3cdb349303.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_f026cbb1-f093-47be-977a-0994c70c4edc.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_hotel_lobby_soft_colors_with_double_height_a_f44927a3-94dc-4813-aee2-17683126386d.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_0cd51c9d-760b-4a79-b13c-708fdbda62a0.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_4bc6ae06-c400-4c29-827b-12843b93947f.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_6aca82ca-399c-43a2-ac83-58bb1b6a0492.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_6c3ab80e-3616-4378-99e7-bd2bcb03f0fc.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_8e53af05-44ca-473f-ab65-1a6376f5e953.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_518dbee7-3ade-4cd4-9941-3d1f5103f7b7.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_582d4e81-ffb9-4273-8735-bbab9395e8a1.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_4834c903-7513-4213-a9a5-1062c961d9a8.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_10010dfc-6ea9-4793-bbb0-86a0278754d6.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_57631af7-4e23-4d06-a928-33a9bf95bc1b.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_01754461-d9e1-4219-a5be-aca27e57c3f2.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_a67a11ed-a2ec-4f89-9eb3-f9468871af85.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_b5b53695-0389-497a-80a6-d4ef51f0946f.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_e5294ea5-8cd7-4ea6-a6cf-66f872189709.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_f1753298-2f9f-43ff-814b-735cf95d68b4.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_beauty_care_salon_soft_colors_with_do_fa58e07d-52dd-4c22-be27-37b69e0f5fc3.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_Resturant_soft_colors_with_double_hei_0dc0097a-1afb-4e47-960e-47efeafa7e07.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_Resturant_soft_colors_with_double_hei_4ee2f959-271c-411f-ac2e-6e0d050ca522.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_Resturant_soft_colors_with_double_hei_6f1d3de2-a6b6-495d-a60c-9c3c9e58d43b.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_Resturant_soft_colors_with_double_hei_ebba41f8-c173-4443-a338-a0eb7131b3d3.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_Resturant_with_double_height_designed_1ab9a0aa-d82c-4474-b755-edb80cfe7623.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_Modern_Resturant_with_double_height_designed_5a8a44af-b4ba-4840-9a0c-39d0e2e3a44d.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_A_stunning_SPA_soft_colors_with_double_height_and_light_e4abf136-6b4e-459a-b241-c94faa6e43c1.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_360_HDRI_image_for_a_modern_living_room_white_and_woo_2d81fb64-b4c4-4991-a21d-fafce3d21682.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_360_HDRI_image_for_a_modern_living_room_white_and_woo_4e496c28-1fb5-4e16-a1df-3fc0f6ab317a.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_360_HDRI_image_for_a_modern_living_room_white_and_woo_5ff850b4-1bae-4f2d-b6d0-a51c87c18fc9.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_360_HDRI_image_for_a_modern_living_room_white_and_woo_a9bf7a5b-77ae-4e84-a0eb-a97ab1add84e.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_resort_loft_in_the_shape_of_a_space_ship_8k_14b38f63-55a0-42a1-88b8-4ef536d25ec4.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_resort_loft_in_the_shape_of_a_space_ship_8k_466a8ba7-0522-4d9a-9535-880c4e79a289.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_resort_loft_in_the_shape_of_a_space_ship_8k_08191c43-3505-49fd-886e-593ad68fc17c.png",
    title: "interior1",
  },
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
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_light_theme_glass_doors_hidden_war_1eb2b969-600b-4b65-8629-995388e7997e.png",
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
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_dark_theme_glass_doors_hidden_warm_6811c0ae-d322-4c26-a409-0ea4b028b5af1.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_light_theme_glass_doors_hidden_war_1eb2b969-600b-4b65-8629-995388e7997e.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_light_theme_glass_doors_hidden_war_22039f4b-79ae-4f21-8e97-a31ae291c156.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_light_theme_glass_doors_hidden_war_ea76b873-d1c2-4980-95a4-0e019a35ff0d1.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_light_theme_glass_doors_hidden_war_ea76b873-d1c2-4980-95a4-0e019a35ff0d.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_light_theme_glass_doors_hidden_war_f965f322-8d9e-4d9a-bec2-16b76a6ef398.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_with_no_doors_dark_theme_hidden_wa_5cee7249-1265-4612-921b-f65467b583fb.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_with_no_doors_dark_theme_hidden_wa_6c86a4d0-3deb-432e-b5e6-886d31cf7987.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_big_walk_in_closet_with_no_doors_dark_theme_hidden_wa_7b4e2fcd-d7eb-4693-b9b1-10efa9c6a008.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_dark_theme_hidden_warm_ligh_9d217093-a72f-4fa4-81d7-6627f367a575.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_dark_theme_hidden_warm_ligh_ba229ea7-5080-406c-b4f7-178534b298ff.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_dark_theme_hidden_warm_ligh_c9811aee-81b6-4fef-b1dc-bbe2d8f61bf5.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_dark_theme_hidden_warm_ligh_fd0b4170-9637-415d-9437-15633af2fae4.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_light_theme_hidden_warm_lig_584c364c-e3b8-48c5-8084-1abbdf2af67b.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_light_theme_hidden_warm_lig_943213d3-044f-4fd7-b9cf-cf119ea39d9b.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_light_theme_hidden_warm_lig_b99ff668-3835-43a2-9922-e699f4c8f95c.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_with_marble_dark_theme_hidd_1a66aa62-4910-4669-a2e6-cf0fb142df3e.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_with_marble_dark_theme_hidd_6b9337af-c7fb-469d-870f-7ded7be5ee0d.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_with_marble_dark_theme_hidd_7dbd4e8c-9625-4c58-8813-748f5be5b7dc.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_with_marble_dark_theme_hidd_43e57931-89aa-40bc-99d7-53dddcf983061.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_huge_cozy_modern_bathroom_with_marble_dark_theme_hidd_43e57931-89aa-40bc-99d7-53dddcf98306.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_room_size_modern_bathroom_all_white_with_marble_and_H_3f134fe6-1e5f-4c55-bcbf-c5fd67322ac1.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_room_size_modern_bathroom_all_white_with_marble_and_H_7d5ff4b3-94ec-44bb-b847-4ae7849b4722.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_room_size_modern_bathroom_all_white_with_marble_and_H_701afe57-5081-4c83-8945-17185a6e7dc2.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_room_size_modern_bathroom_all_white_with_marble_and_H_fa7524a7-bd3d-4e8a-8206-39790accba06.png",
    title: "interior1",
  },

  {
    img: "/assets/images/interior/interior/MoChiah_a_shinny_room_with_one_plant_white_sofa_soft_theme_past_957edaef-c4a9-4bfb-b363-23d21b5a3312.png",
    title: "interior1",
  },
  {
    img: "/assets/images/interior/interior/MoChiah_a_shinny_room_with_one_plant_white_sofa_soft_theme_past_3972f193-5265-4c83-8359-0d33ea0afd44.png",
    title: "interior1",
  },
];

export default Interior;
