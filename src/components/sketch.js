import react from "./react.png";
import html from "./html5.png";
import css3 from "./css3.png";
import js from "./js.png";
import p5 from "./rectlogo.png";

export default function sketch(p) {
  let React;
  let Html;
  let Css;
  let Js;
  let P5;

  p.preload = () => {
    React = p.loadImage(react);
    Html = p.loadImage(html);
    Css = p.loadImage(css3);
    Js = p.loadImage(js);
    P5 = p.loadImage(p5);
  };

  p.setup = function() {
    p.createCanvas(600, 600, p.WEBGL);
    p.setAttributes("antialias", true);
  };

  p.draw = () => {
    p.angleMode(p.DEGREES);
    p.background(37, 38, 39);
    p.translate(-60, -70, 30);

    p.rotateZ(p.frameCount * 0.75 + p.mouseX / 50);
    p.rotateY(p.frameCount * 0.75 + p.mouseX / 50);

    p.ambientLight(255);
    p.push();
    p.texture(P5);
    p.beginShape();
    p.vertex(0, 0, 0, 0, 0);
    p.vertex(130, 0, 0, 130, 0);
    p.vertex(130, 130, 0, 130, 130);
    p.vertex(0, 130, 0, 130);
    p.endShape(p.CLOSE);
    p.pop();

    p.push();
    p.texture(Html);
    p.beginShape();
    p.vertex(0, 0, 130, 0, 0);
    p.vertex(0, 130, 130, 130, 0);
    p.vertex(0, 130, 0, 130, 130);
    p.vertex(0, 0, 0, 0, 130);
    p.endShape(p.CLOSE);
    p.pop();
    p.texture(Css);

    p.beginShape();

    p.vertex(0, 130, 130, 0, 0);
    p.vertex(130, 130, 130, 130, 0);
    p.vertex(130, 130, 0, 130, 130);
    p.vertex(0, 130, 0, 0, 130);
    p.endShape(p.CLOSE);

    p.texture(Js);
    p.beginShape();
    p.vertex(0, 0, 130, 0, 0);
    p.vertex(130, 0, 130, 130, 0);
    p.vertex(130, 0, 0, 130, 130);
    p.vertex(0, 0, 0, 0, 130);
    p.endShape(p.CLOSE);

    p.texture(Html);
    p.beginShape();
    p.vertex(130, 130, 130, 0, 0);
    p.vertex(130, 0, 130, 0, 130);
    p.vertex(130, 0, 0, 130, 130);
    p.vertex(130, 130, 0, 130, 0);
    p.endShape(p.CLOSE);

    p.texture(React);
    p.beginShape();
    p.vertex(0, 0, 130, 0, 0);
    p.vertex(0, 130, 130, 130, 0);
    p.vertex(130, 130, 130, 130, 130);
    p.vertex(130, 0, 130, 0, 130);
    p.endShape(p.CLOSE);
  };
}
