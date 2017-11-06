import demoTpl from './demo.html'
import demoCSS from './demo.scss'

export default {
  transclude: true,
  controller: function () {

    this.demoContent = "";
    this.demoClick = () => {
      this.demoContent = "Hi, im demo-content"
    }

    this.$onInit = () => {

    }

  },
  template: demoTpl,
  bindings: {
    hero: '<',
    comment: '@'
  }
};

