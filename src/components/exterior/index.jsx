import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";
import Video4 from "../Video4";

import * as React from "react";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { ViewColumn, ViewColumnSharp } from "@mui/icons-material";
const imgFolder = "/assets/images/exterior/";

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
  {
    img: "/assets/images/exterior/MoChiah_a_modern_front_villa_with_greenery_and_sunlight_hyperre_3c8bcaf5-6320-4db7-82b4-c57405ff5ec2.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_modern_front_villa_with_greenery_and_sunlight_hyperre_8895f72a-a01d-43d3-b9c5-5572ce543bc8.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_modern_front_villa_with_greenery_and_sunlight_hyperre_d1865604-5a30-4159-b5fa-727d6dc92100.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_high_reolution_images_of_modern_villas_like_this_manner_5a31c01c-d158-4775-b6b5-1be692f14011.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_high_reolution_images_of_modern_villas_like_this_manner_6c4f7e3d-e044-4161-9f6d-0ece547b4e9e.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_high_reolution_images_of_modern_villas_like_this_manner_18de9072-b19d-4c46-b63a-863500b10481.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_high_reolution_images_of_modern_villas_like_this_manner_df12f879-772d-4134-9bc5-133983125bc6.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_High_resolution_8k_modern_villas_on_this_manner_8e66326d-0ba6-44ab-ac61-f8b0451074ae.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_High_resolution_8k_modern_villas_on_this_manner_5825fc69-3934-48c8-adf8-7730209850a4.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_High_resolution_8k_modern_villas_on_this_manner_11643d8e-1611-4f82-a241-73e6649b2edd.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_High_resolution_8k_modern_villas_on_this_manner_e224161b-0e2f-4822-82db-cbbcb287bab6.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_modern_front_design_wyse_3d_rendering_in_the_style_of_d_7d508baf-cb26-459e-972c-221f932a3db9.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_modern_front_design_wyse_3d_rendering_in_the_style_of_d_85cc7fc5-c12c-4ae0-b818-0850118e172f.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_modern_front_design_wyse_3d_rendering_in_the_style_of_d_323749d6-3ba0-4446-9e8f-8005d3d8f803.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Several_Images_for_a_Rounded_white_House_in_the_forest__f17da519-494e-4bcc-b585-34959a63f7f0 (1).png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_white_realistic_so_70235dce-8a81-40fa-bfc5-62ea98ebafcb.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_sandy_color_realistic__3e50d375-2277-4743-a573-29208c31ca77.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_sandy_color_realistic__82cb5f17-15c4-4981-9de2-65e8a35714c7.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Were_looking_for_2_exterior_views_of_a_building_thats_a_754d90bd-7fc1-4d24-b8d2-755694881d05.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Were_looking_for_2_exterior_views_of_a_building_thats_a_bc0ed0c4-a616-4975-98a8-09d9830403cc.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_black_realistic_so_6aed718f-b7be-4958-91de-9d98ceeb5b36.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_black_realistic_so_7e01d47d-efae-46af-b9bc-c6120e029c75.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_black_realistic_so_239f5d78-9fd2-41f1-bed5-d1a62dc044e2.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_black_realistic_so_c212ee08-dd98-4ec3-86ed-d9a25d2e62ec.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_grey_realistic_sof_31e1fe8f-f536-4aa1-912b-02b206c7c40d.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_grey_realistic_sof_9225bb4d-40fe-43fc-b8f1-0f4e4023ea43.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_grey_realistic_sof_e40c8514-76dc-421c-a6b3-693b4ebe52d6.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_white_realistic_so_1c36c505-41c6-489e-8c98-df4ead395308.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_Pool_back_side_all_white_realistic_so_55144e3f-dcc0-4675-8d7b-2e2a1c3e7160.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Modern_House_with_a_garden_in_the_front_and_a_women_pas_99394154-ce7a-4abd-a719-34782fcb6072.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_long_shape_modern-style_car_dealership_and_service_with_5c5844a4-f175-4a1d-84d2-c615e8db9834.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_architectural_photography_of_modern_huge_innovation_cen_7c61b1bc-e598-4460-8b01-68d4392e0055.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_Architecturehigh_rise_building_all_appartments_have_poo_f0c64d26-3c53-44b9-bcdb-dc2a2f7f7867.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_conreate_modern_one_family_house_3fcf01b4-d570-4280-937d-5fdeead3f997.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_conreate_modern_one_family_house_05e0af9e-d079-43f8-be72-7181022674f8.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_conreate_modern_one_family_house_24e07e85-32a0-434e-97fa-898774087f14.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_conreate_modern_one_family_house_b02521a9-bbd5-4d72-a47a-07411c825fb0.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_conreate_modern_one_family_house_e908f014-eaf3-4705-90b5-e7023cb024b2.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_very_modern_house_concrete_and__7c3c95ae-bb4b-4759-a0b1-93685393bc8f.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_very_modern_house_concrete_and__545d9fb5-8cbf-49ff-836a-93431ef303ca.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_very_modern_house_concrete_and__593511ad-f35d-4293-bbc3-84450037d9cf.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_very_modern_house_concrete_and__d1a9874c-c2ae-44c9-b14f-7f244c42f6ef.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_of_a_modern_black_house_with_soft_yel_79da5a3f-cc83-4a0c-97bb-0cd328896071.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_of_a_modern_black_house_with_soft_yel_57953a9f-ed66-4f87-b4b8-c45b19ca3a66.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_of_a_modern_black_house_with_soft_yel_cbc3a2c0-9271-4e69-aa5a-a59eea7b8e85.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_an_ultra_modern_family_house_all_white_with_sun_rays_an_5d4287f8-13b8-4ba8-9a42-716791ad898b.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_an_ultra_modern_family_house_all_white_with_sun_rays_an_40b281c5-ae11-4042-9537-97ad2b437478.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_an_ultra_modern_family_house_all_white_with_sun_rays_an_e4373614-1e6d-4108-8943-54e26d45a28e.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_modern_grey_house_with_indirect_cdd4b0d8-1d63-45d8-bd7d-f314e797a281.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_modern_grey_house_with_indirect_bf6d105c-33b0-410c-8d8c-60d651412801.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_modern_grey_house_with_indirect_8fcb139d-6fe3-46c9-96a9-e8fee8b9100e.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_modern_black_house_with_indirec_bc772d38-e941-4224-b6a7-0f64c4cce342.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_modern_black_house_with_indirec_11731d5c-492b-4743-a6dc-0cfadba1b9f5.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_photo_for_a_modern_black_house_with_indirec_998e77fd-6a9e-4898-bec1-16863bcef03e.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_modern_house_white_colors_with_wood_with_a__b3497a4d-88de-43fc-b12c-35f858708f68.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_realistic_modern_house_white_colors_with_wood_with_a__0329f7c6-dde3-48a9-9a67-a4200a42e1b5.png",
    title: "project5",
  },

  {
    img: "/assets/images/exterior/MoChiah_a_realistic_modern_house_white_colors_with_wood_with_a__9e213ead-9175-45a6-8a82-d26c3db3d1e8.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_modern_white_house_soft_lights_and_wood_surrounded_by_57869114-a066-4472-8638-1d12b6022ccc.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_a_modern_white_house_soft_lights_and_wood_surrounded_by_7ed78fd3-5b39-42de-8e9d-742922a32fe3.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_2_floors_modern_house_g1_very_realistic_high_quality_wi_584672e6-f41e-4659-a914-91e15e425bc1.png",
    title: "project5",
  },
  {
    img: "/assets/images/exterior/MoChiah_2_floors_modern_house_g1_very_realistic_high_quality_wi_f86f2bf9-0dfe-47e3-825f-c621f859e40c.png",
    title: "project5",
  },
];

export default Exterior;
