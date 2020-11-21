/*
 * @Author: Jin
 * @Date: 2020-11-19 16:33:40
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-21 13:33:22
 * @FilePath: /final-assignment/src/views/detail/Detail.vue.js
 */
export default {
    name: "Detail",
    components: {},
    data: () => ({
        items: [
            {
                text:
                    "Personal Use|$59.00| May be used one time in an End Product for Personal Use (an End Product that does not charge End Users). ",
                value: "personal-use"
            },
            {
                text:
                    "Commercial Use|$69.00| May be used an unlimited amount of times for Personal Use, and one time to create a single End Product that does charge End Users. ",
                value: "commercial-use"
            },
            {
                text:
                    "Unlimited Use|$109.00| Can be used an unlimited amount of times for Personal Use, Commercial Use, and Commercial End Products. ",
                value: "unlimited-use"
            }
        ],

        src: "https://i.loli.net/2020/11/21/c27WjGz5lTfdAFx.png",
        zoomSrc: "https://i.loli.net/2020/11/21/c27WjGz5lTfdAFx.png",
        zoomWidth: "467",
        zoomHeight: "610",
        zoomClass: {},
        maskWidth: 100,
        maskHeight: 100,
        maskBgColor: "#409eff",
        maskOpacity: 0.5,
        maskClass: {},
        delayIn: 0,
        delayOut: 0,

        zoomShow: false,
        imgRect: "",
        maskRect: "",
        maskX: 0,
        maskY: 0,
        zoomImage: "",
        zoomLeft: "",
        zoomImgWidth: 0,
        zoomImgHeight: 0,
        zoomPosition: {
            x: 0,
            y: 0
        },
        zoomInTimeoutId: null,
        zoomOutTimeoutId: null
    }),
    computed: {
        style: function() {
            return {
                position: "relative",
                cursor: "move"
            };
        },
        maskStyle: function() {
            return {
                position: "absolute",
                width: `${this.maskWidth}px`,
                height: `${this.maskHeight}px`,
                opacity: this.maskOpacity,
                backgroundColor: this.maskBgColor,
                left: 0,
                top: 0,
                transform: `translate(${this.maskX}px, ${this.maskY}px)`,
                willChange: "transform",
                pointerEvents: "none",
                zIndex: 1000,
                visibility: this.zoomShow ? "visible" : "hidden"
            };
        },
        zoomStyle: function() {
            return {
                width: `${this.zoomWidth}px`,
                height: `${this.zoomHeight}px`,
                position: "absolute",
                left: `${this.zoomLeft}px`,
                top: 0,
                overflow: "hidden",
                zIndex: 1000
            };
        },
        zoomImgStyle: function() {
            return {
                width: `${this.zoomImgWidth}px`,
                height: `${this.zoomImgHeight}px`,
                willChange: "transform",
                transform: `translate(-${this.zoomPosition.x}px, -${this.zoomPosition.y}px)`
            };
        }
    },
    methods: {
        testC: content => console.log(content),

        splitSelectItem: function(text) {
            const splitArr = text.split("|");
            return {
                type: splitArr[0],
                price:
                    splitArr[1].toLocaleLowerCase() == "free"
                        ? "Free"
                        : {
                              cur: splitArr[1].slice(0, 1),
                              price: [
                                  splitArr[1].slice(1).indexOf(".") != -1
                                      ? splitArr[1].slice(1).split(".")[0]
                                      : splitArr[1].slice(1),
                                  splitArr[1].slice(1).indexOf(".") != -1
                                      ? splitArr[1].slice(1).split(".")[1]
                                      : "00"
                              ]
                          },
                text: splitArr[2]
            };
        },

        handleOver() {
            clearTimeout(this.zoomOutTimeoutId);
            this.calcZoomSize();
            if (this.delayIn === 0) {
                this.zoomShow = true;
            } else {
                this.zoomInTimeoutId = setTimeout(() => {
                    this.zoomShow = true;
                }, this.delayIn);
            }
        },
        calcZoomSize() {
            this.imgRect =
                this.$refs.img && this.$refs.img.getBoundingClientRect();
            this.maskRect =
                this.$refs.mask && this.$refs.mask.getBoundingClientRect();
            //计算大图宽高
            if (this.imgRect && this.maskRect) {
                this.zoomImgWidth =
                    (this.imgRect.width / this.maskRect.width) * this.zoomWidth;
                this.zoomImgHeight =
                    (this.imgRect.height / this.maskRect.height) *
                    this.zoomHeight;
            }
        },
        handleMove(e) {
            if (!this.imgRect || !this.maskRect) {
                return;
            }
            this.maskX = this.outXCheck(e.clientX - this.imgRect.left);
            this.maskY = this.outYCheck(e.clientY - this.imgRect.top);
            this.zoomLeft = this.imgRect.width + 10;
            //计算大图偏移量
            this.zoomPosition.x =
                this.maskX * (this.zoomImgWidth / this.imgRect.width);
            this.zoomPosition.y =
                this.maskY * (this.zoomImgHeight / this.imgRect.height);
        },
        handleOut() {
            clearTimeout(this.zoomInTimeoutId);
            if (this.delayOut === 0) {
                this.zoomShow = false;
            } else {
                this.zoomOutTimeoutId = setTimeout(() => {
                    this.zoomShow = false;
                }, this.delayOut);
            }
        },
        outXCheck(x) {
            x = x - this.maskRect.width / 2;
            if (x < 0) {
                return 0;
            }
            if (x + this.maskRect.width > this.imgRect.width) {
                return this.imgRect.width - this.maskRect.width;
            }
            return x;
        },
        outYCheck(y) {
            y = y - this.maskRect.height / 2;
            if (y < 0) {
                return 0;
            }
            if (y + this.maskRect.height > this.imgRect.height) {
                return this.imgRect.height - this.maskRect.height;
            }
            return y;
        }
    }
};
