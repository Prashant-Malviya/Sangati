import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Card from "../../shared/Card";
import SmallButton from "../../shared/SmallButton";

const FriendsRequest = () => {
  return (
    <Card title="Friend Requests" divider>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center gap-2 border border-gray-100 p-3 rounded-lg">
                  <img
                    src="/images/avatar.png"
                    alt="avatar"
                    className="w-[80px] h-[80px] rounded-full object-cover"
                  />
                  <h1 className="text-base font-medium text-black">
                    Prashant Malviya
                  </h1>

                  <SmallButton type="success" icon="user-add-line">
                    Add Friend
                  </SmallButton>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Card>
  );
};

export default FriendsRequest;
