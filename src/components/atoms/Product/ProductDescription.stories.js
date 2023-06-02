import ProductDescription from "./ProductDescription.vue";

export default {
  component: ProductDescription,
  title: "Components/Atoms/Product/Description",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { ProductDescription },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ProductDescription v-bind="args" />',
});

Default.args = {
  description: 'The Ragdoll is a cat breed with blue eyes and a distinct colorpoint coat. It is a large and muscular semi-longhair cat with a soft and silky coat. Like all long haired cats, Ragdolls need grooming to ensure their fur does not mat. Developed by American breeder Ann Baker in the 1960s, it is best known for its docile and placid temperament and affectionate nature. <br/>  The name “Ragdoll” is derived from the tendency of individuals from the original breeding stock to go limp and relaxed when picked up. Particularly popular in both the United Kingdom and the breed’s native United States, ragdoll cats often are known as “dog-like cats” or “puppy-like cats” due to behaviors such as their tendency to follow people around, their ease at being physically handled, and their relative lack of aggression toward other pets.'
}