class VariantTableGenerator {
  constructor() {
    this.variants = [];
  }

  getOptions(length) {
    let options = [];
    for (let index = 0; index < length; index++) {
      options.push(index);
    }
    return options;
  }

  addVariantSet(length) {
    for (let index = 0; index < length; index++) {
      this.variants.push([index]);
    }
    return this.variants;
  }

  addOptionToVariants(option) {
    this.variants.forEach((variant) => {
      if (!variant.includes(option)) {
        variant.push(option);
      }
    });
    return this.variants;
  }

  buildVariantSet(options, length) {
    this.addVariantSet(length);

    for (let index = 0; index < options.length; index++) {
      this.addOptionToVariants(options[index]);
    }
  }

  generate(length) {
    const options = this.getOptions(length);
    // console.log(options);
    // console.log(options.reverse());
    for (let index = 1; index < options.length; index++) {
      //   options.push(options.shift());
      this.buildVariantSet(options, length);
    }

    // this.buildVariantSet(options, length);

    this.buildVariantSet(options.reverse(), length);
    // console.log(this.variants);
    return this.variants;
  }
}

module.exports = VariantTableGenerator;
