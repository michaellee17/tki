import Slider from "./Slider.vue";
import imageFile from '../../../assets/images/slider/macbook_gold-1.png';

export default {
  component: Slider,
  title: "Components/Atoms/Slider/DefaultSlider",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { Slider },
  setup() {
    //👇 The args will now be passed down to the template
    return { args, };
  },
  template: '<Slider style="width:1000px;" v-bind="args" />',
});
Default.args = {
  items: [
    {
      productImage: imageFile,
      characteristics: [
        "2.9 GHz Dual-Core Intel Core i5",
        "256 GB SSD auf PCle Basis(On-Board)",
        "8 GB 2133 MHz LPDDR3 Arbeitsspeicher",
      ],
      category: "tech equipment",
      productName: "Macbook AIR",
      id: 1,
    },
    {
      productImage: imageFile,
      characteristics: [
        "23.2 GHz Dual-Core Intel Core i3",
        "2 TB SSD auf PCle Basis(On-Board)",
        "32 GB 2133 MHz LPDDR3 Arbeitsspeicher",
      ],
      category: "tech equipment",
      productName: "Macbook",
      id: 2,
    },
    {
      productImage: imageFile,
      characteristics: [
        "2.9 GHz Dual-Core Intel Core i7",
        "512 GB SSD auf PCle Basis(On-Board)",
        "16 GB 2133 MHz LPDDR3 Arbeitsspeicher",
      ],
      category: "tech equipment",
      productName: "Macbook PRO",
      id: 3,
    },
  ],
};
