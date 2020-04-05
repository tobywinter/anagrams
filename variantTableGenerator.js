class VariantTableGenerator {
  constructor() {}

  getOptions(length) {
    let options = [];
    for (let index = 0; index < length; index++) {
      options.push(index);
    }
    return options;
  }

  addVariantSet(variants, length) {
    for (let index = 0; index < length; index++) {
      variants.push([index]);
    }
    return variants;
  }

  addOptionToVariants(variants, option) {
    variants.forEach((variant) => {
      if (!variant.includes(option)) {
        variant.push(option);
      }
    });
    return variants;
  }

  generate(length) {
    let variants = [];
    const options = this.getOptions(length);
    variants = this.addVariantSet(variants, length);

    options.forEach((option) => {
      variants = this.addOptionToVariants(variants, option);
    });

    variants = this.addVariantSet(variants, length);

    options.reverse().forEach((option) => {
      variants = this.addOptionToVariants(variants, option);
    });

    return variants;
  }
}

module.exports = VariantTableGenerator;
