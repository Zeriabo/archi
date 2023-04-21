import * as React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const Graphics = () => {
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
    img: "/assets/images/graphics/MoChiah_a_creative_modern_simple_islamic_greeting_for_a_holiday_65bae41c-cacb-4f57-87fd-c0b87e235d79.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_creative_Nuts_bag_made_of_plastic_with_white_backgrou_2cdc7bcf-2b05-4483-9aeb-4e4d0f53ebce.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_creative_Nuts_bag_made_of_plastic_with_white_backgrou_b7182c59-8dab-4061-a0e7-54fc625c1741.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_creative_Nuts_bag_made_of_plastic_with_white_backgrou_ee011bca-b659-483a-95ab-bc7bed01f261.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_creative_Nuts_bag_with_white_background_and_soft_ligh_65ef31f2-9ed7-4cf5-bdd4-242766e3b882.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_creative_Nuts_bag_with_white_background_and_soft_ligh_446d41ad-c392-43aa-b0b8-8ea143c4efbf.png",
    title: "project1",
  },

  {
    img: "/assets/images/graphics/MoChiah_A_creative_Nuts_bag_with_white_background_and_soft_ligh_ad68ea37-d084-4e22-8c05-02776ea2e192.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_creative_Nuts_bag_with_white_background_and_soft_ligh_af3601a8-8fe1-43a6-a976-2c940b760938.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_creative_Nuts_bag_with_white_background_and_soft_ligh_d4dd68fa-30b2-4484-87ae-da3fc82f4864.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_creative_Nuts_bag_with_white_background_and_soft_ligh_fddae2b7-11fd-43ee-aeb4-a50b31843a5e.png",
    title: "project1",
  },

  {
    img: "/assets/images/graphics/MoChiah_a_detailed_white_dragon_hyper-realistic_595138a9-c07f-4d1e-9502-b243deea3df7.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_a_detailed_white_dragon_hyper-realistic_c7f689da-8852-4fe1-9ef9-2cf09eb59e93.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_a_detailed_white_dragon_hyper-realistic_d5351f65-1e9e-4930-ae01-0db15f1bc35a.png",
    title: "project1",
  },

  {
    img: "/assets/images/graphics/MoChiah_a_detailed_white_dragon_hyper-realistic_dc6406bf-c64f-40f6-b7b1-ed2149d8e05d.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_a_hyper_close_look_at_a_nose_dirt_realistic_f5b40b88-1d5d-41eb-8aac-84720dbd53e8.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_hyper-detailed_and_realistic_statue_for_aphrodite_2c55ed5d-7ba7-4d89-9d0f-a7cdf52b347d.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_hyper-detailed_and_realistic_statue_for_aphrodite_2200bde9-73cb-42bd-bc11-251d6a7b5a5c.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_hyper-detailed_and_realistic_statue_for_aphrodite_a0da71c5-4f27-48dc-9330-d4bb41045a32.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_nuts_bag_creative_and_realistic_with_lines_made_by_a__e82f2632-2d2f-46ad-9a95-4e62b6fefc0c.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_a_realistic_dragon_head_close_up_with_details_and_glowi_4ca23e9c-2c19-46e8-be84-dde083a8c112.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_realistic_majestic_photo_for_an_arabain_man_with_14cfff38-16cb-4a3b-8cb5-b2da153ebed5.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_simple_Nuts_bag_with_white_background_and_soft_lights_29e73d5d-e8b2-44a9-a372-e639daccde86.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_simple_Nuts_bag_with_white_background_and_soft_lights_377e7f05-ac59-43e7-8353-34a588124abd.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_simple_Nuts_bag_with_white_background_and_soft_lights_967a274a-7831-40db-8b17-36b0cee51b8d.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_simple_Nuts_bag_with_white_background_and_soft_lights_287364e5-257d-4a20-8195-4a227e11617d.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_simple_Nuts_bag_with_white_background_and_soft_lights_a7007cfc-b65d-48d6-884c-84cf151ba0f0.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_simple_Nuts_bag_with_white_background_and_soft_lights_e0a49026-860a-49e9-b91d-1092847832fa.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_A_simple_Nuts_bag_with_white_background_and_soft_lights_ee39c840-71b1-4f58-b7a2-a874217c6467.png",
    title: "project1",
  },

  {
    img: "/assets/images/graphics/MoChiah_a_white_unisex_cross_body_bag_inspired_by_wabi-sabi_and_69c4942e-d5eb-4d3b-9100-43b65ed3bc58.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_an_island_with_a_resort_in_it_with_a_big_pool_where_eve_0bff5a16-06b6-4c29-a747-253b7208d58b.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_an_island_with_a_resort_in_it_with_a_big_pool_where_eve_919a3ad1-9f0b-4de0-b6c9-4f116994c3d0.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_an_island_with_a_resort_in_it_with_a_big_pool_where_eve_cb51cc1d-0981-400e-97ef-3052cfea4e08.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_an_island_with_a_resort_in_it_with_a_big_pool_where_eve_e54521f5-4c57-4493-9dca-5b670344f46d.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_chrysalis_butterflybeautiful_paper_art_portrait_format__6c1602a7-5abe-462a-8040-d8f5205d3125.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_chrysalis_butterflybeautiful_paper_art_portrait_format__59cca145-47af-43e7-a30f-13467fb0e516.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_chrysalis_butterflybeautiful_paper_art_portrait_format__91bcafb4-7e7d-4a10-a7d2-6a27f2993e92.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_chrysalis_butterflybeautiful_paper_art_portrait_format__f4afd4ee-9de1-4f9e-93cb-1872210aa08d.png",
    title: "project1",
  },

  {
    img: "/assets/images/graphics/MoChiah_classy_modern_mini_bar_design_made_of_wood_can_hold_sev_56d1b0d0-eacb-46a7-a4b0-b05eca72d755 (2).png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_color_painting_background_black_modern_creative_9f6039fa-e982-486d-a133-7235e12d8189.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_creative_bag_designed_by_carolina_herrera_high_resoluti_7c92d7f5-bda9-4655-ab8e-89f811b7fee4.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_creative_bag_designed_by_carolina_herrera_high_resoluti_75460ece-3191-4497-9a14-0503fac7f5e7.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_creative_bag_designed_by_carolina_herrera_high_resoluti_cec5faac-47b5-492f-9254-8d1d7aef79c5.png",
    title: "project1",
  },

  {
    img: "/assets/images/graphics/MoChiah_creative_bag_designed_by_carolina_herrera_high_resoluti_d4a65e17-488e-4884-ad4f-fed7ed5f7537.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_creative_bag_various_colors_bold_colors_strong_lines_8a0952ad-5231-46af-9950-cb265f6de5fb.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_design_paper_layers_pastel_color_buildings_e39711e3-2bb1-4f5e-a7ad-66a1858eb301.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_embossed_paper_art_cute_atmosphere_centered_chrysalis_b_063d74c5-7dcb-4366-866d-1e78dfef2a19.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_embossed_paper_art_cute_atmosphere_centered_chrysalis_b_71d5b3b6-0164-411e-b22e-8c551645a547.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_embossed_paper_art_cute_atmosphere_centered_chrysalis_b_aa989914-dda2-4506-a7ee-60cd103835e6.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_expressionism_centered_empty_space_chrysalis_butterfly__6ecc6ad1-c853-4597-b5e3-aedf2e8e34fe.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_expressionism_centered_empty_space_chrysalis_butterfly__011bcc14-9c1a-4c94-a93a-e76cef93eecd.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_expressionism_centered_empty_space_chrysalis_butterfly__24cad837-de6d-454e-bc58-555f47b78e3b.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_expressionism_centered_empty_space_chrysalis_butterfly__dd4cd1e1-8398-4c39-99e0-e8e01bdbf074.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_imagine_a_white_unisex_cross_body_bag_inspired_by_wabi-_e9c1403d-38f3-473a-9119-eb64f3b4bfd4.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_imagine_a_white_unisex_cross_body_bag_inspired_by_wabi-_eff75aeb-cf73-40a2-8524-e5bd6dffb47f.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_nasa_cimon_bot_space_technology_d151f5b0-382c-4a7d-8332-fd59bbd6c966.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_paper_art_centered_empty_space_white_background_chrysal_5bdd553c-5044-423b-84b3-cad91ed18d9b.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_paper_art_centered_empty_space_white_background_chrysal_a07bcae8-09a4-40a2-a422-150d738394de.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_paper_art_centered_empty_space_white_background_chrysal_c2e2580b-aeb8-41ef-8748-6aa013d7cae6.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_paper_art_cute_centered_white_background_chrysalis_butt_4bcef1fd-da12-4874-a0da-e80e4cf22cc3.png",
    title: "project1",
  },

  {
    img: "/assets/images/graphics/MoChiah_paper_art_cute_centered_white_background_chrysalis_butt_4486d95d-6834-44bd-baa5-a19023f81d6f.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_paper_art_cute_centered_white_background_chrysalis_butt_c9b3ca85-5e75-4bec-a252-dcf136e6e9fc.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_paper_art_cute_centered_white_background_chrysalis_butt_cbcad34b-af0d-46b9-87fb-87b5fbc98292.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_realistic_Nuts_bag_for_commercial_use_created_by_a_famo_0c4c4311-1fb8-4479-b09b-ad28779191f9.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_realistic_Nuts_bag_for_commercial_use_created_by_a_famo_6d12d832-f8ec-445a-b563-4f7f63eb9183.png",
    title: "project1",
  },

  {
    img: "/assets/images/graphics/MoChiah_realistic_Nuts_bag_for_commercial_use_created_by_a_famo_014c7aac-b062-433c-9fa4-b75fe1b2e84f.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_small_Mini_Bar_Design_with_dimensions_70x120x70_cm_Mode_180cd365-5bba-4448-b71e-b5b952ea8e4d (2).png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_superman_in_a_full_body_action_pose_9683f36b-99f3-431d-afac-e8d3e4218132.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_torn_paper_cute_atmosphere_centered_white_background_ch_40b960b3-3f56-42a6-aefe-106e86427f56.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_very_small_Mini_Bar_Design_Modern_5_star_hotel_Wood_and_3f49e1b1-6f5f-408e-a53c-0485d78d8516.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_very_small_Mini_Bar_Design_Modern_5_star_hotel_Wood_and_4f4c6e0b-ce52-4df9-ab06-58407c788069.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_very_small_Mini_Bar_Design_Modern_5_star_hotel_Wood_and_42781d01-94cf-463f-95fd-42b793071e5e.png",
    title: "project1",
  },
  {
    img: "/assets/images/graphics/MoChiah_watercolor_flower_with_no_background_ba8541a0-c3ee-4fed-9091-b08ada3e07ad.png",
    title: "project1",
  },
];

export default Graphics;
