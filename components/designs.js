const designs = {
    data() {
        return {
            designData: [{
                image: "imgs/blog/Design1.png",
                labelText: "Kitchen Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022"
            },
            {
                image: "imgs/blog/Design2.png",
                labelText: "Living Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "22 December, 2022"
            },
            {
                image: "imgs/blog/Design3.png",
                labelText: "Interior Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "25 December, 2022"
            },
            {
                image: "imgs/blog/Design4.png",
                labelText: "Kitchen Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022"
            },
            {
                image: "imgs/blog/Design5.png",
                labelText: "Living Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "22 December, 2022"
            },
            {
                image: "imgs/blog/Design6.png",
                labelText: "Interior Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "25 December, 2022"
            }
            ]
        };
    },
    template: `
        <div class="blog__borderBox" v-for="design in designData" :key="design.id">
                    <div class="blog__content">
                        <div class="blog__photo-box">
                            <img :src="design.image" alt="photo of design" class="blog__design">
                            <div class="blog__label">
                                <p class="blog__label-text">{{design.labelText}}</p>
                            </div>
                        </div>
                        <div class="blog__description">
                            <h3 class="blog__title">{{design.title}}</h3>
                            <footer class="blog__footer">
                                <p class="blog__date">{{design.date}}</p>
                                <a href="#"><svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></a>
                            </footer>
                        </div>
                    </div>
                </div>
    `
};