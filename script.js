"use strict";

const makeUser = function () {
  return {
    string: [],
    jump: function () {
      this.string.push("jumping");
      return this;
    },
    speak: function () {
      this.string.push("speaking");
      return this;
    },
    run: function () {
      this.string.push("runing");
      return this;
    },
    swim: function () {
      this.string.push("swimming");
      return this;
    },
    sleep: function () {
      this.string.push("sleeping");
      return this;
    },
    exec: function () {
      if (this.string.length === 0) {
        this.string = "";
      }
      console.log(this.string.join(', '));
    },
  };
};

const user = makeUser();


// calling this
user.sleep().swim().speak().jump().swim().sleep().run().exec();

// should output this
// ("sleeping, swimming, speaking, jumping, swimming, sleeping, running, running");
