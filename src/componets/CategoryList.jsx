import styled from "styled-components";
import { MainContainer } from "../style/styledComponentModule.";
import { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Img1 from "../asset/categoryList/Category_All.png"
import Img2 from "../asset/categoryList/Category_Love.png"
import Img3 from "../asset/categoryList/Category_Mbti.png"
import Img4 from "../asset/categoryList/Category_Money.png"
import Img5 from "../asset/categoryList/Category_Shopping.png"
import Img6 from "../asset/categoryList/Category_Work.png"
import Img7 from "../asset/categoryList/_Category_Daily.png"
import Img8 from "../asset/categoryList/_Category_Etc.png"
import Img9 from "../asset/categoryList/_Category_Food.png"
import Img10 from "../asset/categoryList/_Category_Social.png"

const CategoryList = () => { 

    return (
        <Container>
            <MainContainer>
                <Text>흥미진진한 밸런스게임 카테고리들!</Text>
                <MySwiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <MySwiperSlide>
                        <Img src={Img1}/>
                    </MySwiperSlide>
                    <MySwiperSlide>
                        <Img src={Img2}/>
                    </MySwiperSlide>
                    <MySwiperSlide>
                        <Img src={Img3}/>
                    </MySwiperSlide>
                    <MySwiperSlide>
                        <Img src={Img4}/>
                    </MySwiperSlide>
                    <MySwiperSlide>
                        <Img src={Img5}/>
                    </MySwiperSlide>
                    <MySwiperSlide>
                        <Img src={Img6}/>
                    </MySwiperSlide>
                    <MySwiperSlide>
                        <Img src={Img7}/>
                    </MySwiperSlide>
                    <MySwiperSlide>
                        <Img src={Img8}/>
                    </MySwiperSlide>
                    <MySwiperSlide>
                        <Img src={Img9}/>
                    </MySwiperSlide>
                    <MySwiperSlide>
                        <Img src={Img10}/>
                    </MySwiperSlide>
                </MySwiper>
            </MainContainer>
        </Container>
      );
}
export default CategoryList;

const Container = styled.div`
    width: 100%;
    padding: 30px;
    /* background-color: var(--saboten-gray-100); */
    text-align: center;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
`;

const Img = styled.img`
    display: block;
    width: 100%;
`;
const MySwiperSlide = styled(SwiperSlide)`
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
`;
const MySwiper = styled(Swiper)`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
`;
const Text = styled.p`
    margin-top: 70px;
    font-size: 30px;
    font-weight: 600;
    color: var(--saboten-green-500);
    @media (max-width: 720px) {
        font-size: 20px;
    }
`;