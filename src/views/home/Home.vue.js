/*
 * @Author: Jin
 * @Date: 2020-11-19 16:33:40
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-20 21:43:34
 * @FilePath: /final-assignment/src/views/home/Home.vue.js
 */
import commodityCardComponent from "@/components/commodityCard/commodityCard.vue";

export default {
    name: "Home",
    components: {
        commodityCardComponent
    },
    data: () => ({
        items: [
            {
                src: "https://s3.ax1x.com/2020/11/20/DlEUeS.png"
            },
            {
                src: "https://i.loli.net/2020/11/20/goPGXErsMfyeHKC.jpg"
            },
            {
                src: "https://i.loli.net/2020/11/20/65KcshpdMgJnE3X.jpg"
            },
            {
                src: "https://i.loli.net/2020/11/20/3d41yFYAcQ5Go2i.png"
            }
        ],
        products: [
            {
                name: "Multiverse",
                imgUrl: "https://s3.ax1x.com/2020/11/20/Dl9jxS.jpg",
                vendor: "Pixelarity",
                cat: "Test Cat",
                currency: "$",
                price: "10.99"
            },
            {
                name: "Transit",
                imgUrl: "https://s3.ax1x.com/2020/11/20/Dl9X28.jpg",
                vendor: "Pixelarity",
                cat: "Test Cat",
                currency: "$",
                price: "5.99"
            },
            {
                name: "Vortex",
                imgUrl: "https://s3.ax1x.com/2020/11/20/Dl9O8f.jpg",
                vendor: "Pixelarity",
                cat: "Test Cat",
                currency: "$",
                price: "17.99"
            }
        ]
    })
};
